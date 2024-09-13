var _a;
// Listen for form submission
(_a = document.getElementById('resumeFrom')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    event.preventDefault();
    // Type assertion and getting input elements
    var nameElement = document.getElementById('name');
    var emailElement = document.getElementById('email');
    var mobileElement = document.getElementById('mobile');
    var educationElement = document.getElementById('education');
    var experienceElement = document.getElementById('experience');
    var skillsElement = document.getElementById('skills');
    // Check if all elements are present
    if (nameElement && emailElement && mobileElement && educationElement && experienceElement && skillsElement) {
        var name_1 = nameElement.value;
        var email = emailElement.value;
        var mobile = mobileElement.value;
        var education = educationElement.value;
        var experience = experienceElement.value;
        var skills = skillsElement.value;
        // Create resume output
        var resumeOutput = "\n            <h2>Resume</h2>\n            <p><strong>Name:</strong> ".concat(name_1, "</p>\n            <p><strong>Email:</strong> ").concat(email, "</p>\n            <p><strong>Mobile:</strong> ").concat(mobile, "</p>\n\n            <h3>Education</h3>\n            <p>").concat(education, "</p>\n\n            <h3>Experience</h3>\n            <p>").concat(experience, "</p>\n\n            <h3>Skills</h3>\n            <p>").concat(skills, "</p>\n        ");
        // Display the resume output
        var resumeOutputElement = document.getElementById('resumeOutput');
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
        }
        else {
            console.error('The resume output element is missing');
        }
    }
    else {
        console.error('One or more input elements are missing');
    }
});
