
/**
 * Main AngularJS Web Application
 */
var app = angular.module('storeWebApp', ['ngRoute', 'viewhead']);

/**
 * Configure the Routes
 */
app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    // Home
    .when("/", {templateUrl: "partials/home.html", controller: 'PageCtrl'})
    
    // Navigation Menu Pages
    .when("/about", {templateUrl: "partials/about.html", controller: 'PageCtrl'})
    .when("/faq", {templateUrl: "partials/faq.html", controller: 'PageCtrl'})
    .when("/contact", {templateUrl: "partials/contact.html", controller: 'PageCtrl'})
    .when("/baby",  {templateUrl: "partials/baby.html", controller: 'PageCtrl'})
    .when("/kids",  {templateUrl: "partials/kids.html", controller: 'PageCtrl'})
    .when("/mens",  {templateUrl: "partials/mens.html", controller: 'PageCtrl'})
    .when("/womens",  {templateUrl: "partials/womens.html", controller: 'PageCtrl'})
    .when("/shop-login",  {templateUrl: "partials/shop-login.html", controller: 'PageCtrl'})
    .when("/sign-up",  {templateUrl: "partials/sign-up.html", controller: 'PageCtrl'})
    
    // Product Detail Pages
    .when("/babycrew",  {templateUrl: "partials/babycrew.html", controller: 'PageCtrl'})
    .when("/baby-v",  {templateUrl: "partials/baby-v.html", controller: 'PageCtrl'})
    .when("/kids-crew",  {templateUrl: "partials/kids-crew.html", controller: 'PageCtrl'})
    .when("/kids-v",  {templateUrl: "partials/kids-v.html", controller: 'PageCtrl'})
    .when("/mens-crew",  {templateUrl: "partials/mens-crew.html", controller: 'PageCtrl'})
    .when("/mens-v",  {templateUrl: "partials/mens-v.html", controller: 'PageCtrl'})
    .when("/womens-crew",  {templateUrl: "partials/womens-crew.html", controller: 'PageCtrl'})
    .when("/womens-v",  {templateUrl: "partials/womens-v.html", controller: 'PageCtrl'})
    
    // Checkout Confirmation Pages
    .when("/checkout-bc",  {templateUrl: "partials/checkout-bc.html", controller: 'bcCheckoutCtrl'})
    .when("/checkout-bv",  {templateUrl: "partials/checkout-bv.html", controller: 'bvCheckoutCtrl'})
    .when("/checkout-kc",  {templateUrl: "partials/checkout-kc.html", controller: 'kcCheckoutCtrl'})
    .when("/checkout-kv",  {templateUrl: "partials/checkout-kv.html", controller: 'kvCheckoutCtrl'})
    .when("/checkout-mc",  {templateUrl: "partials/checkout-mc.html", controller: 'mcCheckoutCtrl'})
    .when("/checkout-mv",  {templateUrl: "partials/checkout-mv.html", controller: 'mvCheckoutCtrl'})
    .when("/checkout-wc",  {templateUrl: "partials/checkout-wc.html", controller: 'wcCheckoutCtrl'})
    .when("/checkout-wv",  {templateUrl: "partials/checkout-wv.html", controller: 'wvCheckoutCtrl'})
    
	// Form/Login Page Secure Zone redirect
	.when("/my-account",  {templateUrl: "partials/my-account.html", controller: 'PageCtrl'})
	.when("/new-account",  {templateUrl: "partials/new-account.html", controller: 'PageCtrl'})
	
    
    
    /* else 404
    .otherwise({redirectTo: '#'});
    */
    .otherwise("/404", {templateUrl: "partials/404.html", controller: 'PageCtrl'});
    
    // ("/404", {templateUrl: 'partials/404.html', controller: 'PageCtrl'});
    
}]);

/* Location (test) */
app.config(['$locationProvider', function($locationProvider) {
  $locationProvider.hashPrefix('');
}]);


/**
 * Controls all other Pages (original)
 */
 // app.controller('PageCtrl', function (/* $scope, $location, $http */) {
// });

/**
 * Controls all other pages (TEST)
 */ 


app.controller('PageCtrl', function (/* $scope, $location, $http */) {
});








  
/* Controls FAQ Page Panel */

$(function () {
  $('#toggleAccordions').on('click', function(e) {
    $('.panel-collapse').collapse('toggle');
  })
});

