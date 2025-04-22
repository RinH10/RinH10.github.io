/*!
* Start Bootstrap - The Big Picture v5.0.6 (https://startbootstrap.com/template/the-big-picture)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-the-big-picture/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

document.querySelector('.menu-item[href="creative-projects.html"]').addEventListener('click', (e) => {
  e.preventDefault(); // 阻止默认跳转行为
  document.querySelector('.overlay').style.display = 'none'; // 隐藏主页内容
  document.querySelector('.gallery').style.display = 'block'; // 显示画廊内容
});
