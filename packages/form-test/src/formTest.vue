<template>
  <div>
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="姓名" prop="name">
        <el-input v-model="form.name" placeholder="请输入"></el-input>
      </el-form-item>
      <el-form-item label="地址" prop="address">
        <my-input :value.sync="form.address"></my-input>
      </el-form-item>
      <el-form-item>
        <el-button @click="handleReset" type="primary">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import ElFrom from 'element-ui/packages/form/src/form.vue';
import ElFormItem from 'element-ui/packages/form/src/form-item.vue';
import ElInput from 'element-ui/packages/input/src/input.vue';
import ElButton from 'element-ui/packages/button/src/button.vue';
import MyInput from './myInput';
export default {
  name: 'FormTest',
  componentName: 'FormTest',
  data() {
    return {
      form: {
        name: '',
        address: ''
      }
    };
  },
  components: {
    ElFrom,
    ElFormItem,
    ElInput,
    MyInput,
    ElButton
  },
  methods: {
    handleReset() {
      this.$refs.form.resetFields();
    }
  }
};
</script>

<style lang="scss" scoped>
</style>