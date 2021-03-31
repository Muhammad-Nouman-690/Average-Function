let  maths = [
  { name: 'Adams', age: 16 },
  { name: 'Baker', age: 15 },
  { name: 'Clark', age: 15 },
  { name: 'Davis', age: 16 },
  { name: 'Evans', age: 14 }
];

let popularitySum = 0;
let itemsFound = 0;
const len = maths.length;
for (let i = 0; i < len; i++) {
    item = maths[i];
    console.log("item=>",item.age)
        popularitySum = item.age + popularitySum;
        itemsFound = itemsFound + 1;
}
const averagePopularity = popularitySum / itemsFound;
console.log("Average popularity:", averagePopularity);

document.write( `The average age for the Maths class is calculated correctly: ${averagePopularity === 15.2}<br />`);

let english = [
    { name: 'Frank', age: 16 },
    { name: 'Ghosh', age: 15 },
    { name: 'Hills', age: 17 },
    { name: 'Irwin', age: 17 },
    { name: 'Jones', age: 14 }
  ];

  let popularitySumO = 0;
  let itemsFoundO = 0;
  const lenO = english.length;
  for (let i = 0; i < lenO; i++) {
    item = english[i];
    console.log("item=>",item.age)
        popularitySumO = item.age + popularitySumO;
        itemsFoundO = itemsFoundO + 1;
}
const averagePopularityO = popularitySumO / itemsFoundO;
console.log("Average popularity:", averagePopularityO);

document.write( `The maximum age for the English class is calculated correctly: ${averagePopularityO === 15.8}<br />`);
