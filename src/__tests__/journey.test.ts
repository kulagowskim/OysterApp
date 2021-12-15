import cards from "../data/cards";
import balanceOperations from "../func/balanceOperations";
import journey from "../func/journey";

test('Journeys tests', () => {
  balanceOperations({cardId: "1", type: "add",value: 20});
  const card = cards.find(card => card.id === "1");
  if(card){
    journey({cardId: "1", startStation: "Holborn", endStation: "Earl`s Court", vehicleType: "subway" });
    expect(card.balance).toBe(17.5);

    journey({cardId: "1", startStation: "Earl`s Court", endStation: "Chelsea", vehicleType: "bus" });
    expect(card.balance).toBe(15.7);

    journey({cardId: "1", startStation: "Earl`s Court", endStation: "Hammershirt", vehicleType: "subway" });
    expect(card.balance).toBe(13.7);

    balanceOperations({cardId: "1", type: "debit",value: 12});
    expect(card.balance).toBe(1.7);

    console.log = jest.fn();
    journey({cardId: "1", startStation: "Earl`s Court", endStation: "Hammershirt", vehicleType: "subway" });
    expect(console.log).toHaveBeenCalledWith('You cannot travel because your account balance is less than 3.2£');
    expect(card.balance).toBe(1.7);

    journey({cardId: "1", startStation: "Earl`s Court", endStation: "Chelsea", vehicleType: "bus" });
    expect(console.log).toHaveBeenCalledWith('You cannot travel because your account balance is less than 1.8£');
    expect(card.balance).toBe(1.7);
  }
});
