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
        },
        {
          start: '09:00',
          end: '10:00'
        }
      ]
    }]

    const expectedResults = [
      ['10:00', '11:00', '14:00', '18:00', '19:00']
    ]

    testingValues.forEach((values, index) => {
      // expect(generateDay(values)).toEqual(expectedResults[index]);
    })
  });
  it('should not schedule if hours start hour or end hour overlaps with other schedule', () => {
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
        },
        {
          start: '14:00',
          end: '15:00'
        }
      ],
      selectedServices: [
       
        {
          start: '13:00',
          end: '14:00'
        },
        {
          start: '18:00',
          end: '19:00'
        },
        {
          start: '11:00',
          end: '13:00'
        },
        {
          start: '10:00',
          end: '18:00'
        },
        {
          start: '09:00',
          end: '10:00'
        }
      ]
    }]

    const expectedResults = [
      ['10:00', '11:00', '15:00', '16:00', '17:00', '19:00']
    ]

    testingValues.forEach((values, index) => {
      expect(generateDay(values)).toEqual(expectedResults[index]);
    })
  });
})