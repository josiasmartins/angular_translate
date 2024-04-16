import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'home' },
    { 
        path: "home", 
        loadComponent: () => import("./pages/home/home.component").then(c => c.HomeComponent) 
    },
    {
        path: "**",
        loadComponent: () => import("./pages/not_found/not_found.component").then(c => c.NotFoundComponent)
    }
];
