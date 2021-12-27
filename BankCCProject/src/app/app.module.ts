import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { JwtModule } from '@auth0/angular-jwt';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RegisterService } from './service/register.service';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { FileuploadComponent } from './fileupload/fileupload.component';
import { DisplaychartService } from './service/displaychart.service';
import { ChartComponent } from './chart/chart.component';
import { NgChartsModule } from 'ng2-charts';



export function tokenGet() {
  return localStorage.getItem("jwt");
}

const routes: Routes = [
];

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    FileuploadComponent,
    ChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    NgChartsModule,
    ToastrModule.forRoot(),
    RouterModule.forRoot(routes),
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGet,
        allowedDomains: ["*"],
        disallowedRoutes: []
      }
    })
  ],
  providers: [RegisterService, DisplaychartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
