<template>
    <section class="countries_section">
        <h1 class="countries_title">دول المرحلة الأولى التي يعمل فيها تطبيق توكلنا </h1>
        <div class="countries_container">
            <div class="countries_countryCard">
                <div class="countries_countryFlag" style="background-image: url(images/flags/SaudiArabia.png);"></div>
                <p class="countries_countryName">المملكة العربية السعودية</p>
            </div>
            <div class="countries_countryCard">
                <div class="countries_countryFlag" style="background-image: url(images/flags/uae.png);"></div>
                <p class="countries_countryName">الإمارات العربية المتحدة</p>
            </div>
            <div class="countries_countryCard">
                <div class="countries_countryFlag" style="background-image: url(images/flags/Bahrain.svg);"></div>
                <p class="countries_countryName">البحرين</p>
            </div>
            <div class="countries_countryCard">
                <div class="countries_countryFlag" style="background-image: url(images/flags/Kuwait.png); "></div>
                <p class="countries_countryName">الكويت</p>
            </div>
            
            <div class="countries_countryCard">
                <div class="countries_countryFlag" style="background-image: url(images/flags/qatar.png);"></div>
                <p class="countries_countryName">دولة قطر</p>
            </div>
            <div class="countries_countryCard">
                <div class="countries_countryFlag" style="background-image: url(images/flags/Oman.png);"></div>
                <p class="countries_countryName">سلطنة عمان</p>
            </div>
        </div>
        <div class="countries_buttonContainer">
                <a href="countries.html" class="countries_button"> 
                    <span>عرض المزيد</span>
                    <!-- <i class="fas fa-chevron-left mr-2"></i> -->
                </a>
        </div>
    </section>
</template>

<script>

</script>

<style>

.countries_section {
    direction: rtl;
    padding: 100px;
}

.countries_title {
    color: #1FA99A;
    font-size: 40px;
    font-weight: bold;
    margin-bottom: 90px;
    position: relative;
}

.countries_countryFlag {
    background-repeat:no-repeat;
    background-size:contain;
    height:200px;width:1200px;
}

.countries_container {
    display: flex !important;
    flex-wrap: wrap !important;
}

.countries_countryCard {
    width: 130px;
    max-width: 130px;
    text-align: center;
    margin: 10px;
}

.countries_countryFlag {
    display: block;
    width: 55px;
    height: 55px;
    border-radius: 50%;
    background-size: cover;
    background-position-x: center;
    margin: 0 auto;
    border: 1px solid #f4f4f4;
}

.countries_countryName {
    margin-top: .5rem !important;
}

.countries_button {
    background-color: #1FA99A;
    background: rgb(8,100,79);
    background: linear-gradient(47deg, rgba(8,100,79,1) 0%, rgba(20,159,144,1) 100%);
    color: white;
    padding: 8px 30px;
    transition: all 0.2 ease-in-out;

    margin-left: 1rem !important;
    margin-right: 1rem !important;
    margin-bottom: 1.5rem !important;
    border-radius: 50rem !important;
    display: inline-block;
font-weight: 400;
color: #212529;
text-align: center;
vertical-align: middle;
-webkit-user-select: none;
-moz-user-select: none;
-ms-user-select: none;
user-select: none;
background-color: transparent;
border: 1px solid transparent;
padding: .375rem .75rem;
font-size: 1rem;
line-height: 1.5;
border-radius: .25rem;
transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;

text-decoration: none;
outline: none;

color: white

}

.countries_button:hover {
    text-decoration: none;
outline: none;
}

</style>