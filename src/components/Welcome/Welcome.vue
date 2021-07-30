<template>
    <NavBar />
    <section class="welcome__main__container">
        <div class="welcome__top">
            <div class="welocme__top__left">
                <div class="welocme__top__left__bubble">
                    <h4>التصاريح الإلكترونية لاحتياجاتك الضرورية</h4>
                </div>
            </div>
            <div class="welocme__top__right">
                <h3>حمّل تطبيق توكلنا</h3>
            </div>
        </div>
        <div class="welocme__middle">
            <img src="../../assets/huaweigalary.png" alt="no" />
            <img src="../../assets/appstore.png" alt="no" />
            <img src="../../assets/googleplay.png" alt="no" />
        </div>
        <div class="welocme__bottom">
        </div>
    </section>
</template>
<script>
import NavBar from "./NavBar.vue";
export default {
    name: 'Welcome',
    components : { NavBar }
}
</script>
<style>
.welcome__main__container {
    height: 85%;
    width: 100%;
    margin-top: 98px;
    display: grid;
    grid-template-rows: 55% 25% 20%;
    background-image: url("../../../public/hero.png");
    background-repeat: no-repeat;
    background-size: 66.3%;
}
.welcome__top {
    display: grid;
    grid-template-columns: 60% 40%;
}
.welocme__top__left {
    display: flex;
    align-items: flex-end;
}
.welocme__top__left__bubble {
    height: 60%;
    width: 90%;
    background-color: #1FA99A95;
    border-radius: 0px 100px 100px 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 19px;
}
.welocme__top__left__bubble > h4 {
    font-weight: bold;
    font-size: 30px;
    color: #fff;
}
.welocme__top__right {
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
}
.welocme__top__right > h3 {
    font-weight: bold;
    color: #333e4b;
    font-size: 30px;
    padding-right: 6.3rem;
    padding-bottom: 0.6rem;
}
.welocme__middle {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding-right: 102px;
    padding-bottom: 35px;
}
.welocme__middle > img {
    height: 58px;    
    width: 200px;
    margin-left: 15px;
}

/* .welocme__bottom {
} */
.about__main_container {
    background-color: aqua;
    height: 85vh;
    width: 100%;
}

</style>