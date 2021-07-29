<template>
  <section class="partners" dir="rtl">
    <h2 class="title" data-aos="zoom-in" data-aos-duration="200">
      شركاء النجاح
    </h2>
    <div class="row no-gutters">
      <div class="col-xl-3 col-lg-3 col-12">
        <h2 class="title" data-aos="zoom-in" data-aos-duration="200">
          شكراً لكم
        </h2>
        <br />
        <ul>
          <li>
            <a
              href="javascript:;"
              class="not-active"
              data-aos="zoom-in"
              data-aos-duration="400"
              ><img src="../../assets/p5.png" alt=""
            /></a>
          </li>
          <li>
            <a
              href="javascript:;"
              class="not-active"
              data-aos="zoom-in"
              data-aos-duration="400"
              ><img src="../../assets/p6.png" alt=""
            /></a>
          </li>
        </ul>
      </div>
      <div class="col-xl-4 col-lg-5 col-12">
        <h5
          class="title text-center"
          data-aos="zoom-in"
          data-aos-duration="200"
        >
          الشركاء التقنيين
        </h5>
        <br />
        <ul>
          <li>
            <a
              href="javascript:;"
              class="not-active"
              data-aos="zoom-in"
              data-aos-duration="400"
              ><img src="../../assets/p1.png" alt=""
            /></a>
          </li>
        </ul>
      </div>
      <div class="col-xl-5 col-lg-4 col-12">
        <h5 data-aos="zoom-in" data-aos-duration="200" class="title stcMB">
          الشريك الإستراتيجي
        </h5>
        <div class="stc">
          <a
            href="javascript:;"
            class="not-active"
            data-aos="zoom-in"
            data-aos-duration="400"
            ><img src="../../assets/stc.png" alt=""
          /></a>
        </div>
      </div>
    </div>
  </section>
</template>
<script>

export default {};
</script>

<style>
.partners {
  background: #1fa99a;
  padding: px 0 0 0;
  padding-right: 20%;
  margin-bottom: 90px;
}
.partners .title {
  color: white;
  margin-bottom: 40px;
}
.partners ul {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
}
.partners ul li {
  flex: 50%;
  min-width: 50%;
  list-style-type: none;
}
.partners ul li a {
  display: block;
  text-align: center;
  margin-bottom: 30px;
}
.partners ul li a img {
  max-height: 70px;
}
.partners ul li a:hover {
  opacity: 0.8;
}
.partners h5 {
  color: white;
  font-size: 24px;
  
}
.partners .stc {
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;
}
.partners .stc:before {
  content: "";
  background: white;
  position: absolute;
  width: 100%;
  padding: 70px 60px;
  top: 40px;
  border-top-right-radius: 14px;
  border-bottom-right-radius: 14px;
}
.partners .stc img {
  position: relative;
  z-index: 2;
  margin: 80px 60px;
}
</style>