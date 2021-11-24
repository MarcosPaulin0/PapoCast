import { Component, OnInit,ChangeDetectorRef } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeService } from './home.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  showComponent = false;

  constructor() { }

  ngOnInit(): void {
  }

  mostrarCard(){
    this.showComponent = true;

  }

}
