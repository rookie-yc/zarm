(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{749:function(n,e,o){"use strict";o.r(e),e.default="# LocaleProvider \u56fd\u9645\u5316<br />\uff08\u5373\u5c06\u5e9f\u5f03\uff09\n\n## \u57fa\u672c\u7528\u6cd5\n\n```jsx\nimport { useState } from 'react';\nimport { Cell, LocaleProvider, Button, SearchBar, Modal, Keyboard, Radio } from 'zarm';\n\nconst locales = {\n  en_US: {\n    locale: 'en-US',\n    SearchBar: {\n      placeholder: 'Search',\n      cancelText: 'Cancel',\n    },\n    Alert: {\n      cancelText: 'Close',\n    },\n    Confirm: {\n      cancelText: 'Cancel',\n      okText: 'OK',\n    },\n    Select: {\n      placeholder: 'please select',\n    },\n    Picker: {\n      cancelText: 'Cancel',\n      okText: 'OK',\n      title: 'please select',\n    },\n    Keyboard: {\n      okText: 'OK',\n    },\n  },\n  zh_CN: {\n    locale: 'zh-CN',\n    SearchBar: {\n      placeholder: '\u641c\u7d22',\n      cancelText: '\u53d6\u6d88',\n    },\n    Alert: {\n      cancelText: '\u5173\u95ed',\n    },\n    Confirm: {\n      cancelText: '\u53d6\u6d88',\n      okText: '\u786e\u5b9a',\n    },\n    Select: {\n      placeholder: '\u8bf7\u9009\u62e9',\n    },\n    Picker: {\n      cancelText: '\u53d6\u6d88',\n      okText: '\u786e\u5b9a',\n      title: '\u8bf7\u9009\u62e9',\n    },\n    Keyboard: {\n      okText: '\u786e\u5b9a',\n    },\n  },\n};\n\nconst Demo = () => {\n  const [lang, setLang] = useState('zh_CN');\n\n  const show = (key) => {\n    if (key === 'alert') {\n      Modal.alert({\n        title: '\u8b66\u544a',\n        content: '\u8fd9\u91cc\u662f\u8b66\u544a\u4fe1\u606f',\n        shape: 'radius',\n      });\n    } else {\n      Modal.confirm({\n        title: '\u786e\u8ba4\u4fe1\u606f',\n        content: '\u4f60\u786e\u5b9a\u8981\u8fd9\u6837\u505a\u5417\uff1f',\n        shape: 'radius',\n      });\n    }\n  };\n\n  return (\n    <LocaleProvider locale={locales[lang]}>\n      <>\n        <Cell\n          title=\"\u5207\u6362\u8bed\u8a00\u5305\"\n          description={\n            <Radio.Group compact type=\"button\" value={lang} onChange={setLang}>\n              <Radio value=\"zh_CN\">\u4e2d\u6587</Radio>\n              <Radio value=\"en_US\">EN</Radio>\n            </Radio.Group>\n          }\n        />\n\n        <SearchBar />\n        <Keyboard />\n\n        <Cell\n          description={\n            <Button size=\"xs\" onClick={() => show('alert')}>\n              \u5f00\u542f\n            </Button>\n          }\n        >\n          \u8b66\u544a\u6846 Alert\n        </Cell>\n\n        <Cell\n          description={\n            <Button size=\"xs\" onClick={() => show('confirm')}>\n              \u5f00\u542f\n            </Button>\n          }\n        >\n          \u786e\u8ba4\u6846 Confirm\n        </Cell>\n      </>\n    </LocaleProvider>\n  );\n};\n\nReactDOM.render(<Demo />, mountNode);\n```\n\n## API\n\n| \u5c5e\u6027   | \u7c7b\u578b   | \u9ed8\u8ba4\u503c | \u8bf4\u660e                                                                          |\n| :----- | :----- | :----- | :---------------------------------------------------------------------------- |\n| locale | Object | -      | \u8bed\u8a00\u5305\u914d\u7f6e\uff0c\u9ed8\u8ba4\u4e3a\u4e2d\u6587\uff0c\u8bed\u8a00\u5305\u53ef\u5230 zarm/lib/locale-provider/locale \u76ee\u5f55\u4e0b\u5bfb\u627e |\n"}}]);
//# sourceMappingURL=59.6262492f.js.map