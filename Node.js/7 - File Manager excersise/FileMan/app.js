const Create = require('./create')
const Read = require('./read')
const Update = require('./update')
const Delete = require('./delete')

let command = process.argv.splice(2)
console.log(command)

let [action, ...data] = process.argv.splice(2)