import React, { Component } from 'react'

import { timelineData } from '../../store/data/timeline'

const Timeline = ({item}) => (
    <div className="timeline">
        {
            item.map(item => (

              <div className="timeline__block" key={item.id}>
                  <div className="timeline__bullet"></div>
                  <div className="timeline__header">
                      <p className="timeline__timeframe">{item.timeframe.start} - {item.timeframe.end}</p>
                      <h3><a href={item.link}>{item.company}</a></h3>
                      <h5>{item.position}</h5>
                  </div>
                  <div className="timeline__desc">
                      <p>{item.description}</p>
                      
                      {
                        item.highlights ? <p className="small"><strong>Highlights: </strong> {item.highlights}</p> : ''
                      }
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