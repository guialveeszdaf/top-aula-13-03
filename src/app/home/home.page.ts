import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonInput, IonItem, IonList, IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle  } from '@ionic/angular/standalone';



interface Porta {
  readonly id: number;
  premio: string
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonInput, IonItem, IonList, CommonModule, FormsModule, IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle ],
})
export class HomePage {

  portas: Porta[] = []

  constructor() {}

  porta1() {

    const premio1:Porta = {
      id: 1,
    premio: 'cabra'
    }

    this.portas.push(premio1)
    console.log(this.porta1);
    
  }

  porta2() {

    const premio2:Porta = {
      id: 2,
      premio: 'carro'
    }
  }

  porta3() {

    const premio3:Porta = {
      id: 3,
      premio: 'cabra'
    }
  }
}

