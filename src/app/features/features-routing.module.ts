import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeaturesComponent } from './features.component';
import { TableComponent } from './table/table.component';
import { ModalComponent } from './modal/modal.component';

const routes: Routes = [
  { path: '', component: TableComponent },
  { path: 'features/modal', component: ModalComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeaturesRoutingModule { }
