import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { KidSingupPage } from './kid-singup.page';

describe('KidSingupPage', () => {
  let component: KidSingupPage;
  let fixture: ComponentFixture<KidSingupPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KidSingupPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(KidSingupPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
