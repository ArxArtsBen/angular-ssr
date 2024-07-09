import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import {
  Component,
  PLATFORM_ID,
  TransferState,
  inject,
  makeStateKey,
} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-render',
  standalone: true,
  imports: [],
  templateUrl: './render.component.html',
  styleUrl: './render.component.scss'
})
export class RenderComponent {
  title = '';
  platformId = inject(PLATFORM_ID);
  transferState = inject(TransferState);

  browserTime?: string;
  serverTime?: string;

  constructor(private router: Router) {
    this.title = this.router.url;
  }

  ngOnInit() {
    const serverTimeStateKey = makeStateKey<string>('serverTime');

    if (isPlatformBrowser(this.platformId)) {
      // set the browser time now and every second after
      this.setBrowserTime();
      setInterval(() => this.setBrowserTime(), 1000);

      // set the serverTime from transfer state
      this.serverTime = this.transferState.get(
        serverTimeStateKey,
        "I don't know, I wasn't generated on the server."
      );
    } else if (isPlatformServer(this.platformId)) {
      // set the serverTime and put in transfer state for the browser to read
      this.serverTime = new Date().toLocaleTimeString('en-US');
      this.transferState.set(serverTimeStateKey, this.serverTime);

      console.log('I am being rendered on the server');
    }
  }

  setBrowserTime() {
    this.browserTime = new Date().toLocaleTimeString('en-US');
  }
}
