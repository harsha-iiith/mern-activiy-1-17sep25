import { v4 as uuidv4 } from "uuid";

let notes = [];

// GET all notes
export async function getAllNotes(req, res) {
  res.status(200).json(notes);
}

// POST create note
export async function createNotes(req, res) {
  const { title, content } = req.body;
  if (!title || !content)
    return res.status(400).json({ error: "Title and content required" });

  const note = { id: uuidv4(), title, content };
  notes.push(note);
  res.status(201).json(note);
}

// PUT update note by id
export async function updateNotes(req, res) {
  const { id } = req.params;
  const { title, content } = req.body;

  const index = notes.findIndex((note) => note.id === id);
  if (index === -1) return res.status(404).json({ error: "Note not found" });

  if (!title || !content)
    return res.status(400).json({ error: "Title and content required" });

  notes[index] = { id, title, content };
  res.status(200).json(notes[index]);
}

// DELETE note by id
export async function deleteNotes(req, res) {
  const { id } = req.params;

  const index = notes.findIndex((note) => note.id === id);
  if (index === -1) return res.status(404).json({ error: "Note not found" });

  const deletedNote = notes.splice(index, 1)[0];
  res.status(200).json(deletedNote);
}

export async function resetNotes() {
  notes = [];
}
