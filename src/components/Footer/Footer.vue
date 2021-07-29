<template>
    <section > 
        <footer>         
                <div class="footer-block1">
                <div class="block1-1">
                            <div class="block1-imgs">
                                <a href="#tawakkalna_section_1"><img src="../../assets/logo.svg" alt="" class="img-fluid" title=""></a>
                                <a href="https://sdaia.gov.sa/" class="px-2 d-block" target="_blank"><img src="../../assets/sdaia.svg" alt="" class="img-fluid mt-4"></a>
                            </div>                
                            <div class="block1-links">
                                <ul>
                                    <li><a href="TawakkalnaAr.pdf" target="_blank">دليل الإستخدام</a></li>
                                    <li><a href="privacy.html">سياسة الخصوصية</a></li>
                                    <li><a href="terms.html">الشروط والأحكام</a></li>
                                </ul>
                            </div>  
                </div>           
                            <div class="download-apps">
                                <label>تحميل التطبيق</label>
                                <a href="https://play.google.com/store/apps/details?id=sa.gov.nic.tawakkalna" target="_blank"><img src="../../assets/googleplay.png" alt=""></a>
                                <a href="https://apps.apple.com/sa/app/tawakkalna/id1506236754" target="_blank"><img src="../../assets/appstore.png" alt=""></a>
                                <a href="https://appgallery5.huawei.com/#/app/C102438999" target="_blank"><img src="../../assets/huaweigalary.png" alt=""></a>
                            </div>
                              
                </div>
            <p> © جميع الحقوق محفوظة، سدايا، 2020 </p>
             
        </footer>
    </section>
</template>
<script>
export default {
}
</script>
<style>
footer{
    background-color: #F8FBFF;
    padding:50px 50px 20px 50px;

    border-top: 1px solid #d2d2d2;
    color: #516477;
}
.footer-block1{
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-around;
}
.block1-1{
    display: flex;
    flex-direction: row-reverse;
}
.block1-links ul{
    display: flex;
    flex-direction: column; 
    margin: 0 50px;
    text-align: end;
    line-height: 3em;
}
a{
    text-decoration: none;
    color: #516477;
}
.block1-imgs{
    display: flex;
    flex-direction: column;
}
.block1-imgs img{
    width: 121px;
    height: auto;
    margin: 10px;
}
.download-apps{
    width: 30%;
    text-align: end;
}
.download-apps label{
display: block;
}
.download-apps img{
    width: 140px;
    height: auto;
    margin: 0 5px;
}
p{
    text-align: center;
}
</style>