import React, { Component } from 'react'

const timelineData = [
    {
        id: 1,
        timeframe: {
            start: 'Nov 2018',
            end: 'Present'
        },
        company: 'Sabre Systems',
        position: 'Senior Software Developer',
        location: 'Remote (Charlottesville, Virginia)',
        description: 'Lorem ipsum Occaecat do esse ex et dolor culpa nisi ex in magna consectetur nisi cupidatat laboris esse eiusmod deserunt aute do quis velit esse sed Ut proident cupidatat nulla esse cillum laborum occaecat nostrud sit dolor incididunt amet est occaecat nisi.'
    },
    {
        id: 2,
        timeframe: {
            start: 'March 2018',
            end: 'November 2018'
        },
        company: 'Vertical One',
        position: 'Senior Frontend Engineer',
        location: 'Charlottesville, Virginia',
        description: 'Lorem ipsum Occaecat do esse ex et dolor culpa nisi ex in magna consectetur nisi cupidatat laboris esse eiusmod deserunt aute do quis velit esse sed Ut proident cupidatat nulla esse cillum laborum occaecat nostrud sit dolor incididunt amet est occaecat nisi.'
    },
    {
        id: 3,
        timeframe: {
            start: 'October 2015',
            end: 'March 2018'
        },
        company: 'Digital Management Inc',
        position: 'Senior Frontend Developer',
        location: 'Remote (Charlottesville, Virginia)',
        description: 'Lorem ipsum Occaecat do esse ex et dolor culpa nisi ex in magna consectetur nisi cupidatat laboris esse eiusmod deserunt aute do quis velit esse sed Ut proident cupidatat nulla esse cillum laborum occaecat nostrud sit dolor incididunt amet est occaecat nisi.'
    },
    {
        id: 4,
        timeframe: {
            start: 'September 2010',
            end: 'October 2015'
        },
        company: 'Silverchair Inc',
        position: 'UI Developer',
        location: 'Charlottesville, Virginia',
        description: 'Lorem ipsum Occaecat do esse ex et dolor culpa nisi ex in magna consectetur nisi cupidatat laboris esse eiusmod deserunt aute do quis velit esse sed Ut proident cupidatat nulla esse cillum laborum occaecat nostrud sit dolor incididunt amet est occaecat nisi.'
    },
    {
      id: 5,
      timeframe: {
          start: 'October 2009',
          end: 'September 2010'
      },
      company: 'Enviroapps',
      position: 'UI Developer',
      location: 'Orlando, Florida',
      description: 'Lorem ipsum Occaecat do esse ex et dolor culpa nisi ex in magna consectetur nisi cupidatat laboris esse eiusmod deserunt aute do quis velit esse sed Ut proident cupidatat nulla esse cillum laborum occaecat nostrud sit dolor incididunt amet est occaecat nisi.'
  },
]

const Timeline = ({item}) => (
    <div className="timeline">
        {
            item.map(item => (
              <div className="timeline__block" key={item.id}>
                  <div className="timeline__bullet"></div>
                  <div className="timeline__header">
                      <p className="timeline__timeframe">{item.timeframe.start} - {item.timeframe.end}</p>
                      <h3>{item.company}</h3>
                      <h5>{item.position}</h5>
                  </div>
                  <div className="timeline__desc">
                      <p>{item.description}</p>
                  </div>
              </div>
            ))
        }
    </div>
);

class TimelineListView extends Component {
    render() {
      var size = Math.round(timelineData.length / 2);
      let leftTimeline = [], rightTimeline = [];

      for(let i = 0; i < timelineData.length; i++) {
        if(i < size) leftTimeline.push(timelineData[i])
        else rightTimeline.push(timelineData[i])
      }

      return (
        <div className="timeline-view">
          <div className="col-six tab-full left">
            <Timeline item={leftTimeline} />
          </div>
          <div className="col-six tab-full right">
            <Timeline item={rightTimeline} />
          </div>
        </div>

      );
    }
  }

export default TimelineListView;