import { Maximize2, Pause, Play, RotateCcw, Volume2, VolumeX } from 'lucide-react';
import { useCallback, useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
export function TimerTool() {
  const { t } = useTranslation();
  const [duration, setDuration] = useState(120);
  const [remaining, setRemaining] = useState(120000);
  const [running, setRunning] = useState(false);
  const [sound, setSound] = useState(false);
  const deadline = useRef(0);
  const root = useRef<HTMLDivElement>(null);
  const reset = useCallback(() => {
    setRunning(false);
    setRemaining(duration * 1000);
  }, [duration]);
  const toggle = () => {
    if (!running) deadline.current = Date.now() + remaining;
    setRunning(!running);
  };
  useEffect(() => {
    if (!running) return;
    const tick = () => {
      const next = Math.max(0, deadline.current - Date.now());
      setRemaining(next);
      if (next === 0) {
        setRunning(false);
        if (sound) {
          const context = new AudioContext();
          const oscillator = context.createOscillator();
          oscillator.connect(context.destination);
          oscillator.start();
          oscillator.stop(context.currentTime + 0.3);
        }
      }
    };
    tick();
    const id = window.setInterval(tick, 100);
    return () => clearInterval(id);
  }, [running, sound]);
  useEffect(() => {
    const key = (event: KeyboardEvent) => {
      if (event.code === 'Space' && !(event.target instanceof HTMLInputElement)) {
        event.preventDefault();
        setRunning((value) => {
          if (!value) deadline.current = Date.now() + remaining;
          return !value;
        });
      }
      if (event.key === 'r') reset();
    };
    window.addEventListener('keydown', key);
    return () => window.removeEventListener('keydown', key);
  }, [remaining, reset]);
  const choose = (seconds: number) => {
    setDuration(seconds);
    setRemaining(seconds * 1000);
    setRunning(false);
  };
  const seconds = Math.ceil(remaining / 1000);
  const pct = (remaining / (duration * 1000)) * 100;
  const color = pct < 10 ? '#ef4444' : pct < 25 ? '#f59e0b' : 'var(--teal)';
  return (
    <div className="card fullscreen-view" ref={root}>
      <div className="toolbar">
        {[30, 60, 120, 300].map((value) => (
          <button className="button" key={value} onClick={() => choose(value)}>
            {value < 60 ? `${value}s` : `${value / 60} min`}
          </button>
        ))}
        <label className="field">
          <span>Seconds</span>
          <input
            type="number"
            min="10"
            max="3600"
            value={duration}
            onChange={(event) => choose(Math.max(10, Math.min(3600, Number(event.target.value))))}
          />
        </label>
      </div>
      <div className="big-timer" style={{ color }}>
        {String(Math.floor(seconds / 60)).padStart(2, '0')}:{String(seconds % 60).padStart(2, '0')}
      </div>
      <div className="progress">
        <span style={{ width: `${pct}%`, background: color }} />
      </div>
      {remaining === 0 && (
        <h2 style={{ textAlign: 'center', color: '#ef4444' }}>{t('tools.timeUp')}</h2>
      )}
      <div className="actions" style={{ justifyContent: 'center', marginTop: '1rem' }}>
        <button className="button primary" onClick={toggle}>
          {running ? <Pause /> : <Play />}
          {running
            ? t('common.pause')
            : remaining < duration * 1000
              ? t('common.resume')
              : t('common.start')}
        </button>
        <button className="button" onClick={reset}>
          <RotateCcw />
          {t('common.reset')}
        </button>
        <button className="icon-button" onClick={() => setSound(!sound)} aria-label="Sound">
          {sound ? <Volume2 /> : <VolumeX />}
        </button>
        <button
          className="icon-button"
          onClick={() => void root.current?.requestFullscreen()}
          aria-label={t('tools.fullscreen')}
        >
          <Maximize2 />
        </button>
      </div>
      <p className="muted">Space: start/pause · R: reset</p>
    </div>
  );
}
