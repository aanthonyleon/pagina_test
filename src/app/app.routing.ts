import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { ComponentsComponent } from './components/components.component';
import { LandingComponent } from './examples/landing/landing.component';
import { LoginComponent } from './examples/login/login.component';
import { ProfileComponent } from './examples/profile/profile.component';
import { NucleoiconsComponent } from './components/nucleoicons/nucleoicons.component';

import { NosotrosComponent } from './examples/nosotros/nosotros.component';
import { ServiciosComponent } from './examples/servicios/servicios.component';
import { ContactoComponent } from './examples/contacto/contacto.component';
import { TableuComponent } from './examples/tableu/tableu.component';
import { PortalComponent } from './examples/portal/portal.component';
import { BlogComponent } from './examples/blog/blog.component';

const routes: Routes =[
    { path: '', redirectTo: 'index', pathMatch: 'full' },
    { path: 'index',                component: ComponentsComponent },
    { path: 'nucleoicons',          component: NucleoiconsComponent },
    { path: 'examples/landing',     component: LandingComponent },
    { path: 'examples/login',       component: LoginComponent },
    { path: 'examples/profile',     component: ProfileComponent },
    { path: 'nosotros',     component: NosotrosComponent },
    { path: 'servicios',     component: ServiciosComponent },
    { path: 'portal',     component: PortalComponent },
    { path: 'tableu',     component: TableuComponent },
    { path: 'blog',     component: BlogComponent },
    { path: 'contacto',     component: ContactoComponent },
];

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        RouterModule.forRoot(routes)
    ],
    exports: [
    ],
})
export class AppRoutingModule { }
