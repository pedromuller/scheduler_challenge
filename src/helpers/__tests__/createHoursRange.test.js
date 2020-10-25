const createHoursRange = require('../createHoursRange');

describe('[helper function] createWorkHouresRange', () => {
  it('should return an empty array if end hour is higher or equal start hour', () => {
    const testingValues = [{
        start: '09:00',
        end: '08:40',
        period: '0:30'
      },
      {
        start: '09:15',
        end: '09:14',
        period: '0:30'
      }
    ]

    testingValues.forEach(values => {
      expect(createHoursRange(values)).toEqual([]);
    })
  });

  it('should return an array of times when the correct values are passed', () => {
    const testingValues = [{
        start: '09:00',
        end: '10:00',
        period: '0:30'
      },
      {
        start: '09:00',
        end: '20:00',
        period: '1:00'
      },
      {
        start: '09:00',
        end: '20:00',
        period: '2:00'
      }
    ]

    const expectedResults = [
      ['09:00', '09:30'],
      ['09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00'],
      ['09:00', '11:00', '13:00', '15:00', '17:00']
    ]

    testingValues.forEach((values, index) => {
      expect(createHoursRange(values)).toEqual(expectedResults[index]);
    })
  });
})