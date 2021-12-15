import cards from "../data/cards";
import balanceOperations from "../func/balanceOperations";
import entranceGate from "../func/entranceGate";
import exitGate from "../func/exitGate";

test('Tube Holborn to Earl’s Court', () => {
  balanceOperations({cardId: "1", type: "add",value: 20});
  const card = cards.find(card => card.id === "1");
  
  entranceGate({ cardId: "1", entranceGateId: "3" });
  exitGate({ cardId: "1", exitGateId: "4" });

  expect(card?.balance).toBe(17.5);
});

test('328 bus from Earl’s Court to Chelsea', () => {
  const card = cards.find(card => card.id === "1");
  
  entranceGate({ cardId: "1", entranceGateId: "1" });
  exitGate({ cardId: "1", exitGateId: "2" });

  expect(card?.balance).toBe(15.7);
});

test('Tube Earl’s court to Hammersmith', () => {
  const card = cards.find(card => card.id === "1");
  
  entranceGate({ cardId: "1", entranceGateId: "4" });
  exitGate({ cardId: "1", exitGateId: "6" });

  expect(card?.balance).toBe(13.7);
});
