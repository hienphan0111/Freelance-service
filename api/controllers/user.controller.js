import User from '../models/user.model.js';
import createError from '../utils/errors.js';

export const deleteUser = async (req, res, next) => {
  
  const user = await User.findById(req.params.id)
  if ( req.id !== user._id.toString() ) return next( createError(403, 'You can only delete your own'));
  try {
    const user = await User.findByIdAndDelete(req.id)
    res.status(200).send('Deleted')
  } catch (err) {
    next(err);
  }
}

export const logout = async (req, res, next) => {
  res.cookie('accessTOken', {
    sameSite: nodemon,
    secure: true,
  }).status(200)
  .send('User has been logout');

}