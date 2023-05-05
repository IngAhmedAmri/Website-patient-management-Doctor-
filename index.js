
const express = require("express");
const db = require("./db/conn.js");
const app = express();
const port = 5000;
const cors = require("cors");
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(cors())
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/api/patients',(req,res)=>{
  const sql=`SELECT * FROM list_patient  `
  db.query(sql,(err,result)=>{
    if(err) res.status(500).send(err);
    res.send(result);
  })
})

app.post('/api/patients',(req, res)=>{
  const sql=`INSERT INTO  list_patient SET ?`
  console.log(req.body)
  const patient=req.body
  db.query(sql,patient,(err,result)=>{
    if(err) res.status(500).send(err);
    res.status(201).send(result);
  })
})



app.put('/api/patients', (req, res) => {
  const name = req.params.name;
  const { age, lastvisit, situation, medication, description } = req.body;
  const sql = `UPDATE list_patient SET age=${age}, lastvisit='${lastvisit}', situation='${situation}', medication='${medication}',description='${description}' WHERE name='${name}'`;
  db.query(sql, (err, result) => {
  if(err) res.status(500).send(err);
  res.status(200).send(result);
  })
  })

app.delete('/api/patients/:name', (req, res) => {
  const name = req.params.name;
  const sql = `DELETE FROM list_patient WHERE name="${name}"`;
  db.query(sql,(err, result) => {
    if(err) res.status(500).send(err);
    res.status(200).send(result);
  })
})

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
