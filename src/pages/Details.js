import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import "../styles/details.css";
import img1 from "../img/image/react.png";
import img2 from "../img/image/digiimarketer.png";
import img3 from "../img/image/python.jpg";
import img4 from "../img/image/maxresdefault.jpg";
import img5 from "../img/image/kak_stat.jpg";
import img6 from "../img/image/javas.jpg";
import img7 from "../img/image/smm.jpg";
import img8 from "../img/image/cooking.jpg";
import img9 from "../img/image/seo.jpg";
import img10 from "../img/image/photograph.jpg";
import img11 from "../img/image/machin.png";
import img12 from "../img/image/slide_3.jpg";
import img13 from "../img/image/yoga.jpg";
import img14 from "../img/image/bootcamp.jpg";
import img15 from "../img/image/writing.png";
import img16 from "../img/image/time.jpg";
import img17 from "../img/image/stock.jpg";
import img18 from "../img/image/unnamed.png";
import img19 from "../img/image/interier.jpg";
import img20 from "../img/image/large.jpg";

const Details = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState({
    user: "",
    rating: "",
    feedback: "",
  });
  
  const [expandedModule, setExpandedModule] = useState(null);

  useEffect(() => {
    const savedReviews = JSON.parse(localStorage.getItem(`reviews-${id}`)) || [];
    setReviews(savedReviews);
  }, [id]);

  const handleReviewSubmit = (e) => {
    e.preventDefault();

    const updatedReviews = [...reviews, newReview];
    setReviews(updatedReviews);
    localStorage.setItem(`reviews-${id}`, JSON.stringify(updatedReviews));

    setNewReview({
      user: "",
      rating: "",
      feedback: "",
    });
  };

  const handleEnrollment = () => {


    const enrolledCourses = JSON.parse(localStorage.getItem("enrolledCourses")) || [];
    if (!enrolledCourses.find((course) => course.id === parseInt(id))) {
      enrolledCourses.push({ id: parseInt(id), title: course.title, lessonsCompleted: 0 });
      localStorage.setItem("enrolledCourses", JSON.stringify(enrolledCourses));
    }


    navigate("/userdashboard", { state: { enrolledCourse: course } });
  };

  const handleToggle = (index) => {
    setExpandedModule(expandedModule === index ? null : index);
  };

  const courses = [
    {
      id: 1,
      title: "React for Beginners",
      image: img1,
      description:
              "This course introduces you to React.js, a popular JavaScript library for building modern web applications. You’ll learn how to create reusable components, manage state, handle user interactions, and communicate with APIs. By the end of the course, you'll have a solid foundation in React and will be able to build dynamic, interactive web apps.",
      instructor: "John Doe",
      duration: "6 hours",
      syllabus: [
          {
            title: "Module 1: Introduction to React.js",
            description: "An overview of React.js basics, setting up the environment and understanding JSX.",
            duration: "30 minutes",
          },
          {
            title: "Module 2: Setting Up Your Development Environment",
            description: "Set up Node.js, npm, and create your first React app.",
            duration: "45 minutes",
          },
          {
            title: "Module 3: Understanding JSX and Virtual DOM",
            description: "Learn JSX syntax and the Virtual DOM concept.",
            duration: "40 minutes",
          },
          {
            title: "Module 4: Components and Props",
            description: "Understand how to create functional and class components, and pass data using props.",
            duration: "50 minutes",
          },
          {
            title: "Module 5: State Management with useState",
            description: "Manage component state using the useState hook.",
            duration: "40 minutes",
          },
          {
            title: "Module 6: Handling Events and User Inputs",
            description: "Learn event handling and capturing user input in forms.",
            duration: "45 minutes",
          },
          {
            title: "Module 7: Lifecycle Methods and useEffect Hook",
            description: "Understanding lifecycle methods and using the useEffect hook.",
            duration: "50 minutes",
          },
          {
            title: "Module 8: Conditional Rendering",
            description: "Learn how to render content based on conditions.",
            duration: "40 minutes",
          },
          {
            title: "Module 9: Working with Forms",
            description: "Manage forms, input validation, and submission.",
            duration: "45 minutes",
          },
          {
            title: "Module 10: Fetching Data from APIs",
            description: "Learn how to fetch data from APIs and manage the data in your app.",
            duration: "50 minutes",
          },
          {
            title: "Module 11: Building a Simple To-Do App",
            description: "Apply your knowledge to build a simple To-Do app.",
            duration: "60 minutes",
          },
          {
            title: "Module 12: Deploying Your React Application",
            description: "Learn how to deploy your React app to a live environment.",
            duration: "60 minutes",
          },
      ],
      similarCourses: [
        { id: 6, title: "Advanced JavaScript", image: img6 },
        { id: 14, title: "Web Development Bootcamp", image: img14 },
      ],
    },
    {
      id: 2,
      title: "Digital Marketing Essentials",
      image:img2,
      description:
        "This course provides an in-depth understanding of digital marketing, from building an online presence to driving traffic and analyzing data. You’ll learn SEO techniques, social media strategies, email marketing, and content creation. Whether you're a business owner, marketer, or aspiring digital professional, this course will equip you with the skills to excel in the digital landscape.",
      instructor: "Jane Smith",
      duration: "8 hours",
      syllabus: [
        {
          "title": "Module 1: Introduction to Digital Marketing",
          "description": "Gain an overview of digital marketing concepts, tools, and platforms.",
          "duration": "30 minutes"
        },
        {
          "title": "Module 2: Building an Online Presence",
          "description": "Learn how to create and optimize a professional online presence.",
          "duration": "40 minutes"
        },
        {
          "title": "Module 3: Search Engine Optimization (SEO) Basics",
          "description": "Understand the basics of SEO and how search engines rank websites.",
          "duration": "50 minutes"
        },
        {
          "title": "Module 4: Keyword Research and Content Strategy",
          "description": "Learn how to conduct keyword research and create a content plan.",
          "duration": "45 minutes"
        },
        {
          "title": "Module 5: Social Media Marketing on Facebook, Instagram, and LinkedIn",
          "description": "Explore strategies for marketing on major social media platforms.",
          "duration": "50 minutes"
        },
        {
          "title": "Module 6: Creating Effective Email Marketing Campaigns",
          "description": "Discover techniques for designing and optimizing email campaigns.",
          "duration": "40 minutes"
        },
        {
          "title": "Module 7: Understanding Paid Advertising (Google Ads, Facebook Ads)",
          "description": "Learn the fundamentals of paid advertising and campaign setup.",
          "duration": "50 minutes"
        },
        {
          "title": "Module 8: Analytics and Performance Tracking",
          "description": "Use analytics tools to monitor and improve campaign performance.",
          "duration": "45 minutes"
        },
        {
          "title": "Module 9: Building a Digital Marketing Plan",
          "description": "Develop a comprehensive digital marketing plan for a business.",
          "duration": "50 minutes"
        },
        {
          "title": "Module 10: Case Studies and Industry Insights",
          "description": "Review real-world case studies and gain insights from industry leaders.",
          "duration": "40 minutes"
        }
      ],
      reviews: [
        { user: "Charlie", rating: 5, feedback: "Helped me grow my online store's traffic significantly!" },
        { user: "David", rating: 3, feedback: "Good overview, but needed more depth in SEO." },
      ],
      similarCourses: [
        { id: 9, title: "SEO for Beginners", image: img9 },
        { id: 7, title: "Social Media Marketing", image: img7 },
      ],
    },
    {
      id: 3,
      title: "Python for Data Science",
      image:img3,
      description:
        "Python is the go-to programming language for data science, and this course will teach you how to use it effectively. You'll learn data manipulation, data visualization, and machine learning using libraries like Pandas, NumPy, and Scikit-Learn. By the end of the course, you'll be able to analyze data, build predictive models, and generate insights that drive business decisions.",
      instructor: "Alice Johnson",
      duration: "10 hours",
      syllabus: [
        {
          "title": "Module 1: Introduction to Python Programming",
          "description": "Learn the basics of Python, including syntax and basic programming concepts.",
          "duration": "30 minutes"
        },
        {
          "title": "Module 2: Data Structures and Data Types",
          "description": "Understand Python's data structures, such as lists, dictionaries, and sets.",
          "duration": "45 minutes"
        },
        {
          "title": "Module 3: Working with Pandas for Data Manipulation",
          "description": "Learn how to manipulate and analyze data using the Pandas library.",
          "duration": "50 minutes"
        },
        {
          "title": "Module 4: Data Visualization with Matplotlib and Seaborn",
          "description": "Create visualizations using Matplotlib and Seaborn to explore data insights.",
          "duration": "50 minutes"
        },
        {
          "title": "Module 5: NumPy for Numerical Computations",
          "description": "Understand how to use NumPy for efficient numerical computations.",
          "duration": "40 minutes"
        },
        {
          "title": "Module 6: Exploratory Data Analysis (EDA)",
          "description": "Learn techniques for performing exploratory data analysis on datasets.",
          "duration": "50 minutes"
        },
        {
          "title": "Module 7: Introduction to Machine Learning",
          "description": "Get an overview of machine learning concepts and applications.",
          "duration": "40 minutes"
        },
        {
          "title": "Module 8: Supervised Learning Algorithms",
          "description": "Learn key supervised learning algorithms such as regression and classification.",
          "duration": "50 minutes"
        },
        {
          "title": "Module 9: Unsupervised Learning and Clustering",
          "description": "Understand unsupervised learning techniques like clustering.",
          "duration": "45 minutes"
        },
        {
          "title": "Module 10: Building a Machine Learning Model",
          "description": "Build and train machine learning models using Python libraries.",
          "duration": "50 minutes"
        },
        {
          "title": "Module 11: Model Evaluation and Hyperparameter Tuning",
          "description": "Learn how to evaluate models and optimize hyperparameters.",
          "duration": "50 minutes"
        },
        {
          "title": "Module 12: Real-World Data Science Project",
          "description": "Apply your knowledge to solve a real-world data science problem.",
          "duration": "60 minutes"
        }
      ],
      reviews: [
        { user: "Emma", rating: 5, feedback: "Perfect for data enthusiasts. Loved the hands-on projects!" },
        { user: "John", rating: 4, feedback: "Good mix of theory and practice. Some sections were a bit fast-paced." },
      ],
      similarCourses: [
        { id: 11, title: "Machine Learning with Python", image: img11 },
        { id: 20, title: "Blockchain and Cryptocurrency", image: img20 },
      ],
    },
    {
      id: 4,
      title: "Graphic Design Basics",
      image: img4,
      description:
        "This course is designed for beginners who want to explore the world of graphic design. You'll learn how to use tools like Adobe Photoshop and Illustrator, understand the principles of design, and create visually appealing graphics for digital and print media. Whether you’re a freelancer or a hobbyist, this course will help you bring your creative ideas to life.",
      instructor: "Mark Wilson",
      duration: "5 hours",
      syllabus: [
        {
          "title": "Module 1: Introduction to Graphic Design",
          "description": "Understand the basics of graphic design and its role in communication.",
          "duration": "30 minutes"
        },
        {
          "title": "Module 2: Understanding Design Principles (Balance, Contrast, Alignment)",
          "description": "Learn core design principles to create visually appealing work.",
          "duration": "40 minutes"
        },
        {
          "title": "Module 3: Working with Color and Typography",
          "description": "Explore the use of color theory and typography in design.",
          "duration": "45 minutes"
        },
        {
          "title": "Module 4: Introduction to Adobe Photoshop",
          "description": "Get started with Adobe Photoshop and learn basic tools and techniques.",
          "duration": "50 minutes"
        },
        {
          "title": "Module 5: Basic Photo Editing Techniques",
          "description": "Learn essential photo editing techniques in Adobe Photoshop.",
          "duration": "40 minutes"
        },
        {
          "title": "Module 6: Creating Social Media Graphics",
          "description": "Design engaging graphics for social media platforms.",
          "duration": "50 minutes"
        },
        {
          "title": "Module 7: Introduction to Adobe Illustrator",
          "description": "Learn the basics of Adobe Illustrator for creating vector graphics.",
          "duration": "50 minutes"
        },
        {
          "title": "Module 8: Designing Logos and Icons",
          "description": "Understand the process of designing logos and custom icons.",
          "duration": "45 minutes"
        },
        {
          "title": "Module 9: Creating Layouts for Digital and Print Media",
          "description": "Learn how to create layouts for websites, posters, and print materials.",
          "duration": "50 minutes"
        },
        {
          "title": "Module 10: Building a Graphic Design Portfolio",
          "description": "Compile your design projects into a professional portfolio.",
          "duration": "60 minutes"
        }
      ],
      reviews: [
        { user: "Sophia", rating: 5, feedback: "Loved this course! Perfect for beginners." },
        { user: "Liam", rating: 4, feedback: "Great overview, but more hands-on projects would be helpful." },
      ],
      similarCourses: [
        { id: 10, title: "Photography Masterclass", image: img10 },
        { id: 19, title: "Interior Design Basics", image: img19 },
      ],
    },
    {
      id: 5,
      title: "Fitness and Nutrition 101",
      image: img5,
      description:
        "This course is a comprehensive guide to fitness and nutrition for anyone looking to improve their health and well-being. You'll learn how to create personalized workout routines, develop healthy eating habits, and maintain a balanced lifestyle. By the end of the course, you’ll have the knowledge and tools to achieve your fitness goals sustainably.",
      instructor: "Sarah Taylor",
      duration: "7 hours",
      syllabus: [
        {
          "title": "Module 1: Introduction to Fitness and Nutrition",
          "description": "Gain a foundational understanding of fitness and nutrition concepts.",
          "duration": "30 minutes"
        },
        {
          "title": "Module 2: Understanding the Human Body",
          "description": "Learn about human anatomy and how it relates to exercise and nutrition.",
          "duration": "40 minutes"
        },
        {
          "title": "Module 3: Creating a Personalized Workout Routine",
          "description": "Design a workout plan tailored to individual goals and fitness levels.",
          "duration": "50 minutes"
        },
        {
          "title": "Module 4: Strength Training and Cardio Exercises",
          "description": "Understand the benefits of strength training and cardiovascular exercises.",
          "duration": "45 minutes"
        },
        {
          "title": "Module 5: Nutrition Basics and Macronutrients",
          "description": "Learn the essentials of nutrition and the role of macronutrients.",
          "duration": "50 minutes"
        },
        {
          "title": "Module 6: Meal Planning and Preparation",
          "description": "Create balanced meal plans and learn practical meal preparation techniques.",
          "duration": "45 minutes"
        },
        {
          "title": "Module 7: Staying Motivated and Overcoming Plateaus",
          "description": "Discover strategies to stay motivated and overcome fitness challenges.",
          "duration": "40 minutes"
        },
        {
          "title": "Module 8: Tracking Progress and Adjusting Goals",
          "description": "Learn how to track fitness progress and modify goals effectively.",
          "duration": "50 minutes"
        },
        {
          "title": "Module 9: Building a Sustainable Healthy Lifestyle",
          "description": "Develop habits to maintain a healthy lifestyle long-term.",
          "duration": "45 minutes"
        },
        {
          "title": "Module 10: Fitness for Different Age Groups",
          "description": "Understand fitness needs and modifications for various age groups.",
          "duration": "40 minutes"
        }
      ],
      reviews: [
        { user: "Olivia", rating: 5, feedback: "Changed my lifestyle completely! Highly recommend." },
        { user: "Ethan", rating: 4, feedback: "Simple and practical advice." },
      ],
      similarCourses: [
        { id: 13, title: "Yoga for Beginners" },
        { id: 8, title: "Cooking for Beginners" },
      ],
    },
    {
      id: 6,
      title: "Advanced JavaScript",
      image: img6,
      description:
        "This course takes your JavaScript skills to the next level by diving deep into advanced concepts like asynchronous programming, closures, and design patterns. By the end of this course, you'll be able to write clean, efficient, and scalable JavaScript code for both frontend and backend applications.",
      instructor: "Michael Brown",
      duration: "12 hours",
      syllabus: [
        {
          "title": "Module 1: JavaScript ES6+ Features",
          "description": "Learn modern JavaScript features like let, const, arrow functions, and more.",
          "duration": "40 minutes"
        },
        {
          "title": "Module 2: Closures and Lexical Scope",
          "description": "Understand closures and how lexical scope works in JavaScript.",
          "duration": "45 minutes"
        },
        {
          "title": "Module 3: Asynchronous Programming with Promises and Async/Await",
          "description": "Master asynchronous JavaScript using Promises and async/await.",
          "duration": "50 minutes"
        },
        {
          "title": "Module 4: Advanced DOM Manipulation",
          "description": "Learn how to manipulate the DOM using advanced techniques.",
          "duration": "50 minutes"
        },
        {
          "title": "Module 5: Working with APIs and Fetch",
          "description": "Understand how to interact with APIs and manage data using fetch.",
          "duration": "45 minutes"
        },
        {
          "title": "Module 6: Object-Oriented Programming in JavaScript",
          "description": "Explore object-oriented principles and their implementation in JavaScript.",
          "duration": "50 minutes"
        },
        {
          "title": "Module 7: Functional Programming Concepts",
          "description": "Learn functional programming concepts like immutability and pure functions.",
          "duration": "50 minutes"
        },
        {
          "title": "Module 8: Design Patterns in JavaScript",
          "description": "Understand common design patterns for writing clean JavaScript code.",
          "duration": "50 minutes"
        },
        {
          "title": "Module 9: Testing and Debugging",
          "description": "Learn debugging techniques and writing tests in JavaScript.",
          "duration": "45 minutes"
        },
        {
          "title": "Module 10: Building a Complex Single-Page Application",
          "description": "Apply advanced concepts to create a functional single-page app.",
          "duration": "60 minutes"
        }
      ],
      reviews: [
        { user: "Lucas", rating: 5, feedback: "Advanced topics explained really well." },
        { user: "Emma", rating: 4, feedback: "Challenging but rewarding!" },
      ],
      similarCourses: [
        { id: 1, title: "React for Beginners", image: img1 },
        { id: 14, title: "Web Development Bootcamp", image: img14 },
      ],
    },
    {
      id: 7,
      title: "Social Media Marketing",
      image: img7,
      description:
        "This course teaches you how to leverage social media platforms like Facebook, Instagram, and LinkedIn to create engaging marketing campaigns. You’ll learn how to build a brand, engage with audiences, and analyze performance to optimize your strategy.",
      instructor: "Emily Davis",
      duration: "6 hours",
      syllabus: [
        {
          "title": "Module 1: Introduction to Social Media Marketing",
          "description": "Gain a basic understanding of social media marketing concepts and tools.",
          "duration": "30 minutes"
        },
        {
          "title": "Module 2: Building a Social Media Strategy",
          "description": "Learn how to create an effective strategy for social media campaigns.",
          "duration": "40 minutes"
        },
        {
          "title": "Module 3: Creating Engaging Content",
          "description": "Understand how to design content that resonates with your audience.",
          "duration": "45 minutes"
        },
        {
          "title": "Module 4: Managing Facebook and Instagram Ads",
          "description": "Learn how to create and manage paid campaigns on Facebook and Instagram.",
          "duration": "50 minutes"
        },
        {
          "title": "Module 5: Growing Your Audience Organically",
          "description": "Discover techniques to grow your audience without paid ads.",
          "duration": "40 minutes"
        },
        {
          "title": "Module 6: Influencer Marketing",
          "description": "Understand how to collaborate with influencers for effective campaigns.",
          "duration": "45 minutes"
        },
        {
          "title": "Module 7: Social Media Analytics and Performance Tracking",
          "description": "Learn to track performance and analyze campaign metrics.",
          "duration": "50 minutes"
        },
        {
          "title": "Module 8: Case Studies and Best Practices",
          "description": "Study successful social media campaigns and their strategies.",
          "duration": "40 minutes"
        }
      ],
      reviews: [
        { user: "Anna", rating: 5, feedback: "Perfect for small businesses!" },
        { user: "Chris", rating: 4, feedback: "Could use more real-world examples." },
      ],
      similarCourses: [
        { id: 2, title: "Digital Marketing Essentials" , image: img2},
        { id: 9, title: "SEO for Beginners", image: img9 },
      ],
    },
    {
      id: 8,
      title: "Cooking for Beginners",
      image: img8,
      description:
        "This course is perfect for anyone who wants to learn how to cook delicious and healthy meals at home. You’ll learn essential cooking techniques, knife skills, and how to create simple recipes that impress.",
      instructor: "Chef Gordon",
      duration: "4 hours",
      syllabus: [
        {
          "title": "Module 1: Introduction to Cooking",
          "description": "Understand the basics of cooking and essential kitchen tools.",
          "duration": "30 minutes"
        },
        {
          "title": "Module 2: Basic Knife Skills and Kitchen Safety",
          "description": "Learn proper knife techniques and kitchen safety guidelines.",
          "duration": "40 minutes"
        },
        {
          "title": "Module 3: Understanding Ingredients",
          "description": "Explore common ingredients and their role in recipes.",
          "duration": "45 minutes"
        },
        {
          "title": "Module 4: Cooking Techniques (Boiling, Sautéing, Baking)",
          "description": "Master essential cooking techniques used in everyday meals.",
          "duration": "50 minutes"
        },
        {
          "title": "Module 5: Creating Simple Breakfast, Lunch, and Dinner Recipes",
          "description": "Learn how to prepare easy and healthy meals for all times of the day.",
          "duration": "50 minutes"
        },
        {
          "title": "Module 6: Meal Presentation and Plating",
          "description": "Discover techniques for presenting meals beautifully.",
          "duration": "40 minutes"
        },
        {
          "title": "Module 7: Introduction to International Cuisines",
          "description": "Explore the basics of popular international cuisines.",
          "duration": "50 minutes"
        },
        {
          "title": "Module 8: Meal Planning and Preparation",
          "description": "Plan and prepare meals to save time and stay organized.",
          "duration": "45 minutes"
        }
      ],
      reviews: [
        { user: "Sophia", rating: 5, feedback: "Now I can cook for my family!" },
        { user: "Liam", rating: 4, feedback: "Good for beginners." },
      ],
      similarCourses: [
        { id: 5, title: "Fitness and Nutrition 101" , image: img5},
        { id: 13, title: "Yoga for Beginners" , image: img13},
      ],
    },
    {
      id: 9,
      title: "SEO for Beginners",
      image: img9,
      description:
        "This course covers the fundamentals of Search Engine Optimization (SEO), including keyword research, on-page optimization, and link building. By the end of the course, you'll know how to improve your website's ranking on Google and drive organic traffic.",
      instructor: "Linda Clark",
      duration: "5 hours",
      syllabus: [
        {
          "title": "Module 1: Introduction to SEO",
          "description": "Learn the basics of search engine optimization and its importance.",
          "duration": "30 minutes"
        },
        {
          "title": "Module 2: Understanding Search Engine Algorithms",
          "description": "Understand how search engines rank websites using algorithms.",
          "duration": "40 minutes"
        },
        {
          "title": "Module 3: Keyword Research and Competitor Analysis",
          "description": "Learn techniques for keyword research and analyzing competitors.",
          "duration": "50 minutes"
        },
        {
          "title": "Module 4: On-Page SEO Best Practices",
          "description": "Understand strategies for optimizing website content and structure.",
          "duration": "50 minutes"
        },
        {
          "title": "Module 5: Off-Page SEO and Link Building",
          "description": "Discover effective link-building strategies to improve rankings.",
          "duration": "45 minutes"
        },
        {
          "title": "Module 6: Local SEO for Small Businesses",
          "description": "Learn how to optimize local businesses for search engines.",
          "duration": "50 minutes"
        },
        {
          "title": "Module 7: Measuring SEO Performance with Google Analytics",
          "description": "Track and analyze SEO performance using Google Analytics.",
          "duration": "50 minutes"
        },
        {
          "title": "Module 8: Building a Long-Term SEO Strategy",
          "description": "Create a sustainable SEO strategy for long-term success.",
          "duration": "45 minutes"
        }
      ],
      reviews: [
        { user: "David", rating: 5, feedback: "Boosted my website traffic!" },
        { user: "Sarah", rating: 3, feedback: "Good, but needed more depth." },
      ],
      similarCourses: [
        { id: 2, title: "Digital Marketing Essentials", image: img2 },
        { id: 7, title: "Social Media Marketing", image: img7 },
      ],
    },
    {
      id: 10,
      title: "Photography Masterclass",
      image: img10,
      description:
        "Master the art of photography with this comprehensive course. You’ll learn how to use your camera settings, work with lighting, and compose stunning photos. Whether you’re a beginner or an experienced photographer, this course will enhance your skills.",
      instructor: "David Lee",
      duration: "9 hours",
      syllabus: [
        {
          "title": "Module 1: Introduction to Photography",
          "description": "Understand the basics of photography and camera operation.",
          "duration": "30 minutes"
        },
        {
          "title": "Module 2: Understanding Camera Settings (Aperture, Shutter Speed, ISO)",
          "description": "Learn about the key settings of a camera and how to use them effectively.",
          "duration": "40 minutes"
        },
        {
          "title": "Module 3: Composition and Framing",
          "description": "Master the principles of composition and framing for better photos.",
          "duration": "45 minutes"
        },
        {
          "title": "Module 4: Working with Natural and Artificial Lighting",
          "description": "Learn how to use different lighting setups for various situations.",
          "duration": "50 minutes"
        },
        {
          "title": "Module 5: Editing Photos with Adobe Lightroom",
          "description": "Edit and enhance photos using Adobe Lightroom.",
          "duration": "50 minutes"
        },
        {
          "title": "Module 6: Creating a Photography Portfolio",
          "description": "Build a professional portfolio to showcase your photography work.",
          "duration": "60 minutes"
        },
        {
          "title": "Module 7: Capturing Portraits, Landscapes, and Events",
          "description": "Learn techniques for capturing different types of photography.",
          "duration": "50 minutes"
        }
      ],
      reviews: [
        { user: "Lucas", rating: 5, feedback: "Excellent for aspiring photographers!" },
        { user: "Emma", rating: 4, feedback: "Very detailed and practical." },
      ],
      similarCourses: [
        { id: 4, title: "Graphic Design Basics", image: img4 },
        { id: 19, title: "Interior Design Basics", image: img19 },
      ],
    },
    {
      id: 11,
      title: "Machine Learning with Python",
      image: img11,
      description:
        "This course provides a hands-on introduction to machine learning using Python. You'll learn how to build predictive models, work with data, and implement popular machine learning algorithms.",
      instructor: "Sophia White",
      duration: "15 hours",
      syllabus: [
        {
          "title": "Module 1: Introduction to Machine Learning",
          "description": "Learn the basic concepts of machine learning and its applications.",
          "duration": "40 minutes"
        },
        {
          "title": "Module 2: Data Preprocessing and Cleaning",
          "description": "Understand how to preprocess and clean data for machine learning models.",
          "duration": "50 minutes"
        },
        {
          "title": "Module 3: Supervised Learning Algorithms (Linear Regression, Decision Trees)",
          "description": "Explore the fundamentals of supervised learning with examples like linear regression and decision trees.",
          "duration": "60 minutes"
        },
        {
          "title": "Module 4: Unsupervised Learning (Clustering, PCA)",
          "description": "Learn unsupervised learning techniques such as clustering and principal component analysis (PCA).",
          "duration": "50 minutes"
        },
        {
          "title": "Module 5: Model Evaluation and Optimization",
          "description": "Master techniques for evaluating and optimizing machine learning models.",
          "duration": "45 minutes"
        },
        {
          "title": "Module 6: Building a Machine Learning Pipeline",
          "description": "Build a machine learning pipeline to automate workflows.",
          "duration": "60 minutes"
        },
        {
          "title": "Module 7: Real-World Project: Predicting Customer Behavior",
          "description": "Apply your knowledge to a real-world project focused on customer behavior prediction.",
          "duration": "90 minutes"
        }
      ],
      reviews: [
        { user: "Michael", rating: 5, feedback: "Comprehensive and well-structured." },
        { user: "Ethan", rating: 4, feedback: "Great for beginners in ML." },
      ],
      similarCourses: [
        { id: 3, title: "Python for Data Science" , image: img3},
        { id: 20, title: "Blockchain and Cryptocurrency" , image: img20},
      ],
    },
    {
      id: 12,
      title: "Public Speaking Mastery",
      image: img12,
      description:
        "Enhance your public speaking skills and become a confident communicator. This course covers techniques to overcome stage fright, engage your audience, and deliver impactful speeches.",
      instructor: "Chris Evans",
      duration: "6 hours",
      syllabus:[
        {
          "title": "Module 1: Introduction to Yoga and Its Benefits",
          "description": "Learn the basics of yoga and its physical and mental health benefits.",
          "duration": "30 minutes"
        },
        {
          "title": "Module 2: Basic Yoga Poses (Mountain Pose, Downward Dog, Child's Pose)",
          "description": "Practice foundational yoga poses to improve flexibility and strength.",
          "duration": "40 minutes"
        },
        {
          "title": "Module 3: Breathing Techniques for Relaxation",
          "description": "Master breathing techniques to promote relaxation and mindfulness.",
          "duration": "30 minutes"
        },
        {
          "title": "Module 4: Creating a Home Yoga Practice",
          "description": "Learn how to set up and maintain a consistent yoga practice at home.",
          "duration": "40 minutes"
        },
        {
          "title": "Module 5: Guided Meditation and Mindfulness Exercises",
          "description": "Explore guided meditation and mindfulness techniques for stress relief.",
          "duration": "50 minutes"
        },
        {
          "title": "Module 6: Yoga for Stress Relief and Improved Sleep",
          "description": "Practice yoga sequences designed to reduce stress and enhance sleep quality.",
          "duration": "45 minutes"
        },
        {
          "title": "Module 7: Developing Flexibility and Balance",
          "description": "Focus on improving flexibility and balance through targeted poses.",
          "duration": "40 minutes"
        },
        {
          "title": "Module 8: Yoga for Different Body Types and Fitness Levels",
          "description": "Learn how to adapt yoga practices for various body types and fitness levels.",
          "duration": "50 minutes"
        }
      ],
      reviews: [
        { user: "Olivia", rating: 5, feedback: "Boosted my confidence!" },
        { user: "John", rating: 4, feedback: "Great practical tips." },
      ],
      similarCourses: [
        { id: 16, title: "Time Management Techniques", image: img16 },
        { id: 17, title: "Stock Market Investing", image: img17 },
      ],
    },
    {
      id: 13,
      title: "Yoga for Beginners",
      image: img13,
      description:
        "This beginner-friendly yoga course helps you understand the basics of yoga, including poses, breathing techniques, and mindfulness practices. Whether you're looking to increase flexibility, reduce stress, or improve overall well-being, this course offers a holistic approach to physical and mental health.",
      instructor: "Olivia Harris",
      duration: "4 hours",
      syllabus: [
        {
          "title": "Module 1: Introduction to Web Development",
          "description": "Understand the basics of web development and the technologies involved.",
          "duration": "30 minutes"
        },
        {
          "title": "Module 2: HTML5 and CSS3 Basics",
          "description": "Learn the fundamentals of HTML5 and CSS3 for structuring and styling websites.",
          "duration": "50 minutes"
        },
        {
          "title": "Module 3: Responsive Web Design with Flexbox and Grid",
          "description": "Build responsive layouts using Flexbox and CSS Grid techniques.",
          "duration": "60 minutes"
        },
        {
          "title": "Module 4: JavaScript Fundamentals and DOM Manipulation",
          "description": "Explore JavaScript basics and learn how to manipulate the DOM.",
          "duration": "60 minutes"
        },
        {
          "title": "Module 5: Frontend Frameworks: React Basics",
          "description": "Get started with React and build interactive user interfaces.",
          "duration": "50 minutes"
        },
        {
          "title": "Module 6: Backend Development with Node.js and Express",
          "description": "Learn the basics of backend development using Node.js and Express.",
          "duration": "60 minutes"
        },
        {
          "title": "Module 7: Working with Databases (MongoDB, SQL)",
          "description": "Understand database management and integration with MongoDB and SQL.",
          "duration": "50 minutes"
        },
        {
          "title": "Module 8: Building a RESTful API",
          "description": "Create and test RESTful APIs for your web applications.",
          "duration": "60 minutes"
        },
        {
          "title": "Module 9: User Authentication and Authorization",
          "description": "Implement user authentication and secure your web application.",
          "duration": "50 minutes"
        },
        {
          "title": "Module 10: Deploying Web Applications to the Cloud",
          "description": "Learn how to deploy web applications to cloud platforms.",
          "duration": "60 minutes"
        }
      ],
      reviews: [
        { user: "Emma", rating: 5, feedback: "Perfect for relaxation and mindfulness." },
        { user: "Liam", rating: 4, feedback: "Easy to follow and very calming." },
      ],
      similarCourses: [
        { id: 5, title: "Fitness and Nutrition 101", image: img5 },
        { id: 8, title: "Cooking for Beginners", image: img8 },
      ],
    },
    {
      id: 14,
      image: img14,
      title: "Web Development Bootcamp",
      description:
        "This intensive bootcamp covers everything you need to become a full-stack web developer. From front-end design with HTML, CSS, and JavaScript to back-end development with Node.js and databases, this course equips you with the skills to build and deploy professional web applications.",
      instructor: "William Roberts",
      duration: "20 hours",
      syllabus: [
        {
          "title": "Module 1: Introduction to Web Development",
          "description": "Understand the basics of web development and the technologies involved.",
          "duration": "30 minutes"
        },
        {
          "title": "Module 2: HTML5 and CSS3 Basics",
          "description": "Learn the fundamentals of HTML5 and CSS3 for structuring and styling websites.",
          "duration": "50 minutes"
        },
        {
          "title": "Module 3: Responsive Web Design with Flexbox and Grid",
          "description": "Build responsive layouts using Flexbox and CSS Grid techniques.",
          "duration": "60 minutes"
        },
        {
          "title": "Module 4: JavaScript Fundamentals and DOM Manipulation",
          "description": "Explore JavaScript basics and learn how to manipulate the DOM.",
          "duration": "60 minutes"
        },
        {
          "title": "Module 5: Frontend Frameworks: React Basics",
          "description": "Get started with React and build interactive user interfaces.",
          "duration": "50 minutes"
        },
        {
          "title": "Module 6: Backend Development with Node.js and Express",
          "description": "Learn the basics of backend development using Node.js and Express.",
          "duration": "60 minutes"
        },
        {
          "title": "Module 7: Working with Databases (MongoDB, SQL)",
          "description": "Understand database management and integration with MongoDB and SQL.",
          "duration": "50 minutes"
        },
        {
          "title": "Module 8: Building a RESTful API",
          "description": "Create and test RESTful APIs for your web applications.",
          "duration": "60 minutes"
        },
        {
          "title": "Module 9: User Authentication and Authorization",
          "description": "Implement user authentication and secure your web application.",
          "duration": "50 minutes"
        },
        {
          "title": "Module 10: Deploying Web Applications to the Cloud",
          "description": "Learn how to deploy web applications to cloud platforms.",
          "duration": "60 minutes"
        }
      ],
      reviews: [
        { user: "Lucas", rating: 5, feedback: "Great for starting a tech career!" },
        { user: "Sophia", rating: 4, feedback: "Comprehensive and well-paced." },
      ],
      similarCourses: [
        { id: 1, title: "React for Beginners", image: img1 },
        { id: 6, title: "Advanced JavaScript" , image: img6},
      ],
    },
    {
      id: 15,
      title: "Creative Writing",
      image: img15,
      description:
        "Unlock your creativity and learn the art of storytelling in this comprehensive creative writing course. You'll explore techniques for developing characters, crafting engaging plots, and writing compelling dialogue. Whether you're writing fiction, poetry, or personal essays, this course will help you find your voice and refine your writing skills.",
      instructor: "Emma Thompson",
      duration: "8 hours",
      syllabus: [
        {
          "title": "Module 1: Introduction to Creative Writing",
          "description": "Learn the basics of creative writing and explore your unique voice.",
          "duration": "30 minutes"
        },
        {
          "title": "Module 2: Developing Unique and Relatable Characters",
          "description": "Create characters that resonate with readers and drive the story.",
          "duration": "50 minutes"
        },
        {
          "title": "Module 3: Crafting Engaging Plots and Story Arcs",
          "description": "Understand how to build compelling plots and story arcs.",
          "duration": "60 minutes"
        },
        {
          "title": "Module 4: Writing Dialogue That Feels Authentic",
          "description": "Learn to write dialogue that sounds natural and enhances the narrative.",
          "duration": "40 minutes"
        },
        {
          "title": "Module 5: Exploring Different Genres of Writing",
          "description": "Discover and experiment with different genres to expand your writing skills.",
          "duration": "45 minutes"
        },
        {
          "title": "Module 6: Techniques for Overcoming Writer's Block",
          "description": "Learn strategies to overcome creative challenges and writer's block.",
          "duration": "30 minutes"
        },
        {
          "title": "Module 7: Editing and Revising Your Work",
          "description": "Understand the editing process and refine your writing.",
          "duration": "50 minutes"
        },
        {
          "title": "Module 8: Submitting Your Work for Publication",
          "description": "Learn how to submit your writing to publishers and literary platforms.",
          "duration": "60 minutes"
        }
      ],
      reviews: [
        { user: "Ethan", rating: 5, feedback: "Helped me write my first short story!" },
        { user: "Olivia", rating: 4, feedback: "Very inspiring and practical." },
      ],
      similarCourses: [
        { id: 12, title: "Public Speaking Mastery", image: img12 },
        { id: 10, title: "Photography Masterclass", image: img10 },
      ],
    },
    {
      id: 16,
      title: "Time Management Techniques",
      image: img16,
      description:
        "Master the art of time management and increase your productivity. This course provides practical tools and techniques to help you prioritize tasks, avoid procrastination, and make the most of your time. Ideal for professionals, students, and anyone looking to optimize their daily schedule.",
      instructor: "Ethan Miller",
      duration: "5 hours",
      syllabus: [
        {
          "title": "Module 1: Introduction to Time Management",
          "description": "Learn the fundamentals of time management and why it is essential for productivity.",
          "duration": "30 minutes"
        },
        {
          "title": "Module 2: Setting SMART Goals",
          "description": "Discover how to set Specific, Measurable, Achievable, Relevant, and Time-bound goals.",
          "duration": "40 minutes"
        },
        {
          "title": "Module 3: Prioritization Techniques (Eisenhower Matrix, ABC Method)",
          "description": "Master prioritization techniques to focus on what truly matters.",
          "duration": "50 minutes"
        },
        {
          "title": "Module 4: Creating Effective To-Do Lists and Schedules",
          "description": "Learn to organize tasks and create practical daily schedules.",
          "duration": "45 minutes"
        },
        {
          "title": "Module 5: Avoiding Procrastination and Staying Focused",
          "description": "Develop strategies to overcome procrastination and maintain focus.",
          "duration": "50 minutes"
        },
        {
          "title": "Module 6: Managing Distractions and Interruptions",
          "description": "Learn how to minimize distractions and deal with interruptions effectively.",
          "duration": "40 minutes"
        },
        {
          "title": "Module 7: Using Time-Tracking Tools",
          "description": "Explore tools and apps to track and analyze how you spend your time.",
          "duration": "40 minutes"
        },
        {
          "title": "Module 8: Building Long-Term Productivity Habits",
          "description": "Develop habits that ensure sustained productivity and better time management.",
          "duration": "50 minutes"
        }
      ],
      reviews: [
        { user: "Sophia", rating: 5, feedback: "Increased my productivity significantly!" },
        { user: "Chris", rating: 4, feedback: "Very practical and easy to implement." },
      ],
      similarCourses: [
        { id: 12, title: "Public Speaking Mastery" , image: img12},
        { id: 17, title: "Stock Market Investing" , image: img17},
      ],
    },
    {
      id: 17,
      title: "Stock Market Investing",
      image: img17,
      description:
        "Learn the fundamentals of investing in the stock market and build a solid financial future. This course covers key concepts such as stock valuation, portfolio diversification, and risk management. Whether you're a beginner or looking to enhance your investment skills, this course will guide you through the process of making informed investment decisions.",
      instructor: "Sophia Walker",
      duration: "10 hours",
      syllabus: [
        {
          "title": "Module 1: Introduction to the Stock Market",
          "description": "Understand the basics of the stock market and how it operates.",
          "duration": "30 minutes"
        },
        {
          "title": "Module 2: Understanding Different Types of Investments",
          "description": "Learn about stocks, bonds, mutual funds, ETFs, and other investment types.",
          "duration": "40 minutes"
        },
        {
          "title": "Module 3: Fundamental and Technical Analysis",
          "description": "Explore methods to analyze stocks and make informed investment decisions.",
          "duration": "50 minutes"
        },
        {
          "title": "Module 4: Building a Diversified Portfolio",
          "description": "Learn the importance of diversification to reduce investment risk.",
          "duration": "45 minutes"
        },
        {
          "title": "Module 5: Risk Management and Mitigation Strategies",
          "description": "Understand strategies to manage and mitigate investment risks.",
          "duration": "50 minutes"
        },
        {
          "title": "Module 6: Investing in ETFs and Mutual Funds",
          "description": "Learn about passive investment strategies using ETFs and mutual funds.",
          "duration": "40 minutes"
        },
        {
          "title": "Module 7: Evaluating Market Trends and Indicators",
          "description": "Analyze market trends and use indicators to guide investment choices.",
          "duration": "50 minutes"
        },
        {
          "title": "Module 8: Developing a Long-Term Investment Strategy",
          "description": "Create a sustainable strategy to achieve your long-term financial goals.",
          "duration": "60 minutes"
        }
      ],
      reviews: [
        { user: "Emma", rating: 5, feedback: "Helped me start investing with confidence!" },
        { user: "John", rating: 4, feedback: "Informative and well-structured." },
      ],
      similarCourses: [
        { id: 16, title: "Time Management Techniques", image: img16 },
        { id: 14, title: "Web Development Bootcamp", image: img14 },
      ],
    },
    {
      id: 18,
      title: "Music Theory for Beginners",
      image: img18,
      description:
        "Discover the fundamentals of music theory in this beginner-friendly course. You'll learn how to read sheet music, understand scales and chords, and create your own melodies. Whether you're a musician, composer, or just curious about music, this course provides a solid foundation.",
      instructor: "Lucas Johnson",
      duration: "6 hours",
      syllabus: [
        {
          "title": "Module 1: Introduction to Music Theory",
          "description": "Learn the basics of music theory and its importance in music creation.",
          "duration": "30 minutes"
        },
        {
          "title": "Module 2: Understanding Notes and Scales",
          "description": "Explore the structure of notes and scales in Western music.",
          "duration": "40 minutes"
        },
        {
          "title": "Module 3: Building Chords and Progressions",
          "description": "Understand how chords and progressions are constructed and used in music.",
          "duration": "50 minutes"
        },
        {
          "title": "Module 4: Rhythm, Timing, and Meter",
          "description": "Learn the fundamentals of rhythm, timing, and meter in music.",
          "duration": "45 minutes"
        },
        {
          "title": "Module 5: Reading and Writing Sheet Music",
          "description": "Develop the skill of reading and writing music notation.",
          "duration": "50 minutes"
        },
        {
          "title": "Module 6: Introduction to Harmony and Melody",
          "description": "Understand the relationship between harmony and melody in music composition.",
          "duration": "40 minutes"
        },
        {
          "title": "Module 7: Composing Simple Melodies",
          "description": "Learn to create your own melodies using music theory principles.",
          "duration": "50 minutes"
        },
        {
          "title": "Module 8: Applying Music Theory in Practice",
          "description": "Explore practical applications of music theory in performance and composition.",
          "duration": "60 minutes"
        }
      ],      
      reviews: [
        { user: "Olivia", rating: 5, feedback: "Perfect for aspiring musicians!" },
        { user: "Liam", rating: 4, feedback: "Very detailed and easy to follow." },
      ],
      similarCourses: [
        { id: 19, title: "Interior Design Basics" , image: img19},
        { id: 10, title: "Photography Masterclass", image: img10 },
      ],
    },
    {
      id: 19,
      title: "Interior Design Basics",
      image: img19,
      description:
        "Learn the principles of interior design and transform any space into a beautiful and functional environment. This course covers space planning, color theory, lighting, and furniture selection, helping you create interiors that reflect your personal style.",
      instructor: "Sophia Martinez",
      duration: "8 hours",
      syllabus: [
        {
          "title": "Module 1: Introduction to Interior Design",
          "description": "Learn the fundamentals of interior design and its key elements.",
          "duration": "30 minutes"
        },
        {
          "title": "Module 2: Space Planning and Layouts",
          "description": "Master the art of space planning and creating functional layouts.",
          "duration": "50 minutes"
        },
        {
          "title": "Module 3: Understanding Color and Texture",
          "description": "Learn how to use color and texture to enhance spaces.",
          "duration": "40 minutes"
        },
        {
          "title": "Module 4: Choosing the Right Furniture",
          "description": "Understand how to select furniture that fits the space and design theme.",
          "duration": "50 minutes"
        },
        {
          "title": "Module 5: Lighting Design for Different Spaces",
          "description": "Discover the role of lighting and its impact on interiors.",
          "duration": "45 minutes"
        },
        {
          "title": "Module 6: Incorporating Art and Decor",
          "description": "Learn how to use art and decor to personalize spaces.",
          "duration": "40 minutes"
        },
        {
          "title": "Module 7: Designing for Functionality and Comfort",
          "description": "Focus on creating designs that are both functional and comfortable.",
          "duration": "50 minutes"
        },
        {
          "title": "Module 8: Creating a Cohesive Design Theme",
          "description": "Learn how to bring all design elements together for a cohesive look.",
          "duration": "60 minutes"
        }
      ],
      reviews: [
        { user: "Emma", rating: 5, feedback: "Now I can design my own home!" },
        { user: "Lucas", rating: 4, feedback: "Very inspiring and practical." },
      ],
      similarCourses: [
        { id: 4, title: "Graphic Design Basics" , image: img4},
        { id: 18, title: "Music Theory for Beginners" , image: img18},
      ],
    },
    {
      id: 20,
      title: "Blockchain and Cryptocurrency",
      image: img20,
      description:
        "Understand the technology behind blockchain and cryptocurrencies like Bitcoin and Ethereum. This course covers blockchain fundamentals, how cryptocurrencies work, and their potential applications in various industries.",
      instructor: "Alexander Green",
      duration: "12 hours",
      syllabus: [
        {
          "title": "Module 1: Introduction to Blockchain Technology",
          "description": "Understand the basics of blockchain technology and how it works.",
          "duration": "30 minutes"
        },
        {
          "title": "Module 2: How Cryptocurrencies Work",
          "description": "Learn about the fundamentals of cryptocurrencies like Bitcoin and Ethereum.",
          "duration": "40 minutes"
        },
        {
          "title": "Module 3: Mining and Consensus Mechanisms",
          "description": "Explore mining and mechanisms like Proof of Work and Proof of Stake.",
          "duration": "50 minutes"
        },
        {
          "title": "Module 4: Smart Contracts and Decentralized Applications (DApps)",
          "description": "Understand smart contracts and their role in decentralized applications.",
          "duration": "45 minutes"
        },
        {
          "title": "Module 5: Security and Privacy in Blockchain",
          "description": "Learn about the security challenges and privacy considerations in blockchain.",
          "duration": "50 minutes"
        },
        {
          "title": "Module 6: Investing in Cryptocurrencies",
          "description": "Discover strategies for investing in cryptocurrencies responsibly.",
          "duration": "40 minutes"
        },
        {
          "title": "Module 7: Blockchain Applications in Different Industries",
          "description": "Explore real-world use cases of blockchain in various industries.",
          "duration": "50 minutes"
        },
        {
          "title": "Module 8: Future of Blockchain and Cryptocurrencies",
          "description": "Discuss trends and the potential future of blockchain and cryptocurrencies.",
          "duration": "60 minutes"
        }
      ],
      reviews: [
        { user: "David", rating: 5, feedback: "Great introduction to blockchain!" },
        { user: "Sophia", rating: 4, feedback: "Very insightful and easy to follow." },
      ],
      similarCourses: [
        { id: 3, title: "Python for Data Science", image: img3 },
        { id: 11, title: "Machine Learning with Python" , image: img11},
      ],
    },
  ];

  const course = courses.find((c) => c.id === parseInt(id));

  if (!course) {
    return (
      <div className="course-details">
        <h1>Course Not Found</h1>
        <Link to="/coursesl" className="go-back-btn">
          Go Back to Courses
        </Link>
      </div>
    );
  }

  return (
    <>
    <br/><br/><br/>
    <div className="course-details">
      <div className="course-header">
        <h1>{course.title}</h1>
        <img className="image" src={course.image} alt={course.title} />
        <p className="description">{course.description}</p>
        <button onClick={handleEnrollment} className="enroll-btn">
          Enroll Now
        </button>
      </div>

      <div className="section">
        <h2>Course Information</h2>
        <p><strong>Instructor:</strong> {course.instructor}</p>
        <p><strong>Duration:</strong> {course.duration}</p>
      </div>

      <div className="section">
        <h2>Syllabus</h2>
        <ul>
          {course.syllabus.map((item, index) => (
            <li key={index}>
              <div className="syllabus-item" onClick={() => handleToggle(index)}>
                <p>{item.title}</p>
                {expandedModule === index && (
                  <div className="syllabus-details">
                    <p><strong>Description:</strong> {item.description}</p>
                    <p><strong>Duration:</strong> {item.duration}</p>
                  </div>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="section reviews">
        <h2>Reviews</h2>
        {reviews.map((review, index) => (
          <div key={index} className="review-cardd">
            <p><strong>{review.user}</strong> ({review.rating})</p>
            <p>{review.feedback}</p>
          </div>
        ))}

        <h3 className="reviewtxt">Leave a Review</h3>
        <form onSubmit={handleReviewSubmit}>
          <div className="firstt">
            <input
              type="text"
              placeholder="Your Name"
              value={newReview.user}
              onChange={(e) => setNewReview({ ...newReview, user: e.target.value })}
              required
            />
            <select
              value={newReview.rating}
              onChange={(e) => setNewReview({ ...newReview, rating: e.target.value })}
              required
            >
              <option value="">Select Rating</option>
              <option value="⭐⭐⭐⭐⭐">⭐⭐⭐⭐⭐</option>
              <option value="⭐⭐⭐⭐">⭐⭐⭐⭐</option>
              <option value="⭐⭐⭐">⭐⭐⭐</option>
              <option value="⭐⭐">⭐⭐</option>
              <option value="⭐">⭐</option>
            </select>
          </div>

          <textarea
            placeholder="Your Feedback"
            value={newReview.feedback}
            onChange={(e) => setNewReview({ ...newReview, feedback: e.target.value })}
            required
          ></textarea>
          <button type="submit" className="submit-btn">Submit Review</button>
        </form>
      </div>

      <div className="section similar-courses">
        <h2>Similar Courses</h2>
        <div className="similar-courses-container">
          {course.similarCourses.map((similarCourse) => (
            <div key={similarCourse.id} className="course-card">
              <img src={similarCourse.image} alt={similarCourse.title} className="course-card-image" />
              <h3 className="course-card-title">{similarCourse.title}</h3>
              <Link to={`/details/${similarCourse.id}`} className="course-card-link">View Details</Link>
            </div>
          ))}
        </div>
      </div>

      <Link to="/coursesl" className="go-back-btn">Go Back to Courses</Link>
    </div>
    </>
  );
};

export default Details;

