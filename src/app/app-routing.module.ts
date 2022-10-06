import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsultaLibroComponent } from './componentes/consulta-libro/consulta-libro.component';
import { ConsultarPrestamoComponent } from './componentes/consultar-prestamo/consultar-prestamo.component';
import { EditaLibroComponent } from './componentes/edita-libro/edita-libro.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { GestionLibroComponent } from './componentes/gestion-libro/gestion-libro.component';
import { ListarUsuariosComponent } from './componentes/listar-usuarios/listar-usuarios.component';
import { LoginComponent } from './componentes/login/login.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { PrestarLibroComponent } from './componentes/prestar-libro/prestar-libro.component';
import { RegistroLibroComponent } from './componentes/registro-libro/registro-libro.component';
import { RegistroUsuarioComponent } from './componentes/registro-usuario/registro-usuario.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'registroU',component:RegistroUsuarioComponent},
  {path:'navbar',component:NavbarComponent},
  {path:'footer',component:FooterComponent},
  {path:'conslibro',component:ConsultaLibroComponent},
  {path:'consprestamo',component:ConsultarPrestamoComponent},
  {path:'editalib',component:EditaLibroComponent},
  {path:'registrolib',component:RegistroLibroComponent},
  {path:'prestalib',component:PrestarLibroComponent},
  {path:'consultaus',component:ListarUsuariosComponent},
  {path:'gestionLibro',component:GestionLibroComponent},
  {path:'*',redirectTo:'',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
