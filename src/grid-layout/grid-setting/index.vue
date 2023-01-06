<template>
  <div>
    {{ props }}
    <el-input v-model="props.text" placeholder="" clearable></el-input>
    <el-select v-model="props.type" value-key="" placeholder="" clearable filterable>
      <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"> </el-option>
    </el-select>
    <el-input v-model="extra.span" placeholder="" type="number"></el-input>
    <!-- <zth-form></zth-form> -->
  </div>
</template>
<script setup lang="ts">
import bus from '@/utils/bus'
import { ref, onMounted } from 'vue'
const props = ref<Record<string, any>>({
  text: '',
  type: '',
})
const extra = ref<IExtra>({})

const options = [
  { label: 'text', value: 'text' },
  { label: 'info', value: 'info' },
  { label: 'primary', value: 'primary' },
  { label: 'success', value: 'success' },
  { label: 'danger', value: 'danger' },
]
onMounted(() => {
  bus.on('seclect-component', (data: any) => {
    props.value = data.props
    extra.value = data.extra
  })
})
</script>
<style></style>
