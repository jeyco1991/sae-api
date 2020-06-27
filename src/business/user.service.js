const userRepository = require("../database/repositories/user.repository");

class UserService {
  create(data) {
    return userRepository.insert(data);
  }

  update(data) {}

  delete(id) {}

  findById(id) {}

  findAll(options) {}
}

module.exports = new UserService();
