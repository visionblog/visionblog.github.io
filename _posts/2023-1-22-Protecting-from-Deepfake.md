---
layout: post
title: Bảo vệ người nổi tiếng khỏi DeepFake với Identity Consistency Transformer
categories : Paper-Explain
author: Nguyen Quoc Khanh
---

<br>

> **Summary và Explain paper: Protecting Celebrities from DeepFake with Identity Consistency Transformer**
>
> <a href="https://arxiv.org/abs/2203.01318v3" target="_blank">Link arXiv</a>
>
> <a href="https://paperswithcode.com/paper/protecting-celebrities-with-identity" target="_blank">Link Paper with code</a>
>
> <a href="https://openaccess.thecvf.com/content/CVPR2022/html/Dong_Protecting_Celebrities_From_DeepFake_With_Identity_Consistency_Transformer_CVPR_2022_paper.html" target="_blank">Link cVPR 2022</a>

{% include image.html url="/images/paper/ict.png" description="Illustrating the (a) training phase and (b) testing phase of our proposed Identity Consistency Transformer." %}

# 1. Purpose/Ouputs
*Deepfake techniques have been largely advanced to be able to  create incredibly realistic fake images of which the face is replaced with someone else in another image. The malicious usage and spread of deepfake have raised serious societal concerns and posed an increasing threat to our trust in online media. Therefore, face forgery detection is in urgent need and has gained a considerable amount of attention recently.*

Kỹ thuật deepfake đã được phát triển rộng rãi để có thể tạo những bức ảnh giả vô cùng chân thật với khuôn mặt được thay thế với ai đó trong bức ảnh khác. Việc sử dụng và lan truyền deepfake một cách độc hại đã làm dấy lên mối lo ngại nghiêm trọng trong xã hội và gây ra mối đe dọa ngày càng tăng đối với niềm tin của chúng ta với các phương tiện truyền thông trực tuyến. Do đó, phát hiện giải mạo khuôn mặt là một nhu cầu cấp thiết và đã thu hút được sự quan tập đáng kể trong thời gian gần đây.  

Notably, the overwhelming majority among all cases of face forgeries involve politicians, celebrities and corporate leaders, as their photos and videos are easier to find on the web and hence easily manipulated to generate impressively photo-realistic deepfake. Yet previous detection algorithms make predictions about the forgery based only on the suspect images, and neglect to exploit those freely available data. In this paper, we argue that the images / videos available online can not only be used in generating face forgeries but also be utilized to detect them, and try to protect people whose face is accessible online and thus vulnerable for face manipulation, i.e., celebrities in a broad sense.

Đáng chú ý, phần lớn áp đảo trong số tất cả các trường hợp giả mạo khuôn mặt liên quan đến các chính trị gia, người nổi tiếng và lãnh đạo công ty, vì ảnh và video của họ dễ tìm thấy hơn trên web và do đó dễ dàng bị thao túng để tạo ra deepfake ảnh chân thực ấn tượng. Tuy nhiên, các thuật toán phát hiện trước đây chỉ đưa ra dự đoán về sự giả mạo dựa trên các hình ảnh đáng ngờ và bỏ qua việc khai thác những dữ liệu có sẵn miễn phí đó. Trong bài báo này, chúng tôi lập luận rằng những hình ảnh/video có sẵn trực tuyến không chỉ được sử dụng để tạo khuôn mặt giả mạo mà còn được sử dụng để phát hiện chúng và cố gắng bảo vệ những người có khuôn mặt có thể truy cập trực tuyến và do đó dễ bị thao túng khuôn mặt, tức là những người nổi tiếng theo nghĩa rộng.

*Propose a method for detecting deepfake videos of celebrities by using a transformer-based model: **Identity Consistency Transformer** to ensure consistency between the faces in the video and the face of the celebrity in question. The outputs of the paper include the proposed model and the results of experiments conducted to test its effectiveness in detecting deepfakes.*

