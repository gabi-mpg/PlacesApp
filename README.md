# PlacesApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.0.5. It uses Angular Material, FlexLayout and Bootstrap 5.

## Description

This website has been built as a challengue during a job selection process. It is a simple angular website where places information near a given location can be searched. This information is retrieved from the FOURSQUARE Places API. Also, Google Maps API is used in order to show the location of the places searched.

In the website, record information about the places visited is also available in the "List Recent" menu item.

Feel free to explore and do not hesitateto let me know any possible improvments you see. Have fun!

## Instalation

Clone the repository using the given link and run the next command:

```bash
npm install
```

All the packages will be installed and now you will need to create the environment file.

## Environment

This project uses enviroment variables, in order to succefully run the project, it is needed to have a .env file in the root folder of the project, containing the next variables:

- Foursquare Api key
- Google Maps Api key

These two variables are used to run the project and satisfactory retrieve the information from the needed APIs.

Please, paste the next conde onto the .env file in order to use the project and fill with your own credentials.

```bash
{
    foursquareApiKey: '<YOUR FOURSQUARE API KEY HERE>',
    googleMapsApiKey: '<YOUR GOOGLE MAPS API KEY HERE>'
}
```

## Running the application in dev Mode

After the project has been satisfactory cloned, paste or type one of the next commands in the terminal to lauch the application:

```bash
ng serve
ng serve -o
```

Navigate to `http://localhost:4200/` in case you used the first command, the second command automatically open the brower page. The application will automatically reload if you change any of the source files.

## Using the application in production

Navigate to the next link in order to use the application already deployed:

<https://places-app-gabi-mpg.netlify.app>

## Authors and acknowledgment

- Author: Gabriela Mercado Pérez
- Cover Photo About: <https://www.wallpaperbetter.com/es/hd-wallpaper-zqkga>
- Cover Photo Home: <https://www.pinterest.co.uk/pin/407998047499385545/>
