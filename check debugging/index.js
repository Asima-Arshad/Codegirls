const person={
    fname:"Ahmed",
    lname:"Khan",
    Dob:"May 1,2010"
}
Object.entries(person).forEach(([key, value]) => {
    console.log(key, value)
if (person.Dob == "May 1,2010") {
    console.log(`it is ${person.fname}'s birthday` )    
} 
})
  
//dob = console.log(" name : " + perso.Dob)