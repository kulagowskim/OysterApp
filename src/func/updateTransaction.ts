import transactions from "../data/transactions";
import balanceOperations from "./balanceOperations";

const updateTransaction = ({ cardId, transactionId, fare, exitGateId }: { cardId: string, transactionId: string, fare: number, exitGateId: string }) => {
  let transaction = transactions.find(transaction => transaction.id === transactionId);
  const objIndex = transactions.findIndex(transaction => transaction.id === transactionId)

  if(transaction?.fare === 3.2 && fare !== 3.2) {
    balanceOperations({cardId: cardId, type: "add" , value: 3.2 - fare})
  }

  transactions[objIndex].fare = fare;
  transactions[objIndex].exitGateId = exitGateId
}

export default updateTransaction;
