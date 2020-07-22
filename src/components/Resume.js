import React, { Component } from 'react';
export default class Resume extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="resume">
        <div className="row work">
          <div className="three columns header-col">
            <h1><span>Work</span></h1>
          </div>

          <div className="nine row columns main-col"  style={{borderBottom: '2px solid #E8E8E8'}}>
            {
              resumeData.work && resumeData.work.map((item) => {
                return (
                  <div className="row item">
                    <div className="twelve columns">
                      <h3>{item.CompanyName}</h3>
                      <p className="info">
                        {item.specialization}
                        <span>&bull;</span> <em className="date">{item.MonthOfLeaving} {item.YearOfLeaving}</em></p>
                      <p>
                        {item.Achievements1}
                      </p>
                      <p>
                        {item.Achievements2}
                      </p>
                      <p>
                        {item.Achievements3}
                      </p>
                      <p>
                        {item.Achievements4}
                      </p>
                      <p>
                        {item.Achievements5}
                      </p>
                    </div>
                  </div>

                )
              })
            }
          </div>
            
          <div className=" education">

            <div className="three columns header-col">
              <h1><span>Education</span></h1>
            </div>

            <div className="nine columns main-col">
              {
                resumeData.education && resumeData.education.map((item) => {
                  return (
                    <div className="row item">
                      <div className="twelve columns">
                        <h3>{item.UniversityName}</h3>
                        <p className="info">
                          {item.specialization}
                          <span>&bull;</span> <em className="date">{item.MonthOfPassing} {item.YearOfPassing}</em></p>
                        <p>
                          {item.Achievements}
                        </p>
                      </div>
                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>


        <div className="row skill">

          <div className="three columns header-col">
            <h1><span>Skills</span></h1>
          </div>

          <div className="nine columns main-col">

            <p>
              {resumeData.skillsDescription}
            </p>

            <div className="">

              <ul className="">
                {
                  resumeData.skills ?
                    // console.log(item.Languages, '<----')
                      <div>
                        {/* <p className={`${item.Languages.toLowerCase()}`}> */}
                        <b>Languages:</b> <em>{resumeData.skills.Languages}</em><br/>
                        <b>Libraries/Frameworks:</b> <em>{resumeData.skills["Libraries/Frameworks"]}</em><br/>
                        <b>Database:</b> <em>{resumeData.skills.Database}</em><br/>
                        <b>API:</b> <em>{resumeData.skills.API}</em><br/>
                        <b>Methodology:</b> <em>{resumeData.skills.Methodology}</em><br/>
                        <b>Other:</b> <em>{resumeData.skills.Other}</em><br/>

                      </div>
                    : null
                }

              </ul>

            </div>

          </div>

        </div>

      </section>
    );
  }
}