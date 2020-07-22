import React, { Component } from 'react';
export default class Porfolio extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="portfolio">
        <div className="row">
          <div className="twelve columns collapsed">
            <h1>Check Out Some of My Works.</h1>
            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
              {
                resumeData.portfolio && resumeData.portfolio.map((item) => {
                  console.log(item.imgurl, '<--- item.imgurl')
                  return (
                    <div className="columns portfolio-item">
                      <div className="item-wrap">
                        <a href="#modal-01">
                          <img src={`${item.imgurl}`} className="item-img" style={{background: "black", width: '30vw', height: '20vh'}}/>
                          <div className="overlay">
                            <div className="portfolio-item-meta">
                              <h5>{item.name}</h5>
                              <p>{item.description}</p>
                              {
                                (item.released === false) ? <h1 style={{color:"red"}}>COMMING SOON</h1> : null
                              }
                            </div>
                          </div>
                        </a>
                      </div>
                      {
                        (item.github) ? <a href= {item.github} target="_blanck" style={{ "fontSize": "20px", "marginTop": "1em" }}>Github</a> : null
                      }
                      {
                        (item.demo) ? <a href= {item.demo} target="_blanck" style={{ "fontSize": "20px", "marginTop": "1em", paddingLeft: "2vw" }}>Demo</a> : null
                      }
                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>
      </section>
    );
  }
}