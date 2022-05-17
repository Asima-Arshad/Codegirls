import express from 'express';
const app = express();
const PORT = 8000;

app.get('/', function (req, res) {

    const getsalary = () => {
        let salaries = [4000, 5000, 6000, 7000];
        return new Promise((resolve, reject) => {
            resolve(salaries[1]);
        });
    };

    const getBio = () =>{
        let userData ={
            "1":{
                fname:"hassan",
                lname:"Ali",
                age:"23"
            },
            "2":{
                fname:"hassan",
                lname:"Ali",
                age:"23"
            }
        }
        return new Promise((resolve, reject)=>{
            resolve (userData[1]);
        })
    }
    
    getsalary().then((salary) => {
        console.log(salary);
        return getBio();
    }).then((user)=>{
        console.log(user);
    }); 
   
app.listen(PORT,()=> {
    console.log("server is running at " + PORT)
});