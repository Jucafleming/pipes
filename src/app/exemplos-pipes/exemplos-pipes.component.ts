import { Component } from '@angular/core';

@Component({
  selector: 'app-exemplos-pipes',
  templateUrl: './exemplos-pipes.component.html',
  styleUrls: ['./exemplos-pipes.component.css']
})
export class ExemplosPipesComponent {

  livro: any ={
    titulo: 'Entendendo Algoritmos: Um Guia Ilustrado Para Programadores e Outros Curiosos',
    rating: 4.54321,
    numeroPaginas: 314,
    preco: 44.44,
    dataLancamento: new Date(2016, 5, 23),
    url: 'https://a.co/d/ahwnBMc'
  }
  livros: string[]= ['angular2', 'java']
  filtro:string =''

  addCurso(valor: string): void{
    this.livros.push(valor)
    console.log(this.livros)
  }

  obterCursos() {

    if (this.livros.length === 0 || this.filtro === undefined
    || this.filtro.trim() === '') {
      return this.livros;
    }

    return this.livros.filter(
       v => v.toLocaleLowerCase().includes(this.filtro.toLocaleLowerCase())
    );
  }
}
