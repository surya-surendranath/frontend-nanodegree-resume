
//   CREATE VARIABLES

var name = "Surya S Nath";
var formattedName = HTMLheaderName.replace("%data%", name);

var role = "Software Developer";
var formattedRole = HTMLheaderRole.replace("%data%", role);


var skills = ["HTML", "CSS", "Javascript", "C#", "Visual Basic", "Peoplesoft","Asp.net", "Project Management"];

var bio = {
    name: name,
    role: role,
    contacts: {
        email: "<a href=\"mailto:surya.snath08@gmail.com\"> surya.snath08@gmail.com</a>",
        mobile: "<a href=\"tel:+64220860987\">+64-220-860-987</a>",
        location: "Wellington, New Zealand",
        twitter: "<a href=\"http://twitter.com/ssumeshsurya\">@ssumeshsurya</a>",
        github: "<a href=\"http://github.com/surya-surendranath\">surya-surendranath</a>",
        blog: "<a href=\"http://surya-surendranath.github.io\">surya-surendranath</a>",
    },
    pictureURL: "images/IMG.jpg",
    skills: skills,
    welcomeMessage: "Hello World"
 };

//  function for displaying data.
bio.display = function(){
    var formattedPicture = HTMLbioPic.replace('%data%', bio.pictureURL);
    var biolist = HTMLcontactGeneric.replace
    var formattedmobile = HTMLmobile.replace('%data%', bio.contacts.mobile)
    var formattedemail = HTMLemail.replace('%data%', bio.contacts.email)
    var formattedtwitter = HTMLtwitter.replace('%data%', bio.contacts.twitter)
    var formattedgithub = HTMLgithub.replace('%data%', bio.contacts.github)
    var formattedblog = HTMLblog.replace('%data%', bio.contacts.blog)

    //  APPEND UPDATED DATA

    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName);
    $('#header').append(formattedPicture);
    $("#Contacts").append(formattedgithub);
    $("#Contacts").append(formattedemail);
    $("#Contacts").append(formattedmobile);
    $("#Contacts").append(formattedblog);
    $("#Contacts").append(formattedtwitter);

    if (bio.skills.length > 0 ) {
        $('#header').append(HTMLskillsStart);
        for (i=0; i<bio.skills.length; i++) {
            var formattedSkill = HTMLskills.replace('%data%', bio.skills[i]);
            $('#skills').append(formattedSkill);    
        }
    }
}
bio.display();


/*
*/
var work = {
    "jobs":[ 
     {
        "Position": "Office Assistant",
        "Employer": "New World",
        "location": ["Wellington,New Zealand"],
        "Dates": "September 2015 - Present",
         "Description": "Part time job for supporting Accountant"
        },
        {
        "Position": "Associate Consultant",
        "Employer": "HCL Technologies",
        "location": ["Noida, India"],
        "Dates": "june 2012 - Sep 2013",
        "Description": "I have worked for clients such as Singapore Polytechnic and Sharda University. I have done a pure technical support role"
        },
        
        {
        "Position": "Software Engineer",
        "Employer": "HCL Technologies",
        "location": "Chennai,India",
        "Dates": "August 2011 - May 2012",
        "Description": "Worked for Oracle peoplesoft technology.I have done development, support as well as testing"
        },
        {
        "Position": "Software Intern",
        "Employer": "M Squared Technologies",
        "location": ["Trivandrum,India"],
        "Dates": "September 2010 - October 2010",
        "Description": "Inplant training programme"
        }

    ]
}
    

var education = { 
    "schools": [ 
        {
        "name": "Enspiral Development Academy",
        "subjects": "Web Development",
        "years": "2016",
        "location": "Wellington, New Zealand",
        "major": "HTML, CSS, Javascript"
        }, 
        {
        "name": "Whitireia New Zealand",
        "subjects": "Post graduation in Information Technology", 
        "years": "2014 - 2015",
        "location": ["Wellington,  New Zealand"],
        "major": "Asp.net,Android,Testing,Project Management,Data Mining"
        }, 
        {
        "name": "Annamalai University",
        "subjects": "Bachelor of Engineering",
        "years": "2008 - 2011",
        "location": ["Chennai, India"],
        "major": "Visual basic, Dot net, C,C++,java"
        }
    ]
}

