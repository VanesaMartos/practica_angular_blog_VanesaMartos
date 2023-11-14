import { Injectable } from '@angular/core';
import { Post } from '../interfaces/post.interface';
import { POSTS } from '../components/db/posts.db';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private arrayPost: Post[];

  constructor() {
    if (localStorage.getItem('array_posts')) {
      this.arrayPost = JSON.parse(localStorage.getItem('array_posts')!);
    } else {
      this.arrayPost = POSTS;
    }
  }

  // Método para recuperar todos los objetos del array
  getAll() {
    return this.arrayPost;
  }

  // Método que permite agregar los post desde el formulario
  create(post: Post) {
    this.arrayPost.push(post);
    localStorage.setItem('array_posts', JSON.stringify(this.arrayPost));
  }

  getCategorias(): string[] {
    return [...new Set(this.arrayPost.map(item => item.categoria))];
  }

  // Método para filtrar por categoría
  getByCategoria(categoria: string) {
    return this.arrayPost.filter(item => item.categoria === categoria)
  }


}
