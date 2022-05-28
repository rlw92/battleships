const ship = function(name,length,coordinates) {
    this.sayName = () => console.log(name);
    this.name = name;
    this.length = length;
    this.coordinates = coordinates;
    this.hit = () => console.log("To be built")
    this.isSunk = () => console.log("Being built")
  };

  