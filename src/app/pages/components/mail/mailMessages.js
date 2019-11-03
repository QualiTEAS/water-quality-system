/**
 * @author a.demeshko
 * created on 12/29/15
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.components.mail')
    .service('mailMessages', mailMessages);

  /** @ngInject */
  function mailMessages($sce) {
    var messages = [
      {
        "id": "4563faass",
        "name": "Abhijit Chatterjee",
        "subject": "Potential oil spill, needs investigation",
        "date": "2015-08-28T07:57:09",
        "body": $sce.trustAsHtml("<p>Hi, </p><p>Potential oil spill</p>"),
        "pic": "Abhijit",
        "email": "petraramsey@mail.com",
        "attachment": "Report.doc",
        "position": "Monitor Staff",
        "tag": "emergency",
        "labels": ['inbox']
      },
      {
        "id": "4563fdfvd",
        "name": "divyeshkumar Patel",
        "subject": "Report needs to be validated",
        "date": "2015-11-19T03:30:45",
        "important": false,
        "body": $sce.trustAsHtml("<p>Hi, </p><br><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ex mauris, ultrices vel lectus quis, scelerisque hendrerit ipsum. Suspendisse ullamcorper turpis neque, eget dapibus magna placerat ac. Suspendisse rhoncus ligula ac mi tempus varius ut sed lacus. Sed et commodo nulla, et placerat leo. Nam rhoncus vulputate sem non pharetra. Praesent fringilla massa in laoreet convallis. Aliquam lobortis dui a congue facilisis. Aenean dapibus semper semper. Quisque aliquam, nibh dapibus interdum condimentum, ex velit tempor tortor, at vestibulum magna leo quis leo. Morbi pulvinar varius erat ac rutrum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In hac habitasse platea dictumst.</p>" +
          "<br><p>Cras rhoncus quam ipsum, vel dignissim nisl egestas sed. Aliquam erat volutpat. Integer eu nisl elit. Donec malesuada diam vitae tellus luctus tincidunt. Donec tempus blandit neque, rutrum egestas ipsum sagittis tempor. Curabitur volutpat ligula enim, nec vehicula purus molestie at. Sed a facilisis enim, nec molestie magna. Donec in augue non est viverra dapibus vel tempus risus. Nam porttitor purus sit amet hendrerit ullamcorper. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>"),
        "pic": "Patel",
        "email": "petraramsey@mail.com",
        "position": "Monitor Staff",
        "tag": "urgent",
        "labels": ['inbox']
      },
      {
        "id": "4563zxcss",
        "name": "Roy Karmakar",
        "subject": "Investigation needed",
        "date": "2015-10-19T03:30:45",
        "important": false,
        "body": $sce.trustAsHtml("<p>Hi, </p><p>Sensor 1.1 detected potential oil component, please investigate, see attached report</p>"),
        "pic": "Roy",
        "email": "petraramsey@mail.com",
        "position": "Resident Represent",
        "tag": "standard",
        "labels": ['sent', 'important']
      },
      {
        "id": "8955sddf",
        "name": "Xiaolong Liu",
        "subject": "Sendor 3.1 issue",
        "date": "2015-05-05T12:59:45",
        "body": $sce.trustAsHtml("<p>Hi,</p><br>" +
          "<p>Sensor 3.1 has been investigated, all function are back to noraml now see the log attached</p>"),
        "pic": "xiaolong",
        "email": "barlowshort@mail.com",
        "position": "Monitor Staff",
        "attachment": "Log.doc",
        "tag": "standard",
        "labels": ['inbox']
      },
      {
        "id": "8955sdfcc",
        "name": "Ian Liao",
        "subject": "Report sent",
        "date": "2015-07-18T10:19:01",
        "body": $sce.trustAsHtml("<p>Dear officer, </p><br><p>Consectetur adipiscing elit, Lorem ipsum dolor sit amet</p>"),
        "pic": "Ian",
        "email": "barlowshort@mail.com",
        "position": "Monitor Sfaff",
        "tag": "urgent",
        "labels": ['inbox']
      }
    
    ].sort(function (a, b) {
        if (a.date > b.date) return 1;
        if (a.date < b.date) return -1;
      }).reverse();
    var tabs = [{
      label: 'inbox',
      name: 'Inbox',
      newMails: 7
    }, {
      label: 'sent',
      name: 'Sent Mail'
    }, {
      label: 'important',
      name: 'Important'
    }, {
      label: 'draft',
      name: 'Draft',
      newMails: 2
    }, {
      label: 'spam',
      name: 'Spam'
    }, {
      label: 'trash',
      name: 'Trash'
    }];

    return{
      getTabs : function(){
        return tabs
      },
      getMessagesByLabel : function(label){
        return messages.filter(function(m){
          return m.labels.indexOf(label) != -1;
        });
      },
      getMessageById : function(id){
        return messages.filter(function(m){
          return m.id == id;
        })[0];
      }
    }

  }

})();