/**
 * Controls purchase ID generators on Checkout Confirmation Pages
 */
 	// Baby Crew Controller
 app.controller('bcCheckoutCtrl', function($scope) { 
  $scope.bcPurchRNG = 0;
  	(function () {
    	$scope.bcPurchRNG = 'bc' + Math.random().toString(36).substr(2,9);
  		}
  	());
  	  console.log("Baby Crew Checkout Controller reporting for duty.");
});

	// Baby V Controller
 app.controller('bvCheckoutCtrl', function($scope) { 
  $scope.bvPurchRNG = 0;
  	(function () {
    	$scope.bvPurchRNG = 'bv' + Math.random().toString(36).substr(2,9);
  		}
  	());
  	  console.log("Baby V Checkout Controller reporting for duty.");
});

	// Kids Crew Controller
 app.controller('kcCheckoutCtrl', function($scope) { 
  $scope.kcPurchRNG = 0;
  	(function () {
    	$scope.kcPurchRNG = 'kc' + Math.random().toString(36).substr(2,9);
  		}
  	());
  	  console.log("Kids Crew Checkout Controller reporting for duty.");
});
	
	// Kids V Controller
 app.controller('kvCheckoutCtrl', function($scope) { 
  $scope.kvPurchRNG = 0;
  	(function () {
    	$scope.kvPurchRNG = 'kv' + Math.random().toString(36).substr(2,9);
  		}
  	());
  	  console.log("Kids V Checkout Controller reporting for duty.");
});

	// Mens Crew Controller
 app.controller('mcCheckoutCtrl', function($scope) { 
  $scope.mcPurchRNG = 0;
  	(function () {
    	$scope.mcPurchRNG = 'mc' + Math.random().toString(36).substr(2,9);
  		}
  	());
  	  console.log("Mens Crew Checkout Controller reporting for duty.");
});
	
	// Mens V Controller
 app.controller('mvCheckoutCtrl', function($scope) { 
  $scope.mvPurchRNG = 0;
  	(function () {
    	$scope.mvPurchRNG = 'mv' + Math.random().toString(36).substr(2,9);
  		}
  	());
  	  console.log("Mens V Checkout Controller reporting for duty.");
});

	// Womens Crew Controller
 app.controller('wcCheckoutCtrl', function($scope) { 
  $scope.wcPurchRNG = 0;
  	(function () {
    	$scope.wcPurchRNG = 'wc' + Math.random().toString(36).substr(2,9);
  		}
  	());
  	  console.log("Womens Crew Checkout Controller reporting for duty.");
});

	// Womens V Controller
app.controller('wvCheckoutCtrl', function($scope) { 
  $scope.wvPurchRNG = 0;
  	(function () {
    	$scope.wvPurchRNG = 'wv' + Math.random().toString(36).substr(2,9);
  		}
  	());
  	  console.log("Womens V Checkout Controller reporting for duty.");
});
	
/*  Testing based on: https://adobe.ly/2FJlr5r  */


	// Set new params in view top (global page params)
	$rootScope.$on('$routeChangeSuccess', function() { // adding event (not in docs)
		// Update Data Layer
		digitalData.page.pageID = $route.current.title;
		digitalData.page.pageName = 'Teehugger:'+document.title;
		digitalData.page.destinationURL = encodeURIComponent(window.location.href);
		
		// Custom Event - Event View Start - triggers AT call
		var evt = new CustomEvent('event-view-start');
		document.body.dispatchEvent(evt);
	});

	// View bottom - triggers AA call
	$rootScope.$on('$viewContentLoaded', function(event) {
		// Custom Event - Event View End
		var evt=new CustomEvent('event-view-end');
		document.getElementById('app').dispatchEvent(evt);
	}); 

/*  
*  To set params on Buy Now button
*/
	// Baby Crew - Buy Button Params
	$('a.btn.btn-checkout-bc').click(function(){var event=new CustomEvent('event-action-trigger',{
		detail: {
			action: 'purchase',
			productID: '12345',
			productName: 'Baby Crew',
			productTotalRevenue: '21.98',
			productTotalUnits: '2',
			purchaseID: ( $scope.bcPurchRNG() )
	    },		
			pageName: document.title,
			linkName: 'buy-now'
		}
	);
	document.querySelector('a.btn.btn-checkout-bc').dispatchEvent(event);
});





