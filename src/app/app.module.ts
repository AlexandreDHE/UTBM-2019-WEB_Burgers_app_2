import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BurgerService } from './services/burger.service';
import { AuthService } from './services/auth.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BurgerComponent } from './burger/burger.component';

import { MatListModule } from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatMenuModule } from '@angular/material/menu';

import { ApiModule } from './services';
import { HttpClientModule } from '@angular/common/http';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { BurgerViewComponent } from './burger-view/burger-view.component';

import { Routes, RouterModule } from '@angular/router';
import { BurgerDetailsViewComponent } from './burger-details-view/burger-details-view.component';
import { BurgerDetailsComponent } from './burger-details/burger-details.component';
import { IndexComponent } from './index/index.component';

const appRoutes: Routes = [
  { path: 'burgers', component: BurgerViewComponent },
  { path: 'burgers/:id', component: BurgerDetailsViewComponent },
  { path: '', component: IndexComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    BurgerComponent,
    BurgerViewComponent,
    BurgerDetailsComponent,
    BurgerDetailsViewComponent,
    IndexComponent,
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    ApiModule,
    HttpClientModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    MatListModule,
    MatExpansionModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
  ],
  providers: [BurgerService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
