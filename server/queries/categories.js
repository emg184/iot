var knex = require("../knex.js");

function Categories() {
  return knex('categories');
}

function createCategory(name, image, parent_category, active=true, description, created_by) {
  return Categories()
          .insert({
            'category_name': name,
            'image': image,
            'parent_category': parent_category,
            'active': active,
            'description': description,
            'user_id': created_by,
          })
}

function updateCategory(name, image, parent_category, active=true, description, created_by) {
  return Categories()
          .update({
            'category_name': name,
            'image': image,
            'active': active,
            'description': description
          })
}

function deleteCategory(name, image, parent_category, active=true, description, created_by) {
  return Categories()
          .where({
            'category_id': id,
          })
            .del()
}

function getRootCategories(user_id) {
  return Categories()
          .where({
            'parent_category': null,
            'user_id': user_id
          })
}

function getCategories(user_id, parent_id) {
  console.log(user_id, parent_id)
  return Categories()
          .where({
            'parent_category': parent_id,
            'user_id': user_id
          })
}

module.exports = {
  createCategory,
  updateCategory,
  deleteCategory,
  getRootCategories,
  getCategories
}
