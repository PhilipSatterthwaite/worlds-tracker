# Esports Tracker

Live brackets, in-game stats and spoiler-free rewatches for esports tournaments. Static pages, no build step.

- `index.html`: home page, pick a game (League of Legends for now).
- `lol/`: League of Legends World Championship 2026, from the official LoL Esports schedule and live stats feeds.

## League of Legends

- **Brackets**: Play-In, Swiss and Knockout, plus the schedule.
- **Live card**: broadcast-style scoreboard, objective timers, gold-difference graph, and the draft by lane with KDA, CS, items and lane gold. Collapsible.
- **No spoilers**: hides every result you haven't revealed, plus matchups that would give results away (Swiss round 2 pairings reveal round 1 winners, so they stay TBD). Reveal in schedule order, or click a hidden match to reveal up to it. Remembered per browser.
- **Watch-back (▶)**: plays a match's official YouTube upload with no progress bar or length, remembers your place, and offers the next game without saying whether the series got that far. LoL Esports' English uploads only play embedded on lolesports.com, so it falls back to the first broadcast language that plays elsewhere (with a link to the English video on YouTube).

The live feed has no bans and no player positions, so there's no ban list or minimap.
