console.log('Inside client.js');

const app = angular.module('myApp', []);

app.controller('GalleryController', function() {
    console.log('GalleryController loaded');
    
    let gallery = this;

    gallery.photos = placeholder.data;
    
    gallery.toggleDesc = toggleDesc;

    function toggleDesc(image) {
        image.showText = !image.showText
    };
});


