---
title: "Human2Nav: Learning Crowd Navigation from Human Videos across Robots via Feasibility-Guided Flow Matching"
collection: publications
category: conferences
permalink: /publication/2026-human2nav-icra
excerpt: 'A data-efficient framework that learns robot crowd navigation policies directly from passive human videos, bridging the embodiment gap via BEV representation and test-time feasibility-guided flow matching. Deployed on differential-drive and quadrupedal robots across four crowd scenarios without platform-specific retraining.'
date: 2026-05-19
venue: 'IEEE International Conference on Robotics and Automation (ICRA 2026)'
paperurl: '/files/human2nav_icra26.pdf'
citation: 'Shenghong Zhang, Junjie Chen, <b>Sichi Yan</b>, Yutong Ban, and Xiao Li. (2026). &quot;Human2Nav: Learning Crowd Navigation from Human Videos across Robots via Feasibility-Guided Flow Matching.&quot; <i>IEEE ICRA 2026</i>.'
---

<video width="100%" controls preload="metadata" playsinline style="margin: 1.5em 0; border-radius: 6px;">
  <source src="{{ base_path }}/files/human2nav_video.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

## <span class="lang-en">Overview</span><span class="lang-zh">概述</span>

<div class="lang-en" markdown="1">
Enabling robots to navigate safely and efficiently in dynamic, crowded environments requires learning from large-scale demonstrations. While human videos offer a rich and scalable alternative to costly robot-collected data, transferring these motion patterns to robots is challenged by the **embodiment gap** across observation and action spaces.

**Human2Nav** addresses this by learning navigation policies *directly from human videos* using test-time feasibility-guided flow matching — no robot-specific data collection or retraining required.
</div>

<div class="lang-zh" markdown="1">
让机器人在动态人群环境中安全高效地导航，需要从大规模示范数据中学习。人类视频提供了一种丰富且易于获取的替代方案，但将人类运动模式迁移至机器人面临**本体差异**（观测空间与动作空间双重鸿沟）的挑战。

**Human2Nav** 通过测试时可行性引导流匹配，直接从人类视频中学习导航策略——无需采集机器人专属数据，无需重新训练模型。
</div>

---

## <span class="lang-en">Key Ideas</span><span class="lang-zh">核心方法</span>

<div class="lang-en" markdown="1">

**Bird's-Eye-View (BEV) Representation**  
Human videos are processed via a UAV-mounted camera to extract BEV rasters encoding binary occupancy and velocity fields. This shared representation bridges the observation gap between human egocentric footage and robot sensor inputs (LiDAR, odometry).

**Conditional Flow Matching in SE(2)**  
A U-Net-based conditional flow matching model learns the human navigation distribution in SE(2) space, capturing nuanced crowd motion patterns from timestamped BEV observations and goal positions.

**Training-Free Feasibility-Guided Inference**  
At test time, a feasibility guidance mechanism steers flow-generated trajectories onto each robot's feasible set — enforcing platform-specific kinematic and dynamic constraints (maximum velocity, acceleration, turning radius, angular velocity) — without any model retraining. This is formulated as a constrained optimal control problem solved via Pontryagin's Maximum Principle (PMP) and E-MSA.

</div>

<div class="lang-zh" markdown="1">

**鸟瞰视角（BEV）表示**  
通过无人机搭载相机处理人类视频，提取编码二值占用与速度场的 BEV 栅格。该共享表示桥接了人类第一视角视频与机器人传感器输入（激光雷达、里程计）之间的观测差异。

**SE(2) 上的条件流匹配**  
基于 U-Net 的条件流匹配模型在 SE(2) 空间中学习人类导航分布，从时序 BEV 观测与目标位置中捕捉细腻的人群运动模式。

**无需训练的可行性引导推理**  
测试时，可行性引导机制将流生成的轨迹引导至各机器人的可行集——在无需重新训练模型的前提下，强制满足各平台的运动学与动力学约束（最大速度、加速度、转弯半径、角速度）。该过程被形式化为约束最优控制问题，采用庞特里亚金最大值原理（PMP）与 E-MSA 求解。

</div>

---

## <span class="lang-en">Experiments</span><span class="lang-zh">实验</span>

<div class="lang-en" markdown="1">

Evaluated across **four representative crowd scenarios**: Co-Flow, Cross-Flow, Counter-Flow, and Multidirection-Flow, in both simulation (SocNavBench-like) and real-world settings.

**Robot platforms:** Diablo (differential-drive) · Unitree Go2 (quadruped)

**Metrics:**
- **Success Rate (SR):** fraction of episodes reaching the goal within time budget without collision
- **Trajectory Feasibility Score (TFS):** proportion of planned waypoints satisfying platform-specific dynamic constraints

**Results:**
- Human2Nav consistently outperforms ORCA and SARL across all four crowd scenarios (Co-Flow: **0.92** vs. 0.60 / 0.52)
- Superior data efficiency vs. teleoperation: higher SR with far less collection time (~0.3 h vs. 1.5+ h)
- Feasibility guidance significantly improves TFS with negligible SR drop, enabling safe cross-platform deployment without retraining

</div>

<div class="lang-zh" markdown="1">

在仿真（类 SocNavBench 环境）与真实世界中，跨**四种典型人群场景**进行评估：同向流、交叉流、对向流及多向混合流。

**机器人平台：** Diablo（差速驱动）· Unitree Go2（四足机器人）

**评估指标：**
- **成功率（SR）：** 在时间预算内无碰撞到达目标的回合占比
- **轨迹可行性分数（TFS）：** 满足平台特定动力学约束的规划路点占比

**主要结果：**
- Human2Nav 在全部四种人群场景中持续超越 ORCA 与 SARL 基线（同向流：**0.92** vs. 0.60 / 0.52）
- 相比遥操作采集，数据效率显著更高（约 0.3 小时 vs. 1.5 小时以上，成功率更高）
- 可行性引导显著提升 TFS，对成功率影响极小，实现无需重训练的跨平台安全部署

</div>

---

## <span class="lang-en">Authors</span><span class="lang-zh">作者</span>

Shenghong Zhang, Junjie Chen, **Sichi Yan**, Yutong Ban, Xiao Li  
*<span class="lang-en">School of Mechanical Engineering, Shanghai Jiao Tong University</span><span class="lang-zh">上海交通大学机械与动力工程学院</span>*  
`{zsh000, sjtu_cjj, sichiYan, yban, sjtu.lixiao}@sjtu.edu.cn`
