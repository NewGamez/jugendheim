import { db } from "./firebase.js";

import {
 collection,
 addDoc,
 getDocs
}
from
"https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

window.eintragSpeichern = async () => {

  await addDoc(
    collection(db, "kassabuch"),
    {
      beschreibung:
      document.getElementById("beschreibung").value,

      betrag:
      Number(
        document.getElementById("betrag").value
      ),

      datum:
      new Date()
    }
  );

  ladeEintraege();
};

async function ladeEintraege() {

  const liste =
  document.getElementById("liste");

  liste.innerHTML = "";

  const querySnapshot =
  await getDocs(
    collection(db, "kassabuch")
  );

  querySnapshot.forEach((doc) => {

    const data = doc.data();

    liste.innerHTML += `
      <p>
      ${data.beschreibung}
      -
      ${data.betrag}€
      </p>
    `;
  });
}

ladeEintraege();
