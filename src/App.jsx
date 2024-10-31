import React, { useState } from "react";
import "./App.css";

function App() {
  const [page, setPage] = useState("home");
  const [wakeUpCount, setWakeUpCount] = useState(0);
  const [missedCount, setMissedCount] = useState(0);
  const [nickname, setNickname] = useState("");

  const handleWakeUp = (success) => {
    if (success) {
      setWakeUpCount(wakeUpCount + 1);
      alert("起きられました！");
    } else {
      setMissedCount(missedCount + 1);
      alert("起きられませんでした...");
    }
  };

  const saveNickname = () => {
    if (nickname) {
      alert("ニックネームが保存されました: " + nickname);
    } else {
      alert("ニックネームを入力してください");
    }
  };

  return (
    <div className="container">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="logo">
          <h2>ロゴ＆サービス名</h2>
        </div>
        <nav>
          <ul>
            <li onClick={() => setPage("home")}>ホーム</li>
            <li onClick={() => setPage("ranking")}>ランキング</li>
            <li onClick={() => setPage("achievements")}>実績</li>
            <li onClick={() => setPage("settings")}>設定</li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        {page === "home" && (
          <div className="page">
            <header>
              <h2>連続目標達成者</h2>
            </header>
            <section className="entry-list">
              <div className="entry">
                <div className="user-icon"></div>
                <div className="entry-text">
                  <h3>フレーム太郎</h3>
                  <p>寝坊してもうた</p>
                </div>
              </div>
            </section>
            <div className="goal-box">
              <h3>今日の目標</h3>
              <p>時間: 8:30</p>
              <button onClick={() => handleWakeUp(true)}>起きられた</button>
              <button onClick={() => handleWakeUp(false)}>起きられなかった</button>
            </div>
          </div>
        )}

        {page === "ranking" && (
          <div className="page">
            <h2>ランキング</h2>
            <p>あなたの順位は 5位 / 10名中です。</p>
          </div>
        )}

        {page === "achievements" && (
          <div className="page">
            <h2>実績</h2>
            <div className="achievement-box">
              <p>起きられた回数: {wakeUpCount}</p>
              <p>起きられなかった回数: {missedCount}</p>
            </div>
          </div>
        )}

        {page === "settings" && (
          <div className="page">
            <h2>設定</h2>
            <label htmlFor="nickname">ニックネームを登録:</label>
            <input
              type="text"
              id="nickname"
              value={nickname}
              onChange={(e) => setNickname(e.target.value)}
              placeholder="ニックネーム"
            />
            <button onClick={saveNickname}>保存</button>
          </div>
        )}
      </main>

      {/* Group List */}
      <aside className="group-list">
        <h2>グループ一覧</h2>
        <ul>
          <li>グループ1</li>
          <li>グループ2</li>
        </ul>
      </aside>
    </div>
  );
}

export default App;
