const createHoursRange = require('./createHoursRange');
const moment = require('moment');

module.exports = function({workHours, period, existingServices, selectedServices}){
  const workHoursRange = createHoursRange({
    start: workHours.start,
    end: workHours.end,
    period,
  })
  const existingServicesHoursRanges = existingServices.reduce((acc, existingService) => {
    return [...acc, ...createHoursRange({
      start: existingService.start,
      end: existingService.end,
      period,
    })]
  }, []);
  const selectedServicesHoursRanges = selectedServices.reduce((acc, selectedService) => {
    const newHoursRange = createHoursRange({
      start: selectedService.start,
      end: selectedService.end,
      period,
    });
    const isAnyHourOverlaping = existingServicesHoursRanges.some(el => newHoursRange.includes(el));
    
    if(isAnyHourOverlaping) return acc;
    return [...acc, ...newHoursRange]
  }, []);
  const lockedHours = [...existingServicesHoursRanges, ...selectedServicesHoursRanges];

  return workHoursRange.filter((workHour) => !lockedHours.includes(workHour));
}