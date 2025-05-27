# 🎓 Student Info API
A simple yet powerful REST API built with Express.js and MongoDB for managing:

* 📘 Courses
* 🎓 Degrees
* 👨‍🎓 Students
Tested with Postman ✅

# 🧰 Tech Stack
* ⚙️ Node.js
* 🚀 Express.js
* 🍃 MongoDB + Mongoose
* 🧪 Postman

# 📁 API Endpoints
📘 Course Routes
|----------------------------------------------------------|
|Method	|      Endpoint	        |         Description      |
|----------------------------------------------------------|
|GET	|   `/course`	        |Get all courses           |
|----------------------------------------------------------|
|GET	|   `/course/:id`	    |Get course by MongoDB ID  |
|----------------------------------------------------------|
|GET	|   `/course/code/:cid`	|Get course by custom code |
|----------------------------------------------------------|
|POST	|   `/course`	        |Add a new course          |
|----------------------------------------------------------|
|PUT	|   `/course/:id`	    |Update course by ID       |
|----------------------------------------------------------|
|DELETE	|   `/course/:id`	    |Delete course by ID       |
|----------------------------------------------------------|

# 🎓 Degree Routes
|----------------------------------------------------------|
|Method	|      Endpoint	        |         Description      |
|----------------------------------------------------------|
|GET	|   `/degree`	        |   Get all records        |
|----------------------------------------------------------|

# 👨‍🎓 Student Routes
|--------------------------------------------------------------------|
|Method	|      Endpoint	     |         Description                   |
|--------------------------------------------------------------------|
|GET	|   `/student`       |Get all students with their degrees    |
|--------------------------------------------------------------------|

🔁 Degree reference populated using populate() from Mongoose.

📍 Server runs at: http://localhost:3005

# 🔬 Testing with Postman
Use Postman to test endpoints:

View all courses:   `GET http://localhost:3005/course`
Add a course: `POST http://localhost:3005/course`
View students with degrees: `GET http://localhost:3005/student`


# 🛡 Error Handling
* ❌ Invalid MongoDB IDs
* ⚠️ Missing fields in requests
* 🧯 Server/database errors