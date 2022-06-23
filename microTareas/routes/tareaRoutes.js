import express from "express";
import {
  agregarTarea,
  obtenerTarea,
  actualizarTarea,
  eliminarTarea,
  cambiarEstado,
  agregarResponsable,
  obtenerTareasPorUsuario,
  obtenerTareasPorFecha,
} from "../controllers/tareaController.js";
import checkAuth from "../middleware/checkAuth.js";

const router = express.Router();

router.post("/", checkAuth, agregarTarea);
router
  .route("/:id")
  .get(checkAuth, obtenerTarea)
  .put(checkAuth, actualizarTarea)
  .delete(checkAuth, eliminarTarea);

router.post("/estado/:id", checkAuth, cambiarEstado);
router.post("/asignarResponsable/:id", checkAuth, agregarResponsable)
router.get("/usuario/:id",checkAuth, obtenerTareasPorUsuario)
router.post("/usuario/:id",checkAuth, obtenerTareasPorFecha)

export default router;
