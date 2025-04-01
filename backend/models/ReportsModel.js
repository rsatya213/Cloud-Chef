const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reportSchema = new Schema({
    reportedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    reportedItem: { type: mongoose.Schema.Types.ObjectId, required: true },
    reason: { type: String, required: true },
    type: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
}, { timestamps: true });

module.exports = mongoose.model('Report', reportSchema);