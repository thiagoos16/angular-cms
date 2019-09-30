import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryData } from './shared/in-memory-data';

import { AppComponent } from './app.component';
import { ProdutoListComponent } from './produtos/produto-list/produto-list.component';
import { ProdutoFormComponent } from './produtos/produto-form/produto-form.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';


import { environment } from '../environments/environment';
import { EditComponent } from './users/edit/edit.component';
import { ListComponent } from './users/list/list.component';

import { NgxMaskModule } from 'ngx-mask';
import { LoginFormComponent } from './login/form/form.component';
import { SessionComponent } from './layouts/session/session.component';
import { AuthComponent } from './layouts/auth/auth.component';

const appRoutes: Routes = [
  { 
    path: 'login',
    component: SessionComponent,
    children: [
      { 
        path: '',
        component: LoginFormComponent}
      ]
  },

  { path: '',
          redirectTo: '/login',
          pathMatch: 'full'
  },

  { 
    path: '',
    component: AuthComponent,
    children: [
        { path: 'users', component: ListComponent },

        { path: 'produtos', component: ProdutoListComponent },
        { path: 'produtos/novo', component: ProdutoFormComponent },
        { path: 'produtos/editar/:id', component: ProdutoFormComponent },

        { path: 'users/novo', component: EditComponent },
        { path: 'users/editar/:key', component: EditComponent },
    ]
  }
]

@NgModule({
  declarations: [
    AppComponent,
    ProdutoListComponent,
    ProdutoFormComponent,
    EditComponent,
    ListComponent,
    LoginFormComponent,
    SessionComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryData),
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    NgxMaskModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
