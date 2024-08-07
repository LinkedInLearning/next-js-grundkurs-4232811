import { DataTypes, Sequelize } from "sequelize";

export async function dbConnection() {
  const sequelize = new Sequelize('test', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
  });

  const Article = sequelize.define(
    'Article',
    {
      title: {
        type: DataTypes.STRING,
      },
      content: {
        type: DataTypes.STRING,
      },
      image: {
        type: DataTypes.STRING,
        allowNull: true
      }
    }
  );

  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }

  await sequelize.sync();

  // await Article.create({
  //   title: 'Mein db-artikel',
  //   content: 'Mein Inhalt',
  // })

  // await Article.create({
  //   title: 'Mein db-artikel nr 2',
  //   content: 'Mein Inhalt 2',
  //   image: '/abstract.jpg'
  // })

  return { sequelize, Article };
}