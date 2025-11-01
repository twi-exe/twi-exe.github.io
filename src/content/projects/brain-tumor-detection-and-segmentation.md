Built a fully configurable 3D medical image segmentation framework for multi-class glioma segmentation using MONAI and PyTorch.

Integrated U-Net/UNETR/Swin-UNETR backbones with an adaptive hybrid loss (Dice + CE + Tversky), sliding-window inference, and morphological post-processing.

Implemented GPU-tier auto-scaling, training resume support, and quantitative calibration (temperature scaling + MC dropout) for reliable clinical performance.
