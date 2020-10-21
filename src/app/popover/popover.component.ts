import { PopoverController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.scss'],
})
export class PopoverComponent implements OnInit {

  constructor(public popoverController: PopoverController) { }

  ngOnInit() {}

  close(){
    this.popoverController.dismiss();
  }
}
