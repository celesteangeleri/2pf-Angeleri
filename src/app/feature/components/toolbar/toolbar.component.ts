import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  sesionActiva!: boolean;
  constructor() {
    this.sesionActiva = localStorage.getItem('sesion') ? true : false;
  }

  ngOnInit(): void {}
}
