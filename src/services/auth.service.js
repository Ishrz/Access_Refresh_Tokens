import { generateAccessToken, generateRefreshToken } from "../../utils/genrateTokens.js";
import User from "../models/user.model.js";
import bcrypt from "bcrypt";

export const registerService = async (userData) => {

    const { username, email, password } = userData

    if (!username || !email || !password) {
      throw new Error("Username, email, and password are required");
    }

    const isUserExists = await User.findOne({ email });

    if (isUserExists) {
       throw new Error("User already exists");
    }

    const hashPass = await bcrypt.hash(password, 7);

    const user = await User.create({
      username,
      email,
      password: hashPass,
    });

    const accessToken = await generateAccessToken(user._id)
    const refreshToken = await generateRefreshToken(user._id)

    return {
        user:{
            username: user.username,
            email: user.email,
            id: user._id,
        },
        accessToken,
        refreshToken
    }

}

export const loginService = async (userData) => {

     const {email, password } = userData;

    if(!email || !password) {
     throw new Error("Email and password are required");
    }

    const user = await User.findOne({email})

    if(!user) {
        throw new Error("User not found")
    }

    const isPasswordValid = await bcrypt.compare(password,user.password)

    if(!isPasswordValid) {
        throw new Error("Invalid password")
    }

    const accessToken = await generateAccessToken(user._id)
    const refreshToken = await generateRefreshToken(user._id)

    return {
        accessToken,
        refreshToken,
        user:{
            username: user.username,
            email: user.email,
            id: user._id,
        }
    }

}