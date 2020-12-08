/*==========================================================
    Author      : Pradeepa K
    Date Created: 13 Jan 2016
    Description : Controller to handle Recent Projects page
    Change Log
    s.no      date    author     description     


 ===========================================================*/

dashboard.controller("RecentController", ['$rootScope', '$scope', '$state', '$location', 'dashboardService', 'Flash',
function ($rootScope, $scope, $state, $location, dashboardService, Flash) {
    var vm = this;

    vm.recents = [
      {
          id: 1,
          heading: "MetaData Management",
          title: "MetaData Admin Portal",
          description: `Web application to handle admin management. The project is MetaData Admin Portal. We build various components for the MetaData services such as Dashboard, Subscribers, Clients, Business Groups, Locations, Providers, Accounts, Resource Types, Resource Groups, Resources, Categories, Service Master, Actions. User login with the required credentials, user arrives in landing page. Next user needs to select a client from the number of clients available in the client dropdown. Once client is selected, Role drop down get appended with the options and available to select. Until client selected role can't be selected.
          Services in the left side get visible according to the client's selection and role selection Those are dynamically added, see below 1 and 2 in the circular steps Now suppose we navigate and select the left nav subscriptions, we can see all the subscriptions in data table. Similarly, one can visit all other nav menu in left nav and see respective screen.
          
      `,
          image: "e-pos",
          theme: "warning",
          url:"fp360.us:830",
          roles: [
              {
                  theme: "success",
                  myRole:"UI Design"
              },
              {
                  theme: "info",
                  myRole: "UI Development"
              },
              {
                  theme: "warning",
                  myRole: "Integration"
              },
              {
                  theme: "warning",
                  myRole: "Adapter Development"
              }
          ]
      },
      {
          id: 2,
          heading: "API Development",
          title: "Middleware API's",
          description: "Middleware API's using Rest/SOAP calls. There are various API’s and endsystems. We build various microservices.   API build includes accomplishment of integration by connecting with respective endsystems based on the workflow. The end to end workflow path is tested using postman and Netflix conductor. The test cases are written to increase the coverage (node ./ci.js run=coverage).",
          image: "active-reports",
          theme: "danger",
          url: "nodered.org/",
          roles: [
              {
                  theme: "danger",
                  myRole: "API/Microservices Development"
              }
          ]
      },
      {
          id: 3,
          heading: "Dashboard",
          title: "DMS Admiral",
          description: "Angular Bootstrap Dashboard is a web dashboard application based on Bootstrap and AngularJS.",
          image: "dashboard",
          theme: "success",
          url: "projects1.invisionapp.com/share/EJ3RWYRFB#/screens",
          roles: [
              {
                  theme: "success",
                  myRole: "Design & Developed (Individual contribution)"
              }
          ]
      },
      {
          id: 4,
          heading: "Moffet",
          title: "Santillana Projects - New Media team",
          description: "Santillana offers a variety of interactive activities, from content developed for digital blackboard to interactive games that make the learning experience more engaging and fun. For Primary Education we also develop HTML version for the flash source so that it is supported in all devices.",
          image: "santillana",
          theme: "primary",
          url: "www.blogproyectos.santillana.es/primariaesp/",
          roles: [
              {
                  theme: "success",
                  myRole: "UI Design & Development"
              }/*,
              {
                  theme: "info",
                  myRole: "UI Development"
              },
              {
                  theme: "warning",
                  myRole: "Service Integration"
              },
              {
                  theme: "red",
                  myRole: "UX Consultant"
              }*/
          ]
      },
      {
          id: 5,
          heading: "e - Commerce",
          title: "Deepetch",
          description: "Building E-Comm web application for various image editing services.",
          image: "e-comm",
          theme:"info",
          url: "www.deepetch.com/",
          roles: [
              {
                  theme: "success",
                  myRole: "UI Design"
              },
              {
                  theme: "info",
                  myRole: "Web Application Development"
              }/*,
              {
                  theme: "warning",
                  myRole: "Service Integration"
              },
              {
                  theme: "danger",
                  myRole: "UX Consultant"
              },
              {
                  theme: "primary",
                  myRole: "Version Control"
              }*/
          ]
      }
    ];

    console.log("coming to Recent controller");

}]);

