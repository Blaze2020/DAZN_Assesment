import express from "express";
import {
  getAllMovies,
  searchMovies,
  addMovie,
  updateMovie,
  deleteMovie,
} from "../controllers/movieController.js";

const router = express.Router();

const checkAdminRole = (req: any, res: any, next: any) => {
  // Assume admin role is passed in the request header for simplicity
  const isAdmin = req.headers["admin"] === "true";
  if (!isAdmin) {
    return res.status(401).json({ error: "Unauthorized" });
  }
  next();
};

router.get("/movies", getAllMovies);
router.get("/search", searchMovies);
router.post("/movies", checkAdminRole, addMovie);
router.put("/movies/:id", checkAdminRole, updateMovie);
router.delete("/movies/:id", checkAdminRole, deleteMovie);

export default router;
