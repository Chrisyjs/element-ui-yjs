<template>
  <div>
    <el-button @click="handleAdd" type="primary">增加一项</el-button>
    <el-table
      :data="arr1"
      style="width: 100%">
      <el-table-column
        v-for="(item, index) in columnData"
        :key="index"
        :prop="item.prop"
        :label="item.label"
        width="60px">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import ElTable from 'element-ui/packages/table/src/table.vue';
import ElButton from 'element-ui/packages/button/src/button.vue';
import ElTableColumn from 'element-ui/packages/table-column';

export default {
  name: 'TableTest',
  componentName: 'TableTest',
  data() {
    return {
      arr1: [
        {
          id: 1,
          name: 'yjs',
          age: 26
        },
        {
          id: 2,
          name: 'zlm',
          age: 27
        }
      ],
      columnData: [
        {
          prop: 'name',
          label: '姓名',
        },
        {
          prop: 'age',
          label: '年龄',
        },
      ]
    };
  },
  components: {
    ElTable,
    ElTableColumn,
    ElButton
  },
  methods: {
    handleAdd() {
      this.arr1.push({
        id: 3,
        name: 'hh',
        age: 10
      })
    }
  }
};
</script>

<style lang="scss" scoped>
</style>