<!--
 * @Author: 阮志雄
 * @Date: 2022-05-06 00:53:34
 * @LastEditTime: 2022-05-06 01:25:47
 * @LastEditors: 阮志雄
 * @Description: In User Settings Edit
 * @FilePath: \low-code-platform-vue3-with-ts\src\grid-layout\grid-setting\index.vue
-->
<template>
  <div>
    {{ msg }}
    <el-input v-model="msg.text" placeholder="" clearable></el-input>
    <el-select v-model="msg.type" value-key="" placeholder="" clearable filterable>
      <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
      </el-option>
    </el-select>
  </div>
</template>
<script setup lang="ts">
import bus from '@/utils/bus'
import { ref, onMounted } from 'vue'
const msg = ref<any>({
  text: '',
  type: '',
})

const options = [
  { label: 'text', value: 'text' },
  { label: 'info', value: 'info' },
  { label: 'primary', value: 'primary' },
  { label: 'success', value: 'success' },
  { label: 'danger', value: 'danger' },
]
onMounted(() => {
  bus.on('seclect-component', (data: any) => {
    msg.value = data.props
  })
})
</script>
<style></style>
