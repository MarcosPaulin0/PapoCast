import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-link-css',
  templateUrl: './link-css.component.html',
  styleUrls: ['./link-css.component.css']
})
export class LinkCssComponent implements OnInit {

  retornaLancamentos = false;

  constructor() { }

  ngOnInit(): void {
  }

  voltarLancamentos(){
    this.retornaLancamentos =true;
  }

}
