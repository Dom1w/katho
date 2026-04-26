const CACHE_NAME = "katholisch-app-pwa-cfddc9743498";
const PRECACHE_URLS = [
  "./",
  "de/",
  "de/01-06-2025-siebenter-sonntag-der-osterzeit.html",
  "de/01-12-2024.html",
  "de/02-02-2025-mari-lichtmess.html",
  "de/02-03-2025-achter-sonntag.html",
  "de/03-08-2025-achtzehnter-sonntag.html",
  "de/03-11-2024.html",
  "de/04-01-2026-2sonntag-im-weihnachtskreis.html",
  "de/04-05-2025-dritter-sonntag-der-osterzeit.html",
  "de/05-01-2025.html",
  "de/05-03-2025-aschermittwoch.html",
  "de/05-10-2025-27sonntag.html",
  "de/06-04-2025-fnfter-fastensonntag.html",
  "de/07-09-2025-23sonntag.html",
  "de/07-12-2025-2adventsonntag.html",
  "de/08-12-2024.html",
  "de/09-02-2025.html",
  "de/09-03-2025-erster-fastensonntag.html",
  "de/09-11-2025-weihetag-der-lateranbasilika.html",
  "de/10-08-2025-neunzehnter-sonntag.html",
  "de/10-11-2024.html",
  "de/11-01-2026-fest-der-taufe-des-herrn.html",
  "de/11-05-2025-guter-hirt-sonntag.html",
  "de/12-01-2025.html",
  "de/12-10-2025-28sonntag.html",
  "de/13-04-2025-palmsonntag.html",
  "de/13-07-2025-fnfzehnter-sonntag.html",
  "de/14-12-2025-3adventsonntag.html",
  "de/15-06-2025-dreifaltigkeitssonntag.html",
  "de/15-12-2024.html",
  "de/16-02-2025-sechster-sonntag.html",
  "de/16-03-2025-zweiter-fastensonntag.html",
  "de/16-11-2025-33-sonntag.html",
  "de/17-08-2025-zwanzigster-sonntag.html",
  "de/17-11-2024.html",
  "de/18-05-2025-fnfter-sonntag-der-osterzeit.html",
  "de/19-01-2025.html",
  "de/19-10-2025-29sonntag.html",
  "de/20-04-2025-ostersonntag.html",
  "de/20-07-2025-sechzehnter-sonntag.html",
  "de/21-12-2025-4adventsonntag.html",
  "de/22-06-2025-zwlfter-sonntag-jahreskreis.html",
  "de/22-12-2024.html",
  "de/23-02-2025-siebter-sonntag.html",
  "de/23-03-2025-dritter-fastensonntag.html",
  "de/23-11-2025-christknigsfest.html",
  "de/24-08-2025-einundzwanzigster-sonntag.html",
  "de/24-11-2024.html",
  "de/25-05-2025-sechster-sonntag-der-osterzeit.html",
  "de/26-01-2025.html",
  "de/26-10-2025-30sonntag.html",
  "de/27-04-2025-zweiter-sonntag-der-osterzeit.html",
  "de/28-12-2025-fest-der-hl-familie.html",
  "de/29-12-2024.html",
  "de/30-03-2025-vierter-fastensonntag.html",
  "de/30-11-2025-1adventsonntag.html",
  "de/30-tagige-andacht-zum-hl-josef.html",
  "de/33-tgige-weihe-an-maria.html",
  "de/ablasse-und-messstipendien-fuer-die-armen-seelen.html",
  "de/adam-bis-noah.html",
  "de/advent.html",
  "de/allerheiligen.html",
  "de/allerseelen.html",
  "de/ambrosius-von-mailand-340-bis-397.html",
  "de/anbetung.html",
  "de/anima-christi.html",
  "de/april-eucharistie.html",
  "de/aschermittwoch.html",
  "de/aufopferung-der-funf-heiligen-wundmale-jesu.html",
  "de/august-unbeflecktes-herz-mariens.html",
  "de/baseler-katechismus.html",
  "de/bedeutung-passionszeit.html",
  "de/beichte-spickzettel.html",
  "de/beziehung-zu-namenspatron.html",
  "de/bibel-spickzettel.html",
  "de/bibelauslegung-methoden.html",
  "de/biblisch-ist-katholisch.html",
  "de/christihimmelfahrt.html",
  "de/christkind-weihnachtsmann-und-sankt-nikolaus.html",
  "de/christliche-liebe.html",
  "de/das-fegefeuer.html",
  "de/das-lehramt.html",
  "de/das-sieben-schloss-gebet.html",
  "de/den-richtigen-ehepartner-finden.html",
  "de/denk-du-in-mir-o-jesus.html",
  "de/der-feigenbaum.html",
  "de/der-heiligste-name-jesus.html",
  "de/der-weihnachtsbaum.html",
  "de/dezember-unbefleckte-empfangnis.html",
  "de/die-37-doktoren-der-kirche-1.html",
  "de/die-armen-seelen.html",
  "de/die-drei-weisen.html",
  "de/die-eine-heilige-katholische-und-apostolische.html",
  "de/die-funfzehn-vaterunser-der-hl-birgitta-1-jahr.html",
  "de/die-heilige-messe-aufbau.html",
  "de/die-kirche-das-neue-israel.html",
  "de/die-kirche-der-zukunft.html",
  "de/die-kreuzzuge.html",
  "de/die-namen-der-144000.html",
  "de/die-sieben-jahresfeste-im-at.html",
  "de/die-sieben-sakramente.html",
  "de/die-sieben-vaterunser-der-hl-birgitta-12-jahre.html",
  "de/die-zeichen-der-heiligen-messe.html",
  "de/dies-domini.html",
  "de/dogmen-der-katholischen-kirche.html",
  "de/dominikanischer-rosenkranz.html",
  "de/ehelosigkeit-der-priester.html",
  "de/eifersucht.html",
  "de/eine-theologie-des-leibes.html",
  "de/epiphanie.html",
  "de/erstkommunion.html",
  "de/fastenzeit.html",
  "de/fatima-gebete.html",
  "de/februar-heilige-familie.html",
  "de/feiertage.html",
  "de/fragen-fur-bibel-christen.html",
  "de/fronleichnam.html",
  "de/fruhkirchliche-zeugnisse.html",
  "de/funf-missinterpretierte-bibelstellen.html",
  "de/furbitte-des-heiligen-thomas-von-aquin.html",
  "de/furbitte.html",
  "de/furcht-gottes.html",
  "de/gebet-autoritat-jesu.html",
  "de/gebet-des-hl-franz-xaver.html",
  "de/gebet-fur-den-papst.html",
  "de/gebet-fur-die-familie.html",
  "de/gebet-fur-eheleute.html",
  "de/gebet-fur-vater-und-ehemanner.html",
  "de/gebet-gegen-damonische-einflusse.html",
  "de/gebet-um-den-zukunftigen-ehepartner.html",
  "de/gebet-von-der-unbekannten-schulterwunde-des-herrn.html",
  "de/gebet-zu-jesus-christus.html",
  "de/gebet-zur-hl-johanna-von-orleans.html",
  "de/gebet-zur-ubernahme-der-autoritat.html",
  "de/gebete-fuer-die-armen-seelen.html",
  "de/gehorsam.html",
  "de/geistliche-kommunion.html",
  "de/genesis-psychologisch-lesen.html",
  "de/geschichte-der-religiosen-ideen-von-mircea-eliade.html",
  "de/glaubensbekenntnisse-in-der-bibel.html",
  "de/gott-vater-gebet.html",
  "de/grundonnerstag.html",
  "de/hand-der-mutter.html",
  "de/hasatan.html",
  "de/hehre-konigin.html",
  "de/heilige-eucharistie.html",
  "de/heilungs-und-schutzgebet-nach-pfr-klaus-mueller.html",
  "de/heilungs-und-schutzgebet.html",
  "de/heilungsgebet-durch-tauferneuerung.html",
  "de/heiraten-nach-einem-jahr.html",
  "de/ikonen-heiligenbilder-und-statuen.html",
  "de/islam-und-christentum.html",
  "de/islamisches-dilemma.html",
  "de/ist-ostern-heidnisch.html",
  "de/ivf-als-prufstein-fur-das-lehramt.html",
  "de/januar-allerheiligster-name-jesu.html",
  "de/jesus-die-wahrheit.html",
  "de/jesus-du-quelle-aller-gute.html",
  "de/jesus-in-jedem-buch-der-bibel.html",
  "de/juli-kostbares-blut-jesu.html",
  "de/jungfrau-mit-der-sternenkrone.html",
  "de/juni-allerheiligstes-herz-jesu.html",
  "de/karfreitag.html",
  "de/karsamstag.html",
  "de/katechismus.html",
  "de/katholisch-beziehung-fuhren.html",
  "de/katholische-kirche-in-der-bibel.html",
  "de/katholisches-dating.html",
  "de/kindertaufe.html",
  "de/klassische-gebete-fuer-die-armen-seelen.html",
  "de/laurentius-von-brindisi-15591619.html",
  "de/litanei-der-demut.html",
  "de/litanei-vom-kostbaren-blut.html",
  "de/mai-maria-mutter-gottes.html",
  "de/mammon-ehe-und-gottvertrauen.html",
  "de/maria-unbefleckte-empfngnis.html",
  "de/marias-mutterschoss.html",
  "de/marz-heiliger-josef.html",
  "de/matthaus-und-deuteronomium.html",
  "de/melchisedek-bis-jesus.html",
  "de/monatsandachten.html",
  "de/november-arme-seelen.html",
  "de/novene-zum-heiligen-geist.html",
  "de/novene-zum-heiligsten-herzen-jesu.html",
  "de/novenen-und-langere-gebete-fuer-die-armen-seelen.html",
  "de/o-gesegneter-heiliger-josef.html",
  "de/obhut-des-heiligen-joseph.html",
  "de/oktober-rosenkranz.html",
  "de/ostern.html",
  "de/palmsonntag.html",
  "de/patriarch-isaak-der-stille-trager-der-verheissung.html",
  "de/patriarch-jakob-der-gottesstreiter.html",
  "de/patriarch-josef-ein-stilles-reden-gottes.html",
  "de/pfingsten.html",
  "de/populare-falschbehauptungen-uber-den-katholizismus.html",
  "de/preisgebet-der-heiligen-engel-zur-heiligsten.html",
  "de/primatsstellung-petri-und-der-rmischen-kirche.html",
  "de/prophezeiungen-uber-jesus-im-at.html",
  "de/reconquista.html",
  "de/rosenkranze-fuer-die-armen-seelen.html",
  "de/salve-regina.html",
  "de/schutzengelweihe.html",
  "de/sein-name-ist-auf-ihre-stirn-geschrieben.html",
  "de/september-schutzengel.html",
  "de/sitemap.html",
  "de/sola-scriptura-und-das-at.html",
  "de/sola-scriptura.html",
  "de/st-birgitta-23-07.html",
  "de/st-carlo-acutis-12-10.html",
  "de/st-jeanne-darc-30-05.html",
  "de/st-josef-19-03.html",
  "de/st-longinus-16-10.html",
  "de/st-nikolaus-06-12.html",
  "de/st-pier-giorgio-frassati-04-07.html",
  "de/st-thomas-apostel-03-07.html",
  "de/stabat-mater.html",
  "de/stefanitag.html",
  "de/stundengebet.html",
  "de/suhnung-fur-andere.html",
  "de/tagliches-gebet-fur-verfolgte-katholiken-und.html",
  "de/trinitat.html",
  "de/una-caro.html",
  "de/vater-unser-meditation.html",
  "de/vergebung.html",
  "de/verse-und-bilder.html",
  "de/vom-alten-gesetz-zum-neuen-bund.html",
  "de/was-macht-jesus-heute.html",
  "de/weihnachten.html",
  "de/weissersonntag-barmherzigkeitssonntag.html",
  "de/wie-war-jesus-ein-opfer.html",
  "de/zeugnisse-von-erhorten-gebeten-an-die-armen-seelen.html",
  "index.html",
  "manifest.webmanifest",
  "robots.txt",
  "sitemap.xml",
  "static/css/katholisch-app.css?v=cfddc9743498",
  "static/css/main.css?v=cfddc9743498",
  "static/img/logo.png"
];
const OFFLINE_HTML = "<!doctype html><html lang=\"en\"><head><meta charset=\"utf-8\"><meta name=\"viewport\" content=\"width=device-width, initial-scale=1\"><title>katholisch leben</title><style>body{font-family:system-ui,sans-serif;background:#f7f3ee;color:#2a1a14;margin:0;min-height:100vh;display:grid;place-items:center;padding:24px}.card{max-width:38rem;background:#fff;border-radius:20px;padding:24px;box-shadow:0 18px 50px rgba(42,26,20,.12)}h1{margin-top:0}p{line-height:1.6}</style></head><body><div class=\"card\"><h1>Offline</h1><p>This page is not available offline yet. Reconnect and open it once to store it for later.</p></div></body></html>";

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(PRECACHE_URLS))
  );
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => Promise.all(
      keys
        .filter(key => key !== CACHE_NAME)
        .map(key => caches.delete(key))
    ))
  );
  self.clients.claim();
});

self.addEventListener('fetch', event => {
  const request = event.request;
  if (request.method !== 'GET') return;

  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;

  if (request.mode === 'navigate') {
    event.respondWith(
      fetch(request)
        .then(response => {
          const copy = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(request, copy));
          return response;
        })
        .catch(async () => {
          const cached = await caches.match(request);
          if (cached) return cached;
          const home = await caches.match('./');
          if (home) return home;
          return new Response(OFFLINE_HTML, {
            headers: { 'Content-Type': 'text/html; charset=utf-8' }
          });
        })
    );
    return;
  }

  event.respondWith(
    caches.match(request).then(cached => {
      const networkFetch = fetch(request).then(response => {
        if (response && response.ok) {
          const copy = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(request, copy));
        }
        return response;
      });
      return cached || networkFetch;
    })
  );
});
