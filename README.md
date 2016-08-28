# SunPig Front End Assignment

## Installation

This project requires [Node](http://nodejs.org) Version 5 or greater installed on the users machine in order to install the node packages required.
It is advised that the user install [gulp](http://gulpjs.org) and [browserify](http://browserify.org) globally using the command:

    npm install -g gulp browserify

Inside the root directory run the following command to install required packages and development dependencies:

    npm install

 ## Build the application

The application will first need to be build using two mains tasks in gulp, both of which can be triggered by running the following cli command in the root directory:

     gulp

## Start a server

Spin up a localhost by using the following [python](http://python.org) command:

    python -m SimpleHTTPServer [port]

e.g.

    python -m SimpleHTTPServer 8000

 Simply visit [localhost:8000](http://localhost:8000) to view the application

 ### Notes

 The prototype application doesn't included any persistent state such as localStorage.

 As enquired in the brief, the final API would ideally be comprised of micro services (that can be cross referenced) so that a single request (with parameters) can return a specific data set (such as drinks filtered by pub).
 This would allow data to be retrieved in fewer requests.