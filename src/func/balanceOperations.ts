import ICard from "../interfaces/ICard";
import cards from "./../data/cards";

const balanceOperations = ({ cardId, type, value }: { cardId: string, type: "add" | "debit", value: number }): number | undefined => {
  const card: ICard | undefined = cards.find(card => card.id === cardId)

  if (!card) {
    console.log("We cannot find this card");
    return;
  } 
  
  if (type === "add") {
    return card.balance = card.balance + value;
  } else {
    if(value > card.balance) {
      console.log("You cannot complete this action. You do not have enough founds")
      return;
    }
    return card.balance = card.balance - value;
  }
}

export default balanceOperations;