var projects = {
    "project": [
        {
            "dates": "February 2016 - :Present",
            "title": "surya-surendranath",
            "description": "Developing new website using html,css and javascript framework for Enspiral Dev Academy",
            "skills": "HTML, CSS, Responsive Design,javascript",
            "url": "<a href=\"http://surya-surendranath.github.io\">surya-surendranath</a>"
            
        },
        {
            "dates": "March 2016",
            "title": "Car Racer",
            "description": "A small game using javascript to understand the functionality of keys",
            "skills": "Javascript",
            "url": "<a href=\"http://surya-surendranath.github.io/javascript-racer\">javascript-racer</a>"
            
        }
    ]
}

work.displayWork = function displayWork() {
    for (job in work["jobs"]) {

        var employer = HTMLworkEmployer.replace('%data%', work["jobs"][job]["Employer"]);
        var position = HTMLworkTitle.replace('%data%', work["jobs"][job]["Position"]);
        var formattedDate = HTMLworkDates.replace('%data%', work["jobs"][job]["Dates"]);
        var formattedLocation = HTMLworkLocation.replace('%data%', work["jobs"][job]["location"][0]);
        var formattedDescription = HTMLworkDescription.replace('%data%', work["jobs"][job]["Description"]);
        $('#workExperience').append(HTMLworkStart);
        $('.work-entry:last').append(employer+position);
        $('.work-entry:last').append(formattedDate);
        $('.work-entry:last').append(formattedLocation);
        $('.work-entry:last').append(formattedDescription);
    };
    $("#workExperience").click(function(){
        $(".work-entry").toggleClass("hide");
    });
};

work.displayWork();

projects.displayProjects = function(){
    for (var i in projects.project) {
        var formattedTitle = HTMLprojectTitle.replace('%data%', projects.project[i].title);
        var formattedDates  = HTMLprojectDates.replace('%data%', projects.project[i].dates);
        var formattedDescription  = HTMLprojectDescription.replace('%data%',projects.project[i].description );
        var formattedUrl  = HTMLProjectURL.replace('%data%',projects.project[i].url );
       // var formattedImage = "";
        //if(projects.project[i].hasOwnProperty("image")) {
          //  formattedImage = HTMLprojectImage.replace('%data%', projects.project[i].image);
       // }
        $('#projects').append(HTMLprojectStart);
        $('.project-entry:last').append(formattedTitle);
        $('.project-entry:last').append(formattedDates);
        $('.project-entry:last').append(formattedDescription);
        $('.project-entry:last').append(formattedUrl);
       // $('.project-entry:last').append(formattedImage);
    }
    $("#projects").click(function(){
        $(".project-entry").toggleClass("hide");
    });
}

projects.displayProjects();

education.displayEducation = function(){
    for (var school in education.schools) {
        var formattedName = HTMLschoolName.replace('%data%',education.schools[school].name);
        var formattedDegree = HTMLschoolDegree.replace('%data%',education.schools[school].subjects);
        var formattedDates = HTMLschoolDates.replace('%data%',education.schools[school].years);
        var formattedLocation = HTMLschoolLocation.replace('%data%',education.schools[school].location[0]);
        var formattedMajor = HTMLschoolMajor.replace('%data%',education.schools[school].major);

        $('#education').append(HTMLschoolStart);
        $('.education-entry:last').append(formattedName+formattedDegree);
        $('.education-entry:last').append(formattedDates);
        $('.education-entry:last').append(formattedLocation);
        $('.education-entry:last').append(formattedMajor);

        console.log(school);
    }
$("#education").click(function(){
    $(".education-entry").toggleClass("hide");
})

}

education.displayEducation();



$('#mapDiv').append(internationalizeButton);

$('#mapDiv').append(googleMap);

function locationizer(work_obj) {
    'use strict';
    var locationArray = [];
     locationArray.forEach(function (work_obj) {
         var newLocation = work_obj.jobs[job].location;
         locationArray.push(newLocation);
        console.log(work_obj);
   });
    return locationArray;
 }