// // example 2

const users = {
  bank:'tbc',
  year: 2023,
   address:{
   street:'politkovskais st'
  }
}

const {address:{city}={}} = users
console.log(city) 


// example 3


const user = {
  firstname:'nino',
  

  profile:{
    age:36,
    nickname :'odi11'
  },
  target :['target1','target2',]
}
const user2 = {
     ...user,
     profile:{
      ...user.profile
     },
     target:[...user.target]
}
user.profile.age =40
console.log(user.profile.age)
console.log(user2.profile.age)
