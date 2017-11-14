// A trip belongs to a driver and belongs to a passenger.
// new Trip() - initialized with an instance of driver and an instance of passenger; returns a JavaScript that has attributes id, driverId, and passengerId
// driver() - returns the driver associated with the trip
// passenger() - returns the passenger associated with the trip
//
let store = {drivers: [], passengers: [], trips: []}

let driverId = 0
class Driver {
  constructor(name, id){
    this.name = name
    this.id = ++driverId
    store.drivers.push(this)
  }
  trips(){
    return store.trips.filter((trip)=> {
      return trip.driverId == this.id
    })
  }
  passengers(){
    return this.trips().map((trip)=> {
      return trip.passenger()
    })
  }
}

let passengerId = 0

class Passenger {
  constructor(name){
    this.name = name
    this.id = ++passengerId
    store.passengers.push(this)
  }

  trips(){
    return store.trips.filter((trip)=> {
      return trip.passengerId == this.id
    })
  }
  drivers(){
    return this.trips().map((trip)=> {
      return trip.driver()
    })
  }
}

let tripId = 0
class Trip {
  constructor(driver, passenger, startingTrip, endingTrip){
    this.driverId = driverId;
    this.passengerId = passengerId;
    this.id = ++tripId
    store.trips.push(this)
  }
  driver(){
    return store.drivers.find((driver) => {
      return driver.id === this.driverId })
  }
  passenger(){
    return store.passengers.find((passenger) => {
      return passenger.id === this.passengerId })
  }
}
