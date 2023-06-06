



// // app.js

// const express = require('express');
// const morgan = require('morgan');
// const cors = require('cors');
// const bodyParser = require('body-parser');
// const Sequelize = require('./src/db/sequelize');
// const advice = require('./src/models/advice');
// const healthProfessionalMessages = require('./src/models/healthProfessionalMessages');

// const app = express();
// const port = process.env.PORT || 3300;

// app.use(cors());
// app.use(morgan('dev'));
// app.use(express.json()); 
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));


// Sequelize.initDb();

// // Routes de l'API
// app.get('/', (req, res) => {
//   res.send('Bienvenue sur l\'API de l\'application de lutte contre les addictions !');
// });

// app.get('/api/routes/advice', async (req, res) => {
//   try {
//     const advice = await advice.getAll();
//     res.json({ data: advice });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Une erreur s\'est produite lors de la récupération des conseils.' });
//   }
// });

// app.get('/api/routes/healthProfessionalMessages', async (req, res) => {
//   try {
//     const messages = await healthProfessionalMessage.getAll();
//     res.json({ data: messages });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Une erreur s\'est produite lors de la récupération des messages des professionnels de santé.' });
//   }
// });

// const db = require('./src/db/sequelize');  // Votre chemin d'accès peut varier
// const healthProfessionalMessage = db.healthProfessionalMessage;


// // Routes pour Users
// require('./src/routes/routePatients/findAllPatient')(app);
// require('./src/routes/routePatients/findPatientByPk')(app);
// require('./src/routes/routePatients/updatePatient')(app);
// require('./src/routes/routePatients/deletePatient')(app);

// // Routes pour Compteur
// require('./src/routes/routeCompteur/createCompteur')(app);
// require('./src/routes/routeCompteur/updateCompteur')(app);
// require('./src/routes/routeCompteur/deleteCompteur')(app);

// // Routes pour Advices
// require('./src/routes/routeAdvices/createAdvice')(app);
// require('./src/routes/routeAdvices/updateAdvice')(app);
// require('./src/routes/routeAdvices/deleteAdvice')(app);
// require('./src/routes/routeAdvices/findAdviceByPk')(app);
// require('./src/routes/routeAdvices/findAllAdvices')(app); 

// // Routes pour Addictions
// require('./src/routes/routeAddictions/createAddiction')(app);
// require('./src/routes/routeAddictions/updateAddiction')(app);
// require('./src/routes/routeAddictions/deleteAddiction')(app);
// require('./src/routes/routeAddictions/findAddictionByPk')(app);
// require('./src/routes/routeAddictions/findAllAddictions')(app); 

// app.listen(port, () => {
//   console.log(`Le serveur est en écoute sur le port ${port}`);
// });

// require('module').Module._cache = {};






















// // app.js

// const express = require('express');
// const morgan = require('morgan');
// const cors = require('cors');
// const bodyParser = require('body-parser');
// const Sequelize = require('./src/db/sequelize');
// const adviceModel = require('./src/models/adviceModel');
// const healthProfessionalMessagesModel = require('./src/models/healthProfessionalMessagesModel');
// const compteurRouter = require('./src/routes/routeCompteur');
// const adviceRouter = require('./src/routes/routeAdvices');
// const healthProfessionalMessagesRouter = require('./src/routes/routeHealthProfessionalMessages');

// const app = express();
// const port = process.env.PORT || 3300;

// app.use(cors());
// app.use(morgan('dev'));
// app.use(express.json()); 
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));


// Sequelize.initDb();

// // Routes de l'API
// app.get('/', (req, res) => {
//   res.send('Bienvenue sur l\'API de l\'application de lutte contre les addictions !');
// });

// app.get('/api/routes/adviceModel', async (req, res) => {
//   try {
//     const advice = await adviceModel.getAll();
//     res.json({ data: advice });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Une erreur s\'est produite lors de la récupération des conseils.' });
//   }
// });

// app.get('/api/routes/healthProfessionalMessagesModel', async (req, res) => {
//   try {
//     const messages = await healthProfessionalMessagesModel.getAll();
//     res.json({ data: messages });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Une erreur s\'est produite lors de la récupération des messages des professionnels de santé.' });
//   }
// });


