import { Schema, model, models } from 'mongoose';


const productSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    stocks: {
        type: Number,
        required: true
    },
    img: {
        type: Array,
        required: true
    },
    allRatings: {
        type: Array,
        required: true
    },
    reviews: {
        type: Array,
        required: true
    }
})

// const User = models.User || model("User", UserSchema);

export default models.productCollection || model("productCollection", productSchema);