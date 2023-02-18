import { DataTypes } from 'sequelize';
import db from '.';

const Repository = db.define('Repository', {
  name: {
    type: DataTypes.STRING,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  stars: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  language: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

export default Repository;
