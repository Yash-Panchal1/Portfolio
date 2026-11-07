import { Router } from "express"
import { getProjects,
  getProjectBySlug,
  createProject,
  updateProject,
  deleteProject} from "../controllers/project.controller.js"
import  requireAdmin from "../middlewares/adminMiddleware.js"

const router = Router();

//api/projects
router.get('/',getProjects)
router.get('/:slug',getProjectBySlug)


// /api/projects/create
router.post('/create',requireAdmin,createProject)
// /api/projects/:projectId
router.put('/:projectId',requireAdmin,updateProject)
router.delete('/:projectId',requireAdmin,deleteProject)

  export default router