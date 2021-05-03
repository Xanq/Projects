                Super skrócna wersja @forward i @use.

w utilities mam \_index.scss -
@forward '../utilities/variables';
@forward '../base/typography';

------w innych plikach mam komponenty---------
@use '../utilities';

body {
background-color: utilities.$red;
}
do nich wstrzykuje pliki z index.scss

---

            instalacja sass

1. npm init -y -> default with no questions
2. npm install sass --save-dev -> save-dev will automatically install the things
   1. w node_modules/sass mam sass.dart.js

## sass --watch src/scss:dist/css to odpala sass

z tym będzie problem, bo javascript i inne pliki będą dodawane w złej kolejności i trzeba dodać parcel

                parcel

1.  install parcel-bundler --save-dev (mozna tez -D)
2.  link w css (podajesz scss/main.scss) parcel tego wymaga
3.  dodajemy scripts dla parcela
    a. "dev": "parcel src/index.html",
    b. "build": "parcel build src/index.html"

    wiec npm run dev/build

            package.json

    {
    "name": "bookmark",
    "version": "1.0.0",
    "description": "![Design preview for the Bookmark landing page coding challenge](./design/desktop-preview.jpg)",
    "main": "index.js",
    "scripts": {
    "dev": "parcel src/index.html",
    "build": "parcel build src/index.html"
    },
    "author": "",
    "license": "ISC",
    "devDependencies": {
    "parcel-bundler": "^1.12.5",
    "sass": "^1.32.11"
    }
    }
