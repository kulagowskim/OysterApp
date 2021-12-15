import balanceOperations from "./func/balanceOperations.js";
import cards from "./data/cards.js";
import entranceGate from "./func/entranceGate.js";
import exitGate from "./func/exitGate.js";
import ICard from "./interfaces/ICard";
import transactions from "./data/transactions.js";

const App = () => {
  const card: ICard | undefined = cards.find(card => card.id === "1")
  balanceOperations({cardId: "1", type: "add", value: 20});
  console.log(`User 1 account recharged: ${card?.balance} £`);

  entranceGate({ cardId: "1", entranceGateId: "3" });
  exitGate({ cardId: "1", exitGateId: "4" });
  console.log(`User 1 card balance ${card?.balance} £`);
  
  entranceGate({ cardId: "1", entranceGateId: "1" });
  exitGate({ cardId: "1", exitGateId: "2" });
  console.log(`User 1 card balance ${card?.balance} £`);
  
  entranceGate({ cardId: "1", entranceGateId: "4" });
  exitGate({ cardId: "1", exitGateId: "6" });
  console.log(`User 1 card balance ${card?.balance} £`);

  entranceGate({ cardId: "1", entranceGateId: "3" });
  exitGate({ cardId: "1", exitGateId: "5" });
  console.log(`User 1 card balance ${card?.balance} £`);

  console.log("Card 1 transactions", 
    cards.find(card => card.id === "1")?.transactions.map(transaction => transactions.find(el => el.id === transaction))
  );
};

App();

export {}
