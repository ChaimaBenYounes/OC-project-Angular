import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppareilComponent } from './appareil/appareil.component';
import { AppareilService } from './../services/appareil.service';
import { AuthService } from './../services/auth.service';
import { AppareilViewComponent } from './appareil-view/appareil-view.component';
import { AuthComponent } from './auth/auth.component';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
  { path: 'appareils', component: AppareilViewComponent },
  { path: 'auth', component: AuthComponent },
  { path: '', component: AppareilViewComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    AppareilComponent,
    AppareilViewComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [AppareilService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
