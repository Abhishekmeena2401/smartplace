// require("dotenv").config();
// const express = require("express");
// const mongoose = require("mongoose");
// const multer = require("multer");
// const pdfParse = require("pdf-parse");
// const axios = require("axios");
// const cors = require("cors");

// const app = express();
// const PORT = process.env.PORT || 5000;

// // ---- MIDDLEWARE ----
// app.use(cors());
// app.use(express.json());

// const upload = multer({ storage: multer.memoryStorage() });

// // ---- MONGODB CONNECTION ----
// mongoose.connect("mongodb://127.0.0.1:27017/smartplace")
//     .then(() => console.log("✅ MongoDB Connected"))
//     .catch(err => console.error("❌ MongoDB Error:", err));


// // =======================
// // 🔥 SCHEMAS
// // =======================

// // ---- QUIZ SCHEMA ----
// const QuestionSchema = new mongoose.Schema({
//     category: String,
//     question: String,
//     options: [String],
//     answer: String
// });

// const Question = mongoose.model("Question", QuestionSchema);





// // ---- COURSE SCHEMA ----
// const CourseSchema = new mongoose.Schema({
//   title: String,
//   platform: String,
//   price: String,
//   link: String,
//   skill: String
// });

// const Course = mongoose.model("Course", CourseSchema);






// // ---- COMPANY SCHEMA (FIXED) ----
// const CompanySchema = new mongoose.Schema({
//     name: String,
//     summary: String,
//     description: String,
//     cgpa: String,
//     package: String,
//     location: String,
//     difficulty: String,
//     roles: [String],
//     skills: [String],
//     rounds: [String],
//     eligibility: String,
//     apply: String
// });

// const Company = mongoose.model("Company", CompanySchema);






// app.get("/api/courses", async (req, res) => {
//   try {
//     const courses = await Course.find();
//     res.json(courses);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });





// // =======================
// // 🔥 QUIZ API
// // =======================
// app.get("/api/questions/:skill", async (req, res) => {
//     try {
//         const skill = req.params.skill.toLowerCase();

//         const questions = await Question.aggregate([
//             { $match: { category: skill } },
//             { $sample: { size: 10 } }
//         ]);

//         if (!questions.length) {
//             return res.status(404).json({
//                 message: "No questions found. Add data in MongoDB."
//             });
//         }

//         res.json(questions);

//     } catch (err) {
//         console.error(err);
//         res.status(500).json({ error: "Server error" });
//     }
// });


// // =======================
// // 🔥 COMPANY API (FIXED)
// // =======================
// app.get("/api/companies", async (req, res) => {
//     try {
//         const companies = await Company.find();

//         if (!companies.length) {
//             return res.json([]);
//         }

//         res.json(companies);

//     } catch (err) {
//         console.error(err);
//         res.status(500).json({ error: "Server error" });
//     }
// });


// // =======================
// // 🔥 RESUME ANALYZER
// // =======================
// app.post("/analyze", upload.single("resume"), async (req, res) => {
//     try {
//         if (!req.file) {
//             return res.status(400).json({ error: "No file uploaded" });
//         }

//         const pdfData = await pdfParse(req.file.buffer);
//         const text = pdfData.text;

//         if (!text.trim()) {
//             return res.status(400).json({
//                 error: "Empty or scanned PDF (use OCR)"
//             });
//         }

//         const response = await axios.post(
//             "https://api.cerebras.ai/v1/chat/completions",
//             {
//                 model: "llama3.1-8b",
//                 messages: [
//                     {
//                         role: "system",
//                         content: "You are an expert HR recruiter."
//                     },
//                     {
//                         role: "user",
//                         content: `Analyze this resume and give:
//                         1. ATS score
//                         2. Improvements
//                         3. Skills to learn
//                         4. Project ideas

//                         ${text}`
//                     }
//                 ]
//             },
//             {
//                 headers: {
//                     Authorization: `Bearer ${process.env.CEREBRAS_API_KEY}`,
//                     "Content-Type": "application/json"
//                 }
//             }
//         );

