import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaPostComponent } from './pages/lista-post/lista-post.component';
import { FormularioComponent } from './pages/formulario/formulario.component';
import { PostCardComponent } from './components/post-card/post-card.component';
import { EditorModule } from 'primeng/editor';

@NgModule({
  declarations: [
    AppComponent,
    ListaPostComponent,
    FormularioComponent,
    PostCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    EditorModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }