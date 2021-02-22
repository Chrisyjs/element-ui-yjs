<template>
  <div>
    <el-button @click="handleAdd" type="primary">增加一项</el-button>
    <el-table :data="arr1" style="width: 100%">
      <el-table-column
        v-for="(item, index) in columnData"
        :key="index"
        :prop="item.prop"
        :label="item.label"
        width="60px"
      >
      </el-table-column>
    </el-table>

    <el-button @click="handleChangeColumn" type="primary"
      >改变 column</el-button
    >
    <el-table :data="tableData" style="width: 100%">
      <template v-for="item in column">
        <!-- <span :key="item.prop"> -->
          <el-table-column
            v-if="item.prop === 'name'"
            prop="name"
            label="姓名"
            width="180"
          >
          </el-table-column>
          <el-table-column
            v-if="item.prop === 'address'"
            prop="address"
            label="地址"
            width="180"
          >
          </el-table-column>
          <el-table-column
            v-if="item.prop === 'date'"
            prop="date"
            label="日期"
            width="180"
          >
          </el-table-column>
        <!-- </span> -->
      </template>
    </el-table>
  </div>
</template>

<script>
import ElTable from "element-ui/packages/table/src/table.vue";
import ElButton from "element-ui/packages/button/src/button.vue";
import ElTableColumn from "element-ui/packages/table-column";

export default {
  name: "TableTest",
  componentName: "TableTest",
  data() {
    return {
      arr1: [
        {
          id: 1,
          name: "yjs",
          age: 26,
        },
        {
          id: 2,
          name: "zlm",
          age: 27,
        },
      ],
      columnData: [
        {
          prop: "name",
          label: "姓名",
        },
        {
          prop: "age",
          label: "年龄",
        },
      ],
      column: [
        {
          prop: "name",
          label: "姓名",
        },
        {
          prop: "address",
          label: "地址",
        },
        {
          prop: "date",
          label: "日期",
        },
      ],
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄",
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
        },
      ],
    };
  },
  components: {
    ElTable,
    ElTableColumn,
    ElButton,
  },
  methods: {
    handleAdd() {
      this.arr1.push({
        id: 3,
        name: "hh",
        age: 10,
      });
    },
    handleChangeColumn() {
      this.column = [
        {
          prop: "name",
          label: "姓名",
        },
        {
          prop: "date",
          label: "日期",
        },
        {
          prop: "address",
          label: "地址",
        },
      ];
    },
  },
};
</script>

<style lang="scss" scoped></style>
