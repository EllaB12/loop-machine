import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoopListComponent } from './components/loop-list/loop-list.component';
import { LoopPreviewComponent } from './components/loop-preview/loop-preview.component';

@NgModule({
  declarations: [
    AppComponent,
    LoopListComponent,
    LoopPreviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
