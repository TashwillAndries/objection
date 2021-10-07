const { Model } = require("objection");

class Video extends Model {
  static get tableName() {
    return "videp";
  }
}

module.exports = Video;
