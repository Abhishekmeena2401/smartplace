


// require("dotenv").config();
// const express = require("express");
// const mongoose = require("mongoose");
// const multer = require("multer");
// const pdfParse = require("pdf-parse");
// const axios = require("axios");
// const cors = require("cors");
// const path = require("path");

// const app = express();
// const PORT = process.env.PORT || 5000;

// // =======================
// // 🔥 MIDDLEWARE
// // =======================
// app.use(cors());
// app.use(express.json());

// // =======================
// // 🔥 ROOT ROUTE (FIXED)
// // =======================
// app.get("/", (req, res) => {
//     res.redirect("/dashboard.html"); // ✅ opens dashboard first
// });

// // =======================
// // 🔥 STATIC FILES
// // =======================
// app.use(express.static(path.join(__dirname, "public")));

// // =======================
// // 🔥 FILE UPLOAD
// // =======================
// const upload = multer({ storage: multer.memoryStorage() });

// // =======================
// // 🔥 MONGODB CONNECTION
// // =======================
// mongoose.connect('mongodb+srv://abhishekrbmeena_db_user:88TETLRJtWhCS7Qg@cluster0.mbrrugu.mongodb.net/smartplace?retryWrites=true&w=majority')
//     .then(() => console.log("✅ MongoDB Connected"))
//     .catch(err => {
//         console.error("❌ MongoDB Error:", err);
//         process.exit(1);
//     });

// // =======================
// // 🔥 SCHEMAS
// // =======================
// const Question = mongoose.model("Question", new mongoose.Schema({
//     category: String,
//     question: String,
//     options: [String],
//     answer: String
// }));

// const Course = mongoose.model("Course", new mongoose.Schema({   
//     title: String,
//     platform: String,
//     price: String,
//     link: String,
//     skill: String
// }));

// const Company = mongoose.model("Company", new mongoose.Schema({
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
// }));

// // =======================
// // 🔥 APIs
// // =======================

// // Courses API
// app.get("/api/courses", async (req, res) => {
//     try {
//         const data = await Course.find();

//         console.log("Courses count:", data.length); // 🔥 debug

//         res.json(data);
//     } catch (err) {
//         console.error(err);
//         res.status(500).json({ error: "Failed to fetch courses" });
//     }
// });

// // Quiz API
// app.get("/api/questions/:skill", async (req, res) => {
//     try {
//         const skill = req.params.skill.toLowerCase();

//         const data = await Question.aggregate([
//             { $match: { category: skill } },
//             { $sample: { size: 10 } }
//         ]);

//         res.json(data);
//     } catch (err) {
//         res.status(500).json({ error: "Failed to fetch questions" });
//     }
// });

// // Company API
// app.get("/api/companies", async (req, res) => {
//     try {
//         const data = await Company.find();
//         res.json(data);
//     } catch (err) {
//         res.status(500).json({ error: "Failed to fetch companies" });
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

//         if (!text) {
//             return res.status(400).json({ error: "Empty PDF" });
//         }

//         // 🔥 STRONG PROMPT
//         const prompt = `
// You are an expert ATS resume analyzer and HR recruiter.

// Analyze the following resume and provide:

// 1. ATS Score (out of 100)
// 2. Key Skills found
// 3. Missing Skills (important for job)
// 4. Suggestions to improve resume
// 5. Mistakes in resume
// 6. Recommended projects to build
// 7. Overall feedback

// Give output in clean format with headings.

// Resume:
// ${text}
// `;

//         const response = await axios.post(
//             "https://api.cerebras.ai/v1/chat/completions",
//             {
//                 model: "llama3.1-8b",
//                 messages: [
//                     { role: "system", content: "You are a professional HR and ATS system." },
//                     { role: "user", content: prompt }
//                 ]
//             },
//             {
//                 headers: {
//                     Authorization: `Bearer ${process.env.CEREBRAS_API_KEY}`,
//                     "Content-Type": "application/json"
//                 }
//             }
//         );

//         const result = response.data.choices?.[0]?.message?.content;

//         res.json({ result });

//     } catch (err) {
//         console.error(err.response?.data || err.message);
//         res.status(500).json({ error: "Resume analysis failed" });
//     }
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
const PORT = process.env.PORT || 5000;

// =======================
// 🔥 MIDDLEWARE
// =======================
app.use(cors());
app.use(express.json());

// =======================
// 🔥 ROOT ROUTE
// =======================
app.get("/", (req, res) => {
    res.redirect("/dashboard.html");
});

// =======================
// 🔥 STATIC FILES
// =======================
app.use(express.static(path.join(__dirname, "public")));

// =======================
// 🔥 FILE UPLOAD
// =======================
const upload = multer({ storage: multer.memoryStorage() });

// =======================
// 🔥 MONGODB CONNECTION (FIXED)
// =======================

mongoose.connect('mongodb+srv://abhishekrbmeena_db_user:88TETLRJtWhCS7Qg@cluster0.mbrrugu.mongodb.net/smartplace?retryWrites=true&w=majority')
    .then(() => console.log("✅ MongoDB Connected"))
    .catch(err => {
        console.error("❌ MongoDB Error:", err);
        process.exit(1);
    });


    // =======================
// 🔥 SCHEMAS
// =======================
const Question = mongoose.model("Question", new mongoose.Schema({
    category: String,
    question: String,
    options: [String],
    answer: String
}));

// ✅ FIXED (IMPORTANT)
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
// 🔥 APIs
// =======================

// ✅ COURSES API (FIXED)
app.get("/api/courses", async (req, res) => {
    try {
        const data = await Course.find();

        console.log("Courses count:", data.length);

        res.json(data);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Failed to fetch courses" });
    }
});

// QUIZ API
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

// COMPANY API
app.get("/api/companies", async (req, res) => {
    try {
        const data = await Company.find();
        res.json(data);
    } catch (err) {
        res.status(500).json({ error: "Failed to fetch companies" });
    }
});

// =======================
// 🔥 RESUME ANALYZER (FIXED)
// =======================
app.post("/analyze", upload.single("resume"), async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ error: "No file uploaded" });
        }

        const pdfData = await pdfParse(req.file.buffer);
        let text = pdfData.text;

        if (!text) {
            return res.status(400).json({ error: "Empty PDF" });
        }

        // 🔥 LIMIT TEXT (IMPORTANT)
        text = text.substring(0, 3000);

        const prompt = `
You are a strict ATS resume analyzer.

DO NOT repeat the resume.

ONLY return:

ATS Score: <number>/100

Key Skills:
- ...

Missing Skills:
- ...

Mistakes:
- ...

Suggestions:
- ...

Projects:
- ...

Feedback:
...

Resume:
${text}
`;

        const response = await axios.post(
            "https://api.cerebras.ai/v1/chat/completions",
            {
                model: "llama3.1-8b",
                temperature: 0.3,
                messages: [
                    {
                        role: "system",
                        content: "You are an ATS system. Only analyze."
                    },
                    {
                        role: "user",
                        content: prompt
                    }
                ]
            },
            {
                headers: {
                    Authorization: `Bearer ${process.env.CEREBRAS_API_KEY}`,
                    "Content-Type": "application/json"
                }
            }
        );

        const result = response.data.choices?.[0]?.message?.content;

        res.json({ result });

    } catch (err) {
        console.error(err.response?.data || err.message);
        res.status(500).json({ error: "Resume analysis failed" });
    }
});

// =======================
// 🔥 START SERVER
// =======================
app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});
