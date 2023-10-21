const fs = require("fs");

// Don't remove any function signature even if you didn't implement it
function getDuration(FirstIn, LastOut) {
  let [hour1, min1, temp1] = FirstIn.split(":");
  let [sec1, dt1] = temp1.split(" ");
  let [hour2, min2, temp2] = LastOut.split(":");
  let [sec2, dt2] = temp2.split(" ");
  hour1 = parseInt(hour1);
  min1 = parseInt(min1);
  sec1 = parseInt(sec1);
  hour2 = parseInt(hour2);
  min2 = parseInt(min2);
  sec2 = parseInt(sec2);
  if (dt1 == "pm") {
    hour1 += 12;
  }
  if (dt2 == "pm") {
    hour2 += 12;
  }
  let secf = sec2 - sec1;
  let minf = min2 - min1;
  let hourf = hour2 - hour1;
  if (secf < 0) {
    secf = 60 + secf;
    minf--;
  }
  if (minf < 0) {
    minf = 60 + minf;
    hourf--;
  }
  if (hourf < 10) {
    hourf = "0" + hourf;
  }
  if (minf < 10) {
    minf = "0" + minf;
  }
  if (secf < 10) {
    secf = "0" + secf;
  }
  return `${hourf}:${minf}:${secf}`;
}

function getWastedHours(FirstIn, LastOut) {
  let [hour1, min1, temp1] = FirstIn.split(":");
  let [sec1, dt1] = temp1.split(" ");
  let [hour2, min2, temp2] = LastOut.split(":");
  let [sec2, dt2] = temp2.split(" ");
  hour1 = parseInt(hour1);
  min1 = parseInt(min1);
  sec1 = parseInt(sec1);
  hour2 = parseInt(hour2);
  min2 = parseInt(min2);
  sec2 = parseInt(sec2);
  if (dt1 == "pm") {
    hour1 += 12;
  }
  if (dt2 == "pm") {
    hour2 += 12;
  }
  let wasteh1 = 0;
  let wastem1 = 0;
  let wastes1 = 0;
  if (hour1 < 7) {
    wasteh1 = 7 - hour1;
    wastem1 = 0 - min1;
    wastes1 = 0 - sec1;
    if (wastes1 < 0) {
      wastes1 = 60 + wastes1;
      wastem1--;
    }
    if (wastem1 < 0) {
      wastem1 = 60 + wastem1;
      wasteh1--;
    }
  }
  let wasteh2 = 0;
  let wastem2 = 0;
  let wastes2 = 0;
  if (hour2 > 19) {
    wasteh2 = hour2 - 19;
    wastem2 += min2;
    wastes2 += sec2;
  }
  wastehf = wasteh1 + wasteh2;
  wastemf = wastem1 + wastem2;
  wastesf = wastes1 + wastes2;
  if (wastesf >= 60) {
    wastesf = wastesf % 60;
    wastemf++;
  }
  if (wastemf >= 60) {
    wastemf = wastemf % 60;
    wastehf++;
  }

  if (wastehf < 10) {
    wastehf = "0" + wastehf;
  }
  if (wastemf < 10) {
    wastemf = "0" + wastemf;
  }
  if (wastesf < 10) {
    wastesf = "0" + wastesf;
  }
  return `${wastehf}:${wastemf}:${wastesf}`;
}

function getActualHours(Duration, WastedHours) {
  let [hour1, min1, sec1] = Duration.split(":");
  let [hour2, min2, sec2] = WastedHours.split(":");
  hour1 = parseInt(hour1);
  min1 = parseInt(min1);
  sec1 = parseInt(sec1);
  hour2 = parseInt(hour2);
  min2 = parseInt(min2);
  sec2 = parseInt(sec2);
  let secf = sec1 - sec2;
  let minf = min1 - min2;
  let hourf = hour1 - hour2;
  if (secf < 0) {
    secf = 60 + secf;
    minf--;
  }
  if (minf < 0) {
    minf = 60 + minf;
    hourf--;
  }
  if (hourf < 10) {
    hourf = "0" + hourf;
  }
  if (minf < 10) {
    minf = "0" + minf;
  }
  if (secf < 10) {
    secf = "0" + secf;
  }
  return `${hourf}:${minf}:${secf}`;
}

function isFullTime(date, actualCalulatedHours) {
  let [year, month, day] = date.split("-");
  let [hour, min, sec] = actualCalulatedHours.split(":");
  year = parseInt(year);
  month = parseInt(month);
  day = parseInt(day);
  hour = parseInt(hour);
  min = parseInt(min);
  sec = parseInt(sec);
  if (hour > 8) {
    return true;
  }
  if (hour > 7 && min >= 24) {
    return true;
  }
  if (
    (year == 2023 && month == 3 && day >= 23) ||
    (year == 2023 && month == 4 && day <= 24)
  ) {
    if (hour >= 6) {
      return true;
    }
  }
  return false;
}

