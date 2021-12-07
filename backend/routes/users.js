const router = require('express').Router();
const userController = require('../controllers/users');

router.route('/').get(userController.getAllUsers);

router.route('/').post(userController.createUser);

router.route('/:id').delete(userController.deleteUser);

router.route('/:id').get(userController.getUser);

router.route('/:id').put(userController.updateUserData);

module.exports = router;
