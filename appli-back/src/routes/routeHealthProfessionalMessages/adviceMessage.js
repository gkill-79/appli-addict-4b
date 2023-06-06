



// src/routes/routeHealthProfessionalMessages/adviceMessage.js

const { AdviceMessage } = require('../../db/sequelize')
const { ValidationError, UniqueConstraintError } = require('sequelize')

module.exports = (app) => {
  // Créer un nouveau message d'avis
  app.post('/api/routes/adviceMessages', (req, res) => {
    AdviceMessage.create(req.body)
      .then(createdMessage => {
        const message = `Le message d'avis a été créé avec succès.`
        res.json({ message, data: createdMessage })
      })
      .catch(error => {
        if (error instanceof ValidationError) {
          return res.status(400).json({ message: error.message, data: error })
        }
        if (error instanceof UniqueConstraintError) {
          return res.status(400).json({ message: error.message, data: error })
        }
        const message = `Le message d'avis n'a pas pu être créé. Veuillez réessayer ultérieurement.`
        res.status(500).json({ message, data: error })
      })
  })

  // Supprimer un message d'avis par ID
  app.delete('/api/routes/adviceMessages/:id', (req, res) => {
    const id = req.params.id

    AdviceMessage.findByPk(id)
      .then(message => {
        if (message === null) {
          const message = `Le message d'avis avec l'ID ${id} n'existe pas. Veuillez réessayer avec un autre ID.`
          return res.status(404).json({ message })
        }

        return AdviceMessage.destroy({ where: { id: message.id } })
          .then(_ => {
            const message = `Le message d'avis avec l'ID ${id} a été supprimé avec succès.`
            return res.json({ message, data: { id } })
          })
      })
      .catch(error => {
        const message = `Le serveur ne répond pas. Veuillez réessayer ultérieurement.`
        res.status(500).json({ message, data: error })
      })
  })

  // Mettre à jour un message d'avis par ID
  app.put('/api/routes/adviceMessages/:id', (req, res) => {
    const id = req.params.id
    AdviceMessage.update(req.body, { where: { id: id } })
      .then(_ => {
        return AdviceMessage.findByPk(id).then(updatedMessage => {
          if (updatedMessage === null) {
            const message = `Le message d'avis avec l'ID ${id} n'a pas été trouvé. Veuillez réessayer avec un autre ID.`
            return res.status(404).json({ message })
          }
          const message = `Le message d'avis a été modifié avec succès.`
          res.json({ message, data: updatedMessage })
        })
      })
      .catch(error => {
        if (error instanceof ValidationError) {
          return res.status(400).json({ message: error.message, data: error })
        }
        if (error instanceof UniqueConstraintError) {
          return res.status(400).json({ message: error.message, data: error })
        }
        const message = `Le message d'avis n'a pas pu être modifié. Veuillez réessayer ultérieurement.`
        res.status(500).json({ message, data: error })
      })
  })

  // Obtenir tous les messages d'avis
  app.get('/api/routes/adviceMessages', (req, res) => {
    AdviceMessage.findAll()
      .then(messages => {
        if (messages.length === 0) {
          const message = `La liste des messages d'avis est vide.`
          return res.status(404).json({ message })
        }
        res.json({ message: "Liste des messages d'avis récupérée.", data: messages })
      })
      .catch(error => {
        const message = `Le serveur ne répond pas. Veuillez réessayer ultérieurement.`
        res.status(500).json({ message, data: error })
      })
  })
}
