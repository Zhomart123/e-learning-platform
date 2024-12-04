import React, { useState } from 'react';
import "../styles/Home.css";
import { Link } from "react-router-dom";
import Header from '../components/header/Header.js';

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
import img18 from "../img/image/unnamed.png";
import img19 from "../img/image/interier.jpg";

import search from "../img/image/magnifiying-glass.png"


const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const popularCourses = [
    {
      id: 1,
      title: "React for Beginners",
      category: "Technology",
      description: "Learn the basics of React.js and build dynamic web applications.",
      image: img1,
      price: "Free",
      instructor: "John Doe",
      duration: "6 hours",
    },
    {
      id: 2,
      title: "Digital Marketing Essentials",
      category: "Business",
      description: "Master digital marketing techniques to grow your business.",
      image: img2,
      price: "$29",
      instructor: "Jane Smith",
      duration: "8 hours",
    },
    {
      id: 3,
      title: "Python for Data Science",
      category: "Technology",
      description: "Learn Python programming and data analysis techniques.",
      image: img3,
      price: "$49",
      instructor: "Alice Johnson",
      duration: "10 hours",
    },
    {
      id: 4,
      title: "Graphic Design Basics",
      category: "Art",
      image: img4,
      description: "Learn the basics of graphic design with popular tools.",
      price: "Free",
      instructor: "Mark Wilson",
      duration: "5 hours",
    },
    {
      id: 5,
      title: "Fitness and Nutrition",
      category: "Health",
      description: "Get started with fitness and nutrition basics.",
      image: img5,
      price: "$19",
      instructor: "Sarah Taylor",
      duration: "7 hours",
    },
    {
      id: 6,
      title: "Advanced JavaScript",
      category: "Technology",
      description: "Deep dive into advanced JavaScript concepts.",
      image: img6,
      price: "$39",
      instructor: "Michael Brown",
      duration: "12 hours",
    },
    {
      id: 7,
      title: "Social Media Marketing",
      category: "Business",
      description: "Learn how to market effectively on social media platforms.",
      image: img7,
      price: "$25",
      instructor: "Emily Davis",
      duration: "6 hours",
    },
    {
      id: 8,
      title: "Cooking for Beginners",
      category: "Lifestyle",
      description: "Learn basic cooking skills to make delicious meals.",
      image: img8,
      price: "Free",
      instructor: "Chef Gordon",
      duration: "4 hours",
    },
    {
      id: 9,
      title: "SEO for Beginners",
      category: "Business",
      description: "Learn the basics of SEO to improve your website ranking.",
      image: img9,
      price: "$30",
      instructor: "Linda Clark",
      duration: "5 hours",
    },
    {
      id: 10,
      title: "Photography Masterclass",
      category: "Art",
      description: "Master photography techniques and create stunning photos.",
      image: img10,
      price: "$50",
      instructor: "David Lee",
      duration: "9 hours",
    },
    {
      id: 18,
      title: "Music Theory for Beginners",
      category: "Music",
      description: "Learn the fundamentals of music theory.",
      image: img18,
      price: "Free",
      instructor: "Lucas Johnson",
      duration: "6 hours",
    },
    {
      id: 19,
      title: "Interior Design Basics",
      category: "Lifestyle",
      description: "Learn how to design beautiful interiors.",
      image: img19,
      price: "$45",
      instructor: "Sophia Martinez",
      duration: "8 hours",
    },
  ];

  const filteredCourses = popularCourses.filter((course) => {
    return (
      course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.instructor.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="home-container">
      <br/><br/><br/>
      <Header/>
      <header className="header">
        <h1>Explore top-rated courses and enhance your skills!</h1>
      </header>

      <div className="search-bar">
        <input
          type="text"
          placeholder="Search courses by title, topic, or instructor"
          value={searchTerm}
          onChange={handleSearch}
        />
        <div className='search'>
          <img className='imggg' src={search}/>
        </div>
      </div>

      <section className="carousel">
        <div className="carousel-container">
          {filteredCourses.length > 0 ? (
            filteredCourses.map((course) => (
              <div className="course-card" key={course.id}>
                <img src={course.image} alt={course.title} />
                <div className="course-info">
                  <h3>{course.title}</h3>
                  <p className='author'>Instructor: {course.instructor}</p>
                  <Link to={`/details/${course.id}`} className="register-btn">
                    Register Now
                  </Link>
                </div>
              </div>
            ))
          ) : (
            <p>No courses found</p>
          )}
        </div>
      </section>
    </div>
  );
};

export default Home;