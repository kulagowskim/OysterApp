import IStation from "./../interfaces/IStation"

const station: IStation[] = [{
  name: "Earl`s Court",
  vehicleType: "bus",
  zone: []
}, {
  name: "Chelsea",
  vehicleType: "bus",
  zone: []
}, {
  name: "Holborn",
  vehicleType: "subway",
  zone: [1]
}, {
  name: "Earl`s Court",
  vehicleType: "subway",
  zone: [1, 2]
}, {
  name: "Wimbledon",
  vehicleType: "subway",
  zone: [3]
}, {
  name: "Hammershirt",
  vehicleType: "subway",
  zone: [2]
}];

export default station;
