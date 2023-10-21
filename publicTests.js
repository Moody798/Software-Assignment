var assert = require('chai').assert
var lodash = require('./lodash')
const fileSys = require('fs');

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
    getNetSalaryPerMonth
  } = require("./main");


// done 
function isIdenticalObject(Obj1 , Obj2){
  const idFlag = Obj1.id === Obj2.id;
  const nameFlag = Obj1.name === Obj2.name;
  const dateFlag = Obj1.date === Obj2.date;
  const firstInFlag = Obj1.firstIn === Obj2.firstIn;
  const lastOutFlag = Obj1.lastOut === Obj2.lastOut;
  const durationFlag = equalFormat(Obj1.duration , Obj2.duration);
  const wastedHoursFlag = equalFormat(Obj1.wastedHours , Obj2.wastedHours);
  const actualHoursFlag = equalFormat(Obj1.actualHours , Obj2.actualHours);
  const fullTime = Obj1.fullTime === Obj2.fullTime;
  const hasPermission = Obj1.hasPermission === Obj2.hasPermission;
  const isObjLenFlag = Object.keys(Obj1).length === Object.keys(Obj2).length;
  return idFlag && nameFlag && dateFlag && firstInFlag && lastOutFlag 
  && durationFlag && wastedHoursFlag && actualHoursFlag && fullTime && hasPermission
  && isObjLenFlag;
} 

function equalFormat(x,y){
  try{
    const [xh,xm,xs] = x.split(":").map( item => parseInt(item) );
    const [yh,ym,ys] = y.split(":").map( item => parseInt(item) ); 
    return xh == yh && xm == ym && xs == ys;
  }catch(err){
    console.log(err.message);
    console.log(" .split is applied on strings only and your output is", x);
  }

}


function readFile(textFile){

  let data = fileSys.readFileSync(textFile, {encoding:'utf8', flag:'r'});
  data = data.split("\n");
  return data;

}

//done
function getDurationTestCases(){
  
  try{
      FirstIn = "7:32:26 am";
      LastOut = "7:26:46 pm";
      expectedOutput = "11:54:20";
      duration = getDuration(FirstIn, LastOut);
      assert.typeOf(duration, 'string',"getDuration should return string");
      let eq = equalFormat(duration,expectedOutput)
      assert.equal(eq, true, `expected duration ${expectedOutput} however your result is ${duration} \n`);
      console.log("getDuration test case 1 passed");
      totalPoints+=5;
  }catch(err){
      console.log("getDuration test case 1 failed","\n",err.message);
  }

  try{
      FirstIn = "6:32:26 am";
      LastOut = "7:26:20 pm";
      expectedOutput = "12:53:54";
      duration = getDuration(FirstIn, LastOut);
      assert.typeOf(duration, 'string',"getDuration should return string");
      eq = equalFormat(duration,expectedOutput)
      assert.equal(eq, true, `expected duration ${expectedOutput} however your result is ${duration} \n`);
      console.log("getDuration test case 2 passed");
      totalPoints+=5;
  }catch(err){
      console.log("getDuration test case 2 failed","\n",err.message);
  }
  console.log(`points so far ${totalPoints} out of 120`)
}

//done
function getWastedHoursTestCases(){
  try{
      FirstIn = "7:32:26 am";
      LastOut = "7:26:46 pm";
      duration = getWastedHours(FirstIn, LastOut);
      result = equalFormat(duration , '0:26:46');        
      assert.typeOf(duration, 'string',"getWastedHours should return string");
      assert.equal(result, true, `expected WastedHours 0:26:46 however your result is ${duration} \n`);
      console.log("getWastedHours test case 1 passed");
      totalPoints+=3;
  }catch(err){
      console.log("getWastedHours test case 1 failed","\n",err.message);
  }
  try{
      FirstIn = "6:32:26 am";
      LastOut = "7:26:20 pm";
      duration = getWastedHours(FirstIn, LastOut);
      result = equalFormat(duration , '0:53:54');        
      assert.typeOf(duration, 'string',"getWastedHours should return string");
      assert.equal(result, true, `expected WastedHours 0:53:54 however your result is ${duration} \n`);
      console.log("getWastedHours test case 2 passed");
      totalPoints+=4;
  }catch(err){
      console.log("getWastedHours test case 2 failed","\n",err.message);
  }
  try{
      FirstIn = "6:32:26 am";
      LastOut = "5:26:20 pm";
      duration = getWastedHours(FirstIn, LastOut);
      result = equalFormat(duration , '0:27:34');        
      assert.typeOf(duration, 'string',"getWastedHours should return string");
      assert.equal(result, true, `expected WastedHours 0:27:34 however your result is ${duration} \n`);
      console.log("getWastedHours test case 3 passed");
      totalPoints+=3;
  }catch(err){
      console.log("getWastedHours test case 3 failed","\n",err.message);
  }
  console.log(`points so far ${totalPoints} out of 120`)
}

