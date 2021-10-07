const { Model } = require("objection");

class User extends Model {
  static get tableName() {
    return "user";
  }
  static get relationMappings() {
    const Channel = require("./channel");
    return {
      channel: {
        relation: Model.HasOneRelation,
        modelClass: Channel,
        joins: {
          from: "user.channelid",
          to: "channel.id",
        },
      },
    };
  }
}

module.exports = User;
