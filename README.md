# Az egyenáram

Magyar nyelvű, React-alapú oktató weboldal az egyenáram alapjairól. Rövid elméleti részekkel és interaktív képletoldalakkal segít megismerni az áramerősséget, a feszültséget, az ellenállást, az elektromos munkát és teljesítményt, valamint a soros és párhuzamos kapcsolásokat.

## Tartalom

- **Áramerősség:** az elektromos áram és az áramerősség fogalma, valamint az $I = Q / t$ képlet.
- **Feszültség és Ohm-törvény:** feszültség, ellenállás, és az $I = U / R$ összefüggés.
- **Elektromos munka és teljesítmény:** a kapcsolódó alapképletek és mértékegységek.
- **Áramkörök:** soros és párhuzamos kapcsolás alapvető tulajdonságai.
- **Számolóoldalak:** egyes képletekhez megadott értékek alapján az oldal azonnal kiszámolja és megjeleníti az eredményt.

Az alkalmazás jelenlegi változata frontend-only: nem használ adatbázist vagy külön backend szolgáltatást. A számítások a böngészőben történnek, a beírt értékek nem kerülnek szerverre mentésre.

## Követelmények

- Node.js 20.19+ vagy 22.12+ (a Vite 8 futtatásához)
- npm, amely a Node.js telepítőjével együtt érkezik
- Internetkapcsolat a függőségek első telepítéséhez

A verzió ellenőrzése terminálban:

```bash
node --version
npm --version
```

## Helyi futtatás

1. Nyisd meg a projekt gyökérmappáját terminálban, majd lépj az alkalmazás mappájába:

	```bash
	cd azegyenaram
	```

2. Telepítsd a rögzített függőségeket:

	```bash
	npm ci
	```

	Ha a `package-lock.json` hiányzik vagy módosult, helyette használd az `npm install` parancsot.

3. Indítsd el a fejlesztői szervert:

	```bash
	npm run dev
	```

4. Nyisd meg a terminálban megjelenő címet, általában a `http://localhost:5173` címet. A fejlesztői szerver futása közben a fájlmódosítások automatikusan frissülnek a böngészőben.

A szervert a terminálban a `Ctrl+C` billentyűkombinációval lehet leállítani.

## Parancsok

A parancsokat az `azegyenaram` mappából futtasd.

| Parancs | Mire való? |
| --- | --- |
| `npm run dev` | Helyi fejlesztői szerver indítása |
| `npm run lint` | ESLint ellenőrzések futtatása |
| `npm run build` | Éles, publikálható változat készítése az `azegyenaram/dist` mappába |
| `npm run preview` | A buildelt változat helyi előnézete; előtte futtasd az `npm run build` parancsot |

Ajánlott ellenőrzés publikálás előtt:

```bash
npm run lint
npm run build
npm run preview
```

A `preview` parancs terminálban megjelenő címét böngészőben megnyitva ellenőrizhető a buildelt oldal. Ez a cím még csak a saját gépeden érhető el, nem nyilvános tesztlink.

**Jelenlegi ellenőrzési állapot:** az `npm run build` sikeresen lefut. Az `npm run lint` jelenleg hibákat jelez az `src/App.jsx` fájlban, többek között fel nem használt importok és Fast Refresh ellenőrzések miatt. A build nagy JavaScript-csomagra is figyelmeztet, de ettől sikeres.

## Megosztható tesztlink készítése

Jelenleg nincs a projekthez beállítva nyilvános tesztlink vagy automatikus tárhely. A megosztható linkhez először publikálni kell az alkalmazás buildjét. A Vite által készített statikus fájlokat a `dist` mappában találod.

### Gyors, kézi feltöltés Netlify-ra

1. Futtasd a fenti `npm run build` parancsot.
2. Jelentkezz be a Netlify felületére, és hozz létre manuális deployt.
3. Töltsd fel vagy húzd be az `azegyenaram/dist` mappát a Netlify deploy felületére.
4. A sikeres feltöltés után a Netlify ad egy HTTPS-es webcímet. Ezt a címet lehet tesztlinkként elküldeni másoknak.
5. Új változat közzétételekor készíts új buildet, majd töltsd fel ismét a `dist` mappát.

### Automatikus előnézeti link GitHub és Netlify/Vercel használatával

1. Töltsd fel a projektet egy GitHub repositoryba.
2. A tárhelyszolgáltatónál importáld a repositoryt, és az alkalmazás gyökérmappájának állítsd be az `azegyenaram` könyvtárat.
3. Add meg a buildbeállításokat:

	- Build parancs: `npm run build`
	- Publikálandó mappa: `dist`
	- Telepítési parancs: `npm ci` (ha külön mezőt kér a szolgáltató)

4. A szolgáltató létrehozza az oldalt, és ad egy megosztható HTTPS-es címet. GitHub-integráció esetén a repositoryhoz beküldött módosításokból automatikusan új build készül; a szolgáltatótól függően teszt- vagy preview-link is létrejöhet.
5. A ténylegesen létrehozott tesztlinket illeszd be ebbe a README-be, vagy küldd el közvetlenül a tesztelőknek.

Az alkalmazás `HashRouter`-t és relatív Vite build útvonalat használ, ezért statikus tárhelyen is működnek a belső oldalak. A belső navigációs címekben a `#` jel utáni útvonal látható.

## Mappaszerkezet

```text
terraproject3/
├── README.md
└── azegyenaram/
	 ├── package.json       # Függőségek és npm parancsok
	 ├── package-lock.json  # Rögzített függőségverziók
	 ├── index.html         # A webalkalmazás HTML belépési pontja
	 ├── public/            # Nyilvános képek és ikonok
	 └── src/
		  ├── App.jsx        # Oldalak, útvonalak és számítások
		  ├── App.css        # Alkalmazásstílusok
		  ├── index.css      # Globális stílusok
		  └── main.jsx       # React belépési pont
```

## Technológiák

- React 19
- Vite 8
- React Router 7 (`HashRouter`)
- KaTeX és `react-katex` a matematikai képletek megjelenítéséhez
- ESLint a kód ellenőrzéséhez

## Hibaelhárítás

- **A `npm` vagy `node` parancs nem található:** telepítsd a Node.js-t, majd nyiss új terminált.
- **Nem indul a projekt:** ellenőrizd, hogy az `azegyenaram` mappában vagy-e, és futtasd az `npm ci` parancsot.
- **Foglalt az 5173-as port:** a Vite felajánl egy másik szabad portot; a terminálban kiírt címet nyisd meg.
- **A módosítás nem látszik az online oldalon:** futtasd újra a buildet, és töltsd fel a friss `dist` mappát, vagy ellenőrizd, hogy a GitHub-módosítás telepítése befejeződött-e.
