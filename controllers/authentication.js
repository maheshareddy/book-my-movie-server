const user = require("../models/user");
const lib = require("../lib/user");

const handleSignup = async (req, res) => {
  const safeParseResult = lib.validateUserSignup(req.body);

  if (safeParseResult.error) {
    return res.status(400).json({
      status: "error",
      error: safeParseResult.error,
    });
  }

  const { firstName, lastName, email, passowrd } = safeParseResult.data;
  try {
    const { hash: hashedPassowrd, salt } = lib.generatehash(passowrd);

    const createUserResult = await user.create({
      firstName,
      lastName,
      email,
      passowrd: hashedPassowrd,
      salt,
    });

    //TODO: Generate JWT token and send that
    return res.json({ status: "success", data: { _id: createUserResult._id } });
  } catch (err) {
    if (err.code === 11000)
      return res.status(400).json({ message: error.message });
    return res.status(500).json({ message: "internal server error" });
  }
};
module.exports = {
  handleSignup,
};
