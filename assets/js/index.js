import { courseRender } from '../js/courses.js';

const courseCard = document.querySelector('.course-card-wrap');
const courseList = [
  {
    courseName: 'Python 基礎入門',
    img: 'course-1.png',
    teacher: 'Anna Wu',
    star: '4.0'
  },
  {
    courseName: 'Web 開發實戰',
    img: 'course-2.png',
    teacher: 'Peter Fan',
    star: '4.0'
  },
  {
    courseName: '數據分析技巧',
    img: 'course-3.png',
    teacher: 'Neko Meow',
    star: '4.0'
  },
  {
    courseName: '移動應用開發',
    img: 'course-4.png',
    teacher: 'momomo',
    star: '4.0'
  },
  {
    courseName: '機器學習導論',
    img: 'course-5.png',
    teacher: 'Tina Chen',
    star: '4.0'
  },
  {
    courseName: '網絡安全基礎',
    img: 'course-6.png',
    teacher: 'Anna Wu',
    star: '4.0'
  },
  {
    courseName: '雲計算應用',
    img: 'course-7.png',
    teacher: 'momomo',
    star: '4.0'
  },
  {
    courseName: 'UI/UX 設計原則',
    img: 'course-8.png',
    teacher: 'Tina Chen',
    star: '4.0'
  },
  {
    courseName: '區塊鏈技術探索',
    img: 'course-9.png',
    teacher: 'Anna Wu',
    star: '4.0'
  }
];

if (courseCard) {
  const courseRenderData = () => {
    courseRender(courseCard, courseList);
  };

  courseRenderData();
} else {
  console.error('course-card-wrap element not found');
}