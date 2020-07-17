function sendMail(form) {
    emailjs.send("gmail", "Milestone_2", {
        "from_name": form.name.value,
        "from_email": form.emailaddress.value,
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
        },
        function(error) {
            console.log("FAILED", error);
        }
    );
    return false;  // To block from loading a new page
}