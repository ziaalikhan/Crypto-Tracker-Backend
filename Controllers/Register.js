const RegisterSchema = require("../Models/Register");
const bcrypt = require("bcrypt");

const Register = async (req, res) => {
    const { email, password, confirm_password } = req.body;
    // #############      HASH PASSWORD    ###########
    const salt = await bcrypt.genSalt(10);
    const hash_password = await bcrypt.hash(password, salt);
    const hash_confirm_password = await bcrypt.hash(confirm_password, salt);

    try {
        let user_already_Registered = await RegisterSchema.findOne({ email: email });

        // #############      Required Fields    ###########
        if (!email) {
            return res.status(203).json({ message: "Email is Required!" })
        } else if (!password) {
            return res.status(203).json({ message: "Password is Required!" })
        } else if (!confirm_password) {
            return res.status(203).json({ message: "Confirm Password is Required!" })
        }


        if (user_already_Registered) {
            return res.status(404).json({ message: "Your Email is Already Registered!" })
        } else {
            await RegisterSchema({
                email,
                password: hash_password,
                confirm_password: hash_confirm_password
            }).save();
        }

       return res.status(200).json({ message: "Your Account is Registered Successfuly!" });

    } catch (error) {
        return res.status(404).send({ message: error });
    }
}



module.exports = {
    Register
}



