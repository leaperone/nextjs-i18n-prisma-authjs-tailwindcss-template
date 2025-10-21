module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "body-max-line-length": [0], // 禁用 body 行长度限制
    "header-max-length": [0], // 禁用 header 长度限制
  },
  ignores: [
    (message) => /^⚡️|✨|🐛|📝|🔥|🚀|🎉|🔧|🗑️|♻️/.test(message), // 自定义规则，允许特定 emoji 开头
  ],
};
