---
title: "ROS2 VLM Inference — Robotics Perception Internship"
title_zh: "ROS2 VLM 推理系统 — 机器人感知实习"
excerpt: "Real-time robotic scene understanding with a fine-tuned vision–language model deployed as a ROS2 service node during an industry internship."
excerpt_zh: "实习期间完成的 ROS2 机器人感知系统：将视觉语言模型适配到 RGB-D 场景理解任务，并封装为近实时推理服务节点。"
collection: portfolio
permalink: /portfolio/ros2-vlm-inference/
header:
  teaser: intern_viwstar/preview.png
---

<img src="{{ base_path }}/images/intern_viwstar/preview.png" alt="ROS2 VLM inference preview" style="width:100%;max-width:720px;border-radius:6px;margin:1em 0;" />


<span class="lang-en">Internship at **Viwistar (慧智星晨)** — [viwistar.com](https://www.viwistar.com/). The project centered on bringing VLM-based scene understanding into a ROS2 robotic perception workflow.</span><span class="lang-zh">实习单位：**Viwistar 慧智星晨** —— [viwistar.com](https://www.viwistar.com/)。项目重点是将基于视觉语言模型的场景理解能力接入 ROS2 机器人感知流程。</span>

<div class="lang-en" markdown="1">

An internship project that integrates a **fine-tuned vision–language model (VLM)** with a **ROS2** perception pipeline for near–real-time scene understanding in a laboratory automation setting. RGB-D sensing feeds image streams into a service-style inference node whose outputs drive downstream manipulation logic.

## System Overview

**1. Data collection.**  
Built scripts to capture and label RGB-D camera frames, organize them by task-relevant categories, and export structured datasets for model adaptation.

**2. VLM adaptation.**  
A general-purpose VLM is adapted with **LoRA** on collected data so the model fits domain-specific scene understanding tasks without full fine-tuning of the backbone.

**3. ROS2 deployment.**  
The adapted model runs as a ROS2 node that exposes a trigger-based interface: grab a frame, run inference, and publish compact results for downstream robotic logic.

## Key technologies

- **Model stack:** VLM + LoRA (`peft`, `transformers`-class tooling)
- **Sensing:** RGB-D camera integrated through the vendor ROS driver stack
- **Runtime:** ROS2 on Linux, Python-based node, NVIDIA GPU for offline training and on-line inference where required

</div>

<div class="lang-zh" markdown="1">

实习项目：将**经领域数据适配的视觉语言模型（VLM）**接入 **ROS2** 感知流水线，在实验室自动化场景下实现近实时的场景理解。RGB-D 相机提供图像流，推理节点以类似服务的接口为下游机械臂流程提供判别结果。

## 系统框架

**1. 数据采集**  
使用自研脚本完成 RGB-D 图像采集与标注，按任务相关类别归档，并导出为用于模型适配的结构化训练数据。

**2. VLM 适配**  
在采集数据上对通用 VLM 采用 **LoRA** 进行参数高效微调，在不全量重训骨干网络的前提下适配领域场景理解任务。

**3. ROS2 部署**  
将适配后的模型封装为 ROS2 节点，提供触发式调用：抓取一帧、执行推理，并向下游机器人逻辑发布紧凑结果。

## 关键技术

- **模型：** VLM + LoRA（`peft`、`transformers` 等常见工具链）
- **感知：** RGB-D 相机及厂商提供的 ROS 驱动集成
- **运行环境：** Linux 上的 ROS2、Python 节点；训练与推理阶段使用 GPU 加速

</div>
