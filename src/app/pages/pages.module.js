/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages', [
    'ui.router',

<<<<<<< HEAD
    'BlurAdmin.pages.monitor',
    'BlurAdmin.pages.ui',
=======
    'BlurAdmin.pages.dashboard',
    // 'BlurAdmin.pages.ui',
>>>>>>> 66088e4a5f810a512b628078e0644a1868ae91f5
    'BlurAdmin.pages.components',
    // 'BlurAdmin.pages.form',
    // 'BlurAdmin.pages.tables',
    // 'BlurAdmin.pages.charts',
    // 'BlurAdmin.pages.maps',
    'BlurAdmin.pages.profile',
  ])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($urlRouterProvider, baSidebarServiceProvider) {
    $urlRouterProvider.otherwise('/dashboard');

  }

})();
