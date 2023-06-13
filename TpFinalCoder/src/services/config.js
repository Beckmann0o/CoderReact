import {initializeApp} from "firebase/app" //inicia conexion con firebase
import {getFirestore} from "firebase/firestore" //obtenes instancia del servicio de firestore

//Info Cuenta, key personal acceso.
const firebaseConfig = {
    apiKey: "AIzaSyCBLXfPUW9CC5ojFx_hOXJKvU6Y9FMm2Q0",
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