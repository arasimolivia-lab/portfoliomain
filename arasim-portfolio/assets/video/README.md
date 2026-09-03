# // EDIT: add your video files here

This folder is where your actual motion files live:

- `demo-reel.mp4` — your main reel, played on the featured player at `/reel/`
  (referenced in `reel.html`)
- Individual project clips referenced from `_data/reel.yml` (e.g.
  `placeholder-1.mp4`, `placeholder-2.mp4`, `placeholder-3.mp4`) — these
  autoplay muted as a hover preview on each reel card.

Keep file sizes reasonable for the web (compress with Handbrake/AME,
aim under ~15–25MB per clip, h.264 mp4). GitHub has a 100MB per-file
hard limit and repos work best staying well under 1GB total — if your
reel is large, consider hosting it on Vimeo/YouTube and swapping the
`<video>` tag in `reel.html` for an embed `<iframe>` instead.

Delete this README once you've added your own files (it's just a note,
not used by the site).
