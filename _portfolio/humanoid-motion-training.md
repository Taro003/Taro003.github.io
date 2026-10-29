---
title: "Variable-Speed Humanoid Motion Training"
title_zh: "可调速人形机器人动作训练"
excerpt: "BeyondMimic and curriculum learning for motion segment retiming and stitching from a single motion sequence."
excerpt_zh: "从单段动作数据出发，基于 BeyondMimic 与课程学习，实现动作分段调速与拼接。"
collection: portfolio
permalink: /portfolio/humanoid-motion-training/
header:
  teaser: pushup.jpg
---

<div class="lang-en" markdown="1">

## Overview

An **AGIbot internship project** on controllable humanoid motion training. Starting from a single motion sequence, I use **BeyondMimic with curriculum learning** to train motion segments with independently adjustable speeds and stitch them into continuous motion.

## Results

* **Segment-wise speed control from 1× to 3×** across consecutive motion segments.
* **Motion stitching** to compose multiple segments into a continuous sequence.
* **Configurable push-up counts**, allowing an arbitrary requested number of repetitions.

</div>

<div class="lang-zh" markdown="1">

## 简介

这是我在 **AGIbot 智元机器人实习期间**开展的一个机器人动作训练小项目。从**一段动作数据**出发，基于 **BeyondMimic 与课程学习**，训练支持分段独立调速与动作拼接的人形机器人动作策略。

## 实现效果

* **分段调速：** 多段连续动作可在 **1～3 倍速**范围内独立调节。
* **动作拼接：** 将多段动作拼接为连续动作序列。
* **次数控制：** 按需执行任意指定个数的俯卧撑。

</div>

## <span class="lang-en">Push-Up Demonstration</span><span class="lang-zh">俯卧撑演示</span>

<video width="100%" controls playsinline preload="metadata" poster="{{ base_path }}/images/pushup.jpg" style="max-width:720px;border-radius:6px;margin:1em 0;">
  <source src="{{ base_path }}/files/pushup.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>
