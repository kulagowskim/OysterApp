import IStation from "./IStation";

export interface ITransaction {
  id: string,
  stationId: string,
  gate: "entrance" | "exit",
  fare: number
}
