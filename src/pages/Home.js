import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import fm from 'front-matter';

const Home = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      try {

        const metadataResponse = await fetch('/assets/news/news.json');
        const fileList = await metadataResponse.json();
        
        const articlesContent = await Promise.all(
          fileList.map((file) => fetch(file).then((res) => res.text()))
        );

        const newsList = articlesContent.map((content, index) => {
          const { attributes, body } = fm(content);
          const fileName = fileList[index].split('/').pop().replace('.md', '');

          return {
            fileName,
            title: attributes.title || `News Item ${index + 1}`,
            date: attributes.date || 'Unknown Date',
            chapeau: attributes.chapeau, 
          };
        });

        setNews(newsList);
      } catch (error) {
        console.error('Error fetching articles:', error);
      }
    };

    fetchArticles();
  }, []);

  return (
    <section className="section content-background">
      <section id="intro" className="intro section">
        <div
          id="intro-introlab"
          className="introlab slide introlab-fade"
          data-bs-ride="introlab"
          data-bs-interval="5000"
        >
          <div className="introlab-item">
            <img src="assets/img/intro/intro1.jpg" alt="Lab Image" />
            <div className="container">
              <h2>Welcome to Laboratory of ISE and DOR</h2>
              <p>
                Hai nhóm nghiên cứu tiềm năng ISE (Intelligent Software Engineering) và DOR (Data-driven Operation Research) hoạt động song song dưới sự dẫn dắt của nhóm các thầy cô giảng viên Khoa Khoa Học Máy Tính- Trường Công Nghệ Thông Tin và Truyền Thông, Đại học Bách Khoa Hà Nội.
              </p>
              <Link to="/contact" className="btn-get-started">Join with us</Link>
            </div>
          </div>
        </div>
      </section>
      <div className="section content-background">
        <div className="container section-title">
          <h2>News</h2>
        </div>
        <div className="container">
          <ul>
            {news.map((newsItem, index) => (
              <li key={index}>
                <article>
                  <Link to={`/news/${newsItem.fileName}`} className="post-link">
                  [{newsItem.date}] {newsItem.title}
                  </Link>
                  <p>{newsItem.chapeau}</p>
                </article>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Home;
