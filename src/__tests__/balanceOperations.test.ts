import balanceOperations from "../func/balanceOperations";
import cards from "../data/cards";

test('add 20£ to balance card 1', () => {
  balanceOperations({cardId: "1", type: "add",value: 20});
  const card = cards.find(card => card.id === "1");

  if(card){
    expect(card.balance).toBe(20);
  }
});

test('Test if balance is less than value', () => {
  console.log = jest.fn();
  balanceOperations({cardId: "1", type: "debit",value: 30});
  expect(console.log).toHaveBeenCalledWith('You cannot complete this action. You do not have enough founds');
});

test('Test if error when you pass wrong id', () => {
  console.log = jest.fn();
  balanceOperations({cardId: "2", type: "add", value: 20});
  expect(console.log).toHaveBeenCalledWith('We cannot find this card');
});
