import "./styles/Achievements.css";

const Achievements = () => {
  return (
    <div className="achievements-section section-container" id="achievements">
      <div className="achievements-container">
        <h2>
          Coding <span>&</span>
          <br /> Achievements
        </h2>
        <div className="achievements-grid">
          <div className="achievement-card">
            <h3>ICPC Asia West Regionalist 2025</h3>
            <p>Achieved AIR 256 at Amritapuri Onsite Regionals; Rank 35 at Mysuru Site (Team: Code Optimizer)</p>
            <a 
              href="https://drive.google.com/file/d/1dkBGKvPAkHmxIoxwCuGc0-bB_gRZBivk/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
              style={{
                display: 'inline-block',
                marginTop: '15px',
                color: 'var(--accentColor)',
                textDecoration: 'none',
                borderBottom: '1px solid var(--accentColor)',
                fontSize: '14px',
                transition: '0.3s'
              }}
            >
              View Certificate
            </a>
          </div>
          <div className="achievement-card">
            <h3>Competitive Programming</h3>
            <p>Highest ratings: 1529 (Codechef), 1544 (LeetCode), 895 (CodeForces).</p>
            <p style={{marginTop: '10px'}}>Solved 250+ LeetCode and 450+ Codeforces problems. Maintained 351 Days Streak on Codeforces. Achieved Global Rank 399 out of 22558 Participants on CodeChef.</p>
            <div style={{ marginTop: '15px', display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
              <a href="https://leetcode.com/u/rudrachauhan007/" target="_blank" rel="noreferrer" style={{ color: 'var(--accentColor)', textDecoration: 'none', borderBottom: '1px solid var(--accentColor)', fontSize: '14px', transition: '0.3s' }}>LeetCode Profile</a>
              <a href="https://www.codechef.com/users/marcosruddra7" target="_blank" rel="noreferrer" style={{ color: 'var(--accentColor)', textDecoration: 'none', borderBottom: '1px solid var(--accentColor)', fontSize: '14px', transition: '0.3s' }}>CodeChef Profile</a>
              <a href="https://codeforces.com/profile/rudrachauhan007" target="_blank" rel="noreferrer" style={{ color: 'var(--accentColor)', textDecoration: 'none', borderBottom: '1px solid var(--accentColor)', fontSize: '14px', transition: '0.3s' }}>CodeForces Profile</a>
            </div>
          </div>
          <div className="achievement-card">
            <h3>Hackathons & Ideathons</h3>
            <p>Winner of KnowHow’25</p>
            <p>Runner Up KnowHow’26</p>
            <p>Winner of SSIP Ideathon 2023</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievements;
