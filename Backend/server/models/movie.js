'use strict';
const db = require("./db");
const { DataTypes } = require("sequelize");
 export const Movie = db.define('Movie', {
    title: {
      type: DataTypes.STRING,
      allowNull: {
        args: false,
        msg: 'Please enter your name'
      }
    },
    desc: {
      type: DataTypes.STRING,
    },
    imgtitle: {
      type: DataTypes.STRING,
      allowNull: {
        args: false,
        msg: 'Please enter your email address'
      },
    },
    imgsm: {
      type: DataTypes.STRING,
      allowNull: {
        args: false,
        msg: 'Please enter an imgsm'
      },
    },
    video: {
      type: DataTypes.STRING,
      allowNull: {
        args: false,
        msg: 'uploaded trailer'
      },
    },
    year: {
      type: DataTypes.STRING,
      allowNull: {
        args: false,
        msg: 'released year'
      },
    },
    limit: {
      type: DataTypes.STRING,
      allowNull: {
        args: false,
        msg: 'Please enter an imgsm'
      },
    },
    genre: {
      type: DataTypes.STRING,
      allowNull: {
        args: false,
        msg: 'Please enter an imgsm'
      },
    },
    isSeries: {
      type: DataTypes.Boolean,
      allowNull: {
        args: false,
        msg: 'Enter series'
      },
    },
  }, 
  {
    tableName:'Movies'
  });
 
 