import balanceOperations from "./balanceOperations";

const calculateCost = ({cardId, value}: {cardId: string, value: number[]}) => {
  switch (value.sort().toString()) {
    case [1].sort().toString():
      balanceOperations({cardId: cardId, type: "add", value: 0.7});
      break;
    case [2].sort().toString():
      balanceOperations({cardId: cardId, type: "add", value: 1.2});
      break;
    case [3].sort().toString():
      balanceOperations({cardId: cardId, type: "add", value: 1.2});
      break;
    case [1, 2].sort().toString():
      balanceOperations({cardId: cardId, type: "add", value: 0.2});
      break;
    case [2, 3].sort().toString():
      balanceOperations({cardId: cardId, type: "add", value: 0.95});
      break;
    case [1, 2, 3].sort().toString():
      break;
  
    default:
      break;
  }
}

export default calculateCost;
