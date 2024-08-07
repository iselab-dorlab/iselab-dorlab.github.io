import React from 'react';

const TeamMember = ({ imgSrc, links, name, position }) => (
    <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
        <div className="team-member">
            <div className="member-img">
                <img src={imgSrc} className="img-fluid center-block" alt={name} />
                <div className="social">
                    {links.map((link, index) => (
                        <a key={index} href={link.href} target="_blank" rel="noopener noreferrer">
                            <i className={link.iconClass}></i>
                        </a>
                    ))}
                </div>
            </div>
            <div className="member-info">
                <a className="post-link">{name}</a>
                {formatDescription(position).map((line, lineIndex) => (
                                    <span key={lineIndex}>{line}</span>
                                ))}
            </div>
        </div>
    </div>
);
const formatDescription = (description) => {
    // Replace <br> tags with newline characters and split into lines
    const lines = description.split(/<br\s*\/?>/);
    return lines;
};

const Member = () => {
    const professors = [
        {
            imgSrc: 'assets/img/members/buithimaianh.jpg',
            links: [
                { href: 'https://scholar.google.com/citations?user=aZosWNYAAAAJ&hl=en&oi=ao', iconClass: 'fa-brands fa-google-scholar' },
                { href: '', iconClass: 'bi bi-linkedin' },
                { href: 'https://soict.hust.edu.vn/ts-bui-thi-mai-anh.html', iconClass: 'fa-solid fa-building-columns' }
            ],
            name: 'TS. Bùi Thị Mai Anh',
            position: 'Giảng viên, Khoa Khoa học Máy tính, Đại học Bách khoa Hà Nội. <br> Trưởng nhóm Nghiên cứu về CNPM thông minh, Trung tâm nghiên cứu quốc tế về TTNT'
        },
        {
            imgSrc: 'assets/img/members/buiquoctrung.jpg',
            links: [
                { href: 'https://scholar.google.com/citations?user=vxFDCLUAAAAJ&hl=en&fbclid=IwY2xjawEa6ghleHRuA2FlbQIxMAABHRxdg3lU5A-j7v-lxk6CF2HZEiQzrWbwcFIlGHXNfDm_XQqxv0HAbZz3ig_aem_hKthW4wIc230sUNS7R2Png', iconClass: 'fa-brands fa-google-scholar' },
                { href: '', iconClass: 'bi bi-linkedin' },
                { href: 'https://soict.hust.edu.vn/ts-bui-quoc-trung.html', iconClass: 'fa-solid fa-building-columns' }
            ],
            name: 'TS. Bùi Quốc Trung',
            position: 'Giảng viên, Khoa Khoa học Máy tính, Đại học Bách khoa Hà Nội. <br> Trưởng nhóm nghiên cứu về Vận trù học, Trường CNTT và TT'
        },
        {
            imgSrc: 'assets/img/members/phamquangdung.jpg',
            links: [
                { href: 'https://scholar.google.com/citations?user=aZosWNYAAAAJ&hl=en&oi=ao', iconClass: 'fa-brands fa-google-scholar' },
                { href: '', iconClass: 'bi bi-linkedin' },
                { href: 'https://soict.hust.edu.vn/ts-bui-thi-mai-anh.html', iconClass: 'fa-solid fa-building-columns' }
            ],
            name: 'TS. Phạm Quang Dũng',
            position: 'Giảng viên, Khoa Khoa học Máy tính, Đại học Bách khoa Hà Nội'
        },
        {
            imgSrc: 'assets/img/members/PhuongNguyen.png',
            links: [
                { href: 'https://scholar.google.com/citations?user=vxFDCLUAAAAJ&hl=en', iconClass: 'fa-brands fa-google-scholar' },
                { href: '', iconClass: 'bi bi-linkedin' },
                { href: 'https://www.disim.univaq.it/ThanhPhuong', iconClass: 'fa-solid fa-building-columns' }
            ],
            name: 'PGS.TS Nguyễn Thanh Phương',
            position: 'Giáo sư, Khoa Khoa học Máy tính, Đại học L’Aquila, Italy'
        },
        
    ];

    const phdStudents = [
        {
            imgSrc: 'assets/img/members/hoanh.jpg',
            links: [
                { href: '', iconClass: 'fa-brands fa-google-scholar' },
                { href: '', iconClass: 'bi bi-linkedin' },
                { href: '', iconClass: 'fa-solid fa-building-columns' }
            ],
            name: 'Hồ Anh',
            position: 'Melbourne University, Australia'
        },
        {
            imgSrc: 'assets/img/members/dinh.jpg',
            links: [
                { href: '', iconClass: 'fa-brands fa-google-scholar' },
                { href: '', iconClass: 'bi bi-linkedin' },
                { href: '', iconClass: 'fa-solid fa-building-columns' }
            ],
            name: 'Trần Thị Dinh ',
            position: 'GSSI, Italia'
        },
    ];

    const masterStudents = [
        {
            imgSrc: 'assets/img/members/avt.png',
            links: [
                { href: '', iconClass: 'fa-brands fa-google-scholar' },
                { href: '', iconClass: 'bi bi-linkedin' },
                { href: '', iconClass: 'fa-solid fa-building-columns' }
            ],
            name: 'Nguyễn Đức Lộc',
            position: 'Trường CNTT, Đại học Bách khoa Hà Nội'
        },
        {
            imgSrc: 'assets/img/members/NguyenDanhPhuc.jpg',
            links: [
                { href: '', iconClass: 'fa-brands fa-google-scholar' },
                { href: '', iconClass: 'bi bi-linkedin' },
                { href: '', iconClass: 'fa-solid fa-building-columns' }
            ],
            name: 'Nguyễn Danh Phúc',
            position: 'Trường CNTT, Đại học Bách khoa Hà Nội'
        },
        {
            imgSrc: 'assets/img/members/avt.png',
            links: [
                { href: '', iconClass: 'fa-brands fa-google-scholar' },
                { href: '', iconClass: 'bi bi-linkedin' },
                { href: '', iconClass: 'fa-solid fa-building-columns' }
            ],
            name: 'Nguyễn Duy Hùng',
            position: 'Trường CNTT, Đại học Bách khoa Hà Nội'
        },
        {
            imgSrc: 'assets/img/members/avt.png',
            links: [
                { href: '', iconClass: 'fa-brands fa-google-scholar' },
                { href: '', iconClass: 'bi bi-linkedin' },
                { href: '', iconClass: 'fa-solid fa-building-columns' }
            ],
            name: 'Nguyễn Mạnh Cường',
            position: 'Trường CNTT, Đại học Bách khoa Hà Nội'
        },
        {
            imgSrc: 'assets/img/members/avt.png',
            links: [
                { href: '', iconClass: 'fa-brands fa-google-scholar' },
                { href: '', iconClass: 'bi bi-linkedin' },
                { href: '', iconClass: 'fa-solid fa-building-columns' }
            ],
            name: 'Nguyễn Viết Chính',
            position: 'Trường CNTT, Đại học Bách khoa Hà Nội'
        },
        {
            imgSrc: 'assets/img/members/avt.png',
            links: [
                { href: '', iconClass: 'fa-brands fa-google-scholar' },
                { href: '', iconClass: 'bi bi-linkedin' },
                { href: '', iconClass: 'fa-solid fa-building-columns' }
            ],
            name: 'Đào Phan Khải',
            position: 'Trường CNTT, Đại học Bách khoa Hà Nội'
        },
        {
            imgSrc: 'assets/img/members/avt.png',
            links: [
                { href: '', iconClass: 'fa-brands fa-google-scholar' },
                { href: '', iconClass: 'bi bi-linkedin' },
                { href: '', iconClass: 'fa-solid fa-building-columns' }
            ],
            name: 'Nguyễn Tuấn Anh',
            position: 'Trường CNTT, Đại học Bách khoa Hà Nội'
        },
        {
            imgSrc: 'assets/img/members/avt.png',
            links: [
                { href: '', iconClass: 'fa-brands fa-google-scholar' },
                { href: '', iconClass: 'bi bi-linkedin' },
                { href: '', iconClass: 'fa-solid fa-building-columns' }
            ],
            name: 'Lại Ngọc Thăng Long',
            position: 'Trường CNTT, Đại học Bách khoa Hà Nội'
        },
        {
            imgSrc: 'assets/img/members/avt.png',
            links: [
                { href: '', iconClass: 'fa-brands fa-google-scholar' },
                { href: '', iconClass: 'bi bi-linkedin' },
                { href: '', iconClass: 'fa-solid fa-building-columns' }
            ],
            name: 'Lê Minh Đức',
            position: 'Trường CNTT, Đại học Bách khoa Hà Nội'
        },
    ];
    
    const underStudents = [
        {
            imgSrc: 'assets/img/members/avt.png',
            links: [
                { href: '', iconClass: 'fa-brands fa-google-scholar' },
                { href: '', iconClass: 'bi bi-linkedin' },
                { href: '', iconClass: 'fa-solid fa-building-columns' }
            ],
            name: 'Vương Hoàng Minh',
            position: 'Trường CNTT, Đại học Bách khoa Hà Nội'
        },
        {
            imgSrc: 'assets/img/members/avt.png',
            links: [
                { href: '', iconClass: 'fa-brands fa-google-scholar' },
                { href: '', iconClass: 'bi bi-linkedin' },
                { href: '', iconClass: 'fa-solid fa-building-columns' }
            ],
            name: 'Nguyễn Hữu Lộc',
            position: 'Trường CNTT, Đại học Bách khoa Hà Nội'
        },
        {
            imgSrc: 'assets/img/members/avt.png',
            links: [
                { href: '', iconClass: 'fa-brands fa-google-scholar' },
                { href: '', iconClass: 'bi bi-linkedin' },
                { href: '', iconClass: 'fa-solid fa-building-columns' }
            ],
            name: 'Ngô Minh Quân',
            position: 'Trường CNTT, Đại học Bách khoa Hà Nội'
        },
        {
            imgSrc: 'assets/img/members/avt.png',
            links: [
                { href: '', iconClass: 'fa-brands fa-google-scholar' },
                { href: '', iconClass: 'bi bi-linkedin' },
                { href: '', iconClass: 'fa-solid fa-building-columns' }
            ],
            name: 'Nguyễn Thành An',
            position: 'Trường CNTT, Đại học Bách khoa Hà Nội'
        },
        
    ];

    const alumni = [
        {
            imgSrc: 'assets/img/members/nguyentramy.jpg',
            links: [
                { href: 'https://scholar.google.com/citations?user=glGlmu0AAAAJ&hl=en', iconClass: 'fa-brands fa-google-scholar' },
                { href: 'https://www.linkedin.com/in/tramy96tq/', iconClass: 'bi bi-linkedin' },
                { href: '', iconClass: 'fa-solid fa-building-columns' }
            ],
            name: 'Ths. Nguyễn Trà My',
            position: 'Khoa Khoa học Máy tính, Đại học Chung-Ang, Hàn Quốc'
        },
        {
            imgSrc: 'assets/img/members/thien.jpeg',
            links: [
                { href: 'https://scholar.google.com/citations?user=W35RgdEAAAAJ&hl=vi&oi=sra', iconClass: 'fa-brands fa-google-scholar' },
                { href: 'https://www.linkedin.com/in/thiennguyenduc2605/', iconClass: 'bi bi-linkedin' },
                { href: '', iconClass: 'fa-solid fa-building-columns' }
            ],
            name: 'Nguyễn Đức Thiên',
            position: 'Founder Codese - Code đi đừng sợ <br> Project Manager at Sotatek, JSC'
        },
        {
            imgSrc: 'assets/img/members/BuiDuyHien.jpg',
            links: [
                { href: '', iconClass: 'fa-brands fa-google-scholar' },
                { href: '', iconClass: 'bi bi-linkedin' },
                { href: '', iconClass: 'fa-solid fa-building-columns' }
            ],
            name: 'Bùi Duy Hiển',
            position: 'Kỹ sư VinBigData'
        },
        {
            imgSrc: 'assets/img/members/ChuHoangDuong.jpg',
            links: [
                { href: '', iconClass: 'fa-brands fa-google-scholar' },
                { href: '', iconClass: 'bi bi-linkedin' },
                { href: '', iconClass: 'fa-solid fa-building-columns' }
            ],
            name: 'Chu Hoàng Dương',
            position: 'Kỹ sư MBBank'
        },
        
    ];

    return (
        <section id="members" className="section content-background">
            <div className="container section-title">
                <h2>Team members</h2>
            </div>

            <div className="container section-title">
                <h3>Professor</h3>
                <div className="row gy-4">
                    {professors.map((member, index) => (
                        <TeamMember key={index} {...member} />
                    ))}
                </div>

                <br />
                <h3>PhD Students – Nghiên cứu sinh</h3>
                <div className="row gy-4">
                    {phdStudents.map((member, index) => (
                        <TeamMember key={index} {...member} />
                    ))}
                </div>

                <br />
                <h3>Master Students - Học viên thạc sĩ</h3>
                <div className="row gy-4">
                    {masterStudents.map((member, index) => (
                        <TeamMember key={index} {...member} />
                    ))}
                </div>

                <br />
                <h3>Undergraduate Students – Sinh viên</h3>
                <div className="row gy-4">
                    {underStudents.map((member, index) => (
                        <TeamMember key={index} {...member} />
                    ))}
                </div>

                <br />
                <h3>Alumni</h3>
                <div className="row gy-4">
                    {alumni.map((member, index) => (
                        <TeamMember key={index} {...member} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Member;