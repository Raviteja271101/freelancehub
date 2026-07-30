import express from "express"
import { createClient, deleteClient, getClientById, getClients, updateClient } from "../controllers/clientController.js";
import { protect } from "../middleware/authMiddleware.js";
const  router =express.Router();

router.post("/",protect, createClient)
router.get("/",protect, getClients )
router.get("/:id",protect, getClientById)
router.put("/:id",protect, updateClient)
router.delete("/:id",protect, deleteClient)

export default router;