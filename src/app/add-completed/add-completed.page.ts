import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-add-completed',
  templateUrl: './add-completed.page.html',
  styleUrls: ['./add-completed.page.scss'],
})
export class AddCompletedPage implements OnInit {
  

  static testing: any
  constructor(public modalCtrl:ModalController) { }

  static listMethod(list: []) {
    this.testing = list
  }
  
  ngOnInit() {
  }

  async dismiss(){
    await this.modalCtrl.dismiss()
    }
}
