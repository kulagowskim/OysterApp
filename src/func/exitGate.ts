import cards from "./../data/cards";
import transactions from "../data/transactions";
import calculateFare from "./calculateFare";
import stations from "../data/stations";
import updateTransaction from "./updateTransaction";

const exitGate = ({cardId, exitGateId}: {cardId: string, exitGateId: string}) => {
  const card = cards.find(card => card.id === cardId);
  const station = stations.find(station => station.id === exitGateId);

  const lastTransactionId = card?.transactions.slice(-1)[0]
  const lastTransaction = transactions.find(transaction => transaction.id === lastTransactionId);

  if(lastTransaction && !lastTransaction?.exitGateId && station) {
    const fare = calculateFare({cardId, entranceId: exitGateId, exitId: lastTransaction.entranceGateId, vehicleType: station?.vehicleType }) || 0;

    if(lastTransactionId) {
      updateTransaction({ cardId, transactionId: lastTransactionId, fare, exitGateId });
    }
  }
}

export default exitGate;
