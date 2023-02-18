// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, get, child, onValue } from "firebase/database";
import { firebaseConfig } from "../../env.js";

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const dbRef = ref(db);


const getItemDb = async (path) => {
  const snapshot = await get(child(dbRef, path));
  if (snapshot.exists()) {
    return snapshot.val()
  }
}

const createItem = async (path, data) => set(ref(db, path), data);


const onListEventMessage = async (path: string, callback: (...params) => void) => {
  const starCountRef = ref(db, path);
  onValue(starCountRef, async (snapshot) => {
    callback(path);
  });
}

export { getItemDb, createItem, onListEventMessage }