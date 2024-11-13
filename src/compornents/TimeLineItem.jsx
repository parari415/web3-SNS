import React, { useEffect, useState } from 'react';
import '../styles/App.css';

function TimelineItem({ data, isNew }) {
  // 現在時刻を基にtarget_timeとresult_timeを計算
  const base_time = new Date();
  const Target_time = base_time.setTime(data.target_time);
  const Result_time = base_time.setTime(data.result_time);
  
  // 寝坊時間の計算
  const def_time = (Result_time - Target_time) / 1000;

  const [highlight, setHighlight] = useState(isNew);

  useEffect(() => {
    if (isNew) {
      const timer = setTimeout(() => {
        setHighlight(false); // 5秒後に強調表示を消す
      }, 500); // 5000ms = 5秒

      return () => clearTimeout(timer); // クリーンアップ: コンポーネントがアンマウントされる時にタイマーを解除
    }
  }, [isNew]); // isNewが変化したときに実行

  const img_path =`./img/${data.img}`
  return (
    <div className={`timeline-item ${highlight ? 'new-item' : ''}`}>
      <img className='icon_img' src={img_path}></img>
      <h3>{data.name}</h3>
      <p>
        {Math.floor(def_time / 3600)}時間 {Math.floor(def_time % 3600 / 60)}分 寝坊!!
      </p>
    </div>
  );
}

export default TimelineItem;
