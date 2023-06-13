import {initializeApp} from "firebase/app" //inicia conexion con firebase
import {getFirestore} from "firebase/firestore" //obtenes instancia del servicio de firestore
import 'dotenv/config'

//Info Cuenta, key personal acceso.
const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: "e-comerce-beckmann.firebaseapp.com",
    projectId: "e-comerce-beckmann",
    storageBucket: "e-comerce-beckmann.appspot.com",
    messagingSenderId: "516651976217",
    appId: "1:516651976217:web:2f5591490ec5d960c0cc88",
    measurementId: "G-ENXHYKJ27R"
  };

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
//export referencia, para usar en toda la app