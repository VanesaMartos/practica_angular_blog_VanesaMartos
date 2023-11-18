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
    const postsIds = this.arrayPost.map(post => post.id);
    const lastId = postsIds.sort((a, b) => b - a)[0];
    post.id = lastId + 1;

    this.arrayPost.push(post);
    localStorage.setItem('array_posts', JSON.stringify(this.arrayPost));
    console.log(this.arrayPost);
  }

  getCategorias(): string[] {
    return [...new Set(this.arrayPost.map(post => post.categoria))];
  }

  // Método para filtrar por categoría
  getByCategoria(categoria: string) {
    return this.arrayPost.filter(post => post.categoria === categoria)
  }

  // Método para encontrar ID del post
  getById(postId: number): Post | undefined {
    return this.arrayPost.find(post => post.id === postId)
  }

}
