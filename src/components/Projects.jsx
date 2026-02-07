const Projects = () => {
  return (
    <section id="projects" className="section fade-in">
      <div className="container">
        <h2 className="section-title">Projects</h2>

        <div className="row justify-content-center">
          <div className="col-md-8 mt-4">
            <div className="card card-soft shadow-sm">
              <div className="card-body">
                <h5 className="card-title"style={{ color: 'var(--accent)' }}>ZedSchools</h5>

                <p>
                  A role-based school management platform designed to support
                  administrators, teachers, and students.
                </p>

                <p>
                  <strong>Tech:</strong> React, Node.js, Express, MySQL
                </p>

                <div className="mt-3">
                    <a href="#" className="btn btn-outline-primary btn-sm me-2">
                        GitHub 
                    </a>
                    <a href="#" className="btn btn-outline-secondary btn-sm">
                        Live Demo
                    </a>
                
                </div>
              </div>
            </div>
          </div>
        
          <div className="col-md-8 mt-4">
            <div className="card card-soft shadow-sm">
              <div className="card-body">
                <h5 className="card-title"style={{ color: 'var(--accent)' }}>VRecords</h5>

                <p>
                  A system designed to manage village banking records, 
                  including, Member Information, Shares, Group Earnings, and Loan Details.
                </p>

                <p>
                  <strong>Tech:</strong> React, Node.js, Express, MySQL
                </p>

                <div className="mt-3">
                    <a href="#" className="btn btn-outline-primary btn-sm me-2">
                        GitHub 
                    </a>
                    <a href="#" className="btn btn-outline-secondary btn-sm">
                        Live Demo
                    </a>
                
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Projects
