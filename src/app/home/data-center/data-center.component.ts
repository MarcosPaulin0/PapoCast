import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-center',
  templateUrl: './data-center.component.html',
  styleUrls: ['./data-center.component.css']
})
export class DataCenterComponent implements OnInit {

  retornaLancamentos = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  voltarLancamentos(){
    this.retornaLancamentos =true;
  }

}
