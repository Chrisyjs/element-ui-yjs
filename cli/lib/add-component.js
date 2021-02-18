const clear = require("clear");
const chalk = require("chalk"); // 粉笔
const logSuc = (content) => console.log(chalk.green(content)); // 输出字体绿色
const logFail = (content) => console.log(chalk.red(content)); // 输出字体红色
const path = require("path");
const fileSave = require("file-save");
const uppercamelcase = require("uppercamelcase");
/**
 * 添加 files
 * @param {*} componentname
 * @param {*} ComponentName
 */
const addFiles = (componentname, ComponentName, chineseName) => {
  const PackagePath = path.resolve(__dirname, "../../packages", componentname);
  const Files = [
    {
      filename: "index.js",
      content: `import ${ComponentName} from './src/main';
  
  /* istanbul ignore next */
  ${ComponentName}.install = function(Vue) {
    Vue.component(${ComponentName}.name, ${ComponentName});
  };
  
  export default ${ComponentName};`,
    },
    {
      filename: "src/main.vue",
      content: `<template>
    <div class="el-${componentname}"></div>
  </template>
  
  <script>
  export default {
    name: 'El${ComponentName}'
  };
  </script>`,
    },
    {
      filename: path.join("../../examples/docs/zh-CN", `${componentname}.md`),
      content: `## ${ComponentName} ${chineseName}`,
    },
    {
      filename: path.join("../../examples/docs/en-US", `${componentname}.md`),
      content: `## ${ComponentName}`,
    },
    {
      filename: path.join("../../examples/docs/es", `${componentname}.md`),
      content: `## ${ComponentName}`,
    },
    {
      filename: path.join("../../test/unit/specs", `${componentname}.spec.js`),
      content: `import { createTest, destroyVM } from '../util';
  import ${ComponentName} from 'packages/${componentname}';
  
  describe('${ComponentName}', () => {
    let vm;
    afterEach(() => {
      destroyVM(vm);
    });
  
    it('create', () => {
      vm = createTest(${ComponentName}, true);
      expect(vm.$el).to.exist;
    });
  });
  `,
    },
    {
      filename: path.join(
        "../../packages/theme-chalk/src",
        `${componentname}.scss`
      ),
      content: `@import "mixins/mixins";
  @import "common/var";
  
  @include b(${componentname}) {
  }`,
    },
    {
      filename: path.join("../../types", `${componentname}.d.ts`),
      content: `import { ElementUIComponent } from './component'
  
  /** ${ComponentName} Component */
  export declare class El${ComponentName} extends ElementUIComponent {
  }`,
    },
  ];

  // 创建 package
  Files.forEach((file) => {
    fileSave(path.join(PackagePath, file.filename))
      .write(file.content, "utf8")
      .end("\n");
  });
};
/**
 * 添加到 component.json
 * @param {*} componentname
 */
const addComponentJson = (componentname) => {
  const componentsFile = require("../../components.json");
  if (componentsFile[componentname]) {
    logFail(`${componentname} 组件已存在`);
    process.exit(1);
  }
  componentsFile[componentname] = `./packages/${componentname}/index.js`;
  fileSave(path.join(__dirname, "../../components.json"))
    .write(JSON.stringify(componentsFile, null, "  "), "utf8")
    .end("\n");
};

const addNavConfigJson = (componentname, ComponentName, chineseName) => {
  const navConfigFile = require("../../examples/nav.config.json");

  Object.keys(navConfigFile).forEach((lang) => {
    let groups = navConfigFile[lang][4].groups;
    groups[groups.length - 1].list.push({
      path: `/${componentname}`,
      title:
        lang === "zh-CN" && componentname !== chineseName
          ? `${ComponentName} ${chineseName}`
          : ComponentName,
    });
  });

  fileSave(path.join(__dirname, "../../examples/nav.config.json"))
    .write(JSON.stringify(navConfigFile, null, "  "), "utf8")
    .end("\n");
};

module.exports = async (componentname, chineseName) => {
  const ComponentName = uppercamelcase(componentname);
  // 添加到 component.json
  addComponentJson(componentname);
  // 添加文件
  addFiles(componentname, ComponentName, chineseName);
  // 添加到 nav.config.json
  addNavConfigJson(componentname, ComponentName, chineseName);
  logSuc(`${componentname} 组件新增成功`)
};
