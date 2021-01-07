<template>
  <div>
    <el-form :rules="rules" ref="form" :model="form" label-width="80px">
      <el-form-item label="姓名" prop="name">
        <el-input v-model="form.name" placeholder="请输入"></el-input>
      </el-form-item>
      <el-form-item label="地址" prop="address">
        <my-input :value.sync="form.address"></my-input>
        <span>address：{{form.address}}</span>
      </el-form-item>
      <el-form-item>
        <el-button @click="handleSubmit" type="primary">提交</el-button>
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
/* 
  测试自定义组件 myInput 如何接入 el-form-item 的 reset 和 validate 等操作？
    - 只需双向绑定值即可，:value.sync="form.address"
 */
export default {
  name: 'FormTest',
  componentName: 'FormTest',
  data() {
    return {
      form: {
        name: '',
        address: ''
      },
      rules: {
        address: [
          { required: true, message: 'address 必填', trigger: 'blur'}
        ]
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
    },
    handleSubmit() {
      this.$refs.form.validate()
        .then(valid => {

        }).catch()
    }
  }
};
</script>

<style lang="scss" scoped>
</style>