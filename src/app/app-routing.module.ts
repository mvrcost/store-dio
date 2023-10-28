import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FoundPageComponent } from './found-page/found-page.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:':foundpage', component: FoundPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
