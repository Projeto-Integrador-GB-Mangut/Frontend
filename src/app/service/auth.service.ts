import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UsuarioLogin } from '../model/UsuarioLogin';
import { Observable } from 'rxjs';
import { Usuario } from '../model/Usuario';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token)
  }

  entrar(usuarioLogin: UsuarioLogin): Observable<UsuarioLogin> {
    return this.http.post<UsuarioLogin>('https://mangut.herokuapp.com/usuarios/logar', usuarioLogin)
  }

  cadastrar(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>('https://mangut.herokuapp.com/usuarios/cadastrar', usuario)
  }

  getByIdUsuario(id: number): Observable<Usuario> {
    return this.http.get<Usuario>(`https://mangut.herokuapp.com/usuarios/${id}`, this.token)
  }

  getByEmailUsuario(usuario: string): Observable<Usuario> {
    return this.http.get<Usuario>(`https://mangut.herokuapp.com/usuarios/email/${usuario}`, this.token)
  }

  getAllUsuarios(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>('https://mangut.herokuapp.com/usuarios/all', this.token)
  }

  atualizarUsuario(usuario: Usuario): Observable<Usuario> {
    return this.http.put<Usuario>('https://mangut.herokuapp.com/usuarios/atualizar', usuario)
  }

  logado() {
    let ok: boolean = false

    if (environment.token != '') {
      ok = true
    }
    return ok
  }

  deslogado() {
    let ok: boolean = false

    if (environment.token == '') {
      ok = true
    }
    return ok
  }

adm() {
  let ok: boolean = false

    if (environment.tipoUsuario == 'Admin') {
      ok = true
    }
    return ok 
}

}


