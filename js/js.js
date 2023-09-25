//swiper 슬라이드

const swiper = new Swiper('.slider_main', {
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    type: "fraction",
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});



//gnb 슬라이드메뉴
const gnbBtn = document.querySelector('.gnbBtnTrigger');
const gnb = document.querySelector('.gnb');
const dark = document.querySelector('.dark');

//gnb 슬라이드메뉴-튀어나오게
gnbBtn.onclick=()=>{
  gnb.style = 'transform:translateX(0)';
  dark.style.display = 'block'
}
//gnb 슬라이드메뉴-들어가게(loginPop 사라지게)
dark.onclick = () => {
  gnb.style = 'transform:translateX(-100%)';
  dark.style.display = 'none';
  loginPop.style.display = 'none';
}

//gnb내의 서브메뉴 열기/닫기
const btn_subs = document.querySelectorAll('.btn_sub')  //버튼
const btn_subArrow = document.querySelectorAll('.btn_sub span') //화살표
const list_sub = document.querySelectorAll('.list_sub') //서브

btn_subs.forEach((item,index)=>{
  item.onclick = function(){
    btn_subArrow[index].classList.toggle('on');

    if(btn_subArrow[index].classList.contains('on')){
      list_sub[index].style.height = 'auto' 
    } else {
      list_sub[index].style.height = '0'
    } 
  }
})

//스크롤이 되면 헤더 모양 바뀜
const header = document.querySelector('header');

window.addEventListener('scroll', function(){
  if(window.scrollY > 300){
    header.classList.add('on');}  
  if( window.scrollY <= 300){
    header.classList.remove('on');
  }
})

