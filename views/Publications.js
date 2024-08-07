"use client";
 
import React from 'react';

// Component to display individual publication items
const PublicationItem = ({ link, title, authors, conference, location, pageRange }) => (
  <li>
    <a className="post-link" href={link} target="_blank" rel="noopener noreferrer">{title}</a>
    <br />
    {authors}, <em>{conference}</em>, {location}, pp. {pageRange}.
  </li>
);

const Publication = () => {
  // Combine journal articles and conference proceedings
  const publications = [
    {
      link: 'https://dl.acm.org/doi/10.1145/3638530.3654411',
      title: 'Dynamic Difficulty Coefficient in Search-Based Software Testing: Targeting to Hard Branch Coverage',
      authors: 'Thi-Mai-Anh Bui, Van-Tri Do, Minh Vu Le, Quoc-Trung Bui',
      conference: 'Genetic and Evolutionary Computation Conference - GECCO 2024',
      year: '2024',
      location: 'Melbourne',
      pageRange: '791-794'
    },
    {
      link: 'https://arxiv.org/abs/2406.15633',
      title: 'Good things come in three: Generating SO Post Titles with Pre-Trained Models, Self Improvement and Post Ranking',
      authors: 'Duc Anh Le, Anh M.T. Bui, Phuong T. Nguyen, Davide Di Ruscio',
      conference: 'The 18th ACM/IEEE International Symposium on Empirical Software Engineering and Measurement',
      year: '2024',
      location: 'Spain',
      pageRange: '14-26'
    },
    {
      link: '',
      title: 'Leveraging LSTM and Pre-trained Models for Effective Summarization of Stack Overflow Posts',
      authors: 'Nguyễn Đức Lộc, Bùi Thị Mai Anh',
      conference: 'The 40th International Conference on Software Maintenance and Evolution (ICSME 2024)',
      year: '2024',
      location: 'USA',
      pageRange: '14-25'
    },
    {
      link: 'https://link.springer.com/chapter/10.1007/978-981-97-4982-9_17',
      title: 'A Novel Dynamic Programming Method for Non-Parametric Data Discretization',
      authors: 'Bui Quoc Trung, Vuong Hoang Minh, Nguyen Thi Hoai Linh, Bui Thi Mai Anh',
      conference: 'Intelligent Information and Database Systems - ACIIDS 2024',
      year: '2024',
      location: 'UAE',
      pageRange: '111-120'
    },

    {
      link: 'https://dl.acm.org/doi/fullHtml/10.1145/3661167.3661168',
      title: 'LEGION: Harnessing Pre-trained Language Models for GitHub Topic Recommendations with Distribution-Balance Loss',
      authors: 'Yen-Trang Dang, Thanh Le-Cong, Phuc-Thanh Nguyen, Anh M. T. Bui, Phuong T. Nguyen, Bach Le, Quyet-Thang Huynh',
      conference: 'The 28th International Conference on Evaluation and Assessment in Software Engineering (EASE)',
      year: '2024',
      location: 'Salerno, Italy',
      pageRange: '181-190'
    },
    {
      link: 'https://ieeexplore.ieee.org/document/10013860',
      title: 'A Filter Approach Based on Binary Integer Programming for Feature Selection',
      authors: 'Bùi Thị Mai Anh, Dương Việt Anh, Bùi Quốc Trung',
      conference: 'RIVF 2022',
      year: '2023',
      location: 'Ho Chi Minh City',
      pageRange: '677-682'
    },
    {
      link: 'https://dl.acm.org/doi/abs/10.1145/3628797.3628963',
      title: 'On the Value of Code Embedding and Imbalanced Learning Approaches for Software Defect Prediction',
      authors: 'Bùi Thị Mai Anh, Nguyễn Nhất Hải',
      conference: 'SOICT 2023',
      year: '2023',
      location: 'Ho Chi Minh City',
      pageRange: '510-516'
    },
    {
      link: 'https://dl.acm.org/doi/abs/10.1145/3593434.3593476',
      title: 'Fusion of deep convolutional and LSTM recurrent neural networks for automated detection of code smells',
      authors: 'Hồ Anh, Bùi Thị Mai Anh, Phương Nguyễn, Amleto Di Salle',
      conference: 'EASE 2023',
      year: '2023',
      location: 'Finland',
      pageRange: '229–234'
    },
    {
      link: 'https://dl.acm.org/doi/abs/10.1145/3583133.3590727',
      title: 'A Novel Fitness Function for Automated Software Test Case Generation Based on Nested Constraint Hardness',
      authors: 'Bùi Thị Mai Anh, Đỗ Văn Trị, Bùi Quốc Trung',
      conference: 'GECCO 2023',
      year: '2023',
      location: 'Lisbon, Portugal',
      pageRange: '11-14'
    },
    {
      link: 'https://dl.acm.org/doi/abs/10.1145/3628797.3628918',
      title: 'Metaheuristic for a soft-rectangle packing problem with guillotine constraints',
      authors: 'Nguyễn Viết Chính, Bùi Thị Mai Anh, Nguyễn Mạnh Cường, Phạm Quang Dũng, Bùi Quốc Trung',
      conference: 'SOICT 2023',
      year: '2023',
      location: 'Ho Chi Minh City',
      pageRange: '715-722'
    },
    {
      link: 'https://ieeexplore.ieee.org/document/10471854/',
      title: 'A Novel Relevance Aggregation Approach for Bug Localization',
      authors: 'Bùi Thị Mai Anh, Nguyễn Nhất Hải',
      conference: 'RIVF 2023',
      year: '2023',
      location: 'Hanoi',
      pageRange: '539–545'
    },
    {
      link: 'https://link.springer.com/chapter/10.1007/978-981-99-5834-4_32',
      title: 'A Novel Meta-Heuristic Search Based on Mutual Information for Filter-Based Feature Selection',
      authors: 'Bui Quoc Trung, Duong Viet Anh, Bui Thi Mai Anh',
      conference: 'ACIIDS 2023',
      year: '2023',
      location: 'Ho Chi Minh City',
      pageRange: '207-219'
    },
    {
      link: 'https://link.springer.com/chapter/10.1007/978-3-031-08530-7_20',
      title: 'A Novel Type-based Genetic Algorithm for Extractive Summarization',
      authors: 'Bui Thi Mai Anh, Nguyen Thi Thu Trang, Tran Thi Dinh',
      conference: 'Thirty-Fifth International Conference on Industrial, Engineering & Other Applications of Applied Intelligent Systems',
      year: '2022',
      location: '',
      pageRange: '143-155'
    },
    {
      link: 'https://dl.acm.org/doi/10.1145/3568562.3568587',
      title: 'Combining Deep Learning and Kernel PCA for Software Defect Prediction',
      authors: 'Ho Anh, Nguyễn Nhất Hai, Bùi Thị Mai Anh',
      conference: 'SOICT 2022',
      year: '2022',
      location: 'Ha Noi - Quang Ninh',
      pageRange: '360-367'
    },
    {
      link: 'https://dl.acm.org/doi/abs/10.1145/3568562.3568604',
      title: 'Empirical Analysis of Filter Feature Selection Criteria on Financial Datasets',
      authors: 'Bùi Quốc Trung, Trần Văn Trí, Bùi Thị Mai Anh',
      conference: 'SOICT 2022',
      year: '2022',
      location: 'Hanoi - Quang Ninh',
      pageRange: '413-419'
    },
    {
      link: 'https://ieeexplore.ieee.org/document/9719906',
      title: 'An Imbalanced Deep Learning Model for Bug Localization',
      authors: 'Bui Thi Mai Anh, Nguyen Viet Luyen',
      conference: '28th Asia-Pacific Software Engineering Conference',
      year: '2022',
      location: 'Taiwan',
      pageRange: '32-40'
    },
    {
      link: 'https://link.springer.com/chapter/10.1007/978-3-031-08530-7_19',
      title: 'A Hybrid Approach based on Genetic Algorithm with Ranking Aggregation for Feature Selection',
      authors: 'Bui Quoc Trung, Le Minh Duc, Bui Thi Mai Anh',
      conference: 'Thirty-Fifth International Conference on Industrial, Engineering & Other Applications of Applied Intelligent Systems',
      year: '2022',
      location: 'Kitakyushu, Japan',
      pageRange: '127-140'
    },



  ];

  const groupedPublications = publications.reduce((acc, pub) => {
    if (!acc[pub.year]) {
      acc[pub.year] = [];
    }
    acc[pub.year].push(pub);
    return acc;
  }, {});

  // Sort years in descending order
  const sortedYears = Object.keys(groupedPublications).sort((a, b) => b - a);

  return (
    <section id="publication" className="section content-background">
      <div className="container section-title">
        <h2>Publication</h2>
      </div>

      <div className="container section-title">
        {sortedYears.map(year => (
          <div key={year}>
            <h3>{year}</h3>
            <ul>
              {groupedPublications[year].map((item, index) => (
                <PublicationItem key={index} {...item} />
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Publication;
