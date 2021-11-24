import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-python',
  templateUrl: './python.component.html',
  styleUrls: ['./python.component.css']
})
export class PythonComponent implements OnInit {

  retornaLancamentos = false;

  constructor() { }

  ngOnInit(): void {
  }

  voltarLancamentos(){
    this.retornaLancamentos =true;
  }

}
