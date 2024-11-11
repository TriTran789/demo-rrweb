import mongoose from 'mongoose';

const Record = new mongoose.Schema({
  type: {
    type: Number,
    required: true,
  },
  data: {
    href: { type: String },
    width: { type: Number },
    height: { type: Number },
    node: { type: Object },
    initialOffset: { type: Object },
    source: { type: Number },
    type: { type: Number },
    id: { type: Number },
    x: { type: Number },
    y: { type: Number },
    texts: [{ type: String }],
    attributes: [{ type: Object }],
    removes: [{ type: Object }],
    adds: [{ type: Object }],
    positions: [{ type: Object }],
  },
  timestamp: {
    type: Number,
    required: true,
  },
}, { timestamps: true });

export default mongoose.models.Record || mongoose.model('Record', Record);
