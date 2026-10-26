// Banner ads (Adsterra). Each slot frames ad.html from ads.esportstracker.app,
// a separate origin: the ad script gets its own storage there, but it can't
// read or change this page. The sandbox also stops an ad from navigating
// this tab away (no allow-top-navigation); clicking an ad opens a new tab.
// Unit keys live in ad.html; leave `frame` empty to turn ads off.
const ADS = {
  frame: 'https://ads.esportstracker.app/ad', // ad.html; Cloudflare serves it without the .html
  units: {
    wide: { width: 728, height: 90 },  // screens with room for it
    small: { width: 320, height: 50 }, // phones
  },
  sandbox: 'allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox',
};

// Visit once with ?noads to stop ads on this browser (your own views would
// only skew the stats); ?ads turns them back on.
const adsOff = (() => {
  try {
    const q = new URLSearchParams(location.search);
    if (q.has('noads')) localStorage.setItem('noads', '1');
    if (q.has('ads')) localStorage.removeItem('noads');
    return !!localStorage.getItem('noads');
  } catch { return false; }
})();

function renderAds() {
  for (const slot of document.querySelectorAll('.ad-slot')) {
    if (adsOff) { slot.hidden = true; continue; }
    const room = slot.parentElement.clientWidth;
    const name = room >= ADS.units.wide.width ? 'wide' : 'small';
    const unit = ADS.units[name];
    if (!ADS.frame || room < unit.width) { slot.hidden = true; continue; }
    slot.hidden = false;
    if (slot.dataset.unit === name) continue;
    slot.dataset.unit = name;
    const frame = document.createElement('iframe');
    frame.title = 'Advertisement';
    frame.width = unit.width;
    frame.height = unit.height;
    frame.setAttribute('scrolling', 'no');
    frame.setAttribute('sandbox', ADS.sandbox);
    frame.src = `${ADS.frame}?unit=${name}`;
    slot.replaceChildren(Object.assign(document.createElement('span'), { className: 'ad-label', textContent: 'Advertisement' }), frame);
  }
}

let adsResize = 0;
window.addEventListener('resize', () => { clearTimeout(adsResize); adsResize = setTimeout(renderAds, 250); });
renderAds();
