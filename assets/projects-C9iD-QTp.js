const e=[{id:1,slug:"distributed-system-simulator",title:"Distributed System Simulator",description:"A tool for simulating distributed algorithms in a controlled environment.",link:"https://github.com/twisha/distributed-sim",tags:["Python","Networking","Research"],content:`# Distributed System Simulator

This simulator allows experimentation with consensus protocols and failure scenarios in a controlled environment. Use the simulator to reproduce results from the distributed systems literature and to test novel protocol ideas.

## Features
- Simulate node failures and network partitions
- Measure latency, throughput and agreement time
- Plug-in custom algorithms
`},{id:2,slug:"reproducible-research-framework",title:"Reproducible Research Framework",description:"Framework for creating reproducible computational experiments.",link:"https://github.com/twisha/repro-framework",tags:["Python","Docker","CI/CD"],content:`# Reproducible Research Framework

A toolkit and opinionated workflow for packaging experiments, data, and environment to make computational research reproducible across machines and time. Includes templates, Docker recipes, and CI examples.
`},{id:3,slug:"violet-dusk-theme",title:"Violet Dusk Theme",description:"A dark, poetic theme for code editors.",link:"https://github.com/twisha/violet-dusk-theme",tags:["VSCode","Theme","Design"],content:`# Violet Dusk Theme

A hand-crafted color theme inspired by late-night reading and soft violet gradients. Includes editor, terminal, and syntax rules for clarity and low-eye-strain during long writing sessions.
`},{id:4,slug:"surxit-health-risk-intelligence-platform",title:"suRxit — Health Risk Intelligence Platform",description:"Core ML and data pipeline for clinical entity extraction and GNN-based risk prediction at scale.",link:"#",tags:["ML","NLP","GNN","MedLM","Production"],content:`# suRxit — Health Risk Intelligence Platform

Developed and deployed the core ML and data pipeline, standardizing clinical entities from raw documents and feeding the information into a Graph Neural Network (GNN) for risk prediction at scale.

Contributed to the full product lifecycle, from high-fidelity data extraction (OCR/NER) to engineering the risk modeling and recommendation service powered by large language models (MedLM).

## Highlights
- Standardized clinical entity extraction from heterogeneous medical documents (OCR + NER).
- Built a scalable pipeline that materializes structured clinical graphs for downstream modeling.
- Trained and deployed a GNN-based risk prediction model for population-level risk scoring.
- Engineered a MedLM-backed recommendation service for actionable clinical insights.
`},{id:5,slug:"brain-tumor-detection-and-segmentation",title:"Brain Tumor Detection and Segmentation",description:"Configurable 3D medical image segmentation framework for multi-class glioma segmentation.",link:"#",tags:["MONAI","PyTorch","Medical Imaging","Segmentation"],content:`# Brain Tumor Detection and Segmentation

Built a fully configurable 3D medical image segmentation framework for multi-class glioma segmentation using MONAI and PyTorch.

Integrated U-Net/UNETR/Swin-UNETR backbones with an adaptive hybrid loss (Dice + CE + Tversky), sliding-window inference, and morphological post-processing.

Implemented GPU-tier auto-scaling, training resume support, and quantitative calibration (temperature scaling + MC dropout) for reliable clinical performance.
`}];export{e as default};
