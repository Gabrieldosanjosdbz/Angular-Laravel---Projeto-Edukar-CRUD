import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sucesso',
  templateUrl: './sucesso.component.html',
  styleUrls: ['./sucesso.component.css']
})
export class SucessoComponent implements OnInit {

  @Input()
  variavel: string = ''

  constructor() { }

  ngOnInit(): void {
  }

}
