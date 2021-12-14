import IStation from "../interfaces/IStation";
import stations from "../data/stations";
import balanceOperations from "./balanceOperations";
import ICard from "../interfaces/ICard";
import cards from "../data/cards";
import calculateCost from "./calculateCost";

const transaction = ({ 
  cardId, 
  startStation, 
  endStation,
  vehicleType 
}: {
  cardId: string, 
  startStation: string, 
  endStation: string,
  vehicleType: string
}) => {
  const departureStation: IStation | undefined = stations.find(station => station.name === startStation && station.vehicleType === vehicleType );
  const destinationStation: IStation | undefined = stations.find(station => station.name === endStation && station.vehicleType === vehicleType );
  const card: ICard | undefined = cards.find(card => card.id === cardId);
  
  if (!departureStation || !destinationStation || !card) {
    console.log(`We cannot find station ${startStation} or card id`);
    return;
  } 

  if(vehicleType === "bus") { //check if vehicle type is equal to bus, if yes deduct 1.8£ and return
    if(card.balance < 1.8) {
      console.log("You cannot travel because your account balance is less than 1.8£");
      return;
    }
    balanceOperations({cardId: cardId, type: "debit", value: 1.8});
    return;
  } else { 
    if(card.balance < 3.2) {
      console.log("You cannot travel because your account balance is less than 3.2£");
      return;
    }
    balanceOperations({cardId: cardId, type: "debit", value: 3.20}); // debit funds from the account
    if(departureStation.zone.length === 1 && destinationStation.zone.length === 1) { // check if two zones have only one zone
      if(departureStation.zone[0] === destinationStation.zone[0]){  // if two zones have the same zones calculate cost for this zone
        calculateCost({cardId: cardId, value: [destinationStation.zone[0]]});
      } else if(departureStation.zone[0] - destinationStation.zone[0] === 1 || destinationStation.zone[0] - departureStation.zone[0] === 1 ) {
        // check if difference between two zones is equal 1
        calculateCost({cardId: cardId, value: [departureStation.zone[0], destinationStation.zone[0]]});
      } else {
        // if the difference is greater than 1 is means that we need add all zones to calculate cost
        calculateCost({cardId: cardId, value: [1, 2, 3]});
      }
    } else if(departureStation.zone.length === 2) { // check if start station have two zones 
      if(departureStation.zone.includes(destinationStation.zone[0])) {
        calculateCost({cardId: cardId, value: [destinationStation.zone[0]]});
      } else {
        calculateCost({cardId: cardId, value: [Math.max(...departureStation.zone), destinationStation.zone[0]]});
      }
    } else {
      if(destinationStation.zone.includes(departureStation.zone[0])) {
        calculateCost({cardId: cardId, value: [departureStation.zone[0]]});
      }
    }
  }
}

export default transaction;