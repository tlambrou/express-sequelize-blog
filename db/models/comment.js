'use strict';
module.exports = (sequelize, DataTypes) => {
  var Comment = sequelize.define('Comment', {
    body: DataTypes.TEXT,
    postId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        Comment.belongsTo(models.Post);
      }
    }
  });
  return Comment;
};