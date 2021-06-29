'use strict';
const uuid = require('uuid').v4;

class Clothes {
  constructor() {

    this.db = [];

  }

  read(id) {
    if (id) {
      return this.db.find((record) => record.id === id);
    } else {
      return this.db;
    }
  }
  /*db[
    {id:1 obj}
    {id:2 obj}
    {id:3 obj }
  ]*/

  create(obj) {
    const record = {
      id: uuid(),
      data: obj,
    };
    this.db.push(record);
    return record;
  }
  update(id, obj) {
    this.db.map(record => {
      if (record.id === id) {
        record.data = obj;
        return record;
      }
    })



  }

  delete(id) {
    this.db = this.db.filter((record) => record.id !== id);
  }
}
module.exports = Clothes;