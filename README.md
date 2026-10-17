# 模拟版图知识手册

一份模拟/数模混合 IC 版图设计知识手册：14 章、196 条，以「要点 + 自测/练习」组织，覆盖从器件基础到签核交付的完整版图工程师知识链。

## 在线阅读

**[https://asde66io.github.io/analog-layout-handbook/](https://asde66io.github.io/analog-layout-handbook/)**

纯静态、零依赖，支持全文搜索与明暗切换。

## 内容目录

| 章 | 内容 |
|---|---|
| 00 | 学习方法与答题框架 |
| 01 | 器件、电路与工艺基础 |
| 02 | 匹配、无源与布局依赖效应 |
| 03 | FinFET、多重图形化与高压约束 |
| 04 | Floorplan、布线与封装约束 |
| 05 | 物理验证、器件识别与签核 |
| 06 | PEX、后仿与误差归因 |
| 07 | ESD、Latch-up 与 EM/IR |
| 08 | EDA、数据库与脚本工程 |
| 09 | PDK 迁移、封装复用与 DTCO |
| 10 | 专题工程细节 |
| 11 | 车规可靠性专题 |
| 12 | 3D IC 通孔与堆叠连接 |
| 13 | 高级工程场景 |

## 本地预览

```bash
npm run dev          # 零依赖静态服务器，默认 http://127.0.0.1:7100/
npm run dev -- --port 8080
```

也可以直接用任意静态服务器打开，如 `python -m http.server`。

## 作为 AI Skill 导入

仓库本身即一个标准 Skill：`SKILL.md` + `references/`。两种用法：

- **直接导入**：将 `SKILL.md` 与 `references/` 目录复制到你的 AI 工具的技能目录，AI 会在遇到模拟版图问题时自动触发；
- **打包分发**：`dist/analog-layout-knowledge.skill` 是打包好的技能压缩包，在支持 `.skill` 导入的工具中直接安装。

## 仓库结构

```
├── index.html        # 在线手册站点
├── data.js           # 手册结构化数据
├── server.js         # 本地预览服务器
├── SKILL.md          # AI Skill 定义
├── references/       # 14 个知识章节
└── dist/
    └── analog-layout-knowledge.skill   # 技能分发包
```

## 免责声明

本手册为通用工程知识整理，用于学习与交流。所有示例数值不构成任何具体工艺的设计规则；实际设计以所用 PDK、foundry 文档与项目签核要求为准。
