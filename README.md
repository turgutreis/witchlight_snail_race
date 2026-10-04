# 🐌✨ Hexenlicht Schneckenrennen (The Great Snail Race)

Ein interaktives, rundenbasiertes D&D 5e Rennspiel basierend auf dem Abenteuer **Die Wildnis jenseits des Hexenlichts** (*The Wild Beyond the Witchlight* – Kapitel 1: Der Hexenlicht-Jahrmarkt).

## 🎮 Spielprinzip
- **Spielleiter (DM) TV-Screen:** Läuft auf dem Hauptbildschirm / Fernseher (`http://localhost:3000`). Zeigt die 3D-Arena, die Initiative-Reihenfolge, die Jahrmarkt-Stimmungsanzeige und das Live-Leaderboard.
- **Smartphone-Controller:** Spieler scannen den QR-Code oder öffnen `http://<IP>:3000/controller.html`, tragen ihren Charakter-Namen ein, wählen ihre D&D-Fertigkeit (*Tierkunde*, *Wagenlenken* oder *Geschicklichkeit*) und wählen eine der 8 offiziellen Riesenschnecken.
- **Rundenbasierte Initiative:** In jeder Runde würfelt der aktive Spieler einen **W20** auf dem Smartphone. Nicht vergebene Schnecken werden automatisch als NPC-Gegner geführt.
- **D&D Zaubertricks & Perks:** Jede Riesenschnecke besitzt ihren offiziellen Perk. Zudem können Zaubertricks (*Salatblatt-Köder*, *Magierhand*, *Einschläfern*) gewirkt oder heimlich geschummelt werden!

## 🐌 Die 8 Riesenschnecken
1. **Shellymuh** (Rosa) – *Kuschel-Panzer*: Startet mit einem Schutzschild.
2. **Flinkfuß** (Blau) – *Fast-Runner*: Mindestwurf von 7.
3. **Hoher Pfad** (Violett) – *Sporen-Tausch*: Sporen-Windschatten.
4. **Schnellblatt** (Grün) – *Salat-Gier*: +2 auf W20-Würfe.
5. **Blumenblitz** (Gelb) – *Blüten-Nitro*: Kritischer Treffer ab 18+.
6. **Flitzi** (Orange) – *Zappel-Reroll*: Würfel 1–3 einmal neu würfeln.
7. **Halsbrecher** (Rot) – *Rammbock*: Stößt bei Krit Vordermann zurück.
8. **Majestät** (Schwarz) – *Unerschütterlich*: Immun gegen Fumbles (Nat 1 zählt als 6).

## 🚀 Schnellstart

### Voraussetzungen
- [Bun](https://bun.sh/) (oder Node.js)

### Installation & Start
```bash
# Abhängigkeiten installieren
bun install

# Frontend bauen
bun run build

# Server starten
bun server.js
```

Öffne `http://localhost:3000` im Browser.
