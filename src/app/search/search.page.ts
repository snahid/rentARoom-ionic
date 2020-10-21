import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PopoverController } from '@ionic/angular';
import { PopoverComponent } from '../popover/popover.component';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

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

  RedirectToRentingPage(){
    this.router.navigateByUrl('/renting');
  }


  RedirectToProfilePage(){
    this.router.navigateByUrl('/profile');
  }

  RedirectToAddfiltersPage(){
    this.router.navigateByUrl('/add-filters');
  }

}
