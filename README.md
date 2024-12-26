# Web Fonsu Slovensko

## Použití

### Přes GitHub (přes mobil, menší úpravy jen textu)

1. V mobilu klikni na `Code`
2. Vyber příslušný soubor pro úpravu. Soubory s obsahem končí na `.md` (Markdown). **Titulní stránka je `index.md`.**
3. Pro úpravu klikni na `...` (nahoře vpravo) > `Edit file`.
4. Po úpravách klikni na zelená tlačítka `Commit changes` a `Commit`.
5. Změny se za pár minut projeví na webu: [https://fonssk.github.io/](https://fonssk.github.io/).

> [!CAUTION]
> Úpravy na špatných místech mohou způsobit nefunkčnost webu. Ujisti se, že touto metodou upravuješ pouze text stránky. Na větší úprravy, obrázky apod., použij lokální metodu.

### Lokálně (přes PC, větší úpravy)

1. Postupuj podle [Jekyll installation intructions](https://jekyllrb.com/docs/installation/).
2. `git clone git@github.com:fonssk/fonssk.github.io.git fonssk`
3. `cd fonssk`
4. Poprvé je potřeba build: `bundle install`
5. Vygeneruj stránku: `bundle exec jekyll serve`

Potom se dostaneš na web přes `http://localhost:4000/`. Stránka se automaticky přegeneruje, pokud uložíš jakýkoliv soubor, krom `_config.yml`.

Po úpravách je potřeba commitnout změny a pushnout je na GitHub. Dej je do nové brach:
```
git switch -c feat/my-new-feature
# nebo
git switch -c fix/my-new-bugfix
```

Projdi si změny a commitni je:
```
git add -p
git commit -m "Write your commit message in imperative mood"
```

Pushni (podle nazvu vetve):
```
git push -u origin feat/my-new-feature
```

Klikni na link a pošli push request (PR).

## What is this?

This is a website for the FONS Slovensko, czech and slovak scout and non-scout adult summer course.

The website is built upon the [Jekyll](https://jekyllrb.com/) and the [alembic](https://github.com/daviddarnes/alembic) with extra implemented features, such as:
- Abmonition blocks
- Multiple column layout
- Interactive boxes sharing the same layout
- Animated top bar
- Cursor text effect
