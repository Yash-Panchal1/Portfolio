import {Project} from "../models/project.model.js"
import { asyncHandler } from "../utils/asyncHandler.js"
import {ApiResponse} from "../utils/ApiResponse.js"
import {ApiError} from "../utils/ApiError.js"

// GET /api/projects?featured=true
const getProjects = asyncHandler(async(req,res)=>{
    const filter = req.query.featured == 'true' ? {featured:true} :{};
    const projects = await Project.find(filter).sort({order:1,createdAt:-1})
    return res
    .status(200)
    .json(new ApiResponse(200,projects,"projects fetched"))
})


// GET /api/projects/:slug
const getProjectBySlug = asyncHandler(async(req,res)=>{
     const {slug} = req.params
    const project = await Project.findOne({slug:slug.toLowerCase()})
     if(!project){
        throw new ApiError(404,"Project not found")
     }
     return res
     .status(200)
     .json(new ApiResponse(200,project,"Project fetched"))
})

// POST /api/projects  (admin)
const createProject = asyncHandler(async (req, res) => {
  const { title, description, techStack, githubUrl, liveUrl, image, featured, order } = req.body;

  if (!title?.trim() || !description?.trim()) {
    throw new ApiError(400, 'Title and description are required');
  }

  const project = await Project.create({
    title,
    description,
    techStack,
    githubUrl,
    liveUrl,
    image,
    featured,
    order,
  });

  return res
    .status(201)
    .json(new ApiResponse(201, project, 'Project created successfully'));
});

const updateProject = asyncHandler(async(req,res)=>{
     const {projectId} = req.params
   const project = await Project.findByIdAndUpdate(projectId,req.body,{
        new:true,
        runValidators:true
    })
    if(!project){
        throw new ApiError(404,"project not found")
    }
    return res
    .status(200)
    .json(new ApiResponse(200,project,"project updated"))
})

const deleteProject = asyncHandler(async(req,res)=>{
    const {projectId} = req.params
   const project = await Project.findByIdAndDelete(projectId)

   if(!project){
    throw new ApiError(404,"project not found")
   }
   return res
   .status(200)
   .json(new ApiResponse(200,{},"Project deleted succesfully"))
})



export {
    getProjects,
    getProjectBySlug,
    createProject,
    updateProject,
    deleteProject
}
