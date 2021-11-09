import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockPreviewComponent } from './stock-preview.component';

describe('StockPreviewComponent', () => {
  let component: StockPreviewComponent;
  let fixture: ComponentFixture<StockPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StockPreviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StockPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
