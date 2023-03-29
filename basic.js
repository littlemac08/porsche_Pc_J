const slides = document.querySelector('.banner_wrap .slider') //슬라이더 선택
const slideContent = document.querySelectorAll('.banner_wrap .slider .slider_content') //슬라이더 컨텐츠 선택
const ContentWidth = slideContent[0].offsetWidth; //컨텐츠 width 불러오기
const ContentCount = slideContent.length; //컨텐츠 갯수 불러오기
const prevBtn = document.querySelector('.slideBtn_left') //next 버튼
const nextBtn = document.querySelector('.slideBtn_right') //prev 버튼
const elDots = document.querySelector('.dots') //dots 부모




let currentIdx = 0; //index 시작값 0 설정

nextBtn.addEventListener('click', next) //next click 버튼
prevBtn.addEventListener('click', prev) //prev click 버튼

function next(){ //next 버튼 함수
    if(currentIdx < ContentCount-1){
        slides.style.left = `-${(currentIdx+1)* ContentWidth}px`
        currentIdx += 1;
    } else if(currentIdx === ContentCount-1){
        slides.style.left = `0px`
        currentIdx = 0;
    }
}
function prev(){ //prev 버튼 함수
    if(currentIdx === 0){
        slides.style.left = `-${(ContentCount-1)* ContentWidth}px`;
        currentIdx = ContentCount-1;
    } else if(currentIdx > 0){
        slides.style.left = `-${(currentIdx-1)* ContentWidth}px`;
        currentIdx = currentIdx-1;
    }
}
let newBtn
for(let i = 0; i < ContentCount; i++){
    const newBtn = document.createElement('button')
    newBtn.append(i);
    elDots.append(newBtn)
}

const dotBtn = document.querySelectorAll('.dots button') //dots 버튼들

dotBtn.forEach(function(dot,dotNumber){
    dot.addEventListener('click',function(){
        slides.style.left = `-${(dotNumber) * ContentWidth}px`
        currentIdx = dotNumber;
    })
})



