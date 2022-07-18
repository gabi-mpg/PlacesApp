# PlacesApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.0.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Description

This website has been built as an assigment while an internship. It is a simple website where companies can register in different courses. The first page (Info Day), is a registration page where they must succefully fullfill three different steps with different information.

After they've completed the form, their information will be added to the Companies Info
page, where all companies information is displayed.

There is a third page (Courses) where the courses information is displayed.

## Running the application in dev Mode

After the project has been satisfactory cloned, paste the next command onto the terminal to lauch the application:

```bash
npm serve
```

## Requirements

For its correct functionality, Node.js and MongoDB are required. In case you haven't installed these programs, please, do so.

## Environment

This project uses enviroment variables, in order to succefully run the project, it is needed to create a .env file in the root folder of the project, containing the next variables:

- Server host
- Port used
- Database user
- Database password
- MongoDB cluster to connect to
- Name of the database you want to connect to
- Boolean specifying if you rather retry writes

All these variables are used to run the project and connect to the MongoDB database used. In case you don't have any personal credentials, it is posible to use a default configuration which will allow you to read from the database and use the project. If you want to modify the database in any way, credentials with higuer privilegies are needed.

Please, paste the next conde onto the .env file created, in order to use the project in a basic level of privilegies.

```bash
{
    HOST = localhost
    PORT = 2017
    DB_USER = "guest"
    DB_PASSWORD = "lrmihy0eVw55Kepv"
    DB_CLUSTER = "cluster0.0xy1j.mongodb.net"
    DATABASE = "assigment"
    RETRY_WRITES = "true"
}
```

## Authors and acknowledgment

- Author: Gabriela Mercado Pérez
