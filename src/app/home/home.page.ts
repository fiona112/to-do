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

  todoList : any  = [];
  completedTasks: any = [];

  currentDate: string;

  constructor(public modalCtrl:ModalController) {
    this.currentDate = (Date()).toString();
  }

  async addTask(){
    const modal = await this.modalCtrl.create({
      component: AddTaskPage
    })

    modal.onDidDismiss().then(newTaskObj => {
      this.todoList.push(newTaskObj.data)
      console.log(this.todoList)
    })


    return await modal.present()

  }

  added(event: any){
    console.log(event);
  }

  remove(i: number){
    this.todoList = this.todoList.filter((_: any,index: any) => index !== i );
  }

  async openComplete(){
    const modal = await this.modalCtrl.create({
      component: AddCompletedPage, 
      componentProps: {completedTasks: this.completedTasks} 
    })
    return await modal.present();
  }

  complete(i: number){
    this.completedTasks.push(this.todoList[i]);
    this.todoList = this.todoList.filter((_: any,index: any) => index !== i );
  }
  
}

