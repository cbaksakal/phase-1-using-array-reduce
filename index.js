const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
const totalBatteries = batteryBatches.reduce((acc, current) => acc + current);

console.log("Total batteries: ", totalBatteries);