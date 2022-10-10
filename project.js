
// siore a all project data in a array

let projectData = [
    {
        image: 'image/project-1.png',
        name: 'Netflix Clone',
        detail: 'This is Dynamic netflix clone using TMDB api.in this website there are4 pages have.the pages are index,about,singup,login.whenever you click any card movie its showing his movie details',
        github: 'https://github.com/emranhossain25/Netflix-clone',
        live: 'https://netflixc-clone-byemarn.herokuapp.com/',
        tags: '#javascript, #fullstack'
    },
    {
        image: 'image/project-2.png',
        name: 'E-Comarce',
        detail: 'This is Fully Responsive E-comarce website using html css an js in this website 4 pages have .pages are index,singup,about,product,login and cart page.and its fully responsive',
        github: 'https://github.com/emranhossain25/e-comarce',
        live: 'https://emranhossain25.github.io/e-comarce/',
        tags: '#javascript, #fontend'
    },
    {
        image: 'image/project-3.png',
        name: 'Live Wheather',
        detail: 'this is Real-time wheather application in this appilication you can know your wheather.its fully responsive',
        github: 'https://github.com/emranhossain25/wheather-check',
        live: 'https://emranhossain25.github.io/wheather-check/',
        tags: '#javascript'
    },
    {
        image: 'image/project-4.png',
        name: 'Univercity',
        detail: 'This is Fully Responsive Univercity website using html css an js ',
        github: 'https://github.com/emranhossain25/emran-technical-univercity',
        live: 'https://emranhossain25.github.io/emran-technical-univercity/',
        tags: ' #fontend'
    },
    {
        image: 'image/project-5.png',
        name: 'Diary Book',
        detail: 'This is fullstack diary_book web application,in this application you can registration. and you can write any diary and save your diary in cloud.in the application you can update and delete your diaryCrud and Authentication both are done(MERN)',
        github: '',
        live: 'https://mernappbyemran.herokuapp.com/',
        tags: '#mern'
    },
    {
        image: 'image/project-6.png',
        name: 'TextUtills',
        detail: 'This is TextConverter website in this react website .You can convert text into lowercase to uppercase and can count text nad word',
        github: 'https://github.com/emranhossain25/textutils',
        live: 'https://emranhossain25.github.io/textutils/',
        tags: '#mern'
    },
    {
        image: 'image/codin.png',
        name: 'Coding Blogs',
        detail: 'this is coding blogs websie using bootstarps',
        github: 'https://github.com/emranhossain25/coding_blogs',
        live: 'https://emranhossain25.github.io/coding_blogs/',
        tags: '#fontend'
    },
    {
        image: 'image/s1.png',
        name: 'Food Ordering',
        detail: 'This is online Food ordering website in this website have 4 pages. The Pages are home,menu,ordering,about page.i created this website',
        github: 'https://github.com/emranhossain25/online-food-delivery',
        live: 'https://emranhossain25.github.io/online-food-delivery/',
        tags: '#fontend'
    },
]

// creating project cards in frontend

const createProjectCard = (data)=>{
    let projectContainr = document.querySelector('.project-container');
    projectContainr.innerHTML +=`
            <div class="project-card " data-tags="${data.tags}">
                <div class="project-wrapper">
                    <div class="project-thumbnail">
                        <img src="image/close.png" alt="" class="close-btn">
                        <img src="${data.image}" class="project-img" alt="">
                        <span class="tags">${data.tags}</span>
                    </div>

                    <div class="project-body">
                        <h1 class="project-name">${data.name}</h1>
                        <p class="project-details">${data.detail}</p>
                        <a href="${data.github}" class="btn">Github</a>
                        <a href="${data.live}" class="btn">See Live</a>
                    </div>
                </div>
            </div>
    `
}

//project data foreach to loop through each dat

projectData.forEach(data => createProjectCard(data))