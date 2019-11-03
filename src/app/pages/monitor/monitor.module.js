/**
 * @author a.demeshko
 * created on 12.21.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.monitor', [])
    .config(routeConfig)
    .config(function(){
      $.jstree.defaults.core.themes.url = true;
      $.jstree.defaults.core.themes.dir = "assets/img/theme/vendor/jstree/dist/themes";
    });

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('monitor', {
          url: '/tree',
          templateUrl: 'app/pages/monitor/monitor.html',
          title: 'Monitor',
          sidebarMeta: {
            icon:"ion-md-construct",
            order: 200,
          },
        });
  }

})();
