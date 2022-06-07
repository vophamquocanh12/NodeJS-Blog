module.exports = {
  mutipleMongooseToOject: function (mongooseArray) {
    return mongooseArray.map((mongooseArray) => mongooseArray.toObject());
  },
  mongooseToObject: function (mongooseObject) {
    return mongooseObject ? mongooseObject.toObject() : mongooseObject;
  },
};
