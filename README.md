# Middleman Portfolio Website

This repo contains a working static website written with [Middleman](https://middlemanapp.com/), integrated with content coming from this [DatoCMS administrative area](https://dashboard.datocms.com/account/sites/template?name=Portfolio&siteId=604).

## Usage

First, install the dependencies of this project:

```
bundle install
npm install
```

Add an `.env` file containing the read-only API token of your DatoCMS site:

```
echo 'DATO_API_TOKEN=abc123' >> .env
```

Then, to run this website in development mode (with live-reload):

```
bundle exec middleman server
```

To build the final, production ready static website:

```
bundle exec middleman build
```

The final result will be saved in the `public` directory.

## About

The goal of this project is to show how easily you can create static sites using the content (text, images, links, etc.) stored on [DatoCMS](https://www.datocms.com). This project is configured to fetch data from a specific administrative area using [the API DatoCMS provides](https://docs.datocms.com/api/reference.html).

You can find further information about how to integrate DatoCMS with Middleman in [our documentation](https://docs.datocms.com/middleman/overview.html).

This websites uses:

* [Yarn](https://yarnpkg.com/) as JS package manager;
* [Webpack](https://webpack.github.io/) to compile and bundle assets (Sass/ES2015 JS);
* [middleman-dato](https://github.com/datocms/middleman-dato) gem to integrate the website with DatoCMS.
