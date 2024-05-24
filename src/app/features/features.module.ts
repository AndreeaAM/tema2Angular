import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeaturesRoutingModule } from './features-routing.module';
import { FeaturesComponent } from './features.component';
import { TableComponent } from './table/table.component';
import { ModalComponent } from './modal/modal.component';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    FeaturesComponent,
    TableComponent,
    ModalComponent
  ],
  imports: [
    CommonModule,
    FeaturesRoutingModule,
    NzTableModule,
    NzModalModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      { path: '', component: FeaturesComponent },
      { path: 'table', component: TableComponent },
      { path: 'modal', component: ModalComponent },

    ])
  ],
  exports: [
    FeaturesComponent,
    TableComponent,
    ModalComponent
  ]
})
export class FeaturesModule { }
