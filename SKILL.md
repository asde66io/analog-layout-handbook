---
name: analog-layout-knowledge
description: 模拟/数模混合 IC 版图设计知识库，覆盖器件与工艺基础、匹配与布局依赖效应（共质心/dummy/LOD/WPE）、FinFET 与多重图形化、Floorplan 与布线、DRC/LVS/ERC/PERC 物理验证与签核、PEX 后仿与误差归因、ESD/Latch-up/EMIR、EDA 工具与脚本工程、PDK 迁移与 DTCO、车规可靠性、3D IC 通孔，以及 60 个高级工程场景。当用户询问模拟版图（analog layout）设计方法、面试准备、技术排查思路（如失配、寄生、天线效应、软连接、EM/IR、后仿不收敛）、版图自动化脚本、工艺迁移、车规寿命/Grade/HTOL、TSV/3D 堆叠等问题时使用；也适用于用户要求扮演模拟版图专家、评审版图方案、出面试题或检查回答口径的场景。
---

# 模拟版图知识库

一个通用工程知识库：14 章、196 条，全部以「要点 + 自测/练习」组织。所有层名、参数与数值均为概念示例；具体限制始终以当前 PDK、签核 deck 和项目要求为准——回答时必须保留这一边界，不要把库中示例数字当成某工艺的真实规则。

## 回答框架

技术问题按四步组织答案（来自 references/00-learning-guide.md）：

1. 物理/电路原因 → 2. 合法版图动作 → 3. 验证输入 → 4. 输出判据与副作用（适用边界）

区分「了解 / 做过 / 主导」三个经验层次；用户要求以其真实经历回答时，提醒不要夸大，不记得的数据标注「需核对」而非编造。

## 章节索引（按需读取对应文件）

| 文件 | 内容 |
|---|---|
| [00-learning-guide.md](references/00-learning-guide.md) | 学习方法、四级掌握评分、答题框架、经验边界原则 |
| [01-device-circuit-process.md](references/01-device-circuit-process.md) | MOS 四端、体效应、PN 结、寄生 BJT/latch-up、CMOS/BCD/LDMOS、ADC/LDO/PGA/bandgap 的版图约束 |
| [02-matching-lde.md](references/02-matching-lde.md) | 随机/系统失配、Pelgrom、共质心、单位单元、dummy、LOD/SA/SB、WPE、MIM/MOM/MOS 电容、比例与互连 |
| [03-finfet-patterning-hv.md](references/03-finfet-patterning-hv.md) | FinFET 宽度量化、CPP/pitch/track、LELE/SADP、奇数环、镜像拼接、底层互连瓶颈、高压隔离、天线、密度 |
| [04-floorplan-routing-package.md](references/04-floorplan-routing-package.md) | floorplan 输入、信号流与隔离、TOP-DOWN、差分/高阻/屏蔽、PG 与 Kelvin、FC/Wirebond、IP 拼接检视 |
| [05-physical-verification-signoff.md](references/05-physical-verification-signoff.md) | DRC/LVS/ERC/PERC 分工、配置排错、LVS 参数定位、短路/断路、软连接、识别层与自定制 rule、黑盒、waiver 与签核证据链 |
| [06-pex-postsim.md](references/06-pex-postsim.md) | PEX 输入核对、提取角 vs 工艺角、C-only/RC/耦合、模型本征 vs 互连寄生、比例误差口径、后仿定位、优化验收 |
| [07-esd-emir.md](references/07-esd-emir.md) | ESD 路径、PERC CD/P2P、clamp 均流、负压 pad、latch-up vs ESD、EM vs IR、平均/RMS/峰值、动态压降、自热老化 |
| [08-eda-scripting.md](references/08-eda-scripting.md) | Library/Cell/View 与技术库、工具链分工、SKILL/Python/shell 分工、批量 DRC 修改、自动 pin/via、PCell/CDF、归档、AI 生成脚本验收 |
| [09-pdk-migration-dtco.md](references/09-pdk-migration-dtco.md) | PDK 升级差异分类、LVL、layer map 移植、pad/隔离变化、封装复用回归、DTCO、PPA 口径、BPR/BSPDN/GAA 边界、ECO 与交付计划 |
| [10-engineering-topics.md](references/10-engineering-topics.md) | 30 个专题实操：NFIN/nf/m、PODE、MOL、cut/着色、pin 访问、误差预算反推、质心坐标、Elmore、DSPF/SPEF、RC 缩减、fill 重提取、DBU/栅格、cellview 生命周期、PCell 幂等、Tcl、回归、soft connection、黑盒、签核快照、via 瓶颈、温度寿命、PPAC、面积口径 |
| [11-automotive-reliability.md](references/11-automotive-reliability.md) | 车规 vs 普通项目输入对比、EM 寿命档位、mission profile/POH、Black 方程边界、温度 Grade 与 HTOL、AEC-Q100 与功能安全边界 |
| [12-3dic-stacking.md](references/12-3dic-stacking.md) | 3D 经验边界表述、TSV vs 普通 via、通孔 RLC 与回流、应力/热/KOZ、跨 die LVS/PERC/EM、经验迁移 |
| [13-advanced-scenarios.md](references/13-advanced-scenarios.md) | 60 个高级工程场景（设计与匹配 / 验证与可靠性 / 协作与交付 / 工具与视野），每条给出判断步骤与验证目标 |

## 使用方式

- 用户问到具体主题时，只读取上表对应章节文件，不必全量载入。
- 文件较长时先用 grep 定位条目号（如 Q055、A03、S12）再精读该条目。
- 做面试陪练时：从 13 章选场景，先让用户回答，再对照「判断与行动」点评；追问跟着用户上一句回答走。
- 评审用户的方案/回答口径时，对照相应条目的「要点」与「自测」，指出遗漏的验证输入或过度承诺的表述。
