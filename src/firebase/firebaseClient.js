// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, getDoc, doc, addDoc } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTHDOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECTID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGINGSENDERID,
  appId: process.env.REACT_APP_FIREBASE_APPID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENTID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();
const productsCollection = collection(db, "productos");
const ordersCollection = collection(db, "orders");

export const getProducts = async () => {

  const querySnapshot = await getDocs(productsCollection);

  let productos = []                                                          //Nuevo array productos de Firebase

  querySnapshot.forEach( doc => {                                             //Agrega el ID de Firebase al nuevo array productos
    productos.push({
      id: doc.id,
      ...doc.data()
    })
  });

  return productos
}

export const getProductById = async (id) => {

  const docRef = doc(productsCollection, id);
  const docSnap = await getDoc(docRef);

  return docSnap.data()
}

export const addOrder = async (order) => {
  const docSnap = await addDoc(ordersCollection, order)
  return docSnap.id
}