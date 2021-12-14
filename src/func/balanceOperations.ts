import cards from "./../data/cards";
import ICard from "../interfaces/ICard";

const balanceOperations = ({ cardId, type, value }: { cardId: string, type: "add" | "debit", value: number }): number | undefined => {
  const card: ICard | undefined = cards.find(card => card.id === cardId);

  if (!card) {
    console.log("We cannot find this card");
    return;
  } 
  
  if (type === "add") {
    return card.balance = parseFloat((card.balance + value).toFixed(2));
  } else {
    if(value > card.balance) {
      console.log("You cannot complete this action. You do not have enough founds")
      return;
    }
    return card.balance = parseFloat((card.balance - value).toFixed(2));
  }
}

export default balanceOperations;
