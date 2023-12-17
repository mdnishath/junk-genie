import { Query, Schema, model } from 'mongoose';
import { IUser } from './user.interface';
import bcrypt from 'bcrypt';
import { BYCRYPT_SOLT } from '../../config';

const userSchema = new Schema<IUser>(
  {
    password: { type: String, required: true },
    needPasswordChange: { type: Boolean, default: true },
    role: { type: String, enum: ['loader', 'admin', 'customer'] },
    status: { type: String, enum: ['in-progress', 'blocked'], default: 'in-progress' },
    isDeleted: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  },
);

// hassing password before inserting into DB
userSchema.pre('save', async function (this, next) {
  try {
    this.password = await bcrypt.hash(this.password, Number(BYCRYPT_SOLT));
    next();
  } catch (error: any) {
    next(error);
  }
});
//After saving data exclude password
userSchema.post('save', function (doc, next) {
  if (doc.password) {
    const noPassDoc: Omit<IUser, 'password'> & { password?: string } = {
      ...doc.toObject(),
      password: undefined,
    };

    // Update the original document with the new object
    Object.assign(doc, noPassDoc);
  }
  next();
});
// hassing password when updating
userSchema.pre('findOneAndUpdate', async function (this: any, next) {
  try {
    // console.log('Pre Middleware ===>', this._update);
    if (this._update.password) {
      this._update.password = await bcrypt.hash(this._update.password, BYCRYPT_SOLT);
      next();
    }
    next();
  } catch (error: any) {
    return next(error);
  }
});
// exclude password field for all find query
userSchema.pre(/^find/, function (this: Query<IUser, Document>, next) {
  this.select('-password');
  next();
});

export const User = model<IUser>('User', userSchema);
