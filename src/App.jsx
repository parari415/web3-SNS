import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [streak, setStreak] = useState(0);
  const [alarmTime, setAlarmTime] = useState(null);
  const [friendsStatus, setFriendsStatus] = useState([
    { name: 'アリス', wokeUp: true },
    { name: 'ボブ', wokeUp: false },
    { name: 'チャーリー', wokeUp: true },
  ]);
  const [activeTab, setActiveTab] = useState('home');

  const displayTimeline = () => {
    return friendsStatus.map((friend, index) => (
      <li key={index}>
        {friend.name} は{friend.wokeUp ? '時間通りに起床しました!' : '寝坊しました。'}
      </li>
    ));
  };

  const displayFriendList = () => {
    return friendsStatus.map((friend, index) => (
      <li key={index}>{friend.name}</li>
    ));
  };

  const setAlarm = () => {
    const timeInput = document.getElementById('alarm-time').value;
    if (timeInput) {
      const newAlarmTime = new Date();
      const [hours, minutes] = timeInput.split(':');
      newAlarmTime.setHours(hours, minutes, 0, 0);
      setAlarmTime(newAlarmTime);
    }
  };

  useEffect(() => {
    if (alarmTime) {
      const checkAlarm = setInterval(() => {
        const now = new Date();
        if (now >= alarmTime) {
          clearInterval(checkAlarm);
          if (window.confirm('起床時間です！時間通りに起きましたか？')) {
            setStreak(streak + 1);
          } else {
            setStreak(0);
            setFriendsStatus([...friendsStatus, { name: 'あなた', wokeUp: false }]);
          }
        }
      }, 1000);

      return () => clearInterval(checkAlarm);
    }
  }, [alarmTime, streak, friendsStatus]);

  return (
    <div className="container">
      <div className="tabs">
        <button className="tablink" onClick={() => setActiveTab('home')}>
          ホーム
        </button>
        <button className="tablink" onClick={() => setActiveTab('alarm')}>
          アラーム
        </button>
        <button className="tablink" onClick={() => setActiveTab('friends')}>
          フレンド
        </button>
      </div>

      {activeTab === 'home' && (
        <div id="home" className="tabcontent">
          <h2>ホーム</h2>
          <p>連続起床日数: <span id="streak">{streak}</span> 日</p>
          <h3>フレンドの起床状況</h3>
          <ul id="timeline">{displayTimeline()}</ul>
        </div>
      )}

      {activeTab === 'alarm' && (
        <div id="alarm" className="tabcontent">
          <h2>アラーム設定</h2>
          <label htmlFor="alarm-time">アラーム時間を選択:</label>
          <input type="time" id="alarm-time" />
          <button onClick={setAlarm}>アラームを設定</button>
          <p id="alarm-status">
            {alarmTime ? `アラームが${alarmTime.toLocaleTimeString()}に設定されました` : 'アラームが設定されていません'}
          </p>
        </div>
      )}

      {activeTab === 'friends' && (
        <div id="friends" className="tabcontent">
          <h2>フレンド</h2>
          <ul id="friend-list">{displayFriendList()}</ul>
        </div>
      )}
    </div>
  );
}

export default App;
