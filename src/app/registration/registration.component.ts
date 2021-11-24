
import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';



@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  email = '';
  password = '';
  hide = true;
  aceite = false;



  constructor(private router: Router) { }

  ngOnInit() {
  }

  aceitar(){
    this.aceite = true;
  }


    cadastrar(){
      if(this.email == '' || this.password == '' && this.aceite == false){
        alert('Preencha todos os campos');
      }
      else {
        alert('Usuário cadastrado!');
        this.router.navigate(['/login'])
      }
        this.limparCampos();
    }

    limparCampos(){
      this.email = '';
      this.password = '';

    }


}
