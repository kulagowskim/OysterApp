export default interface IStation {
  name: string;
  vehicleType: "bus" | "subway";
  zone: number[];
}
