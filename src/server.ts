import express from 'express'
import { adminJS, adminJSRouter } from './adminjs'
import { sequelize } from './database'

const app = express()

// app.use(caminho, rotas)
app.use(express.static('public'))

app.use(adminJS.options.rootPath, adminJSRouter)

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  sequelize.authenticate().then(() => {
    console.log('DB connection successful')
  })
  
  console.log(`
  http://localhost:${PORT}
  `)
  console.log(`Server started successfully at port ${PORT}`)
})
