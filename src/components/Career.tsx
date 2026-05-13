import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          Experience <span>&</span>
          <br /> Education
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          
          {/* Experience */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Co-Coordinator</h4>
                <h5>International Colloboration Cell BVM</h5>
              </div>
              <h3>Dec 2025 – Present</h3>
            </div>
            <p>
              Acted as an active member in promoting institutional MoUs by guiding and motivating students to explore global academic and career opportunities. Spearheaded awareness campaigns and workshops on gender sensitization, professional conduct, and international exposure.
            </p>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>President</h4>
                <h5>Codechef Student Chapter BVM</h5>
              </div>
              <h3>July 2025 – Present</h3>
            </div>
            <p>
              Led the chapter’s core team and coordinated all coding events, workshops, and technical activities. Organized DSA/CP mentorship programs and campus-wide coding contests to boost competitive programming participation.
            </p>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Intern</h4>
                <h5>Anand Milk Union Limited, Anand</h5>
              </div>
              <h3>May 2025 – June
                 2025</h3>
            </div>
            <p>
              Developed an intern management system during my internship at Amul to streamline task allocation, attendance tracking, and performance monitoring. Improved coordination between supervisors and interns by organizing data.
            </p>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Deep Learning Summer School</h4>
                <h5>IIITDM, Jabalpur</h5>
              </div>
              <h3>May 2025 – June 2025</h3>
            </div>
            <p>
              Hands-on experience with neural networks including convolutional, recurrent, autoencoder, and generative adversarial models using TensorFlow and PyTorch. Exposure to advanced deep learning concepts through projects.
            </p>
          </div>

          {/* Education */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech in Computer Eng.</h4>
                <h5>Birla Vishwakarma Mahavidyalaya</h5>
              </div>
              <h3>June 2023 – Present</h3>
            </div>
            <p>
              GPA: 9.01/10.00
            </p>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>12th Sci GHSEB Board</h4>
                <h5>J.P.Thakkar High School</h5>
              </div>
              <h3>Mar 2022 - Mar 2023</h3>
            </div>
            <p>
              Percentage: 92.30
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Career;
