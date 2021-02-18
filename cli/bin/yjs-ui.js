#!/usr/bin/env node
const program = require("commander");
program.version(require("../package.json").version);

program
  .command("add <componentName> <chineseName>")
  .description("新增组件")
  .action(require("../lib/add-component.js"));

program
  .command("build-deploy")
  .description("打包和部署")
  .action(require("../lib/build-deploy.js"));

program.parse(process.argv);
