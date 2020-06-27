const Connection = require("../connection");

module.exports = class Repository {
  async getConnection() {
    return await Connection.getConnection();
  }
};
