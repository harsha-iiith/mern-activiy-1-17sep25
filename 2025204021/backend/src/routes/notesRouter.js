import express from "express";
import { createNotes, updateNotes, deleteNotes, getAllNotes, resetNotes } from "../controller/notesController.js";

const router = express.Router();

router.get("/",getAllNotes);

router.post("/", createNotes);

router.put("/:id",updateNotes);

router.delete("/:id",deleteNotes);

export default router;