<template>
  
    <Welcome/>
    <About/>
    <CautiouslyWeReturn/>
    <Curfew/>
    <HowItworks/>
    <Manual/>
    <FAQs/>
    <Countries/>
    <Partner/>
    <Contactus/>
    <Footer/>
 
</template>

<script>
    import Contactus from './components/Contactus/Contactus.vue'
    import Partner from './components/Partner/Partner.vue'
    import Countries from './components/Countries/Countries.vue'
    import FAQs from './components/FAQs/FAQs.vue'
    import Curfew from './components/Curfew/Curfew.vue'
    import HowItworks from './components/HowItworks/HowItworks.vue'
    import CautiouslyWeReturn from './components/CautiouslyWeReturn/CautiouslyWeReturn.vue'
    import Welcome from './components/Welcome/Welcome.vue'
    import Manual from './components/Manual/Manual.vue'
    import About from './components/About/About.vue'
    import Footer from './components/Footer/Footer.vue'
    export default {
        name : 'App',
        components : {
            Contactus,
            Partner,
            Countries,
            FAQs,
            Curfew,
            HowItworks,
            CautiouslyWeReturn,
            Welcome,
            Manual,
            About,
            Footer
        }
    }
</script>

<style></style>