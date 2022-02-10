window.onload = ()=> {
    document.querySelector('#add-user').addEventListener('click', addUser)
    document.querySelector('#add-team').addEventListener('click', addTeam)
}


const addUser = () => {
    let newUsersList = document.querySelector('.new-users-list')

    let newUser = document.querySelector('#username-input').value
    let newNode = document.createElement('h6')
    newNode.innerText = newUser
    newNode.classList.add('user-node')


    newUsersList.appendChild(newNode)
}




const addTeam = () => {
    let numberTeams = document.querySelector('#teams-input').value
    for(let i = 1; i<=numberTeams; i++) {
        createOneTeam(1)
    }
}

// <!-- <div class="col-3 text-center">
// <div class="team p-2 bg-info">Team 1</div>
// <h3>John</h3>
// </div>


const createOneTeam = (newUser) => {



    let teamsNode = document.querySelector('.teams')
    console.log(teamsNode)

    let colNode = document.createElement('div')
    colNode.classList.add('col-3', 'text-center', 'mb-2')
    console.log(colNode)

    let teamNode = document.createElement('div')
    teamNode.classList.add('team', 'p-2', 'bg-info')
    teamNode.innerText = `Team ${newUser}`

    colNode.appendChild(teamNode)

    teamsNode.appendChild(colNode)

}