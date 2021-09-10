# BarChart.js
## Introduction
BarChart.js is a vanilla js library for creating simple bar charts.
The main purpose of this library is to quickly create simple customizable bar charts without any difficulties.
## Getting started
Let's get started using BarChart.js!
First, we need to have a div with class "chart" in our page.

```html
<div id="chart"> </div>
```

After that we need to include JavaScript file in our page. To make that we have to download the "main.bundle.js" from this github repository and include it before the closing ``` </body> ``` tag

Now we want to draw a new chart using our data. BarChart.js creates charts based on json data, like this :

```
{
   "Luke": 34,
   "Mary": 14,
   "Kally": 28,
   "Duran": 19,
   "Emily": 13,
   "Bob": 41,
 }
```
To start using our data we need to wrap it around with ``` <script> ``` tag and and add some "settings", so at the end we will have something like this at the bottom of our html file:

```
<script type="text/javascript" src="main.bundle.js"></script>
<script type="text/javascript">
    settings = $.createSettings({
        "Luke": 34,
        "Mary": 14,
        "Kally": 28,
        "Duran": 19,
        "Emily": 13,
        "Bob": 41,
    });
    $.createBarChart(settings)
</script>
```
