
/**
 * Main AngularJS Web Application
 */
var app = angular.module('storeWebApp', ['ngRoute']);

/** 
 * Configure the Routes
 */
app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    // Home
    .when("/", {templateUrl: "partials/home.html", controller: 'PageCtrl', title: 'Home',
    	pageType: 'Info', siteSection: 'Home', siteSubsection: 'Menu'})
    
    // Navigation Menu Pages
    .when("/about", {templateUrl: "partials/about.html", controller: 'PageCtrl', title: 'About',
    	pageType: 'Info', siteSection: 'Home', siteSubsection: 'Menu'})
    	
    .when("/faq", {templateUrl: "partials/faq.html", controller: 'PageCtrl', title: 'FAQ',
    	pageType: 'Info', siteSection: 'Home', siteSubsection: 'Menu'})
    	
    .when("/contact", {templateUrl: "partials/contact.html", controller: 'PageCtrl', title: 'Contact',
    	pageType: 'Info', siteSection: 'Home', siteSubsection: 'Menu'})
    	
    .when("/baby",  {templateUrl: "partials/baby.html", controller: 'PageCtrl', title: 'Product:Category:Baby',
    	pageType: 'Category', siteSection: 'Home', siteSubsection: 'Department'})
    	
    .when("/kids",  {templateUrl: "partials/kids.html", controller: 'PageCtrl', title: 'Product:Category:Kids',
    	pageType: 'Category', siteSection: 'Home', siteSubsection: 'Department'})
    	
    .when("/mens",  {templateUrl: "partials/mens.html", controller: 'PageCtrl', title: 'Product:Category:Mens',
    	pageType: 'Category', siteSection: 'Home', siteSubsection: 'Department'})
    	
    .when("/womens",  {templateUrl: "partials/womens.html", controller: 'PageCtrl', title: 'Product:Category:Womens',
    	pageType: 'Category', siteSection: 'Home', siteSubsection: 'Department'})
    	
    .when("/shop-login",  {templateUrl: "partials/shop-login.html", controller: 'PageCtrl', title: 'Log In',
    	pageType: 'Form', siteSection: 'Home', siteSubsection: 'Menu'})
    	
    .when("/sign-up",  {templateUrl: "partials/sign-up.html", controller: 'PageCtrl', title: 'Sign Up',
    	pageType: 'Form', siteSection: 'Home', siteSubsection: 'Menu'})
    
    // Product Detail Pages
    .when("/babycrew",  {templateUrl: "partials/babycrew.html", controller: 'PageCtrl', title: 'Product:Baby:Crew', 
    	pageType: 'Product', siteSection: 'Baby', siteSubsection: 'Crew',
    	productID: '12345', productName: 'Baby Crew', revenue: '10.99'})
    	 
    .when("/baby-v",  {templateUrl: "partials/baby-v.html", controller: 'PageCtrl', title: 'Product:Baby:V',
    	pageType: 'Product', siteSection: 'Baby', siteSubsection: 'V Neck',
    	productID: '23456', productName: 'Baby V', revenue: '10.99'})
    	
    .when("/kids-crew",  {templateUrl: "partials/kids-crew.html", controller: 'PageCtrl', title: 'Product:Kids:Crew',
    	pageType: 'Product', siteSection: 'Kids', siteSubsection: 'Crew',
    	productID: '34567', productName: 'Kids Crew', revenue: '19.99'})
    	
    .when("/kids-v",  {templateUrl: "partials/kids-v.html", controller: 'PageCtrl', title: 'Product:Kids:V',
    	pageType: 'Product', siteSection: 'Kids', siteSubsection: 'V Neck', 
    	productID: '45678', productName: 'Kids V', revenue: '19.99'})
    	
    .when("/mens-crew",  {templateUrl: "partials/mens-crew.html", controller: 'PageCtrl', title: 'Product:Mens:Crew',
    	pageType: 'Product', siteSection: 'Mens', siteSubsection: 'Crew',
    	productID: '56789', productName: 'Mens Crew', revenue: '24.99'})
    	
    .when("/mens-v",  {templateUrl: "partials/mens-v.html", controller: 'PageCtrl', title: 'Product:Mens:V',
    	pageType: 'Product', siteSection: 'Mens', siteSubsection: 'V Neck', 
    	productID: '67891', productName: 'Mens V', revenue: '24.99'})
    	
    .when("/womens-crew",  {templateUrl: "partials/womens-crew.html", controller: 'PageCtrl', title: 'Product:Womens:Crew',
    	pageType: 'Product', siteSection: 'Womens', siteSubsection: 'Crew',
    	productID: '78910', productName: 'Womens Crew', revenue: '29.99'})
    	
    .when("/womens-v",  {templateUrl: "partials/womens-v.html", controller: 'PageCtrl', title: 'Product:Womens:V',
    	pageType: 'Product', siteSection: 'Womens', siteSubsection: 'V Neck', 
    	productID: '89101', productName: 'Womens V', revenue: '29.99'})
    
    // Checkout Confirmation Pages
    .when("/checkout-bc",  {templateUrl: "partials/checkout-bc.html", controller: 'bcCheckoutCtrl', title: 'Checkout:Baby:Crew',
    	pageType: 'Checkout', siteSection: 'Baby', siteSubsection: 'Crew', 
    	productID: '12345', productName: 'Baby Crew', revenue: '10.99',
    	productTotalRevenue: '29.99', productTotalUnits: '2'})
    	
    .when("/checkout-bv",  {templateUrl: "partials/checkout-bv.html", controller: 'bvCheckoutCtrl', title: 'Checkout:Baby:V',
    	pageType: 'Checkout', siteSection: 'Baby', siteSubsection: 'V Neck', 
    	productID: '23456', productName: 'Baby V', revenue: '10.99',
    	productTotalRevenue: '32.97', productTotalUnits: '3'})
    	
    .when("/checkout-kc",  {templateUrl: "partials/checkout-kc.html", controller: 'kcCheckoutCtrl', title: 'Checkout:Kids:Crew',
    	pageType: 'Checkout', siteSection: 'Kids', siteSubsection: 'Crew', 
    	productID: '34567', productName: 'Kids Crew', revenue: '19.99',
    	productTotalRevenue: '59.97', productTotalUnits: '3'})
    	
    .when("/checkout-kv",  {templateUrl: "partials/checkout-kv.html", controller: 'kvCheckoutCtrl', title: 'Checkout:Kids:V',
    	pageType: 'Checkout', siteSection: 'Kids', siteSubsection: 'V Neck', 
    	productID: '45678', productName: 'Kids V', revenue: '19.99',
    	productTotalRevenue: '79.96', productTotalUnits: '4'})
    	
    .when("/checkout-mc",  {templateUrl: "partials/checkout-mc.html", controller: 'mcCheckoutCtrl', title: 'Checkout:Mens:Crew',
    	pageType: 'Checkout', siteSection: 'Mens', siteSubsection: 'Crew', 
    	productID: '56789', productName: 'Mens Crew', revenue: '24.99',
    	productTotalRevenue: '49.98', productTotalUnits: '2'})
    	
    .when("/checkout-mv",  {templateUrl: "partials/checkout-mv.html", controller: 'mvCheckoutCtrl', title: 'Checkout:Mens:V',
    	pageType: 'Checkout', siteSection: 'Mens', siteSubsection: 'V Neck', 
    	productID: '67891', productName: 'Mens V', revenue: '24.99',
    	productTotalRevenue: '24.99', productTotalUnits: '1'})
    	
    .when("/checkout-wc",  {templateUrl: "partials/checkout-wc.html", controller: 'wcCheckoutCtrl', title: 'Checkout:Womens:Crew',
    	pageType: 'Checkout', siteSection: 'Womens', siteSubsection: 'Crew', 
    	productID: '78910', productName: 'Womens Crew', revenue: '29.99',
    	productTotalRevenue: '119.96', productTotalUnits: '4'})
    	
    .when("/checkout-wv",  {templateUrl: "partials/checkout-wv.html", controller: 'wvCheckoutCtrl', title: 'Checkout:Womens:V',
    	pageType: 'Checkout', siteSection: 'Womens', siteSubsection: 'V Neck', 
    	productID: '89101', productName: 'Womens V', revenue: '29.99',
    	productTotalRevenue: '59.98', productTotalUnits: '2'})
    
	// Form/Login Page Secure Zone redirect
	.when("/my-account",  {templateUrl: "partials/my-account.html", controller: 'PageCtrl', title: 'My Account',
		pageType: 'Form', siteSection: 'Account', siteSubsection: 'Login'})
	.when("/new-account",  {templateUrl: "partials/new-account.html", controller: 'PageCtrl', title: 'Welcome',
		pageType: 'Form', siteSection: 'Account', siteSubsection: 'Sign Up'})
	   
    /* else 404
    .otherwise({redirectTo: '#'});
    */
    .otherwise("/404", {templateUrl: "partials/404.html", controller: 'PageCtrl'});
    
}]);

