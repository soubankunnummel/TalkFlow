import express from 'express'
import { folloUnfollowUser, getUserProfile, loginUser, logoutUser, signupUser, updateUser } from '../controllers/userController.js';
import trycatch from '../middelwares/trycatch.js'
import protectRoute from '../middelwares/protectRoute.js';

const router = express.Router()

router.get("/profile/:username",getUserProfile )
router.post("/signup",trycatch,signupUser )
router.post("/login",loginUser )
router.post("/logout",logoutUser )
router.post("/follow/:id",protectRoute,folloUnfollowUser )
router.post("/update/:id",protectRoute,updateUser )

export default router   