import { Component } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent {
show: boolean = true;
show2: boolean = true;

showMessage(): void{
  this.show2 = !this.show2; // toggle -> troca de estado     ||   !this.show -> faz o inverso que que está na variável
  // o botão faz o texto aparecer 
}

substituir():void{
  
}

}
