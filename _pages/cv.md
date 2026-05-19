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

* **M.S.** in Mechanical Engineering, Shanghai Jiao Tong University (SJTU), School of Mechanical Engineering · Sep 2024 – Mar 2027 (expected)
  * Advisor: Prof. Xiao Li · Research: legged-robot **reinforcement learning**, **morphology–control co-design**, real-robot deployment
  * **GPA 3.79 / 4.0** · Rank **26 / 274**
* **B.E.** in Mechanical Engineering, Shanghai Jiao Tong University (SJTU) · Sep 2020 – Jul 2024

## Research Experience

**Graduate Researcher** — School of Mechanical Engineering, SJTU (2024 – present) · Advisor: Prof. Xiao Li

### Morphology–Control Co-Design for Legged Locomotion in Complex Terrain (M.S. thesis topic)

* **Goal:** Enable legged robots to adapt to disaster-rescue terrains where a single fixed morphology cannot cover diverse geometric demands.
* **Approach:** Hierarchical bi-level co-optimization—outer **CMA-ES** over continuous morphology parameters, inner rapid **PPO** fine-tuning of morphology-aware locomotion priors; unified parametric morphology model to avoid per-candidate asset regeneration.
* **Outcome:** First author, **CALA** ([submitted]({{ base_path }}/publication/2026-cala-rcar)); validated on **Unitree Go2** and **Ant** across six terrain–platform settings; morphology-randomized pretraining outperforms fixed-morphology and from-scratch baselines, with stronger traversal and adaptability on composite sequential terrains.

### Human2Nav — Learning Crowd Navigation from Human Videos (ICRA 2026)

* **Goal:** Reduce robot data-collection cost by leveraging scalable human-video demonstrations for safe navigation in dynamic crowds.
* **Approach:** UAV-view human videos → **BEV** occupancy and velocity fields; conditional flow matching in **SE(2)**; test-time **feasibility-guided** projection onto each platform's kinematic/dynamic feasible set without per-platform retraining.
* **My contribution:** **ROS2-based data acquisition** and **real-robot policy deployment** on differential-drive and quadruped platforms across multi-scenario crowd experiments.
* **Outcome:** Co-author, **Human2Nav** ([ICRA 2026, accepted]({{ base_path }}/publication/2026-human2nav-icra)); outperforms **ORCA** / **SARL** in success rate and data efficiency; supports cross-platform deployment.

## Internship Experience

