

var bio =
{
	"name":"Dona Anna Jose",
	"role":"system software engineer",
	"contacts":{
		"mobile":"9497609905",
		"github":"donaannjos",
		"email":"donaannjos@gmail.com",
		"location":"Kerala,India"
	},
	"welcome":"hello",
	"skills":["C++", "Python", "Java"],
	"biopic":["images/fry.jpg"]
};
var formattedName = HTMLheaderName.replace("%data%",bio.name);
var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
$("#header").prepend(formattedName + formattedRole);
var formattedImage = HTMLbioPic.replace("%data%",bio.biopic);
$("#header").append(formattedImage);
var formattedMobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
$(".flex-box").append(formattedMobile);
var formattedEmail = HTMLemail.replace("%data%",bio.contacts.email);
$(".flex-box").append(formattedEmail);
var formattedGithub = HTMLgithub.replace("%data%",bio.contacts.github);
$(".flex-box").append(formattedGithub);
var formattedLocation = HTMLlocation.replace("%data%",bio.contacts.location);
$(".flex-box").append(formattedLocation);

if (bio.skills.length>0)
{
	$("#header").append(HTMLskillsStart);
	var formattedSkill=HTMLskills.replace("%data%",bio.skills[0]);
	$("#skills").append(formattedSkill);
	var formattedSkill=HTMLskills.replace("%data%",bio.skills[1]);
	$("#skills").append(formattedSkill);
	var formattedSkill=HTMLskills.replace("%data%",bio.skills[2]);
	$("#skills").append(formattedSkill);
		
}

var education = {
	"schools": [
		{
		"name": "SCET",
		"location": "Thrissur,Kerala",
		"degree": "bachelors",
		"majors": ["CE"],
		"years": "2012-2016",
		"url": "http://example.com"
		}
	],
	"onlinecourses": [
		{
		"title": "javascript",
		"school": "udacity",
		"years": 2016,
		"url": "http://example.com"

		}
	]

};

education.schools.forEach(addschool);
function addschool(school){
	$("#education").append(HTMLschoolStart);
	var formattedName = HTMLschoolName.replace("%data%",school.name);
	var formattedDegree = HTMLschoolDegree.replace("%data%",school.degree);
	var formattedStudent = formattedName +  formattedDegree ;
	$(".education-entry:last").append(formattedStudent);
	var formattedDates = HTMLschoolDates.replace("%data%",school.years);
	var formattedLocation = HTMLschoolLocation.replace("%data%",school.location);
	var formattedPlace = formattedDates + formattedLocation;
	$(".education-entry:last").append(formattedPlace);
	var formattedMajor = HTMLschoolMajor.replace("%data%",school.majors);
	$(".education-entry:last").append(formattedMajor);
	
}
 $('#education').append(HTMLonlineClasses);
education.onlinecourses.forEach(course);
function course(online){
	$("#education").append(HTMLschoolStart);
	var formattedTitle = HTMLonlineTitle.replace("%data%",online.title);
	var formattedSchool = HTMLonlineSchool.replace("%data%",online.school);
	$(".education-entry:last").append(formattedTitle + formattedSchool);
	var formattedDates = HTMLonlineDates.replace("%data%",online.years);
	$(".education-entry:last").append(formattedDates);
	var formattedImage = HTMLonlineURL.replace("%data%",online.url);
	$(".education-entry:last").append(formattedImage);
}
var work = {
	"jobs":[
	{
		"employer":"infosys",
		"title":"system engineer",
		"location":"Mysore,India",
		"dates":2016,
		"description":"problem solving engineer"
	}
	
	]
};

work.jobs.forEach(displayWork);
function displayWork(job){
	$("#workExperience").append (HTMLworkStart);
	var formattedEmployer=HTMLworkEmployer.replace("%data%",job.employer);
	var formattedTitle=HTMLworkTitle.replace("%data%",job.title);
	var formattedEmployerTitle=formattedTitle + formattedEmployer;
	$(".work-entry:last").append(formattedEmployerTitle);
	var formattedDates = HTMLworkDates.replace("%data%",job.dates);
	var formattedLocation = HTMLworkLocation.replace("%data%",job.location);
	$(".work-entry:last").append(formattedDates + formattedLocation);
	var formattedDescription = HTMLworkDescription.replace("%data%",job.description);
	$(".work-entry:last").append(formattedDescription);
	
}

var projects = {
	"projects":[
	{
		"title":"online resume",
		"date":"27 oct",
		"description":"building online resume",	
		"url":"http://placehold.it/300"
	}
	]
};

projects.projects.forEach(displayProject);
function displayProject(project){
	$("#projects").append(HTMLprojectStart);
	var formattedTitle = HTMLprojectTitle.replace("%data%",project.title);
	$(".project-entry:last").append(formattedTitle);
	var formattedDates = HTMLprojectDates.replace("%data%",project.date);
	$(".project-entry:last").append(formattedDates);
	var formattedDescription = HTMLprojectDescription.replace("%data%",project.description);
	$(".project-entry:last").append(formattedDescription);
	//var formattedImage = HTMLprojectImage.replace("%data%",project.url);
	//$(".project-entry:last").append(formattedImage);
	
}


//$(document).click(function(loc){
	//var x = loc.Pagex;
	//var y = loc.Pagey;
	//logClicks(x,y);
	
//});
projects.display=function(){
	for(var project in projects.projects){
		$("#projects").append(HTMLprojectStart);
		var formattedDates = HTMLprojectDates.replace("%data%",projects.projects[project].date);
		$(".project-entry:last").append(formattedDates);
		var formattedTitle = HTMLprojectTitle.replace("%data%",projects.projects[project].title);
		$(".project-entry:last").append(formattedTitle);
		var formattedDescription = HTMLprojectDescription.replace("%data%",projects.projects[project].description);
		$(".project-entry:last").append(formattedDescription);
		
		
	}
};
$("#mapDiv").append(googleMap);
/*
This is empty on purpose! Your code to build the resume will go here.
 */
