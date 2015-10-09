# NginY
NginY is intended to provide a lightweight app server for overlaying LDAP authentication over static files, somewhat more flexibly than NginX's LDAP module does.

## Usage
There are two ways to use NginY.  You can either include it in a project and use it like any other express app module, or you can run it from the command line and point it at a directory of static files.

### As a module
```sh
npm install git+http://git.irslabs.org/irslabs-dev-team/nginy.git --save
```
You would then need to require the module in your own node.js code and start the server:
```sh
var app = require('nginy');
app.listen(3000);
console.log('NginY started on port 3000');
```
This will assume the current working directory is the file root for any static files to be served.

### As a command line utility
Either install globally:
```sh
npm install -g git+http://git.irslabs.org/irslabs-dev-team/nginy.git
nginy
```
or locally
```sh
npm install git+http://git.irslabs.org/irslabs-dev-team/nginy.git
./bin/nginy
```

## Options
Options can be passed either as command line arguments or as environmental variables.

**NODE_ENV, --env** : The applicaton environment (development, production, test)
    _development_

**PIDFILE_PATH, --pidfile** : The location of the pidFile acting as handle to the running cluster. _./pids/cluster.pid_

**PORT, --port** : The port to bind the server to.
_3000_

**DIRECTORY, --dir** : The directory of static files to serve.
_./_

**COOKIE_SECRET, --secret** : Random string to use for encrypting session cookie,the longer the better.

** LDAP_URL, --ldap-server** : The Url to the ldap server

**LDAP_ADMIN, --ldap-admin** : The DN of a user qualified to do LDAP queries

**LDAP_PASSWORD, --ldap-password** : The password for the LDAP admin

**LDAP_BASE, --ldap-base**: The LDAP search base (e.g. ou=Users,dc=example,dc=org)
