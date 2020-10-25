const createHoursRange = require('./createHoursRange');

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
    return [...acc, ...createHoursRange({
      start: selectedService.start,
      end: selectedService.end,
      period,
    })]
  }, []);
  const lockedHours = [...existingServicesHoursRanges, ...selectedServicesHoursRanges];

  return workHoursRange.filter((workHour) => !lockedHours.includes(workHour));
}