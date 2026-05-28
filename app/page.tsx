'use client';
import { useState } from 'react';

export default function Home() {
  const [page, setPage] = useState('landing');
  const [selectedProg, setSelectedProg] = useState(0);

  return (
    <main style={{fontFamily:'DM Sans,sans-serif',background:'#0a1628',minHeight:'100vh',color:'#f8fafc'}}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@700;800&family=DM+Sans:wght@400;500;600&display=swap');
        *{box-sizing:border-box;margin:0;padding:0}
        .nav{display:flex;align-items:center;justify-content:space-between;padding:14px 24px;background:#0d1e38;border-bottom:1px solid rgba(184,228,245,0.1)}
        .nav-logo{font-family:'Barlow Condensed',sans-serif;font-size:22px;font-weight:800;letter-spacing:1px;color:#f8fafc}
        .nav-logo span{color:#c9a227}
        .tab{font-size:12px;font-weight:500;padding:6px 14px;border-radius:20px;border:none;cursor:pointer;background:transparent;color:#8fa3c0;letter-spacing:.3px}
        .tab.active{background:#c9a227;color:#0a1628;font-weight:700}
        .tab:hover{background:rgba(184,228,245,0.08);color:#b8e4f5}
        .tab.active:hover{background:#e8bf45}
        .hero{padding:48px 32px 40px;text-align:center;background:#0d1e38;border-bottom:1px solid rgba(184,228,245,0.08)}
        .hero-badge{display:inline-block;font-size:11px;font-weight:600;letter-spacing:1.5px;text-transform:uppercase;color:#c9a227;background:rgba(201,162,39,0.12);border:1px solid rgba(201,162,39,0.3);border-radius:20px;padding:5px 14px;margin-bottom:20px}
        .hero-name{font-family:'Barlow Condensed',sans-serif;font-size:64px;font-weight:800;line-height:1;letter-spacing:2px;color:#ffffff}
        .hero-sub-title{font-family:'Barlow Condensed',sans-serif;font-size:36px;font-weight:600;letter-spacing:3px;text-transform:uppercase;color:#c9a227;margin-top:6px;margin-bottom:16px}
        .hero-desc{font-size:15px;color:#8fa3c0;max-width:460px;margin:0 auto 32px;line-height:1.6}
        .btn-primary{display:inline-block;font-family:'Barlow Condensed',sans-serif;font-size:18px;font-weight:700;letter-spacing:1px;text-transform:uppercase;background:#c9a227;color:#0a1628;border:none;border-radius:8px;padding:14px 36px;cursor:pointer}
        .hero-stats{display:flex;justify-content:center;gap:40px;margin-top:40px;padding-top:32px;border-top:1px solid rgba(184,228,245,0.08)}
        .stat-num{font-family:'Barlow Condensed',sans-serif;font-size:30px;font-weight:800;color:#c9a227}
        .stat-label{font-size:12px;color:#8fa3c0;margin-top:2px}
        .features{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;padding:32px}
        .feat-card{background:#0d1e38;border:1px solid rgba(184,228,245,0.1);border-radius:12px;padding:20px}
        .feat-icon{width:40px;height:40px;border-radius:8px;background:rgba(201,162,39,0.12);display:flex;align-items:center;justify-content:center;margin-bottom:14px;font-size:20px}
        .feat-title{font-family:'Barlow Condensed',sans-serif;font-size:18px;font-weight:700;color:#f8fafc;margin-bottom:6px}
        .feat-desc{font-size:13px;color:#8fa3c0;line-height:1.55}
        .reg-wrap{padding:32px;display:grid;grid-template-columns:1fr 1fr;gap:24px;align-items:start}
        .prog-badge{display:inline-block;font-size:11px;font-weight:600;letter-spacing:1px;text-transform:uppercase;color:#b8e4f5;background:rgba(184,228,245,0.1);border:1px solid rgba(184,228,245,0.2);border-radius:4px;padding:3px 10px;margin-bottom:12px}
        .prog-card{background:#0d1e38;border:1px solid rgba(184,228,245,0.1);border-radius:12px;padding:14px 16px;cursor:pointer;margin-bottom:10px}
        .prog-card.selected{border-color:#c9a227;background:rgba(201,162,39,0.08)}
        .prog-price{font-family:'Barlow Condensed',sans-serif;font-size:20px;font-weight:700;color:#c9a227}
        .prog-detail{font-size:12px;color:#8fa3c0;margin-top:4px}
        .form-panel{background:#0d1e38;border:1px solid rgba(184,228,245,0.1);border-radius:12px;padding:24px}
        .form-row{display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-bottom:12px}
        .form-label{font-size:11px;font-weight:600;letter-spacing:.8px;text-transform:uppercase;color:#8fa3c0;margin-bottom:5px;display:block}
        .form-input{background:#142444;border:1px solid rgba(184,228,245,0.12);border-radius:8px;padding:10px 12px;font-size:13px;color:#f8fafc;width:100%;outline:none}
        .sync-note{display:flex;align-items:center;gap:8px;margin-top:12px;font-size:12px;color:#8fa3c0}
        .sync-dot{width:8px;height:8px;background:#22c55e;border-radius:50%;flex-shrink:0;animation:pulse 2s infinite}
        @keyframes pulse{0%,100%{opacity:1}50%{opacity:.4}}
        .confirm-wrap{padding:40px 32px;text-align:center}
        .check-circle{width:80px;height:80px;border-radius:50%;background:rgba(34,197,94,0.12);border:2px solid rgba(34,197,94,0.4);display:flex;align-items:center;justify-content:center;margin:0 auto 24px;font-size:38px}
        .confirm-cards{display:grid;grid-template-columns:repeat(3,1fr);gap:14px;max-width:560px;margin:0 auto 32px;text-align:left}
        .cc{background:#0d1e38;border:1px solid rgba(184,228,245,0.1);border-radius:12px;padding:16px}
        .cc-label{font-size:11px;font-weight:600;letter-spacing:.8px;text-transform:uppercase;color:#8fa3c0;margin-bottom:8px}
        .sms-bubble{max-width:320px;margin:0 auto;background:#0d1e38;border:1px solid rgba(184,228,245,0.1);border-radius:16px;padding:20px;text-align:left}
        .sms-dot{width:8px;height:8px;background:#22c55e;border-radius:50%;display:inline-block;margin-right:6px}
        .dash-wrap{padding:24px}
        .dash-grid{display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-top:16px}
        .dash-panel{background:#0d1e38;border:1px solid rgba(184,228,245,0.1);border-radius:12px;padding:18px}
        .panel-title{font-size:11px;font-weight:600;letter-spacing:.8px;text-transform:uppercase;color:#8fa3c0;margin-bottom:14px}
        .event-item{display:flex;gap:12px;align-items:flex-start;padding:10px 0;border-bottom:1px solid rgba(184,228,245,0.06)}
        .event-date{background:#142444;border-radius:8px;padding:6px 10px;text-align:center;min-width:44px;flex-shrink:0}
        .event-month{font-size:9px;font-weight:600;text-transform:uppercase;color:#c9a227;letter-spacing:.5px}
        .event-day{font-family:'Barlow Condensed',sans-serif;font-size:22px;font-weight:800;line-height:1}
        .event-tag{font-size:10px;font-weight:600;padding:2px 8px;border-radius:4px;margin-left:auto;flex-shrink:0;align-self:center}
        .tag-skills{background:rgba(184,228,245,0.1);color:#b8e4f5;border:1px solid rgba(184,228,245,0.2)}
        .tag-elite{background:rgba(201,162,39,0.1);color:#c9a227;border:1px solid rgba(201,162,39,0.25)}
        .tag-goalie{background:rgba(139,92,246,0.1);color:#c4b5fd;border:1px solid rgba(139,92,246,0.25)}
        .next-session{background:rgba(201,162,39,0.06);border:1px solid rgba(201,162,39,0.2);border-radius:12px;padding:16px;margin-top:16px}
        .ns-countdown{display:flex;gap:12px;margin-top:12px}
        .ns-unit{text-align:center;background:#142444;border-radius:6px;padding:8px 12px;min-width:48px}
        .ns-num{font-family:'Barlow Condensed',sans-serif;font-size:24px;font-weight:800}
        .ns-lbl{font-size:9px;color:#8fa3c0;text-transform:uppercase;letter-spacing:.5px}
        .notif-item{display:flex;gap:10px;align-items:flex-start;padding:10px 0;border-bottom:1px solid rgba(184,228,245,0.06)}
        .ni-icon{width:32px;height:32px;border-radius:8px;display:flex;align-items:center;justify-content:center;flex-shrink:0;font-size:15px}
        .mini-map{background:#142444;border-radius:8px;padding:12px;margin-top:8px;display:flex;align-items:center;gap:10px}
        .notif-wrap{padding:28px 32px}
        .big-notif{background:#0d1e38;border:1px solid rgba(184,228,245,0.1);border-radius:12px;padding:18px;display:flex;gap:14px;align-items:flex-start;margin-bottom:12px}
        .bn-icon{width:44px;height:44px;border-radius:10px;display:flex;align-items:center;justify-content:center;flex-shrink:0;font-size:22px}
        .sms-preview{background:#142444;border-radius:8px;padding:10px 12px;margin-top:10px;font-size:12px;color:#d6f0fb;border-left:2px solid rgba(184,228,245,0.3);line-height:1.5}
      `}</style>

      {/* NAV */}
      <div className="nav">
        <div className="nav-logo">Coaches<span>Huddle</span></div>
        <div style={{display:'flex',gap:'4px'}}>
          {['landing','reg','confirm','dash','notif'].map((p,i)=>
            <button key={p} className={`tab${page===p?' active':''}`} onClick={()=>setPage(p)}>
              {['Landing','Register','Confirm','Dashboard','Alerts'][i]}
            </button>
          )}
        </div>
      </div>

      {/* LANDING */}
      {page==='landing' && (
        <>
          <div className="hero">
            <div className="hero-badge">⬡ Powered by Venuewise</div>
            <div className="hero-name">CHRIS MAZZU</div>
            <div className="hero-sub-title">Hockey Clinics</div>
            <p className="hero-desc">Register once. Your family schedule syncs automatically. Never miss a session, a change, or an open spot.</p>
            <button className="btn-primary" onClick={()=>setPage('reg')}>View Clinics & Register →</button>
            <div className="hero-stats">
              <div><div className="stat-num">3</div><div className="stat-label">Active Programs</div></div>
              <div><div className="stat-num">120+</div><div className="stat-label">Families Enrolled</div></div>
              <div><div className="stat-num">0</div><div className="stat-label">Manual Updates Needed</div></div>
            </div>
          </div>
          <div className="features">
            <div className="feat-card"><div className="feat-icon">📅</div><div className="feat-title">Instant Schedule Sync</div><div className="feat-desc">Register and every session instantly appears in your family dashboard — no copy-paste, no manual entry.</div></div>
            <div className="feat-card"><div className="feat-icon">🔔</div><div className="feat-title">Smart Notifications</div><div className="feat-desc">SMS and push reminders for upcoming sessions, rink changes, weather cancellations, and open spots.</div></div>
            <div className="feat-card"><div className="feat-icon">📍</div><div className="feat-title">Rink Navigation</div><div className="feat-desc">Every session includes the rink address with one-tap directions. Always know exactly where to be.</div></div>
          </div>
        </>
      )}

      {/* REGISTRATION */}
      {page==='reg' && (
        <div className="reg-wrap">
          <div>
            <div className="prog-badge">2025 Clinic Programs</div>
            <h2 style={{fontFamily:'Barlow Condensed,sans-serif',fontSize:'32px',fontWeight:800,marginBottom:'4px'}}>Chris Mazzu<br/>Hockey Clinics</h2>
            <p style={{fontSize:'13px',color:'#8fa3c0',margin:'8px 0 20px',lineHeight:1.55}}>Elite on-ice training for skaters at every level. Select a program and register in under 2 minutes.</p>
            {[
              {name:'Summer Skills Camp',price:'$349',detail:'6 sessions · June 9 – July 14 · Ages 8–14'},
              {name:'Elite Power Skating',price:'$249',detail:'4 sessions · July 7 – July 28 · Ages 10–16'},
              {name:'Goalie Clinic',price:'$199',detail:'3 sessions · Aug 4 – Aug 18 · All ages'},
            ].map((p,i)=>(
              <div key={i} className={`prog-card${selectedProg===i?' selected':''}`} onClick={()=>setSelectedProg(i)}>
                <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                  <span style={{fontWeight:600,fontSize:'14px'}}>{p.name}</span>
                  <span className="prog-price">{p.price}</span>
                </div>
                <div className="prog-detail">{p.detail}</div>
              </div>
            ))}
            <div className="sync-note"><div className="sync-dot"></div>Registration auto-syncs to your CoachesHuddle family dashboard</div>
          </div>
          <div className="form-panel">
            <h3 style={{fontFamily:'Barlow Condensed,sans-serif',fontSize:'22px',fontWeight:700,marginBottom:'20px'}}>Register & Sync Schedule</h3>
            <div className="form-row">
              <div><label className="form-label">Parent name</label><input className="form-input" placeholder="First Last"/></div>
              <div><label className="form-label">Player name</label><input className="form-input" placeholder="First Last"/></div>
            </div>
            <div className="form-row">
              <div><label className="form-label">Birth year</label><input className="form-input" placeholder="e.g. 2014"/></div>
              <div><label className="form-label">Skill level</label><select className="form-input"><option>Beginner</option><option>Intermediate</option><option>Advanced</option><option>Elite</option></select></div>
            </div>
            <div className="form-row">
              <div><label className="form-label">Email</label><input className="form-input" placeholder="you@email.com"/></div>
              <div><label className="form-label">Phone (SMS)</label><input className="form-input" placeholder="(716) 555-0100"/></div>
            </div>
            <div style={{marginBottom:'12px'}}><label className="form-label">Emergency contact</label><input className="form-input" placeholder="Name & phone number"/></div>
            <button className="btn-primary" style={{width:'100%',marginTop:'16px',fontSize:'16px',padding:'14px',borderRadius:'8px'}} onClick={()=>setPage('confirm')}>Register & Sync Family Schedule →</button>
          </div>
        </div>
      )}

      {/* CONFIRMATION */}
      {page==='confirm' && (
        <div className="confirm-wrap">
          <div className="check-circle">✅</div>
          <h2 style={{fontFamily:'Barlow Condensed,sans-serif',fontSize:'38px',fontWeight:800,marginBottom:'8px'}}>You&apos;re In!</h2>
          <p style={{fontSize:'14px',color:'#8fa3c0',marginBottom:'32px'}}>Registration confirmed. Your schedule is now live in CoachesHuddle.</p>
          <div className="confirm-cards">
            <div className="cc"><div className="cc-label">Program</div><div>Summer Skills Camp</div></div>
            <div className="cc"><div className="cc-label">Sessions</div><div>6 sessions · Mondays 6 PM</div></div>
            <div className="cc"><div className="cc-label">Rink</div><div>LECOM Harborcenter, Buffalo</div></div>
          </div>
          <div className="sms-bubble">
            <div style={{fontSize:'11px',color:'#8fa3c0',marginBottom:'8px'}}><span className="sms-dot"></span>CoachesHuddle · Just now</div>
            <div style={{fontSize:'13px',lineHeight:1.55}}>Welcome to Chris Mazzu Hockey Clinics! 🏒 Your player&apos;s schedule has been automatically added to your CoachesHuddle family dashboard. First session: Mon Jun 9 at 6:00 PM — LECOM Harborcenter, Buffalo NY.</div>
            <div style={{fontSize:'11px',color:'#8fa3c0',marginTop:'8px'}}>SMS delivered to (716) 555-0100</div>
          </div>
          <button className="btn-primary" style={{marginTop:'24px'}} onClick={()=>setPage('dash')}>Open Family Dashboard →</button>
        </div>
      )}

      {/* DASHBOARD */}
      {page==='dash' && (
        <div className="dash-wrap">
          <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:'20px'}}>
            <h2 style={{fontFamily:'Barlow Condensed,sans-serif',fontSize:'26px',fontWeight:800}}>Family Dashboard</h2>
            <div style={{fontSize:'12px',color:'#c9a227',background:'rgba(201,162,39,0.1)',border:'1px solid rgba(201,162,39,0.25)',borderRadius:'20px',padding:'4px 12px'}}>⬡ Player: Jake R.</div>
          </div>
          <div className="next-session">
            <div style={{fontSize:'10px',fontWeight:600,letterSpacing:'.8px',textTransform:'uppercase',color:'#c9a227',marginBottom:'6px'}}>Next session</div>
            <div style={{fontFamily:'Barlow Condensed,sans-serif',fontSize:'22px',fontWeight:800,marginBottom:'2px'}}>Summer Skills Camp</div>
            <div style={{fontSize:'12px',color:'#8fa3c0'}}>Mon Jun 9 · 6:00 PM · LECOM Harborcenter, Rink 2</div>
            <div className="ns-countdown">
              <div className="ns-unit"><div className="ns-num">2</div><div className="ns-lbl">Days</div></div>
              <div className="ns-unit"><div className="ns-num">14</div><div className="ns-lbl">Hrs</div></div>
              <div className="ns-unit"><div className="ns-num">33</div><div className="ns-lbl">Min</div></div>
            </div>
          </div>
          <div className="dash-grid">
            <div className="dash-panel">
              <div className="panel-title">📅 Upcoming Sessions</div>
              {[{m:'Jun',d:'9',name:'Summer Skills Camp',meta:'6:00 PM · Rink 2 · 90 min',tag:'Skills',tc:'tag-skills'},{m:'Jun',d:'16',name:'Summer Skills Camp',meta:'6:00 PM · Rink 2 · 90 min',tag:'Skills',tc:'tag-skills'},{m:'Jul',d:'7',name:'Elite Power Skating',meta:'5:30 PM · Rink 1 · 60 min',tag:'Elite',tc:'tag-elite'},{m:'Aug',d:'4',name:'Goalie Clinic',meta:'4:00 PM · Rink 3 · 75 min',tag:'Goalie',tc:'tag-goalie'}].map((e,i)=>(
                <div key={i} className="event-item">
                  <div className="event-date"><div className="event-month">{e.m}</div><div className="event-day">{e.d}</div></div>
                  <div style={{flex:1}}><div style={{fontSize:'13px',fontWeight:600,marginBottom:'2px'}}>{e.name}</div><div style={{fontSize:'11px',color:'#8fa3c0'}}>{e.meta}</div></div>
                  <div className={`event-tag ${e.tc}`}>{e.tag}</div>
                </div>
              ))}
            </div>
            <div className="dash-panel">
              <div className="panel-title">🔔 Recent Alerts</div>
              {[{icon:'✅',bg:'rgba(34,197,94,0.1)',text:'Registration confirmed — Summer Skills Camp synced to dashboard',time:'Now'},{icon:'⏰',bg:'rgba(234,179,8,0.1)',text:'Reminder: Skills Camp starts in 2 days — Mon Jun 9, 6:00 PM',time:'1h ago'},{icon:'ℹ️',bg:'rgba(59,130,246,0.1)',text:'2 spots opened in Saturday Elite Camp — register to secure yours',time:'3h ago'}].map((n,i)=>(
                <div key={i} className="notif-item">
                  <div className="ni-icon" style={{background:n.bg}}>{n.icon}</div>
                  <div style={{flex:1,fontSize:'12px',lineHeight:1.5}}>{n.text}</div>
                  <div style={{fontSize:'10px',color:'#8fa3c0',flexShrink:0}}>{n.time}</div>
                </div>
              ))}
              <div className="mini-map">
                <div style={{fontSize:'22px'}}>📍</div>
                <div style={{flex:1}}><div style={{fontSize:'12px',fontWeight:600}}>LECOM Harborcenter</div><div style={{fontSize:'11px',color:'#8fa3c0'}}>1 James D. Griffin Plaza, Buffalo NY</div></div>
                <button style={{fontSize:'11px',fontWeight:600,color:'#c9a227',background:'none',border:'none',cursor:'pointer'}}>Directions →</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* NOTIFICATIONS */}
      {page==='notif' && (
        <div className="notif-wrap">
          <h2 style={{fontFamily:'Barlow Condensed,sans-serif',fontSize:'28px',fontWeight:800,marginBottom:'4px'}}>Notification Center</h2>
          <div style={{fontSize:'13px',color:'#8fa3c0',marginBottom:'24px'}}>All SMS & push alerts sent to your family — zero manual effort from Chris Mazzu&apos;s team.</div>
          {[
            {icon:'✅',bg:'rgba(34,197,94,0.1)',border:'rgba(34,197,94,0.2)',type:'Registration Confirmed',typeColor:'#22c55e',msg:'Welcome to Chris Mazzu Hockey Clinics!',detail:'Summer Skills Camp · 6 sessions auto-synced to dashboard',sms:"Welcome to Chris Mazzu Hockey Clinics! 🏒 Your player's schedule has been automatically added to CoachesHuddle. First session: Mon Jun 9 at 6:00 PM.",time:'Today · Just now'},
            {icon:'🔔',bg:'rgba(234,179,8,0.1)',border:'rgba(234,179,8,0.2)',type:'Session Reminder',typeColor:'#eab308',msg:'Skills Camp tomorrow at 6:00 PM',detail:'LECOM Harborcenter · Rink 2 · Bring full gear',sms:"Reminder: Chris Mazzu Skills Camp is tomorrow — Mon Jun 9 at 6:00 PM, Rink 2, LECOM Harborcenter. See you on the ice! 🏒",time:'Yesterday · 6:00 PM'},
            {icon:'🔄',bg:'rgba(59,130,246,0.1)',border:'rgba(59,130,246,0.2)',type:'Schedule Change',typeColor:'#60a5fa',msg:'Thursday session moved to Rink 3',detail:'Same time (5:30 PM) · Updated in dashboard automatically',sms:"Update from Chris Mazzu Hockey: Thursday's session has moved to Rink 3. Same time — 5:30 PM. Your dashboard has been updated.",time:'Jun 5 · 2:14 PM'},
            {icon:'⚡',bg:'rgba(239,68,68,0.1)',border:'rgba(239,68,68,0.2)',type:'Open Spot Alert',typeColor:'#f87171',msg:'2 spots opened — Saturday Elite Camp',detail:'Jul 12 · 8:00 AM · LECOM Harborcenter · Ages 12–16',sms:"⚡ 2 spots just opened in Chris Mazzu's Saturday Elite Camp (Jul 12). Register now at coacheshuddle.com — spots fill fast!",time:'Jun 4 · 9:30 AM'},
          ].map((n,i)=>(
            <div key={i} className="big-notif" style={{border:`1px solid ${n.border}`}}>
              <div className="bn-icon" style={{background:n.bg}}>{n.icon}</div>
              <div style={{flex:1}}>
                <div style={{fontSize:'10px',fontWeight:600,letterSpacing:'1px',textTransform:'uppercase',color:n.typeColor,marginBottom:'4px'}}>{n.type}</div>
                <div style={{fontSize:'14px',fontWeight:500,marginBottom:'4px'}}>{n.msg}</div>
                <div style={{fontSize:'12px',color:'#8fa3c0'}}>{n.detail}</div>
                <div style={{fontSize:'10px',fontWeight:600,letterSpacing:'.8px',textTransform:'uppercase',color:'#8fa3c0',margin:'10px 0 4px'}}>SMS Sent</div>
                <div className="sms-preview">{n.sms}</div>
                <div style={{fontSize:'11px',color:'#8fa3c0',marginTop:'8px'}}>{n.time}</div>
              </div>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}
