interface Mountain {
  name: string;
  height: number;
}

const mountains: Mountain[] = [
  { name: "Kilimanjaro", height: 19341 },
  { name: "Everest", height: 29029 },
  { name: "Denali", height: 20310 },
];

export function findNameOfTallestMountain(mountains: Mountain[]): string {
  // let height = mountains[0].height;
  let highestMountian: Mountain = mountains[0];

  mountains.forEach((element) => {
    if (element.height > highestMountian.height) {
      // return element.name;
      highestMountian = element;
    }
  });
  return highestMountian.name;
}
// console.log(findNameOfTallestMountain(mountains));
