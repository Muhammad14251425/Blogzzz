import mongoose, { Schema } from "mongoose";
export interface IBlogPost {
  _id: string;
  title: string;
  author: string;
  date: Date;
  photo?: string; // Optional property
  headings?: string[]; // Optional array
  paragraphs?: string[]; // Optional array
}
const blogPostSchema = new Schema({
  author: { type: String, required: true },
  title: { type: String, required: true },
  date: { type: Date, default: Date.now },
  photos: [{ type: String, required:true }],
  headings: [{ type: String }],
  paragraphs: [{ type: String, required: true }],
});

const BlogPost =
  mongoose.models.BlogPost || mongoose.model("BlogPost", blogPostSchema);

export default BlogPost;



