function getNewRecords(records) {
  const newRecords = records.map((record) => {
    const recordObj = {};
    recordObj.time = record.split(" ")[0].split(":");
    recordObj.carNumber = record.split(" ")[1];
    recordObj.inAndOut = record.split(" ")[2];
    return recordObj;
  });
  return newRecords;
}

function timeDifGetter(outTime, inTime) {
  const hourDif = (outTime[0] - inTime[0]) * 60;
  const minDif = outTime[1] - inTime[1];
  return hourDif + minDif;
}

function getRestTime(timeRecords) {
  const properties = Object.keys(timeRecords);
  properties.forEach((property) => {
    if (property.includes("In")) {
      const restTime = timeDifGetter(["23", "59"], timeRecords[property]);
      timeRecords[property.substr(0, 4)] = timeRecords[property.substr(0, 4)]
        ? timeRecords[property.substr(0, 4)] + restTime
        : restTime;
      delete timeRecords[property];
    }
  });
}

function getFees(fees, timeRecords) {
  const properties = Object.keys(timeRecords);
  properties.forEach((property) => {
    timeRecords[property] =
      timeRecords[property] > fees[0]
        ? fees[1] +
          Math.ceil((timeRecords[property] - fees[0]) / fees[2]) * fees[3]
        : fees[1];
  });
}

function getDesc(timeRecords) {
  const properties = Object.keys(timeRecords);
  return properties.sort().map((property) => timeRecords[property]);
}

function solution(fees, records) {
  var answer = [];
  const newRecords = getNewRecords(records);
  const timeRecords = {};
  newRecords.forEach((record) => {
    if (record.inAndOut === "IN")
      timeRecords[`${record.carNumber}In`] = record.time;
    if (record.inAndOut === "OUT") {
      const parkingTime = timeDifGetter(
        record.time,
        timeRecords[`${record.carNumber}In`]
      );
      timeRecords[record.carNumber] = timeRecords[record.carNumber]
        ? timeRecords[record.carNumber] + parkingTime
        : parkingTime;
      delete timeRecords[`${record.carNumber}In`];
    }
  });
  getRestTime(timeRecords);
  getFees(fees, timeRecords);
  answer = getDesc(timeRecords);
  return answer;
}
