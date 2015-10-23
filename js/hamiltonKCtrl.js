hamiltonKApp.controller('hamiltonKCtrl', ['$scope', function($scope) {


$scope.check = true;
  
$scope.projects = [
	{
		"id": 1,
		"name":"Twiines",
		"projectUrl":"#/twiines",
		"url": "http://boiling-tundra-5536.herokuapp.com/",
		"description":"Timeline based micro-blogging. Share updates of projects and track personal goals in a clean and simple fashion.",
		"image": "assets/project_logos/twiines.svg",
		"spec": "PostgreSQL *formerly MongoDB*, Rails 4",
		"gitUrl":"#"
	},
	{
		"id": 2,
		"name":"Fist Five",
		"projectUrl":"#/fistfive",
		"image": "assets/project_logos/hand.svg",
		"url": "http://fistfive.herokuapp.com/",
		"description": "Allows instructors to gather feedback from a classroom lesson using simple metrics. While following along, each student rates their comprehension of a subject on a scale of zero to five.",
		"spec": "PostgreSQL, Rails 4, D3.js",
		"gitUrl":"#"
	},
	{
		"id": 3,
		"name": "Beverage Brand Spec",
		"projectUrl":"#/guzl",
		"image": "assets/project_logos/swag_drop.svg",
		"url": "http://bevmaster.herokuapp.com",
		"description": "A social platform where users can upload and vote on designs for a beverage company's labels.",
		"spec": "PostgreSQL, Rails 4, Snap.svg, D3.js",
		"gitUrl":"#"
	},
	{
		"id": 4,
		"name": "NFC Dead Drop",
		"projectUrl":"#/nfc",
		"image": "assets/project_logos/droppointbox.svg",
		"url": "http://enigmatic-lowlands-7770.herokuapp.com/",
		"description": "A web enabled geocaching / scavenger hunt using NFC tags.  Each tag is encoded with a random token ID that coincides with a particular location in the database.  Once you locate the tag using your NFC enabled smartphone, you are able check in at that particular location.",
		"spec": "NFC Encoding, Rails, PostgreSQL, Skrollr",
		"gitUrl":"#"
	},		
	{
		"id": 5,
		"name": "Tic-Tac-Toe",
		"projectUrl":"#/ttt",
		"image": "assets/project_logos/tic_tac_toe.svg",
		"url": "http://hamiltonk.com/testbed/tictactoe/",
		"description": "A simple tic-tac-toe game.",
		"spec": "Angular.js",
		"gitUrl":"#"
	},
	{
		"id": 6,
		"name": "WhereIsMyStuff",
		"projectUrl":"#/wims",
		"image": "assets/project_logos/wheresmystuff.svg",
		"url": "http://mystuff.herokuapp.com/",
		"description": "Enter an object and its location. Voila!  ",
		"spec": "Angular.js consuming Rails API",
		"gitUrl":"#"
	},
	{
		"id": 7,
		"name": "Showfax",
		"projectUrl":"#/showfax",
		"image": "",
		"url": "http://www.showfax.com/",
		"description": "Subscirption service for downloading screenplay sides, empowering working actors across the country",
		"spec": "Ruby on Rails, Puma Server, NGINX for Static Assets, Microsoft SQL DB, Ubuntu",
		"gitUrl":"#"
	}			

]

$scope.bio = [
	{
		"id": 1,
		"header":"SUMMARY",
		"text":"Hamilton Quincy Karl is a full-stack web developer, currently employed developing Ruby on Rails applications. He has extensive experience in graphic and web design, constructing his first domain-level website in elementary school.  In 2014 he completed the Web Development Immersive Program at General Assembly in Santa Monica, CA. In 2009 he graduated cum laude from Southern Oregon University with a Bachelor of Arts in Communication, focus in Video Production / Convergent Media."

	},
	{
		"id": 2,
		"header":"PROFICIENCIES",
		"text":"Ruby on Rails, AngularJS, NGINX, PostgreSQL, MongoDB, Microsoft SQL Server, Javascript, HTML5, CSS, D3.js, Git, Cloud Platforms (AWS, Heroku, Firebase), Building/ Consuming APIs, Agile Web Development, Test Driven Development, Adobe Photoshop, Premiere, Illustrator, After Effects, & InDesign."
	},
	{
		"id":3,
		"header":"INTERESTS",
		"text":"Data Visualization, Internet of Things, Raspberry Pi, Arduino, Beagle Bone, Photography, Video Editing, & Coffee Consumption."	
	}
]


}]);