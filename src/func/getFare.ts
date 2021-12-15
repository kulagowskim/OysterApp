
const getFare = (value: number[]) => {
  switch (value.sort().toString()) {
    case "1":
      return 2.5
    case "2":
      return 2;
    case "3":
      return 2;
    case "1,2":
      return 3;
    case "2,3":
      return 2.25;
    case "1,2,3":
      return 3.20;
  }
}

export default getFare;
