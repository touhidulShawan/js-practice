// Methods of a Object
let resturent = {
  name: "MR",
  guestCapacity: 85,
  guestCount: 0,

  checkAvailability: function(partySize) {
    let seatLeft = this.guestCapacity - this.guestCount;
    return partySize <= seatLeft;
  },

  seatParty: function(partySize) {
    this.guestCount += partySize;
  },

  removeParty: function(partySize) {
    this.guestCount -= partySize;
  }
};

resturent.seatParty(81);
console.log(resturent.checkAvailability(5));
resturent.removeParty(25);
console.log(resturent.checkAvailability(5));
