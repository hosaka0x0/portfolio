const client =contentful.createCliant({
    space:'YOUR_SPACE_ID',
    accessToken:'YOUR_DELIVERY_API_ACCESS_TOKEN'
});

document.addEventListener('DOMcontentLoaded',function() {
    console.log('Welcome to My Portfolio Site!')
});

function fetchProjests(){
    client.getEntries({
        client.getEntries({
            content_type:'project'
        })
        .then ((response)=>{
            const projects =response.items;
            const projectsContainer = document.getElementById('projects-container');

            projects.forEach(project=>{
                const title = project.fields.title;
                const description =project.fields.description;
                const imageUrl = project.fields.image.fields.file.url;

                const projectCard = document.createElement('div');
                projectCard.classList.add('project');

                projectCard.innerHTML=`
                <img src="${imageUrl}" alt="${Title}">
                <h3>${title}</h3>
                <p>${description}</p>
                `;
                projectsContainer.appendChild(projectCard);

            })
        })
    })
    .catch(console.error);
}

document.addEventListener('DOMcontentLoaded',function() {
    fetchProjests();
});
