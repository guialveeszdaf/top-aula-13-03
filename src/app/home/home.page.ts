import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonInput, IonItem, IonList, IonButton  } from '@ionic/angular/standalone';



interface Task {
  id: number;
  nome: string;
  isFeita: boolean;
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonInput, IonItem, IonList, CommonModule, FormsModule, IonButton ],
})
export class HomePage {

  novaTask: string = ''

tasks: Task[] = []

  constructor() {}

  addTask() {

    const obj:Task = {
      id: Date.now(),
      nome: this.novaTask,
      isFeita: false
    }

    this.tasks.push(obj)
    console.log(this.tasks);
    
  }
}
