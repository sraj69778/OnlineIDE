import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LanguageOptionsComponent } from './language-options/language-options.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IdeServiceService } from './services/ide-service.service';
import { CodeEditorModule } from '@ngstack/code-editor';
import { ChangeLanguage } from './pipes/changeLanguage.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LanguageOptionsComponent,
    ChangeLanguage
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CodeEditorModule.forRoot()


  ],
  providers: [IdeServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
