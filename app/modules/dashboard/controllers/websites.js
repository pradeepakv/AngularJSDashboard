/*==========================================================
    Author      : Pradeepa K
    Date Created: 13 Jan 2016
    Description : Controller to handle Websites page
    Change Log
    s.no      date    author     description     


 ===========================================================*/

dashboard.controller("WebsitesController", ['$rootScope', '$scope', '$state', '$location', 'dashboardService', 'Flash',
function ($rootScope, $scope, $state, $location, dashboardService, Flash) {
    var vm = this;

    vm.websites = [
        {
            title: "KMIT Solutions",
            image: "kmit",
            link:"http://kmitsoltions.com"
        },
        {
            title: "Parallax Site",
            image: "whatsnew",
            link: "http://kmitsoltions.com/whatsnew"
        }/*,
       
        {
            title: "Curriculam Vitae",
            image: "cv",
            link: "http://cv.pradeepa.in"
        },
        {
            title: "Kode Work",
            image: "kodework",
            link: "http://mockup.pradeepa.in"
        },
        {
            title: "Garments Today",
            image: "garment",
            link: "http://garmenttoday.in"
        }*/
    ];
    console.log("coming to Websites controller");

}]);

