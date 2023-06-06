






import React, { useEffect, useState } from "react";
import '../frontAssets/css/Home.css';
import dessin from '../frontAssets/img/dessin.jpg';
import panneaux from '../frontAssets/img/panneaux.jpg';
import cigarettes from '../frontAssets/img/cigarettes.jpg';
import alcool from '../frontAssets/img/alcool.webp';
import drogues from '../frontAssets/img/drogues.jpg';


const Home = () => {
  const [compteur, setCompteur] = useState(
    localStorage.getItem('compteur') ? parseInt(localStorage.getItem('compteur')) : 0
  );

  const handleButtonClick = () => {
    let maintenant = new Date();
    let dernierClic = new Date(localStorage.getItem('dernierClic'));

    if (!dernierClic || maintenant - dernierClic >= 24 * 60 * 60 * 1000) {
      let newCompteur = compteur + 1;
      setCompteur(newCompteur);
      localStorage.setItem('compteur', newCompteur);
      localStorage.setItem('dernierClic', maintenant.toString());
    } else {
      alert("Vous ne pouvez cliquer qu'une fois toutes les 24 heures");
    }
  };

  const handleButtonResetClick = () => {
    setCompteur(0);
    localStorage.setItem('compteur', 0);
    localStorage.removeItem('dernierClic');
    localStorage.removeItem('date-debut');
    alert("Le compteur a été réinitialisé");
  };

  useEffect(() => {
    localStorage.setItem('compteur', compteur);
  }, [compteur]);

  return (
    <>
      <main>
      <section className="image-container">
          <div className="image-wrapper-dessin">
            <img className="dessin" src={dessin} alt="Image dessin addiction" />
          </div>
          <h1>Lutte Journalière</h1>
          <div className="image-wrapper-panneaux">
            <img className="panneaux" src={panneaux} alt="Image panneaux addiction" />
          </div>
        </section>
        
        <section className="compteur">
          <h2>Compteur journalier</h2>
            <div className="compteur-wrapper">
              <div className="compteur-container">
                <div className="item-compteur">
                  <p>
                    <label className="date" htmlFor="date-debut">Date de début d'arrêt:</label>
                    <span className="champs-input"><input type="date" id="date-debut" /></span>
                  </p>
                </div>
                <div className="item-compteur">
                  <p>
                    <label className="date" htmlFor="jours-arret">Nombre de jours d'arrêt:</label>
                    <span className="champs-input-jour"><input type="number" id="jours-arret" readOnly /></span>
                  </p>
                </div>
                <div className="item-compteur">
                  <p>
                    <label className="date" htmlFor="date-du-jour">Date du jour:</label>
                    <span className="champs-input"><input type="date" id="date-du-jour" readOnly /></span>
                  </p>
                </div>
              </div>
              <div className="compteur-actions">
                <div>
                  <button className="monBouton" onClick={handleButtonClick}>Cliquez-moi</button>
                </div>
                <div>
                  <p id="compteur">{compteur}</p>
                </div>
                <div>
                  <button className="monBoutonReset" onClick={handleButtonResetClick}>Réinitialiser</button>
                </div>
              </div>
            </div>
        </section>

        <nav className="menu-addictions">
          <div className="h2-addictions">
            <h2 className="h2-addict">Addictions</h2>
          </div>
          <div>
            <ul>
              <li>
                <a href="#">Cigarette</a>
                  <div className="image-wrapper-dessin">
                    <img className="cigarettes" src={cigarettes} alt="Image cigarettes addiction" />
                  </div>
              </li>
              <li>
                <a href="#">Alcool</a>
                  <div className="image-wrapper-panneaux">
                    <img className="alcool" src={alcool} alt="Image alcool addiction" />
                  </div>
              </li>
              <li>
                <a href="#">Drogues</a>
                  <div className="image-wrapper-panneaux">
                    <img className="drogues" src={drogues} alt="Image drogues addiction" />
                  </div>
              </li>
            </ul>
          </div>
        </nav>

        <section className="messages">
          <div className="messages-container">
            <h2 className="messages-title">Messages et astuces</h2>
          </div>
          <div className="messages-container1">
            <div className="message-box">
              <div className="box-title">
                <h3>Messages</h3>
              </div>
              <div>
                <p> {/* Votre contenu de message ici */} </p>
              </div>
            </div>
            <div className="astuces-box">
              <div className="box-title">
                <h3>Astuces</h3>
              </div>
              <div>
                <p> {/* Votre contenu d'astuce ici */} </p>
              </div>
            </div>
          </div>
        </section>

      </main>

      <footer>
        <p>© 2023 Lutte contre les addictions. Tous droits réservés.</p>
      </footer>
    </>
  );
};

export default Home;

