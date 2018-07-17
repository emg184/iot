var knex = require("../knex.js");

function Boards() {
  return knex('boards')
}

function createBoard( user_id, category_id, board_name, imageUrl, active=true, description, secretKey) {
  return Boards()
          .insert({
            'user_id': user_id,
            'category_id': category_id,
            'board_name': board_name,
            'image': imageUrl,
            'active': active,
            'description': description,
            'secretKey': secretKey
          })
}

function updateBoard(board_id, user_id, category_id, board_name, imageUrl, active, description, secretKey) {
  return Boards()
          .where({
            'board_id': board_id
          })
            .update({
              'user_id': user_id,
              'category_id': category_id,
              'board_name': board_name,
              'image': imageUrl,
              'active': active,
              'description': description,
              'secretKey': secretKey
            })
}

function getBoard(user_id, board_id) {
  return Boards()
          .where({
            'user_id': user_id,
            'board_id': board_id
          })
}

function getCategoryBoard(user_id, category_id) {
  return Boards()
          .where({
            'user_id': user_id,
            'category_id': category_id
          })
}

function getUserBoard(user_id) {
  return Boards()
          .where({
            'user_id': user_id
          })
}

function deleteBoard(board_id) {
  return Boards()
          .where({
            'board_id': board_id
          })
            .del()
}

module.exports = {
  createBoard,
  updateBoard,
  getBoard,
  getCategoryBoard,
  getUserBoard,
  deleteBoard
}
