const moment = require('moment');

module.exports = function createWorkHoursRange({ start, end, period} = {}){
  const startHour = moment(start, 'HH:mm');
  const endHour = moment(end, 'HH:mm');
  const formattedPeriod = moment.duration(period, 'HH:mm').as('minutes');
  const hoursRange = [];

  while(startHour.clone().add(formattedPeriod, 'm').diff(endHour) <= 0){
    hoursRange.push(startHour.format("HH:mm"));
    startHour.add(formattedPeriod, 'm');
  }


  return hoursRange
  
}