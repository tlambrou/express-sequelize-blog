'use strict';
module.exports = (sequelize, DataTypes) => {
  var Post = sequelize.define('Post', {
    title: DataTypes.STRING,
    body: DataTypes.TEXT,
    UserId: DataTypes.INTEGER
  })

  Post.associate = function (models) {
    Post.belongsTo(models.User);

    Post.hasMany(models.Comment);
  };

  return Post;
};