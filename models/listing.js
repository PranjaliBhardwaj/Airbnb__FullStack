const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema( {
    title: {
        type: String,
        reuired: true,
    },
    description: String,
    image: {
        type: Object,
        default: "https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Ftropical-beach&psig=AOvVaw2tOZ71P-VD0SLYVPnxTwDg&ust=1710174496468000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCNCvmMiO6oQDFQAAAAAdAAAAABAJ",
        set: (v) => v === "" ? "https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Ftropical-beach&psig=AOvVaw2tOZ71P-VD0SLYVPnxTwDg&ust=1710174496468000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCNCvmMiO6oQDFQAAAAAdAAAAABAJ" : v,
    },
    price: Number,
    location: String,
    country: String,
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;