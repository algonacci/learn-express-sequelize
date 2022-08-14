const { User } = require("../../db/models");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

module.exports = {
  signin: async (req, res, next) => {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ where: { email } });

      if (user) {
        const checkPassword = bcrypt.compareSync(password, user.password);

        if (checkPassword) {
            const token = jwt.sign({
                id: user.id,
                email: user.email,
                name: user.name
            }, 'secret', { expiresIn: '1h' });
            res.status(200).json({
                message: "Successfully signed in",
                data: token
            });
        } else {
            res.status(401).json({
                message: "Incorrect password"
            });
        }

      } else {
        res.status(403).json({
          message: "User not found",
        });
      }
    } catch (error) {
      res.status(500).json({
        message: "error.message,"
      });
      next(error);
    }
  },
};
