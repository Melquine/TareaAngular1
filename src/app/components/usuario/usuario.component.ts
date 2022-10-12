import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {
  usuario = {
    name: 'Melquicedec Núñez',
    edad: 17
  }

  constructor() { }

  ngOnInit(): void {
  }

  incrementarEdad(): void {
    this.usuario.edad += 1
    
  }
  decrementarEdad(): void {
    let edad = this.usuario.edad
    if(edad > 0) {
      this.usuario.edad -= 1
    }

  }

}
