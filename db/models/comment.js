'use strict';
module.exports = (sequelize, DataTypes) => {
  var Comment = sequelize.define('Comment', {
    body: DataTypes.TEXT,
    PostId: DataTypes.INTEGER
  });

  Comment.associate = function (models) {
    Comment.belongsTo(models.Post);
  };

  return Comment;
};