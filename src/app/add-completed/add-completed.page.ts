import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-add-completed',
  templateUrl: './add-completed.page.html',
  styleUrls: ['./add-completed.page.scss'],
})
export class AddCompletedPage implements OnInit {
  @Input() testing = '';
  @Input() completedTasks: any | null = [];

  constructor(public modalCtrl:ModalController) { }
 
  
  ngOnInit() {
  }

  async dismiss(){
    await this.modalCtrl.dismiss()
    }
}
