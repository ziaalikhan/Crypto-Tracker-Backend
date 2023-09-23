const RegisterSchema = require("../Models/Register");
const bcrypt = require("bcrypt");




const Login = async (req, res) => {
    const { email, password } = req.body;
    // #############      HASH PASSWORD    ###########

    try {

        if (!email) {
            return res.status(203).json({ message: "Email is Required!" })
        } else if (!password) {
            return res.status(203).json({ message: "Password is Required!" })
        }

        let find_user = await RegisterSchema.findOne({ email: email });

        if (!find_user) {
            return res.status(200).json({ message: "Email is Not Registered!" })
        } else {

            const valid = await bcrypt.compare(password, find_user.password);

            if (!valid) return res.status(200).json({ message: "Your Password is Incorrect!" })
            
            return res.status(200).json({ message: "You Have Successfuly Log In!" })
        }

        // console.log("find_user", find_user)


    } catch (error) {
        return res.status(404).send({ message: error });
    }
}



module.exports = {
    Login
}
