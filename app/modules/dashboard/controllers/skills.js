/*==========================================================
    Author      : Pradeepa K
    Date Created: 13 Jan 2016
    Description : Controller to handle Skills page
    Change Log
    s.no      date    author     description     


 ===========================================================*/

dashboard.controller("SkillController", ['$rootScope', '$scope', '$state', '$location', 'dashboardService', 'Flash',
function ($rootScope, $scope, $state, $location, dashboardService, Flash) {
    var vm = this;

    vm.skills = {};

    //development stack
    vm.skills.development = [
        {
            Software: "Javascript",
            Percentage: "90",
            theme: "purple",
            image: "javascript"
        },
        {
            Software: "Type Script",
            Percentage: "80",
            theme: "purple",
            image: "typescript"
        },
        {
            Software: "jQuery & AJAX",
            Percentage: "85",
            theme: "purple",
            image: "jquery"
        },
        {
            Software: "Angular JS, Angular7",
            Percentage: "80",
            theme: "purple",
            image: "angular"
        },
        {
            Software: "Node JS",
            Percentage: "80",
            theme: "purple",
            image: "node"
        },
        {
            Software: "React JS",
            Percentage: "55",
            theme: "purple",
            image: "react"
        },      
        {
            Software: "PHP5 & MySql",
            Percentage: "70",
            theme: "purple",
            image: "php-mysql"
        },
        {
            Software: "Mongo DB",
            Percentage: "70",
            theme: "purple",
            image: "mongodb"
        }
    ];

    //Design Stack
    vm.skills.design = [
        {
            Software: "HTML 5",
            Percentage: "100",
            theme: "yellow",
            image: "html5"
        },
        {
            Software: "CSS 3",
            Percentage: "95",
            theme: "aqua",
            image: "css3"
        },
        {
            Software: "Less, SAAS",
            Percentage: "80",
            theme: "green",
            image: "saas-css"
        },
        {
            Software: "Bootstrap4",
            Percentage: "100",
            theme: "purple",
            image: "bootstrap"
        },
        {
            Software: "Photo Shop",
            Percentage: "60",
            theme: "maroon",
            image: "Photoshop"
        },
        /*{
            Software: "Corel Draw",
            Percentage: "95",
            theme: "teal",
            image: "coreldraw"
        },*/
        {
            Software: "Flash",
            Percentage: "50",
            theme: "teal",
            image: "flash"
        }
    ];

    //Other Stack
    vm.skills.others = [
        {
            Software: "Java8, Junit4, JBoss",
            Percentage: "55",
            theme: "purple",
            image: "java",
        },
        {
            Software: "SQL",
            Percentage: "80",
            theme: "purple",
            image: "sql"
        },
        {
            Software: "Dynamodb",
            Percentage: "70",
            theme: "purple",
            image: "dynamodb"
        },
        {
            Software: "Cloud Computing(AWS)",
            Percentage: "70",
            theme: "purple",
            image: "cloud"
        }
    ];
}]);

