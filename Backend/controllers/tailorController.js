const Tailor = require('../models/Tailor');

// @desc    Get all tailors (supports search by name/skill)
// @route   GET /api/tailors
const getTailors = async(req, res) => {
    try {
        const tailors = await Tailor.find();
        res.status(200).json(tailors);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Get single tailor
// @route   GET /api/tailors/:id
const getTailorById = async(req, res) => {
    try {
        const tailor = await Tailor.findById(req.params.id);
        if (!tailor) {
            return res.status(404).json({ message: 'Tailor not found' });
        }
        res.status(200).json(tailor);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Register a new tailor
// @route   POST /api/tailors
const createTailor = async(req, res) => {
    try {
        const { name, skills, experience, price, location, description } = req.body;

        if (!name || !price || !location || !skills) {
            return res.status(400).json({ message: 'Please fill all required fields' });
        }

        const tailor = await Tailor.create({
            name,
            skills,
            experience,
            price,
            location,
            description
        });

        res.status(201).json(tailor);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// @desc    Update tailor profile
// @route   PUT /api/tailors/:id
const updateTailor = async(req, res) => {
    try {
        const updatedTailor = await Tailor.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true // Ensures validations like 'required' run on update
        });

        if (!updatedTailor) {
            return res.status(404).json({ message: 'Tailor not found' });
        }
        res.status(200).json(updatedTailor);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// @desc    Delete tailor
// @route   DELETE /api/tailors/:id
const deleteTailor = async(req, res) => {
    try {
        const tailor = await Tailor.findById(req.params.id);

        if (!tailor) {
            return res.status(404).json({ message: 'Tailor not found' });
        }

        await tailor.deleteOne();
        res.status(200).json({ message: 'Tailor removed' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { getTailors, getTailorById, createTailor, updateTailor, deleteTailor };