import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonInput, IonItem, IonList, IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle  } from '@ionic/angular/standalone';



interface Porta {
  readonly id: number;
  premio: string
}

let portas: Porta[] = []

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonInput, IonItem, IonList, CommonModule, FormsModule, IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle ],
})
export class HomePage {

  

  constructor() {}

  portass() {

    const premio1:Porta = {
      id: 1,
    premio: 'cabra'
    }
    
    
    const premio3:Porta = {
      id: 3,
      premio: 'cabra'
    }

    const premio2:Porta = {
      id: 2,
      premio: 'carro'
    }

    portas.push(premio1, premio3, premio2)

    

  }

}