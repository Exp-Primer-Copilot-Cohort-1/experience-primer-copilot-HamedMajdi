function skillsMember() {
    var member = document.getElementById("member");
    var skills = document.getElementById("skills");
    var projects = document.getElementById("projects");
    var contact = document.getElementById("contact");
    var about = document.getElementById("about");
    var memberBtn = document.getElementById("memberBtn");
    var skillsBtn = document.getElementById("skillsBtn");
    var projectsBtn = document.getElementById("projectsBtn");
    var contactBtn = document.getElementById("contactBtn");
    var aboutBtn = document.getElementById("aboutBtn");

    member.style.display = "block";
    skills.style.display = "none";
    projects.style.display = "none";
    contact.style.display = "none";
    about.style.display = "none";

    memberBtn.style.backgroundColor = "rgb(255, 255, 255)";
    memberBtn.style.color = "rgb(0, 0, 0)";
    skillsBtn.style.backgroundColor = "rgb(0, 0, 0)";
    skillsBtn.style.color = "rgb(255, 255, 255)";
    projectsBtn.style.backgroundColor = "rgb(0, 0, 0)";
    projectsBtn.style.color = "rgb(255, 255, 255)";
    contactBtn.style.backgroundColor = "rgb(0, 0, 0)";
    contactBtn.style.color = "rgb(255, 255, 255)";
    aboutBtn.style.backgroundColor = "rgb(0, 0, 0)";
    aboutBtn.style.color = "rgb(255, 255, 255)";
} 