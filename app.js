function myForm() {

    let personName = document.querySelector(".fullname");
    let personEmail = document.querySelector(".email");
    let personPhoto = document.querySelector(".photo");
    let personBatch = document.querySelector(".batch");
    let personCourse = document.querySelector(".course");


    if (
        personName.value && personEmail.value && personCourse.value && personBatch.value && personPhoto.files.length > 0
    ) {

        let file = personPhoto.files[0];
        let photoUrl = URL.createObjectURL(file);


        let personInfo = {
            name: personName.value,
            email: personEmail.value,
            course: personCourse.value,
            batch: personBatch.value,
            photo: photoUrl,
        };


        idCard(personInfo);
    } else {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "ID Card will not be generated until you fill it out.",
            footer: '<a href="#">Refresh the page and try again.</a>'
        });
    }
}

function idCard(personInfo) {
    let idCardUI = `
    <div class="idCard" >
        <div class="picture">
            <img src="${personInfo.photo}" alt="Profile Photo" width="100px" height="100px">
        </div>
        <div class="data">
            <div class="name">
                <b>Name:</b> <span>${personInfo.name}</span>
            </div>
            <div class="email">
                <b>Email:</b> <span>${personInfo.email}</span>
            </div>
            <div class="course">
                <b>Course:</b> <span>${personInfo.course}</span>
            </div>
            <div class="batch">
                <b>Batch:</b> <span>${personInfo.batch}</span>
            </div>
        </div>
    </div>`;


    let idCard = document.getElementById("idCard");
    idCard.innerHTML = idCardUI;
    idCard.style.display = "block";
}