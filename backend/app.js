const express = require('express')

const app = express()

app.use('/api/posts', (req, res, next) => {
  const posts = [
    { id: 'jhdsbcsjkdckj',
      title:'Post 01 Test côté serveur',
      content: 'Coucou du serveur'
    },
    { id: 'shdoihqfhseodklfjc',
      title:'Post 02 Test côté serveur',
      content: 'Coucou du serveur'
    },
    { id: 'poksfjkbvsjskdj',
      title:'Post 03 Test côté serveur',
      content: 'Coucou du serveur'
    }
  ]
  res.status(200).json({
    message: "Posts récupérés avec succés",
    posts: posts
  })
})

module.exports = app
