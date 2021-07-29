<template>
  <!-- <NavBar /> -->
  <section class="navbar-main-container">
    <div id="navbar-side-menu">
      <button class="navbar-side-menu-item">
        &nbsp;<img
          src="../../assets/arrow-left-solid.png"
          width="15"
          height="14.6"
        />
        <span>تسجيل الدخول</span>
      </button>
      <!-- <div class="navbar-side-menu-item" id="navbar-lang">
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

    <ul id="navbar-main-menu" >
      <li class="nav-item">
        <a class="nav-link">تواصل معنا</a>
      </li>
      <li class="nav-item">
        <a class="nav-link">الأسئلة الشائعة</a>
      </li>
      <li class="nav-item">
        <a class="nav-link">كيف يعمل توكلنا</a>
      </li>
      <li class="nav-item">
        <a class="nav-link">خدمات توكلنا</a>
      </li>
      <li class="nav-item">
        <a class="nav-link">عن توكلنا</a>
      </li>
      <li class="nav-item">
        <a class="nav-link active">الرئيسية</a>
      </li>
    </ul>

    <a class="navbar-brand"
      ><img
        src="../../assets/logo.svg"
        width="177.93"
        height="60"
        alt=""
        title="الرئيسية"
    /></a>
  </section>
</template>

<script>
export default {
  name: "NavBar",
};
</script>

<style>

.navbar-main-container {
  width: 100%;
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

.navbar-side-menu{
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
}

.navbar-side-menu-item {
  display: flex;
  align-items: center;
  color: rgb(122, 137, 152);
}

#navbar-lang span {
 margin-left:5px ;
}

#navbar-side-menu button {
  justify-content: space-around;
  padding: 15px 30px;
  color: white;
  border: none;
  border-radius: 25px;
  font-size: 16px;
  background-image: linear-gradient(
    to right,
    rgb(141, 26, 41),
    rgb(209, 46, 66)
  );
}

#navbar-side-menu button span {
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
}
</style>