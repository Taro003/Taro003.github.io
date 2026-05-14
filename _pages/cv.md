---
layout: archive
title: "CV"
permalink: /cv/
author_profile: true
redirect_from:
  - /resume
---

{% include base_path %}

<div class="lang-en" markdown="1">

## Education

* **M.S.** in Mechanical Engineering, Shanghai Jiao Tong University (SJTU), 2024 – 2027 (expected)
  * Advisor: Prof. Xiao Li · Research interests: reinforcement learning for legged robots, morphology–control co-design, robot navigation
* **B.E.** in Mechanical Engineering, Shanghai Jiao Tong University (SJTU), 2020 – 2024

## Research Experience

**Graduate Researcher** — School of Mechanical Engineering, SJTU (2024 – present)
* Advisor: Prof. Xiao Li
* Co-author, **Human2Nav** ([ICRA 2026, accepted]({{ base_path }}/publication/2026-human2nav-icra)): a framework learning robot crowd navigation from passive human videos via BEV representation and feasibility-guided flow matching; validated on wheeled and quadrupedal robots.
* First author, **CALA** ([submitted]({{ base_path }}/publication/2026-cala-rcar)): hierarchical bi-level co-design combining CMA-ES morphology search and rapid PPO fine-tuning for terrain-specific adaptive locomotion on Unitree Go2 and Ant.

## Internship Experience

**Robotics Perception Intern** — [Viwistar (慧智星晨)](https://www.viwistar.com/) (2024 – 2025) — [project page]({{ base_path }}/portfolio/ros2-vlm-inference/)
* Built an end-to-end pipeline integrating a LoRA-adapted vision–language model with a ROS2 service node for near–real-time scene understanding with an RGB-D camera (public write-up omits customer-specific models, versions, and datasets).
* Covered in-house data collection, adapter training, and ROS2 deployment on Linux; stack details omitted on the public site for confidentiality.

## Selected Projects

**Bachelor Thesis — Tricuspid Valve Simulator Handle** (SJTU, 2024) — [project page]({{ base_path }}/portfolio/graduate-thesis-tricuspid-handle/)
* Advisor: Prof. Xinjun Sheng · *Design and Development of a Handle for Simulating Tricuspid Valve Intervention Procedures*
* Designed a 13-DOF operating handle for a cardiac tricuspid-valve intervention simulator and iterated through three mechanical versions.
* Developed modular embedded electronics (32-bit ARM MCU class) and a host communication layer integrated into the handle base; quantitative specs and part numbers omitted publicly.
* Outcome: prototype handle + circuit + protocol joint-debugged with the Unity simulator; delivered to the partner medical-device company.

**Innovation Project — Mutual-Suction Robot for Large Surface Part Machining and Assembly** (SJTU, 2022–2023) — [project page]({{ base_path }}/portfolio/qianxuesen-mutual-suction-robot/)
* Team (4) · Advisor: Prof. Bintang Yang
* Designed a 6-RRRPRR variable-configuration wheel-leg parallel robot for aerospace thin-wall skin machining; screw-theory DOF analysis, ADAMS obstacle-crossing gait comparison (quadratic / rounded-rect / **cubic B-spline**).
* Derived three-wheel omnidirectional curved-surface kinematics (Montana point-contact equations); co-designed a bistable permanent-magnet / electromagnetic actuator for active joint locking through equivalent magnetic circuit and ANSYS simulation.

## Skills

* **Simulation & RL:** Isaac Sim / IsaacLab, MuJoCo, PPO, sim-to-real transfer
* **Programming:** Python, C++
* **Robotics:** ROS2, legged-robot control, locomotion policy training
* **Perception:** VLM fine-tuning (LoRA), dataset collection & annotation
* **Mechanical & electronics:** CAD, parametric mechanism design, STM32 embedded firmware, serial/DMA/ADC pipelines
* **Tools:** Linux (Ubuntu), Docker

</div>

<div class="lang-zh" markdown="1">

## 教育经历

* **硕士**，机械工程，上海交通大学（SJTU），2024 – 2027（预计）
  * 导师：李潇教授 · 研究方向：足式机器人强化学习、形态–控制协同设计、机器人导航
* **学士**，机械工程，上海交通大学（SJTU），2020 – 2024

## 科研经历

**研究生科研助理** — 上海交通大学机械与动力工程学院（2024 年至今）
* 导师：李潇教授
* 共同作者，**Human2Nav**（[ICRA 2026，已接收]({{ base_path }}/publication/2026-human2nav-icra)）：基于 BEV 表示与可行性引导流匹配从人类视频学习机器人人群导航策略；在轮式机器人与四足机器人上完成实物验证。
* 第一作者，**CALA**（[在投]({{ base_path }}/publication/2026-cala-rcar)）：融合 CMA-ES 形态搜索与快速 PPO 微调的分层双层协同设计框架，在 Unitree Go2 与 Ant 上跨六种地形组合完成验证。

## 实习经历
**机器人感知实习生** — [Viwistar 慧智星晨](https://www.viwistar.com/)（2024 – 2025）— [项目详情]({{ base_path }}/portfolio/ros2-vlm-inference/)
* 构建端到端流水线，将经 LoRA 适配的视觉语言模型集成为 ROS2 服务节点，结合 RGB-D 相机实现近实时场景理解（公开页面不写客户侧模型、版本与数据集细节）。
* 覆盖自建数据采集、适配器训练及 Linux 上 ROS2 部署；具体软硬件栈在网站从略以符合保密要求。

## 代表性项目

**本科毕业设计 — 三尖瓣介入手术模拟器手柄**（上海交大，2024）— [项目详情]({{ base_path }}/portfolio/graduate-thesis-tricuspid-handle/)
* 指导老师：盛鑫军教授 · 课题《模拟三尖瓣介入手术操作手柄设计与开发》
* 为心脏三尖瓣介入模拟器设计 13 自由度操作手柄，迭代三版机械方案
* 设计模块化嵌入式电路（32 位 ARM MCU 量级）及与上位机的通讯方案，集成于手柄基座；定量参数与料号在公开页面从略。
* 成果：手柄 + 电路 + 协议完成原型生产与模拟器联合调试，交付合作医疗器械公司。

**科创项目 — 面向大型面零件加工装配的对吸式作业机器人**（上海交大，2022–2023）— [项目详情]({{ base_path }}/portfolio/qianxuesen-mutual-suction-robot/)
* 团队 4 人 · 指导老师：杨斌堂 教授
* 设计 6-RRRPRR 变构型轮足并联机器人（面向航空航天薄壁蒙皮加工）；用螺旋理论做自由度分析，在 ADAMS 中对比二次曲线/圆角矩形/**三次 B 样条**越障轨迹。
* 推导三轮全向机器人曲面运动学（Montana 点接触方程）；协同设计**双稳态永磁–电磁驱动器**用于关节主动锁定——等效磁路 + ANSYS 仿真，参数比值寻优。

## 技能

* **仿真与强化学习：** Isaac Sim / IsaacLab、MuJoCo、PPO、sim-to-real 迁移
* **编程语言：** Python、C++
* **机器人：** ROS2、腿足机器人控制、运动策略训练、
* **感知：** VLM 微调（LoRA）、数据采集与标注
* **机械与电子：** CAD、参数化机构设计、STM32 嵌入式固件、串口/DMA/ADC 流水线
* **工具：** Linux（Ubuntu）、Docker

</div>

---

## <span class="lang-en">Publications</span><span class="lang-zh">发表成果</span>

<ul>{% for post in site.publications reversed %}
  {% include archive-single-cv.html %}
{% endfor %}</ul>
