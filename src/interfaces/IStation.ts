export default interface IStation {
  /** id of the station */
  id: string,
  /** name of the station */
  name: string;
  /** Type of vehicle arriving at the station (accepted bus or subway) */
  vehicleType: "bus" | "subway";
  /** Each subway should have minimum one zone */
  zone: number[];
}
