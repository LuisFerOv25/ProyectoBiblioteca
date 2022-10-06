import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './componentes/login/login.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { RegistroUsuarioComponent } from './componentes/registro-usuario/registro-usuario.component';
import { RegistroLibroComponent } from './componentes/registro-libro/registro-libro.component';
import { ConsultaLibroComponent } from './componentes/consulta-libro/consulta-libro.component';
import { EditaLibroComponent } from './componentes/edita-libro/edita-libro.component';
import { PrestarLibroComponent } from './componentes/prestar-libro/prestar-libro.component';
import { ConsultarPrestamoComponent } from './componentes/consultar-prestamo/consultar-prestamo.component';
import { ListarUsuariosComponent } from './componentes/listar-usuarios/listar-usuarios.component';
import { GestionLibroComponent } from './componentes/gestion-libro/gestion-libro.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    FooterComponent,
    RegistroUsuarioComponent,
    RegistroLibroComponent,
    ConsultaLibroComponent,
    EditaLibroComponent,
    PrestarLibroComponent,
    ConsultarPrestamoComponent,
    ListarUsuariosComponent,
    GestionLibroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
