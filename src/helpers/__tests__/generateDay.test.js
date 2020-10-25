const generateDay = require('../generateDay');

describe('[helper function] generateDay', () => {
  it('should return an array of times when the correct values are passed', () => {
    const testingValues = [{
      workHours: {
        start: '09:00',
        end: '20:00'
      },
      period: '01:00',
      existingServices: [
        {
          start: '12:00',
          end: '14:00'
        }
      ],
      selectedServices: [
        {
          start: '15:00',
          end: '18:00'
        }
      ]
    }]

    const expectedResults = [
      ['09:00', '10:00', '11:00', '14:00', '18:00', '19:00']
    ]

    testingValues.forEach((values, index) => {
      expect(generateDay(values)).toEqual(expectedResults[index]);
    })
  });
})