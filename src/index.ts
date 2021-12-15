import balanceOperations from "./func/balanceOperations.js";
import cards from "./data/cards.js";
import journey from "./func/journey";
import ICard from "./interfaces/ICard";

const App = () => {
  const card: ICard | undefined = cards.find(card => card.id === "1")
  balanceOperations({cardId: "1", type: "add", value: 20});
  console.log("Account recharged: ", card?.balance);

  journey({cardId: "1", startStation: "Holborn", endStation: "Earl`s Court", vehicleType: "subway" })
  console.log("Start station: Holborn, End station: Earl`s Court, balance ", card?.balance);

  journey({cardId: "1", startStation: "Earl`s Court", endStation: "Chelsea", vehicleType: "bus" })
  console.log("Start station: Earl`s Court Bus, End station: Chelsea Bus, balance ", card?.balance);

  journey({cardId: "1", startStation: "Earl`s Court", endStation: "Hammershirt", vehicleType: "subway" })
  console.log("Start station: Earl`s Court Bus, End station: Hammershirt, balance ", card?.balance);
};

App();

export {}
