<template>
    <navBarComp/>
    <div class="container mt-5">
        <landingComp/>
    </div>
</template>
<script>
import landingComp from './components/landingComp.vue';
import navBarComp from './components/navbarComp.vue';

export default ({
    components:{
        landingComp,
        navBarComp
    }
})
</script>
