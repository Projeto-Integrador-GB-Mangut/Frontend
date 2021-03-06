import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from 'src/app/model/Usuario';
import { AlertasService } from 'src/app/service/alertas.service';
import { AuthService } from 'src/app/service/auth.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-usuario-edit',
  templateUrl: './usuario-edit.component.html',
  styleUrls: ['./usuario-edit.component.css']
})
export class UsuarioEditComponent implements OnInit {

  usuario: Usuario = new Usuario()


  idUsuario: number

  confirmSenha: string
  tipoDoUsuario: string

  constructor(
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router,
    private alertas: AlertasService

  ) { }

  ngOnInit() {

    window.scroll(0, 0)

    if (environment.token == '') {
      this.alertas.showAlertInfo('Sua sessão expirou. Faça o login novamente!')
      this.router.navigate(['/login'])
    }

    this.idUsuario = this.route.snapshot.params['id']

    this.findByIdUsuario(this.idUsuario)

  }

  confirmarSenha(event: any) {
    this.confirmSenha = event.target.value
  }

  tipoUsuario(event: any) {
    this.tipoDoUsuario = event.target.value
  }

  atualizar() {
    this.usuario.tipoUsuario = this.tipoDoUsuario

    if (this.usuario.senha != this.confirmSenha) {
      this.alertas.showAlertInfo('As senhas não coincidem. Digite corretamente!')
    } else {
      this.authService.atualizarUsuario(this.usuario).subscribe((resp: Usuario) => {
        this.usuario = resp
        this.alertas.showAlertSuccess('Atualização realizada com sucesso! Faça login novamente')
        environment.token = ''
        environment.nome = ''
        environment.foto = ''
        environment.id = 0
        this.router.navigate(['/login'])
      }, erro => {
        if (erro.status == 401) {
          this.alertas.showAlertInfo('Não foi possível fazer a edição, revise os dados!')
        }
      })
    }
  }

  findByIdUsuario(id: number) {

    this.authService.getByIdUsuario(id).subscribe((resp: Usuario) => {
      this.usuario = resp
    })
  }


}