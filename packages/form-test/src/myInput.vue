<template>
  <div>
    <el-input v-model="val" placeholder="请输入"></el-input>
  </div>
</template>

<script>
import ElInput from "element-ui/packages/input/src/input.vue";
// import emitter from 'element-ui/src/mixins/emitter';
export default {
  props: ["value"],
  components: {
    ElInput,
  },
  // mixins: [emitter],
  // inject: {
  //   elForm: {
  //     default: "",
  //   },
  //   elFormItem: {
  //     default: "",
  //   },
  // },
  computed: {
    val: {
      get() {
        return this.value;
      },
      set(val) {
        console.log(val);
        this.$emit("update:value", val);
        // this.dispatch('ElFormItem', 'el.form.change', [val]);
      },
    },
  },
  methods: {},
};
</script>

<style lang="scss" scoped></style>
