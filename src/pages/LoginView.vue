<template>
  <!-- <div>登录页面</div> -->

  <el-row style="min-height: 100vh">
    <el-col :lg="16" :md="12" class="flex items-center justify-center bg-violet-400 flex-col">
      <div>
        <div class="grid-content ep-bg-purple text-left font-semibold text-5xl text-sky-50 mb-4">
          欢迎
        </div>
        <div class="grid-content ep-bg-purple text-cyan-50">
          这是一个练习项目，欢迎访问此页面
        </div>
      </div>
    </el-col>
    <el-col :lg="8" :md="12" class="flex items-center justify-center bg-stone-50 flex-col">
      <div class="grid-content ep-bg-purple">
        <h2 class="text-5xl font-bold text-slate-500">开始浏览</h2>
        <div class="flex items-center justify-center my-5 space-x-2">
          <span class="h-[1px] w-16 bg-gray-200"></span>
          <span class="">账号或密码登录</span>
          <span class="h-[1px] w-16 bg-gray-200"></span>
        </div>
        <el-form :model="form" class="w-[300px]">
          <el-form-item label="用户名">
            <el-input v-model="form.username" placeholder="请输入用户名">
              <template #prefix>
                <el-icon>
                  <User />
                </el-icon>
              </template>
            </el-input>

          </el-form-item><el-form-item label="密码">
            <el-input v-model="form.password" placeholder="请输入密码">
              <template #prefix>
                <el-icon>
                  <Lock />
                </el-icon>
              </template>
            </el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" round @click="onSubmit" class="w-40 m-auto">登录</el-button>
          </el-form-item>
        </el-form>
      </div>
    </el-col>
  </el-row>
</template>

<script setup lang="ts">
import { reactive } from "vue";

// do not use same name with ref
const form = reactive({
  username: "",
  password: "",
});

const onSubmit = () => {
  console.log("submit!");
};
</script>

<style  scoped>
/deep/ .el-form-item__label {
  width: 20%;
}
</style>
