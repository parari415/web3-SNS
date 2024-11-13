import React, { useState } from 'react';

function TimePicker({ Time,onTimeSet }) {
    const items= Time.split(':') ;
  // 時刻設定用の状態
  const [hours, setHours] = useState(Number(items[0]));
  const [minutes, setMinutes] = useState(Number(items[1]));

  const handleSetTime = () => {
    const formattedTime = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`;
    onTimeSet(formattedTime);
  };
  const resethandleSetTime = () => {
    const formattedTime = `${String(items[0]).padStart(2, '0')}:${String(items[1]).padStart(2, '0')}`;
    onTimeSet(formattedTime);
  };
  const formattedHours = String(hours).padStart(2, '0');
  const formattedMinutes = String(minutes).padStart(2, '0');

  return (
    <div className="time-picker">
      <div className="time-inputs">
        <input
          type="number"
          value={formattedHours}
          onChange={(e) => setHours(Math.min(Math.max(e.target.value, 0), 23))}
          min="0"
          max="23"
          placeholder="HH"
        />
        <span>:</span>
        <input
          type="number"
          value={formattedMinutes}
          onChange={(e) => setMinutes(Math.min(Math.max(e.target.value, 0), 59))}
          min="0"
          max="59"
          placeholder="MM"
        />
      </div>
      <div className="buttons">
        <button onClick={resethandleSetTime} className="close-btn">閉じる</button>
        <button onClick={handleSetTime} className="set-time-btn">時刻を設定する</button>
      </div>
    </div>
  );
}

export default TimePicker;
