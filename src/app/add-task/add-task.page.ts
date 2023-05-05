import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.page.html',
  styleUrls: ['./add-task.page.scss'],
})
export class AddTaskPage implements OnInit {
  categories = ['Work', 'Personal']

  taskName: any
  taskDate: any
  taskCategory: any
  taskObject: any
  completed = false;
  constructor(public modalCtrl:ModalController) { }

  ngOnInit() {
  }

 async dismiss(){
  await this.modalCtrl.dismiss(this.taskObject)
  }

  selectedCategory(index: number){
    this.taskCategory = this.categories[index]
  }

  addTask(){
    this.taskObject = ({itemName:this.taskName, 
                        itemDueDate:this.taskDate, 
                        itemCategory:this.taskCategory,
                        itemCompleted:this.completed})

      this.dismiss();
  }
  
}
