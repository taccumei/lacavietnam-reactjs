import { connect, set } from 'mongoose';
import { UserModel } from '../models/user.model.js';
import { FoodModel } from '../models/food.model.js';
import { sample_foods } from '../data.js';
import { sample_users } from '../data.js';
import bcrypt from 'bcryptjs';

const PASSWORD_HASH_SALT_ROUNDS = 10;
set('strictQuery', true);

export const dbconnect = async () => {
  try {
    connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    await seedUser();
    await seedFood();
    console.log('connect successfully---');
  } catch (error) {
    console.log(error);
  }
};

async function seedUser() {
  const userCount = await UserModel.countDocuments();
  if (userCount > 0) {
    console.log('User seed is already done!');
    return;
  }

  for (let user of sample_users) {
    user.password = await bcrypt.hash(user.password, PASSWORD_HASH_SALT_ROUNDS);
    await UserModel.create(user);
  };

  console.log('User seed is done!');
}

async function seedFood() {
  const foodCount = await FoodModel.countDocuments();
  if (foodCount > 0) {
    console.log('Food seed is already done!');
    return;
  }

  for (const food of sample_foods) {
    food.imageUrl = `/foods/${food.imageUrl}`;
    await FoodModel.create(food);
  }

  console.log('Food seed is done!');

}