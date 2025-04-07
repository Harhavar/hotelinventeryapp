export interface Room{
    // id:number;
    // name:string;
    totalRooms?:number;
    availableRoom?:number;
    bookedRoom?:number;
}

export interface RoomList{
    roomNumber:number;
    roomType:string;
    amenities:string;
    price:number;
    image:string;
    checkinTime:Date;
    checkoutTime:Date;
}