import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-link-html',
  templateUrl: './link-html.component.html',
  styleUrls: ['./link-html.component.css']
})
export class LinkHtmlComponent implements OnInit {

  retornaLancamentos = false;

  constructor() { }

  ngOnInit(): void {
  }

  voltarLancamentos(){
    this.retornaLancamentos =true;
  }
}
