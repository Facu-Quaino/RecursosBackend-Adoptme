import { usersService } from "../services/index.js"
import { petsService } from "../services/index.js"

const index =(req,res)=>{
    res.render("index", {title: "AdoptMe - Inicio"})
}

const getAllUsers = async(req,res)=>{
    const users = await usersService.getAll();
    res.render("users", {users})
}

const getAllPets = async(req,res)=>{
    const pets = await petsService.getAll();
    res.render("pets", {pets})
}

export default {
    index,
    getAllUsers,
    getAllPets
}