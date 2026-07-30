Easy way to remember:

server.js → Starts the app and connects everything.
Routes → Decide which controller should handle a request.
Middleware → Performs common tasks before the controller (authentication, validation, logging, etc.).
Controller → Contains the application's business logic.
Model → Talks to MongoDB using Mongoose.
MongoDB → Stores and retrieves the actual data.
Response → Sent back to the frontend or Postman.

Notice how we're following Single Responsibility Principle.

    server.js → Starts the server
    clientRoutes.js → Routes requests
    clientController.js → Business logic
    db.js → Database connection

---

| File                  | Responsibility       |
| --------------------- | -------------------- |
| `server.js`           | Start Express server |
| `db.js`               | Connect MongoDB      |
| `clientRoutes.js`     | Define client routes |
| `clientController.js` | Business logic       |
| `Client.js`           | Define Client model  |
| `authMiddleware.js`   | Authentication       |

```



**Why do we use Mongoose?**
"Mongoose is an ODM (Object Data Modeling) library for MongoDB. It provides a simple way to connect to MongoDB, define schemas and models, validate data, and perform CRUD operations using JavaScript objects instead of writing low-level database commands."
```

mogodb password of freelancehub: E3J6YIDDrvkrbzVu

---

If an interviewer asks:

"Why do we write type: String instead of name: String?"

A good answer is:

"name: String is a shorthand syntax. We usually use the object syntax because it allows us to add validations like required, unique, default, trim, minlength, and maxlength."

---

THE FLOW

Postman

↓

POST /clients

↓

clientRoutes.js

↓

createClient()

↓

Client.create(req.body)

↓

MongoDB

↓

Return JSON

↓

Postman

---

Think of Mongoose methods like SQL operations:

| Operation             | Mongoose Method                           |
| --------------------- | ----------------------------------------- |
| Create a new document | `Client.create()`                         |
| Get all documents     | `Client.find()`                           |
| Get one document      | `Client.findById()` or `Client.findOne()` |
| Update                | `Client.findByIdAndUpdate()`              |
| Delete                | `Client.findByIdAndDelete()`              |

---

| Status Code | Meaning               | When to Use                           |
| ----------- | --------------------- | ------------------------------------- |
| **200**     | OK                    | Data fetched successfull (`GET`)      |
| **201**     | Created               | New document create (`POST`)          |
| **400**     | Bad Request           | User sent invalid data                |
| **404**     | Not Found             | Resource doesn't exist                |
| **500**     | Internal Server Error | Something unexpected failed on server |

---

Signup
│
▼
User created
│
▼
Login
│
▼
Email + Password verified
│
▼
JWT Generated
│
▼
Stored in localStorage
│
▼
Every API Request
│
▼
Authorization: Bearer <token>
│
▼
Backend verifies token
│
▼
Access Granted ✅

---

# JWT FLOW

Login Success
│
▼
jwt.sign()
│
▼
Payload
{
id: "687f..."
}
│
▼
Secret Key
JWT_SECRET
│
▼
Expiry
7 days
│
▼
JWT Token

---

JWT

            const token = jwt.sign(
            { id: user.\_id }, // Payload
            process.env.JWT_SECRET, // Secret Key
            { expiresIn: "7d" } // Expiry
            );

---

SIGNUP FLOW

            Read Data

            ↓

            Check Email Exists

            ↓

            Hash Password

            ↓

            Create User

---

LOGIN FLOW:

            Read Data

            ↓

            Find User

            ↓

            Compare Password

            ↓

            Generate JWT

            ↓

            Return Token

---

Receive email & password
│
▼
Find user by email
│
▼
User exists?
│ │
No Yes
│ ▼
401 Compare password
│
▼
Password correct?
│ │
No Yes
│ ▼
401 Generate JWT
│
▼
Return token + user

---

## LOGIN FLOW WITH JWT

            User enters email/password
                    │
                    ▼
            Backend verifies credentials
                    │
                    ▼
            JWT created
                    │
                    ▼
            Frontend stores token
            (localStorage)
                    │
                    ▼
            Every request sends the token
                    │
                    ▼
            Backend verifies the token
                    │
                    ▼
            Request allowed

# THE COMPLETE FLOW OF SIGNUP TO STORED DATA IN MONGO_DB

Signup
│
▼
User saved in MongoDB
(\_id =111)
│
▼
Login
│
▼
JWT contains id=111
│
▼
Frontend stores token
│
▼
POST /clients
Authorization: Bearer Token
│
▼
protect()
│
▼
jwt.verify()
│
▼
Find user by ID
│
▼
req.user = user
│
▼
createClient()
│
▼
Client.create({
...req.body,
user:req.user.\_id
})
│
▼
MongoDB stores
user =111

......later

### FLOW OF GET CLIENTS OF PARTICULAR USER

GET /clients
│
▼
protect()
│
▼
req.user.\_id =111
│
▼
filter.user=req.user.\_id
│
▼
Client.find(filter)
│
▼
Only Raviteja's clients

---

<!-- In authMiddleware.js -->

req.user=user
│
▼
The controller never receives user directly. It receives the req object, and user is just one property that the middleware attached to req.

---

# Why did .populate() work?

When you wrote:
.populate("client", "name company")

Mongoose internally did something like:

        Project Collection:
        client = 6876ab...

        ↓

        Look inside Project Schema

        ↓

        ref = "Client"

        ↓

        Go to Client model

        ↓

        Find _id = 6876ab...

        ↓

        Replace ObjectId with Client document

        ↓

        Return response

---
