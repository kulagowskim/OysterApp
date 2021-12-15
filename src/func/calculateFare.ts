import IStation from "../interfaces/IStation";
import stations from "../data/stations";
import ICard from "../interfaces/ICard";
import cards from "../data/cards";
import getFare from "./getFare";

const calculateFare = ({ 
  cardId, 
  entranceId, 
  exitId,
  vehicleType 
}: {
  cardId: string, 
  entranceId: string, 
  exitId: string,
  vehicleType: string
}) => {
  const departureStation: IStation | undefined = stations.find(station => station.id === entranceId && station.vehicleType === vehicleType );
  const destinationStation: IStation | undefined = stations.find(station => station.id === exitId && station.vehicleType === vehicleType );

  const card: ICard | undefined = cards.find(card => card.id === cardId);
  
  if (!departureStation || !destinationStation || !card) {
    console.log(`We cannot find station ${entranceId} or card id`);
    return;
  } 
  

  if(vehicleType === "bus") {
    return 1.8;
  }

  if(departureStation.zone.length === 1 && destinationStation.zone.length === 1) { // check if two zones have only one zone
    if(departureStation.zone[0] === destinationStation.zone[0]){  // if two zones have the same zones calculate cost for this zone
      return getFare([destinationStation.zone[0]]);
    } else if(departureStation.zone[0] - destinationStation.zone[0] === 1 || destinationStation.zone[0] - departureStation.zone[0] === 1 ) {
      // check if difference between two zones is equal 1
      return getFare([departureStation.zone[0], destinationStation.zone[0]]);
    } else {
      // if the difference is greater than 1 is means that we need add all zones to calculate cost
      return getFare([1, 2, 3]);
    }
  } else if(departureStation.zone.length === 2) { // check if start station have two zones 
    if(departureStation.zone.includes(destinationStation.zone[0])) {
      return getFare([destinationStation.zone[0]]);
    } else {
      return getFare([Math.max(...departureStation.zone), destinationStation.zone[0]]);
    }
  } else {
    if(destinationStation.zone.includes(departureStation.zone[0])) {
      return getFare([departureStation.zone[0]]);
    }
  }
}

export default calculateFare;