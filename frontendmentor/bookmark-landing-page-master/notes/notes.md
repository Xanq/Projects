1. ***
   Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy Unrestricted - powershell

---

2.
3.
4. Tworze npm init z cmd
5. wypelniam szkielet projektu
6. dodaje script do package.json

---

            *************SASS**************

Jest jakiś nowy sass który posiada @use @forward
można go chyba zainstalować przez terminal

1. npm init -y -> default with no questions
2. npm install sass --save-dev -> save-dev will automatically install the things
   1. w node_modules/sass mam sass.dart.js

## sass --watch src/scss:dist/css to odpala sass

                (src/scss tam jest main.scss a w dist/css tam pliki css)

\***\*\*\*\*\***\*\***\*\*\*\*\***PARCEL**\*\*\*\***\*\***\*\*\*\***\***\*\*\*\***\*\***\*\*\*\***

1. small problem
   sass isn't paying attetion to files in src. Sass is going to compile to my distribution (dist/css)
   I wanna JS to end up in there

**_Parcel_**

składa do całości projekt, zapewniając wszystkie zależności do każdego pliku

1. install parcel-bundler --save-dev (mozna tez -D)
2. link w css (podajesz scss/main.scss) parcel tego wymaga
3. dodajemy scripts dla parcela
   a. "dev": "parcel src/index.html",
   b. "build": "parcel build src/index.html"

   wiec npm run dev/build

---

**\*\*\*\***\*\***\*\*\*\***SASS\***\*\*\*\*\*\*\***
@use instead of @import

@use "utilities/variables";
@use "base/reset";
@use "base/typography";

body {
background: variables.$red;  
}

@use '../utilities/variables as v'; v.color
@use '../base/typography as \*'; tylko zmienna bez v.

---

---
