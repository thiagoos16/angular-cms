import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryData implements InMemoryDbService {
  createDb() {
    let produtos = [
      { id: 1, nome: 'McFarlane Toys Voldemort', descricao: 'Action Figure Lord Voldemort', preco: 8.5 },
      { id: 2, nome: 'McFarlane Harry Potter', descricao: 'Action Figure Harry Potter', preco: 20.5 },
      { id: 3, nome: 'Neca Batman', descricao: 'Action Figure Batman 18 cm', preco: 15.00 },
      { id: 4, nome: 'Marvel legends Ghost Rider', descricao: 'Action Figure legends Ghost Rider', preco: 19.99 },
      { id: 5, nome: 'McFarlane Toys SubZero', descricao: 'Action Figure SubZero', preco: 15.99 }
    ];

    return {produtos};
  }
}