// done
function getActualHoursTestCases(){

  try{
      duration = "12:00:00";
      wastedHours = "00:32:26";
      actualHours = getActualHours(duration, wastedHours);
      result = equalFormat(actualHours , '11:27:34');
      assert.typeOf(duration, 'string',"getActualHours should return string");
      assert.equal(result, true, `expected ActualHours 11:27:34 however your result is ${actualHours} \n`);
      console.log("getActualHours test case 1 passed");
      totalPoints+=5;
  }catch(err){
      console.log("getActualHours test case 1 failed","\n",err.message);
  }

  try{
      duration = "12:30:50";
      wastedHours = "00:30:50";
      actualHours = getActualHours(duration, wastedHours);
      result = equalFormat(actualHours , '12:0:0');
      assert.typeOf(duration, 'string',"getActualHours should return string");
      assert.equal(result, true, `expected ActualHours 12:0:0 however your result is ${actualHours} \n`);
      console.log("getActualHours test case 2 passed");
      totalPoints+=5;
  }catch(err){
      console.log("getActualHours test case 2 failed","\n",err.message);
  }
  console.log(`points so far ${totalPoints} out of 120`)
}

//done
function isFullTimeTestCases(){

  funcName = "isFullTime";
  try{
      actualHours = "9:30:12";
      date = '2023-04-11';
      actualOutput = true;
      message = `actualHours ${actualHours} and date ${date} \n`;
      result = isFullTime(date , actualHours);
      assert.typeOf(result, 'boolean',`${funcName} should return boolean`);
      assert.equal(result, actualOutput, message + `expected ${funcName} ${actualOutput} however your result is ${result} \n`);
      console.log(`${funcName} test case 1 passed`);
      totalPoints+=2.5;
  }catch(err){
      console.log(`${funcName} test case 1 failed \n ${err.message}`);
  }

  try{
      actualHours = "8:23:59";
      date = '2023-03-22';
      actualOutput = false;
      message = `actualHours ${actualHours} and date ${date} \n`;
      result = isFullTime(date , actualHours);
      assert.typeOf(result, 'boolean',`${funcName} should return boolean`);
      assert.equal(result, actualOutput, message + `expected ${funcName} ${actualOutput} however your result is ${result} \n`);
      console.log(`${funcName} test case 2 passed`);
      totalPoints+=2.5;
  }catch(err){
      console.log(`${funcName} test case 2 failed \n ${err.message}`);
  }

  try{
      actualHours = "6:00:00";
      date = '2023-04-21';
      actualOutput = true;
      message = `actualHours ${actualHours} and date ${date} \n`;
      result = isFullTime(date , actualHours);
      assert.typeOf(result, 'boolean',`${funcName} should return boolean`);
      assert.equal(result, actualOutput, message + `expected ${funcName} ${actualOutput} however your result is ${result} \n`);
      console.log(`${funcName} test case 3 passed`);
      totalPoints+=2.5;
  }catch(err){
      console.log(`${funcName} test case 3 failed \n ${err.message}`);
  }

  try{
      actualHours = "8:24:02";
      date = '2023-05-11';
      actualOutput = true;
      message = `actualHours ${actualHours} and date ${date} \n`;
      result = isFullTime(date , actualHours);
      assert.typeOf(result, 'boolean',`${funcName} should return boolean`);
      assert.equal(result, actualOutput, message + `expected ${funcName} ${actualOutput} however your result is ${result} \n`);
      console.log(`${funcName} test case 4 passed`);
      totalPoints+=2.5;
  }catch(err){
      console.log(`${funcName} test case 4 failed \n ${err.message}`);
  }

  console.log(`points so far ${totalPoints} out of 120`)
}


