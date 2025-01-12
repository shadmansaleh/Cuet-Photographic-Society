import express from 'express';
import { auth, AuthRequest } from '../middlewares/auth';
import { Photo } from "../models/Photo"

const router = express.Router();

// Get all photos
router.get('/', async (req, res) => {
  try {
    const photos = await Photo.find().populate('user', 'name');
    res.json(photos);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

// Upload a photo
router.post('/', auth, async (req: AuthRequest, res) => {
  try {
    const photo = new Photo({
      ...req.body,
      user: req.user._id
    });
    await photo.save();
    res.status(201).json(photo);
  } catch (error) {
    res.status(400).json({ error: 'Upload failed' });
  }
});

// Vote for a photo
router.post('/:id/vote', auth, async (req: AuthRequest, res) => {
  try {
    const photo = await Photo.findByIdAndUpdate(
      req.params.id,
      { $inc: { votes: 1 } },
      { new: true }
    );
    res.json(photo);
  } catch (error) {
    res.status(400).json({ error: 'Vote failed' });
  }
});

export default router;
