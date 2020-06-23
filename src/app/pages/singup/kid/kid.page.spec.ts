import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { KidPage } from './kid.page';

describe('KidPage', () => {
  let component: KidPage;
  let fixture: ComponentFixture<KidPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KidPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(KidPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
