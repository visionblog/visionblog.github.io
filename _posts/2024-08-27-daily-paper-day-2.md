---
layout: post
title: Paper Summary - Vision Language Model for Interpretable and Fine-grained Detection of Safety Compliance in Diverse Workplaces
categories: Daily-Paper
author: Nguyen Quoc Khanh
---

<br>

# Problem Description

**Workplace accidents** due to personal protective equipment (PPE) non-compliance raise serious safety
concerns and lead to legal liabilities, financial penalties, and reputational damage. While object
detection models have shown the capability to address this issue by identifying safety items, most
existing models, such as YOLO, Faster R-CNN, and SSD, are limited in verifying the fine-grained
attributes of PPE across diverse workplace scenarios. Vision language models (VLMs) are gaining
traction for detection tasks by leveraging the synergy between visual and textual information, offering
a promising solution to traditional object detection limitations in PPE recognition. Nonetheless,
VLMs face challenges in consistently verifying PPE attributes due to the complexity and variability
of workplace environments, requiring them to interpret context-specific language and visual cues
simultaneously. We introduce Clip2Safety, an interpretable detection framework for diverse workplace
safety compliance, which comprises four main modules: scene recognition, the visual prompt, safety
items detection, and fine-grained verification. The scene recognition identifies the current scenario to
determine the necessary safety gear. The visual prompt formulates the specific visual prompts needed
for the detection process. The safety items detection identifies whether the required safety gear is
being worn according to the specified scenario. Lastly, the fine-grained verification assesses whether
the worn safety equipment meets the fine-grained attribute requirements. We conduct real-world
case studies across six different scenarios. The results show that Clip2Safety not only demonstrates
an accuracy improvement over state-of-the-art question-answering based VLMs but also achieves
inference times two hundred times faster

# Summary of the Paper

In today's paper, I would like to introduce you to the research titled **"Vision Language Model for Interpretable and Fine-grained Detection of Safety Compliance in Diverse Workplaces,"** published on August 15, 2024.

You can access my summary of the paper, which is available in both English and Vietnamese, [here](https://www.overleaf.com/read/twdnczcnvgnf#c4dbda) on Overleaf.

# Thank You and Invitation for Feedback


Thank you for taking the time to read today's summary! Your feedback is invaluable to me, and I encourage you to share your thoughts and suggestions. If you have any ideas for improvement or topics you'd like to see covered in future summaries, please don't hesitate to reach out.

Feel free to message me directly on [Telegram](https://t.me/khanh_nee) if you'd like to discuss the paper further or share any feedback.

Welcome to my daily paper series, and I hope you find it insightful and engaging!
