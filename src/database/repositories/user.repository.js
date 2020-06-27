const Repository = require("./repository");

class UserRepository extends Repository {
  async insert(data) {
    const query = {
      name: "insert-user",
      text: `INSERT INTO "user" (name, last_name, born_date, type_document, identity_document) VALUES ($1, $2, $3, $4, $5) RETURNING *`,
      values: [
        data.name,
        data.last_name,
        data.born_date,
        data.type_document,
        data.identity_document,
      ],
    };

    return (await this.getConnection())
      .query(query)
      .then((result) => result.rows[0]);
  }

  update(data) {}

  delete(id) {}

  find(options) {}

  findOne(options) {}
}

module.exports = new UserRepository();
