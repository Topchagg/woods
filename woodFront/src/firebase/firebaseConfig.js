import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  storageBucket: 'gs://woods-2ad7b.appspot.com'
};

const app = initializeApp(firebaseConfig);


const storage = getStorage(app);

export default storage