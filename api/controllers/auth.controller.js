import User from '../models/user.model.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import createError from '../utils/errors.js';

export const register = async (req, res, next) => {
  const hashPass = bcrypt.hashSync(req.body.password, 5);

  try {
    const newUser = new User({
      ...req.body,
      password: hashPass,
    });

    await newUser.save();

    res.status(201).send('New user has been created');
  } catch (err) {
    next(err);
  }
};

export const login = async (req, res, next) => {
  try {
    const user = await User.findOne({ username: req.body.username });

    if (!user) {
      const err = createError(404, 'User not found');
      return next(err);
    }

    const isCorrect = bcrypt.compareSync(req.body.password, user.password);

    if (!isCorrect) return next(createError(404, 'Wrong password or username'));

    const { password, ...info } = user._doc;

    const token = jwt.sign(
      {
        id: user._id,
        isSeller: user.isSeller,
      },
      process.env.JWT_KEY
    );

    res
      .cookie('accessToken', token, { httpOnly: true })
      .status(200)
      .send(info);
  } catch (err) {
    next(err);
  }
};

export const logout = (req, res) => {
  res.send('from controller');
};
