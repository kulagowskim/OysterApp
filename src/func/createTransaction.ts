import balanceOperations from "./balanceOperations";

const createTransaction = ({ cardId, entranceGateId, fare }: { cardId: string, entranceGateId: string, fare: number }) => {
  const id = Math.random().toString(36).substr(2, 9);
  balanceOperations({cardId: cardId, type: "debit", value: fare});

  return {
    id,
    entranceGateId: entranceGateId,
    fare
  }
}

export default createTransaction;
