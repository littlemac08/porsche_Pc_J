/* Gnb Deps1 */
const elheader = document.querySelector('.header')
const elGnbUl = document.querySelector('.nav .gnb')
const elGnbLi = document.querySelectorAll('.nav .gnb > .gnb_main')
const elGnbDeps = [
    document.querySelector('.dep1_wrap'),
    null, null, null, null, null, null,
    document.querySelector('.dep8_wrap')
    ];
const elCloseBtn = document.querySelector('.close_btn')
/* Gnb Deps2 */
const elGnbSubArticle1 = document.querySelectorAll('.dep1_wrap .wrap_1 .article1 > li')
const elGnbSubArticle2 = document.querySelectorAll('.dep1_wrap .wrap_1 .article2 ul')
const elGnbSubArticle2Content = document.querySelectorAll('.dep1_wrap .wrap_1 .article2 ul > li')

let ArticleIdx = 0; //rest index number

/* Gnb Deps1 */
// elGnbLi.forEach(function(el, index){
//     el.addEventListener('mouseover',function(e){
//         if(elGnbDeps[index]){
//             elheader.classList.add('active')
//             elGnbSubArticle2[ArticleIdx].classList.add('active')
//             elGnbDeps[index].classList.add('active')
//         }
//     })
//     elCloseBtn.addEventListener('click', function(e){
//         elGnbDeps.forEach(function(el, index){
//             el.classList.remove('active')
//             elheader.classList.remove('active')
//         })
//     })
// })
/* Gnb Deps1 */
elGnbLi.forEach(function(el, index){
    if(index < 5){
        el.addEventListener('mouseover',function(e){
            if(elGnbDeps[index]){
                elheader.classList.add('active')
                elGnbSubArticle2[ArticleIdx].classList.add('active')
                elGnbDeps[index].classList.add('active')
            } 
        })
        elCloseBtn.addEventListener('click', function(e){
            elGnbDeps.forEach(function(el, index){
                if(elGnbDeps[index]){
                el.classList.remove('active')
                elheader.classList.remove('active')
                }
            })
        })
    } else {
        el.addEventListener('mouseover',function(e){
            if(elGnbDeps[index]){
                elheader.classList.add('active')
                elGnbSubArticle2[ArticleIdx].classList.add('active')
                elGnbDeps[index].classList.add('active')
            } 
        })
        el.addEventListener('mouseout',function(e){
            if(elGnbDeps[index]){
                elheader.classList.remove('active')
                elGnbSubArticle2[ArticleIdx].classList.remove('active')
                elGnbDeps[index].classList.remove('active')
            }
        })
    }
})



/* Gnb Deps2 */
elGnbSubArticle1.forEach(function(el, index){
    el.addEventListener('mouseover',function(e){
        if(elGnbSubArticle2[ArticleIdx]){
            elGnbSubArticle2[ArticleIdx].classList.remove('active') //before mouseover index del
            elGnbSubArticle2[index].classList.add('active')
            ArticleIdx = index; //index number save
        }
    })
    el.addEventListener('mouseout', function(e){
        elGnbSubArticle2.forEach(function(el, index){
            el.classList.remove('active')
        })
    })
})


/* main slider */
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
        dotBtn[currentIdx].style.background = 'lightgray'
        currentIdx += 1;
        dotBtn[currentIdx].style.background = 'midnightblue'
    } else if(currentIdx === ContentCount-1){
        slides.style.left = `0px`
        dotBtn[currentIdx].style.background = 'lightgray'
        currentIdx = 0;
        dotBtn[currentIdx].style.background = 'midnightblue'
    }
}
function prev(){ //prev 버튼 함수
    if(currentIdx === 0){
        slides.style.left = `-${(ContentCount-1)* ContentWidth}px`;
        dotBtn[currentIdx].style.background = 'lightgray'
        currentIdx = ContentCount-1;
        dotBtn[currentIdx].style.background = 'midnightblue'
    } else if(currentIdx > 0){
        slides.style.left = `-${(currentIdx-1)* ContentWidth}px`;
        dotBtn[currentIdx].style.background = 'lightgray'
        currentIdx = currentIdx-1;
        dotBtn[currentIdx].style.background = 'midnightblue'
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
        slides.style.left = `-${dotNumber * ContentWidth}px`
        dotBtn[currentIdx].style.background = 'lightgray'
        currentIdx = dotNumber;
        dotBtn[currentIdx].style.background = 'midnightblue'
    })
})

/* sub slider */
const elSubNextBtn = document.querySelector('.nav_side .next_btn')
const elSubPrevBtn = document.querySelector('.nav_side .prev_btn')
const elSubSlider = document.querySelector('.nav_btn > ul')

elSubNextBtn.addEventListener('click', function(){
    if(elSubSlider.style.left === '-720px'){
        elSubSlider.style.left = '0px'

    } else {
        elSubSlider.style.left = '-720px'
    }
})

elSubPrevBtn.addEventListener('click', function(){
    if(elSubSlider.style.left === '0px'){
        elSubSlider.style.left = '-720px'
    } else {
        elSubSlider.style.left = '0px'
    }
})

/* content1 */
const elGender = document.querySelectorAll('.content_wrap .content1 .content_inside .content_right > ul > li')
const elContentLeft_img = document.querySelectorAll('.content_wrap .content1 .content_inside .content_left > a')
const elContentleft_text = document.querySelectorAll('.content_wrap .content1 .content_inside .content_right > h2')
const elContentRight1 = document.querySelectorAll('.content_wrap .content1 .content_inside .content_right .right_imgs > ul:nth-child(1) > li')
const elContentRight2 = document.querySelectorAll('.content_wrap .content1 .content_inside .content_right .right_imgs > ul:nth-child(2) > li')

let genderIdx = 0;

elGender.forEach(function(gender, index){
    gender.addEventListener('click',function(e){
        e.preventDefault();
        // console.log(`이전 인덱스: ${genderIdx}, 클릭한 인덱스: ${index}`);
        elContentLeft_img[genderIdx].classList.remove('active');
        elContentleft_text[genderIdx].classList.remove('active');
        elContentRight1[genderIdx].classList.remove('active');
        elContentRight2[genderIdx].classList.remove('active');
        elContentLeft_img[index].classList.add('active');
        elContentleft_text[index].classList.add('active');
        elContentRight1[index].classList.add('active');
        elContentRight2[index].classList.add('active');
        genderIdx = index;
    })
})
