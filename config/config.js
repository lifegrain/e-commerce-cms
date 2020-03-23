if (process.env.NODE_ENV === `test` || process.env.NODE_ENV === `development`) {
  require(`dotenv`).config();
}

module.exports = {
  development: {
    username: "postgres",
    password: "postgres",
    database: "e-com_CMS",
    host: "127.0.0.1",
    dialect: "postgres"
  },
  test: {
    username: "postgres",
    password: "postgres",
    database: "e-com_CMS-test",
    host: "127.0.0.1",
    dialect: "postgres"
  },
  production: {
    username: "mmdumknrcmbfth",
    password: "d436bca71475e13bbb26ec98275693a0a0617aecded5ef5d6e285f39b85542e2",
    database: "d7tg8qtf70pgt2",
    host: "ec2-34-233-186-251.compute-1.amazonaws.com",
    dialect: "postgres"
  }
};
