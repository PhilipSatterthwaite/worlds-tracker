# Worlds 2026 Tracker

Live bracket, Swiss stage, schedule and in-game stats for the League of Legends World Championship 2026.

Single static page (`index.html`) that pulls from the official LoL Esports schedule and live stats feeds in the browser. No build step.

- **Live card**: series score, team stats, the draft (picks by lane with live KDA/CS/level/HP), lane-by-lane gold differences, and objective timers (Dragon/Elder, Baron, Grubs/Herald spawns, Baron and Elder buffs, inhibitor respawns).
- **Players tab**: live scoreboard with items, kill participation and damage share, plus every player's Worlds stats by champion and game log, and a Champions view (picks, win rate, who played them). Built from the final frame of every finished Worlds game in the stats feed and cached in localStorage.

The feed has no bans, no player positions (so no minimap), and no per-game winner; game winners are read from towers and gold and checked against official series scores.
