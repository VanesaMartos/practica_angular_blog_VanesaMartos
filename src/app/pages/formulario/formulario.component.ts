import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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
      titulo: new FormControl(null, [Validators.required]),
      texto: new FormControl(null, [Validators.required]),
      autor: new FormControl(null, [Validators.required]),
      imagen: new FormControl(),
      fecha: new FormControl(new Date()),
      categoria: new FormControl(null, [Validators.required]),
    }, [])
  }

  onSubmit() {
    this.postsService.create(this.nuevoPost.value);
    this.nuevoPost.reset();
    this.router.navigate(['/posts']);
  }
  checkError(controlName: string, errorName: string) {
    return this.nuevoPost.get(controlName)?.hasError(errorName) && this.nuevoPost.get(controlName)?.touched;
  }

}
