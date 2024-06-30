let formUser = [
    {
        name: "Nguyen Van A",
        gender: true,
        group: "1",
        email: "nguyena@gmail.com",
        phone: 1234567,
        level: "N2",
        score: 70
    }
]

document.querySelector(".btn").addEventListener('click', function () {
    function addData(newForm) {
        let newForm = {
            name: document.getElementById("fullname").value,
            group: document.getElementById("group").value,
            email: document.getElementById("mail").value,
            phone: document.getElementById("telnumber").value,
            level: document.getElementById("japanlevel").value,
            score: document.getElementById("marks").value,

        }
        let formUser = []
        for (let i = 0; i < newForm.length; i++) {
            newForm.push(formUser)
            localStorage.setItem("newForm", JSON.stringify(newForm))
            return
        }

    }
})
