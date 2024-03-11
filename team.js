var teamMembers = []
const teamJSON = "team.json"

function createMember(member) {
    return(
        `
        <div class="col-lg border rounded shadow">
            <div class="container text-center">
                <img src="assets/team/${member.pfp}" alt="" class="img img-fluid my-3">
                <h4>${member.name}</h4>
                <h6>${member.role}</h6>
                <div class="team-links">
                    <a href=${member.github}><i class="bi bi-github fs-5"></i></a>
                    <a href="${member.linkedin}"><i class="bi bi-linkedin fs-5"></i></a>
                </div>
                <p class="fs-6">${member.bio}</p>
            </div>
        </div>
        `
    );
}

function getMembers(members) {
    members.forEach(element => {
        teamMembers.push(createMember(element));
    });
}

$.getJSON(teamJSON, function(data) {
    getMembers(data);
    // console.log(teamMembers);
    teamMembers = teamMembers.join('')
    $('#team-container').html(teamMembers)
})