import { Component } from '@angular/core';
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent }  from './app.component';
import { HeroFormComponent } from './hero-form/hero-form.component';
import { HeroFormComponent1 } from './hero-form1/hero-form1.component';
import { HeroFormComponent2 } from './hero-form2/hero-form2.component';
import { HeroFormComponent3 } from './hero-detail/hero-detail.component';
@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    HeroFormComponent
    HeroFormComponent2
    HeroFormComponent1
    HeroFormComponent3
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  directives: [HeroFormComponent3, HeroFormComponent]
})
export class AppComponent {
  title = 'Prueba';

}
