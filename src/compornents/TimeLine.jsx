import React, { useState, useEffect } from 'react';
import TimelineItem from './TimeLineItem';

function TimeLine() {
  const test_data = [
    { id: 1, name: 'hoge1',img: '0.png', target_time: 9 * 3600 * 1000, result_time: 10 * 3600 * 1000 },
    { id: 2, name: 'hoge2',img: '2.png', target_time: 9 * 3600 * 1000, result_time: (9 * 3600 + 30 * 60) * 1000 },
    { id: 3, name: 'hoge3',img: '3.png', target_time: 9 * 3600 * 1000, result_time: (11 * 3600 + 2 * 60) * 1000 },
    { id: 4, name: 'hoge4',img: '4.png', target_time: 9 * 3600 * 1000, result_time: (10 * 3600 + 8 * 60) * 1000 },
    { id: 5, name: 'hoge5',img: '5.png', target_time: 9 * 3600 * 1000, result_time: (9 * 3600 + 1 * 60) * 1000 }
  ];

  const [timelineItems, setTimelineItems] = useState(test_data);


  // 最後に追加されたアイテムのIDを追跡
  const [newItemId, setNewItemId] = useState(null);

  useEffect(() => {
    // 1分ごとにデータを追加
    const intervalId = setInterval(() => {
      const newItem = {
        id: timelineItems.length + 1,
        img: `${Math.floor(Math.random() * 9)}.png`,
        name: `click ${timelineItems.length + 1}`,
        target_time: 9 * 3600 * 1000,
        result_time: ((Math.floor(Math.random() * (12 - 9) + 9)) * 3600 + (Math.floor(Math.random() * 59)) * 60) * 1000
      };

      setTimelineItems(prevItems => {
        const updatedItems = [...prevItems, newItem];
        setNewItemId(newItem.id); // 新しいアイテムIDを設定
        return updatedItems;
      });
    }, (Math.floor(Math.random() * (30 - 1) + 1))*1000); // 60,000ms = 1分ごとにデータ追加

    // クリーンアップ: インターバルをクリア
    return () => clearInterval(intervalId);
  }, [timelineItems]);

  return (
    <div className="timeline">
      {timelineItems.slice().reverse().map(item => (
        <TimelineItem key={item.id} data={item} isNew={item.id === newItemId} />
      ))}
    </div>
  );
}

export default TimeLine;
