import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Tema } from '../model/Tema';
import { AlertasService } from '../service/alertas.service';
import { TemaService } from '../service/tema.service';

@Component({
  selector: 'app-tema',
  templateUrl: './tema.component.html',
  styleUrls: ['./tema.component.css']
})
export class TemaComponent implements OnInit {

  tema: Tema = new Tema()
  listTema: Tema[]

  constructor(
    private router: Router,
    private temaService: TemaService,
    private alertas: AlertasService,
  ) { }

  ngOnInit() {

    if(environment.token == ''){
      this.alertas.showAlertDanger('Sua sessão expirou. Faça o login novamente!')
       this.router.navigate(['/login'])
     }

    //  if(environment.tipoUsuario != "adm"){
    //   alert('Você precisa ser um adm para acessar essa rota')
    //   this.router.navigate(['/inicio'])
    //  } else {
    //   this.router.navigate(['/tema'])
    //  }

    this.findAllTema()
  }

  cadastrar(){
    this.temaService.postTema(this.tema).subscribe((resp: Tema)=>{
      this.tema = resp
      this.alertas.showAlertSuccess('O tema foi cadastrado com sucesso')
      this.findAllTema()
      this.tema = new Tema()
    })
  }

  findAllTema(){
    this.temaService.getAllTema().subscribe((resp: Tema[])=>{
      this.listTema = resp
    })
  }

}
