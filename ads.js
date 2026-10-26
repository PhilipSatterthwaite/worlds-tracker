// Banner ads (Adsterra). Fill in the two unit keys from the Adsterra
// dashboard (Websites → Get code); slots stay hidden while a key is empty.
//
// Each banner runs in its own sandboxed iframe: its scripts can't read or
// change this page, and it can't redirect the tab (no allow-top-navigation),
// though clicking an ad may open a new tab.
const ADS = {
  // The host in the snippet's invoke.js URL, e.g. //www.highperformanceformat.com/<key>/invoke.js
  host: 'https://www.highperformanceformat.com',
  units: {
    wide: { key: '', width: 728, height: 90 },  // screens with room for it
    small: { key: '', width: 320, height: 50 }, // phones
  },
  sandbox: 'allow-scripts allow-popups allow-popups-to-escape-sandbox',
};

function renderAds() {
  for (const slot of document.querySelectorAll('.ad-slot')) {
    const room = slot.parentElement.clientWidth;
    const unit = room >= ADS.units.wide.width && ADS.units.wide.key ? ADS.units.wide : ADS.units.small;
    if (!unit.key || room < unit.width) { slot.hidden = true; continue; }
    slot.hidden = false;
    if (slot.dataset.key === unit.key) continue;
    slot.dataset.key = unit.key;
    const frame = document.createElement('iframe');
    frame.title = 'Advertisement';
    frame.width = unit.width;
    frame.height = unit.height;
    frame.setAttribute('scrolling', 'no');
    frame.setAttribute('sandbox', ADS.sandbox);
    frame.srcdoc = `<!doctype html><html><head><style>html,body{margin:0;overflow:hidden;background:transparent}</style></head><body>
<script>atOptions={key:${JSON.stringify(unit.key)},format:'iframe',height:${unit.height},width:${unit.width},params:{}};<\/script>
<script src="${ADS.host}/${encodeURIComponent(unit.key)}/invoke.js"><\/script></body></html>`;
    slot.replaceChildren(Object.assign(document.createElement('span'), { className: 'ad-label', textContent: 'Advertisement' }), frame);
  }
}

let adsResize = 0;
window.addEventListener('resize', () => { clearTimeout(adsResize); adsResize = setTimeout(renderAds, 250); });
renderAds();
