import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dot-net',
  templateUrl: './dot-net.component.html',
  styleUrls: ['./dot-net.component.css']
})
export class DotNetComponent implements OnInit {

  retornaLancamentos = false;

  constructor() { }

  ngOnInit(): void {
  }

  voltarLancamentos(){
    this.retornaLancamentos =true;
  }

}
