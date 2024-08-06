// src/components/Home.js
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
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
              <h2>Chào mừng tới không gian làm việc của nhóm nghiên cứu ISE-DOR</h2>
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
            <li>
              <article>
                <Link to="/tuyenthanhvien" className="post-link">[06/08/2024] Tìm kiếm các ứng viên tiềm năng năm 2024!</Link>
                <p>
                  Hai nhóm nghiên cứu tiềm năng ISE (Intelligent Software Engineering) và DOR (Data-driven Operation Research) tìm kiếm những ứng viên tài năng. Gửi CV đây các bé ơiiii
                </p>
              </article>
            </li>
            <li>
              <article>
                <Link to="/tuyenthanhvien" className="post-link">[06/08/2023] Tìm kiếm các ứng viên tiềm năng năm 2024!</Link>
                <p>
                  Hai nhóm nghiên cứu tiềm năng ISE (Intelligent Software Engineering) và DOR (Data-driven Operation Research) tìm kiếm những ứng viên tài năng. Gửi CV đây các bé ơiiii
                </p>
              </article>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Home;