// done
function addRecordTestCases(textFile){

  const orgFileData = readFile(textFile).join("\n");
  let funcName = "addRecord";
  let expectedOutput = {
    id: '1000234',
    name: 'Mostafa Yasser',
    date: '2023-08-01',
    firstIn: '6:32:26 am',
    lastOut: '7:26:20 pm',
    duration: '12:53:54',
    wastedHours: '00:53:54',
    actualHours: '12:00:00',
    fullTime: true,
    hasPermission: false
  };

  let staffObj = { 
    id : "1000234",
    name : "Mostafa Yasser",
    date  : "2023-08-01",
    firstIn : '6:32:26 am',
    lastOut : '7:26:20 pm' 
  };

  let flag;
  let result;

  try{
    result = addRecord(textFile , staffObj);
    flag = isIdenticalObject(result,expectedOutput);
    assert.equal(flag, true, `${funcName} \n expected ${expectedOutput} but your output is ${result} \n`);
    console.log(`${funcName} test case 1 passed`);
    totalPoints+=10;
  }catch(err){
      console.log(`${funcName} test case 1 failed` , err.message);
      console.log(`${funcName} \n expected` , expectedOutput , `but your output is`, result , `\n`);
  }

  
  expectedOutput = {};
  try{
    result = addRecord(textFile , staffObj);
    flag = lodash.isEqual(result,expectedOutput);
    assert.equal(flag, true, `${funcName} \n expected ${expectedOutput} but your output is ${result} \n`);
    console.log(`${funcName} test case 2 passed`);
    totalPoints+=10;
  }catch(err){
      console.log(`${funcName} test case 2 failed` , err.message);
  }
  loadFile(textFile , orgFileData);
  console.log(`points so far ${totalPoints} out of 120`)

}

// done
function countPermissionPerMonthTestCases(textFile){
  
  funcName = "countPermissionPerMonth";

  staffID = "10002344";
  month = '7';
  expectedOutput = 2;
  try{
    result = countPermissionPerMonth(textFile , staffID , month);
    assert.equal(result, expectedOutput, `${funcName} \n expected ${expectedOutput} but your output is ${result} \n`);
    console.log(`${funcName} test case 1 passed`);
    totalPoints += 10;
  }catch(err){
      console.log(`${funcName} test case 1 failed \n`,err.message);
      console.log(`when staffID is ${staffID} and month is ${month}`);
  }

  staffID = "10002344";
  month = '07';
  expectedOutput = 2;
  try{
    result = countPermissionPerMonth(textFile , staffID , month);
    assert.equal(result, expectedOutput, `${funcName} \n expected ${expectedOutput} but your output is ${result} \n`);
    console.log(`${funcName} test case 2 passed`);
    totalPoints += 10;
  }catch(err){
      console.log(`${funcName} test case 2 failed \n`,err.message);
      console.log(`when staffID is ${staffID} and month is ${month}`);
  }

  console.log(`points so far ${totalPoints} out of 120`)
}

// done
function setPermissionTestCases(textFile){
  
  const orgFileData = readFile(textFile).join("\n");
  funcName = "setPermission";
  staffID = "10005469";
  newValue = true
  date = "2023-04-19";
  expectedOutput = "10005469,Lojine Ahmed,2023-04-19,8:43:52,15:11:58,6:28:06,0:00:00,6:28:06,false,true";
  fileDataBefore = readFile(textFile);

  try{
    setPermission(textFile , staffID , date , newValue);
    fileDataAfter = readFile(textFile);
    result = fileDataAfter.filter( elem => (elem.includes(staffID) && elem.includes(date))  )[0];
    assert.equal(result, expectedOutput, `${funcName} \n expected ${expectedOutput} but your output is ${result} \n`);
    setPermission(textFile , staffID , date , !newValue);
    fileDataAfter = readFile(textFile);
    assert.equal(fileDataBefore.join("\n"), fileDataAfter.join("\n"), `${funcName} is implemented incorrect as more than one modification happen to code`);
    console.log(`${funcName} test case 1 passed`);
    totalPoints += 10;
  }catch(err){
      console.log(`${funcName} test case 1 failed \n`,err.message);
      console.log(`when staffID is ${staffID} and date is ${date} and newValue is ${newValue}`)
  }
  loadFile(textFile , orgFileData);
  console.log(`points so far ${totalPoints} out of 120`)

}

