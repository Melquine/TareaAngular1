import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public name: string = 'Tienda'
  public menu: Array<string> = ['Inicio', 'Productos', 'Equipo', 'Contact', 'About']

  constructor() { }

  ngOnInit(): void {
  }

}
