module.exports = {
  up: (queryInterface) => {
    return queryInterface.bulkInsert('consignmentNoteWares', [
      {
        name: 'Cargo 1',
        weight: '150',
        amount: 'kilogram',
        consignmentNoteId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Cargo 2',
        weight: '450',
        amount: 'kilogram',
        consignmentNoteId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Cargo 3',
        weight: '300',
        amount: 'kilogram',
        consignmentNoteId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Cargo 4',
        weight: '50',
        amount: 'kilogram',
        consignmentNoteId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Cargo 1',
        weight: '150',
        amount: 'kilogram',
        consignmentNoteId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Cargo 2',
        weight: '750',
        amount: 'kilogram',
        consignmentNoteId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Cargo 1',
        weight: '450',
        amount: 'kilogram',
        consignmentNoteId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Cargo 2',
        weight: '350',
        amount: 'kilogram',
        consignmentNoteId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Cargo 1',
        weight: '150',
        amount: 'kilogram',
        consignmentNoteId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Cargo 2',
        weight: '850',
        amount: 'kilogram',
        consignmentNoteId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Cargo 1',
        weight: '950',
        amount: 'kilogram',
        consignmentNoteId: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Cargo 1',
        weight: '1050',
        amount: 'kilogram',
        consignmentNoteId: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Cargo 1',
        weight: '2000',
        amount: 'kilogram',
        consignmentNoteId: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Cargo 1',
        weight: '950',
        amount: 'kilogram',
        consignmentNoteId: 8,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Cargo 1',
        weight: '850',
        amount: 'kilogram',
        consignmentNoteId: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Cargo 1',
        weight: '2000',
        amount: 'kilogram',
        consignmentNoteId: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Cargo 1',
        weight: '900',
        amount: 'kilogram',
        consignmentNoteId: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Cargo 1',
        weight: '600',
        amount: 'kilogram',
        consignmentNoteId: 12,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Cargo 1',
        weight: '900',
        amount: 'kilogram',
        consignmentNoteId: 13,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Cargo 1',
        weight: '700',
        amount: 'kilogram',
        consignmentNoteId: 14,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Cargo 1',
        weight: '1500',
        amount: 'kilogram',
        consignmentNoteId: 15,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Cargo 1',
        weight: '1200',
        amount: 'kilogram',
        consignmentNoteId: 16,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Cargo 1',
        weight: '1500',
        amount: 'kilogram',
        consignmentNoteId: 17,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Cargo 1',
        weight: '500',
        amount: 'kilogram',
        consignmentNoteId: 18,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Cargo 1',
        weight: '150',
        amount: 'kilogram',
        consignmentNoteId: 19,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Cargo 1',
        weight: '550',
        amount: 'kilogram',
        consignmentNoteId: 20,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Cargo 1',
        weight: '700',
        amount: 'kilogram',
        consignmentNoteId: 21,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Cargo 1',
        weight: '950',
        amount: 'kilogram',
        consignmentNoteId: 22,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Cargo 1',
        weight: '350',
        amount: 'kilogram',
        consignmentNoteId: 23,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Cargo 1',
        weight: '250',
        amount: 'kilogram',
        consignmentNoteId: 24,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Cargo 1',
        weight: '750',
        amount: 'kilogram',
        consignmentNoteId: 25,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: (queryInterface) => {
    return queryInterface.bulkDelete('consignmentNoteWares', null, {});
  }
};
