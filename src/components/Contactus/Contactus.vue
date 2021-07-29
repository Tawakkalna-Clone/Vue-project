<template>
  <section class="contact__main_container full__dimensions " >

      <div class="contact_container">

          <div id="contact_title_container">
              <h1 id="contact_title">
                تواصل معنا
              </h1>
          </div>

          <div id="contact_list_container">
              <div class="contact_list_item">
                  <img src="../../assets/phone.png " width="30" height="30" alt="phone">
                  <h3>8001289999</h3>
              </div>
              <div class="contact_list_item">
                  <img src="../../assets/twitter.png " width="30" height="30" alt="twitter">
                  <h3>@TawakkalnaApp</h3>
              </div>
              <div class="contact_list_item">
                  <img src="../../assets/mail.png " width="20" height="20"  alt="mail">
                  <h3>contact@tawakkalna.gov.sa</h3>
              </div>
          </div>

      </div>

  </section>
</template>

<script>
export default {

}
</script>

<style>
.contact_container{
    display: flex;
    flex-direction: column;
}

#contact_title_container{
    padding: 4%;
}

#contact_title{
text-align: center;
font-size: 44px;
color: #1fa99a;
}

#contact_list_container{
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 180px;
    width: 45%;
    background-color: #1fa99a;
    border-top-left-radius: 40%;
    border-bottom-left-radius: 40%;
    font-size: 20px;
    text-align: right;
    color: white;
    align-self: flex-end;
}

.contact_list_item{
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
   padding-right: 6%;
}

.contact_list_item > h3 {
    padding: 0 12px;
}

</style>