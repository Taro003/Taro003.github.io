---
title: "Scene-Reconstruction-Based Morphology–Locomotion Co-Design"
title_zh: "基于场景重建的机器人形态–运动协同设计"
excerpt: "Co-optimizing robot morphology and locomotion policy using reconstructed scene representations for terrain-adaptive legged robots."
excerpt_zh: "基于场景重建信息联合优化机器人形态与运动策略，实现地形自适应的腿足机器人设计。"
collection: portfolio
permalink: /portfolio/codesign-perceptive-locomotion/
header:
  teaser: co-design/20260818-111825.png
---

<div class="lang-en" markdown="1">

## Overview

This ongoing project explores a **sim2real2sim** pipeline for **morphology–locomotion co-design**: we first scan and reconstruct the target environment, then fine-tune and co-optimize robot morphology with its locomotion policy in simulation, and finally deploy back to the real world with **continuous morphology switching** during operation.

</div>

<div class="lang-zh" markdown="1">

## 概述

本项目正在进行中，探索面向**形态–运动协同设计**的 **sim2real2sim** 流程：先对目标环境进行扫描重建，再在仿真中微调训练、协同优化机器人形态与运动策略，最后回到真实环境实现运行过程中的**形态连续切换**。

</div>

## <span class="lang-en">Current Demos</span><span class="lang-zh">当前演示</span>

<div class="lang-en" markdown="1">
**Environment scanning & reconstruction.** Real-world scenes are scanned and reconstructed into simulation-ready representations.
</div>
<div class="lang-zh" markdown="1">
**环境扫描与重建。** 对真实场景进行扫描，重建为可用于仿真的场景表示。
</div>

<img src="{{ base_path }}/images/co-design/20260818-111825.png" alt="Scene reconstruction (RGB point cloud)" style="width:100%;max-width:720px;border-radius:6px;margin:1em 0;" />
*<span class="lang-en">Reconstructed scene point cloud.</span><span class="lang-zh">重建场景点云。</span>*

<img src="{{ base_path }}/images/co-design/20260818-111830.png" alt="Scene reconstruction (mesh)" style="width:100%;max-width:720px;border-radius:6px;margin:1em 0;" />
*<span class="lang-en">Reconstructed scene mesh.</span><span class="lang-zh">重建场景网格。</span>*

<div class="lang-en" markdown="1">
**Locomotion in the reconstructed simulation environment.** The robot locomotes in simulation built from the scanned scene.
</div>
<div class="lang-zh" markdown="1">
**重建仿真环境中的运动。** 机器人在由扫描场景构建的仿真环境中运动。
</div>

<video width="100%" controls preload="metadata" playsinline style="margin: 1.5em 0; border-radius: 6px;">
  <source src="{{ base_path }}/images/co-design/real2sim.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

<div class="lang-en" markdown="1">

## Related Work & References

* This project builds on our **CALA** co-design framework — see the [CALA project page]({{ base_path }}/publication/2026-cala-rcar) (RCAR 2026).
* The perceptive locomotion component references the [Extreme Parkour](https://github.com/chengxuxin/extreme-parkour) project.

</div>

<div class="lang-zh" markdown="1">

## 相关工作与参考

* 本项目基于我们的 **CALA** 协同设计框架——参见 [CALA 项目页面]({{ base_path }}/publication/2026-cala-rcar)（RCAR 2026）。
* 感知运动部分参考了 [Extreme Parkour](https://github.com/chengxuxin/extreme-parkour) 项目。

</div>
