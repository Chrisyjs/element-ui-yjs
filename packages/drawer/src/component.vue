<template>
  <transition
    :name="'drawer-move-' + placement"
    @after-leave="afterLeave">
    <div class="el-drawer__wrapper" v-show="visible" @click.self="handleWrapperClick">
      <div
        class="el-drawer"
        :class="[{ 'el-drawer--center': center, 'el-drawer__placementleft': placement === 'left', 'el-drawer__placementright': placement === 'right' }, customClass]"
        ref="drawer"
        :style="style">
        <div class="el-drawer__header">
          <slot name="title">
            <span class="el-drawer__title">{{ title }}</span>
          </slot>
          <button
            type="button"
            class="el-drawer__headerbtn"
            aria-label="Close"
            v-if="showClose"
            @click="handleClose">
            <i class="el-drawer__close el-icon el-icon-close"></i>
          </button>
        </div>
        <div class="el-drawer__body" v-if="rendered"><slot></slot></div>
        <div class="el-drawer__footer" v-if="$slots.footer">
          <slot name="footer"></slot>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
/**
 * Attributes
 * visible: 是否显示 Drawer，支持 .sync 修饰符(false)
 * title: Drawer 的标题，也可通过具名 slot （见下表）传入
 * width: Drawer 的宽度(25%)
 * modal: 是否需要遮罩层(true)
 * modal-append-to-body: 遮罩层是否插入至 body 元素上，若为 false，则遮罩层会插入至 Drawer 的父元素上(true)
 * append-to-body: Drawer 自身是否插入至 body 元素上。嵌套的 Drawer 必须指定该属性并赋值为 true(false)
 * lock-scroll: 是否在 Drawer 出现时将 body 滚动锁定(true)
 * custom-class: Drawer 的自定义类名
 * close-on-click-modal: 是否可以通过点击 modal 关闭 Drawer(true)
 * close-on-press-escape: 是否可以通过按下 ESC 关闭 Drawer(true)
 * show-close: 是否显示关闭按钮	(true)
 * before-close: 关闭前的回调，会暂停 Drawer 的关闭
 * center: 是否对头部和底部采用居中布局(false)
 * Event
 * open: Drawer 打开的回调
 * close: Drawer 关闭的回调
 * closed: Drawer 关闭动画结束时的回调
 */
import Popup from 'element-ui/src/utils/popup';
import Migrating from 'element-ui/src/mixins/migrating';
import emitter from 'element-ui/src/mixins/emitter';

export default {
  name: 'ElDrawer',

  mixins: [Popup, emitter, Migrating],

  props: {
    title: {
      type: String,
      default: ''
    },

    modal: {
      type: Boolean,
      default: true
    },

    modalAppendToBody: {
      type: Boolean,
      default: true
    },

    appendToBody: {
      type: Boolean,
      default: false
    },

    lockScroll: {
      type: Boolean,
      default: true
    },

    closeOnClickModal: {
      type: Boolean,
      default: true
    },

    closeOnPressEscape: {
      type: Boolean,
      default: true
    },

    showClose: {
      type: Boolean,
      default: true
    },

    width: {
      type: String,
      default: '25%'
    },

    placement: {
      type: String,
      default: 'right',
      validator(value) {
        return ['left', 'right'].indexOf(value) !== -1;
      }
    },

    customClass: {
      type: String,
      default: ''
    },

    top: {
      type: String,
      default: '15vh'
    },

    beforeClose: Function,

    center: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      closed: false
    };
  },

  watch: {
    visible(val) {
      if (val) {
        this.closed = false;
        this.$emit('open');
        this.$el.addEventListener('scroll', this.updatePopper);
        this.$nextTick(() => {
          this.$refs.drawer.scrollTop = 0;
        });
        if (this.appendToBody) {
          document.body.appendChild(this.$el);
        }
      } else {
        this.$el.removeEventListener('scroll', this.updatePopper);
        if (!this.closed) this.$emit('close');
      }
    }
  },

  computed: {
    style() {
      let style = {};
      style.width = this.width;
      return style;
    }
  },

  methods: {
    getMigratingConfig() {
      return {
        props: {
          'size': 'size is removed.'
        }
      };
    },
    handleWrapperClick() {
      if (!this.closeOnClickModal) return;
      this.handleClose();
    },
    handleClose() {
      if (typeof this.beforeClose === 'function') {
        this.beforeClose(this.hide);
      } else {
        this.hide();
      }
    },
    hide(cancel) {
      if (cancel !== false) {
        this.$emit('update:visible', false);
        this.$emit('close');
        this.closed = true;
      }
    },
    updatePopper() {
      this.broadcast('ElSelectDropdown', 'updatePopper');
      this.broadcast('ElDropdownMenu', 'updatePopper');
    },
    afterLeave() {
      this.$emit('closed');
    }
  },

  mounted() {
    if (this.visible) {
      this.rendered = true;
      this.open();
      if (this.appendToBody) {
        document.body.appendChild(this.$el);
      }
    }
  },

  destroyed() {
    // if appendToBody is true, remove DOM node after destroy
    if (this.appendToBody && this.$el && this.$el.parentNode) {
      this.$el.parentNode.removeChild(this.$el);
    }
  }
};
</script>
