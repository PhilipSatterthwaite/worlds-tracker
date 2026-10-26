# Esports Tracker

Live brackets, in-game stats and spoiler-free rewatches for esports tournaments. Static pages, no build step.

- `index.html`: League of Legends World Championship 2026, from the official LoL Esports schedule and live stats feeds. (`lol/` redirects here for old links.)

## League of Legends

- **Brackets**: Play-In, Swiss and Knockout, plus the schedule.
- **Live card**: broadcast-style scoreboard, objective timers, gold-difference graph, and the draft by lane with KDA, CS, items and lane gold. Collapsible.
- **No spoilers**: hides every result you haven't revealed, plus matchups that would give results away (Swiss round 2 pairings reveal round 1 winners, so they stay TBD). Reveal in schedule order, or click a hidden match to reveal up to it. On by default; remembered per browser.
- **Watch-back (▶)**: plays a match's official YouTube upload like a live stream: icon controls that fade out while playing, true fullscreen, ±10s / +1m / +10m skips, and a scrubber that only spans what you've already watched (its right end is "LIVE"), so the video's length never shows. Pausing keeps the frame visible; YouTube's player is cropped so its title and "More videos" shelf stay out of view (the crop comes off during an ad so "Skip ad" works). Each game is its own chapter: when one ends you get a break screen (with an ad) and can check whether there's a next game, and reopening a match resumes mid-game or on that break screen. English by default; if an upload won't play embedded, it falls back to the next broadcast language that does (with a link to the English video on YouTube). Note: YouTube blocks these embeds on `localhost`/`127.0.0.1`, so test watch-back on the deployed site.

The live feed has no bans and no player positions, so there's no ban list or minimap.
