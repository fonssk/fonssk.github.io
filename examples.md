---
title: Examples
layout: page
feature_text: |
  A demo of Markdown and HTML includes
feature_image: "https://picsum.photos/2560/600?image=873"
excerpt: "A demo of Markdown and HTML includes"
aside: true
---

# Heading 1

## Heading 2

### Heading 3

#### Heading 4

##### Heading 5

###### Heading 6

<small>A small element</small>

[A link](https://david.darn.es "A link")

Lorem ipsum dolor sit amet, consectetur adip* isicing elit, sed do eiusmod *tempor incididunt ut labore et dolore magna aliqua.

Duis aute irure dolor in [A link](https://david.darn.es "A link") reprehenderit in voluptate velit esse cillum **bold text** dolore eu fugiat nulla pariatur. Excepteur span element sint occaecat cupidatat non proident, sunt _italicised text_ in culpa qui officia deserunt mollit anim id `some code` est laborum.

* An item
* An item
* An item
* An item
* An item

1. Item one
2. Item two
3. Item three
4. Item four
5. Item five

> A simple blockquote

Some HTML...

``` html
<blockquote cite="http://www.imdb.com/title/tt0284978/quotes/qt1375101">
  <p>You planning a vacation, Mr. Sullivan?</p>
  <footer>
    <a href="http://www.imdb.com/title/tt0284978/quotes/qt1375101">Sunways Security Guard</a>
  </footer>
</blockquote>
```

...CSS...

``` css
blockquote {
  text-align: center;
  font-weight: bold;
}
blockquote footer {
  font-size: .8rem;
}
```

...and JavaScript

``` js
const blockquote = document.querySelector("blockquote")
const bolden = (keyString, string) =>
  string.replace(new RegExp(keyString, 'g'), '<strong>'+keyString+'</strong>')

blockquote.innerHTML = bolden("Mr. Sullivan", blockquote.innerHTML)
```

`Single line of code`

## Advanced elements

### Highlighted section example

{% capture inverted_content %}

*„It isn't time yet. It can't be tea-time even, leastways not in decent places where there is tea-time. “*

<div style="text-align: right"> Samwise Gamgee </div>

{% endcapture %}

{% include inverted_section.html content=inverted_content %}


### Abmonition examples

{% include admonition.html
  type="info"
  content="FYI this should not get away from your attention." %}

{% include admonition.html
  type="warning"
  content="This is a big warning!" %}

{% include admonition.html
  type="error"
  content="This is a bad error!" %}

{% include qa_admonition.html
  question="Q: How many fingers do you have?"
  answer="A: Many little fingers." %}


### Multiple column examples

{% capture column1_content %}
  <h4>Column 1 Header</h4>

  This is the content for column 1.

  {% include admonition.html
    type="info"
    content="This is an admonition inside column 1." %}

  ![An image](path/to/image.jpg)

  [A button](https://example.com){:.button}
{% endcapture %}

{% capture column2_content %}
  ### Column 2 Header (will be fixed in the future)

  This is the content for column 2.

  {% include qa_admonition.html
    question="Can I use admonitions in columns?"
    answer="Yes, you can!" %}

  <ul>
    <li>List item 1</li>
    <li>List item 2</li>
  </ul>

  {% include icon.html id='twitter' title='Twitter' %}
{% endcapture %}

{% include two_columns.html
  column1=column1_content
  column2=column2_content
%}


{% capture column1_content %}
  <h4>Column 1</h4>
  Content for column 1
  {% include admonition.html type="info" content="Info in column 1" %}
{% endcapture %}

{% capture column2_content %}
  <h4>Column 2</h4>
  Content for column 2
  {% include admonition.html type="warning" content="Warning in column 2" %}
{% endcapture %}

{% capture column3_content %}
  <h4>Column 3</h4>
  Content for column 3
  {% include admonition.html type="error" content="Error in column 3" %}
{% endcapture %}

{% include three_columns.html
  column1=column1_content
  column2=column2_content
  column3=column3_content
%}


## HTML Includes

### Demo map embed

{% include map.html id="1UT-2Z-Vg_MG_TrS5X2p8SthsJhc" title="Coffee shop map" %}

``` html
{% raw %}{% include map.html id="XXXXXX" title="Coffee shop map" %}{% endraw %}
```

### Button include

{% include button.html text="A button" link="https://david.darn.es" %}

{% include button.html text="A button with icon" link="https://twitter.com/daviddarnes" icon="twitter" %}

``` html
{% raw %}{% include button.html text="A button" link="https://david.darn.es" %}
{% include button.html text="A button with icon" link="https://twitter.com/daviddarnes" icon="twitter" %}{% endraw %}
```

### Icon include

{% include icon.html id="twitter" title="twitter" %} [{% include icon.html id="linkedin" title="twitter" %}](https://www.linkedin.com/in/daviddarnes)

``` html
{% raw %}{% include icon.html id="twitter" title="twitter" %}
[{% include icon.html id="linkedin" title="twitter" %}](https://www.linkedin.com/in/daviddarnes){% endraw %}
```

### Video include

{% include video.html id="zrkcGL5H3MU" title="Siteleaf tutorial video" %}

``` html
{% raw %}{% include video.html id="zrkcGL5H3MU" title="Siteleaf tutorial video" %}{% endraw %}
```


### Image includes

{% include figure.html image="https://picsum.photos/600/800?image=894" caption="Image with caption" width="300" height="800" %}

{% include figure.html image="https://picsum.photos/600/800?image=894" caption="Right aligned image" position="right" width="300" height="800" %}

{% include figure.html image="https://picsum.photos/600/800?image=894" caption="Left aligned image" position="left" width="300" height="800" %}

{% include figure.html image="https://picsum.photos/1600/800?image=894" alt="Image with just alt text" %}

``` html
{% raw %}{% include figure.html image="https://picsum.photos/600/800?image=894" caption="Image with caption" width="300" height="800" %}

{% include figure.html image="https://picsum.photos/600/800?image=894" caption="Right aligned image" position="right" width="300" height="800" %}

{% include figure.html image="https://picsum.photos/600/800?image=894" caption="Left aligned image" position="left" width="300" height="800" %}

{% include figure.html image="https://picsum.photos/1600/800?image=894" alt="Image with just alt text" %}{% endraw %}
```

## Special

### Simple title with cursor

# FONS Slovensko
<div class="animated-text"><span id="typed-text"></span></div>

### Advanced title with cursor

<div class="animated-text-twoline">
  <div id="typed-line1">FONS Slovensko</div>
  <div id="typed-line2"></div>
</div>