**Robotics Perception Intern** — [Viwistar (慧智星晨)](https://www.viwistar.com/) (2024 – 2025) — [project page]({{ base_path }}/portfolio/ros2-vlm-inference/)

* **Goal:** Near–real-time scene understanding for laboratory automation (e.g., test-tube state recognition) to support downstream robotic manipulation.
* **Approach:** End-to-end pipeline—RGB-D **data collection & annotation**, **LoRA** fine-tuning of **Qwen2.5-VL** via [**Qwen2-VL-Finetune**](https://github.com/2U1/Qwen2-VL-Finetune), and **ROS2** service-node deployment with trigger-based inference.
* **Outcome:** Delivered dataset generation, model adaptation, offline validation, and on-line **ROS2** inference returning compact labels (e.g., lying / tilted) for manipulation workflows.

## Selected Projects

**Bachelor Thesis — Tricuspid Valve Intervention Simulator Handle** (SJTU, 2024) — [project page]({{ base_path }}/portfolio/graduate-thesis-tricuspid-handle/)

* Advisor: Prof. Xinjun Sheng · *Design and Development of a Handle for Simulating Tricuspid Valve Intervention Procedures*
* Designed a high–DOF surgical handle teach pendant with **STM32**-based sensing electronics; **SolidWorks** CAD and **3D-printed** prototypes; integrated with a custom **Unity** simulator and cable-driven surgical robot model for demonstration.
* Co-inventor, patent: *Tricuspid valve interventional surgery simulation data-acquisition handle* (Publication No. **CN120580913A**).

**Undergraduate Research — Mutual-Suction Robot for Large Surface Parts** (SJTU, 2022–2023) — [project page]({{ base_path }}/portfolio/qianxuesen-mutual-suction-robot/)

* Team (4) · Advisors: Prof. Bintang Yang, Prof. Yikun Yang
* Designed a **6-RRRPRR** variable-configuration wheel-leg parallel robot with **bistable electromagnetic** joint locking; **MATLAB** / **ANSYS** for mechanics and magnetic-field simulation; **SolidWorks** prototyping and magnetic-module bring-up.

## Skills

* **Programming & tools:** **Python**, **C++**, **Linux (Ubuntu)**, **MATLAB**, **Git**, **Docker**
* **Simulation & learning-based control:** **Isaac Lab / Isaac Sim**, **Legged Gym**, **MuJoCo**, **PPO**, **CMA-ES**, **sim-to-real**; familiar with **Extreme-Parkour**, **PIE** and related legged-RL frameworks
* **Robot systems & deployment:** **ROS2**, legged-robot control, Linux-based real-robot integration, experiment and **data-collection** workflows
* **Perception & data:** **RGB-D** cameras (**Intel RealSense**, **Livox Mid-360**), **VLM** adaptation (**LoRA**), dataset collection and annotation
* **Mechanical & embedded hardware:** **SolidWorks** CAD, parametric mechanism design, **STM32** embedded development, sensor integration

</div>

<div class="lang-zh" markdown="1">

## 教育经历

* **硕士**，机械工程，上海交通大学机械与动力工程学院 · 2024 年 09 月 – 2027 年 03 月（预计）
  * 导师：李潇教授 · 研究方向：足式机器人**强化学习**、**形态–控制协同设计**、实机部署
  * **GPA 3.79 / 4.0** · 专业排名 **26 / 274**
* **学士**，机械工程，上海交通大学 · 2020 年 09 月 – 2024 年 07 月

## 科研经历

**研究生科研** — 上海交通大学机械与动力工程学院（2024 年至今）· 导师：李潇教授

### 复杂地形下足式机器人形态与控制策略的协同设计（硕士课题）

* **目标：** 面向灾难救援等复杂地形，解决固定机器人形态难以同时适应多类场景的问题。
* **方法：** 分层双层协同优化——外层 **CMA-ES** 搜索连续形态参数，内层基于运动先验的 **PPO** 快速微调；统一参数化形态模型，避免逐候选形态重复建模。
* **成果：** 第一作者 **CALA**（[在投]({{ base_path }}/publication/2026-cala-rcar)）；在 **Unitree Go2** 与 **Ant** 六种地形–平台组合上验证；形态随机化预训练优于固定形态与从零训练基线，复合序列地形穿越距离与适应性更优。

### 从人类视频学习机器人群体导航（ICRA 2026）

* **目标：** 利用易获取的人类视频示范降低机器人数据采集成本，实现动态人群中的安全高效导航。
* **方法：** 无人机视角人类视频 → **BEV** 占用与速度场；**SE(2)** 条件流匹配；测试阶段 **可行性引导** 将轨迹投影至各平台运动学/动力学可行集，无需逐平台重训。
* **本人工作：** 基于 **ROS2** 的数据采集与**学习策略真机部署**，在差速与四足平台上完成多场景人群实验验证。
* **成果：** 共同作者 **Human2Nav**（[ICRA 2026，已接收]({{ base_path }}/publication/2026-human2nav-icra)）；成功率与数据效率优于 **ORCA**、**SARL** 等基线，支持跨平台部署。

## 实习经历

**机器人感知实习生** — [Viwistar 慧智星晨](https://www.viwistar.com/)（2024 – 2025）— [项目详情]({{ base_path }}/portfolio/ros2-vlm-inference/)

* **目标：** 面向实验室自动化机械臂场景，识别试管状态等任务相关异常，为下游流程提供感知判断。
* **方法：** 端到端流程——**RGB-D** 图像采集与标注、基于 [**Qwen2-VL-Finetune**](https://github.com/2U1/Qwen2-VL-Finetune) 对 **Qwen2.5-VL** 进行 **LoRA** 微调、封装为 **ROS2** 触发式推理服务节点。
* **成果：** 完成自建数据集、模型适配、离线验证与 **ROS2** 在线推理部署，可返回试管平放/倾斜等状态，为机械臂流程提供近实时场景理解。

## 代表性项目

**本科毕业设计 — 三尖瓣介入手术模拟器手柄**（上海交大，2024）— [项目详情]({{ base_path }}/portfolio/graduate-thesis-tricuspid-handle/)

* 指导老师：盛鑫军教授 · 课题《模拟三尖瓣介入手术操作手柄设计与开发》
* 设计手术器械手柄示教器及内部传感电路，**STM32** 主控，**SolidWorks** 建模与 **3D 打印** 原型；联合自建 **Unity** 模拟器与线驱手术机器人模型演示。
* 共同发明人，专利《三尖瓣介入式手术模拟数据采集手柄》（公开号 **CN120580913A**）。

**本科科研项目 — 面向大型零件加工装备的对吸式作业机器人**（上海交大，2022–2023）— [项目详情]({{ base_path }}/portfolio/qianxuesen-mutual-suction-robot/)

* 团队 4 人 · 指导教师：杨斌堂、杨诣坤 教授
* 设计 **6-RRRPRR** 变构型轮足并联机器人及**双稳态电磁**关节锁定；**MATLAB**、**ANSYS** 力学与磁场仿真；**SolidWorks** 原型设计与磁吸模块调试。

## 技能

* **编程与工具：** **Python**、**C++**、**Linux（Ubuntu）**、**MATLAB**、**Git**、**Docker**
* **仿真与学习控制：** **Isaac Lab / Isaac Sim**、**Legged Gym**、**MuJoCo**、**PPO**、**CMA-ES**、**sim-to-real**；了解 **Extreme-Parkour**、**PIE** 等足式强化学习框架
* **机器人系统与部署：** **ROS2**、腿足机器人控制、Linux 实机集成、实验与**数据采集**流程
* **感知与数据：** **RGB-D** 相机（**Intel RealSense**、**Livox Mid-360**）、**VLM** 适配（**LoRA**）、数据集采集与标注
* **机械与嵌入式：** **SolidWorks** CAD、参数化机构设计、**STM32** 嵌入式开发、传感器集成

</div>

---

## <span class="lang-en">Publications</span><span class="lang-zh">发表成果</span>

<ul>{% for post in site.publications reversed %}
  {% include archive-single-cv.html %}
{% endfor %}</ul>
