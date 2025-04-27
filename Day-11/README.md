# Getting into MongoDB

- DB Creation
- Collections
- Queries

## Key Terms

Database → Holds collections

Collection → Like a table (stores documents)

Document → BSON-style object

🄚 _id → Auto-generated, unique identifier

# 🏗️ Create a Database & Collection Using Compass


Create Database -> Database Name -> Collection Name -> Create Database

# ✍️ Insert Documents Using Compass

Insert Document -> insert keys and values.
Use format button to make the document permitted.

# ✍️ Edit Documents Using Compass

Edit -> Make changes -> Update

# ️ Insert Documents Using MongoDB Shell

Change database and display available databases and collections.

## Enter one document - `insertOne()`

```mongodb
db.Students.insertOne({
"Name" : "Freya", 
"Age":24, 
"Gender":"Female", 
"GPA": 2.9, 
"Degree" : "CSC", 
"Language" : ["Ruby","Dart","JavaScript"] 
})

```
## Enter multiple documents - `insertMany()`

```mongodb
db.Students.insertMany([
  { "Name" : "Ella",
		"Age" : 24,
		"Gender" : "Female",
		"GPA" : 3.9,
		"Degree" : "CSC",
		"Language" : ["MongoDb", "SQL", "NoSQL"]
},
 { "Name" : "Keifer",
		"Age" : 26,
		"Gender" : "Male",
		"GPA" : 3.9,
		"Degree" : "IT",
		"Language" : ["Kotlin", "Flutter", ]
},
])
```

# 🔍 Find Data Using MongoDB Shell

`db.Students.find({"Gender":"Female"})`

#  Projecting Data Using Compass
`{field : 1, field : 0}`
- 1 for projection
- 0 for not projecting the field

# Sorting Data Using Compass
`{field : -1, field : 1}`
- -1 for discending order
- 1 for ascending order

# Sorting Data Using MongoDB Shell
`db.Students.find().sort({'GPA':1})`

## Query Operators

- find()
- project
- sort
- $gt -> greater than
- $lt -> less than
- $eq -> equal
- $ne -> not equal
- $in -> matches any in array
- $nin -> doesn't matches any in array

* Note : Needed images are added with this file.