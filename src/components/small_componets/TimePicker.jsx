// TimePickerPopup.jsx
import React, { useState } from "react";
import "../../assets/styles/TimePicker.css"; // custom css import

export default function TimePickerPopup({ initial = "03:15 AM", onSet, show, onShow, top, left  }) {
  const parseInitial = (str) => {
    const parts = str.split(/[: ]/); // [hh, mm, AM]
    return {
      hh: parseInt(parts[0], 10) || 3,
      mm: parseInt(parts[1], 10) || 15,
      ampm: parts[2] || "AM",
    };
  };

  const [time, setTime] = useState(parseInitial(initial));

  const inc = (field, delta, min, max, wrap = true) => {
    setTime((t) => {
      let val = t[field] + delta;
      if (wrap) {
        if (val > max) val = min;
        if (val < min) val = max;
      } else {
        val = Math.max(min, Math.min(max, val));
      }
      return { ...t, [field]: val };
    });
  };

  const toggleAMPM = () =>
    setTime((t) => ({ ...t, ampm: t.ampm === "AM" ? "PM" : "AM" }));

  const format = (n) => String(n).padStart(2, "0");

  const handleSet = () => {
    const str = `${format(time.hh)}:${format(time.mm)} ${time.ampm}`;
    if (onSet) onSet(str);
    onShow("none")
  };

  return (
    <div className="timepicker-container" style={{
        display: show,
        left: left,
        top: top,
        zIndex: 'modal'
    }}>
      <div className="timepicker-box">
        <div className="timepicker-row">
          {/* Hours */}
          <div className="timepicker-col">
            <button onClick={() => inc("hh", 1, 1, 12)}>▲</button>
            <div className="timepicker-value">{format(time.hh)}</div>
            <button onClick={() => inc("hh", -1, 1, 12)}>▼</button>
          </div>

          <div className="timepicker-col colon">:</div>

          {/* Minutes */}
          <div className="timepicker-col">
            <button onClick={() => inc("mm", 1, 0, 59)}>▲</button>
            <div className="timepicker-value">{format(time.mm)}</div>
            <button onClick={() => inc("mm", -1, 0, 59)}>▼</button>
          </div>

          {/* AM/PM */}
          <div className="timepicker-col ampm">
            <button
              onClick={toggleAMPM}
              className={time.ampm === "AM" ? "active" : ""}
            >
              AM
            </button>
            <button
              onClick={toggleAMPM}
              className={time.ampm === "PM" ? "active" : ""}
            >
              PM
            </button>
          </div>
        </div>

        <button className="set-btn" onClick={handleSet}>
          Set Time
        </button>
      </div>
    </div>
  );
}
