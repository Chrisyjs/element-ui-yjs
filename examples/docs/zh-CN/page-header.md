<script>
  module.exports = {
    methods: {
      goBack() {
        console.log('go back');
      }
    }
  };
</script>

## PageHeader 页头

如果页面的路径比较简单，推荐使用页头组件而非面包屑组件。

### 基础

:::demo
```html
<el-page-header title="标题" :show-back="true"></el-page-header>
```
:::

### 自定义后退事件

:::demo
```html
<el-page-header title="标题" show-back="custom" @back="goBack">
    <span slot="content">内容</span>
</el-page-header>

<script>
  export default {
    methods: {
      goBack() {
        console.log('go back');
      }
    }
  }
</script>
```
:::

### Attributes
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |------------------------------ | ------ |
| title     | 标题           | string    |  —                            | -   |
| show-back  | 是否显示后退按钮，如果设置为'custom'，则自定义返回事件| boolean, string    |  true, false, 'custom'  | false  |


### Events
| 事件名称   | 说明           | 回调参数   |
|---------- |-------------- |---------- |
| back      | 当属性showBack为'custom'时生效，点击后退触发 | —        |

### Slots
| 事件名称    | 说明         |
|---------- |------------- |
| title     | 标题         |
| content   | 内容         |