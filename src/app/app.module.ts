import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router'; // Import RouterModule
import { ModalComponent } from './features/modal/modal.component';
import { NzModalModule } from 'ng-zorro-antd/modal'; // Import NzModalModule
import { NzModalService } from 'ng-zorro-antd/modal'; // Import NzModalService

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, NzModalModule], // Use RouterModule.forRoot([])
  providers: [NzModalService],
  bootstrap: [AppComponent],
})
export class AppModule {}
