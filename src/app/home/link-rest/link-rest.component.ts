import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-link-rest',
  templateUrl: './link-rest.component.html',
  styleUrls: ['./link-rest.component.css']
})
export class LinkRestComponent implements OnInit {

  retornaLancamentos = false;

  constructor() { }

  ngOnInit(): void {
  }

  voltarLancamentos(){
    this.retornaLancamentos =true;
  }

}

