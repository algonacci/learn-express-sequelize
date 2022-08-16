const { Book, Category } = require("../../db/models");
const Op = require("sequelize").Op;

module.exports = {
    getAllBooks: async (req, res, next) => {
        try {
            const {keyword} = req.query;
            let condition = {
                user: req.user.id
            };

            if (keyword !== undefined) {
                condition = {...condition, title: {[Op.like]: `%${keyword}%`}};
            }

            const books = await Book.findAll({
                where : condition,
                include: {
                    model: Category,
                    attributes: ['id', 'name']
                },
            });
            res.status(200).json({
                message: "Successfully retrieved all books",
                data: books
            });

        } catch (error) {
            res.status(500).json({
                message: error.message
            });
            next(error);
        }
    },
}