// project card section 
// for open and close btn

//navbar toggle

let links = document.querySelectorAll('.links');

links.forEach(link =>{
    link.addEventListener('click', ()=>{
        links.forEach(item => item.classList.remove('active'))
        link.classList.add('active')
    })
})


// toggle navbar

const toggleeBTn = document.querySelector('.toggle-btn');
const ul = document.querySelector('.nav-link-conatiner');

toggleeBTn.addEventListener('click', ()=>{
    toggleeBTn.classList.toggle('active');
    ul.classList.toggle('active');
})

let project = document.querySelectorAll('.project-card');

project.forEach((card,index)=>{
    let closeBtn = card.querySelector('.close-btn');
    closeBtn.addEventListener('click', ()=>{
        project.forEach((item,i)=>{
           item.classList.remove('blur')
        })
        card.classList.remove('active');
    })

    card.addEventListener('click', (e)=>{
        if(e.path[0] != closeBtn){
            project.forEach((item,i)=>{
                if(i!=index){
                    item.classList.add('blur')
                }
            })
            card.classList.add('active')
        }
    })
})

let tags = document.querySelectorAll('.filter-btn');

tags.forEach(btn =>{
    btn.addEventListener('click' ,()=>{
        project.forEach((card)=>{
            if(btn.innerHTML.toLowerCase() == 'all'){
                card.style.display = 'block'
            }else{
                if(card.getAttribute('data-tags').includes(btn.innerHTML.toLowerCase())){
                    card.style.display='block'
                }
                else{
                    card.style.display = 'none'
                }
            }
        })
        tags.forEach(item => item.classList.remove('active'))
        btn.classList.add('active')
    })
})