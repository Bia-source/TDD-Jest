import { DataTypes } from 'sequelize';
import { database } from '../database/connection.js';

// database -> representa o nosso banco de dados
export const User = database.define('User',
  {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4
    },
    name: {
        type: DataTypes.STRING(150),
        allowNull: false,
      },
    email: {
      type: DataTypes.STRING(150),
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING(150),
      defaultValue: false
    },
  }
);