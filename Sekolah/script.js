function showContent(contentId) {
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => {
        section.style.display = 'none';
    });
    document.getElementById(contentId).style.display = 'block';
}

function submitRegistrationForm(event) {
    event.preventDefault();
    alert('Formulir pendaftaran telah dikirim!');
}
