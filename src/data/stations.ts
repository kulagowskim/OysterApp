import IStation from "./../interfaces/IStation"

const stations: IStation[] = [{
  id: "1",
  name: "Earl`s Court",
  vehicleType: "bus",
  zone: []
}, {
  id: "2",
  name: "Chelsea",
  vehicleType: "bus",
  zone: []
}, {
  id: "3",
  name: "Holborn",
  vehicleType: "subway",
  zone: [1]
}, {
  id: "4",
  name: "Earl`s Court",
  vehicleType: "subway",
  zone: [1, 2]
}, {
  id: "5",
  name: "Wimbledon",
  vehicleType: "subway",
  zone: [3]
}, {
  id: "6",
  name: "Hammershirt",
  vehicleType: "subway",
  zone: [2]
}];

export default station;
