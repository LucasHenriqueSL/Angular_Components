import { Component } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent {
  name: string = "Teste";
  age: number = 32;
  job = "programador";
  array = ['teste1','teste2','teste3'];

  carro ={
    name: 'Polo',
    year: 2000,
  };


constructor(){}

ngOnInit():void {

}

}
