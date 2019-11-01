module.exports = {
  up: (queryInterface) => {
    return queryInterface.bulkInsert('userRolesJoin', [
      { userId: 1, userRoleId: 1, createdAt: new Date(), updatedAt: new Date() },
      { userId: 2, userRoleId: 2, createdAt: new Date(), updatedAt: new Date() },
      { userId: 3, userRoleId: 2, createdAt: new Date(), updatedAt: new Date() },
      { userId: 4, userRoleId: 2, createdAt: new Date(), updatedAt: new Date() },
      { userId: 5, userRoleId: 2, createdAt: new Date(), updatedAt: new Date() },
      { userId: 6, userRoleId: 2, createdAt: new Date(), updatedAt: new Date() },
      { userId: 7, userRoleId: 2, createdAt: new Date(), updatedAt: new Date() },
      { userId: 8, userRoleId: 2, createdAt: new Date(), updatedAt: new Date() },
      { userId: 9, userRoleId: 2, createdAt: new Date(), updatedAt: new Date() },
      { userId: 10, userRoleId: 2, createdAt: new Date(), updatedAt: new Date() },
      { userId: 11, userRoleId: 2, createdAt: new Date(), updatedAt: new Date() },
      { userId: 12, userRoleId: 2, createdAt: new Date(), updatedAt: new Date() },
      { userId: 13, userRoleId: 2, createdAt: new Date(), updatedAt: new Date() },
      { userId: 14, userRoleId: 2, createdAt: new Date(), updatedAt: new Date() },
      { userId: 15, userRoleId: 2, createdAt: new Date(), updatedAt: new Date() },
      { userId: 16, userRoleId: 2, createdAt: new Date(), updatedAt: new Date() },
      { userId: 17, userRoleId: 3, createdAt: new Date(), updatedAt: new Date() },
      { userId: 18, userRoleId: 3, createdAt: new Date(), updatedAt: new Date() },
      { userId: 19, userRoleId: 4, createdAt: new Date(), updatedAt: new Date() },
      { userId: 20, userRoleId: 4, createdAt: new Date(), updatedAt: new Date() },
      { userId: 21, userRoleId: 5, createdAt: new Date(), updatedAt: new Date() },
      { userId: 22, userRoleId: 5, createdAt: new Date(), updatedAt: new Date() },
      { userId: 23, userRoleId: 5, createdAt: new Date(), updatedAt: new Date() },
      { userId: 24, userRoleId: 5, createdAt: new Date(), updatedAt: new Date() },
      { userId: 25, userRoleId: 5, createdAt: new Date(), updatedAt: new Date() },
      { userId: 26, userRoleId: 5, createdAt: new Date(), updatedAt: new Date() },
      { userId: 27, userRoleId: 5, createdAt: new Date(), updatedAt: new Date() },
      { userId: 28, userRoleId: 5, createdAt: new Date(), updatedAt: new Date() },
      { userId: 29, userRoleId: 3, createdAt: new Date(), updatedAt: new Date() },
      { userId: 30, userRoleId: 3, createdAt: new Date(), updatedAt: new Date() },
      { userId: 31, userRoleId: 4, createdAt: new Date(), updatedAt: new Date() },
      { userId: 32, userRoleId: 4, createdAt: new Date(), updatedAt: new Date() },
      { userId: 33, userRoleId: 5, createdAt: new Date(), updatedAt: new Date() },
      { userId: 34, userRoleId: 5, createdAt: new Date(), updatedAt: new Date() }
    ], {});
  },

  down: (queryInterface) => {
    return queryInterface.bulkDelete('userRolesJoin', null, {});
  }
};



