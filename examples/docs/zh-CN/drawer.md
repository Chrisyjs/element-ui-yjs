<script>
  export default {
    data() {
      return {
        visible: false,
        visible2: false,
        dialogVisible: false
      }
    },
    methods: {
      handleClick() {
        this.visible = true;
      }
    }
  }
</script>
## Drawer 抽屉

### 基础用法
包含标题，内容和操作。。若`title`使用slot，请确保其样式中含有`.el-drawer__title`和设计保持一致性

:::demo
```html
<template>
  <el-row>
    <el-button @click="handleClick" type="primary">Click me</el-button>
    <el-drawer width="700px" @close="visible = false" title="Drawer 的标题" :visible="visible">
      <el-button type="text" @click="dialogVisible = true">点击打开 Dialog</el-button>
      <el-button size="small" type="primary" @click="visible2=true">显示抽屉</el-button>
      <el-dialog
        title="提示"
        append-to-body
        :visible="dialogVisible"
        width="30%">
        <span>这是一段信息</span>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
        </span>
      </el-dialog>

      <div slot="footer">
        <el-button size="small" type="primary">确 定</el-button>
        <el-button size="small">取 消</el-button>
      </div>

    </el-drawer>

    <el-drawer width="300px" @close="visible2 = false" :visible="visible2">
      <div class="el-drawer__title" slot="title">双层抽屉</div>
      <div>这里显示的是内容</div>
    </el-drawer>


  </el-row>
</template>

<script>
  export default {
    data() {
      return {
        visible: false,
        dialogVisible: false
      }
    },
    methods: {
      handleClick() {
        this.visible = true;
      }
    }
  }
</script>
```
:::





### Attributes
| 参数               | 说明                                                     | 类型              | 可选值      | 默认值 |
|--------------------|----------------------------------------------------------|-------------------|-------------|--------|
| visible | 是否显示 Drawer，支持 .sync 修饰符(false) | Boolean | — | false |
| modal | 是否需要遮罩层 | Boolean | — | true |
| title              | 标题 | String | — | — |
| width        |  宽度  | String, Number            | — | 25% |
| modal-append-to-body | 遮罩层是否插入至 body 元素上，若为 false，则遮罩层会插入至 Drawer 的父元素上  | Boolean| — | true |
| append-to-body | Drawer 自身是否插入至 body 元素上。嵌套的 Drawer 必须指定该属性并赋值为 true  | Boolean | — | false |
| close-on-click-modal | 是否可以通过点击 modal 关闭 Drawer | Boolean | — | true |
| lock-scroll | 是否在 Drawer 出现时将 body 滚动锁定 | Boolean | — | true |
| custom-class | 自定义类名 | String | — | — |
| close-on-press-escape | 是否可以通过按下 ESC 关闭 Drawer | Boolean | — | true |
| show-close | 是否显示关闭按钮 | Boolean | — | true |
| center | 是否对头部和底部采用居中布局 | Boolean | — | false |

### Slot
| 参数 | 说明 |
|--- | ---|
| title | Drawer 的标题 |
| — | 内容 内嵌HTML 文本 |
| footer | Drawer底部 内嵌 HTML 文本 |

### Events
| 事件名称 | 说明 | 回调参数 |
|---------|--------|---------|
| open | Drawer 打开的回调 | — |
| before-close | 关闭前的回调，会暂停 Drawer 的关闭 | — |
| close | Drawer 关闭的回调 | — |
| closed | Drawer 关闭动画结束时的回调 | — |
