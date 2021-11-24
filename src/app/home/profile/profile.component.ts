import { routes } from './../../app-routing.module';
import { Router, RouterModule } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  nome = '';
  telefone = '';

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  salvar(){
    alert('Cadastrado com Sucesso');
    this.router.navigateByUrl('/home');
  }

}


