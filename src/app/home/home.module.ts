import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MatMenuModule} from '@angular/material/menu';
import {MatFormFieldModule} from '@angular/material/form-field';
import { HomeRoutingModule } from './home-routing.module';
import {MatCardModule} from '@angular/material/card';

import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home.component';
import { DataCenterComponent } from './data-center/data-center.component';
import { DotNetComponent } from './dot-net/dot-net.component';
import { LinkCssComponent } from './link-css/link-css.component';
import { LinkHtmlComponent } from './link-html/link-html.component';
import { PythonComponent } from './python/python.component';
import { LinkRestComponent } from './link-rest/link-rest.component';
import { LancamentosComponent } from './lancamentos/lancamentos.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    HomeRoutingModule,
    MatCardModule,
    MatIconModule,
    MatMenuModule,
    MatFormFieldModule,

  ],
  exports: [],
  declarations: [
    HomeComponent,
    DataCenterComponent,
    DotNetComponent,
    LinkCssComponent,
    LinkHtmlComponent,
    PythonComponent,
    LinkRestComponent,
    LancamentosComponent,
    ProfileComponent,
  ],
  providers: [],
})

export class HomeModule { }


