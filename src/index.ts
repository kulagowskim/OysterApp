import ICard from "./interfaces/ICard";
import balanceOperations from "./func/balanceOperations.js";
import cards from "./data/cards.js";

const App = () => {
  balanceOperations({cardId: "1", type: "debit",value: 20})
  
};

App();

export {}
