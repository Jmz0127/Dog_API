#Welcome to Dog_API, a simple, local CRUD App that renders a REST API using Node and Express. 🦮

---
#To get started, make sure you "npm install" to install the required dependencies, then run "npm start" to run the server. It is recommended you use Postman or another request tool such as HTTPie to interact with the endpoints below.

#Post your doggy's info with the three parameters - dogsName: breedType: age: - with POST endpoint "/". Your dog's entry into the system will generate a uuid (no two dogs will have the same id, similar to a veterinary system). You can then use that id to look up your pet's profile with the endpoint POST /dogs/:id(replace :id with your dog's uuid) 🐶

#Get pre-existing dogs with GET endpoint "/" 🐕

#Need to update an entry? No problem! use PATCH request with endpoint "/:id" (replace :id with your dog's uuid) and pick what entry you need to update, whether that be the dogsName, breedType, or age! 🐾



