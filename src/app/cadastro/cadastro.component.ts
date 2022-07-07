import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../model/Usuario';
import { UsuarioLogin } from '../model/UsuarioLogin';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {


  usuario: Usuario = new Usuario
  usuarioLogin: UsuarioLogin = new UsuarioLogin
  confirmSenha: string
  tipoUsuario: string

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    window.scroll(0,0)
  }

  confirmarSenha(event: any) {
    this.confirmSenha = event.target.value
  }

  tipoUser(event: any) {
    this.tipoUsuario = event.target.value
  }

  cadastrar(){

    this.usuario.tipoUsuario = this.tipoUsuario

    if(this.usuario.senha != this.confirmSenha) {
      alert('Senhas diferentes!')
    } else {
      this.authService.cadastrar(this.usuario).subscribe((resp: Usuario)=>{
        this.usuario = resp 
        this.router.navigate(['/login'])
        alert('Úsuário cadastrado com sucesso!!')
      })
    }
  }

}
