# ⚓ Days 79–82: Battleship Bonanza 🎮🚢

The ocean called… it wanted me to sink ships for four straight days.  
So here we are — a full Battleship game, coded, tested, and ready to wage naval warfare.

---

## 🗓️ Timeline

- **Day 79** → Started planning & setting up the project repo, installed Webpack, Jest, and Babel. Wrote first tests for `Ship` (TDD all the way).
- **Day 80** → Built `GameBoard` logic: placing ships, handling hits/misses, tracking when they sink. Wrote tests for all edge cases (overlap, out-of-bounds, already-attacked).
- **Day 81** → Implemented `Player` & AI logic. AI now chases you around the grid like a hungry shark 🦈. More Jest tests to make sure it doesn’t cheat.
- **Day 82** → Connected it all into the UI. Added ship placement previews, accessibility touches, and dramatic messages via `typed.js`. Finally saw everything working together — and sank my first ship!

---

## ✨ Highlights

- Test-Driven Development (Jest) for all core logic.
- Computer AI with target queue for follow-up attacks.
- Clean separation of game logic (modules) vs UI (Render & DOM).
- Accessibility: aria-labels, keyboard navigation.
- Typed.js for fun, animated battle messages.
- Learned **a LOT** about testing, debugging, and patience. (Debugging the AI was like teaching a toddler not to eat crayons.)

---

## 🧪 What I Built

- `Ship`: tracks hits & sinking.
- `GameBoard`: manages ship placement, attacks, and fleet state.
- `Player`: human & AI logic (random + smart attacks).
- UI: grid rendering, hover placement previews, restart/reset buttons.

---

## 🧠 Lessons Learned

- Writing tests **first** saves time later (future me owes past me a coffee).
- Good error handling (bounds checks, overlap checks) makes debugging much easier.
- Separating concerns (logic vs UI) keeps the codebase sane.
- AI logic can be fun to implement even if it’s simple.
- Four days on one project = totally worth it.

---

## ✅ Status

**Project Completed (Days 79–82)**  
Repo: [Battleship on GitHub](https://github.com/devxsameer/battleship)

---
