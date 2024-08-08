// PASSO 1- conectar com o banco de dados
import { Sequelize } from "sequelize";

// a variavel database REPRESENTA meu banco de dados
export const database = new Sequelize('a20', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql'
});

try {
    await database.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
}