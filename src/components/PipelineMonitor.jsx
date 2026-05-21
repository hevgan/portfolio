import { useEffect, useState } from 'react';

const JOBS = [
  { name: 'nightly_vendor_load',  status: 'ok',      startedMsAgo: 3 * 3600000 + 14 * 60000 },
  { name: 'step_fn_merge',        status: 'running',  startedMsAgo: 4 * 60000 + 22000 },
  { name: 'audit_report_gen',     status: 'ok',      startedMsAgo: 27 * 3600000 },
  { name: 'schema_drift_check',   status: 'ok',      startedMsAgo: 6 * 3600000 + 1 * 60000 },
  { name: 'snowflake_cost_alert', status: 'ok',      startedMsAgo: 11 * 3600000 + 38 * 60000 },
];

function relTime(ms) {
  if (ms < 60000) return `${Math.floor(ms / 1000)}s ago`;
  if (ms < 3600000) return `${Math.floor(ms / 60000)}m ${Math.floor((ms % 60000) / 1000)}s ago`;
  const h = Math.floor(ms / 3600000);
  const m = Math.floor((ms % 3600000) / 60000);
  if (h >= 24) return 'yesterday';
  return `${h}h ${m}m ago`;
}

function runTime(ms) {
  const s = Math.floor(ms / 1000);
  const m = Math.floor(s / 60);
  return m > 0 ? `${m}m ${s % 60}s` : `${s}s`;
}

export default function PipelineMonitor() {
  const [tick, setTick] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setTick(t => t + 1), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="monitor" aria-label="Pipeline status">
      <div className="monitor__header">
        <span className="monitor__title">PIPELINE STATUS</span>
        <span className="monitor__live"><span className="monitor__dot" />LIVE</span>
      </div>
      <div className="monitor__rows">
        {JOBS.map((job) => {
          const elapsed = job.startedMsAgo + tick * 1000;
          return (
            <div key={job.name} className={`monitor__row monitor__row--${job.status}`}>
              <span className="monitor__name">{job.name}</span>
              <span className="monitor__status">
                {job.status === 'running' ? '● RUNNING' : '✓ OK'}
              </span>
              <span className="monitor__time">
                {job.status === 'running' ? runTime(elapsed) : relTime(elapsed)}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
