<template>
    <section class="about__main_container full__dimensions " >
        <div class="container">

        <div class="right">
            <h1 id="title">عن توكلنا</h1>
            <p id="content">
            انطلاقًا من حرص حكومة المملكة العربية السعودية -أيدها الله- على الحفاظ على صحة وسلامة المواطنين والمقيمين على أراضيها من خطر انتشار فيروس كورونا المستجد؛ قامت الهيئة السعودية للبيانات والذكاء الاصطناعي "سدايا" بإطلاق تطبيق "توكلنا"، وذلك لمساندة الجهود الحكومية لمواجهة فيروس كورونا.
            </p>
        </div>

        <div class="left">
            <img src="../../assets/app.png" alt="app" width="500" height="600">
        </div>

        </div>
        
    </section>

</template>

<script>
export default {

}
</script>

<style>
    .container{
        display: flex;
        flex-direction: row-reverse;
        justify-content: center;
    }

    .right{
        width: 40%;
        padding: 3%;
        margin-top: 6%;
    }

    .left{
        margin-top: 5%;
    }

    #title{
        text-align: right;
        font-size: 45px;
        margin-bottom: 10%;
    }

    #content{
        font-size: 20px;
        line-height: 1.6;
        word-spacing: 3px;
        text-align: right;
    }

    
</style>