function addRecord(textFile, staffObj) {
  let text = fs.readFileSync(textFile, { encoding: "utf8", flag: "r" });
  let line = text.split("\n").filter((line) => line != "");
  let component = [];
  for (let i = 1; i < line.length; i++) {
    component[i] = line[i].split(",");
  }
  for (let i = 1; i < line.length; i++) {
    if (component[i][0] == staffObj.id && component[i][2] == staffObj.date) {
      return {};
    }
  }
  let object = {
    ID: staffObj.id,
    Name: staffObj.name,
    date: staffObj.date,
    FirstIn: staffObj.firstIn,
    LastOut: staffObj.lastOut,
    Duration: getDuration(staffObj.firstIn, staffObj.lastOut),
    WastedHours: getWastedHours(staffObj.firstIn, staffObj.lastOut),
    ActualHours: getActualHours(
      getDuration(staffObj.firstIn, staffObj.lastOut),
      getWastedHours(staffObj.firstIn, staffObj.lastOut)
    ),
    FullTime: isFullTime(
      staffObj.date,
      getActualHours(
        getDuration(staffObj.firstIn, staffObj.lastOut),
        getWastedHours(staffObj.firstIn, staffObj.lastOut)
      )
    ),
    HasPermission: false,
  };
  let object_string =
    text +
    `\n${object.ID},${object.Name},${object.date},${object.FirstIn},${object.LastOut},${object.Duration},${object.WastedHours},${object.ActualHours},${object.FullTime},${object.HasPermission}`;
  fs.writeFileSync(textFile, object_string);
  return object;
}

function setPermission(textFile, staffID, staffDate, newValue) {
  let text = fs.readFileSync(textFile, { encoding: "utf8", flag: "r" });
  let line = text.split("\n").filter((line) => line != "");
  let component = [];
  for (let i = 0; i < line.length; i++) {
    component[i] = line[i].split(",");
  }
  for (let i = 1; i < line.length; i++) {
    if (component[i][0] == staffID && component[i][2] == staffDate) {
      let bool;
      if (newValue) {
        bool = "true";
      } else {
        bool = "false";
      }
      component[i][9] = bool;
    }
  }
  let components = `${component[0][0]},${component[0][1]},${component[0][2]},${component[0][3]},${component[0][4]},${component[0][5]},${component[0][6]},${component[0][7]},${component[0][8]},${component[0][9]}`;
  fs.writeFileSync(textFile, components);

  for (let i = 1; i < line.length; i++) {
    let components =
      fs.readFileSync(textFile, { encoding: "utf8", flag: "r" }) +
      `\n${component[i][0]},${component[i][1]},${component[i][2]},${component[i][3]},${component[i][4]},${component[i][5]},${component[i][6]},${component[i][7]},${component[i][8]},${component[i][9]}`;
    fs.writeFileSync(textFile, components);
  }
}

function countPermissionPerMonth(textFile, staffID, month) {
  let text = fs.readFileSync(textFile, { encoding: "utf8", flag: "r" });
  let line = text.split("\n").filter((line) => line != "");
  let component = [];
  let mth = parseInt(month);
  let count = -1;
  for (let i = 1; i < line.length; i++) {
    component[i] = line[i].split(",");
  }
  for (let i = 1; i < line.length; i++) {
    if (component[i][0] == staffID && !(count >= 0)) {
      count = 0;
    }
    if (
      component[i][0] == staffID &&
      parseInt(component[i][2].slice(5, 7)) == mth &&
      component[i][9] == "true"
    ) {
      count++;
    }
  }
  return count;
}

function getActualHoursPerMonth(textFile, staffID, month) {
  let text = fs.readFileSync(textFile, { encoding: "utf8", flag: "r" });
  let line = text.split("\n").filter((line) => line != "");
  let component = [];
  let mth = parseInt(month);
  let hour;
  let min;
  let sec;
  let hourf = 0;
  let minf = 0;
  let secf = 0;
  for (let i = 1; i < line.length; i++) {
    component[i] = line[i].split(",");
  }
  for (let i = 1; i < line.length; i++) {
    if (
      component[i][0] == staffID &&
      parseInt(component[i][2].slice(5, 7)) == mth
    ) {
      [hour, min, sec] = getActualHours(
        getDuration(component[i][3], component[i][4]),
        getWastedHours(component[i][3], component[i][4])
      ).split(":");
      hourf += parseInt(hour);
      minf += parseInt(min);
      secf += parseInt(sec);
      if (secf >= 60) {
        secf = secf % 60;
        minf++;
      }
      if (minf >= 60) {
        minf = minf % 60;
        hourf++;
      }
    }
  }
  if (hourf < 100) {
    hourf = "0" + hourf;
    if (hourf < 10) {
      hourf = "0" + hourf;
    }
  } 
  if (minf < 10) {
    minf = "0" + minf;
  }
  if (secf < 10) {
    secf = "0" + secf;
  }
  return `${hourf}:${minf}:${secf}`;
}

function getRequiredHoursPerMonth(
  textFile,
  rankFile,
  permissionCount,
  id,
  month
) {
  let text = fs.readFileSync(textFile, { encoding: "utf8", flag: "r" });
  let line = text.split("\n").filter((line) => line != "");
  let component = [];
  for (let i = 1; i < line.length; i++) {
    component[i] = line[i].split(",");
  }
}

function getNetSalaryPerMonth(id, actualHours, requiredHours, rankFile) {}

module.exports = {
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
};