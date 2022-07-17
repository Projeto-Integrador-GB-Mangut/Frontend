import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../model/Usuario';
import { UsuarioLogin } from '../model/UsuarioLogin';
import { AlertasService } from '../service/alertas.service';
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
    private router: Router,
    private alertas: AlertasService
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
      this.alertas.showAlertInfo('Senhas diferentes. Digite novamente!')
    } else {
      this.authService.cadastrar(this.usuario).subscribe((resp: Usuario)=>{
        this.usuario = resp 
        this.router.navigate(['/login'])
        this.alertas.showAlertSuccess('Cadastro realizado com sucesso')
      })
    }
  }

}
