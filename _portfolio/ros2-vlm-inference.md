---
title: "ROS2 VLM Inference — Robotics Perception Internship"
excerpt: "Real-time robotic scene understanding with a fine-tuned vision–language model deployed as a ROS2 service node during an industry internship."
collection: portfolio
permalink: /portfolio/ros2-vlm-inference/
header:
  teaser: /images/500x300.png
---

<img src="/images/500x300.png" alt="Placeholder for ROS2 VLM inference demo" style="width:100%;max-width:720px;border-radius:6px;margin:1em 0;" />
*<span class="lang-en">Figure placeholder — to be replaced with a demo or system diagram when available.</span><span class="lang-zh">图片占位——待替换为演示图 / 系统框图。</span>*

<span class="lang-en">Internship at **Viwistar (慧智星晨)** — [viwistar.com](https://www.viwistar.com/). Technical stack, model choices, and datasets are described only at a high level below for confidentiality.</span><span class="lang-zh">实习单位：**Viwistar 慧智星晨** —— [viwistar.com](https://www.viwistar.com/)。以下仅作能力层面的概括，不涉及客户技术栈、模型与数据等保密细节。</span>

<div class="lang-en" markdown="1">

An internship project that integrates a **fine-tuned vision–language model (VLM)** with a **ROS2** perception pipeline for near–real-time scene understanding in a laboratory automation setting. RGB-D sensing feeds image streams into a service-style inference node whose outputs drive downstream manipulation logic.

## System Overview

**1. Data collection.**  
In-house scripts capture and label camera frames, bucket them by task-relevant categories, and export a structured training dataset (format and taxonomy are intentionally not specified here).

**2. VLM adaptation.**  
A general-purpose VLM is adapted with **LoRA** on that dataset so the model fits the domain without full fine-tuning of the backbone. Training uses a CUDA-enabled Linux workstation; hardware and framework versions are omitted.

**3. ROS2 deployment.**  
The adapted model runs as a ROS2 node that exposes a trigger-based interface: grab a frame, run inference, and publish compact results for the rest of the stack. Distro and OS minor versions are omitted.

## Key technologies

- **Model stack:** VLM + LoRA (`peft`, `transformers`-class tooling)
- **Sensing:** RGB-D camera integrated through the vendor ROS driver stack
- **Runtime:** ROS2 on Linux, Python-based node, NVIDIA GPU for offline training and on-line inference where required

</div>

<div class="lang-zh" markdown="1">

实习项目：将**经领域数据适配的视觉语言模型（VLM）**接入 **ROS2** 感知流水线，在实验室自动化场景下实现近实时的场景理解。RGB-D 相机提供图像流，推理节点以类似服务的接口为下游机械臂流程提供判别结果。

## 系统框架

**1. 数据采集**  
使用自研脚本完成图像采集与标注，按任务相关类别归档，并导出为结构化训练数据（具体目录命名、类别划分与数据规模不在此列出）。

**2. VLM 适配**  
在自建数据上对通用 VLM 采用 **LoRA** 进行参数高效微调，在不全量重训骨干网络的前提下适配领域任务。训练在配备 NVIDIA GPU 的 Linux 工作站上完成；具体硬件型号、CUDA / 驱动小版本号等略去。

**3. ROS2 部署**  
将适配后的模型封装为 ROS2 节点，提供触发式调用：抓取一帧、执行推理、向其余栈发布紧凑结果。具体 ROS2 发行版与 Ubuntu 小版本略去。

## 关键技术

- **模型：** VLM + LoRA（`peft`、`transformers` 等常见工具链）
- **感知：** RGB-D 相机及厂商提供的 ROS 驱动集成
- **运行环境：** Linux 上的 ROS2、Python 节点；训练与推理阶段使用 GPU 加速

</div>
