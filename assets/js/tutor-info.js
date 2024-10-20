import { courseRender } from '../js/courses.js';

const topicSeriesCourseCard = document.querySelector('.topicSeriesCourse-card-wrap');
const customLearningCourseCard = document.querySelector('.customLearning-card-wrap');
const freeTipShortsCard = document.querySelector('.freeTipShorts-card-wrap');

const topicSeriesCourseList = [
  {
    courseName: 'React 進階開發技巧',
    img: 'course-17.png',
    teacher: '卡斯伯Casper',
    star: '4.0',
    totalDuration: '36小時',
    purchaseCount: '12,345',
    courseCategory: '主題式課程影片'
  },
  {
    courseName: 'Web 開發實戰',
    img: 'course-2.png',
    teacher: '卡斯伯 Casper',
    star: '4.0',
    totalDuration: '3.2小時',
    purchaseCount: '402',
    courseCategory: '主題式課程影片'
  },
  {
    courseName: '數據分析技巧',
    img: 'course-3.png',
    teacher: '卡斯伯 Casper',
    star: '4.0',
    totalDuration: '1.2小時',
    purchaseCount: '48',
    courseCategory: '主題式課程影片'
  },
  {
    courseName: '移動應用開發',
    img: 'course-4.png',
    teacher: '卡斯伯 Casper',
    star: '4.0',
    totalDuration: '26小時',
    purchaseCount: '798',
    courseCategory: '主題式課程影片'
  },
  {
    courseName: '網路安全基礎',
    img: 'course-6.png',
    teacher: '卡斯伯 Casper',
    star: '4.0',
    totalDuration: '1.8小時',
    purchaseCount: '168',
    courseCategory: '主題式課程影片'
  },
  {
    courseName: 'UI/UX 設計原則',
    img: 'course-8.png',
    teacher: '卡斯伯 Casper',
    star: '4.0',
    totalDuration: '3小時',
    purchaseCount: '1,025',
    courseCategory: '主題式課程影片'
  },
  {
    courseName: '區塊鏈技術探索',
    img: 'course-9.png',
    teacher: '卡斯伯 Casper',
    star: '4.0',
    totalDuration: '7小時',
    purchaseCount: '225',
    courseCategory: '主題式課程影片'
  }
];
const customLearningCourseList = [
  {
    courseName: 'CSS 毛玻璃製作效果',
    img: 'course-14.png',
    teacher: '卡斯伯 Casper',
    star: '4.0',
    totalDuration: '8分16秒',
    purchaseCount: '1,100',
    courseCategory: '客製化學習需求教學影片'
  },
  {
    courseName: '表格渲染技巧',
    img: 'course-15.png',
    teacher: '卡斯伯 Casper',
    star: '4.2',
    totalDuration: '5分30秒',
    purchaseCount: '402',
    courseCategory: '客製化學習需求教學影片'
  },
  {
    courseName: 'clip-path繪製不規則圖形',
    img: 'course-16.png',
    teacher: '卡斯伯 Casper',
    star: '4.8',
    totalDuration: '7分12秒',
    purchaseCount: '48',
    courseCategory: '客製化學習需求教學影片'
  }
];
const freeTipShortsList = [
  {
    courseName: '快速掌握html標籤',
    img: 'course-12.png',
    teacher: '卡斯伯 Casper',
    star: '4.0',
    totalDuration: '2分18秒',
    purchaseCount: '3,581',
    courseCategory: '免費影片'
  },
  {
    courseName: 'html載入外部圖片方式',
    img: 'course-13.png',
    teacher: '卡斯伯 Casper',
    star: '4.0',
    totalDuration: '3分56秒',
    purchaseCount: '1,589',
    courseCategory: '免費影片'
  }
];

if (topicSeriesCourseCard) {
  const courseRenderData = () => {
    courseRender(topicSeriesCourseCard, topicSeriesCourseList);
  };
  const customLearningCourseRenderData = () => {
    courseRender(customLearningCourseCard, customLearningCourseList);
  };
  const freeTipShortsRenderData = () => {
    courseRender(freeTipShortsCard, freeTipShortsList);
  };
  
  courseRenderData();
  customLearningCourseRenderData();
  freeTipShortsRenderData();
} else {
  console.error('course-card-wrap element not found');
}