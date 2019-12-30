const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Post = new Schema(
	{
		title: { type: String, required: true },
		subTitle: { type: String, required: false },
		body: { type: String, required: true },
		images: { type: Image, required: false }
	},
	{
		timestamps: true
	}
)
