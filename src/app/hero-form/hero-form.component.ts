import { Component, OnInit } from '@angular/core';

import { Hero }    from '../hero';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css']
})
export class HeroFormComponent implements OnInit {

  model = new Hero(this.nombre, this.apellidos, this.fecha);

  submitted = false;

  onSubmit() { this.submitted = true; }
  get diagnostic() { return JSON.stringify(this.model); }

  const body = {nombre: this.nombre, apellidos:this.apellidos, fecha:this.fecha, secret: 'TDP*2.0.1.5*GG'};

hhttp
  .post('localhost/prueba/ws/registrar_users', body)
  .subscribe();

  // TODO: Remove this when we're done
  //get diagnostic() { return JSON.stringify(this.model); }

  
}
