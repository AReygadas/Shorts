<!-- https://www.youtube.com/watch?v=t8jI5cSyWVE&ab_channel=RelaxationTime-4KAmazingRelaxingScreensavers -->

<script setup>

</script>
<template>
    <div>
        <video autoplay muted preload loop 
        src="@/assets/Cascada.mp4"></video>
         <h1>TEXTO </h1>
    </div>

</template>
<style scoped>
    div{
        position: relative;
        background-color: #000;
    }
    video{
        position: absolute; 
        top:0;
        left: 0;
        width: 100%;
        height: 50%; 
        object-fit: cover;
    }
    h1{
        background: #000;
        font-size: 25vh;
        text-align: center;
        font-weight: 600;
        mix-blend-mode: multiply;
    }
</style>

