import mongoose from "mongoose"

const projectSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
        maxLength: 120
    },
    slug: {
        type: String,
        unique: true,
        lowercase: true,
        trim: true,
    },
    description: {
        type: String,
        required: true,
        trim: true,
        maxLength: 1000
    },
    techStack: {
        type: [String],
        default: []
    },
    githubUrl: {
        type: String,
        trim: true,
        default: ''
    },
    liveUrl:{
        type:String,
        trim:true,
        default:''
    },
    image: {
        type: String,
        trim: true,
        default: ''
    },
    featured: {
        type: Boolean,
        default: false
    },
    order: {
        type: Number,
        default: 0
    }
}, { timestamps: true })

projectSchema.pre('validate', function () {
    if (!this.slug && this.title) {
        this.slug = this.title
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, '-')
            .replace(/^-+|-+$/g, '');
    }
})

export const Project = mongoose.model("Project", projectSchema)