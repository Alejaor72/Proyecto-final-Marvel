const storage = window.localStorage
function validateLoggedUser() {
    const loggedUser = storage.getItem("user")
    const user = JSON.parse(loggedUser)
    if(!user.isLogged) {
        window.location.href = 'login.html'
    } else {
        listButtons()
    }
}

const data = [
    {
        id: 1,
        label: "Click me 1"
    },
    {
        id: 2,
        label: "Click me 2"
    },
    {
        id: 3,
        label: "Click me 3"
    },
    {
        id: 4,
        label: "Click me 4"
    }
]

const buttonsDiv = document.getElementById("listapersonajes")

function createButton(button, pos) {
    return "<button onclick='buttonClicked(" + pos + ")'>" + button.label + "</button>"
}

function listButtons() {
    var pos = 0
    data.forEach(button => {
        buttonsDiv.innerHTML += createButton(button, pos)
        pos++
    })
}

function buttonClicked(pos) {
    const button = data[pos]
    window.location.href = './detail.html?id=' + button.id
}


validateLoggedUser()