import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please add your name"],
    trim: true,
    maxLength: [20, "Your name is up to 20 chars long."]
  },
  account: {
    type: String,
    required: [true, "Please add your email or phone"],
    trim: true,
    unique: true
  },
  password: {
    type: String,
    required: [true, "Please add your password"],
    trim: true
  },
  avatar: {
    type: String,
    default: 'https://api.dicebear.com/5.x/pixel-art/svg?seed=Coco'
  },
  role: {
    type: String,
    defaul: 'user' // admin
  },
  type: {
    type: String,
    defaul: 'normal' // fast
  }
}, {
  timestamps: true
})

export default mongoose.model('User', userSchema)