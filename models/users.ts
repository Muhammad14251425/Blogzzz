import mongoose , {Schema} from "mongoose"

const userSchema = new Schema({
    username: { type: String, unique: true, required: true},
    email : { type: String, unique: true, required: true},
    password: { type: String, required: true},
},
{
    timestamps: true
});

const UserDetail = mongoose.models.Users || mongoose.model("Users",userSchema);
export default UserDetail;