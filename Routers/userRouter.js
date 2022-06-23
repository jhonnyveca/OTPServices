const router = require('express').Router();
const { signUp, verifyOtp } = require('../Controllers/userController');

router.route('/signup').post(signUp);
router.route('/signup/verify').post(verifyOtp);
//router.route("/register").post(registerConfirmation);

module.exports = router;
