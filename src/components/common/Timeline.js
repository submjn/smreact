import React, { Component } from 'react'

const timeline = [
    {
        id: 1,
        timeframe: {
            start: 'Nov 2018',
            end: 'Present'
        },
        company: 'Sabre Systems',
        position: 'Senior Software Developer',
        location: 'Remote (Charlottesville, Virginia)',
        description: ''
    },
    {
        id: 2,
        timeframe: {
            start: 'March 2018',
            end: 'November 2018'
        },
        company: 'Updater - Insurance Division',
        position: 'Senior Frontend Engineer',
        location: 'Charlottesville, Virginia',
        description: ''
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
        desctiption: ''
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
        description: ''
    },
]

const TimelineListItem = ({item}) => (
    <div className="timeline__block">
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
);

// const TimelineListView = () => (
//     <div className="col-six tab-full left">
//         <div className="timeline">
//         {
//             timeline.map(item => (
//                 <TimelineListItem key={item.id} item={item} />
//             ))
//         }
//         </div>
//     </div>
// );

class TimelineListView extends Component {
    // var columnTypes = [LeftColumn, RightColumn];
    render() {
      var rows = [];
      var children = [];
      var columnTypes = [LeftColumn, RightColumn];

      for (var i = 0; i < timeline.length; i++) {
        // x will be 0, 1, or 2
        var x = i % 2;
        // Get the button type to use
        var columnType = columnTypes[x];
        
        // Create the button using `createElement`
        children.push(React.createElement(column, icons[i]);
        // If this is the last button of three, add these in a container
        // and get a new array for children
        if (x == 2) {
          rows.push(<IconContainer>{children}</IconContianer>);
          children = [];
        }
      }
      // Handle any remaining children
      if (children.length) {
        rows.push(<IconContainer>{children}</IconContianer>);
      }
      return (
        <TopContainer>
          {rows}
        </TopContainer>
      );
    }
  }

export default TimelineListView;