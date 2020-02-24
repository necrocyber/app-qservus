import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

// Importamos la lista de componentes de Material
import { MaterialModule } from './material.module';
import { DragDropModule } from '@angular/cdk/drag-drop';

// pages
import { ListComponent } from './pages/list/list.component';
import { ListTableComponent } from './components/list-table/list-table.component';
import { CreateComponent } from './pages/create/create.component';
import { FormCompromisoComponent } from './components/form-compromiso/form-compromiso.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    ListTableComponent,
    CreateComponent,
    FormCompromisoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    DragDropModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
