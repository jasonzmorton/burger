var orm = require('../config/orm.js');

var burger = {
    all: function(cb) {
        orm.selectAll("burger", function(res) {
            cb(res);
        })
    },
    insert: function(cols, vals, cb) {
        orm.insertOne("burger", cols, vals, function(res) {
            cd(res);
        })
    },
    update: function(objColVals, condition, cb) {
        orm.updateOne("burger", objectVals, condition, function(res) {

        })
    }
}

module.exports = burger;