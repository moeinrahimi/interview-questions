const mongoose = require('mongoose');

let connection;
const runDB = () => {
  let options = {};
  if (!connection) {
    connection = mongoose.connect(
      'mongodb+srv://bi:qAaIcZJYx49zw5f5@cluster0.c9gea.mongodb.net/bento?retryWrites=true&w=majority',
      { auth: { username: 'bi', password: 'qAaIcZJYx49zw5f5' } }
    );
    return connection;
  }
};

module.exports = runDB;

const { Schema } = mongoose;const addressSchema = new mongoose.Schema({
  building: String,
  coord: { type: Array, default: [] },
  street: { type: String },
  zipCode: { type: String },
});
const gradeSchema = new mongoose.Schema({
  date: Number,
  grade: { type: String },
  score: { type: Number },
});
const schema = new Schema(
  {
    address: { type: addressSchema },
    cuisine: { type: String},
    name: { type: String },
    road: { type: String },
    grades: { type: [gradeSchema], default: []},
  },
  { timestamps: true },
);

const model = mongoose.model('restaurant', schema);


const main = async () => {
  await runDB();
  let result = await model.find()
  console.log("🚀 ~ file: index.js ~ line 45 ~ main ~ result", result[0])
}
main()
module.exports = {
  schema,
  model,
};
