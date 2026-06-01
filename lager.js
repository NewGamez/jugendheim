import { db } from "./firebase.js";

import {
 collection,
 addDoc,
 getDocs
}
from
"https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

window.speichern = async () => {

  await addDoc(
    collection(db, "lager"),
    {
      artikel:
      document.getElementById("artikel").value,

      anzahl:
      Number(
        document.getElementById("anzahl").value
      )
    }
  );

  laden();
};

async function laden() {

  const liste =
  document.getElementById("liste");

  liste.innerHTML = "";

  const daten =
  await getDocs(
    collection(db, "lager")
  );

  daten.forEach((doc) => {

    const item = doc.data();

    liste.innerHTML += `
      <p>
      ${item.artikel}
      -
      ${item.anzahl}
      Stück
      </p>
    `;
  });
}

laden();
