window.onload = ()=> {
    document.querySelector('#add-user').addEventListener('click', addUser)
    document.querySelector('#add-team').addEventListener('click', addTeam)
    document.querySelector('#team-generate').addEventListener('click', generateTeams)
}

let names = []

// Push new user to names array
const addUser = () => {
    // let newUsersList = document.querySelector('.new-users-list')

    let newUser = document.querySelector('#username-input').value
    names.push(newUser)
    newUser = document.querySelector('#username-input').value = ''
    let newUsersList = document.querySelector('.new-users-list')
    newUsersList.innerHTML = ''
    
    for(let i=1; i<=names.length; i++) {
        showUsers(i-1)
    }
}

const showUsers = (i) => {
    
    let newUsersList = document.querySelector('.new-users-list')
    let newNode = document.createElement('h6')
    newNode.innerText = names[i]
    newNode.classList.add('user-node')
    newUsersList.appendChild(newNode)
    
}

const addTeam = () => {
    let numberTeams = document.querySelector('#teams-input').value
    for(let i = 1; i<=numberTeams; i++) {
        createOneTeam(i)
    }
}


const createOneTeam = (newUser) => {

    let teamsNode = document.querySelector('.teams')

    let colNode = document.createElement('div')
    colNode.classList.add('col-6','col-md-4', 'col-lg-3', 'text-center', 'mb-2', 'column')

    let teamNode = document.createElement('div')
    teamNode.classList.add('team', 'p-2', 'bg-info')
    teamNode.innerText = `Team ${newUser}`

    colNode.appendChild(teamNode)


    teamsNode.appendChild(colNode)

}

const generateTeams = () => {
    for(let i=0; i<=names.length; i++) {
    randomNumberUsers = Math.floor(Math.random() * names.length)
    randomNumberTeams = Math.floor(Math.random() * 4)
    let columns = document.querySelectorAll('.column')

    let h6 = document.createElement('h6')
    h6.innerText = (names[randomNumberUsers])
    columns[randomNumberTeams].appendChild(h6)
    console.log(names[randomNumberUsers]) 
    }
    document.querySelector('.new-users-list').innerHTML = ''
    names = []
}