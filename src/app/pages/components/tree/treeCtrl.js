/**
 * @author a.demeshko
 * created on 12/21/15
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.components.tree')
    .controller('treeCtrl', treeCtrl);

  /** @ngInject */
  function treeCtrl($scope, $timeout) {

    $scope.ignoreChanges = false;
    var newId = 0;
    $scope.ignoreChanges = false;
    $scope.newNode = {};

    $scope.basicConfig = {
      core: {
        multiple: false,
        check_callback: true,
        worker: true
      },
      'types': {
        'folder': {
          'icon': 'ion-android-add'
        },
        'default': {
          'icon': ''
        }
      },
      'plugins': ['types'],
      'version': 1
    };

    $scope.dragConfig = {
      'core': {
        'check_callback': true,
        'themes': {
          'responsive': false
        }
      },
      'types': {
        'folder': {
          'icon': 'ion-android-bar'
        },
        'default': {
          'icon': 'ion-document-text'
        }
      },
      "plugins": ["dnd", 'types']
    };

    $scope.addNewNode = function () {
      $scope.ignoreChanges = true;
      var selected = this.basicTree.jstree(true).get_selected()[0];
      if (selected)
        $scope.treeData.push({
          id: (newId++).toString(),
          parent: selected,
          text: "New node " + newId,
          state: {opened: true}
        });
      $scope.basicConfig.version++;
    };

    $scope.selectNode=function(node,selected,event){
        if(selected.node.children.length===0){
          $scope.metricsTableData.forEach(function(obj,key){
             obj.vol=Math.floor(Math.random()*10000)/10000;
             obj.isUp=Math.random() >= 0.5;
             if(obj.vol>0.6){
             obj.level="High";
             } else{
              obj.level="Normal";
             }
          })
        }
       
    }
    $scope.refresh = function () {
      $scope.ignoreChanges = true;
      newId = 0;
      $scope.treeData = getDefaultData();
      $scope.basicConfig.version++;
    };

    $scope.expand = function () {
      $scope.ignoreChanges = true;
      $scope.treeData.forEach(function (n) {
        n.state.opened = true;
      });
      $scope.basicConfig.version++;
    };

    $scope.collapse = function () {
      $scope.ignoreChanges = true;
      $scope.treeData.forEach(function (n) {
        n.state.opened = false;
      });
      $scope.basicConfig.version++;
    };

    $scope.readyCB = function() {
      $timeout(function() {
        $scope.ignoreChanges = false;
      });
    };


    $scope.applyModelChanges = function() {
      return !$scope.ignoreChanges;
    };

    $scope.metricsTableData = [
      {
        image: '',
        component: 'benz(a)anthracene',
        vol: '',
        trend:'',
        level:''
      },
      {
        image: '',
        component: 'phenol',
        vol: '',
        trend:'',
        level:''
      },
      {
        image: '',
        component: 'pyrene',
        vol: '',
        trend:'',
        level:''
      },
      {
        image: '',
        component: 'phenanthrene',
        vol: '',
        trend:'',
        level:''
      }

    ];
    $scope.treeData = getDefaultData();
    $scope.dragData = [
      {
        "id": "nd1",
        "parent": "#",
        "type": "folder",
        "text": "Node 1",
        "state": {
          "opened": true
        }
      },
      {
        "id": "nd2",
        "parent": "#",
        "type": "folder",
        "text": "Node 2",
        "state": {
          "opened": true
        }
      },
      {
        "id": "nd3",
        "parent": "#",
        "type": "folder",
        "text": "",
        "state": {
          "opened": true
        }
      },
      {
        "id": "nd4",
        "parent": "#",
        "type": "folder",
        "text": "Node 4",
        "state": {
          "opened": true
        }
      },
      {
        "id": "nd5",
        "parent": "nd1",
        "text": "Node 1.1",
        "state": {
          "opened": true
        }
      },
      {
        "id": "nd6",
        "parent": "nd1",
        "text": "Node 1.2",
        "state": {
          "opened": true
        }
      },
      {
        "id": "nd7",
        "parent": "nd1",
        "text": "Node 1.3",
        "state": {
          "opened": true
        }
      },
      {
        "id": "nd8",
        "parent": "nd2",
        "text": "Node 2.1",
        "state": {
          "opened": true
        }
      },
      {
        "id": "nd9",
        "parent": "nd2",
        "text": "Node 2.2",
        "state": {
          "opened": true
        }
      },
      {
        "id": "nd10",
        "parent": "nd2",
        "text": "Node 2.3",
        "state": {
          "opened": true
        }
      },
      {
        "id": "nd11",
        "parent": "nd3",
        "text": "Node 3.1",
        "state": {
          "opened": true
        }
      },
      {
        "id": "nd12",
        "parent": "nd3",
        "text": "Node 3.2",
        "state": {
          "opened": true
        }
      },
      {
        "id": "nd13",
        "parent": "nd3",
        "text": "Node 3.3",
        "state": {
          "opened": true
        }
      },
      {
        "id": "nd14",
        "parent": "nd4",
        "text": "Node 4.1",
        "state": {
          "opened": true
        }
      },
      {
        "id": "nd15",
        "parent": "nd4",
        "text": "Node 4.2",
        "state": {
          "opened": true
        }
      },
      {
        "id": "nd16",
        "parent": "nd4",
        "text": "Node 4.3",
        "state": {
          "opened": true
        }
      }
    ];

    function getDefaultData() {
      return [
        {
          "id": "n1",
          "parent": "#",
          "type": "folder",
          "text": "",
          "state": {
            "opened": true
          }
        },
        {
          "id": "n2",
          "parent": "#",
          "type": "folder",
          "text": "",
          "state": {
            "opened": true
          }
        },
        {
          "id": "n3",
          "parent": "#",
          "type": "folder",
          "text": "",
          "state": {
            "opened": true
          }
        },
        {
          "id": "n5",
          "parent": "n1",
          "text": "Sensor 1.1",
          "icon": "ion-help-buoy",
          "state": {
            "opened": true
          }
        },
        {
          "id": "n6",
          "parent": "n1",
          "text": "Sensor 1.2",
          "icon": "ion-help-buoy",
          "state": {
            "opened": true
          }
        },
        {
          "id": "n7",
          "parent": "n1",
          "text": "Sensor 1.3",
          "icon": "ion-help-buoy",
          "state": {
            "opened": true
          }
        },
        {
          "id": "n8",
          "parent": "n1",
          "text": "Sensor 1.4",
          "icon": "ion-help-buoy",
          "state": {
            "opened": true
          }
        },
        {
          "id": "n9",
          "parent": "n2",
          "text": "Sensor 2.1",
          "icon": "ion-help-buoy",
          "state": {
            "opened": true
          }
        },
        {
          "id": "n10",
          "parent": "n2",
          "text": "Sensor 2.2",
          "icon": "ion-help-buoy",
          "state": {
            "opened": true
          }
        },
        {
          "id": "n12",
          "parent": "n3",
          "text": "Sensor 3.1",
          "icon": "ion-help-buoy",
          "state": {
            "opened": true
          }
        },
        {
          "id": "n13",
          "parent": "n3",
          "type": "folder",
          "text": "",
          "state": {
            "opened": true
          }
        },
        {
          "id": "n14",
          "parent": "n13",
          "text": "Sensor 3.2.1",
          "icon": "ion-help-buoy",
          "state": {
            "opened": true
          }
        },
        {
          "id": "n15",
          "parent": "n13",
          "text": "Sensor 3.2.2",
          "icon": "ion-help-buoy",
          "state": {
            "opened": true
          }
        },
        {
          "id": "n16",
          "parent": "n3",
          "text": "Sensor 3.3",
          "icon": "ion-help-buoy",
          "state": {
            "opened": true
          }
        },
        {
          "id": "n17",
          "parent": "n3",
          "text": "Sensor 3.4",
          "icon": "ion-help-buoy",
          "state": {
            "opened": true
          }
        },
        {
          "id": "n18",
          "parent": "n3",
          "text": "Sensor 3.5",
          "icon": "ion-help-buoy",
          "state": {
            "opened": true
          }
        },
        {
          "id": "n19",
          "parent": "n3",
          "text": "Sensor 3.6",
          "icon": "ion-help-buoy",
          "state": {
            "opened": true
          }
        }
      ]
    }


  }
})();