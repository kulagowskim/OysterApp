import createTransaction from "./createTransaction";
import cards from "./../data/cards";
import { ITransaction } from "../interfaces/ITransaction";
import transactions from "../data/transactions";
import stations from "../data/stations";

const entranceGate = ({ cardId, entranceGateId }: { cardId: string, entranceGateId: string }) => {
  const card = cards.find(card => card.id === cardId);

  const station = stations.find(station => station.id === entranceGateId);
  let fare = 0

  if(station?.vehicleType === "bus" ) {
    fare = 1.8;
    if(card && card.balance < fare) {
      console.log("You cannot travel because your account balance is less than 1.8£");
      return;
    }
  } else {
    fare = 3.2;
    if(card && card?.balance < 3.2) {
      console.log("You cannot travel because your account balance is less than 3.2£");
      return;
    }
  }
  
  const transaction: ITransaction = createTransaction({ cardId, entranceGateId, fare });

  transactions.push(transaction);
  card?.transactions.push(transaction.id);
}

export default entranceGate;
