// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, query, where, getDoc, doc, addDoc } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDuOIJEA1S4mncQ6Jcn8jbfQLpQA5_IhB4",
  authDomain: "proyecto-coder-react-a20fd.firebaseapp.com",
  projectId: "proyecto-coder-react-a20fd",
  storageBucket: "proyecto-coder-react-a20fd.appspot.com",
  messagingSenderId: "440614933204",
  appId: "1:440614933204:web:6c20f00af8279d642a6141",
  measurementId: "G-4CQQR3HSJR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();
const productsCollection = collection(db, "productos");
//const ordersCollection = collection(db, "orders");

export const getProducts = async () => {

  const querySnapshot = await getDocs(productsCollection);

  let productos = []                                          //Nuevo array productos de Firebase

  querySnapshot.forEach( doc => {                                             //Agrega el ID de Firebase al nuevo array productos
    // console.log(`${doc.id} => ${ JSON.stringify(doc.data())}`);
    // console.log(doc.data());
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

