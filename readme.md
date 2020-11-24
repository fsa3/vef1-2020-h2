# Hópaverkefni 2 - Vefforritun 1

Verkefnið má nálgast á vef með því að smella [hér](https://notendur.hi.is/~fsa3/vefforritun/hopverk2)

## Höfundar

* Björn Borgar Magnússon, [bbm5@hi.is](mailto:bbm5@hi.is)
  * github: [`BearPays`](https://github.com/BearPays)
* Fannar Steinn Aðalsteinsson, [fsa3@hi.is](mailto:fsa3@hi.is)
  * github: [`fsa3`](https://github.com/fsa3)

## Skriptur og keyrsla á verkefni

Eftirfarandi skriptur eru til staðar í verkefni: 

* `npm run install` - sækir öll þau npm tól sem notuð eru í verkefninu
* `npm run browser-sync` - keyrir browser-sync sem fylgist með breytingum á [`index.html`](./index.html), [`video.html`](./video.html) og `styles.css`
* `npm run sass` - þýðir úr sass yfir í css innihald skráarinnar [`styles.scss`](./styles.scss) og skrifar í skrá `styles.css`
* `npm run rollup` - pakkar JavaScript kóða og gerir aðgeingilegan í möppu `./dist`
* `npm run dev` - keyrir skripturnar `sass`, `rollup` og `browser-sync` samhliða
* `npm run stylelint` - keyrir stylelint á allar `.scss` skrár
  * Notar reglurnar `stylelint-config-sass-guidelines` og `stylelint-config-standard`
* `npm run eslint` - keyrir eslint á allar `.js` skrár
  * Notar reglur skilgreindar í [`.eslintrc.js`](./.eslintrc.js)
* `npm run test` - keyrir skripturnar `stylelint` og `eslint` samhliða

## Uppsetning verkefnis

Í rót verkefnis eru [`index.html`](./index.html) (upphafssíða), [`video.html`](./video.html) (vídeósíða), [`styles.scss`](./styles.scss) (stílar verkefnis importaðir í eina skrá), [`videos.json`](./videos.json) (gagnagrunnur myndbanda) ásamt skrám sem halda utan um stillingar á git, ritli, stylelint, eslint og npm tólum.

### Í rót eru síðan eftirfarandi möppur með eftirfarandi skrám:

* [`/img`](./img) - inniheldur allar myndir verkefnis
* [`/videos`](./videos) - inniheldur myndir og myndbönd allra myndbanda
* [`/src`](./src)
  * [`/styles`](./src/styles) - inniheldur alla stíla verkefnis skipt niður í `.scss` skrár
    * [`config.scss`](./src/styles/config.scss) - inniheldur breytur
    * [`global.scss`](./src/styles/global.scss) - inniheldur 'global' stíla á 'elementum' sem eiga við allar síður verkefnisins
    * [`grid.scss`](./src/styles/grid.scss) - inniheldur klasana fyrir grid, notar for-lykkju til þess að ítra út grid klösum
    * [`video.scss`](./src/styles/video.scss) - inniheldur stíla fyrir síðu sem spilar myndband
    * [`videobox.scss`](./src/styles/videobox.scss) - inniheldur stíla fyrir lista af myndböndum
  * [`/lib`](./src/lib) - safn af JavaScript skrám sem [`index.js`](./src/index.js) notar
    * [`data.js`](./src/lib/data.js) - sækir gögn úr [`videos.json`](./videos.json)
    * [`homepage.js`](./src/lib/homepage.js) - setur upp forsíðu verkefnis
    * [`utils.js`](./src/lib/utils.js) - inniheldur ýmis föll sem aðrar skrár nota
    * [`videopage.js`](./src/lib/videopage.js) - setur upp síðu sem spilar ákveðið myndband og sér um spilun á því myndbandi
  * [`index.js`](./src/index.js) - JavaScript skráin sem verkefnið keyrir
