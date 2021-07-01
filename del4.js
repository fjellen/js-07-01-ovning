class House {
   constructor() {  
    this.arr = [];
   }
   addRoom(room){
    this.arr.push(room);
   };
   getAllRooms() {
       return this.arr;
   }
}

class Room {
    constructor(type){
        this.type = type;
        return type;
    }
}


var beRoom = new Room('Bedroom');
var liRoom = new Room('Living room');
var baRoom = new Room('Bath room');
const house = new House()

house.addRoom(beRoom)
house.addRoom(liRoom)
house.addRoom(baRoom)

const rooms = house.getAllRooms();

rooms.forEach(function(room){
    console.log(room);
});