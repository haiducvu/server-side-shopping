const Cart = require("./cart");
const db = require("../util/database");

module.exports = class Product {
  constructor(id, title, imageUrl, description, price) {
    this.id = id;
    this.title = title;
    this.imageUrl = imageUrl;
    (this.description = description), (this.price = price);
  }

  save() {
    return db.execute(
      "INSERT INTO item (title, price, imageUrl) VALUES (?,?,?)",
      [this.title, this.price, this.imageUrl]
    );
  }

  static deleteById(id) {}

  static fetchAll(cb) {
    return db.execute("SELECT * FROM item");
  }

  static findById(id, cb) {
    return db.execute('SELECT * FROM item WHERE item.id = ?', [id]);
  }
};
