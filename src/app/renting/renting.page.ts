import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PopoverController } from '@ionic/angular';
import { PopoverComponent } from '../popover/popover.component';

@Component({
  selector: 'app-renting',
  templateUrl: './renting.page.html',
  styleUrls: ['./renting.page.scss'],
})
export class RentingPage implements OnInit {
  categories: any = "leasing";

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

  segmentChanged(ev: any) {
    this.categories = ev.detail.value;
    console.log(this.categories);
  }

  RedirectToSearchPage(){
    this.router.navigateByUrl('/search');
  }

  RedirectToProfilePage(){
    this.router.navigateByUrl('/profile');
  }

  RedirectToAddfiltersPage(){
    this.router.navigateByUrl('/add-filters');
  }

}
