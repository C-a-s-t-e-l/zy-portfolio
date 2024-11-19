function viewPDF(pdfPath) {

    window.open(pdfPath, '_blank');
}



function sendEmail(event) {
    event.preventDefault(); 

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    const subject = encodeURIComponent("Contact Form Message from " + name);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);

    const mailtoLink = `mailto:yssabeltuson114@yahoo.com?subject=${subject}&body=${body}`;

    window.location.href = mailtoLink;
}