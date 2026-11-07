# dsh-hero-motto

[English](README.md) | 中文

在 [DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness) **新会话界面**的
小鲸鱼旁，轮换展示自定义短句，并可在插件页详细设置。

原版标题（`探索未至之境` / `Into the Unknown`）会被一组按时轮换的句子取代。
默认只有这两句，请到 **插件 → 新会话短语轮换** 里进行自定义。

![新会话界面](docs/01-hero-zh.png)

![新会话界面](docs/02-hero-highlight.png)

![设置卡片](docs/03-settings.png)

## 功能

| 功能 | 说明 |
|---|---|
| 短语轮换 | 洗牌式抽取，一轮内每句只出现一次，不会连着重复。 |
| 切换动画 | 上浮淡入  模糊切换  打字机|
| 切换间隔 | 2–120 秒 |
| 字体 | 4 组内置、，或上传自己的 `.ttf` / `.otf` / `.woff` / `.woff2` |
| 对齐方式 | 左  中  右，相对输入框卡片对齐 |
| 关键词强调 | 用 `[方括号]` 包住片段即可染上主题色 |
| 主题色 | 6 个预设色块、一个调色盘 |
| 预览版徽标 | 保留或隐藏标题旁的小胶囊 |


字号固定为原版 26px：本插件只换字体，不改大小。

## 安装

bundle 从目录安装：

```
plugin_manager install_bundle target=<本仓库的绝对路径>
```

或者用 CLI，把这一行加进你的 profile patch：

```yaml
- insert:
    - id: hero-motto
      name: 'dsh-hero-motto'
```

安装后插件会以 **dsh-hero-motto** 出现在插件页，设置卡片就在它自己的详情页里。

### 装完要重新加载页面

Host 半侧会立刻激活，但浏览器模块每个页面只加载一次。安装后请刷新窗口
（或重启应用），并留意控制台里的 `[hero-motto] client v…` 一行，确认跑的是哪个版本。

### 仓库里不含 `node_modules`

`index.js` 为了声明 `Config` schema 会 import `@deepseek-ai/schemastery`。这个包本身
随 DeepSeek Harness 一起发布，所以插件装在 profile **内部**时能从 profile 自己的依赖树
解析到。如果你是把这个目录链接到别处的 profile 里安装，请确保本目录能解析到
`@deepseek-ai/schemastery`——`.gitignore` 是故意把 `node_modules/` 排除在外的，因为本地
安装通常把它指向一个跟机器相关的 profile 路径。


## 已知的脆弱点

有两处规则依赖 DeepSeek Harness 的类名，而这些类名不归本插件所有：

- 隐藏原版标题文字与预览版徽标，依赖 `[class*="fishHitbox"]` / `[class*="titleGroup"]`；
- 对齐方式，依赖 `[class*="headline"]`。

如果某次 Harness 更新把这些类名改了，症状是看得见但不致命：原版标题会重新出现在轮换
句子旁边，或者对齐不再移动。两处都只是 `client.js` 里改一行选择器的事。

## 目录结构

| 文件 | 作用 |
|---|---|
| `index.js` | Host 半侧：`Config` schema，以及「本 bundle 自带设置卡片」的策略 |
| `client.js` | 浏览器半侧：hero 品牌位占用者、短句逻辑、设置卡片 |
| `cordis.patch.yml` | 插入 `hero-motto` 这一行的 bundle patch |
| `locale/*.json` | 插件页显示的标题与描述 |
| `icon.svg` | 插件图标 |

## 许可证

MIT —— 见 [LICENSE](LICENSE)。
