import { Tema } from "./Tema"
import { Usuario } from "./Usuario"

export class Postagem {

    public id: number
    public titulo: string
    public date: Date
    public texto: string
    public midia: string
    public curtir: number
    public palavraChave: string
    public usuario: Usuario
    public tema: Tema
}