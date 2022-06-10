import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { FooterComponent } from './components/footer/footer.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BranchOfficeComponent } from './components/branch-office/branch-office.component';
import { BranchOfficesComponent } from './components/branch-offices/branch-offices.component';
import { SearchPipe } from './pipes/search.pipe';
import { ProductsBranchOfficeComponent } from './components/products-branch-office/products-branch-office.component';
import { SearchProviderPipe } from './pipes/search-provider.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    NotFoundComponent,
    FooterComponent,
    RegisterComponent,
    LoginComponent,
    BranchOfficeComponent,
    BranchOfficesComponent,
    SearchPipe,
    ProductsBranchOfficeComponent,
    SearchProviderPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
