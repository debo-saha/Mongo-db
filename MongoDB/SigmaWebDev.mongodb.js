
use('SigmaWebDevelopment');

// Insert a few documents into the sales collection.
db.getCollection('Courses').insertMany([
  {
    "id": "item1",
    "Price": "12345",
    "Name": "John Doe"
  },
  {
    "id": "item2",
    "Price": "67890",
    "Name": "Jane Smith"
  },
  {
    "id": "item3",
    "Price": "23456",
    "Name": "Alice Johnson"
  },
  {
    "id": "item4",
    "Price": "78901",
    "Name": "Bob Brown"
  },
  {
    "id": "item5",
    "Price": "34567",
    "Name": "Charlie Davis"
  },
  {
    "id": "item6",
    "Price": "89012",
    "Name": "Diana Evans"
  },
  {
    "id": "item7",
    "Price": "45678",
    "Name": "Eve Foster"
  },
  {
    "id": "item8",
    "Price": "90123",
    "Name": "Frank Green"
  },
  {
    "id": "item9",
    "Price": "56789",
    "Name": "Grace Hill"
  },
  {
    "id": "item10",
    "Price": "11223",
    "Name": "Henry King"
  }
]);


console.log("Done . Your Deta Saved ..")