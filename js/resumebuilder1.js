 BUILD HEADER 
*/

//   CREATE VARIABLES

var name = "Oliver Stigley";
var formattedName = HTMLheaderName.replace("%data%", name);

var role = "Web Developer";
var formattedRole = HTMLheaderRole.replace("%data%", role);


var skills = ["HTML", "CSS", "Javascript", "NodeJs", "Ruby on Rails", "Business Development", "Project Management"];

var bio = {
    name: name,
    role: role,
    contacts: {
        email: "<a href=\"mailto:oliverstigley@gmail.com\">oliverstigley@gmail.com</a>",
        mobile: "<a href=\"tel:+64226360167\">+64-226-360-167</a>",
        location: "Wellinton, New Zealand",
        twitter: "<a href=\"http://twitter.com/oliverstigley\">@oliverstigley</a>",
        github: "<a href=\"http://github.com/ostigley\">ostigley</a>",
        blog: "<a href=\"http://ostigley.github.io\">ostigley</a>",
    },
    pictureURL: "images/udacitybiopic.jpg",
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
    $("#topContacts").append(formattedgithub);
    $("#topContacts").append(formattedemail);
    $("#topContacts").append(formattedmobile);
    $("#topContacts").append(formattedblog);
    $("#topContacts").append(formattedtwitter);

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
Build objects with data on Oliver. 
*/
var work = {
    "jobs":[ 
        {
        "Position": "Student",
        "Employer": "Enspiral Development Academy",
        "location": ["Wellington, New Zealand","Current residence, born & bred"],
        "Dates": "February 2016 - June 2016",
        "Description": "I retrained as a web developer through this bootcamp style accademy, specialising in HTML, Javascript, NodeJS and Ruby on Rails."
        },
        {
        "Position": "Volunteer Teacher",
        "Employer": "GVI Luang Prabang",
        "location": ["Luang Prabang, Laos","Volunteer Teacher, 2016"],
        "Dates": "February 2016 ",
        "Description": "I had a life changing experience volunteering for a month as an English teacher in Luang Prabang Laos.  I was teaching children and Novice Monks English in local schools, and Buddhist temples."
        },
        {
        "Position": "Business Development Manager",
        "Employer": "TalkingTech UK",
        "location": ["London, United Kingdom","I worked and lived in London from 2008-2016"],
        "Dates": "2013 - 2016",
        "Description": "As a Business Development Manager, I sought new partnerships and opportunities  with companies looking to fundamentally change the way the interact with their consumers.  TALKINGTECH specialises in omni-channel solutions encompassing digital communications, customer experience and payments."
        },
        {
        "Position": "Business Development Manager",
        "Employer": "New Zealand Trade & Enterprise",
        "location": ["London, United Kingdom","I worked and lived in London from 2008-2016"],
        "Dates": "2010 - 2013",
        "Description": "Assisting New Zealand companies internationalise on an individual basis, but also working within regional and global projects.  My responsibilities include providing market intelligence and consultancy services to New Zealand companies, implementing special projects that deliver strategies and solutions for the sustainable economic growth of the New Zealand economy.  "
        },
        {
        "Position": "Technology Market Researcher",
        "Employer": "Qi3 Ltd",
        "location": ["London, United Kingdom","I worked and lived in London from 2008-2016"],
        "Dates": "2008 - 2010",
        "Description": "Click to edit position descriptionAs Technology Market Researcher, I worked as part of a wider team on a consultant basis for technology companies and universities. Actively involved with researching applications for new technologies, advising commercialisation strategy and finding customers, business partners and funding opportunities."
        },
        {
        "Position": "Internal Sales",
        "Employer": "Laser 2000 Ltd",
        "location": ["Cambridge, United Kingdom","Internal Sales Assistant, 2006-2008"],
        "Dates": "2006 - 2008",
        "Description": "Inernal Sales assistant"
        },
        {
        "Position": "Intern Laser Engineer",
        "Employer": "Coheret Systems",
        "location": ["Glasgow, United Kingdom","MSc student and R&D internship, 6 months"],
        "Dates": "2006",
        "Description": "I was part of a research and development team, working on new product development with laboratory and manufacturing lasers"
        }
    ]
}
    

var education = { 
    "schools": [ 
        {
        "name": "Enspiral Development Academy",
        "subjects": "Web Development",
        "years": "2016",
        "location": ["Wellinton, New Zealand","Current residence, born & bred"],
        "major": "HTML, CSS, Javascript, NodeJS, Ruby on Rails"
        }, 
        {
        "name": "University of St Andrews",
        "subjects": "MSc", 
        "years": "2005-2006",
        "location": ["St Andrews, Scotland", "MSc Student, Photonics & Optoelectronics"],
        "major": "Photonics and Optoelectronics"
        }, 
        {
        "name": "University of Otago",
        "subjects": "BA",
        "years": "2001-2005",
        "location": ["Dunedin, New Zealand", "Undergraduate student, 2001-2005"],
        "major": "Philosophy, Politics & Economics"
        },
        {
        "name": "University of Otago",
        "subjects": "BSc",
        "years": "2001-2005",
        "location": ["Dunedin, New Zealand", "Undergraduate student, 2001-2005"],
        "major": "Physics"
        }
    ]
}

var projects = {
    "project": [
        {
            "dates": "February 2016 - Ongoing",
            "title": "ostigley",
            "description": "Github bloging site to act as my homepage for my Enspiral Development Academy blogs and projects",
            "skills": "HTML, CSS, Responsive Design",
            "url": "ostigley.github.io"
            
        },
        {
            "dates": "March 2016",
            "title": "Motormad",
            "description": "A simple Javascript game featuring two cars racing the wrong way down a highway.",
            "skills": "Javascript",
            "url": "ostigley.github.io/racecar.html",
            "image": "images/racer.jpg"
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
        var formattedDates  = HTMLprojectDates.replace('%data%', projects.project[i].dates)
        var formattedDescription  = HTMLprojectDescription.replace('%data%',projects.project[i].description )
        var formattedImage = "";
        if(projects.project[i].hasOwnProperty("image")) {
            formattedImage = HTMLprojectImage.replace('%data%', projects.project[i].image);
        }
        $('#projects').append(HTMLprojectStart);
        $('.project-entry:last').append(formattedTitle);
        $('.project-entry:last').append(formattedDates);
        $('.project-entry:last').append(formattedDescription);
        $('.project-entry:last').append(formattedImage);
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




$('#mapDiv').append(googleMap);