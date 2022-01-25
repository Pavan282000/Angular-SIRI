import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddModelComponent } from './components/add-model/add-model.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { AdminDimensionComponent } from './components/admin-dimension/admin-dimension.component';
import { AdminComponent } from './components/admin/admin.component';
import { CoverComponent } from './components/cover/cover/cover.component';
import { GraphComponent } from './components/graph/graph.component';
import { ModelComponent } from './components/model/model.component';
import { SurveyPageComponent } from './components/survey-page/survey-page.component';
import { SurveyComponent } from './components/survey/survey/survey.component';


const routes: Routes = [
  {path: "", component: CoverComponent},
  {path: "survey", component: SurveyPageComponent},
  {path:"model",component:ModelComponent},
  {path:"admin",component:AdminDashboardComponent},
  {path:"adminDimension",component:AdminDimensionComponent},
  {path:"addModel",component:AdminComponent},
  {path:"graph",component:GraphComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
