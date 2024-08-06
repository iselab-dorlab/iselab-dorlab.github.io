import React from 'react';

const AboutUs = () => {
    return (
        <>
            {/* About Section */}
            <section className="section content-background">
                {/* Section Title */}
                <div className="container section-title">
                    <h2>About Us<br /></h2>
                </div>

                <section className="about section">
                    <div className="container">
                        <div className="row gy-4">
                            <div className="col-lg-8 content">
                                <h3>Intelligent Software Engineering Laboratory (ISE-Lab)</h3>
                                <p className="fst-italic">
                                    Nhóm nghiên cứu về công nghệ phần mềm thông minh (ISE-Lab) thuộc Trung tâm nghiên cứu quốc
                                    tế về Trí tuệ nhân tạo (BKAI), trường Công nghệ thông tin và truyền thông, Đại học Bách Khoa
                                    Hà Nội dưới sự dẫn dắt của Tiến sĩ - Giảng viên khoa Khoa học máy tính Bùi Thị Mai Anh.
                                </p>
                                <p>Trang web chính thức của nhóm tại BK-AI: <a href='https://bkai.ai/research/intelligent-software-engineering/' target="_blank" rel="noopener noreferrer" className="post-link">
                                    <span>Intelligent Software Engineering</span>
                                </a>
                                </p>
                                <p>Các hướng nghiên cứu chính của nhóm hiện nay tập trung vào ứng dụng trí tuệ nhân tạo, các
                                    thuật toán học máy - học sâu và các mô hình ngôn ngữ vào giải quyết các vấn đề trong quá
                                    trình phát triển phần mềm như: </p>
                                <ul>
                                    <li><i className="bi bi-check2-all"></i> <span>Phát hiện sớm các vấn đề về thiết kế (code smell)
                                        trong mã nguồn</span></li>
                                    <li><i className="bi bi-check2-all"></i> <span>Phát hiện nợ kĩ thuật (technical debt) trong quá
                                        trình phát triển phần mềm liên tục (continuous development – continuous
                                        integration)</span></li>
                                    <li><i className="bi bi-check2-all"></i> <span>Ứng dụng các mô hình và kĩ thuật trong xử lý ngôn
                                        ngữ tự nhiên (NLP) trong các bài toán có liên quan đến mã nguồn</span></li>
                                    <li><i className="bi bi-check2-all"></i> <span>Phát hiện các báo cáo lỗi trùng lặp, tìm các báo
                                        cáo lỗi có liên quan lẫn nhau, đặc biệt quan trọng khi quy mô của dự án lớn và các
                                        nhóm nhỏ phát triển song song các thành phần khác nhau của hệ thống.</span></li>
                                </ul>
                            </div>
                            <div className="col-lg-4 position-relative align-self-start">
                                <img src="assets/img/laboratory/ise.jpg" className="img-fluid" alt="" />
                            </div>
                        </div>
                    </div>
                </section>
                {/* Stats Section */}
                <section id="stats" className="stats section">
                    <div className="container">
                        <div className="row gy-4">
                            <div className="col-lg-3 col-md-6">
                                <div className="stats-item d-flex align-items-center w-100 h-100">
                                    <i className="fas fa-user-tie flex-shrink-0"></i>
                                    <div>
                                        <span>3</span>
                                        <p>Professor</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="stats-item d-flex align-items-center w-100 h-100">
                                    <i className="fa-solid fa-graduation-cap"></i>
                                    <div>
                                        <span>10</span>
                                        <p>Students</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="stats-item d-flex align-items-center w-100 h-100">
                                    <i className="fas fa-award flex-shrink-0"></i>
                                    <div>
                                        <span>5</span>
                                        <p>Awards</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="stats-item d-flex align-items-center w-100 h-100">
                                    <i className="fas fa-newspaper flex-shrink-0"></i>
                                    <div>
                                        <span>9</span>
                                        <p>Papers</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </section>


            <section className="about section">
                <div className="container">
                    <div className="row gy-4">
                        <div className="col-lg-8 content">
                            <h3>Data-driven Operation Research Laboratory</h3>
                            <p className="fst-italic">
                                Nhóm nghiên cứu về vận trù học (DOR-Lab) thuộc Trường Công nghệ thông tin và Truyền thông, Đại học Bách Khoa Hà Nội được dẫn dắt bởi nhóm Tiến sĩ-Giảng viên khoa Khoa học máy tính, thầy Bùi Quốc Trung và thầy Phạm Quang Dũng.
                            </p>
                            <p>Các hướng nghiên cứu chính của nhóm hiện nay tập trung vào các bài toán phân tích dữ liệu, tối ưu rời rạc và đánh giá tín dụng:</p>
                            <ul>
                                <li><i className="bi bi-check2-all"></i> <span>Các thuật toán tối ưu rời rạc được áp dụng trong các bài toán truyền thống như tối ưu tài nguyên, lập lịch nhưng có phạm vi ứng dụng rộng rãi trong thực tế. Hiện nay nhóm hướng tới tích hợp thêm các ràng buộc đơn biến, đa biến nhằm giải quyết được các vấn đề thực tiễn và có tính ứng dụng cao trong Logistic (ví dụ bài toán tối ưu nguồn lực giao hàng và phân bổ kho hàng v.v)</span></li>
                                <li><i className="bi bi-check2-all"></i> <span>Lĩnh vực công nghệ tài chính (fintech) với các bài toán liên quan đến phân tích và xử lý dữ liệu, đặc biệt là rời rạc hoá dữ liệu liên tục, lựa chọn các đặc trưng quan trọng của dữ liệu nhiều chiều đặc biệt khi có các ràng buộc giữa các đặc trưng.</span></li>
                                <li><i className="bi bi-check2-all"></i> <span>Đánh giá tín dụng là một trong các hướng mũi nhọn của nhóm nghiên cứu. Hiện tại thầy Trung đã triển khai một số mô hình đánh giá tín dụng và được ứng dụng thí điểm trên các dữ liệu thực tế và thu được các kết quả nghiên cứu tiềm năng. Tuy vậy dữ liệu thực tế đối với bài toán này vẫn còn rất nhiều hướng tiếp cận để tối ưu và nâng cao độ chính xác của các mô hình chấm điểm tín dụng hiện tại. Áp dụng các thuật toán tối ưu rời rạc kết hợp với các mô hình học máy để xử lý đang được nhóm triển khai.</span></li>
                            </ul>
                        </div>
                        <div className="col-lg-4 position-relative align-self-start">
                            <img src="assets/img/laboratory/dor.jpg" className="img-fluid" alt="Laboratory Image" />
                        </div>
                    </div>
                </div>
                {/* Stats Section */}
                <section id="stats" className="stats section">
                    <div className="container">
                        <div className="row gy-4">
                            <div className="col-lg-3 col-md-6">
                                <div className="stats-item d-flex align-items-center w-100 h-100">
                                    <i className="fas fa-user-tie flex-shrink-0"></i>
                                    <div>
                                        <span>3</span>
                                        <p>Professor</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="stats-item d-flex align-items-center w-100 h-100">
                                    <i className="fa-solid fa-graduation-cap"></i>
                                    <div>
                                        <span>8</span>
                                        <p>Students</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="stats-item d-flex align-items-center w-100 h-100">
                                    <i className="fas fa-award flex-shrink-0"></i>
                                    <div>
                                        <span>2</span>
                                        <p>Awards</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="stats-item d-flex align-items-center w-100 h-100">
                                    <i className="fas fa-newspaper flex-shrink-0"></i>
                                    <div>
                                        <span>7</span>
                                        <p>Papers</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </section>



        </>
    );
};

export default AboutUs;


