import React from 'react';

const skillBars = [
    {
        progress: '90',
        skill: 'HTML5'
    },
    {
        progress: '85',
        skill: 'css3'
    },
    {
        progress: '70',
        skill: 'Jquery'
    },
    {
        progress: '95',
        skill: 'PHP'
    },
    {
        progress: '70',
        skill: 'wordpress'
    },
    {
        progress: '95',
        skill: 'Angular'
    }
]

const SkillListItem = ({item}) => (
    <li>
        <div className={"progress percent" + item.progress}>{item.progress}%</div>
        <strong>{item.skill}</strong>
    </li>
);

const SkillListView = () => (
    <ul className="skill-bars">
        {
            skillBars.map(item => (
                <SkillListItem key={item.skill} item={item} />
            ))
        }
    </ul>
);

export default SkillListView;