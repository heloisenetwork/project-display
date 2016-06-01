# Welcome to Abaelardus
**This app is an simple Webfrontend of the Heloise-Network.**

It was created to explore the indexed data of Heloise Projectpartner. It is meant as an first step to make the aggregated data visible to the user.

## Functions

### Display

Abaelardus just displays the data of a **running** *elasticsearch* instance. Elasticsearch must run on localhost:9200 at the moment.

### Crawling Controller

Furthermore Abaelardus is able to start the configured webcrawler several Heloise Projectpartner. Therefore a Crawler-Server has to be running and configured under

	config/abaelardus_config.js

You can find an sample configuration at

	config/abaelardus_config_stub.js

If you want to setup an Crawler-Server have a look at the [the Heloise Project-Crawler](https://github.com/heloisenetwork/project-crawler).

## Installation

There are no steps necessary to make the app run, since it is a small HTML-Page with some simple js-functionalities. Just open it in a browser.

Remember that a running elasticsearch on localhost is needed.

Have a look at [the Heloise Project-Crawler](https://github.com/heloisenetwork/project-crawler) to get in touch with the index-structure of elasticsearch.

In a nutshell it is

    ElasticsearchUrl/heloise/projectPartnerId/ProfessorId
