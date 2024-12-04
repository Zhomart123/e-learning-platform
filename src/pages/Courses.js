import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/course.css";
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

const CoursesL = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedPrice, setSelectedPrice] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const coursesPerPage = 4;

  const courses = [
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
      id: 11,
      title: "Machine Learning with Python",
      category: "Technology",
      description: "Learn machine learning concepts using Python.",
      image: img11,
      price: "$59",
      instructor: "Sophia White",
      duration: "15 hours",
    },
    {
      id: 12,
      title: "Public Speaking Mastery",
      category: "Personal Development",
      description: "Enhance your public speaking skills and confidence.",
      image: img12,
      price: "$20",
      instructor: "Chris Evans",
      duration: "6 hours",
    },
    {
      id: 13,
      title: "Yoga for Beginners",
      category: "Health",
      description: "Learn basic yoga poses and improve your flexibility.",
      image: img13,
      price: "Free",
      instructor: "Olivia Harris",
      duration: "4 hours",
    },
    {
      id: 14,
      title: "Web Development Bootcamp",
      category: "Technology",
      description: "Become a full-stack web developer from scratch.",
      image: img14,
      price: "$99",
      instructor: "William Roberts",
      duration: "20 hours",
    },
    {
      id: 15,
      title: "Creative Writing",
      category: "Art",
      description: "Enhance your creative writing skills.",
      image: img15,
      price: "Free",
      instructor: "Emma Thompson",
      duration: "8 hours",
    },
    {
      id: 16,
      title: "Time Management Technique",
      category: "Personal Development",
      description: "Master time management to increase productivity.",
      image: img16,
      price: "$15",
      instructor: "Ethan Miller",
      duration: "5 hours",
    },
    {
      id: 17,
      title: "Stock Market Investing",
      category: "Business",
      description: "Learn the basics of investing in the stock market.",
      image: img17,
      price: "$35",
      instructor: "Sophia Walker",
      duration: "10 hours",
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
    {
      id: 20,
      title: "Blockchain & Cryptocurrency",
      category: "Technology",
      description: "Understand blockchain technology and cryptocurrencies.",
      image: img20,
      price: "$60",
      instructor: "Alexander Green",
      duration: "12 hours",
    },
  ];

  const filteredCourses = courses.filter(
    (course) =>
      (selectedCategory === "All" || course.category === selectedCategory) &&
      (selectedPrice === "All" ||
        (selectedPrice === "Free" && course.price === "Free") ||
        (selectedPrice === "Paid" && course.price !== "Free")) &&
      (course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.instructor.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="courses-listing">
      <br/><br/><br/>
      <h1>Available Courses</h1>

      <div className="filters">
        <input
          type="text"
          placeholder="Search by title or instructor..."
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select
          onChange={(e) => setSelectedCategory(e.target.value)}
          value={selectedCategory}
        >
          <option value="All">All Categories</option>
          <option value="Technology">Technology</option>
          <option value="Business">Business</option>
          <option value="Art">Art</option>
          <option value="Health">Health</option>
          <option value="Lifestyle">Lifestyle</option>
          <option value="Personal Development">Personal Development</option>
          <option value="Music">Music</option>
        </select>
        <select
          onChange={(e) => setSelectedPrice(e.target.value)}
          value={selectedPrice}
        >
          <option value="All">All Prices</option>
          <option value="Free">Free</option>
          <option value="Paid">Paid</option>
        </select>
      </div>

      <div className="course-cards">
        {filteredCourses.map((course) => (
          <div key={course.id} className="course-cardd">
            <img className="course-image" src={course.image} alt={course.title} />
            <div className="course-info">
              <h3>{course.title}</h3>
              <p className="txt">{course.description}</p>
              <p className="course-instructor"> <strong>Instructor:</strong> {course.instructor}</p>
			        <p className="stars"><strong>{course.rate}</strong></p>
              <p className="course-price">{course.price}</p>
              <Link to={`/details/${course.id}`}>
                <button className="register-btn">Register Now</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoursesL;
