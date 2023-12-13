import mongoose from "mongoose";
const userSchema = new mongoose.Schema(
	{
		username: {
			type: String,
			required: true,
			unique: true,
		},
		email: {
			type: String,
			required: true,
			unique: true,
		},
		password: {
			type: String,
			required: true,
		},
		avatar: {
			type: String,
			default:
				"https://www.vecteezy.com/vector-art/5176777-user-avatar-line-style",
		},
	},
	{ timestamps: true }
);

const User = mongoose.model("User", userSchema);

export { User };
