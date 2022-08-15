const { Category } = require("../../db/models");

module.exports = {
    getAllCategories: async (req, res, next) => {
        try {
            const categories = await Category.findAll({
                where : {user: req.user.id},
                attributes: ['id', 'name']
            });
            res.status(200).json({
                message: "Successfully retrieved all categories",
                data: categories
            });
        } catch (error) {
            res.status(500).json({
                message: error.message
            });
            next(error);
        }
    },

    createCategories: async (req, res, next) => {
        try {
            const { name } = req.body;
            const category = await Category.create({
                name,
                user: req.user.id
            });
            res.status(201).json({
                message: "Successfully created category",
                data: category
            });
        } catch (error) {
            res.status(500).json({
                message: error.message
            });
            next(error);
        }
    },

    updateCategories : async (req, res, next) => {
        try {
            const { name } = req.body;
            const { id } = req.params;
            const category = await Category.findOne({
                where: {
                    id,
                    user: req.user.id
                }
            });
            if (!category) {
                res.status(404).json({
                    message: "Category not found"
                });
            } else {
                await category.update({
                    name
                });
                res.status(200).json({
                    message: "Successfully updated category",
                    data: category
                });
            }
        } catch (error) {
            res.status(500).json({
                message: error.message
            });
            next(error);
        }
    },

    deleteCategories : async (req, res, next) => {
        try {
            const { id } = req.params;
            const category = await Category.findOne({
                where: {
                    id,
                    user: req.user.id
                }
            });
            if (!category) {
                res.status(404).json({
                    message: "Category not found"
                });
            } else {
                await category.destroy();
                res.status(200).json({
                    message: "Successfully deleted category"
                });
            }
        } catch (error) {
            res.status(500).json({
                message: error.message
            });
            next(error);
        }
    }
}