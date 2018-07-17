var knex = require("../knex.js");

function Tests() {
  return knex('tests')
};

function createTest(user_id, board_id, test_name, image, active=true, test_description) {
  return Tests()
          .insert({
            'user_id': user_id,
            'board_id': board_id,
            'test_name': test_name,
            'image':image,
            'active': active,
            'test_description': test_description
          })

}

function updateTest(user_id, board_id, test_name, image, active, test_description) {
  return Tests()
          .where({
            'user_id': user_id,
            'board_id': board_id
          })
            .update({
              'test_name': test_name,
              'image':image,
              'active': active,
              'test_description': test_description
            })
}

function getBoardTest(user_id, board_id) {
  return Tests()
          .where({
            'user_id': user_id,
            'board_id': board_id
          })
}

function getUserTest(user_id) {
  return Tests()
          .where({
            'user_id': user_id
          })
}

function deleteTest(user_id, test_id) {
  return Tests()
          .where({
            'user_id': user_id,
            'test_id': test_id
          })
            .del()
}

function getTest(user_id, test_id) {
  return Tests()
          .where({
            'user_id': user_id,
            'test_id': test_id
          })
}

module.exports = {
  createTest,
  updateTest,
  getBoardTest,
  getUserTest,
  deleteTest,
  getTest
}
