function loadCategories() {
    fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
        .then(res => res.json())
        .then(data => displayCategories(data.categories))
}

loadCategories()

function displayCategories(categories) {
    const container = document.getElementById('category-container')
    for (const category of categories) {
        const categorySection = document.createElement('div')
        categorySection.innerHTML = `
            <button class="btn btn-sm">${category.category}</button>
        `
        container.appendChild(categorySection)
    }
}

async function loadVideos() {
    await fetch('https://openapi.programming-hero.com/api/phero-tube/videos')
        .then(res => res.json())
        .then(data => videos(data.videos))
}


const videos = (video) => {
    const videosContainer = document.getElementById('videos-container');
    video.forEach(element => {
        console.log(element.authors[0].profile_name)
        const videoCard = document.createElement('div');
        videoCard.innerHTML = `
        <div class="card bg-base-100">
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

loadVideos()