// question no # 1

console.log("question no # 1")
var itemsArray = [
    {name:"juice",price:"50",quantity:"3"},
    {name:"cookie",price:"30",quantity:"9"},
    {name:"shirt",price:"880",quantity:"1"},
    {name:"pen",price:"100",quantity:"2"}

]

let a = itemsArray[0].price * itemsArray[0].quantity
let b = itemsArray[1].price * itemsArray[1].quantity 
let c = itemsArray[2].price * itemsArray[2].quantity 
let d = itemsArray[3].price * itemsArray[3].quantity 


console.log(a)
console.log(b)
console.log(c)
console.log(d)
console.log("-------Total Price-------")
console.log(a+b+c+d)


// question no # 2
console.log("question no # 2")


let personalInfo = {
    name: "etc",
    email: "etc@gmail.com",
    password: "etc",
    age: "12",
    gender: "male",
    city: "karachi",
    country: "pakistan",
}

console.log(personalInfo.hasOwnProperty("age"))
console.log(personalInfo.hasOwnProperty("country"))
console.log(personalInfo.hasOwnProperty("firstName"))
console.log(personalInfo.hasOwnProperty("lastName"))

// question no # 3
console.log("question no # 3")


function Person(name,email,password,gender,city,country) {
    this.name = name;
    this.email = email;
    this.password = password;
    this.gender = gender;
    this.city = city;
    this.country = country;
}

let personalBio = new Person("Muhammad","etc@gmail.com","etc","male","karachi","pakistan")
console.log(personalBio.name)
console.log(personalBio.email)
console.log(personalBio.password)
console.log(personalBio.gender)
console.log(personalBio.city)
console.log(personalBio.country)


// question 4

function CheckPopulation(name, gender, address, education, profession) {
    this.name = name;
    this.gender = gender;
    this.address = address;
    this.education = education;
    this.profession = profession;
  }
  
  const Peoples = new CheckPopulation(
  "ahsan parwaiz",
    "Male",
    "gulbhar",
    "bs cs",
    "we developer"
  );
  console.log(Peoples);
  
  function educationData() {
    var select = document.getElementById("education");
    if (localStorage === "") {
      select[localStorage.getItem("save")].selected = true;
    } else if (select.value === "cs") {
      localStorage.setItem("save", select.value);
    } else if (select.value === "acf") {
      localStorage.setItem("save", select.value);
    } else if (select.value === "bba") {
      localStorage.setItem("save", select.value);
    } else if (select.value === "ms") {
      localStorage.setItem("save", select.value);
    }
  }
  
  function professionPeoples() {
    var profession = document.getElementById("profession");
    if (localStorage === "") {
      profession[localStorage.getItem("save")];
    } else if (profession.value === "Web developer") {
      localStorage.setItem("profession", profession.value);
    } else if (profession.value === "React Native") {
      localStorage.setItem("profession", profession.value);
    } else if (profession.value === "Flutter Developer") {
      localStorage.setItem("profession", profession.value);
    } else if (profession.value === "ios developer") {
      localStorage.setItem("profession", profession.value);
    }
  }
  
  
  var radio = document.getElementsByName("gender");
  for (var i = 0; i < radio.length; i++) {
    if (radio[i].checked) {
      localStorage.getItem("gender");
    }
  }