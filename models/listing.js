// const mongoose=require("mongoose");
// const Schema=mongoose.Schema;
// const Review=require("./review.js"); 
// const User=require("./user.js");

// const listingSchema=new Schema({
//     title:{
//         type:String,
//         required:true,
//     },
//     description:String,
//     image:{
//         type:String,
//         default: "https://images.unsplash.com/photo-1488462237308-ecaa28b729d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c2t5JTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
//         set:(v)=>v===""?"https://images.unsplash.com/photo-1488462237308-ecaa28b729d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c2t5JTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60":v,
//     },
//     price:Number,
//     location:String,
//     country:String,
//     reviews:[
//         {
//             type:Schema.Types.ObjectId,
//             ref:"Review"
//         }
//     ],
//     owner:{
//         type:Schema.Types.ObjectId,
//         ref:"User"
//     },
//     category:{
//         type:String,
//         enum:["Trending","Hotels","Mountains","Beach","Iconic cities","Best views","Stargazing","Snow","Lakes","Clouds","World","Farm"],
//     }
// });

// listingSchema.post("findOneAndDelete",async(listing)=>{
//     if(listing){
//         await Review.deleteMany({_id:{$in:listing.reviews}});
//     }
// })

// const Listing=mongoose.model("Listing",listingSchema);
// module.exports=Listing;

const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Review = require("./review");
const User = require("./user");

const listingSchema = new Schema({
  title: { type: String, required: true },
  description: String,
  image: {
    type: String,
    default:
      "https://images.unsplash.com/photo-1488462237308-ecaa28b729d7?ixlib=rb-4.0.3",
  },
  price: Number,
  location: String,
  country: String,
  reviews: [{ type: Schema.Types.ObjectId, ref: "Review" }],
  owner: { type: Schema.Types.ObjectId, ref: "User" },
  category: {
    type: String,
    enum: [
      "Trending",
      "Hotels",
      "Mountains",
      "Beach",
      "Iconic cities",
      "Best views",
      "Stargazing",
      "Snow",
      "Lakes",
      "Clouds",
      "World",
      "Farm",
    ],
  },
  amenities: [
    {
      type: Schema.Types.ObjectId,
      ref: "Amenity", // ✅ New relation
    },
  ],
});

listingSchema.post("findOneAndDelete", async (listing) => {
  if (listing) {
    await Review.deleteMany({ _id: { $in: listing.reviews } });
  }
});

module.exports = mongoose.model("Listing", listingSchema);
