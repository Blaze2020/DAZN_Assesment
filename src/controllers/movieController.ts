import { Request, Response } from "express";
import Movie from "../models/movie.js";

export const getAllMovies = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const movies = await Movie.find();
    res.json(movies);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const searchMovies = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { q } = req.query;
    const movies = await Movie.find({
      $or: [
        { title: { $regex: q, $options: "i" } },
        { genre: { $regex: q, $options: "i" } },
      ],
    });
    res.json(movies);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const addMovie = async (req: Request, res: Response): Promise<void> => {
  try {
    const movie = new Movie(req.body);
    await movie.save();
    res.status(201).json(movie);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

export const updateMovie = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params;
    const movie = await Movie.findByIdAndUpdate(id, req.body, { new: true });
    res.json(movie);
  } catch (error: any) {
    res.status(404).json({ message: error.message });
  }
};

export const deleteMovie = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params;
    await Movie.findByIdAndDelete(id);
    res.json({ message: "Movie deleted successfully" });
  } catch (error: any) {
    res.status(404).json({ message: error.message });
  }
};
