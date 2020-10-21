import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddFiltersPage } from './add-filters.page';

describe('AddFiltersPage', () => {
  let component: AddFiltersPage;
  let fixture: ComponentFixture<AddFiltersPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddFiltersPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddFiltersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
