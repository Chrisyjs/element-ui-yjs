<template>
  <div class="el-page-header">
    <div :class="['el-page-header__left', $slots.content ? 'border' : '']">
      <div class="el-page-header__back">
        <i class="btn-back el-icon-arrow-left" v-if="showBack !== false" @click="handleBack"></i>
      </div>
      <div class="el-page-header__title">
        <slot name="title">{{ title }}</slot>
      </div>
    </div>
    <div class="el-page-header__content" v-if="$slots.content">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ElPageHeader',

  props: {
    showBack: {
      type: [String, Boolean],
      default: false
    },
    title: {
      type: String,
      default: ''
    }
  },
  methods: {
    handleBack() {
      if (this.back === true) {
        this.$router.go(-1);
        return;
      }
      if (this.back === 'custom') {
        this.$emit('back');
        return;
      }
    }
  }
};
</script>