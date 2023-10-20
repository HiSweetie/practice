<template>
    <div>
        后台
        <button @click="$router.push('/login')">跳转到登录页</button>
    </div>
    <el-button type="warning" plain @click="addNumber">{{ changeNum }}</el-button>
</template>

<script setup lang="ts">

import { ref, reactive } from "vue";

const changeNum = ref(0);

const addNumber = () => {
    changeNum.value = ++changeNum.value
}

</script>

<style></style>