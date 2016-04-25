var elixir = require('laravel-elixir');
var bowerDir = './vendor/bower_components/';
var gulp = require('gulp');

elixir(function (mix) {

    mix.copy([
        bowerDir + 'bootstrap/fonts',
        bowerDir + 'font-awesome/fonts'
    ], 'public/assets/dashboard/fonts')

    //Copy Sweetalert assets to public
    mix.copy(bowerDir + 'sweetalert/dist/sweetalert.css', 'public/css')
    mix.copy(bowerDir + 'sweetalert/dist/sweetalert.min.js', 'public/js')

    //Copy Datetimepicker and momentum assets to public
    mix.copy(bowerDir + 'eonasdan-bootstrap-datetimepicker/build/css/bootstrap-datetimepicker.min.css', 'public/css')
    mix.copy(bowerDir + 'eonasdan-bootstrap-datetimepicker/build/js/bootstrap-datetimepicker.min.js', 'public/js')
    mix.copy(bowerDir + 'moment/min/moment.min.js', 'public/js')

    //Copy jquery, bootstrap and Particles.js to js folder
    mix.copy(bowerDir + 'jquery/dist/jquery.min.js', 'public/js')
    mix.copy(bowerDir + 'bootstrap/dist/js/bootstrap.min.js', 'public/js')
    mix.copy(bowerDir + 'particles.js/particles.min.js', 'public/js/auth/')

    //Dashboard assets
    mix.copy('resources/assets/dashboard', 'public/assets/dashboard')

    //Main Vue File
    mix.browserify('../dashboard/js/main.js', 'public/assets/dashboard/js/main.js')
})