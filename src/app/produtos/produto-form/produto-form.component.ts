import { Component, OnInit } from '@angular/core';
import { Produto } from '../shared/produto';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ProdutoService } from '../shared/produto.service';

@Component({
  selector: 'app-produto-form',
  templateUrl: './produto-form.component.html',
  styleUrls: ['./produto-form.component.css']
})
export class ProdutoFormComponent implements OnInit {
  produto: Produto
  title: string = '';

  constructor(private route: ActivatedRoute, private router: Router, private produtoService: ProdutoService) { }

  ngOnInit() {
    this.title = 'Novo produto';
    this.produto = new Produto();

    const id = this.route.snapshot.paramMap.get('id');
    console.log(id);
  }

  onSubmit() {
    let observable: Observable<Produto>;

    if (this.produto.id) {

    } else {
      observable = this.produtoService.insert(this.produto);
    }

    observable.subscribe(() => {
      this.router.navigate(['/produtos']);
    });
  }
}
