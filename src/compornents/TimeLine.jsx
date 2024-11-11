import React, { useState } from 'react';
import TimelineItem from './TimeLineItem';

function TimeLine() {
  const test_data = [
    { id: 1, name: 'hoge1', target_time: 9 * 3600 * 1000, result_time: 10 * 3600 * 1000 },
    { id: 2, name: 'hoge2', target_time: 9 * 3600 * 1000, result_time: (9 * 3600 + 30 * 60) * 1000 },
    { id: 3, name: 'hoge3', target_time: 9 * 3600 * 1000, result_time: (11 * 3600 + 2 * 60) * 1000 },
    { id: 4, name: 'hoge4', target_time: 9 * 3600 * 1000, result_time: (10 * 3600 + 8 * 60) * 1000 },
    { id: 5, name: 'hoge5', target_time: 9 * 3600 * 1000, result_time: (9 * 3600 + 1 * 60) * 1000 }
  ];

  const [timelineItems, setTimelineItems] = useState(test_data);
  let counter =0
  const test = () => {
    // 新しい配列を作成し、状態を更新
    setTimelineItems([
      ...timelineItems,
      { id: timelineItems.length + 1, name: `click ${timelineItems.length + 1}`, target_time: 9 * 3600 * 1000, result_time: (9 * 3600 + 1 * 60) * 1000 }
    ]);
    console.log(timelineItems);
  };

  return (
    <div className="timeline">
      <button onClick={test}>Test</button>
      {timelineItems.slice().reverse().map((item) => (
        <TimelineItem key={item.id} data={item} />
      ))}
    </div>
  );
}

export default TimeLine;
