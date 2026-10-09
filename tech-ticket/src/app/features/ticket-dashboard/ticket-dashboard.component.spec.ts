import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { TicketDashboardComponent } from './ticket-dashboard.component';
import { TicketService } from '../../core/services/ticket.service';

describe('TicketDashboardComponent', () => {
  let component: TicketDashboardComponent;
  let fixture: ComponentFixture<TicketDashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TicketDashboardComponent],
      providers: [TicketService, provideHttpClient(), provideHttpClientTesting()],
    });
    fixture = TestBed.createComponent(TicketDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
