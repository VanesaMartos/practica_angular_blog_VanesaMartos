import { Component, inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Post } from 'src/app/interfaces/post.interface';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {

  nuevoPost: FormGroup;
  router = inject(Router);

  postsService = inject(PostService);

  constructor() {
    this.nuevoPost = new FormGroup({
      titulo: new FormControl(),
      texto: new FormControl(),
      autor: new FormControl(),
      imagen: new FormControl(),
      fecha: new FormControl(),
      categoria: new FormControl(),
    })
  }

  onSubmit() {
    this.postsService.create(this.nuevoPost.value);
    this.nuevoPost.reset();
    this.router.navigate(['/posts']);
  }


}
