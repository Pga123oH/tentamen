/* Logika halaman. Data tiap sesi ada di folder data/ (sesi1.js, sesi2.js, ...).
   Menambah sesi baru: buat data/sesiN.js dengan bentuk yang sama, lalu tambahkan <script> di index.html. */

const STRENGTH = { jelas: "Jelas", kuat: "Cukup kuat", kira: "Perkiraan", belum: "Belum pasti" };
const STATUS = { terlihat: "Terlihat", sulit: "Sulit", tidak: "Tidak terlihat", belum: "Belum jelas" };
const SESSIONS = (window.SESSIONS || []).slice().sort((a, b) => a.id.localeCompare(b.id, undefined, { numeric: true }));

/* ---------- helpers ---------- */
const $ = (s, el = document) => el.querySelector(s);
const esc = s => String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const meta = (sl, w) => `<div class="meta"><span>Slide ${esc(sl)}</span><span class="mono">${esc(w)}</span></div>`;
const norm = s => s.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");

let S;                       // current session
let SIGNALS, GROUPS, REMARKS, CLINIC, CHECKS, SKIPPED, ALL;
let done = new Set();
const save = () => { try { localStorage.setItem(S.storageKey, JSON.stringify([...done])); } catch (e) {} };
const store = {
  get: k => { try { return localStorage.getItem(k); } catch (e) { return null; } },
  set: (k, v) => { try { localStorage.setItem(k, v); } catch (e) {} }
};

/* ---------- render static parts ---------- */
const SHOW_SIGNALS = 5;
const moreBtn = document.createElement("button");
moreBtn.type = "button";
moreBtn.className = "more";
$("#signal-list").after(moreBtn);
moreBtn.addEventListener("click", () => {
  const open = $("#signal-list").classList.toggle("all");
  const hidden = SIGNALS.filter((x, i) => i >= SHOW_SIGNALS && !x.top).length;
  moreBtn.textContent = open ? "Ringkas lagi" : `Tampilkan ${hidden} sinyal lainnya`;
  if (!open) $("#sinyal").scrollIntoView();
});

function renderStatic() {
$("#signal-list").classList.remove("all");
$("#signal-list").innerHTML = SIGNALS.map((x, i) => `
  <li class="signal${x.top ? " top" : ""}${i >= SHOW_SIGNALS && !x.top ? " extra" : ""}">
    <span class="rail s-${x.s}"></span>
    <div>
      <h3>${esc(x.t)}</h3>
      <p>${esc(x.d)}</p>
      <div class="meta"><span class="tag">${STRENGTH[x.s]}</span><span>Slide ${esc(x.sl)}</span><span class="mono">${esc(x.w)}</span></div>
    </div>
  </li>`).join("");
{
  const hidden = SIGNALS.filter((x, i) => i >= SHOW_SIGNALS && !x.top).length;
  moreBtn.hidden = hidden === 0;
  moreBtn.textContent = `Tampilkan ${hidden} sinyal lainnya`;
}

$("#remarks").innerHTML = REMARKS.map(g => `
  <div class="remark-group">
    <h3>${esc(g.t)}</h3>
    ${g.items.map(([q, d, sl, w]) => `
      <div class="quote${g.soft ? " soft" : ""}">
        <blockquote>${esc(q)}</blockquote>
        <p>${esc(d)}</p>
        ${meta(sl, w)}
      </div>`).join("")}
  </div>`).join("");

$("#clinic").innerHTML = CLINIC.map(([t, d, sl, w]) => `
  <article class="clin"><h3>${esc(t)}</h3><p>${esc(d)}</p>${meta(sl, w)}</article>`).join("");

$("#checks").innerHTML = CHECKS.map(([t, rek, ppt, adv, w]) => `
  <article class="chk">
    <h3>${esc(t)}</h3>
    <div class="vs">
      <div><b>Di rekaman</b>${esc(rek)}</div>
      <div class="ppt"><b>Di PPT / catatan</b>${esc(ppt)}</div>
    </div>
    <p class="advice">${esc(adv)}</p>
    <div class="meta"><span class="mono">${esc(w)}</span></div>
  </article>`).join("");

$("#skipped").innerHTML = SKIPPED.map(([t, sl]) => `<li><span>${esc(t)}</span><span>slide ${esc(sl)}</span></li>`).join("");
$("#skipped-note").innerHTML = S.skippedNote || "";
}

