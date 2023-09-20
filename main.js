let index = 0;

function SlideShow() {
    let getSlide = document.getElementsByClassName('slide');
    if(index > getSlide.length - 1) {
        index = 0;
    }
    if(index < 0) {
        index = getSlide.length - 1;
    }
    for (let i = 0; i < getSlide.length;i++) {
        getSlide[i].style.display = "none";
    }
    getSlide[index].style.display = "block";
}
SlideShow();

function Next() {
    index++;
    SlideShow();
}

function Previous() {
    index--;
    SlideShow();
}
let loop;
function AutoLoop() {
    loop = setInterval(function() {Next()},1000)
}

function StopLoop() {
    clearInterval(loop);
}







function luachon(){
    let tinh = document.getElementById('change');
    let kqtinh = document.getElementById('kqchon');
    switch (change.value){
        case "1":
            kqtinh.value = "Học phí là 500";
            break;
        case "2":
            kqtinh.value = "Học phí là 800";
            break;
        case "3":
            kqtinh.value = "Học phí là 1000";
            break;
    
    }
    
}







function dangkyy() {
    let email = document.getElementById('email');
      let sdt = document.getElementById('phone');
      let ten = document.getElementById('name');
      let canhbao = document.getElementsByClassName('thongbao');
      let checkmail = /^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i;
      let checkphone  =/((09|03|07|08|05)+([0-9]{8})\b)/g;

  
      if(ten.value == "" || ten.value == null ){
        canhbao[0].innerHTML = "*Tên Không Được Bỏ Trống!"
    }else{
        canhbao[0].innerHTML = ""
      }
  
  
     if(email.value == "" || email.value == null ){
          canhbao[1].innerHTML = "*Email không Được Bỏ Trống!"
      }else{
        canhbao[1].innerHTML ="";
          if(!checkmail.test(email.value)){
              canhbao[1].innerHTML = "*Bạn Nhập Sai Email!"
          }else {
              canhbao[1].innerHTML ="";
          }
      }
  
      
      if(sdt.value == "" || sdt.value == null ){
        canhbao[2].innerHTML = "*Số Điện Thoại Không Được Bỏ Trống!"
    }else{
      canhbao[2].innerHTML ="";
        if(!checkphone.test(sdt.value)){
            canhbao[2].innerHTML = "*Số của bạn nhập không chính xác!"
        }else {
            canhbao[2].innerHTML ="";
        }
    }
  
    }