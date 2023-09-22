import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TreeComponent } from './tree/tree.component';

const routes: Routes = [
  { path: '', component: DashboardComponent }, // Default route
  { path: 'tree', component: TreeComponent }, // Route to the TreeComponent
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
