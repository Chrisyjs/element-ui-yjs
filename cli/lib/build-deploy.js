const path = require("path");
const ssh2 = require("ssh2");
const compressing = require('compressing')
const Client = new ssh2.Client();
const chalk = require("chalk"); // 粉笔
const logSuc = (content) => console.log(chalk.green(content)); // 输出字体绿色
const logFail = (content) => console.log(chalk.red(content)); // 输出字体红色
/**
 * 执行命令
 * @param  {...any} args
 */
const spawn = async (...args) => {
  const { spawn } = require("child_process"); // 插水管
  return new Promise((resolve) => {
    const proc = spawn(...args);
    proc.stdout.pipe(process.stdout); // 子进程输出插入主进程
    proc.stderr.pipe(process.stderr);
    proc.on("close", () => {
      resolve();
    });
  });
};
/**
 * 连接服务器部署
 */
const deploy = () => {
  return new Promise((resolve, reject) => {
    Client.on("ready", async function() {
      // logSuc('连接成功')
      Client.sftp(function(err, sftp) {
        // 上传单个文件，注意要路径都要写文件名
        const filename = "element-ui.tar";
        const localPath = path.resolve(__dirname, `../../examples/element-ui`)
        compressing.tar.compressDir(localPath, path.resolve(__dirname, `../../examples/${filename}`))
        .then(() => {
          sftp.fastPut(
            path.join(localPath, '../', filename),
            `/jlb-ui/${filename}`,
            {},
            function(err, result) {
              if (err) {
                logFail(err);
                reject();
              } else {
                Client.shell((err, stream) => {
                  stream.end(
                    `
                        cd /jlb-ui
                        tar xvf ${filename}
                        rm -rf ${filename}
                        exit
                      `
                  ).on('data', () => {

                  }).on('close', () => {
                    Client.end();
                    resolve()
                  })
                });
              }
            }
          );
        })
      });
    }).connect({
      host: "114.55.94.132",
      username: "root",
      password: "123456Sxj",
    });
  });
};

module.exports = async () => {
  // 执行打包文档
  await spawn('npm', ['run', 'deploy:build'], {cwd: path.resolve(__dirname, '../../')})
  logSuc('打包文档成功，开始部署文档...')
  // 开始部署文档
  try {
    await deploy();
    logSuc("部署成功");
    process.exit(1);
  } catch (err) {}
  logSuc('开始打包最终代码')
  await spawn('npm', ['run', 'dist'], {cwd: path.resolve(__dirname, '../../')})
  logSuc('打包成功，可以提交代码')
};
