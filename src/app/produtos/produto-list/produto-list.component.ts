import { Component, OnInit } from '@angular/core';
import { Produto } from '../shared/produto';

@Component({
  selector: 'app-produto-list',
  templateUrl: './produto-list.component.html',
  styleUrls: ['./produto-list.component.css']
})
export class ProdutoListComponent implements OnInit {

  title: string = 'Produtos';
  produtos: Produto[];

  constructor() { }

  ngOnInit() {
    this.produtos = [
      { id: 1, nome: 'McFarlane Toys Voldemort', descricao: 'Action Figure Lord Voldemort', preco: 8.5 }
    ];
  }

}
