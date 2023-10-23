// don't remove the below code
const {
  getDuration,
  getWastedHours,
  getActualHours,
  isFullTime,
  addRecord,
  setPermission,
  countPermissionPerMonth,
  getActualHoursPerMonth,
  getRequiredHoursPerMonth,
  getNetSalaryPerMonth,
} = require("./main");
// don't remove the above code
// You need the above code to use your implemented functions from main.js
// You can test here your implemented functions from main.js
console.log(getDuration("06:55:55 am", "04:47:55 pm"));
console.log(getWastedHours("5:46:55 am", "9:47:45 pm"));
console.log(getWastedHours("6:07:55 am", "9:47:55 pm"));
console.log(
  getActualHours(
    getDuration("05:55:55 am", "04:47:45 pm"),
    getWastedHours("6:00:00 am", "7:00:00 pm")
  )
);
console.log(isFullTime("2023-4-11", "6:40:20"));
console.log(isFullTime("2023-3-22", "7:42:59"));
const fs = require("fs");
// console.log(fs.readFileSync("./staff.txt", { encoding: "utf8", flag: "r" }));
let x = fs
  .readFileSync("./staff.txt", { encoding: "utf8", flag: "r" })
  .split("\n");
console.log(x[0]);
let staffObj = {
  id: "10000367",
  name: "mohamed",
  date: "2023-06-01",
  firstIn: "06:55:55 am",
  lastOut: "04:47:55 pm ",
};
console.log(addRecord("./staff.txt", staffObj));
setPermission("./staff.txt", "10000367", "2023-06-01", true);
let s = "2023-06-01";
console.log(s.slice(5, 7));
console.log(countPermissionPerMonth("./staff.txt", "10009501", "06"));
console.log(getActualHoursPerMonth("./staff.txt", "10009501", "06"));
console.log(getRequiredHoursPerMonth("./staff.txt", "./rank.txt", 0, "10002417", 5));
console.log( "net salary is " , getNetSalaryPerMonth ("10009512","146:20:00","168: 00:00","./rank.txt") )
