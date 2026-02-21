export default function Timeline() {
  return (
    <section id="timeline" className="timeline">
      <div className="container">
        <h2 className="font">Timeline</h2>
        <div className="timeline-flow">
          <div className="flow-item orange">
            {" "}
            <span className="year">Feb–Apr 2026</span>
            <div className="icon">📝</div>
            <h3>Pendaftaran</h3>
            <p>5 Februari – 5 April 2026</p>
          </div>
          <div className="flow-item yellow">
            {" "}
            <span className="year">8 Apr</span>
            <div className="icon">👥</div>
            <h3>Technical Meeting</h3>
            <p>8 April 2026</p>
          </div>
          <div className="flow-item teal">
            {" "}
            <span className="year">11–16 Apr</span>
            <div className="icon">🏆</div>
            <h3>Pelaksanaan</h3>
            <p>11 – 16 April 2026</p>
          </div>
          <div className="flow-item purple">
            {" "}
            <span className="year">13 Apr</span>
            <div className="icon">🎤</div>
            <h3>Talkshow</h3>
            <p>13 April 2026</p>
          </div>
        </div>
      </div>
    </section>
  );
}
