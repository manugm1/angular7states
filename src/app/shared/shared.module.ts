import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { RouterModule } from '@angular/router';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { DataApiDb } from './data-api-db';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [NotFoundComponent],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientInMemoryWebApiModule.forRoot(DataApiDb),
    HttpClientModule
  ],
  exports: [
    NotFoundComponent,
    HttpClientModule,
  ]
})
export class SharedModule { }