/* Location */
app.config(['$locationProvider', function($locationProvider) {
  $locationProvider.hashPrefix('');
}]);

app.run(['$rootScope', '$route', function($rootScope, $route) { 
    $rootScope.$on('$routeChangeSuccess', function() {
        document.title = $route.current.title;
        
        // Set data layer variables (stored in meta tags)
        $rootScope.pageType = $route.current.pageType;
        $rootScope.siteSection = $route.current.siteSection;
        $rootScope.siteSubsection = $route.current.siteSubsection;
        $rootScope.productID = $route.current.productID;
        $rootScope.productName = $route.current.productName;
        $rootScope.revenue = $route.current.revenue;
        $rootScope.productTotalRevenue = $route.current.productTotalRevenue;
        $rootScope.productTotalUnits = $route.current.productTotalUnits;
        
    });
    
    // Set new params in view top (global page params)
	$rootScope.$on('$routeChangeSuccess', function() { 
		// Update Data Layer
		digitalData.page.pageName = document.title;
		digitalData.page.destinationURL = encodeURIComponent(window.location.href);
		
		// Update Data Layer
		digitalData.page.pageType = $rootScope.pageType;
		digitalData.page.siteSection = $rootScope.siteSection;
		digitalData.page.siteSubsection = $rootScope.siteSubsection;
			
		digitalData.page.productID = $rootScope.productID;
		digitalData.page.productName = $rootScope.productName;
		digitalData.page.revenue = $rootScope.revenue;
			
		digitalData.page.productTotalRevenue = $rootScope.productTotalRevenue;
		digitalData.page.productTotalUnits = $rootScope.productTotalUnits;
		
		
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
	
}]);

/**
 * Controls all non-Checkout pages)
 */
app.controller('PageCtrl', function (/* $scope, $location, $http */) {
	digitalData.page.purchaseID = null;
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
  	
  	var bcPurchaseID = $scope.bcPurchRNG;
  	digitalData.page.purchaseID = bcPurchaseID;
  	
  	  console.log("Baby Crew Checkout Controller reporting for duty.");
});

	// Baby V Controller
 app.controller('bvCheckoutCtrl', function($scope) { 
  $scope.bvPurchRNG = 0;
  	(function () {
    	$scope.bvPurchRNG = 'bv' + Math.random().toString(36).substr(2,9);
  		}
  	());
  	
  	var bvPurchaseID = $scope.bvPurchRNG;
  	digitalData.page.purchaseID = bvPurchaseID;
  	
  	  console.log("Baby V Checkout Controller reporting for duty.");
});

	// Kids Crew Controller
 app.controller('kcCheckoutCtrl', function($scope) { 
  $scope.kcPurchRNG = 0;
  	(function () {
    	$scope.kcPurchRNG = 'kc' + Math.random().toString(36).substr(2,9);
  		}
  	());
  	
  	var kcPurchaseID = $scope.kcPurchRNG;
  	digitalData.page.purchaseID = kcPurchaseID;
  	
  	  console.log("Kids Crew Checkout Controller reporting for duty.");
});
	
	// Kids V Controller
 app.controller('kvCheckoutCtrl', function($scope) { 
  $scope.kvPurchRNG = 0;
  	(function () {
    	$scope.kvPurchRNG = 'kv' + Math.random().toString(36).substr(2,9);
  		}
  	());
  	
  	var kvPurchaseID = $scope.kvPurchRNG;
  	digitalData.page.purchaseID = kvPurchaseID;
  	
  	  console.log("Kids V Checkout Controller reporting for duty.");
});

	// Mens Crew Controller
 app.controller('mcCheckoutCtrl', function($scope) { 
  $scope.mcPurchRNG = 0;
  	(function () {
    	$scope.mcPurchRNG = 'mc' + Math.random().toString(36).substr(2,9);
  		}
  	());
  	
  	var mcPurchaseID = $scope.mcPurchRNG;
  	digitalData.page.purchaseID = mcPurchaseID;
  	
  	  console.log("Mens Crew Checkout Controller reporting for duty.");
});
	
	// Mens V Controller
 app.controller('mvCheckoutCtrl', function($scope) { 
  $scope.mvPurchRNG = 0;
  	(function () {
    	$scope.mvPurchRNG = 'mv' + Math.random().toString(36).substr(2,9);
  		}
  	());
  	
  	var mvPurchaseID = $scope.mvPurchRNG;
  	digitalData.page.purchaseID = mvPurchaseID;
  	
  	  console.log("Mens V Checkout Controller reporting for duty.");
});

	// Womens Crew Controller
 app.controller('wcCheckoutCtrl', function($scope) { 
  $scope.wcPurchRNG = 0;
  	(function () {
    	$scope.wcPurchRNG = 'wc' + Math.random().toString(36).substr(2,9);
  		}
  	());
  	
  	var wcPurchaseID = $scope.wcPurchRNG;
  	digitalData.page.purchaseID = wcPurchaseID;
  	
  	  console.log("Womens Crew Checkout Controller reporting for duty.");
});

	// Womens V Controller
app.controller('wvCheckoutCtrl', function($scope) { 
  $scope.wvPurchRNG = 0;
  	(function () {
    	$scope.wvPurchRNG = 'wv' + Math.random().toString(36).substr(2,9);
  		}
  	());
  	
  	var wvPurchaseID = $scope.wvPurchRNG;
  	digitalData.page.purchaseID = wvPurchaseID;
  	
  	  console.log("Womens V Checkout Controller reporting for duty.");
});
	
/*  
*  To set params on Buy Now button... not really using this yet
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





