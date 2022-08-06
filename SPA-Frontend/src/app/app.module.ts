import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './modulos/login/login/login.component';
import { AuthService } from './servicios/auth/auth.service';
import { MainComponent } from './modulos/main/main.component';
import { BienvenidoComponent } from './modulos/main/bienvenido/bienvenido.component';
import { authInterceptorProviders } from './servicios/auth/auth.interceptor';
import { LoggedGuard } from './servicios/auth/guards/logged.guard';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainComponent,
    BienvenidoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatButtonModule,
    MatGridListModule,
    MatInputModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatProgressSpinnerModule,
  ],
  providers: [
    AuthService,
    authInterceptorProviders,
    LoggedGuard,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