// // Routes pour HealthProfessionalMessages
// require('./src/routes/routeHealthProfessionalMessages/createMessage')(app);
// require('./src/routes/routeHealthProfessionalMessages/updateMessage')(app);
// require('./src/routes/routeHealthProfessionalMessages/deleteMessage')(app);
// require('./src/routes/routeHealthProfessionalMessages/findMessageByPk')(app);
// require('./src/routes/routeHealthProfessionalMessages/findAllMessages')(app);

// // Routes pour Users
// require('./src/routes/routePatients/findAllPatient')(app);
// require('./src/routes/routePatients/findPatientByPk')(app);
// require('./src/routes/routePatients/updatePatient')(app);
// require('./src/routes/routePatients/deletePatient')(app);

// // Routes pour Compteur
// require('./src/routes/routeCompteur/createCompteur')(app);
// require('./src/routes/routeCompteur/updateCompteur')(app);
// require('./src/routes/routeCompteur/deleteCompteur')(app);

// // Routes pour Advices
// require('./src/routes/routeAdvices/createAdvice')(app);
// require('./src/routes/routeAdvices/updateAdvice')(app);
// require('./src/routes/routeAdvices/deleteAdvice')(app);
// require('./src/routes/routeAdvices/findAdviceByPk')(app);
// require('./src/routes/routeAdvices/findAllAdvices')(app); 

// // Routes pour Addictions
// require('./src/routes/routeAddictions/createAddiction')(app);
// require('./src/routes/routeAddictions/updateAddiction')(app);
// require('./src/routes/routeAddictions/deleteAddiction')(app);
// require('./src/routes/routeAddictions/findAddictionByPk')(app);
// require('./src/routes/routeAddictions/findAllAddictions')(app);

// // Routes pour HealthProfessionalMessages
// app.use('/api/routes/healthProfessionalMessages', healthProfessionalMessagesRouter);

// // Routes pour Advices
// app.use('/api/routes/advice', adviceRouter);

// // Routes pour Compteur
// app.use('/api/routes/compteur', compteurRouter);

// app.listen(port, () => {
//   console.log(`Le serveur est en écoute sur le port ${port}`);
// });

// require('module').Module._cache = {};






















const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
const { sequelize } = require('./src/db/sequelize');

const app = express();

app.use(morgan('dev'));
app.use(cors());
app.use(bodyParser.json());

// Routes
require('./src/routes/routeAddictions/createAddiction')(app);
require('./src/routes/routeAddictions/deleteAddiction')(app);
// require('./src/routes/routeAddictions/getAddiction')(app);
require('./src/routes/routeAddictions/findAllAddictions')(app);
require('./src/routes/routeAddictions/updateAddiction')(app);

require('./src/routes/routeAdvices/createAdvice')(app);
require('./src/routes/routeAdvices/deleteAdvice')(app);
// require('./src/routes/routeAdvices/getAdvice')(app);
require('./src/routes/routeAdvices/findAllAdvices')(app);
require('./src/routes/routeAdvices/updateAdvice')(app);

require('./src/routes/routeCompteur/createCompteur')(app);
require('./src/routes/routeCompteur/deleteCompteur')(app);
require('./src/routes/routeCompteur/readCompteur')(app);
require('./src/routes/routeCompteur/updateCompteur')(app);

require('./src/routes/routeHealthProfessionalMessages/adviceMessage')(app);
require('./src/routes/routeHealthProfessionalMessages/createMessage')(app);
require('./src/routes/routeHealthProfessionalMessages/deleteMessage')(app);
require('./src/routes/routeHealthProfessionalMessages/findAllMessages')(app);
require('./src/routes/routeHealthProfessionalMessages/findMessageByPk')(app);
require('./src/routes/routeHealthProfessionalMessages/updateMessage')(app);

// require('./src/routes/routePatients/createPatient')(app);
require('./src/routes/routePatients/deletePatient')(app);
require('./src/routes/routePatients/findAllPatient')(app);
require('./src/routes/routePatients/findPatientByPk')(app);
require('./src/routes/routePatients/updatePatient')(app);

sequelize.sync().then(() => {
  const port = process.env.PORT || 3000;
  app.listen(port, () => {
    console.log(`Le serveur tourne sur le port ${port}`);
  });
});











