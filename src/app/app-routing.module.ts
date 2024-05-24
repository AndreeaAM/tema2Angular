import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModalComponent } from './features/modal/modal.component';

const routes: Routes = [
  { path: '', redirectTo: 'features', pathMatch: 'full' },
  { path: 'features', loadChildren: () => import('./features/features.module').then(m => m.FeaturesModule) },
  { path: 'modal', redirectTo: 'features/modal', pathMatch: 'full'},
  { path: 'modal', component: ModalComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
