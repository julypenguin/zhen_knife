import { initializeApp } from "firebase/app";
import { initializeAppCheck } from "firebase/app-check";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
import { firebaseConfig } from 'firebaseConfig'

const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// const storage = getStorage(app);
const db = getFirestore(app);

export default () => {
    return {
        db,
    }
}