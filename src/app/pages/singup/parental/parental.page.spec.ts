import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ParentalPage } from './parental.page';

describe('ParentalPage', () => {
  let component: ParentalPage;
  let fixture: ComponentFixture<ParentalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParentalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ParentalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
