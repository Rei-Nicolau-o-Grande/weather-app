import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WheaterHomeComponent } from './modules/wheater/page/wheater-home/wheater-home.component';

const routes: Routes = [
  {
    path : '',
    redirectTo : 'wheater',
    pathMatch : 'full'
  },
  {
    path : 'wheater',
    component : WheaterHomeComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
