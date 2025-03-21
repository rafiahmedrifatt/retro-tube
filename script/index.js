//Category button loaded and displayed
function loadCategories() {
    fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
        .then(res => res.json())
        .then(data => displayCategories(data.categories))
}

loadCategories()

function displayCategories(categories) {
    const container = document.getElementById('category-container')
    for (const category of categories) {
        // console.log(category.category_id)
        const categorySection = document.createElement('div')
        categorySection.innerHTML = `
            <button onclick="loadVideosAccordingToCategories(${category.category_id})" class="category-btn btn btn-sm">${category.category}</button>
        `
        container.appendChild(categorySection)
    }
}

// const categoryBtn = document.getElementsByClassName('.category-btn');
// console.log(categoryBtn)
// for (let i = 0; i < categoryBtn.length; i++) {
//     console.log(categoryBtn[i])
//     categoryBtn.addEventListener('click', (event) => {
//         console.log('btn clicked')
//     })
// }


//videos loaded and displayed
function loadVideos() {
    fetch('https://openapi.programming-hero.com/api/phero-tube/videos')
        .then(res => res.json())
        .then(data => videos(data.videos))
}


const videos = (video) => {
    let videosContainer = document.getElementById('videos-container');
    if (video.length === 0) {
        videosContainer.innerHTML =
            `<div class="col-span-full text-center">
            <div>
                <img class="mx-auto relative" src="assets/Icon.png" alt="">
            </div>
            <p class="text-4xl font-bold mt-10">Sorry! No video available according to this niche</p>
        </div>`
        return
    }
    videosContainer.innerHTML = ''
    video.forEach(element => {
        const videoCard = document.createElement('div');
        videoCard.innerHTML = `
        <div class="card bg-base-100 cursor-pointer" onclick="my_modal_1.showModal()">
        <figure class="relative w-full h-[200px] object-cover">
        <img src="${element.thumbnail}" />
        <span class="absolute bg-black text-white rounded-md bottom-2 right-2 p-1">3hrs 56 min
        ago</span>
        </figure>
        <div class="flex gap-3 mt-2">
        <div class="profile-picture">
        <div class="avatar p-4">
        <div class="ring-primary ring-offset-base-100 w-15 rounded-full ring ring-offset-2 h-auto">
        <img src="${element.authors[0].profile_picture}" />
        </div>
        </div>
        </div>
        <div class="video-description">
        <h3 class="font-semibold text-2xl">${element.title}</h3>
        <p class="flex gap-2 text-gray-500 text-lg"> ${element.authors[0].profile_name}
        <img class="w-6 h-auto"
        src="https://img.icons8.com/?size=100&id=98A4yZTt9abw&format=png&color=000000" alt="">
        </p>
        <p class=" gap-2 text-gray-500 text-lg">91K views</p>
        </div>
        </div>
        </div>`
        videosContainer.appendChild(videoCard)
    });

}


//videos loaded according to categories and displayed accordingly

const loadVideosAccordingToCategories = (id) => {
    const url = `https://openapi.programming-hero.com/api/phero-tube/category/${id}`

    fetch(url)
        .then(res => res.json())
        .then(data => videos(data.category))
}

const reload = () => {
    location.reload()
}


// load video details
const videoDetails = () => {
    fetch(`https://openapi.programming-hero.com/api/phero-tube/video/${video_id}`)
        .then(res => res.json())
        .then(data => console.log(data))
}


loadVideos()