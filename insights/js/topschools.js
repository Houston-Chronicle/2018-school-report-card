var app = angular.module('myApp', []);
     app.controller("MyCtrl", function($scope) {
     $scope.schools = [
  {
    "campus": "T H Rogers School",
    "district": "Houston ISD",
    "address": "5840 San Felipe St, Houston 77057-3059",
    "grade": "A+",
    "rank": 1,
    "level": "Elementary school"
  },
  {
    "campus": "Creekside Forest Elementary",
    "district": "Tomball ISD",
    "address": "5949 Creekside Forest Dr, The Woodlands 77389",
    "grade": "A+",
    "rank": 2,
    "level": "Elementary school"
  },
  {
    "campus": "Commonwealth Elementary",
    "district": "Fort Bend ISD",
    "address": "4909 Commonwealth Blvd, Sugar Land 77479-3998",
    "grade": "A+",
    "rank": 3,
    "level": "Elementary school"
  },
  {
    "campus": "Horn Elementary",
    "district": "Houston ISD",
    "address": "4530 Holly St, Bellaire 77401-5803",
    "grade": "A+",
    "rank": 4,
    "level": "Elementary school"
  },
  {
    "campus": "River Oaks Elementary",
    "district": "Houston ISD",
    "address": "2008 Kirby Dr, Houston 77019-6016",
    "grade": "A+",
    "rank": 5,
    "level": "Elementary school"
  },
  {
    "campus": "West University Elementary",
    "district": "Houston ISD",
    "address": "3756 University Blvd, Houston 77005-2828",
    "grade": "A+",
    "rank": 6,
    "level": "Elementary school"
  },
  {
    "campus": "Houston Gateway Academy - Coral Campus",
    "district": "Houston Gateway Academy Inc",
    "address": "1020 Coral St, Houston 77012",
    "grade": "A+",
    "rank": 7,
    "level": "Elementary school"
  },
  {
    "campus": "Harmony Science Academy-Sugar Land",
    "district": "Harmony School Of Science - Houston",
    "address": "13415 W Bellfort Ave, Sugar Land 77478",
    "grade": "A+",
    "rank": 8,
    "level": "Elementary school"
  },
  {
    "campus": "Devers Elementary",
    "district": "Devers ISD",
    "address": "P O Box 488, Devers 77538-0488",
    "grade": "A+",
    "rank": 9,
    "level": "Elementary school"
  },
  {
    "campus": "Kipp Sharp College Prep",
    "district": "Kipp Inc Charter",
    "address": "6700 Bellaire Blvd, Houston 77074",
    "grade": "A+",
    "rank": 10,
    "level": "Elementary school"
  },
  {
    "campus": "T H Rogers School",
    "district": "Houston ISD",
    "address": "5840 San Felipe St, Houston 77057-3059",
    "grade": "A",
    "rank": 1,
    "level": "Middle school"
  },
  {
    "campus": "Cornerstone Academy",
    "district": "Spring Branch ISD",
    "address": "9016 Westview Dr, Houston 77055",
    "grade": "A+",
    "rank": 2,
    "level": "Middle school"
  },
  {
    "campus": "Houston Gateway Academy - Coral Campus",
    "district": "Houston Gateway Academy Inc",
    "address": "1020 Coral St, Houston 77012",
    "grade": "A",
    "rank": 3,
    "level": "Middle school"
  },
  {
    "campus": "Project Chrysalis Middle",
    "district": "Houston ISD",
    "address": "4528 Leeland, Houston 77023-3047",
    "grade": "A+",
    "rank": 4,
    "level": "Middle school"
  },
  {
    "campus": "Houston Gateway Academy Inc Elite College Prep",
    "district": "Houston Gateway Academy Inc",
    "address": "3400 Evergreen, Houston 77087",
    "grade": "A+",
    "rank": 5,
    "level": "Middle school"
  },
  {
    "campus": "Lanier Middle",
    "district": "Houston ISD",
    "address": "2600 Woodhead St, Houston 77098-1615",
    "grade": "A+",
    "rank": 6,
    "level": "Middle school"
  },
  {
    "campus": "Fort Settlement Middle",
    "district": "Fort Bend ISD",
    "address": "5440 Elkins Rd, Sugar Land 77479-4093",
    "grade": "A+",
    "rank": 7,
    "level": "Middle school"
  },
  {
    "campus": "Energized For Stem Academy Southwest Middle",
    "district": "Houston ISD",
    "address": "7055 Beechnut, Houston 77074-6003",
    "grade": "A+",
    "rank": 8,
    "level": "Middle school"
  },
  {
    "campus": "Mandarin Immersion Magnet School",
    "district": "Houston ISD",
    "address": "5445 W Alabama, Houston 77056-2662",
    "grade": "A+",
    "rank": 9,
    "level": "Middle school"
  },
  {
    "campus": "Austin Middle",
    "district": "Galveston ISD",
    "address": "1514 N 1/2, Galveston 77550-8198",
    "grade": "A+",
    "rank": 10,
    "level": "Middle school"
  },
  {
    "campus": "Alief Early College High School",
    "district": "Alief ISD",
    "address": "2811 A Hayes Rd, Houston 77082",
    "grade": "A+",
    "rank": 5,
    "level": "High school"
  },
  {
    "campus": "Carnegie Vanguard High School",
    "district": "Houston ISD",
    "address": "1501 Taft, Houston 77019-4507",
    "grade": "A+",
    "rank": 3,
    "level": "High school"
  },
  {
    "campus": "Challenge Early College High School",
    "district": "Houston ISD",
    "address": "5601 W Loop S, Houston 77081",
    "grade": "A+",
    "rank": 10,
    "level": "High school"
  },
  {
    "campus": "Debakey High School For Health Prof",
    "district": "Houston ISD",
    "address": "3100 Shenandoah St, Houston 77021-1042",
    "grade": "A+",
    "rank": 1,
    "level": "High school"
  },
  {
    "campus": "East Early College High School",
    "district": "Houston ISD",
    "address": "220 N Milby St, Houston 77003-2708",
    "grade": "A+",
    "rank": 6,
    "level": "High school"
  },
  {
    "campus": "Eastwood Academy",
    "district": "Houston ISD",
    "address": "1315 Dumble, Houston 77023-1902",
    "grade": "A+",
    "rank": 2,
    "level": "High school"
  },
  {
    "campus": "Kerr High School",
    "district": "Alief ISD",
    "address": "8150 Sugarland Howell, Houston 77083-9999",
    "grade": "A+",
    "rank": 4,
    "level": "High school"
  },
  {
    "campus": "Sharpstown International School",
    "district": "Houston ISD",
    "address": "8330 Triola, Houston 77036-6310",
    "grade": "A+",
    "rank": 8,
    "level": "High school"
  },
  {
    "campus": "Spring Early College Academy",
    "district": "Spring ISD",
    "address": "1001 Southridge, Houston 77090",
    "grade": "A+",
    "rank": 7,
    "level": "High school"
  },
  {
    "campus": "Victory Early College High School",
    "district": "Aldine ISD",
    "address": "2330 S Victory St, Houston 77088",
    "grade": "A+",
    "rank": 9,
    "level": "High school"
  }
];
});