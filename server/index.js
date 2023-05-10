
// front thunk request to endpoint-> node on endpoint directs to via SQL , gets, processes , sends res to front-> postgeSQL
// really: front -> node to process data -> laravel -> sql 

const PORT = 8000; //как выбрать порт и где его писать? здесь? он реалььно будет порт 800?


//const axios = require("axios");
const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json()) // зачем? 


const {Client} = require('pg');

const db = new Client({
user:'postgres',
host:'localhost',
database: 'platform',
password:'3901547',
port:5432
})
db.connect()




app.get('/admin/sections', async (req, res) => {
   
        db.query("SELECT * FROM course_sections", (err, result) => {
            if(err){
                console.log(err)
            }else {
               
                res.send(result.rows)
            }
        })
   
    
})


app.get('/get/section/:id', (req, res) => {

  const id = req.params.id;

  db.query("SELECT * FROM course_sections WHERE id=$1", [id],
  (err, result) => {
    if(err){
        console.log(err)
    }else {
       
        res.send(result.rows)
    }
})
})


app.get('/get/section/content/:id', (req,res) => {
 // console.log(req.params, 18888888)
  const id = req.params.id;

  //запрос к дб 

  db.query("SELECT * FROM section_contents WHERE section_id=$1", [id],
  (err, result) => {
    if(err){
        console.log(err)
    }else {
       
        res.send(result.rows)
    }
})

})





app.post('/add/section/', (req, res) => {

    const data = req.body.formData;
    console.log(data,18)
    const name = data.name;
   
    const description = data.description;
    const sort = data.sort;


    const query = {
        text: 'INSERT INTO course_sections(name, description, sort) VALUES($1, $2, $3) RETURNING *',
        values: [name, description, sort],
      }

      db.query(query, (err, result) => {
        if (err) {
          console.log(err.stack)
        } else {
          
          res.send(result.rows);
          
        }
      })
   

      

})



app.delete('/delete/section/:id', async  (req, res) => {
  
  const id = req.params.id;
  
  db.query('DELETE FROM course_sections WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    res.status(200).send(`User deleted with ID: ${id}`)
  })



})






app.listen(PORT, () => {
    console.log("running server");
  });
  


//endpoints 
/*
/sections

*/