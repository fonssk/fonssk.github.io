# Web Fonsu Slovensko

## What is this?

This is a website for the FONS Slovensko, czech and slovak scout and non-scout adult summer course.

The website is built upon the [Jekyll](https://jekyllrb.com/) and the [alembic](https://github.com/daviddarnes/alembic) with extra implemented features, such as:
- Abmonition blocks
- Multiple column layout
- Interactive boxes sharing the same layout
- Animated top bar
- Cursor text effect

## Instalace

### Lokálně

1. Follow the [Jekyll installation intructions](https://jekyllrb.com/docs/installation/).
2. `git clone LINK_TO_THIS_REPO`
3. `cd fons-web`
4. Poprvé je potřeba build: `bundle install`
5. Vygeneruj stránku: `bundle exec jekyll serve`

Potom se dostaneš na web přes `http://localhost:4000/`. Stránka se automaticky přegeneruje, pokud uložíš jakýkoliv soubor, krom `_config.yml`.