/* ---------- structures: filter, search, checklist ---------- */
let filter = "semua";
let query = "";
const isMobile = () => window.matchMedia("(max-width: 600px)").matches;
let openGroups = new Set();

function highlight(text) {
  const safe = esc(text);
  if (!query) return safe;
  const q = esc(query).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  return safe.replace(new RegExp(q, "gi"), m => `<mark>${m}</mark>`);
}

function renderGroups() {
  const q = norm(query);
  let shown = 0;
  $("#groups").innerHTML = GROUPS.map(g => {
    const rows = g.items.filter(([n, st, d]) => {
      const id = g.id + "|" + n;
      if (filter === "sisa" && done.has(id)) return false;
      if (!["semua", "sisa"].includes(filter) && st !== filter) return false;
      return !q || norm(n + " " + d).includes(q);
    });
    if (!rows.length) return "";
    shown += rows.length;
    const groupDone = g.items.filter(i => done.has(g.id + "|" + i[0])).length;
    const forced = q || filter !== "semua";
    const open = forced || openGroups.has(g.id);
    return `
      <div class="group${open ? " open" : ""}" data-g="${g.id}">
        <button type="button" class="group-head" aria-expanded="${open}"${forced ? " disabled" : ""}>
          <span class="gh-text"><h3>${esc(g.t)}</h3><span class="slides">${esc(g.sl)} &middot; ${rows.length} struktur</span></span>
          <span class="count">${groupDone}/${g.items.length}</span>
          <span class="caret" aria-hidden="true"></span>
        </button>
        <div class="group-body">
        ${rows.map(([n, st, d, sl, w]) => {
          const id = g.id + "|" + n;
          const on = done.has(id);
          const cid = "c-" + norm(id).replace(/[^a-z0-9]+/g, "-");
          return `
          <div class="item${on ? " done" : ""}">
            <input type="checkbox" id="${cid}" data-id="${esc(id)}"${on ? " checked" : ""} aria-label="Tandai ${esc(n)} sudah dikuasai">
            <div>
              <div class="item-top"><label class="name" for="${cid}">${highlight(n)}</label><span class="pill ${st}">${STATUS[st]}</span></div>
              <p class="desc">${highlight(d)}</p>
              ${meta(sl, w)}
            </div>
          </div>`;
        }).join("")}
        </div>
      </div>`;
  }).join("");
  $("#empty").hidden = shown > 0;
  updateProgress();
}

function updateProgress() {
  const n = ALL.filter(id => done.has(id)).length;
  $("#bar-fill").style.width = (n / ALL.length * 100) + "%";
  $("#progress-text").textContent = `${n}/${ALL.length} dikuasai`;
}

$("#groups").addEventListener("change", e => {
  const id = e.target.dataset.id;
  if (!id) return;
  e.target.checked ? done.add(id) : done.delete(id);
  save();
  if (filter === "sisa") renderGroups();
  else {
    e.target.closest(".item").classList.toggle("done", e.target.checked);
    if (navigator.vibrate && e.target.checked) { try { navigator.vibrate(8); } catch (_) {} }
    const head = e.target.closest(".group").querySelector(".count");
    const g = GROUPS.find(g => id.startsWith(g.id + "|"));
    head.textContent = `${g.items.filter(i => done.has(g.id + "|" + i[0])).length}/${g.items.length}`;
    updateProgress();
  }
});

// Tap anywhere on a row to tick it; tap a group header to fold it.
$("#groups").addEventListener("click", e => {
  const head = e.target.closest(".group-head");
  if (head) {
    if (head.disabled) return;
    const g = head.closest(".group");
    const open = g.classList.toggle("open");
    head.setAttribute("aria-expanded", open);
    open ? openGroups.add(g.dataset.g) : openGroups.delete(g.dataset.g);
    if (!open && head.getBoundingClientRect().top < 0) head.scrollIntoView({ block: "start" });
    return;
  }
  const item = e.target.closest(".item");
  if (!item || e.target.closest("input, label")) return;
  if (window.getSelection && String(window.getSelection())) return; // user is selecting text
  item.querySelector("input").click();
});

