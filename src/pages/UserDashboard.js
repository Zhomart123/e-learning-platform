import React, { useEffect, useState } from "react";
import "../styles/UserDashboard.css";

const UserDashboard = () => {
  const [enrolledCourses, setEnrolledCourses] = useState([]);

  useEffect(() => {
    const savedCourses = JSON.parse(localStorage.getItem("enrolledCourses")) || [];
    setEnrolledCourses(savedCourses);
  }, []);

  const handleLessonComplete = (courseId) => {
    const updatedCourses = enrolledCourses.map((course) => {
      if (course.id === courseId) {
        const totalLessons = 12; 
        course.lessonsCompleted = Math.min(course.lessonsCompleted + 1, totalLessons);
        course.progress = Math.round((course.lessonsCompleted / totalLessons) * 100);
      }
      return course;
    });

    setEnrolledCourses(updatedCourses);
    localStorage.setItem("enrolledCourses", JSON.stringify(updatedCourses));
  };

  return (
    <>
      <br/><br/><br/><br/>
      <h1>Your Enrolled Courses</h1>
      <div className="dashboard-container">
      {enrolledCourses.length > 0 ? (
        enrolledCourses.map((course) => (
          <div key={course.id} className="course-progress-card">
            <h2>{course.title}</h2>
            <div className="progress-bar-container">
              <div
                className="progress-bar"
                style={{ width: `${course.progress || 0}%` }}
              ></div>
            </div>
            <p>{course.lessonsCompleted}/12 Lessons Completed</p>
            <button onClick={() => handleLessonComplete(course.id)}>
              Complete Lesson
            </button>
          </div>
        ))
      ) : (
        <p>No courses enrolled yet.</p>
      )}
      </div>
    </>
  );
};

export default UserDashboard;
