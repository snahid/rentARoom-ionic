import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PopoverController } from '@ionic/angular';
import { PopoverComponent } from '../popover/popover.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  constructor(public router:Router,public popoverController: PopoverController) { }

  ngOnInit() {
  }
  async popclick(eve){
    const popover = await this.popoverController.create({
      component: PopoverComponent,
      componentProps: {},
      event: eve,
      translucent: true,
      cssClass: 'popOver'
    });
    return await popover.present();
  }


  RedirectToSearchPage(){
    this.router.navigateByUrl('/search');
  }

  RedirectToRentingPage(){
    this.router.navigateByUrl('/renting');
  }

}
