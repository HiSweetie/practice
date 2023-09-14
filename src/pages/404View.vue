<template>
    <!-- <div>404 没有找到你想要的页面~</div> -->

    <el-result icon="info" title="404">
        <template #sub-title>
            <p>没有找到您想要的页面~</p>
        </template>
        <template #extra>
            <el-button type="primary" @click="$router.push('/')">返回首页</el-button>
        </template>
    </el-result>
</template>

<script setup lang="ts">

</script>

<style></style>