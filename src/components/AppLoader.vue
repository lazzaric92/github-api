<script>
export default{
data(){
return {
message: ''
}
}
}
</script>

<template>
    <div class="loader-wrapper">
        <div class="loader"></div>
    </div>
</template>

<style scoped lang="scss">
.loader-wrapper{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.loader {
    width: 50px;
    aspect-ratio: 1;
    border-radius: 50%;
    border: 8px solid #0000;
    border-right-color: #2db72d;
    position: relative;
    animation: l24 1s infinite linear;
}
.loader:before,
.loader:after {
    content: "";
    position: absolute;
    inset: -8px;
    border-radius: 50%;
    border: inherit;
    animation: inherit;
    animation-duration: 2s;
    }
.loader:after {
    animation-duration: 4s;
}
@keyframes l24 {
    100% {transform: rotate(1turn)}
}
</style>