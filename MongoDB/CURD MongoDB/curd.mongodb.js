

// create
use("curd")
console.log(db)

db.createCollection("courses")

// // db.courses.insertOne({
// //     name:"Sigma WEb Dev",
// //     priice:"Free",
// //     composer:"Harry Bhai",
// //     assignments:12
// // })
// db.courses.insertMany([
//     {
//       "name": "Sigma Web Dev",
//       "price": "Free",
//       "composer": "Harry Bhai",
//       "assignments": 12
//     },
//     {
//       "name": "Alpha Web Dev",
//       "price": "Free",
//       "composer": "Alice Doe",
//       "assignments": 10
//     },
//     {
//       "name": "Beta Web Dev",
//       "price": "Free",
//       "composer": "Bob Smith",
//       "assignments": 15
//     },
//     {
//       "name": "Gamma Web Dev",
//       "price": "Free",
//       "composer": "Charlie Brown",
//       "assignments": 8
//     },
//     {
//       "name": "Delta Web Dev",
//       "price": "Free",
//       "composer": "Diana Prince",
//       "assignments": 20
//     },
//     {
//       "name": "Epsilon Web Dev",
//       "price": "Free",
//       "composer": "Eve Adams",
//       "assignments": 7
//     },
//     {
//       "name": "Zeta Web Dev",
//       "price": "Free",
//       "composer": "Frank Johnson",
//       "assignments": 14
//     },
//     {
//       "name": "Eta Web Dev",
//       "price": "Free",
//       "composer": "Grace Lee",
//       "assignments": 9
//     },
//     {
//       "name": "Theta Web Dev",
//       "price": "Free",
//       "composer": "Henry King",
//       "assignments": 11
//     },
//     {
//       "name": "Iota Web Dev",
//       "price": "Free",
//       "composer": "Ivy White",
//       "assignments": 13
//     },
//     {
//       "name": "Kappa Web Dev",
//       "price": "Free",
//       "composer": "Jack Miller",
//       "assignments": 6
//     },
//     {
//       "name": "Lambda Web Dev",
//       "price": "Free",
//       "composer": "Kathy Nelson",
//       "assignments": 5
//     },
//     {
//       "name": "Mu Web Dev",
//       "price": "Free",
//       "composer": "Leo Perez",
//       "assignments": 16
//     },
//     {
//       "name": "Nu Web Dev",
//       "price": "Free",
//       "composer": "Mona Quinn",
//       "assignments": 18
//     },
//     {
//       "name": "Xi Web Dev",
//       "price": "Free",
//       "composer": "Nina Roberts",
//       "assignments": 17
//     },
//     {
//       "name": "Omicron Web Dev",
//       "price": "Free",
//       "composer": "Oscar Stewart",
//       "assignments": 4
//     },
//     {
//       "name": "Pi Web Dev",
//       "price": "Free",
//       "composer": "Paul Thomas",
//       "assignments": 19
//     },
//     {
//       "name": "Rho Web Dev",
//       "price": "Free",
//       "composer": "Quincy Underwood",
//       "assignments": 3
//     },
//     {
//       "name": "Sigma Web Dev",
//       "price": "Free",
//       "composer": "Rachel Vega",
//       "assignments": 2
//     },
//     {
//       "name": "Tau Web Dev",
//       "price": "Free",
//       "composer": "Steve Brown",
//       "assignments": 1
//     }
//   ]
// )


// //  // read

// let a= db.courses.find({"price":"Free"})

// console.log(a)

// // get the find count
// console.log(a.count())

// // get the whole data
// console.log(a.toArray())


// update

db.courses.updateOne({"price": "Free",},{$set:{"price": 100}})


db.courses.updateMany({"price": "Free",},{$set:{"price": 1000}})


// delete

db.courses.deleteOne({"price": 100})

db.courses.deleteMany({"price": 1000})