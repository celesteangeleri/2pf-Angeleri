import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  sesionActiva!: any;
  constructor() {
    this.sesionActiva = JSON.parse(localStorage.getItem('sesion') || '{}');
  }

  ngOnInit(): void {}
}
