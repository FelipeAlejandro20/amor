// Configura Firebase para registrar visitas.
// 1. Crea un proyecto gratis en https://console.firebase.google.com
// 2. Agrega una app web y copia la configuracion aqui abajo
// 3. En Firestore Database crea la base de datos
// 4. En Reglas de Firestore pega esto:
//
// rules_version = '2';
// service cloud.firestore {
//   match /databases/{database}/documents {
//     match /visitas/{visitId} {
//       allow create: if true;
//       allow read: if true;
//     }
//   }
// }

const FIREBASE_CONFIG = {
  apiKey: "PEGAR_AQUI",
  authDomain: "PEGAR_AQUI",
  projectId: "PEGAR_AQUI",
  storageBucket: "PEGAR_AQUI",
  messagingSenderId: "PEGAR_AQUI",
  appId: "PEGAR_AQUI",
};

const ADMIN_CLAVE = "amor2026";
const VISITAS_ACTIVAS = FIREBASE_CONFIG.apiKey !== "PEGAR_AQUI";
