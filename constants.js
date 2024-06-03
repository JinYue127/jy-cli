export const templates = [
  {
    name: "test-1",
    value: "test1/template",
    desc: "test-1项目模板"
  },
  {
    name: "test-2",
    value: "test2/template",
    desc: "test-2项目模板"
  },
  {
    name: "test-3",
    value: "test3/template",
    desc: "test-3项目模板"
  },
  {
    name: "test-4",
    value: "test4/template",
    desc: "test-4项目模板"
  }
]

export const messages = [
  {
    message: "请输入项目名称:",
    name: "name",
    validate(val) {
      if (val.match(/[\u4E00-\u9FFF`~!@#$%&^*[\]()\\;:<.>/?]/g)) {
        return "项目名称存在非法字符";
      }
      return true
    }
  },
  {
    message: "请输入项目关键词(,分割):",
    name: "keywords",
  },
  {
    message: "请输入项目描述:",
    name: "description",
  },
  {
    message: "请输入作者名称:",
    name: "author",
  }
]
