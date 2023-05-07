import UserModel from "../Models/UserModel.js";
import bcrypt from 'bcrypt';

//registering new user
export const registerUser = async (req, res) => {
    const { username, password, firstname, lastname } = req.body;

    const salt = await bcrypt.genSalt(10);
    const hashedPass = await bcrypt.hash(password, salt);

    const newUser = new UserModel({ username, password: hashedPass, firstname, lastname });

    try {
        await newUser.save();
        res.status(200).json(newUser);
    } catch (error) {
        res.status(500).json({ message: error.message });
    };
};

//login user
export const loginUser = async (req, res) => {
    const { username, password } = req.body;

    //find user in db
    try {
        const user = await UserModel.findOne({ username: username });

        if (user) {
            //check password
            const validity = await bcrypt.compare(password, user.password);

            validity ? res.status(200).json(user) : res.status(400).json("Wrong password!");
        } else {
            res.status(404).json("User not found in db.");
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


