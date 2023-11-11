import { Injectable } from '@angular/core';
import { Post } from '../interfaces/post.interface';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private arrayPost: Post[];

  constructor() {
    this.arrayPost = [{
      titulo: 'Drones agrícolas',
      texto: 'Los drones agrícolas, también conocidos como UAV (vehículos aéreos no tripulados) o UAS (sistemas aéreos no tripulados), son aeronaves no tripuladas que se utilizan en la agricultura para diversas aplicaciones.',
      autor: 'Antonio López',
      imagen: 'https://www.agroptima.com/wp-content/uploads/2018/11/drones-fumigacion-agricola.png',
      fecha: new Date(),
      categoria: 'Agricultura'
    },
    {
      titulo: 'Monitoreo de salud en ganado:',
      texto: 'La implementación de dispositivos IoT para el monitoreo de la salud en ganado ha demostrado ser beneficioso para la gestión eficiente de explotaciones ganaderas. Estos dispositivos están diseñados para recopilar datos en tiempo real sobre la salud y el bienestar de los animales, permitiendo a los ganaderos tomar decisiones informadas y rápidas para mejorar la productividad y el cuidado del ganado.',
      autor: 'María Gómez',
      imagen: 'https://a.storyblok.com/f/160385/32b0ed3f81/gps-estudio-enfermedades-bovinas.jpg',
      fecha: new Date(),
      categoria: 'Ganadería'
    },
    {
      titulo: 'Protección de vida marina',
      texto: 'El uso de sensores subacuáticos basados en IoT es crucial para el monitoreo y la protección de la vida marina, especialmente en áreas marinas protegidas y entornos delicados.',
      autor: 'Andrea Nora',
      imagen: 'https://imagenes.elpais.com/resizer/iY4mdKqFoD_O9iq7qwNVEHypyUk=/1200x0/cloudfront-eu-central-1.images.arcpublishing.com/prisa/O3BL5YFJ5FFF3ADKTZZK24DBBQ.jpg',
      fecha: new Date(),
      categoria: 'Biodiversidad'
    }];
  }

  // Método para recuperar todos los objetos del array
  getAll() {
    return this.arrayPost;
  }

  // Método que permite agregar los post desde el formulario
  create(post: Post) {
    this.arrayPost.push(post)
  }

  getCategorias(): string[] {
    return [...new Set(this.arrayPost.map(item => item.categoria))];
  }

  // Método para filtrar por categoría
  getByCategoria(categoria: string) {
    return this.arrayPost.filter(item => item.categoria === categoria)
  }


}
