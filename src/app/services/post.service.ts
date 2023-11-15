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
      this.arrayPost = [
        {
          id: 1,
          titulo: 'Drones agrícolas',
          texto: '<p>También conocidos como UAVs (vehículos aéreos no tripulados) o UAS (sistemas aéreos no tripulados), son aeronaves no tripuladas que se utilizan en la agricultura para diversas aplicaciones. Algunas de las más importantes son las siguientes:</p><h4>Mapeo y Monitoreo</h4><p><strong>Imágenes Multiespectrales:</strong> los drones agrícolas a menudo están equipados con cámaras multiespectrales que pueden capturar imágenes en diferentes longitudes de onda. Esto ayuda a evaluar la salud de los cultivos, detectar problemas como enfermedades o deficiencias nutricionales, y optimizar la gestión agrícola.</p><p><strong>Mapeo de terreno:</strong> pueden realizar levantamientos topográficos y generar mapas de elevación precisos. Esto es útil para la planificación de la irrigación, la nivelación del suelo y la gestión de recursos.</p><h4>Tratamiento de cultivos</h4><p><strong>Rociado de Cultivos:</strong> Algunos drones agrícolas están diseñados para rociar pesticidas, fertilizantes o herbicidas de manera más precisa y eficiente que los métodos tradicionales. Esto reduce la cantidad de productos químicos utilizados y minimiza el impacto ambiental.</p><p><strong>Siembra Automatizada:</strong> Algunos drones tienen la capacidad de sembrar semillas de manera automática, acelerando el proceso de siembra en áreas de difícil acceso o terrenos irregulares.</p><h4>Gestión de Ganado</h4><p><strong>Monitoreo del pastoreo:</strong> los drones también se utilizan para monitorear el pastoreo del ganado, identificar la salud del rebaño y evaluar la calidad del pasto.</p><h4>Ventajas</h4><ul><li>Los drones agrícolas pueden cubrir grandes extensiones de terreno rápidamente, proporcionando datos en tiempo real para una toma de decisiones más rápida.</li><li>Al permitir una gestión más precisa y eficiente de los recursos, los drones pueden ayudar a reducir los costos asociados con la agricultura.</li><li>La aplicación precisa de insumos agrícolas reduce el desperdicio y minimiza el impacto ambiental.</li></ul><h4>Desafíos</h4><ul><li>La regulación de los drones varía según el país y puede haber restricciones en cuanto a altitud, áreas de vuelo y otras cuestiones de seguridad.</li><li>Aunque los drones pueden ahorrar dinero a largo plazo, la inversión inicial en equipos y capacitación puede ser significativa.</li></ul><p>Los drones agrícolas continúan evolucionando y su adopción sigue creciendo en la agricultura moderna debido a los beneficios que ofrecen en términos de eficiencia y gestión sostenible de recursos.</p>',
          autor: 'Antonio López',
          imagen: 'https://www.agroptima.com/wp-content/uploads/2018/11/drones-fumigacion-agricola.png',
          fecha: new Date(),
          categoria: 'Agricultura y ganadería'
        },
        {
          id: 2,
          titulo: 'Monitoreo de salud en ganado',
          texto: '<p>La implementación de dispositivos IoT para el monitoreo de la salud en ganado ha demostrado ser beneficioso para la gestión eficiente de explotaciones ganaderas. Estos dispositivos están diseñados para recopilar datos en tiempo real sobre la salud y el bienestar de los animales, permitiendo a los ganaderos tomar decisiones informadas y rápidas para mejorar la productividad y el cuidado de su ganado.</p><p>Así, encontramos <strong>dispositivos de monitoreo</strong>, como collares, etiquetas de oído u otros sensores no invasivos que registran datos como la temperatura corporal, la frecuencia cardíaca, la actividad física y la ubicación del animal.</p><p></p>El IoT permite también la transmisión de datos, pues utilizan mecanismos de conectividad para transmitir datos a una plataforma centralizada, datos que se transmiten de manera regular para proporcionar una visión continua del estado de salud del ganado.</p><h4>Plataformas de análisis</h4><p> Gracias a algoritmos inteligentes, se procesan los datos recopilados para identificar patrones y señales de alerta temprana, lo que proporciona a los ganaderos una manera fácil de usar interfaces para monitorizar la salud de sus animales.</p><p>Algunos de los beneficios son los siguientes:</p><ul><li><strong>Detección temprana de enfermedades:</strong> identificación rápida de problemas de salud en el ganado, como enfermedades infecciosas o estrés.</li><li><strong>Optimización de la alimentación:</strong> los datos sobre la actividad física y los patrones de comportamiento ayudan a ajustar las estrategias de alimentación y manejo.</li><li><strong>Reducción de pérdidas:</strong> la detección temprana de enfermedades y el seguimiento continuo reducen las pérdidas de animales y mejoran la eficiencia de la explotación ganadera.</li><li><strong>Mejora del bienestar animal:</strong> los ganaderos pueden tomar medidas proactivas para garantizar el bienestar de los animales, como ajustar las condiciones de vida o proporcionar atención médica cuando sea necesario.</li></ul><p>Este ejemplo muestra cómo la tecnología IoT puede tener un impacto positivo en la ganadería al proporcionar a los ganaderos información valiosa para mejorar la salud y el rendimiento de su ganado.</p>',
          autor: 'María Gómez',
          imagen: 'https://a.storyblok.com/f/160385/32b0ed3f81/gps-estudio-enfermedades-bovinas.jpg',
          fecha: new Date(),
          categoria: 'Agricultura y ganadería'
        },
        {
          id: 3,
          titulo: 'Protección de vida marina',
          texto: '<p>El uso de sensores subacuáticos basados en IoT desempeña un papel crucial en el monitoreo y la protección de la vida marina, especialmente en áreas marinas protegidas y entornos delicados.</p><p>En el sistema, los <strong>sensores subacuáticos</strong> son esenciales, midiendo parámetros como la temperatura, salinidad y nivel de contaminantes para evaluar la calidad del agua. Además, las cámaras subacuáticas IoT capturan imágenes y videos que permiten un monitoreo efectivo de la biodiversidad.</p><p>Las <strong>boyas y plataformas flotantes</strong> facilitan la conectividad inalámbrica, posibilitando la transmisión de datos desde los sensores subacuáticos hasta una estación base. Además, la implementación de fuentes de energía renovable, como paneles solares, garantiza la operación continua de estos sistemas.</p><p>El <strong>sistema de alerta temprana</strong> utiliza algoritmos de análisis para detectar cambios anómalos en los datos recolectados. Estos algoritmos desencadenan alertas automáticas, notificando eventos como cambios bruscos en la calidad del agua o comportamientos inusuales de la vida marina.</p><p>Una <strong>plataforma de monitoreo centralizada</strong> proporciona una interfaz de usuario accesible para investigadores y conservacionistas. Esta plataforma permite el acceso y análisis de datos en tiempo real, junto con la capacidad de almacenar información histórica para análisis a largo plazo y seguimiento de tendencias.</p><p>Los beneficios de esta tecnología son significativos. Proporciona información en tiempo real sobre la salud y la dinámica de los ecosistemas marinos, permitiendo la identificación y protección de especies marinas en peligro de extinción. Además, facilita la detección temprana de eventos de contaminación, lo que posibilita respuestas rápidas y eficaces. A nivel científico, los datos recopilados son valiosos para investigaciones sobre la vida marina, comportamientos migratorios y cambios en los patrones climáticos marinos. Además, esta información puede utilizarse para educar al público sobre la importancia de la conservación marina y la biodiversidad.</p><p>Este ejemplo resalta la importancia de la tecnología IoT en la preservación de los ecosistemas marinos, proporcionando herramientas efectivas para la conservación y la gestión sostenible de los recursos acuáticos.</p>',
          autor: 'Andrea Nora',
          imagen: 'https://www.ecoportal.net/wp-content/uploads/2022/07/vidamarina.jpg',
          fecha: new Date(),
          categoria: 'Biodiversidad'
        }
      ];
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

  // Método para encontrar ID del post
  getById(postID: number): Post | undefined {
    return this.arrayPost.find(item => item.id === postID)
  }

}
