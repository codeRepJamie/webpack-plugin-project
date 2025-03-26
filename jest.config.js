export default {
  testEnvironment: 'node',
  transform: {
    '^.+\\.js$': 'babel-jest', // 使用 Babel 转换 .js 文件
  },
  testMatch: ['**/test/**/*.test.js'],
};