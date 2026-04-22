import React from 'react';

const About = () => {
  // Styles object for cleaner JSX
  const styles = {
    sectionTitle: {
      color: 'var(--secondary)',
      fontSize: '2rem',
      fontWeight: '700',
      marginBottom: '10px',
      textAlign: 'center'
    },
    subText: {
      textAlign: 'center',
      color: 'var(--text-light)',
      maxWidth: '700px',
      margin: '0 auto 40px auto',
      fontSize: '1.1rem'
    },
    gridTwo: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '20px',
      marginTop: '20px'
    },
    gridThree: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '30px',
      marginTop: '30px',
      textAlign: 'center'
    },
    iconCircle: {
      width: '60px',
      height: '60px',
      backgroundColor: 'rgba(128, 0, 0, 0.1)', // Light Maroon
      color: 'var(--secondary)',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '1.5rem',
      margin: '0 auto 15px auto'
    },
    stepCircle: {
      width: '50px',
      height: '50px',
      backgroundColor: 'var(--secondary)',
      color: 'white',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '1.2rem',
      fontWeight: 'bold',
      margin: '0 auto 15px auto'
    },
    cardHeading: {
      color: 'var(--secondary)',
      marginBottom: '10px',
      fontSize: '1.3rem'
    },
    list: {
      listStyleType: 'none',
      padding: 0,
      textAlign: 'left'
    },
    listItem: {
      marginBottom: '10px',
      display: 'flex',
      alignItems: 'start',
      gap: '10px',
      color: '#555'
    }
  };

  return (
    <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
      
      {/* 1. Header Section */}
      <div style={{ textAlign: 'center', marginBottom: '50px' }}>
        <h1 style={{ color: 'var(--secondary)', fontSize: '3rem', fontWeight: 'bold' }}>About GetStitched</h1>
        <p style={{ fontSize: '1.2rem', color: '#666' }}>
          Your trusted platform for connecting with skilled tailors and quality tailoring services.
        </p>
      </div>

      {/* 2. Our Mission */}
      <div className="card" style={{ marginBottom: '40px', borderLeft: '5px solid var(--accent)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px', flexWrap: 'wrap' }}>
          <div style={styles.iconCircle}>🎯</div>
          <div style={{ flex: 1 }}>
            <h2 style={styles.cardHeading}>Our Mission</h2>
            <p style={{ lineHeight: '1.6', color: '#555' }}>
              GetStitched was created to bridge the gap between skilled tailors and customers seeking quality tailoring services. 
              We believe that everyone deserves access to professional alterations, custom tailoring, and clothing repairs without the hassle of finding a shop. 
              Our platform makes it easy to find experienced tailors in your area, compare their services and pricing, and book appointments with confidence.
            </p>
          </div>
        </div>
      </div>

      {/* 3. What We Offer (2 Columns) */}
      <h2 style={styles.sectionTitle}>What We Offer</h2>
      <div style={styles.gridTwo}>
        
        {/* For Customers */}
        <div className="card">
          <h3 style={styles.cardHeading}>For Customers</h3>
          <ul style={styles.list}>
            <li style={styles.listItem}><span style={{color:'var(--accent)'}}>✔</span> Search and filter tailors by skill, location, and price.</li>
            <li style={styles.listItem}><span style={{color:'var(--accent)'}}>✔</span> View detailed tailor profiles with experience and specializations.</li>
            <li style={styles.listItem}><span style={{color:'var(--accent)'}}>✔</span> Book tailoring services directly through the platform.</li>
            <li style={styles.listItem}><span style={{color:'var(--accent)'}}>✔</span> Access to verified and skilled professionals.</li>
          </ul>
        </div>

        {/* For Tailors */}
        <div className="card">
          <h3 style={styles.cardHeading}>For Tailors</h3>
          <ul style={styles.list}>
            <li style={styles.listItem}><span style={{color:'var(--accent)'}}>✔</span> Create a professional profile to showcase your skills.</li>
            <li style={styles.listItem}><span style={{color:'var(--accent)'}}>✔</span> Set your own pricing and service offerings.</li>
            <li style={styles.listItem}><span style={{color:'var(--accent)'}}>✔</span> Connect with new customers in your area.</li>
            <li style={styles.listItem}><span style={{color:'var(--accent)'}}>✔</span> Grow your tailoring business with online visibility.</li>
          </ul>
        </div>
      </div>

      {/* 4. Our Values */}
      <div style={{ marginTop: '60px' }}>
        <h2 style={styles.sectionTitle}>Our Values</h2>
        <div className="card">
          <div style={styles.gridThree}>
            
            {/* Value 1 */}
            <div>
              <div style={styles.iconCircle}>💎</div>
              <h3 style={{ color: 'var(--secondary)', marginBottom: '10px' }}>Quality</h3>
              <p style={{ fontSize: '0.9rem', color: '#666' }}>
                We connect you with experienced professionals committed to excellence in every stitch.
              </p>
            </div>

            {/* Value 2 */}
            <div>
              <div style={styles.iconCircle}>⚖️</div>
              <h3 style={{ color: 'var(--secondary)', marginBottom: '10px' }}>Transparency</h3>
              <p style={{ fontSize: '0.9rem', color: '#666' }}>
                Clear pricing, detailed profiles, and honest service descriptions with no hidden fees.
              </p>
            </div>

            {/* Value 3 */}
            <div>
              <div style={styles.iconCircle}>🤝</div>
              <h3 style={{ color: 'var(--secondary)', marginBottom: '10px' }}>Community</h3>
              <p style={{ fontSize: '0.9rem', color: '#666' }}>
                Supporting local tailors and fostering lasting customer relationships in your neighborhood.
              </p>
            </div>

          </div>
        </div>
      </div>

      {/* 5. How It Works */}
      <div style={{ marginTop: '60px', marginBottom: '40px' }}>
        <h2 style={styles.sectionTitle}>How It Works</h2>
        <p style={styles.subText}>Get your custom clothing in 3 simple steps</p>
        
        <div style={styles.gridThree}>
          {/* Step 1 */}
          <div className="card" style={{ padding: '30px 20px' }}>
            <div style={styles.stepCircle}>1</div>
            <h3 style={styles.cardHeading}>Search</h3>
            <p style={{ fontSize: '0.9rem', color: '#666' }}>
              Browse tailors by skill, location, and price to find the perfect match for your needs.
            </p>
          </div>

          {/* Step 2 */}
          <div className="card" style={{ padding: '30px 20px' }}>
            <div style={styles.stepCircle}>2</div>
            <h3 style={styles.cardHeading}>Compare</h3>
            <p style={{ fontSize: '0.9rem', color: '#666' }}>
              Review tailor profiles, experience, and pricing to make an informed choice.
            </p>
          </div>

          {/* Step 3 */}
          <div className="card" style={{ padding: '30px 20px' }}>
            <div style={styles.stepCircle}>3</div>
            <h3 style={styles.cardHeading}>RequestService</h3>
            <p style={{ fontSize: '0.9rem', color: '#666' }}>
              Schedule your tailoring service and get your garments professionally handled.
            </p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default About;