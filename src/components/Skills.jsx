const Skills = () => {
  return (
    <section id="skills" className="section">
      <div className="container">
        <h2 className="section-title">Skills</h2>

        <div className="row g-4">
          <div className="col-md-3">
            <div className="card card-soft h-100 text-center">
              <div className="card-body">
                <h5 style={{ color: 'var(--accent)' }}>Frontend</h5>    
                <p>React</p>
                <p>HTML</p>
                <p>CSS</p>
                <p>Bootstrap</p>
              </div>
            </div>
          </div>

          <div className="col-md-3">
           <div className="card card-soft h-100 text-center">
              <div className="card-body">
                <h5 style={{ color: 'var(--accent)' }}>Backend</h5> 
                <p>Node.js</p>
                <p>Express</p>
                <p>REST APIs</p>
                <p>JWT Auth</p>
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card card-soft h-100 text-center">
              <div className="card-body">
                <h5 style={{ color: 'var(--accent)' }}>Database</h5>
                <p>MySQL</p>
                <p>MongoDB</p>
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card card-soft h-100 text-center">
              <div className="card-body">
                <h5 style={{ color: 'var(--accent)' }}> Tools
                </h5>
                <p>Git</p>
                <p>GitHub</p>
                <p>Docker</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Skills
