const slides = document.querySelector('.banner_wrap')
const slideContent = document.querySelectorAll('.banner_wrap .slider .slider_content')
const ContentWidth = slideContent[0].offsetWidth;
const ContentCount = slideContent.length;
console.log(ContentCount)
const prevBtn = document.querySelector('.slideBtn_left')
const nextBtn = document.querySelector('.slideBtn_right')

let currentIdx = 0;

nextBtn.addEventListener('click', next)
prevBtn.addEventListener('click', prev)

function next(){
    if(currentIdx < ContentCount-1){
        slides.style.left = `-${(currentIdx+1)* ContentWidth}px`
        currentIdx += 1;
    } else if(currentIdx = ContentCount-1){
        slides.style.left = `0px`
        currentIdx = 0;
    }
}
function prev(){
    if(currentIdx === 0){
        slides.style.left = `-${(ContentCount-1)* ContentWidth}px`;
        currentIdx = ContentCount-1;
    } else if(currentIdx > 0){
        slides.style.left = `-${(currentIdx-1)* ContentWidth}px`;
        currentIdx = currentIdx-1;
    }
}

