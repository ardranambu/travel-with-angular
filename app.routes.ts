import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Contactpage } from './navbar/pages/contactpage/contactpage';
import { Booknowpage } from './navbar/pages/booknowpage/booknowpage';

export const routes: Routes = [
{
    path:"",
    component:Home,
},
{
    path:"Contact",
    component:Contactpage,
},
{
    path:"BookNow",
    component:Booknowpage,
}
];