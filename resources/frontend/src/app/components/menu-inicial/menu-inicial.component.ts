import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-inicial',
  templateUrl: './menu-inicial.component.html',
  styleUrls: ['./menu-inicial.component.css']
})
export class MenuInicialComponent implements OnInit {

  @Input()
  Option: string = ''

  @Input()
  Id: string = ''

  constructor() { }

  ngOnInit(): void {
  }

}
