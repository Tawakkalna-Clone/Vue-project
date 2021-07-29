<template>
  <!-- <NvBar /> -->
  <section class="Nvbar-main-container">
    <div id="Nvbar-side-menu">
      <button class="Nvbar-side-menu-item">
        &nbsp;<img
          src="../../assets/arrow-left-solid.png"
          width="15"
          height="14.6"
        />
        <span>تسجيل الدخول</span>
      </button>
      <!-- <div class="Nvbar-side-menu-item" id="Nvbar-lang">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="rgb(122, 137, 152)"
          width="18"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
          ></path>
        </svg>
        <span>العربية</span>
      </div> -->
    </div>

    <ul id="Nvbar-main-menu" >
      <li class="Nv-item">
        <div class="Nv-link">تواصل معنا</div>
      </li>
      <li class="Nv-item">
        <div class="Nv-link">الأسئلة الشائعة</div>
      </li>
      <li class="Nv-item">
        <div class="Nv-link">كيف يعمل توكلنا</div>
      </li>
      <li class="Nv-item">
        <div class="Nv-link">خدمات توكلنا</div>
      </li>
      <li class="Nv-item">
        <div class="Nv-link">عن توكلنا</div>
      </li>
      <li class="Nv-item">
        <div class="Nv-link active">الرئيسية</div>
      </li>
    </ul>

    <div class="Nvbar-brand"
      ><img
        src="../../assets/logo.svg"
        width="177.93"
        height="60"
        alt=""
        title="الرئيسية"
    /></div>
  </section>
</template>

<script>
export default {
  name: "NvBar",
};
</script>

<style>

.Nvbar-main-container {
  width: 100vw;
  height: 98px;
  position: fixed;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 112px;
  background-color: white;
  -webkit-box-shadow: 0px 3px 40px #bbbbbb;
  box-shadow: 0px 3px 40px #bbbbbb;
}

.Nvbar-side-menu{
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
}

.Nvbar-side-menu-item {
  display: flex;
  align-items: center;
  color: rgb(122, 137, 152);
}

#Nvbar-lang span {
 margin-left:5px ;
}

#Nvbar-side-menu button {
  justify-content: space-around;
  padding: 15px 30px;
  color: white;
  border: none;
  border-radius: 25px;
  font-size: 13px;
  background-image: linear-gradient(
    to right,
    rgb(141, 26, 41),
    rgb(209, 46, 66)
  );
}

#Nvbar-side-menu button span {
  padding-left: 20px;
}

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}
li {
  float: left;
  padding-left: 20px;
  color: rgb(122, 137, 152);
  font-size: 13px;
  
}
</style>