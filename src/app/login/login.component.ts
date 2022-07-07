import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { UsuarioLogin } from '../model/UsuarioLogin';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuarioLogin: UsuarioLogin = new UsuarioLogin

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    window.scroll(0,0)
  }

  entrar() {
    this.authService.entrar(this.usuarioLogin).subscribe((resp: UsuarioLogin)=>{

      environment.token = this.usuarioLogin.token
      environment.id = this.usuarioLogin.id
      environment.foto = this.usuarioLogin.foto
      environment.nome = this.usuarioLogin.nome
      
      console.log(environment.foto)
      console.log(environment.id)
      console.log(environment.nome)
      console.log(environment.token)

      this.usuarioLogin = resp
      this.router.navigate(['/login'])
    }, erro =>{
      if(erro.status == 401) {
        alert('Usuário ou senha estão incorretos!')
      }
    })
  }
}