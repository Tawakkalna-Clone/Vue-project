<template>
  <p>{{ how }}</p>
  <h1>{{ step }}</h1>
  <h3>{{ quations }}</h3>
  <div class="continer-btn">
  <button class="btn" id="btn-1">لدي حساب أبشر</button>
  <button class="btn" id="btn-2">ليس لدي حساب أبشر</button>
  <button class="btn" id="btn-3">تسجيل الزائرين</button>
  </div>
<div class="tab-content" id="pills-tabContent">
                        <div class="tab-pane fade active show" id="pills-haveAccount" role="tabpanel" aria-labelledby="pills-haveAccount-tab">
   <div class="steps">
                                <ul>
                                    <li >
                                            <span>1</span>
                                            <div class="icon">
                                                <img src="../../assets/favicon.png" alt="">
                                            </div>
                                            <h4>حمّل التطبيق</h4>
                                    </li>
                                    <li>
                                      
                                            <span>2</span>
                                            <div class="icon">
                                                <img src="../../assets/step1.png" alt="">
                                            </div>
                                            <h4>تسجيل مستخدم جديد وإدخال المعلومات المطلوبة</h4>
                                      
                                    </li>
                                    <li>
                                      
                                            <span>3</span>
                                            <div class="icon">
                                                <img src="../../assets/step2.png" alt="">
                                            </div>
                                            <h4>سيصلك رمز التحقق على جوالك المسجّل في أبشر لتفعيل الحساب</h4>
                                      
                                    </li>
                                    <li>
                                      
                                            <span>4</span>
                                            <div class="icon">
                                                <img src="../../assets/step3.png" alt="">
                                            </div>
                                            <h4>حدّد مكان إقامتك على الخريطة بشكل دقيق وأجب عن الأسئلة الصحية</h4>
                                      
                                    </li>
                                    <li>
                                      
                                            <span>5</span>
                                            <div class="icon">
                                                <img src="../../assets/step4.png" alt="">
                                            </div>
                                            <h4>حدد التابعين والمكفولين الموجودين في نفس مكان إقامتك (عائلة، عمال
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
                    <img src="../../assets/video.jpg" alt="video" width="500" height="400" style="margin-top:200px;">
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
p {
  font-size: 2em;
  font-size: 44px;
  text-align: center;
  color: #1FA99A;
  padding-top: 150px;
  margin: 100px;
}
h1,
h3 {
  text-align: right;
  margin: 5px;
  
}
h3{
color: #8D99A6;
}
.continer-btn{
  display: flex;
    flex-direction: row-reverse;

}
.btn {
  height: 50px;
  width: 150px;
  font-weight: bold;
  text-align: center;
  margin: 10px;
  margin-bottom: 100px;
transition-duration: 0.4s;
border-radius: 20px;
}
#btn-2:hover,#btn-3:hover {
  background-color: #DD4247;
  color: white;
}
#btn-1{
  background: #DD4247;
  color: white;
}
#btn-2{
  border: 2px solid #8D99A6;
  color: #8D99A6;
  background-color: white;
}
#btn-3{
   border: 2px solid #8D99A6;
   color: #8D99A6;
   background-color: white;
}
.steps {
    text-align:center ;
    width: 60%;
    margin: 0 auto;
}
.steps ul {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-around;
    list-style-type: none;
}
.icon {
    border-radius: 100%;
    background-color: #DEF2F0;
    padding: 15px;
    width: 70px;
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
}

.icon img{
    width: auto;
    height: 50px;
}
.steps ul li{
    display: flex;
    flex-direction: column;
    width: 20%;
    margin: 0px 5px;
}
.steps ul li+li:after {
    content: "";
    background: url(../../assets/step.png) no-repeat;
    background-size: contain;
    width: 110%;
    height: 20px;
}
.steps ul li:nth-child(odd):after{
    transform: translate(110px,-110px) rotateX(-170deg);
    z-index: -1;
}
.steps ul li:nth-child(even):after{
    transform: translate(110px,-110px);
    z-index: -1;
}
#how{
    color:#333E4B;
        text-align:right ;

}
.li{
    text-align:right ;
     list-style-type: none;
     padding: 15px;
     margin: auto;
       direction: rtl;
    
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
margin-top: -30px;
display: flex;
flex-direction: column;
}
</style>