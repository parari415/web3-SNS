import React, { useState } from 'react';
import TimePicker from './TimePicker'; // 時刻設定用のコンポーネント
import '../styles/App.css';

function RightBar() {
  // 時刻の状態を管理
  const [time, setTime] = useState("9:00");
  const [isModalOpen, setIsModalOpen] = useState(false); // モーダルの表示状態

  // 時刻設定の後に時間を更新する関数
  const handleTimeSet = (newTime) => {
    setTime(newTime);
    setIsModalOpen(false); // 時刻設定後にモーダルを閉じる
  };

  return (
    <div className="right bar">
      <li className="right-bar">
        <div onClick={() => setIsModalOpen(true)}>{time}</div>
      </li>

      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <TimePicker Time={time} onTimeSet={handleTimeSet} />
          </div>
        </div>
      )}
    </div>
  );
}

export default RightBar;