Đề xuất phương pháp phát hiện video deepfake về người nổi tiếng bằng cách sử dụng mô hình dựa trên máy biến áp: **Identity Consistency Transformer** để đảm bảo tính nhất quán giữa khuôn mặt trong video và khuôn mặt của người nổi tiếng được đề cập. Kết quả đầu ra của bài báo bao gồm mô hình được đề xuất và kết quả của các thử nghiệm được tiến hành để kiểm tra tính hiệu quả của nó trong việc phát hiện deepfakes.
# 2. Contributions
*1. A novel deepfake detection method that uses a transformer-based model to ensure consistency between the faces in the video and the face of the celebrity in question.*

*2. The use of a large-scale face recognition dataset to train and evaluate the proposed model.*

*3. An extensive evaluation of the proposed method, showing that it outperforms existing deepfake detection methods on a dataset of deepfake videos of celebrities.*

*4. A demonstration that the proposed method can be used to detect deepfake videos in real-world scenarios, by using it to analyze a dataset of deepfake videos of celebrities that were publicly available on social media platforms.*

*5. The paper propose a new Identity consistency transformer (ICT) model that is trained on a large-scale face recognition dataset, and is capable of detecting deepfake videos with high accuracy.*

1. Một phương pháp phát hiện deepfake mới sử dụng mô hình dựa trên máy biến áp (transformer) để đảm bảo tính nhất quán giữa khuôn mặt trong video và khuôn mặt của người nổi tiếng được đề cập.

2. Việc sử dụng bộ dữ liệu nhận dạng khuôn mặt quy mô lớn để đào tạo và đánh giá mô hình được đề xuất.

3. Một đánh giá sâu rộng về phương pháp được đề xuất, cho thấy rằng nó vượt trội so với các phương pháp phát hiện deepfake hiện có trên tập dữ liệu các video deepfake của những người nổi tiếng.

3. Một minh chứng rằng phương pháp được đề xuất có thể được sử dụng để phát hiện các video deepfake trong các tình huống trong thế giới thực, bằng cách sử dụng nó để phân tích tập dữ liệu các video deepfake của những người nổi tiếng được công khai trên các nền tảng truyền thông xã hội.

4. Bài báo đề xuất một mô hình biến đổi tính nhất quán nhận dạng (ICT) mới được đào tạo trên bộ dữ liệu nhận dạng khuôn mặt quy mô lớn và có khả năng phát hiện các video deepfake với độ chính xác cao.
<br>

# 3. Inputs

*1. A dataset of real and deepfake videos of celebrities. This dataset is used to train and evaluate the proposed deepfake detection model.*

*2. A large-scale face recognition dataset, which is used to train the Identity Consistency Transformer (ICT) model that is proposed in the paper.*

*3. Additional deepfake datasets for testing and evaluating the performance of the proposed model.*

*4. The paper also uses pre-trained models such as facial landmark detector and face recognition model as inputs.*

*5. The paper also leverages an off-the-shelf face recognition model to extract the face features.*

*6. The paper also use some pre-processing steps like facial alignment, cropping and resizing as inputs.*

1. Một bộ dữ liệu gồm các video thực và deepfake của những người nổi tiếng. Bộ dữ liệu này được sử dụng để đào tạo và đánh giá mô hình phát hiện deepfake được đề xuất.

2. Một bộ dữ liệu nhận dạng khuôn mặt quy mô lớn, được sử dụng để đào tạo mô hình Biến đổi tính nhất quán nhận dạng (ICT) được đề xuất trong bài báo.

3. Các bộ dữ liệu deepfake bổ sung để thử nghiệm và đánh giá hiệu suất của mô hình được đề xuất.

4. Bài báo cũng sử dụng các mô hình được đào tạo trước như bộ phát hiện mốc khuôn mặt và mô hình nhận dạng khuôn mặt làm đầu vào.

5. Bài báo cũng tận dụng một mô hình nhận dạng khuôn mặt có sẵn để trích xuất các đặc điểm khuôn mặt.

