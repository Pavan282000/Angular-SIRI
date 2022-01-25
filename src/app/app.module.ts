import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoverComponent } from './components/cover/cover/cover.component';
import { SurveyComponent } from './components/survey/survey/survey.component';
import { NavbarComponent } from './components/nav/navbar/navbar.component';

import { ModelComponent } from './components/model/model.component';
import { SurveyPageComponent } from './components/survey-page/survey-page.component';
import { AddModelComponent } from './components/add-model/add-model.component';

import { AdminComponent } from './components/admin/admin.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { AdminDimensionComponent } from './components/admin-dimension/admin-dimension.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { NgChartsModule } from 'ng2-charts';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngMaterComponent } from './components/ang-mater/ang-mater.component';
import { MatSliderModule } from '@angular/material/slider';
import {MatFormFieldModule} from '@angular/material/form-field';
import { GraphComponent } from './components/graph/graph.component';

@NgModule({
  declarations: [
    AppComponent,
    CoverComponent,
    SurveyComponent,
    NavbarComponent,
    ModelComponent,
     SurveyPageComponent,
     AddModelComponent,

     AdminComponent,
      AdminDimensionComponent,
      AdminDashboardComponent,
      AngMaterComponent,
      GraphComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule,
    NgChartsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatFormFieldModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
