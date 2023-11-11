import { Component, inject } from '@angular/core';
import { Post } from 'src/app/interfaces/post.interface';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-lista-post',
  templateUrl: './lista-post.component.html',
  styleUrls: ['./lista-post.component.css']
})
export class ListaPostComponent {

  postsRecuperados: Post[] = [];
  arrayCategorias: string[] = [];

  postsService = inject(PostService);

  ngOnInit() {
    this.postsRecuperados = this.postsService.getAll();
    this.arrayCategorias = this.postsService.getCategorias();
  }

  onChange($event: any) {
    if ($event.target.value === 'Todos') {
      this.postsRecuperados = this.postsService.getAll();
    } else {
      this.postsRecuperados = this.postsService.getByCategoria($event.target.value);
    }
  }

}
