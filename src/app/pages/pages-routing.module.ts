import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Polaris2048Component } from './polaris2048/polaris2048.component';

const routes: Routes = [
  { path: '', loadChildren: './home/home.module#HomeModule' },
  {path: 'polaris2048', loadChildren: './src/app/pages/polaris2048/polaris2048.component'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule] 
})

export class PagesRoutingModule { }
