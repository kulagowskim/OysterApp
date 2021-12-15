export default interface IStation {
  /** id of the station */
  id: string,
  /** name of the station */
  name: string;
  vehicleType: "bus" | "subway";
  zone: number[];
}
