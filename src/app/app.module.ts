import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router'; // Import RouterModule

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule], // Use RouterModule.forRoot([])
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
