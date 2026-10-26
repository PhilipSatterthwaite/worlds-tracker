# Esports Tracker

Live brackets, in-game stats and spoiler-free rewatches for esports tournaments. Static pages, no build step.

- `index.html`: League of Legends World Championship 2026, from the official LoL Esports schedule and live stats feeds. (`lol/` redirects here for old links.)

## League of Legends

- **Brackets**: Play-In, Swiss and Knockout, plus the schedule.
- **Live card**: broadcast-style scoreboard, objective timers, gold-difference graph, and the draft by lane with KDA, CS, items and lane gold. Collapsible.
- **No spoilers**: hides every result you haven't revealed, plus matchups that would give results away (Swiss round 2 pairings reveal round 1 winners, so they stay TBD). Reveal any match on its own; if its teams depend on earlier hidden results, those come with it (after a prompt you can turn off). On by default; remembered per browser.
- **Watch-back (▶)**: plays a match's official YouTube upload like a live stream: icon controls that fade out while playing, true fullscreen, ±10s / +1m / +10m skips, and a scrubber that only spans what you've already watched (its right end is "LIVE"), so the video's length never shows. Pausing keeps the frame visible; YouTube's player is cropped so its title and "More videos" shelf stay out of view (the crop comes off during an ad so "Skip ad" works). The top bar is a scoreboard that only counts the games you've revealed: "Reveal game N" updates it without stopping the video, then offers the next game, or "Series over". Game buttons switch between videos and remember where you left each one; reopening a match resumes where you stopped. Opens on a play button with a banner ad. Settings has two switches: **Show video length** (a normal full-game scrubber and clock) and **Skip the draft**, which starts each game at the walk-in; there is also a one-off Skip draft button. Skipping needs the video's first-frame time from the feed, combined with the game's start from live stats, so it is exact but only offered on videos that have it (most per-game uploads; not the English series uploads, which have their breaks cut out). English by default; if an upload won't play embedded, it falls back to the next broadcast language that does (with a link to the English video on YouTube). Note: YouTube blocks these embeds on `localhost`/`127.0.0.1`, so test watch-back on the deployed site.

The live feed has no bans and no player positions, so there's no ban list or minimap.
