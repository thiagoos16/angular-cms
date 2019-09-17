import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Produto } from './produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  private URL = '/api/produtos'

  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<Produto[]>(this.URL);
  }

  getById(id: number) {

  }

  insert(produto: Produto) {
    return this.http.post<Produto>(this.URL, produto)
  }

  update(produto: Produto) {

  }

  remove(id: number) {

  }
}
