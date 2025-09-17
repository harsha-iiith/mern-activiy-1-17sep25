import Task from "../models/tasks.model.js";

// GET all notes
export async function getAllNotes(req, res) {
  try {
    const notes = await Task.find();
    res.status(200).json(notes);
    return;
  } catch (err) {
    res.status(500).json({ error: "Failed to get notes" });
    return;
  }
}

// POST create note
export async function createNotes(req, res) {
  try {
    const { title, content } = req.body;
    if (!title || !content) {
      res.status(400).json({ error: "Title and content required" });
      return;
    }
    const note = await Task.create({ title, content });
    res.status(201).json(note);
    return;
  } catch (err) {
    res.status(500).json({ error: "Failed to create note" });
    return;
  }
}

// PUT update note by id
export async function updateNotes(req, res) {
  try {
    const { id } = req.params;
    if (!id) {
      res.status(400).json({ error: "ID required" });
      return;
    }
    const { title, content } = req.body;

    if (!title || !content) {
      res.status(400).json({ error: "Title and content required" });
      return;
    }

    const task = await Task.findById(id);

    if (!task) {
      res.status(404).json({ error: "Note not found" });
      return;
    }

    const updatedTask = await Task.findByIdAndUpdate(
      id,
      { title, content },
      { new: true }
    );
    res.status(200).json(updatedTask);
    return;
  } catch (err) {
    res.status(500).json({ error: "Failed to update note" });
    return;
  }
}

// DELETE note by id
export async function deleteNotes(req, res) {
  try {
    const { id } = req.params;
    if (!id) {
      res.status(400).json({ error: "ID required" });
      return;
    }

    const task = await Task.findById(id);
    if (!task) {
      res.status(404).json({ error: "Note not found" });
      return;
    }
    await Task.deleteOne(id);
    res.status(204).json({ message: "Note deleted successfully" });
    return;
  } catch (err) {
    res.status(500).json({ error: "Failed to delete note" });
    return;
  }
}

export async function resetNotes() {
  return;
}
