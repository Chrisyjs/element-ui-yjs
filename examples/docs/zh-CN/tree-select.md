<script>
var menus = [
  {
    'menuId': 1,
    'menuName': '系统管理',
    'childrenList': [
      {
        'menuId': 100,
        'menuName': '用户管理',
        'childrenList': [
          {
            'menuId': 1000,
            'menuName': '用户查询'
          },
          {
            'menuId': 1001,
            'menuName': '用户新增'
          },
          {
            'menuId': 1002,
            'menuName': '用户修改'
          },
          {
            'menuId': 1003,
            'menuName': '用户删除'
          }
        ]
      },
      {
        'menuId': 101,
        'menuName': '角色管理',
        'childrenList': [
          {
            'menuId': 1006,
            'menuName': '角色查询'
          },
          {
            'menuId': 1007,
            'menuName': '角色新增'
          },
          {
            'menuId': 1008,
            'menuName': '角色修改'
          },
          {
            'menuId': 1011,
            'menuName': '删除角色'
          }
        ]
      }
    ]
  }
];
  module.exports = {
    data () {
        return {
            data: menus,
            valueConsistsOf: 'LEAF_PRIORITY', // ALL, BRANCH_PRIORITY, LEAF_PRIORITY, ALL_WITH_INDETERMINATE
            defaultProps: {
                children: 'childrenList',
                label: 'menuName'
            },
            nodeKey: 'menuId',
            defaultCheckedKeys: []
        };
    },
    methods: {
        popoverHide (checkedIds, checkedData, options) {
            console.log(checkedIds);
            console.log(checkedData);
            console.log(options); 
        }
    }
  };
</script>

## TreeSelect 树形选择器

树形下拉框选择器

### 基础

:::demo
```html
<tree-select :data="data"
                 :default-props="defaultProps" multiple clearable
                 :node-key="nodeKey" :checked-keys="defaultCheckedKeys"
                 :value-consists-of="valueConsistsOf"
                 @popover-hide="popoverHide"></tree-select>

<script>
var menus = [
  {
    'menuId': 1,
    'menuName': '系统管理',
    'childrenList': [
      {
        'menuId': 100,
        'menuName': '用户管理',
        'childrenList': [
          {
            'menuId': 1000,
            'menuName': '用户查询'
          },
          {
            'menuId': 1001,
            'menuName': '用户新增'
          },
          {
            'menuId': 1002,
            'menuName': '用户修改'
          },
          {
            'menuId': 1003,
            'menuName': '用户删除'
          }
        ]
      },
      {
        'menuId': 101,
        'menuName': '角色管理',
        'childrenList': [
          {
            'menuId': 1006,
            'menuName': '角色查询'
          },
          {
            'menuId': 1007,
            'menuName': '角色新增'
          },
          {
            'menuId': 1008,
            'menuName': '角色修改'
          },
          {
            'menuId': 1011,
            'menuName': '删除角色'
          }
        ]
      }
    ]
  }
];
  exports default {
    data () {
        return {
            data: menus,
            valueConsistsOf: 'LEAF_PRIORITY', // ALL, BRANCH_PRIORITY, LEAF_PRIORITY, ALL_WITH_INDETERMINATE
            defaultProps: {
                children: 'childrenList',
                label: 'menuName'
            },
            nodeKey: 'menuId',
            defaultCheckedKeys: []
        };
    },
    methods: {
        popoverHide (checkedIds, checkedData, options) {
            console.log(checkedIds);
            console.log(checkedData);
            console.log(options); 
        }
    }
  };
</script>
```
:::

### Attributes
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |------------------------------ | ------ |
| data     | 树形数据           | Array    |  —                            | -   |
| value-consists-of  | 选中的模式，全部、合并、叶子节点、包括半选项 | String    | ALL, BRANCH_PRIORITY, LEAF_PRIORITY, ALL_WITH_INDETERMINATE | LEAF_PRIORITY  |
| options  | 参照 Tree 树形控件的选项 |


### Events
| 事件名称   | 说明           | 回调参数   |
|---------- |-------------- |---------- |
| popover-hide      | 当popover关闭时生效 | checkedIds, checkedData      |

