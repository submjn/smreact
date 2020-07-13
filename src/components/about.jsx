import React, { Component } from 'react'
import SkillListView from './common/SkillListView'
import TimelineListView from './common/Timeline';

const leadText = 'About Me';

export default class About extends Component {
    render() {
        return (
            <section id="about" className="s-about target-section" data-section="about">
                    
                <div className="row narrow section-intro has-bottom-sep">
                    <div className="col-full text-center">
                        <h3>About</h3>
                        <h1>More About Me</h1>
                        <p className="lead">{leadText}</p>
                    </div>
                </div>

                <div className="row about-content">

                    <div className="col-six tab-full left">
                        <h3>Howdy!</h3>

                        <p>Lorem ipsum Ut eiusmod ex magna sit dolor esse adipisicing minim ad cupidatat eu veniam nostrud mollit laboris sunt magna velit culpa consectetur nostrud consectetur labore sed do.</p>

                        <p>
                        Lorem ipsum Nisi officia Duis irure voluptate dolor commodo pariatur occaecat aliquip adipisicing voluptate Ut in qui ea sint occaecat in commodo in in in incididunt ut sunt in Ut Duis in ut ex qui anim cupidatat cupidatat ex in non dolore labore ea amet cillum ea qui dolor nisi sed velit mollit exercitation ex fugiat labore in deserunt culpa laborum culpa anim dolore laboris amet irure mollit proident velit fugiat aute ea elit magna consequat qui officia quis elit Duis dolor esse cupidatat tempor proident voluptate aliqua ex cupidatat do eiusmod veniam irure laborum ut magna nostrud dolore ullamco commodo elit sit magna aliqua laborum veniam officia dolor.	
                        </p>
                    </div>

                    <div className="col-six tab-full right">
                        <h3>I've Got Some skills.</h3>

                        <SkillListView></SkillListView>
                    </div>

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