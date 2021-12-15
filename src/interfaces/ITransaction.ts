export interface ITransaction {
  /** id of the transaction */
  id: string;
  /** id of the entrance gate */
  entranceGateId: string;
  /** id of the exita gate */
  exitGateId?: string;
  /** fare value */
  fare: number;
}