//         const result = response.data.choices[0].message.content;

//         res.json({ result });

//     } catch (err) {
//         console.error(err.message);

//         res.status(500).json({
//             error: err.response?.data?.error?.message || "Server error"
//         });
//     }
// });


// // =======================
// // 🔥 HEALTH CHECK
// // =======================
// app.get("/", (req, res) => {
//     res.send("🚀 SmartPlace API is running...");
// });


// // =======================
// // 🔥 START SERVER
// // =======================
// app.listen(PORT, () => {
//     console.log(`🚀 Server running at http://localhost:${PORT}`);
// });












// require("dotenv").config();
// const express = require("express");
// const mongoose = require("mongoose");
// const multer = require("multer");
// const pdfParse = require("pdf-parse");
// const axios = require("axios");
// const cors = require("cors");
// const path = require("path");

// const app = express();

// // ✅ Use Render PORT
// const PORT = process.env.PORT || 5000;

// // ---- MIDDLEWARE ----
// app.use(cors());
// app.use(express.json());

// // ✅ Serve frontend (IMPORTANT)
// app.use(express.static(path.join(__dirname, "public")));

// // ---- FILE UPLOAD ----
// const upload = multer({ storage: multer.memoryStorage() });


// // =======================
// // 🔥 MONGODB CONNECTION (FIXED)
// // =======================
// mongoose.connect(process.env.MONGO_URI)
//     .then(() => console.log("✅ MongoDB Connected"))
//     .catch(err => console.error("❌ MongoDB Error:", err));


// // =======================
// // 🔥 SCHEMAS
// // =======================

// // QUIZ
// const QuestionSchema = new mongoose.Schema({
//     category: String,
//     question: String,
//     options: [String],
//     answer: String
// });
// const Question = mongoose.model("Question", QuestionSchema);

// // COURSE
// const CourseSchema = new mongoose.Schema({
//     title: String,
//     platform: String,
//     price: String,
//     link: String,
//     skill: String
// });
// const Course = mongoose.model("Course", CourseSchema);

// // COMPANY
// const CompanySchema = new mongoose.Schema({
//     name: String,
//     summary: String,
//     description: String,
//     cgpa: String,
//     package: String,
//     location: String,
//     difficulty: String,
//     roles: [String],
//     skills: [String],
//     rounds: [String],
//     eligibility: String,
//     apply: String
// });
// const Company = mongoose.model("Company", CompanySchema);


// // =======================
// // 🔥 APIs
// // =======================

// // Courses
// app.get("/api/courses", async (req, res) => {
//     const courses = await Course.find();
//     res.json(courses);
// });

// // Quiz
// app.get("/api/questions/:skill", async (req, res) => {
//     const skill = req.params.skill.toLowerCase();

//     const questions = await Question.aggregate([
//         { $match: { category: skill } },
//         { $sample: { size: 10 } }
//     ]);

//     res.json(questions);
// });

// // Companies
// app.get("/api/companies", async (req, res) => {
//     const companies = await Company.find();
//     res.json(companies);
// });


// // =======================
// // 🔥 RESUME ANALYZER
// // =======================
// app.post("/analyze", upload.single("resume"), async (req, res) => {
//     try {
//         const pdfData = await pdfParse(req.file.buffer);
//         const text = pdfData.text;

//         const response = await axios.post(
//             "https://api.cerebras.ai/v1/chat/completions",
//             {
//                 model: "llama3.1-8b",
//                 messages: [
//                     { role: "system", content: "You are HR." },
//                     { role: "user", content: text }
//                 ]
//             },
//             {
//                 headers: {
//                     Authorization: `Bearer ${process.env.CEREBRAS_API_KEY}`,
//                     "Content-Type": "application/json"
//                 }
//             }
//         );

//         res.json({
//             result: response.data.choices[0].message.content
//         });

//     } catch (err) {
//         res.status(500).json({ error: "Error analyzing resume" });
//     }
// });


