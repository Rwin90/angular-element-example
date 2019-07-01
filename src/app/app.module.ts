import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { AppComponent } from './app.component';
import { MessageComponent } from './msg.component';

@NgModule({
  declarations: [
    AppComponent,
    MessageComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [],
  entryComponents: [MessageComponent]
})
export class AppModule {
  constructor(private injector: Injector) {

   

   
  }
  ngDoBootstrap() {
    const customElement = createCustomElement(MessageComponent, { injector: this.injector });
    customElements.define('app-message', customElement);
  }
}
