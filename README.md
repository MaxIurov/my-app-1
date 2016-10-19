FR_01 myurov

Review comments:

1. delete id property from $rootscope
  --> added getNewTeamId function, newTeamId is now inside teamFactory
2. defer - https://habrahabr.ru/post/183008/
  --> added personHttpService that reads and caches json file data
3. https://docs.angularjs.org/api/ng/type/$rootScope.Scope - > $on(name, listener);
  --> now i know how to unsubscribe from event, but here i need to monitor changes to sync parts of application
————————
4. почитать - > https://docs.angularjs.org/api/ng/filter/filter
  --> added $filter (in Tab2Ctrl Controller) and .filter (myCustomFilter for typeahead Directive)
5. https://docs.angularjs.org/api/ng/type/$rootScope.Scope#$digest
6. http://blog.thoughtram.io/angularjs/2014/10/14/exploring-angular-1.3-one-time-bindings.html
  --> added some one time bindings

### Run the Application

The simplest way to start this server is:
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
    personfactory.js      --> factory gets data from personHttpService
    teamfactory.js        --> manages team related data loading and saving
    personhttpservice.js  --> service to read and cache json file
  tab1/                 --> the tab1 view template and logic
  tab2/                 --> the tab2 view template and logic
  app.js                --> main application module
  index.html            --> app layout file (the main html file of the app)
  staff.json            --> sample data in json format
README.md             --> this file
```