# WordCamp Canada Website

This contains the LESS/CSS to customize the site

## Installation

- Clone the repository
- Run ```npm install```

## Building

The CSS is built from LESS files.  You can run ```npm run build``` to build the CSS files, or ```npm run watch``` to have it rebuild on changes.

## LESS

The entry point for the CSS is at ./assets/css/front.less.  It gets compiled to ./dist/front_css.css.   The web site has been configured to use ths dist file from the Github repo on the main branch.  