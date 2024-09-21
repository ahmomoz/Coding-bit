import { courseRender } from '../js/courses.js';

const courseCard = document.querySelector('.course-card-wrap');

if (courseCard) {
  const courseRenderData = () => {
    courseRender(courseCard);
  };

  courseRenderData();
} else {
  console.error('course-card-wrap element not found');
}