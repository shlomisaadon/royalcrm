import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { PageHeaderComponent } from './utils/page-header/page-header.component';
import { ParagraphCapitalPipe } from './pipes/paragraph-capital.pipe';
import { ContactComponent } from './components/contact/contact.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { CustomersComponent } from './components/customers/customers.component';
import { CustomersNewComponent } from './components/customers-new/customers-new.component';
import { environment } from 'src/environments/environment';
import { CustomersEditComponent } from './components/customers-edit/customers-edit.component';
import { CustomersDetailsComponent } from './components/customers-details/customers-details.component';
import { FilterArrayOfObjectPipe } from './pipes/filter-array-of-object.pipe';
import { LoginComponent } from './components/login/login.component';
import { LogoutDirective } from './directives/logout.directive';
import { SignWithGoogleDirective } from './directives/sign-with-google.directive';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SearchByNamePipe } from './pipes/search-by-name.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    SideBarComponent,
    PageHeaderComponent,
    ParagraphCapitalPipe,
    ContactComponent,
    PageNotFoundComponent,
    CustomersComponent,
    CustomersNewComponent,
    CustomersEditComponent,
    CustomersDetailsComponent,
    FilterArrayOfObjectPipe,
    LoginComponent,
    LogoutDirective,
    SignWithGoogleDirective,
    DashboardComponent,
    SearchByNamePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
