<template>
  <p>{{ how }}</p>
  <h1 >{{ step }}</h1>
  <h3>{{ quations }}</h3>
  <div class="continer-btn_css">
  <button class="btn_css " id="btn_css-1">لدي حساب أبشر</button>
  <button class="btn_css " id="btn_css-2">ليس لدي حساب أبشر</button>
  <button class="btn_css" id="btn_css-3">تسجيل الزائرين</button>
  </div>
<div class="tab-content" id="pills-tabContent">
                        <div class="tab-pane fade active show" id="pills-haveAccount" role="tabpanel" aria-labelledby="pills-haveAccount-tab">
   <div class="steps">
                                <ul>
                                    <li class="flip-card">
                                            <span>1</span>
                                            <div class="icon flip-card-inner">
                                                <img src="../../assets/favicon.png" alt="">
                                            </div>
                                       
                                            <h4 class="how_font_size">حمّل التطبيق</h4>
                                    
                                    </li>
                                      <li class="flip-card">
                                            <span>2</span>
                                       <div class="icon flip-card-inner">
                                                <img src="../../assets/step1.png" alt="">
                                            </div>
                                            <h4 class="how_font_size">تسجيل مستخدم جديد وإدخال المعلومات المطلوبة</h4>
                                    </li>
                                      <li class="flip-card">
                                            <span>3</span>
                                       <div class="icon flip-card-inner">
                                                <img src="../../assets/step2.png" alt="">
                                            </div>
                                            <h4 class="how_font_size">سيصلك رمز التحقق على جوالك المسجّل في أبشر لتفعيل الحساب</h4>
                                    </li>
                                      <li class="flip-card">
                                            <span>4</span>
                                       <div class="icon flip-card-inner">
                                                <img src="../../assets/step3.png" alt="">
                                            </div>
                                            <h4 class="how_font_size">حدّد مكان إقامتك على الخريطة بشكل دقيق وأجب عن الأسئلة الصحية</h4>
                                    </li>
                                      <li class="flip-card">
                                            <span>5</span>
                                       <div class="icon flip-card-inner">
                                                <img src="../../assets/step4.png" alt="">
                                            </div>
                                            <h4 class="how_font_size">حدد التابعين والمكفولين الموجودين في نفس مكان إقامتك (عائلة، عمال
                                                منزليون)</h4>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        </div>
                        <div class="continer">
                    <ul class="hide">
                        <p id="how">{{ how }}</p>
                        <li class="li">كيف تسجل في توكلنا </li>
                        <li class="li">للأفراد</li>
                        <li class="li">أثناء فترة منع التجول</li>
                        <li class="li">تصاريح تطبيقات التوصيل السريع</li>
                     </ul>   
                   <a href="https://youtu.be/FN9JCUfLzzA">  <img  id="video-img" src="../../assets/video.jpg" alt="video" width="500" height="400" style="margin-top:200px;"></a>
                    <i class="fas fa-play-circle"></i>
             </div>
</template>
<script>
module.exports = {
  data: function () {
    return {
      how: "كيف يعمل توكلنا؟",
      step: "خطوات التسجيل في توكلنا",
      quations: "هل لديك حساب في أبشر ؟",
    };
  },
};
</script>
<style scoped>
.how_font_size{
  font-size: 15px;
  font-weight: bold;
  color:#3A4450;

}
span{
  color: #3BB4A7 ;
}
p {
  font-size: 2em;
  font-size: 44px;
  text-align: center;
  color: #1FA99A;
  padding-top: 150px;
   margin-bottom: 15px;
}
h1,
h3 {
  text-align: right;
  margin: 5px;
}
h1 {
  font-size: 2em;
  font-size: 33px;
  font-weight: bold;
}
h3{
  font-size: 2em;
  font-size: 20px;
  font-weight: bold;
  color: #8D99A6;
}
.continer-btn_css{
  display: flex;
    flex-direction: row-reverse;
}
.btn_css {
  height: 50px;
  width: 150px;
  font-weight: bold;
  font-size: 13px;
  text-align: center;
  margin: 10px;
  margin-bottom: 100px;
transition-duration: 0.4s;
border-radius: 20px;
}
#btn_css-2:hover,#btn_css-3:hover {
  background-color: #DD4247;
  color: white;
}
#btn_css-1{
  background: #DD4247;
  color: white;
}
#btn_css-2{
  border: 2px solid #8D99A6;
  color: #8D99A6;
  background-color: white;
}
#btn_css-3{
   border: 2px solid #8D99A6;
   color: #8D99A6;
   background-color: white;
}
.steps {
    text-align:center ;
    width: 80%;
    margin: 0 auto;
}
.steps ul {
    display: flex;
    flex-direction: row-reverse;
    list-style-type: none;
    
 
}
.icon {
    border-radius: 100%;
    background-color: #DEF2F0;
    padding: 15px;
    width: 100px;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px auto;

}
.icon img{
    width: auto;
    height: 50px;
}
.steps ul li{
    display: flex;
    flex-direction: column;
    width: 30%;
    margin: 0px 20px;
 
}
.steps ul li:after {
    content: "";
    background: url(../../assets/step.png) no-repeat;
    background-size: contain;
    width: 110%;
    height: 20px;
    /* position: absolute; */

}

.steps ul li:last-child:after {
    display: none;
}

.steps ul li:nth-child(odd):after{
    transform:  translate(-70px,-150px);
        /* top: 18%;
    left: -20%; */
}
.steps ul li:nth-child(even):after{
    /* transform: scale(-1,-1); */
    transform: translate(-70px,-115px)  rotateX(-170deg);
    z-index: -1;
}
#how{
    color:#333E4B;
        text-align:right ;
}
.li{
    text-align:right ;
     list-style-type: none;
     padding: 11px;
       direction: ltr;
       margin-right: 10px;
       margin-bottom: 20px;
       color: #3A4450;
}
.li:hover {background: #F0F3F9;}
.continer{
    display: flex;
    flex-direction: row;
    justify-content: center;
    font-size: 20px;
    text-align: right;
}
.hide{

display: flex;
flex-direction: column;
}

.flip-card {
  /* background-color: transparent; */

}

.flip-card-inner {
  position: relative;
  text-align: center;
  transition: transform 0.6s;
  transform-style: preserve-3d;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
}

.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
}
#video-img{
  border-radius: 15px;
  margin-left: 15px;
}


</style>