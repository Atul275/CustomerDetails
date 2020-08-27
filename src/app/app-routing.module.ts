import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './cmd/dashboard/dashboard.component';
import { ViewDetailsComponent } from './cmd/view-details/view-details.component';
import { EditComponent } from './cmd/edit/edit.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'details', component: ViewDetailsComponent },
  { path: 'edit', component: EditComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
