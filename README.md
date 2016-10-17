# angular-seed — the seed for AngularJS apps

This project is an application skeleton for a typical [AngularJS](http://angularjs.org/) web app.
You can use it to quickly bootstrap your angular webapp projects and dev environment for these
projects.

The seed contains a sample AngularJS application and is preconfigured to install the Angular
framework and a bunch of development and testing tools for instant web development gratification.

### Run the Application

We have preconfigured the project with a simple development web server.  The simplest way to start
this server is:

```
npm start
```

Now browse to the app at `http://localhost:8000/index.html`.


## Directory Layout

```
app/                    --> all of the source files for the application
  app.css               --> default stylesheet
  components/           --> all app specific modules
    components.js         --> module to bind components modules
    persontooltip/              --> directive to show person nsme with tooltip
    teammanager/                --> directive for 'right side' to manage developer teams
    typeahead/                  --> directive implements typeahead functionality
  features/             --> contains all app factories
    features.js           --> module to bind features modules
    commondataexchange.js --> factory for sharing data between controllers and directives
    personfactory.js      --> factory gets data from staff.json
    teamfactory.js        --> manages team related data loading and saving
  tab1/                 --> the tab1 view template and logic
  tab2/                 --> the tab2 view template and logic
  app.js                --> main application module
  index.html            --> app layout file (the main html file of the app)
  staff.json            --> sample data in json format
README.md             --> this file
```