6. Bài báo cũng sử dụng một số bước tiền xử lý như căn chỉnh khuôn mặt, cắt xén và thay đổi kích thước làm đầu vào.
<br>

# 4. Methodology
1. Data collection: The authors collected a dataset of real and deepfake videos of celebrities. This dataset includes videos from various deepfake methods such as face2face, Deepfakes, FaceSwap, etc. The authors also collected a large-scale face recognition dataset for training the ICT model.

2. Pre-processing: The authors perform facial alignment, cropping, and resizing on the collected dataset. They used an off-the-shelf facial landmark detector to detect facial landmarks, and then aligned the faces using these landmarks. They also cropped and resized the images to a fixed size.

3. Face feature extraction: The authors use an off-the-shelf face recognition model to extract the face features from the pre-processed images. They used a pre-trained model called FaceNet to extract the face features.

4. Model training: The authors propose a transformer-based model called the Identity Consistency Transformer (ICT) that is trained on a large-scale face recognition dataset. The ICT model is used to ensure consistency between the faces in the video and the face of the celebrity in question. They trained the ICT model on the large-scale face recognition dataset to learn a face embedding that can be used to measure the similarity between different faces.

5. Evaluation: The authors conduct an extensive evaluation of the proposed method, showing that it outperforms existing deepfake detection methods on a dataset of deepfake videos of celebrities. They also compared the results with other state-of-the-art deepfake detection methods such as XceptionNet, C3D, and Two-Stream CNN.

6. Real-world testing: The authors also demonstrate that the proposed method can be used to detect deepfake videos in real-world scenarios, by using it to analyze a dataset of deepfake videos of celebrities that were publicly available on social media platforms. They also used a dataset of real videos of celebrities that were publicly available on social media platforms.

7. The authors also perform ablation studies to show the effect of different components of the proposed model. They also analyze the effect of the different types of deepfake methods and different celebrities on the proposed method.

8. The authors also conduct user study to show the effectiveness of the proposed method with human evaluators. They asked human evaluators to classify the videos as real or fake, and compared the results with the proposed method.

9. The authors also analyze the computational cost of the proposed method, and indicate that it is efficient and can be integrated with other deepfake detection methods for more robust protection.
<br>

# 5. Results
{% include image.html url="/images/paper/ict_res.png" description="Deepfake detection AUC (%) on carefully crafted videos
collected from Internet." %}

1. The proposed Identity Consistency Transformer (ICT) model outperforms existing deepfake detection methods on a dataset of deepfake videos of celebrities. The ICT model achieved an accuracy of **94.36% (Best is Face X-ray with 82.54%)** in detecting deepfake videos.

2. The proposed method also performed well in real-world scenarios, achieving an accuracy of nearly 95% on average when applied to a dataset of deepfake videos of celebrities that were publicly available on social media platforms.

3. The authors also show that the ICT model generalizes well across different types of deepfake methods and different celebrities.

4. The ablation study shows that the proposed ICT model is effective in detecting deepfake videos.

5. The user study shows that the proposed method is effective in detecting deepfake videos with human evaluators.

6. The authors also indicate that the proposed model is efficient in terms of computational cost and can be integrated with other deepfake detection methods for more robust protection.
<br>

# 6. Limitations
1. Identity Consistency Transformer only can be easily enhanced with additional identity information when such information happens to be available, as is the case with celebrities. The performance of the model will be reduced when the data is not large enough to train.
2. The approach of paper is specifically targeted for detecting fake faces that exist identity inconsistency, namely face swap results. That is to say, method of paper may
fail in detecting face reenactment results where the identity
is intended to keep the same.
<br>

# 7. Future Research
# 8. New ideas
Propose a new face forgery detection technique called Identity Consistency Transformer (ICT) based on high-level semantics. The key idea is to detect identity consistency in the suspect image, i.e., whether the inner face and the outer face belongs to the same person. 
# 9. Notes
