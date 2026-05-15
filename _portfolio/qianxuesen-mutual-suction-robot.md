---
title: "Mutual-Suction Robot for Large Surface Part Machining"
excerpt: "Variable-configuration wheel-leg parallel robot (6-RRRPRR) with bistable electromagnetic suction for aerospace thin-wall skin machining"
collection: portfolio
permalink: /portfolio/qianxuesen-mutual-suction-robot/
header:
  teaser: graduate_senior_project/preview.png
---

<img src="{{ base_path }}/images/graduate_senior_project/preview.png" alt="Mutual-suction robot overview" style="width:100%;max-width:720px;border-radius:6px;margin:1em 0;" />
*<span class="lang-en">Mutual-suction robot project preview.</span><span class="lang-zh">对吸式作业机器人项目预览。</span>*

<div class="lang-en" markdown="1">

**Undergraduate Research Project (SJTU)**  
Team: Xiaoyi Tai, **Sichi Yan**, Da Huang, Chang Liu · Advisors: Prof. Bintang Yang, Prof. Yikun Yang  
Original title: *A Mutual Suction Robot for Machining and Assembling Large Surface Parts*

## Overview

Large aerospace thin-wall parts (aircraft skins, rocket tank walls) can exceed tens of meters, are poorly open, and have low rigidity — forcing the manufacturing paradigm to shift from *"fixed machine, moving part"* to *"fixed part, moving machine"*. This project develops a lightweight, modular, **self-walking multi-DOF precision machining platform** that attaches directly to the skin surface, navigates curved non-magnetic walls, clears obstacles, and performs multi-DOF pose adjustment at the end-effector.

## My Contributions

**Variable-configuration 6-RRRPRR wheel-leg parallel robot.** Building on the Stewart platform, the spherical joints at the limb ends are split into independent revolute joints so that individual joints can be *locked* to switch between rigid 6-DOF pose-adjustment mode and wheel-walking mode. DOF analysis uses **screw theory + modified Grübler-Kutzbach** to verify 6-DOF platform motion and 3-DOF single-leg lift motion.

**Obstacle-crossing gait & trajectory planning.** Designed two gaits: *pure-wheel* (lift-then-translate) and *wheel-leg hybrid* (per-leg straddle). Evaluated three foot-end trajectories (quadratic / rounded-rectangle / cubic B-spline) in ADAMS under matched 30 mm obstacle / 8 s / 80 mm stride constraints — **cubic B-spline** gave the best balance of smooth velocity/acceleration, obstacle-width adaptability, and stroke requirement (66 mm, 20 mm/s).

**Three-wheel omnidirectional kinematics on curved surfaces.** Established a complete kinematic chain ground → work-surface contact → wheel contact → contact-point frames using SE(3) transforms; derived **Montana contact-kinematics equations** on the curved skin; formulated the instantaneous manipulator model as three parallel serial chains with Moore-Penrose pseudo-inverses — applicable to any surface via the surface metric, curvature, and torsion tensors.

**Bistable permanent-magnet / electromagnetic actuator.** Co-designed a modular movable-iron bistable driver for active joint locking. Built the equivalent magnetic circuit (Kirchhoff voltage equations, non-linear μ iteration with DT4C B-H curve and Lagrange interpolation, Φ convergence ε-criterion); validated with ANSYS FE magnetostatic simulation. Parameterized **8 structural ratios (K1–K4)** and optimized F-x linearity + starting force + holding force — final design reaches ~59 N holding force with 75 N start force @ 960 A, maintains hold without power.

## Outcome

- Full platform theory, kinematics, and bistable actuator design completed
- Prototype assembled under advisors' supervision; physical testing in progress
- Submitted as the team's entry for the 7th Qian Xuesen Cup

</div>

<div class="lang-zh" markdown="1">

**本科科研项目 — 上海交通大学**  
团队成员：邰潇逸、**鄢思迟**、黄达、刘畅 · 指导教师：杨斌堂 教授、杨诣坤 教授  
原题：《面向大型面零件加工装配的对吸式作业机器人》

## 项目概述

航空航天大型薄壁零件（如飞机蒙皮、火箭贮箱壁板）尺寸可达数十米、开敞性差、壁薄刚度低，其制造模式正从"**固定母机、移动零件**"向"**固定零件、移动母机**"转变。本项目面向此类场景，研制一套**集成化、轻型化、多自由度自行走精密加工平台**，实现薄壁壁面的稳定吸附、全向行走、越障与末端多自由度精密调姿。

## 项目内容

**6-RRRPRR 变构型轮足并联机器人。** 以 Stewart 平台为基础，将支链两端的球副拆分为独立转动副，使单个关节可**部分锁定**，实现刚性 6 自由度调姿模式与轮式行走模式切换。采用**螺旋理论 + 修正 Grübler-Kutzbach 公式**进行自由度分析，验证平台 6 自由度与单足 3 自由度运动能力。

**越障步态与轨迹规划。** 设计纯轮式越障与轮足混合越障两种方案，在 ADAMS 中对二次曲线、圆角矩形与三次 B 样条三种足端轨迹进行对比仿真（控制 30 mm 障高 / 8 s / 80 mm 单步位移），**三次 B 样条**在速度/加速度光滑性、越障容许宽度与伸缩行程要求（66 mm、20 mm/s）之间取得最优折中。

**三轮全向机器人曲面运动学。** 基于 SE(3) 变换构建"地面 → 工件表面 → 全向轮 → 接触点"四坐标系完整变换链；推导曲面上的 **Montana 点接触运动学方程**；将机器人瞬时模型建模为三条并联串行轮链，利用 Moore-Penrose 广义逆求解——模型可通过曲面度量张量/曲率张量/挠率推广到任意曲面。

**双稳态永磁-电磁驱动器。** 为机器人关节主动锁定设计模块化动铁式双稳态驱动器。等效磁路法建模（基尔霍夫回路方程、DT4C 非线性 μ 迭代配合 Lagrange 插值、磁通收敛判据 ε）并用 ANSYS 有限元磁场仿真验证；参数化 8 个结构比值（K1–K4），在 F-x 线性度、启动力、保持力之间寻优，最终保持力约 59 N、960 A 下启动力 75 N，断电自锁。

## 项目成果

- 完成整套平台构型、曲面运动学、双稳态驱动器的理论设计与优化
- 在指导老师指导下完成实物样机装配

</div>
