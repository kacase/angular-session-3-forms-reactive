import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
// 1. import the module here
// import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClient, HttpClientModule } from "@angular/common/http";

import { MarkdownModule } from "ngx-markdown";

import { AppComponent } from "./app.component";

@NgModule({
  imports: [
    BrowserModule,
    // 2. inject the module into our AppModule
    // FormsModule,
    // ReactiveFormsModule,
    HttpClientModule,
    MarkdownModule.forRoot({ loader: HttpClient })
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
