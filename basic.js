const elGnbList = document.querySelectorAll('.nav .gnb_main')
const elDeps1 = document.querySelector('.nav .gnb_main .dep1_wrap')

let num = 0;

elGnbList.forEach(function(li,index){
    elGnbList[index].addEventListener('mouseover',function(){
        elGnbList[index]
        console.log(elGnbList[index])
    })

})