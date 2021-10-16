# Item Manager App

## Description

This is a Single Page Application that has the purpose of emulating a platform where users can view different products incorporated by other users

### Features

- The user views a list of 5 items
- The user can change the page to view other items
- It has a search engine in the central part to be able to search by title, description, email, price
- You can sort from highest to lowest for each of those attributes
- It is possible to create a list of favorites by pressing the heart located inside each card
- To view the list of favorites, you only need to press the heart of the main page and a modal will open with all of them
- In the favorites list you can search
- And also remove products from favorites

### Peculiarities

A server has been created to manage these functionalities in the most realistic way possible.

The Architecture approach is by features, each folder is a feature and all the different features would come inside, without adding unnecessary nesting and encompassing everything that a feature needs in the same folder.

The commits have been made following the guidelines of [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) based on the [Angular convention](https://github.com/angular/angular/blob/22b96b9/CONTRIBUTING.md#-commit-message-guidelines)

## Installation

1. Make a clone of the project:
2. Do `npm install` to install all the libraries used

### Running

- Server: `npm run server` - will run in the port: `8080`
- App: `npm start` - will run in the port: `http://localhost:4200/`

### Tests

- To run the server tests: 
    - `npm run server:test`
    - `npm run server:coverage`

- To run the app tests:
    - `npm run test`
    - `npm run test:coverage`

## Author

Abel Hernando
