const mongoose = require('mongoose');

// Connect to the same database as your server
mongoose.connect('mongodb://localhost:27017/smartplace');

const QuestionSchema = new mongoose.Schema({
    category: String,
    question: String,
    options: [String],
    answer: String
});

const Question = mongoose.model('Question', QuestionSchema);

const quizData = [
    // === PYTHON QUESTIONS (10) ===
    { category: "python", question: "Which of the following is an immutable data type in Python?", options: ["List", "Dictionary", "Set", "Tuple"], answer: "Tuple" },
    { category: "python", question: "What is the correct way to create a function in Python?", options: ["function myFunc():", "def myFunc():", "create myFunc():", "func myFunc():"], answer: "def myFunc():" },
    { category: "python", question: "Which operator is used for floor division in Python?", options: ["/", "//", "%", "**"], answer: "//" },
    { category: "python", question: "How do you start a comment in Python?", options: ["//", "/*", "#", "--"], answer: "#" },
    { category: "python", question: "Which method is used to add an element at the end of a list?", options: ["add()", "push()", "append()", "insert()"], answer: "append()" },
    { category: "python", question: "What is the output of 2 ** 3?", options: ["5", "6", "8", "9"], answer: "8" },
    { category: "python", question: "Which of these is used to handle exceptions in Python?", options: ["try-except", "try-catch", "do-while", "if-else"], answer: "try-except" },
    { category: "python", question: "What does the 'len()' function do?", options: ["Lends money", "Returns length", "Limits input", "Loops data"], answer: "Returns length" },
    { category: "python", question: "Which keyword is used to import a module?", options: ["include", "require", "import", "using"], answer: "import" },
    { category: "python", question: "Is Python a compiled or interpreted language?", options: ["Compiled", "Interpreted", "Both", "None"], answer: "Interpreted" },

    // === JAVA QUESTIONS (10) ===
    { category: "java", question: "Which keyword is used to inherit a class in Java?", options: ["implements", "extends", "inherits", "using"], answer: "extends" },
    { category: "java", question: "What is the size of 'int' in Java?", options: ["16-bit", "32-bit", "64-bit", "8-bit"], answer: "32-bit" },
    { category: "java", question: "Which of these is a superclass of every class in Java?", options: ["String", "Main", "Object", "System"], answer: "Object" },
    { category: "java", question: "Which method is the entry point for a Java application?", options: ["start()", "init()", "main()", "run()"], answer: "main()" },
    { category: "java", question: "What does JVM stand for?", options: ["Java Visual Machine", "Java Virtual Machine", "Java Variable Method", "Just Very Many"], answer: "Java Virtual Machine" },
    { category: "java", question: "Which access modifier makes a member visible only within its own class?", options: ["public", "protected", "private", "default"], answer: "private" },
    { category: "java", question: "Which keyword is used to create an instance of a class?", options: ["create", "alloc", "new", "this"], answer: "new" },
    { category: "java", question: "Can a constructor be private in Java?", options: ["Yes", "No", "Only for abstract classes", "Only for interfaces"], answer: "Yes" },
    { category: "java", question: "Which collection allows unique elements only?", options: ["List", "Set", "Vector", "ArrayList"], answer: "Set" },
    { category: "java", question: "What is the return type of a constructor?", options: ["void", "int", "None", "The class type"], answer: "None" },

    // === C++ QUESTIONS (10) ===
    { category: "cpp", question: "Who developed C++?", options: ["James Gosling", "Bjarne Stroustrup", "Guido van Rossum", "Dennis Ritchie"], answer: "Bjarne Stroustrup" },
    { category: "cpp", question: "Which operator is used for input in C++?", options: ["<<", ">>", "::", "->"], answer: ">>" },
    { category: "cpp", question: "What is the correct way to declare a constant in C++?", options: ["const int x = 5;", "constant x = 5;", "int const x := 5;", "#define x 5;"], answer: "const int x = 5;" },
    { category: "cpp", question: "Which feature of OOP is demonstrated by function overloading?", options: ["Encapsulation", "Inheritance", "Polymorphism", "Abstraction"], answer: "Polymorphism" },
    { category: "cpp", question: "Which header file is used for input/output?", options: ["<stdio.h>", "<iostream>", "<conio.h>", "<stdlib.h>"], answer: "<iostream>" },
    { category: "cpp", question: "What is the index of the first element in a C++ array?", options: ["1", "-1", "0", "Any number"], answer: "0" },
    { category: "cpp", question: "Which keyword is used for dynamic memory allocation in C++?", options: ["malloc", "new", "alloc", "create"], answer: "new" },
    { category: "cpp", question: "A class whose functions are all virtual is called?", options: ["Pure Class", "Friend Class", "Abstract Class", "Static Class"], answer: "Abstract Class" },
    { category: "cpp", question: "What is the use of 'std::' in C++?", options: ["Standard Library", "Student Data", "Static Definition", "String Definition"], answer: "Standard Library" },
    { category: "cpp", question: "Which operator is called the scope resolution operator?", options: ["->", ".", "::", "?"], answer: "::" }
];

const seedDB = async () => {
    await Question.deleteMany({}); // Clears old data so you don't have duplicates
    await Question.insertMany(quizData);
    console.log("✅ Database Seeded Successfully!");
    process.exit();
};

seedDB();