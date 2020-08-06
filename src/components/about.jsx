import React, { Component } from 'react'
// import SkillListView from './common/SkillListView'
import TimelineListView from './common/Timeline';

const leadText = 'Creative and detail oriented Fullstack Developer, with a passion for thoughtful UI/UX design, collaboration and development.';

export default class About extends Component {
    render() {
        return (
            <section id="about" className="s-about target-section" data-section="about">
                    
                <div className="row narrow section-intro has-bottom-sep">
                    <div className="col-full text-center">
                        <h3>About</h3>
                        <h1>Subash Maharjan</h1>
                        <p className="lead">{leadText}</p>
                        
                    </div>
                </div>
                <div className="row section-intro has-bottom-sep">
                    <div className="col-full text-center">
                        <img src="images/hero-bg.jpg" alt="Subash Maharjan"/>
                    </div>
                </div>
                
                <div className="row about-content">

                    <div className="col-full tab-full left">
                        <p>I am passionate about building excellent software that improves the lives of those around me. I specialize in creating software for clients ranging from individuals and small-businesses all the way to large enterprise corporations.</p>

                        <p>
                        I've always sought out opportunities and challenges that are meaningful to me. Although my professional path has taken many twists and turns, I've never stopped engaging my passion to help others and solve problems. As a devellper, I enjoy using my obssesive attention to detail, my unequivocal love for making things, and my mission-driven work ethic to literally change the world. That's why I'm excited to make a big impact at a high growth company.	
                        </p>
                    </div>

                    {/* <div className="col-three tab-full right">
                        <h3>I've Got Some skills.</h3>

                        <SkillListView></SkillListView>
                    </div> */}

                </div>

                <div className="row about-content about-content--buttons">

                    <div className="col-six tab-full left">
                        <a href="#0" className="btn btn--primary full-width">Download My CV</a>
                    </div>
                    <div className="col-six tab-full right">
                        <a href="#0" className="btn full-width">Hire Me Now</a>
                    </div>

                </div>

                <div className="row about-content about-content--timeline">

                <div className="col-full text-center">
                    <h3>My Work Experience.</h3>
                </div>

                <TimelineListView></TimelineListView>

            </div>

            </section>
        )
    }
}