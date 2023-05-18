



// // src/pages/Counter.js
// import React, { useState, useEffect } from "react";

// const Counter = () => {
//   const [count, setCount] = useState(0);
//   const [price, setPrice] = useState(0);
//   const [submitted, setSubmitted] = useState(false);

//   useEffect(() => {
//     const fetchData = async () => {
//       const response = await fetch("http://localhost:3300/api/routes/compteur/1");
//       const data = await response.json();
//       if (data) {
//         setCount(data.count);
//         setPrice(data.price);
//       }
//     }
//     fetchData();
//   }, []);

//   const handleValidation = () => {
//     if (!submitted) {
//       setCount(count + 1);
//       setSubmitted(true);
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const response = await fetch("http://localhost:3300/api/routes/compteur/1", {
//       method: "PUT",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ count, price }),
//     });

//     if (response.ok) {
//       alert("Données enregistrées avec succès !");
//       setSubmitted(false);
//     } else {
//       alert("Erreur lors de l'enregistrement des données.");
//     }
//   };

//   return (
//     <div className="container">
//       <div className="counter">
//         <h2>Compteur : {count}</h2>
//         <button onClick={handleValidation}>Valider la journée</button>
//       </div>
//       <form onSubmit={handleSubmit}>
//         <label htmlFor="price">Prix moyen journalier des produits :</label>
//         <input
//           type="number"
//           id="price"
//           value={price}
//           onChange={(e) => setPrice(e.target.value)}
//           required
//         />
//         <button type="submit">Enregistrer le prix</button>
//       </form>
//     </div>
//   );
// };

// export default Counter;



















// import React, { useState, useEffect } from "react";

// const Counter = () => {
//   const [count, setCount] = useState(() => localStorage.getItem('compteur') ? parseInt(localStorage.getItem('compteur')) : 0);
//   const [price, setPrice] = useState(0);
//   const [submitted, setSubmitted] = useState(false);
//   const [dateDebut, setDateDebut] = useState(() => localStorage.getItem('date-debut') ? localStorage.getItem('date-debut') : null);
//   const [dernierClic, setDernierClic] = useState(() => localStorage.getItem('dernierClic') ? new Date(localStorage.getItem('dernierClic')) : null);

//   useEffect(() => {
//     const fetchData = async () => {
//       const response = await fetch("http://localhost:3300/api/routes/compteur/1");
//       const data = await response.json();
//       if (data) {
//         setCount(data.count);
//         setPrice(data.price);
//       }
//     }
//     fetchData();
//   }, []);

//   useEffect(() => {
//     localStorage.setItem('compteur', count);
//     localStorage.setItem('date-debut', dateDebut);
//     localStorage.setItem('dernierClic', dernierClic.toString());
//   }, [count, dateDebut, dernierClic]);

//   const handleClick = () => {
//     let maintenant = new Date();
//     if (!dernierClic || maintenant - dernierClic >= 24 * 60 * 60 * 1000) {
//       setCount(prevCount => prevCount + 1);
//       setDernierClic(maintenant);
//     } else {
//       alert("Vous ne pouvez cliquer qu'une fois toutes les 24 heures");
//     }
//   };

//   const handleReset = () => {
//     setCount(0);
//     setDernierClic(null);
//     setDateDebut(null);
//     alert("Le compteur a été réinitialisé");
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const response = await fetch("http://localhost:3300/api/routes/compteur/1", {
//       method: "PUT",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ count, price }),
//     });

//     if (response.ok) {
//       alert("Données enregistrées avec succès !");
//       setSubmitted(false);
//     } else {
//       alert("Erreur lors de l'enregistrement des données.");
//     }
//   };

//       return (
//         <div>
//           <main>
//             <section className="compteur">
//               <h2>Compteur journalier</h2>
//               <div className="compteur-wrapper">
//                 <div className="compteur-container">
//                   <p>
//                     <label htmlFor="date-debut">Date de début d'arrêt:</label>
//                     <span><input type="date" id="date-debut" value={dateDebut} onChange={(e) => setDateDebut(e.target.value)} /></span>
//                   </p>
//                   <p>
//                     <label htmlFor="jours-arret">Nombre de jours d'arrêt:</label>
//                     <span><input type="number" id="jours-arret" readOnly value={count} /></span>
//                   </p>
//                   <p>
//                     <label htmlFor="date-du-jour">Date du jour:</label>
//                     <span><input type="date" id="date-du-jour" readOnly value={new Date().toISOString().substring(0, 10)} /></span>
//                   </p>
//                 </div>
//                 <div className="compteur-actions">
//                   <div>
//                     <button id="monBouton" onClick={handleClick}>Cliquez-moi</button>
//                   </div>
//                   <div>
//                     <p id="compteur">{count}</p>
//                   </div>
//                   <div>
//                     <button id="monBoutonReset" onClick={handleReset}>Réinitialiser</button>
//                   </div>
//                 </div>
//               </div>
//             </section>
//           </main>

//             <form onSubmit={handleSubmit}>
//               <label htmlFor="price">Prix moyen journalier des produits :</label>
//                 <input
//                   type="number"
//                   id="price"
//                   value={price}
//                   onChange={(e) => setPrice(e.target.value)}
//                   required
//                 />
//               <button type="submit">Enregistrer le prix</button>
//             </form>

//           <footer>
//             <p>© 2023 Lutte contre les addictions. Tous droits réservés.</p>
//           </footer>
//         </div>
//       );
// };

// export default Counter;


















import React, { useState, useEffect } from "react";

const Counter = () => {
  const [count, setCount] = useState(() => localStorage.getItem('compteur') ? parseInt(localStorage.getItem('compteur')) : 0);
  const [price, setPrice] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [dateDebut, setDateDebut] = useState(() => localStorage.getItem('date-debut') ? localStorage.getItem('date-debut') : null);
  const [dernierClic, setDernierClic] = useState(() => localStorage.getItem('dernierClic') ? new Date(localStorage.getItem('dernierClic')) : null);
  const [dailySum, setDailySum] = useState(0); // Ajout de l'état dailySum
  const [total, setTotal] = useState(0); // Ajout de l'état total

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:3300/api/routes/compteur/1");
      const data = await response.json();
      if (data) {
        setCount(data.count);
        setPrice(data.price);
      }
    }
    fetchData();
  }, []);

  useEffect(() => {
    localStorage.setItem('compteur', count);
    localStorage.setItem('date-debut', dateDebut);
    if (dernierClic) {
      localStorage.setItem('dernierClic', dernierClic.toString());
    }
  }, [count, dateDebut, dernierClic]);

  const handleClick = () => {
    let maintenant = new Date();
    if (!dernierClic || maintenant - dernierClic >= 24 * 60 * 60 * 1000) {
      setCount(prevCount => prevCount + 1);
      setDernierClic(maintenant);
    } else {
      alert("Vous ne pouvez cliquer qu'une fois toutes les 24 heures");
    }
  };

  const handleReset = () => {
    setCount(0);
    setDernierClic(null);
    setDateDebut(null);
    alert("Le compteur a été réinitialisé");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const total = Number(price) + Number(dailySum);
    setTotal(total);
    const response = await fetch("http://localhost:3300/api/routes/compteur/1", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ count, price }),
    });

    if (response.ok) {
      alert("Données enregistrées avec succès !");
      setSubmitted(false);
    } else {
      alert("Erreur lors de l'enregistrement des données.");
    }
  };

  return (
    <div>
      <main>
        <section className="compteur">
          <h2>Compteur journalier</h2>
          <div className="compteur-wrapper">
            <div className="compteur-container">
              <p>
                <label htmlFor="date-debut">Date de début d'arrêt:</label>
                <span><input type="date" id="date-debut" value={dateDebut} onChange={(e) => setDateDebut(e.target.value)} /></span>
              </p>
              <p>
                <label htmlFor="jours-arret">Nombre de jours d'arrêt:</label>
                <span><input type="number" id="jours-arret" readOnly value={count} /></span>
              </p>
              <p>
                <label htmlFor="date-du-jour">Date du jour:</label>
                <span><input type="date" id="date-du-jour" readOnly value={new Date().toISOString().substring(0, 10)} /></span>
              </p>
            </div>
            <div className="compteur-actions">
              <div>
                <button id="monBouton" onClick={handleClick}>Cliquez-moi</button>
              </div>
              <div>
                <p id="compteur">{count}</p>
              </div>
              <div>
                <button id="monBoutonReset" onClick={handleReset}>Réinitialiser</button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <form onSubmit={handleSubmit}>
        {/* Reste du formulaire */}
        <label htmlFor="dailySum">Somme du jour :</label>
        <input
          type="number"
          id="dailySum"
          value={dailySum}
          onChange={(e) => setDailySum(e.target.value)}
          required
        />
        <button type="submit">Enregistrer le prix et la somme du jour</button>
      </form>

      <div className="total">
        <h3>Total : {total}</h3>
      </div>

      {/* Reste du code */}
    </div>
  );
};

export default Counter;









         
