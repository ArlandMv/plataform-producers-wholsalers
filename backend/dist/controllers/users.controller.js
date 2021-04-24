"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUser = exports.hardDeleteUser = exports.getUser = exports.getUsers = exports.createUser = void 0;
//CREATE POST
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const exist = true; //await User.findOne({rut: req.body.rut})
    if (exist) {
        return res.status(301).json({ message: 'The rut already exist' });
    }
    //verify req.body
    //const user = new User(req.body)
    //const savedUser = await user.save()
    //res.json(savedUser)
});
exports.createUser = createUser;
//LIST GET
const getUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    /* try {
        const users = await User.find()
        res.json(users)
    } catch (error) {
        res.json(error)
    } */
});
exports.getUsers = getUsers;
//LIST ONE GET
const getUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    /* try {
        console.log(req.params.id)
        const userByRut = await User.findOne({"rut": req.params.id})

        if (userByRut) {
            return res.json(userByRut)
        }else{
            return res.status(204).json()
        }
    } catch (error) {
        console.log(error)
        res.json(error)
    } */
});
exports.getUser = getUser;
//HARD-DELETE DELLETE
const hardDeleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    /* try {
        const userByRut = await User.findOneAndDelete({"rut": req.params.id})
        if (userByRut) {
            return res.json(userByRut)
        }else{
            return res.status(204).json()
        }
    } catch (error) {
        console.log(error)
        res.json(error)
    } */
});
exports.hardDeleteUser = hardDeleteUser;
//UPDATE PUT
const updateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    /* try {
        const user = await User.findOneAndUpdate(
            {"rut": req.params.id},
            req.body
        )
        if (user) {
            return res.json(user)
        }else{
            return res.status(204).json('not found')
        }
    } catch (error) {
        console.log(error)
        res.json(error)
    } */
});
exports.updateUser = updateUser;