// // =======================
// // 🔥 DEFAULT ROUTE (FRONTEND)
// // =======================
// app.get("/", (req, res) => {
//     res.sendFile(path.join(__dirname, "public", "index.html"));
// });


// // =======================
// // 🔥 START SERVER
// // =======================
// app.listen(PORT, () => {
//     console.log(`🚀 Server running on port ${PORT}`);
// });
































require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const multer = require("multer");
const pdfParse = require("pdf-parse");
const axios = require("axios");
const cors = require("cors");
const path = require("path");

const app = express();

// ✅ PORT (Render compatible)
const PORT = process.env.PORT || 5000;

// ---- MIDDLEWARE ----
app.use(cors());
app.use(express.json());

// ✅ Serve frontend
app.use(express.static(path.join(__dirname, "public")));

// ---- FILE UPLOAD ----
const upload = multer({ storage: multer.memoryStorage() });


// =======================
// 🔥 MONGODB CONNECTION (IMPROVED)
// =======================
// mongoose.connect(process.env.MONGO_URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// })
// .then(() => console.log("✅ MongoDB Connected"))
// .catch(err => {
//     console.error("❌ MongoDB Error:", err);
//     process.exit(1); // stop app if DB fails
// });


mongoose.connect("mongodb+srv://abhishekrbmeena_db_user:88TETLRJtWhCS7Qg@cluster0.mbrrugu.mongodb.net/smartplace?retryWrites=true&w=majority")
.then(() => console.log("✅ MongoDB Connected"))
.catch(err => console.log(err));


// =======================
// 🔥 SCHEMAS
// =======================
const Question = mongoose.model("Question", new mongoose.Schema({
    category: String,
    question: String,
    options: [String],
    answer: String
}));

const Course = mongoose.model("Course", new mongoose.Schema({
    title: String,
    platform: String,
    price: String,
    link: String,
    skill: String
}));

const Company = mongoose.model("Company", new mongoose.Schema({
    name: String,
    summary: String,
    description: String,
    cgpa: String,
    package: String,
    location: String,
    difficulty: String,
    roles: [String],
    skills: [String],
    rounds: [String],
    eligibility: String,
    apply: String
}));


// =======================
// 🔥 APIs (SAFE VERSION)
// =======================

// Courses
app.get("/api/courses", async (req, res) => {
    try {
        const data = await Course.find();
        res.json(data);
    } catch (err) {
        res.status(500).json({ error: "Failed to fetch courses" });
    }
});

// Quiz
app.get("/api/questions/:skill", async (req, res) => {
    try {
        const skill = req.params.skill.toLowerCase();

        const data = await Question.aggregate([
            { $match: { category: skill } },
            { $sample: { size: 10 } }
        ]);

        res.json(data);
    } catch (err) {
        res.status(500).json({ error: "Failed to fetch questions" });
    }
});

// Companies
app.get("/api/companies", async (req, res) => {
    try {
        const data = await Company.find();
        res.json(data);
    } catch (err) {
        res.status(500).json({ error: "Failed to fetch companies" });
    }
});


// =======================
// 🔥 RESUME ANALYZER (SAFE)
// =======================
app.post("/analyze", upload.single("resume"), async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ error: "No file uploaded" });
        }

        const pdfData = await pdfParse(req.file.buffer);
        const text = pdfData.text;

        if (!text) {
            return res.status(400).json({ error: "Empty PDF" });
        }

        const response = await axios.post(
            "https://api.cerebras.ai/v1/chat/completions",
            {
                model: "llama3.1-8b",
                messages: [
                    { role: "system", content: "You are HR." },
                    { role: "user", content: text }
                ]
            },
            {
                headers: {
                    Authorization: `Bearer ${process.env.CEREBRAS_API_KEY}`,
                    "Content-Type": "application/json"
                }
            }
        );

        res.json({
            result: response.data.choices?.[0]?.message?.content || "No result"
        });

    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: "Resume analysis failed" });
    }
});


// =======================
// 🔥 ROOT ROUTE
// =======================
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});


// =======================
// 🔥 START SERVER
// =======================
app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});