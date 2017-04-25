
// create our angular app and inject ngAnimate and ui-router
// =============================================================================
angular.module('formApp', ['ngAnimate', 'ui.router'])

// configuring our routes
// =============================================================================
.config(function($stateProvider, $urlRouterProvider) {

    $stateProvider

        // route to show our basic form (/form)
        .state('form', {
            url: '/form',
            templateUrl: 'form.html',
            controller: 'formController'
        })

        // nested states
        // each of these sections will have their own view
        // url will be nested (/form/patient)
        .state('form.patient', {
            url: '/patient',
            templateUrl: 'form-patient.html'
        })

        // url will be /form/symptoms
        .state('form.symptoms', {
            url: '/symptoms',
            templateUrl: 'form-symptoms.html'
        })

        // url will be /form/diagnosis
        .state('form.diagnosis', {
            url: '/diagnosis',
            templateUrl: 'form-diagnosis.html'
        })

        // url will be /form/payment
        .state('form.payment', {
            url: '/payment',
            templateUrl: 'form-payment.html'
        })

    // catch all route
    // send users to the form page
    $urlRouterProvider.otherwise('/form/patient');
})

// our controller for the form
// =============================================================================
.controller('formController', function($scope) {

    // we will store all of our form data in this object
    $scope.formData = {};

    // function to process the form
    $scope.processForm = function() {
        alert('awesome!');
    };

});
