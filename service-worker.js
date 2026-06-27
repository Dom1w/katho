const CACHE_NAME = "katholisch-app-pwa-fd0c05cc7305";
const PRECACHE_URLS = [
  "./",
  "de/",
  "de/2024-11-03-einunddreissigster-sonntag-im-jahreskreis.html",
  "de/2024-11-10-zweiunddreissigster-sonntag-im-jahreskreis.html",
  "de/2024-11-17-dreiunddreissigster-sonntag-im-jahreskreis.html",
  "de/2024-11-24-christkoenigsfest.html",
  "de/2024-12-01-erster-adventsonntag.html",
  "de/2024-12-08-zweiter-adventsonntag.html",
  "de/2024-12-15-dritter-adventsonntag.html",
  "de/2024-12-22-vierter-adventsonntag.html",
  "de/2024-12-29-fest-der-hl-familie.html",
  "de/2025-01-05-zweiter-sonntag-nach-weihnachten.html",
  "de/2025-01-12-fest-der-taufe-des-herrn.html",
  "de/2025-01-19-zweiter-sonntag-im-jahreskreis.html",
  "de/2025-01-26-dritter-sonntag-im-jahreskreis.html",
  "de/2025-02-02-mariae-lichtmess.html",
  "de/2025-02-09-fuenfter-sonntag-im-jahreskreis.html",
  "de/2025-02-16-sechster-sonntag.html",
  "de/2025-02-23-siebter-sonntag.html",
  "de/2025-03-02-achter-sonntag.html",
  "de/2025-03-05-aschermittwoch.html",
  "de/2025-03-09-erster-fastensonntag.html",
  "de/2025-03-16-zweiter-fastensonntag.html",
  "de/2025-03-23-dritter-fastensonntag.html",
  "de/2025-03-30-vierter-fastensonntag.html",
  "de/2025-04-06-fuenfter-fastensonntag.html",
  "de/2025-04-13-palmsonntag.html",
  "de/2025-04-20-ostersonntag.html",
  "de/2025-04-27-zweiter-sonntag-der-osterzeit.html",
  "de/2025-05-04-dritter-sonntag-der-osterzeit.html",
  "de/2025-05-11-guter-hirt-sonntag.html",
  "de/2025-05-18-fuenfter-sonntag-der-osterzeit.html",
  "de/2025-05-25-sechster-sonntag-der-osterzeit.html",
  "de/2025-06-01-siebenter-sonntag-der-osterzeit.html",
  "de/2025-06-15-dreifaltigkeitssonntag.html",
  "de/2025-06-22-zwoelfter-sonntag-jahreskreis.html",
  "de/2025-07-13-fuenfzehnter-sonntag.html",
  "de/2025-07-20-sechzehnter-sonntag.html",
  "de/2025-08-03-achtzehnter-sonntag.html",
  "de/2025-08-10-neunzehnter-sonntag.html",
  "de/2025-08-17-zwanzigster-sonntag.html",
  "de/2025-08-24-einundzwanzigster-sonntag.html",
  "de/2025-09-07-dreiundzwanzigster-sonntag.html",
  "de/2025-10-05-siebenundzwanzigster-sonntag.html",
  "de/2025-10-12-achtundzwanzigster-sonntag.html",
  "de/2025-10-19-neunundzwanzigster-sonntag.html",
  "de/2025-10-26-dreissigster-sonntag.html",
  "de/2025-11-09-weihetag-der-lateranbasilika.html",
  "de/2025-11-16-dreiunddreissigster-sonntag.html",
  "de/2025-11-23-christkoenigsfest.html",
  "de/2025-11-30-erster-adventsonntag.html",
  "de/2025-12-07-zweiter-adventsonntag.html",
  "de/2025-12-14-dritter-adventsonntag.html",
  "de/2025-12-21-vierter-adventsonntag.html",
  "de/2025-12-28-fest-der-hl-familie.html",
  "de/2026-01-04-zweiter-sonntag-im-weihnachtskreis.html",
  "de/2026-01-11-fest-der-taufe-des-herrn.html",
  "de/2026-06-07-zehnter-sonntag-im-jahreskreis.html",
  "de/2026-06-14-elfter-sonntag-im-jahreskreis.html",
  "de/2026-06-21-zwoelfter-sonntag-im-jahreskreis.html",
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
  "de/lauretanische-litanei.html",
  "de/litanei-der-demut.html",
  "de/litanei-vom-kostbaren-blut.html",
  "de/magnifica-humanitas.html",
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
  "de/sozialstaat-und-nachstenliebe.html",
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
  "de/tugenden-und-todsunden.html",
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
  "static/css/katholisch-app.css?v=fd0c05cc7305",
  "static/css/main.css?v=fd0c05cc7305",
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
