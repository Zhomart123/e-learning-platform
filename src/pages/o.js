
import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import "../styles/details.css"; 
import img1 from "../img/image/react.png";

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
    // Retrieve current enrolled courses
    const enrolledCourses = JSON.parse(localStorage.getItem("enrolledCourses")) || [];

    // Check if the course is already enrolled
    if (!enrolledCourses.find((course) => course.id === parseInt(id))) {
      enrolledCourses.push({ id: parseInt(id), title: course.title, lessonsCompleted: 0 });
      localStorage.setItem("enrolledCourses", JSON.stringify(enrolledCourses));
    }

    navigate("/userdashboard"); 
  };

  const courses = [
    {
      id: 1,
      title: "React for Beginners",
      image: img1,
      description: "This course introduces you to React.js...",
      instructor: "John Doe",
      duration: "6 hours",
      syllabus: [
        { title: "Module 1: Introduction to React.js", description: "An overview of React.js basics.", duration: "30 minutes" },
        // other modules...
      ],
    },
    {
      id: 2,
      title: "Digital Marketing Essentials",
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
    },
  ];

  const course = courses.find((c) => c.id === parseInt(id));

  if (!course) {
    return (
      <div className="course-details">
        <h1>Course Not Found</h1>
        <Link to="/coursesl" className="go-back-btn">Go Back to Courses</Link>
      </div>
    );
  }

  return (
    <div className="course-details">
      <h1>{course.title}</h1>
      <img src={course.image} alt={course.title} />
      <p>{course.description}</p>
      <button onClick={handleEnrollment} className="enroll-btn">Enroll Now</button>
    </div>
  );
};

export default Details;


