<template>
    <div>
        <div class ="quote">
            <slot name ="quote"></slot>
        </div>
        <div class ="author">
            <slot name ="author"></slot>
        </div>
    </div>
</template>

<script>
export default {  

}
</script>

<style scoped>

    div {
        /* border: 1px solid #ccc;
        box-shadow: 1px 1px 2px white; */
        padding: 30px;
        margin: 30px auto;
        text-align: center;
        /* background-color: #22264b; */
        
    }

    h1 {
        color:white;
        /* color: #BB86FC; */
        /**
        SECONDARY COLOR:

        color: #03DAC5       
        
         */
    }
/* .content */
    .quote {
        font-style: italic;
        color: white;
        font-size: 30px;
    }

    .author {
        color:white;
        font-size:30px;
    }
</style>