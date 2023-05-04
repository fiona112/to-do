import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AddTaskPage } from '../add-task/add-task.page';
import { addPlatform } from '@capacitor/core';
import { AddTaskPageModule } from '../add-task/add-task.module';
import { AddCompletedPage } from '../add-completed/add-completed.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  todoList : any  = []

  public currentDate: string;

  constructor(public modalCtrl:ModalController) {
    this.currentDate = (Date()).toString();
  }

  async addTask(){
    const modal = await this.modalCtrl.create({
      component: AddTaskPage
    })

    modal.onDidDismiss().then(newTaskObj => {
      this.todoList.push(newTaskObj.data)
    })

    return await modal.present()
  }

  remove(){
    this.todoList = []
  }

  async openComplete(){
    const modal = await this.modalCtrl.create({
      component: AddCompletedPage
    })
    return await modal.present()
  }

  complete(){
    AddCompletedPage.listMethod(this.todoList)
    this.todoList = []
  }
  
}

