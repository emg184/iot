var knex = require("../knex.js");

function Boards() {
  return knex('boards')
}

function Categories() {
  return knex('categories');
}


function getBoardsAndCategories(user_id, category_id) {
  //console.log(category_id);
  var boards = Promise.resolve(
                      Boards()
                        .where({
                          'user_id': user_id,
                          'category_id': category_id,
                          'active': true
                        }))

  var categories = Promise.resolve(
                          Categories()
                            .where({
                              'user_id': user_id,
                              'parent_category': category_id,
                              'active': true
                            }))

  return Promise.all([boards, categories])
          .then( x => {
            //console.log(x[0], x[1]);
            return x;
          })
}

module.exports = {
  getBoardsAndCategories
}
