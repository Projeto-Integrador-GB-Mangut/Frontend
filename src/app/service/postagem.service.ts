import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Postagem } from '../model/Postagem';

@Injectable({
  providedIn: 'root'
})
export class PostagemService {

  constructor(
    private http: HttpClient
  ) { }

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token)
  }

  getAllPostagem(): Observable<Postagem[]> {
    return this.http.get<Postagem[]>('https://mangut.herokuapp.com/postagens', this.token)
  }

  getByIdPostagem(id: number): Observable<Postagem> {
    return this.http.get<Postagem>(`https://mangut.herokuapp.com/postagens/${id}`, this.token)
  }

  getByTituloPostagem(titulo: string): Observable<Postagem[]> {
    return this.http.get<Postagem[]>(`https://mangut.herokuapp.com/postagens/titulo/${titulo}`, this.token)
  }

  getByTextoPostagem(texto: string): Observable<Postagem> {
    return this.http.get<Postagem>(`https://mangut.herokuapp.com/postagens/texto/${texto}`, this.token)
  }

  getByPalavaChavePostagem(palavraChave: string): Observable<Postagem> {
    return this.http.get<Postagem>(`https://mangut.herokuapp.com/postagens/palavraChave/${palavraChave}`, this.token)
  }

  postPostagem(postagem: Postagem): Observable<Postagem> {
    return this.http.post<Postagem>('https://mangut.herokuapp.com/postagens', postagem, this.token)
  }

  putPostagem(postagem: Postagem): Observable<Postagem> {
    return this.http.put<Postagem>('https://mangut.herokuapp.com/postagens', postagem, this.token)
  }

  // putPostagemCurtir(id: number): Observable<Postagem> {
  //   return this.http.put<Postagem>(`https://mangut.herokuapp.com/postagens/curtir/${id}`, this.token)
  // }

  // putPostagemDescurtir(id: number): Observable<Postagem> {
  //   return this.http.put<Postagem>(`https://mangut.herokuapp.com/postagens/curtir/${id}`, this.token)
  // }

  deletePostagem(id: number){
    return this.http.delete(`https://mangut.herokuapp.com/postagens/${id}`, this.token)
  }
}
