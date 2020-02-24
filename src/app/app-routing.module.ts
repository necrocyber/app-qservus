import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import pages
import { ListComponent } from './pages/list/list.component';
import { CreateComponent } from './pages/create/create.component';


const routes: Routes = [
  { path: '', component: ListComponent },
  { path: 'create', component: CreateComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
