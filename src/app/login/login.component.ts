import { MatIconModule } from '@angular/material/icon';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';






@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email = '';
  password = '';
  hide = true;

  constructor( private router: Router) { }


  ngOnInit(): void {
  }

// Variaveis externas do html


  entrar(){
    if(this.email == "mpaulino@brq.com" && this.password == "12345"){
      this.router.navigateByUrl('home');
    }
    else{
      alert('Verifique o e-mail ou senha');
      this.limparCampos();
    }

  }

  limparCampos(){
    this.email = '';
    this.password = '';
  }

    /*criarFormulario(){
      this.formulario = this.fb.group ({
        email: ['', Validators.required],
        senha: ['', Validators.compose([
          Validators.required
        ])],
      })
    }*/


  /*login(){
    this.authService.autenticar(this.email, this.password).subscribe(() =>{
      this.router.navigate(['home']);
    }, (error) =>{
        alert( "email ou senha inválida");
        console.log(error)
    }
    )
  }*/
}
