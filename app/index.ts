import express, { Express, Request, Response } from 'express'

const app: Express = express()
const port = 8000

app.set('view engine', 'ejs')
app.set('views', './src/views')

app.get('/', (req: Request, res: Response) => {
  const data = {
    date: Date.now()
  }

  res.render('./index.ejs', data)
})

// use `curl -X POST localhost:8080` from host when you want to confirm the behavior
app.post('/', (req: Request, res: Response) => {
  res.send('Got a POST request')
})

// use `curl -X PUT localhost:8080/user` from host when you want to confirm the behavior
app.put('/user', (req: Request, res: Response) => {
  res.send('Got a PUT request at /user')
})

// use `curl -X DELETE localhost:8080/user` from host when you want to confirm the behavior
app.delete('/user', (req: Request, res: Response) => {
  res.send('Got a DELETE request at /user')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})