// done 
function getActualHoursPerMonthTestCases(textFile){
  
  staffID = "10009501";
  month = 6;
  funcName = "getActualHoursPerMonth";
  result;
  actualOutput = "25:30:06";
  try{
    result = getActualHoursPerMonth(textFile , staffID , month);
    assert.typeOf(result, 'string',`${funcName} should return string`);
    let flag = equalFormat(result,actualOutput);
    assert.equal(flag, true, `${funcName} expected ${actualOutput} but your output is ${result} \n`);
    console.log(`${funcName} test case 1 passed`);
    totalPoints += 10;
  }catch(err){
      console.log(`${funcName} test case 1 failed \n`,err.message);
      console.log(`when staffID is ${staffID} and month is ${month}`)
  }
  console.log(`points so far ${totalPoints} out of 120`)

}

// done 
function getRequiredHoursPerMonthTestCases(textFile , rankFile){
  
  funcName = "getRequiredHoursPerMonth";
  permissionCount = 1;
  staffID = "10002417";
  month = 4;
  result;
  actualOutput = "24:24:00";

  try{
    result = getRequiredHoursPerMonth(textFile, rankFile, permissionCount, staffID, month);
    assert.typeOf(result, 'string',`${funcName} should return string`);
    let flag = equalFormat(result,actualOutput);
    assert.equal(flag, true, `${funcName} expected ${actualOutput} but your output is ${result} \n`);
    console.log(`${funcName} test case 1 passed`);
    totalPoints += 10;
  }catch(err){
      console.log(`${funcName} test case 1 failed \n`,err.message);
      console.log(`when staffID is ${staffID} and month is ${month} and permissionCount ${permissionCount}`)
  }
  console.log(`points so far ${totalPoints} out of 120`)

}

// Done
function getNetSalaryPerMonthTestCases(rankFile){
  
  funcName = "getNetSalaryPerMonthPerMonth";
  actualHours = "146:20:00";
  requiredHours = "168:00:00";
  staffID = "10009512";
  result;
  actualOutput = 29838;

  try{
    result = getNetSalaryPerMonth(staffID, actualHours, requiredHours, rankFile);
    assert.typeOf(result, 'number',`${funcName} should return integer`);
    assert.equal(actualOutput, result, `${funcName} expected ${actualOutput} but your output is ${result} \n`);
    console.log(`${funcName} test case 1 passed`);
    totalPoints += 10;
  }catch(err){
      console.log(`${funcName} test case 1 failed \n`,err.message);
      console.log(`when staffID is ${staffID} and actualHours is ${actualHours} and requiredHours is ${requiredHours}`)
  }
  console.log(`points so far ${totalPoints} out of 120`)

}


function loadFile(textFile , data){
  
  fileSys.writeFileSync(textFile , data);

}

function runTestCases(textFile , rankFile){

  getDurationTestCases();
  console.log();
  getWastedHoursTestCases();
  console.log();
  getActualHoursTestCases();
  console.log();
  isFullTimeTestCases();
  console.log();
  addRecordTestCases(textFile);
  console.log();
  setPermissionTestCases(textFile);
  console.log();
  countPermissionPerMonthTestCases(textFile);
  console.log();
  getActualHoursPerMonthTestCases(textFile);
  console.log();
  getRequiredHoursPerMonthTestCases(textFile , rankFile);
  console.log();
  getNetSalaryPerMonthTestCases(rankFile);
  console.log();

}

var totalPoints = 0;
const textFile = "./PublicTestFiles/staffPublic.txt";
const rankFile = "./PublicTestFiles/staffRank.txt"
runTestCases(textFile , rankFile);