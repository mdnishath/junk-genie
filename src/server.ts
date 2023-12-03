import app from './app';
import mongoose from 'mongoose';
import { DB_LOCAL_URL, PORT } from './app/config';

main().catch((err) => console.log(err));

async function main() {
  try {
    await mongoose.connect(DB_LOCAL_URL as string);
    app.listen(PORT, () => {
      console.log(`Junk Genie app listening on port ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
}
