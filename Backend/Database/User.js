const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
    name: String,
    email : String,
    password : String,
    plan : String,  
    Recommdations: String,
    review:String,
    TotalExpense:Number,
    TotalIncome:Number,
    Savings:Number,
    CategoryExpense:String,
    MonthlyIncome:Object,
    MonthlyExpense:Object,
});
const User = mongoose.model("Users",UserSchema);
module.exports = User;