const { Client } = require("pg");

const connectionString =
  process.env.DB_URL || "postgresql://root:password@localhost:5432/sae";

class Connection {
  static connection;

  static async getConnection() {
    if (Connection.connection) {
      return Connection.connection;
    }

    Connection.connection = new Client({ connectionString });
    await Connection.connection.connect();
    console.log("database connection successfully");
    return Connection.connection;
  }
}

module.exports = Connection;
