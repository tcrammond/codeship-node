# codeship-node
Codeship API for node - https://codeship.com/documentation/integrations/api/

## Usage

You'll need to set up with your API key first (find it [here](https://codeship.com/user/edit)):
```javascript
var Codeship = require('codeship-node');
var codeship = new Codeship({apiKey: 'abc123'});
```

Each method is nested under it's resource name and requires a callback. Example of retrieving all projects:
```javascript
codeship.projects.list(function(err, projects) {
  if (err) {
    // do stuff
  }
  
  console.log('Projects!', projects);
}):
```

### Available methods

* projects
 * `get(project_id, cb)`
 * `list(cb)`
