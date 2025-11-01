const e=[{id:1,slug:"surxit-health-risk-intelligence-platform",title:"suRxit — Health Risk Intelligence Platform",description:"Core ML and data pipeline for clinical entity extraction and GNN-based risk prediction at scale.",link:"https://github.com/ParmarDarshan29/suRxit",tags:["ML","NLP","GNN","MedLM","Production"],content:`# suRxit — Health Risk Intelligence Platform

Developed and deployed the core ML and data pipeline, standardizing clinical entities from raw documents and feeding the information into a Graph Neural Network (GNN) for risk prediction at scale.

Contributed to the full product lifecycle, from high-fidelity data extraction (OCR/NER) to engineering the risk modeling and recommendation service powered by large language models (MedLM).

## Highlights
- Standardized clinical entity extraction from heterogeneous medical documents (OCR + NER).
- Built a scalable pipeline that materializes structured clinical graphs for downstream modeling.
- Trained and deployed a GNN-based risk prediction model for population-level risk scoring.
- Engineered a MedLM-backed recommendation service for actionable clinical insights.
`},{id:2,slug:"brain-tumor-detection-and-segmentation",title:"Brain Tumor Detection and Segmentation",description:"Configurable 3D medical image segmentation framework for multi-class glioma segmentation.",link:"#",tags:["MONAI","PyTorch","Medical Imaging","Segmentation"],content:`# Brain Tumor Detection and Segmentation

Built a fully configurable 3D medical image segmentation framework for multi-class glioma segmentation using MONAI and PyTorch.

Integrated U-Net/UNETR/Swin-UNETR backbones with an adaptive hybrid loss (Dice + CE + Tversky), sliding-window inference, and morphological post-processing.

Implemented GPU-tier auto-scaling, training resume support, and quantitative calibration (temperature scaling + MC dropout) for reliable clinical performance.
`}];export{e as default};
