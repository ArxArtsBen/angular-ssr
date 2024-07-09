import { Routes } from '@angular/router';
import {RenderComponent} from "./render/render.component";

export const routes: Routes = [
  {
    path: 'prerender',
    component: RenderComponent
  },
  {
    path: 'server-render',
    component : RenderComponent
  },
  {
    path: 'client-render',
    component: RenderComponent
  },
  {
    path: '**',
    redirectTo: 'prerender',
  }
];
