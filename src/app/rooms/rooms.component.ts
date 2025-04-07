import { AfterViewInit, Component, DoCheck, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common'; // ✅ Import CommonModule
import { Room, RoomList } from './rooms';
import { RoomsListComponent } from "../rooms-list/rooms-list.component";
import { HeaderComponent } from "../header/header.component";

@Component({
  selector: 'hinv-rooms',
  standalone: true, // ✅ Ensure standalone component
  imports: [CommonModule, RoomsListComponent, HeaderComponent], // ✅ Import CommonModule to support Angular directives
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss'] // ✅ Corrected "styleUrl" to "styleUrls"
})
export class RoomsComponent implements OnInit, DoCheck , AfterViewInit {
  constructor() {}
 
  @ViewChild(HeaderComponent, {static : true}) headerComponent!: HeaderComponent; 

 
  ngDoCheck(): void {
    console.log('on changes is called');
  }

  ngOnInit(): void {
    console.log(this.headerComponent)
  }
  ngAfterViewInit(): void {
    console.log(this.headerComponent)
  }
  selectedRoom! : RoomList;
  hotelName = "Vardhan hotel";
  numberOfRooms =10;
  title = "Room List";



  rooms: Room = {
    totalRooms: 20,
    availableRoom: 10,
    bookedRoom: 8
  };

  roomList: RoomList[] = [
    {
      roomNumber: 10.8292,
      roomType: "dulex",
      amenities: "tv",
      price: 10,
      image: "http://",
      checkinTime: new Date(),
      checkoutTime: new Date(),
    },
    {
      roomNumber: 20.9202829,
      roomType: "double bed dulex",
      amenities: "tv,fridge",
      price: 1000,
      image: "http://",
      checkinTime: new Date(),
      checkoutTime: new Date(),
    }
  ]; 

  hideRooms = false;

  // ✅ Ensure toggle() method is defined properly
  toggle() {
    this.hideRooms = !this.hideRooms;
    this.title = "Rooms List";
    console.log("Toggle clicked. hideRooms:", this.hideRooms); // Debugging Log
  }

  selectRoom(room: RoomList){
    console.log(room);
    this.selectedRoom = room;
  }

   addRoom(){
   const room: RoomList ={
    roomNumber :2,
    roomType:'dulex',
    amenities: "tv,fridge",
      price: 1000,
      image: "http://",
      checkinTime: new Date(),
      checkoutTime: new Date(),

   }
  //  this.roomList.push(room);

  this.roomList = [...this.roomList, room];
  }
}