$("#chips").addEventListener("click", e => {
  const b = e.target.closest(".chip");
  if (!b) return;
  filter = b.dataset.f;
  document.querySelectorAll(".chip").forEach(c => c.classList.toggle("on", c === b));
  b.scrollIntoView({ block: "nearest", inline: "center" });
  renderGroups();
});

let t;
$("#q").addEventListener("input", e => {
  clearTimeout(t);
  t = setTimeout(() => { query = e.target.value.trim(); renderGroups(); }, 120);
});

/* ---------- session switching ---------- */
function setSession(id, { scroll } = {}) {
  S = SESSIONS.find(s => s.id === id) || SESSIONS[0];
  ({ SIGNALS, GROUPS, REMARKS, CLINIC, CHECKS, SKIPPED } = S);
  ALL = GROUPS.flatMap(g => g.items.map(i => g.id + "|" + i[0]));
  try { done = new Set(JSON.parse(store.get(S.storageKey) || "[]")); } catch (e) { done = new Set(); }
  // On phones only the first group starts open, so the list isn't long.
  openGroups = new Set(isMobile() ? [GROUPS[0].id] : GROUPS.map(g => g.id));
  filter = "semua";
  query = "";
  $("#q").value = "";
  document.querySelectorAll(".chip").forEach(c => c.classList.toggle("on", c.dataset.f === "semua"));

  $("#kicker").textContent = S.kicker;
  $("#title").textContent = S.title;
  $("#lede").textContent = S.lede;
  $("#lede-sinyal").textContent = S.ledes.sinyal;
  $("#lede-remarks").textContent = S.ledes.remarks;
  $("#lede-cek").textContent = S.ledes.cek;
  $("#ppt-name").textContent = S.pptName;
  document.title = `${S.tab} · ${S.title} · Catatan Praktikum Anatomi`;
  document.querySelectorAll("#sessions button").forEach(b => {
    const on = b.dataset.s === S.id;
    b.classList.toggle("on", on);
    b.setAttribute("aria-pressed", on);
  });

  renderStatic();
  renderGroups();

  const url = new URL(location.href);
  url.searchParams.set("sesi", S.id);
  history.replaceState(null, "", url);
  store.set("tentamen-last-session", S.id);
  if (scroll) window.scrollTo(0, 0);
}

$("#sessions").innerHTML = SESSIONS.map(s => `
  <button type="button" data-s="${esc(s.id)}" aria-pressed="false">
    <b>${esc(s.tab)}</b><span>${esc(s.tabSub)}</span>
  </button>`).join("");
$("#sessions").addEventListener("click", e => {
  const b = e.target.closest("button");
  if (b && b.dataset.s !== S.id) setSession(b.dataset.s, { scroll: true });
});

{
  const fromUrl = new URLSearchParams(location.search).get("sesi");
  const start = [fromUrl, store.get("tentamen-last-session")].find(id => id && SESSIONS.some(s => s.id === id));
  setSession(start || SESSIONS[0].id);
}

/* ---------- active section in nav ---------- */
const nav = $(".toc-inner");
const links = [...document.querySelectorAll(".toc a")];
const obs = new IntersectionObserver(entries => {
  entries.forEach(en => {
    if (!en.isIntersecting) return;
    links.forEach(a => a.classList.toggle("active", a.getAttribute("href") === "#" + en.target.id));
    const a = links.find(a => a.classList.contains("active"));
    // Scroll only the nav strip sideways; never move the page itself.
    if (a) nav.scrollTo({ left: a.offsetLeft - (nav.clientWidth - a.offsetWidth) / 2, behavior: "smooth" });
  });
}, { rootMargin: "-45% 0px -50% 0px" });
document.querySelectorAll("main .sec").forEach(s => obs.observe(s));

/* ---------- back to top ---------- */
const topBtn = $("#to-top");
let ticking = false;
window.addEventListener("scroll", () => {
  if (ticking) return;
  ticking = true;
  requestAnimationFrame(() => {
    topBtn.classList.toggle("show", window.scrollY > 900);
    ticking = false;
  });
}, { passive: true });
topBtn.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

// Enter on the search box closes the phone keyboard so results are visible.
$("#q").addEventListener("keydown", e => { if (e.key === "Enter") e.target.blur(); });
