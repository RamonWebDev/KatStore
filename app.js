window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });


  function submitForm() {
    let email = document.getElementById('emailInfo').value.trim()
    let comment = document.getElementById('commentInfo').value.trim()

    if(email && comment){
        document.getElementById('questionForm').style.display = 'none';  // Hide the form
        document.getElementById('confirmationMessage').style.display = 'block';  // Show the message
    } else {
        alert("Email or Comment is empty. Please fill out")
    }

  }