class user{
    constructor(name, age, designation, password){
    this.name = name;
    this.age = age;
    this.designation = designation;
    this.password = "1";
}

userinfo(){
    console.log(`this is ${this.name} and my designation is ${this.designation}`);
}
// verifyPsd(){
//     const psd_length = this.password.length();
//     if (psd_length <= 5) {
//        return "plz enter a  valid password" 
//     }
// }
}

class admin extends user{
        
    allowUser(){
        const psd_length = this.password.length;
        if (psd_length <= 5) {
           return "plz enter a  valid  (admin)" 
        }
    }
    
    // allowUser(){
    //     super.password;
    //     this.allowUser= function(){
    //         if (password <= 6) {
    //             return "enter valid value."
    //         }
    //     }
    // }
}
const user1 = new user("ali",36,"manager","12es");
console.log(user1.userinfo());
//console.log(user1.verifyPsd());
console.log(admin.allowUser());