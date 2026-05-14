---
title: "Tricuspid Valve Intervention Simulator Handle"
excerpt: "High–DOF bionic operating handle for a cardiac tricuspid valve interventional surgery simulator — mechanical structure, embedded electronics, and host communication."
collection: portfolio
permalink: /portfolio/graduate-thesis-tricuspid-handle/
header:
  teaser: /images/graduate-thesis.png
---

<img src="/images/graduate-thesis.png" alt="Tricuspid valve simulator handle overview" style="width:100%;max-width:720px;border-radius:6px;margin:1em 0;" />

<div class="lang-en" markdown="1">

**Bachelor Thesis, Shanghai Jiao Tong University (2024)**  
Advisor: Prof. Xinjun Sheng · School of Mechanical Engineering  
Original title: *Design and Development of a Handle for Simulating Tricuspid Valve Intervention Procedures*

## Overview

Cardiac interventional procedures are complex, radiation-exposing, and require extensive surgeon training. This thesis develops the **operating handle** for a virtual-reality tricuspid-valve intervention simulator, **in collaboration with a medical-device partner** and aligned at a high level with their commercial catheter system (trade names, product generations, and clinical indications are omitted here). The simulator couples a 3D virtual surgical environment, real-time medical-style imaging, the physical handle, and a continuum-style sheath interface — providing a training platform for interventional cardiologists.

My work covers the **mechanical structure**, **embedded electronics**, and **host communication** of the handle.

## Contributions

**Many-DOF mechanical handle.** The exterior follows the partner instrument’s ergonomic envelope while internally sensing the full set of clinically relevant operation axes (sheath and tool motions grouped at a high level: rotation, bending, feed, clip-related actions, anchoring, and locking). Multiple mechanical revisions resolved conflicts between rotary transmissions and routed sensing cables.

**Gear-based transmission redesign.** Where coaxial layouts caused the bending knob to entangle flex circuits, the design was reworked into an **eccentric fixed-axis gear train** so that angle sensing could be referenced to a kinematically quiet housing. Detailed tooth counts, modules, and strength checks are omitted.

**Leadscrew / thread–based clip feed.** A rotary–linear DOF was implemented with a trapezoidal-thread style pair so that one turn of the knob advances the clip carriage over the required clinical stroke. Geometric parameters, friction estimates, and efficiency numbers are omitted.

**Modular embedded electronics.** A stack of boards in the handle base covers regulated power from USB, a **32-bit ARM MCU** reading many analog channels with DMA and simple digital filtering, front-end boards for commercial angle and linear displacement sensors, and a USB serial link to the PC-side simulator. Specific IC part numbers, PCB stack-ups, and sensor ordering codes are omitted.

**Host protocol.** A compact binary framing scheme carries channel indices and sampled values to the Unity-based simulator; baud rate and exact byte layout are omitted.

## Outcome

- Prototype handle assembled and exercised together with the simulator software.
- Operation axes mapped to the virtual instrument with interactive latency acceptable for training.
- Hardware + firmware delivered as a demonstrator to the partner under their release process.

</div>

<div class="lang-zh" markdown="1">

**上海交通大学 本科毕业论文（2024）**  
指导教师：盛鑫军 教授 · 机械与动力工程学院  
原题：《模拟三尖瓣介入手术操作手柄设计与开发》

## 项目概述

心脏介入手术操作复杂、辐射暴露高，对术者经验与培训要求极高。本毕设与**医疗器械企业合作**，面向其商业化经导管三尖瓣相关器械，开发一套**虚拟手术模拟器的操作手柄**（具体商品名、代际与临床适应症在此从略）。整套模拟器由数字虚拟手术环境、实时类医学影像、物理手柄与连续体鞘管侧接口等组成，为介入培训提供实验平台。

本人工作覆盖手柄的**机械结构、前端电路与上位机通讯**。

## 主要贡献

**多自由度手柄机械。** 在外观上贴合合作方临床器械的人机轮廓，内部则对临床相关的一组操作自由度进行传感（大/小鞘与器械末端多类动作在此只做功能级概括）。针对旋转传动与传感线缆走线之间的耦合矛盾，进行了多轮结构迭代。

**齿轮传动重构。** 针对同轴布局易导致控弯旋钮与柔性电路干涉的问题，改为**偏心定轴轮系**，使角度基准落在相对静止的壳体上，从结构上减轻旋转过程中的缠线风险。齿数、模数与强度校核等具体设计表不在此列出。

**梯形螺纹类夹头进给。** 采用螺纹副实现旋钮旋转与夹头轴向进给的联动，以满足临床行程需求。螺纹几何参数、摩擦与效率等定量结果从略。

**模块化嵌入式电路。** 手柄基座内集成稳压供电、**32 位 ARM MCU** 多路模拟采集（DMA 与简易数字滤波）、面向商用角度/直线位移传感器的模拟前端，以及与上位机模拟器的 USB 串行链路。具体芯片型号、PCB 叠层厚度与传感器订货代码从略。

**上位机协议。** 采用紧凑二进制帧向上位机（Unity 模拟器）上报通道与采样值；波特率与帧字节格式从略。

## 项目成果

- 完成手柄原型装配，并与模拟器软件联合调试
- 各操作自由度可驱动虚拟器械，交互延迟满足培训演示需求
- 按合作方流程交付可演示硬件与固件

</div>
