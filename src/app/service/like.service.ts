import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Postagem } from '../model/Postagem';
import { PostagemService } from './postagem.service';

@Injectable({
  providedIn: 'root'
})
export class LikeService {

  postagem: Postagem = new Postagem()
  listaPostagens: Postagem[]

  constructor(
    private router: Router,
    private postagemService: PostagemService
  ) { }

  darLike() {
    this.postagem.curtir += 1;
    this.postagemService.postPostagem(this.postagem).subscribe((resp: Postagem) => {
      this.postagem = resp;
      this.getAllPostagens();
    })
  }

  getAllPostagens(){
    this.postagemService.getAllPostagem().subscribe((resp: Postagem[]) => {
      this.listaPostagens = resp
    })
  }

}
