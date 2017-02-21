import * as mongoose from 'mongoose';
//
// export interface IPlace {
//   name:String;
//   rating: Number;
//   food: Number;
//   service: Number;
//   decor: Number;
//   style:'Full Service' | 'Counter Service' |'Fast Food';
//   comment:String;
// }

// export interface ICategory extends mongoose.Document {
//   type: String;
//   enum:['American' , 'Chinese' , 'Japanese' , 'Mediterranean' , 'Mexican'],
//   place: IPlace[]
// }

let placeSchema = new mongoose.Schema({
  name:String,
  type:{
    type: String,
  enum:['American' , 'Chinese' , 'Japanese' , 'Mediterranean' , 'Mexican'] },
  rating: Number,
  food: Number,
  service: Number,
  decor: Number,
  comment:String,
  style: {
    type: String,
  enum:['Full Service' , 'Counter Service', 'Fast Food'] }
});

// let categorySchema = new mongoose.Schema({
//   type: String,
//   enum:['American' , 'Chinese' , 'Japanese' , 'Mediterranean' , 'Mexican'],
//   place: [placeSchema]
// });

export default mongoose.model('Place', placeSchema);
