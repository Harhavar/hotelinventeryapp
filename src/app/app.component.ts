import { AfterViewInit, Component, ViewChild, ViewContainerRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { RoomsComponent } from './rooms/rooms.component';
import { RoomsListComponent } from './rooms-list/rooms-list.component';
@Component({
  selector: 'hinv-root',
  standalone: true, // Mark the component as standalone
  imports: [CommonModule], // Use imports for standalone
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = 'hotelinventeryapp';
  role = 'Admin';

  @ViewChild('user',{read: ViewContainerRef}) vcr!: ViewContainerRef;

  ngAfterViewInit() {
    const componentRef = this.vcr.createComponent(RoomsComponent);
    componentRef.instance.numberOfRooms= 50; 
  }
}
