# practice-gallery

## Start with everything installed, basic file structure, server

- Go over everything to make sure it all makes sense

## Go over steps

[] Static HTML w/images and Bootstrap
[] Add controller
[] Move image information to server
[] ng-repeat and ng-src
[] Like button

Stretch goals:
[] View counter
[] Comments
[] Server side routes
[] Heroku

## Step 1: Go over starter code

- npm install express body-parser angular pg bootstrap@3 --save
- Folder structure
- .gitignore
    - make sure it's at the root level of your project
- server
- vendors folder: bootstrap and angular
- everything sourced into HTML

## Step 2: Static HTML, images, Bootstrap

- ```HTML
    <div class="container-fluid" id="header">
            <h1 class="text-center">Story of My Life</h1>
        </div>
        <div class="container">
            <div class="row">
                <div class="col-xs-4">
                    <h5>Boyd Shenanigans</h5>
                    <img src="images/boyd_shenanigans.jpg" alt="Boyd Shenanigans" class="img-thumbnail">
                </div>
                <div class="col-xs-4">
                    <h5>Wedding Party</h5>
                    <img src="images/wedding_party.jpg" alt="Wedding Party" class="img-thumbnail">
                </div>
                <div class="col-xs-4">
                    <h5>Family</h5>
                    <img src="images/family.jpg" alt="Family" class="img-thumbnail">
                </div>
            </div>
            <div class="row">
                <div class="col-xs-4">
                    <h5>Gatsby</h5>
                    <img src="images/gatsby.jpg" alt="Gatsby" class="img-thumbnail">
                </div>
                <div class="col-xs-4">
                    <h5>Scout</h5>
                    <img src="images/scout.jpg" alt="Scout" class="img-thumbnail">
                </div>
                <div class="col-xs-4">
                    <h5>Eclipse</h5>
                    <img src="images/eclipse.jpg" alt="Eclipse" class="img-thumbnail">
                </div>
            </div>
        </div>
    ```

## Step 3: Add Controller

- Placeholder data in data.js
- ```JavaScript
    let placeholder = {};

    placeholder.data = [
        {id: 1, path: 'images/boyd_shenanigans.jpg', description: 'Chris and I being weird at a wedding', likes: 0, views: 0, showText: false},
        {id: 2, path: 'images/wedding_party.jpg', description: 'Fun picture from our wedding', likes: 0, views: 0, showText: false},
        {id: 3, path: 'images/family.jpg', description: 'My parents and I when I was little', likes: 0, views: 0, showText: false},
        {id: 4, path: 'images/gatsby.jpg', description: 'Gatsby being silly', likes: 0, views: 0, showText: false},
        {id: 5, path: 'images/scout.jpg', description: 'Scout in a rare moment of calm', likes: 0, views: 0, showText: false},
        {id: 6, path: 'images/eclipse.jpg', description: 'Chris, Kassi, and I during the solar eclipse', likes: 0, views: 0, showText: false}
    ];
    ```

- Controller in client.js
- ```JavaScript

    ```
- Source controller (in wrapper div) and app (in body tag) in HTML before testing:
```HTML
    <body ng-app="myApp">
        <div ng-controller="GalleryController as GC" ng-cloak>
            ...
        </div>
    </body>
```



