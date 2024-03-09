import { Schema, model, Document } from "mongoose";

interface MovieInterface extends Document {
  title: string;
  genre: string;
  rating: number;
  streamingLink: string;
}

const MovieSchema = new Schema<MovieInterface>({
  title: { type: String, required: true },
  genre: { type: String, required: true },
  rating: { type: Number, required: true },
  streamingLink: { type: String, required: true },
});

export default model<MovieInterface>("Movie", MovieSchema);
