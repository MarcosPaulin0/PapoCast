import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { ProfileComponent } from './profile/profile.component';
import { LancamentosComponent } from './lancamentos/lancamentos.component';
import { HomeComponent } from './home.component';
import { LinkRestComponent } from './link-rest/link-rest.component';
import { LinkHtmlComponent } from './link-html/link-html.component';
import { LinkCssComponent } from './link-css/link-css.component';
import { PythonComponent } from './python/python.component';
import { DotNetComponent } from './dot-net/dot-net.component';
import { DataCenterComponent } from './data-center/data-center.component';



export const homeRoutes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent, children:[
    {path: 'lancamentos', component: LancamentosComponent},
    {path: 'dataCenter', component:DataCenterComponent},
    {path: 'dotNet', component:DotNetComponent},
    {path: 'python', component: PythonComponent},
    {path: 'css', component: LinkCssComponent},
    {path: 'html', component: LinkHtmlComponent},
    {path: 'rest', component: LinkRestComponent},
    {path: 'profile', component: ProfileComponent},
  ]},

];

@NgModule({
  imports: [RouterModule.forChild(homeRoutes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
