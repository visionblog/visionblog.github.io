---
layout: post
title: Datasets for Computer Vision
categories : Computer-Vision
author: Nguyen Quoc Khanh
---

<br>

Tổng hợp dataset cho các bài toán AI. Đa phần các bộ dataset đã được xử lý sẵn và 'giải quyết', khi áp dụng được bài toán có thể đạt được độ chính xác cao, một phần còn lại thu thập từ các cuộc thi và thử thách, cần được tiền xử lý và xử lý thêm để có thể áp dụng được.
# **1. Image Classification**
# **1.1. Minist Dataset**
[Link dowload](http://yann.lecun.com/exdb/mnist/)

**MNIST** dataset (Modified National Institute of Standards and Technology database), là một bộ dữ liệu nổi tiếng về các chữ số viết tay thường được sử dụng để đào tạo các hệ thống xử lý ảnh cho học máy.

NIST là viết tắt của National Institute of Standards and Technology. M trong MNIST là viết tắt của modified, và điều này là do có một tập dữ liệu NIST ban đầu gồm các chữ số đã được modified để cung cấp cho chúng ta MNIST.

MNIST nổi tiếng vì tần suất mà bộ dữ liệu được sử dụng. Nó phổ biến vì hai lý do:

Người mới bắt đầu sử dụng nó vì nó dễ dàng
Các nhà nghiên cứu sử dụng nó để chuẩn (so sánh) các mô hình khác nhau.
Bộ dữ liệu bao gồm 70.000 hình ảnh của các chữ số viết tay với sự phân chia như sau:

* 60.000 hình ảnh đào tạo (training)
* 10.000 hình ảnh thử nghiệm (testing)
* 
Những hình ảnh ban đầu được tạo ra bởi các nhân viên Cục điều tra dân số Hoa Kỳ và học sinh trung học Hoa Kỳ.

MNIST đã được sử dụng rộng rãi và công nghệ nhận dạng hình ảnh đã được cải thiện rất nhiều nên tập dữ liệu được coi là quá dễ dàng. Đây là lý do tại sao tập dữ liệu Fashion-MNIST được tạo ra.

{% include image.html url="\images\datasets\mnist-dataset.png" description="Mnist dataset" %}



# 1.1. CIFAR-10
[Link dowload](https://www.cs.toronto.edu/~kriz/cifar.html)

Bộ dữ liệu CIFAR-10 bao gồm 60000 hình ảnh màu 32x32 trong 10 lớp, với 6000 hình ảnh cho mỗi lớp. Có 50000 hình ảnh đào tạo và 10000 hình ảnh thử nghiệm.

Bộ dữ liệu được chia thành năm đợt huấn luyện và một đợt kiểm tra, mỗi đợt có 10000 hình ảnh. Lô thử nghiệm chứa chính xác 1000 hình ảnh được chọn ngẫu nhiên từ mỗi lớp. Các đợt huấn luyện chứa các hình ảnh còn lại theo thứ tự ngẫu nhiên, nhưng một số đợt huấn luyện có thể chứa nhiều hình ảnh từ lớp này hơn lớp khác. Giữa chúng, các lô đào tạo chứa chính xác 5000 hình ảnh từ mỗi lớp.
# 1.2. SMILES
[Link dowload](https://www.kaggle.com/klouie/molgan-smiles-dataset)

Như tên gọi, bộ dữ liệu SMILES [51] bao gồm các hình ảnh khuôn mặt đang cười hoặc không cười. Tổng cộng, có 13.165 hình ảnh thang độ xám trong tập dữ liệu, với mỗi hình ảnh có một
kích thước 64×64.

Hình ảnh trong tập dữ liệu này được cắt xung quanh khuôn mặt cho phép bạn tạo ra các thuật toán máy học chỉ tập trung vào nhiệm vụ nhận dạng nụ cười.
# 1.3. Kaggle: Dogs vs. Cats
[Link dowload](https://www.kaggle.com/c/dogs-vs-cats/data)

Thử thách Chó vs. Mèo là một phần của cuộc thi Kaggle nhằm nghĩ ra một thuật toán học tập có thể
phân loại chính xác một hình ảnh có chứa một con chó hoặc một con mèo. Tổng cộng có 25.000 hình ảnh được cung cấp cho
đào tạo thuật toán của bạn với các độ phân giải hình ảnh khác nhau. 
Cách bạn quyết định tiền xử lý hình ảnh của mình có thể dẫn đến các mức hiệu suất khác nhau.

# 1.4. Flowers - 17
[Link dowload](https://www.robots.ox.ac.uk/~vgg/data/flowers/17/)

Bộ dữ liệu Flowers-17 là bộ dữ liệu gồm 17 danh mục với 80 hình ảnh cho mỗi loại được quản lý bởi Nilsback et al.. Mục tiêu của bộ dữ liệu này là dự đoán chính xác loài hoa cho một hình ảnh đầu vào nhất định.
Flowers-17 có thể được coi là một bộ dữ liệu đầy thách thức do những thay đổi đáng kể về tỷ lệ, góc nhìn, sự lộn xộn của nền, điều kiện ánh sáng khác nhau và sự thay đổi trong lớp. Hơn nữa,
chỉ với 80 hình ảnh mỗi lớp, các mô hình học sâu sẽ gặp khó khăn trong việc tìm hiểu cách biểu diễn cho mỗi lớp mà không bị quá khớp. Theo nguyên tắc chung, nên có
1.000-5.000 hình ảnh ví dụ mỗi lớp khi đào tạo mạng lưới thần kinh sâu.
# 1.5 CALTECH 101
[Link dowload](https://www.tensorflow.org/datasets/catalog/caltech101?hl=vi)

Được giới thiệu bởi Fei-Fei et al. vào năm 2004, bộ dữ liệu CALTECH-101 là bộ dữ liệu điểm chuẩn phổ biến
để phát hiện đối tượng. Thường được sử dụng để phát hiện đối tượng (nghĩa là dự đoán tọa độ (x;y) của
bounding box cho một đối tượng cụ thể trong ảnh), chúng ta có thể sử dụng CALTECH-101 để nghiên cứu sâu
thuật toán.
Bộ dữ liệu gồm 8.677 hình ảnh bao gồm 101 danh mục trải rộng trên nhiều đối tượng khác nhau,
bao gồm cả voi, xe đạp, bóng đá và thậm chí cả bộ não con người. Các
Bộ dữ liệu CALTECH-101 thể hiện sự mất cân bằng lớp nghiêm trọng (có nghĩa là có nhiều ví dụ hơn
hình ảnh cho một số danh mục hơn những danh mục khác), làm cho việc học từ sự mất cân bằng trong lớp trở nên thú vị
luật xa gần.
Các phương pháp trước đây để phân loại hình ảnh cho CALTECH-101 thu được độ chính xác trong phạm vi
là 35-65% .
# 1.6 Tiny ImageNet 200
[Link dowload](https://paperswithcode.com/dataset/tiny-imagenet)

Có tổng cộng 200 lớp hình ảnh trong bộ dữ liệu này với 500 hình ảnh để đào tạo,
50 hình ảnh để xác thực và 50 hình ảnh để kiểm tra mỗi lớp. Mỗi hình ảnh đã được xử lý trước
và được cắt thành 64 × 64 × 3 pixel giúp sinh viên dễ dàng tập trung vào các kỹ thuật học sâu hơn
hơn là các chức năng tiền xử lý thị giác máy tính.
# 1.6 Adience
[Link dowload](https://talhassner.github.io/home/projects/Adience/Adience-data.html)

Bộ dữ liệu Adience, được xây dựng bởi Eidinger et al. 2014 , được sử dụng để hỗ trợ nghiên cứu về tuổi
và công nhận giới tính. Tổng cộng có 26.580 hình ảnh được đưa vào bộ dữ liệu với các độ tuổi khác nhau
từ 0-60. Mục tiêu của bộ dữ liệu này là dự đoán chính xác cả độ tuổi và giới tính của đối tượng trong
bức hình
# 1.7. ImageNet
[Link dowload](http://www.image-net.org/)

ImageNet thực sự là một dự án nhằm gắn nhãn và phân loại hình ảnh thành gần 22.000
danh mục dựa trên một tập hợp các từ và cụm từ được xác định.
Tại thời điểm viết bài này, có hơn 14 triệu hình ảnh trong dự án ImageNet. Đến
tổ chức một lượng lớn dữ liệu như vậy, ImageNet tuân theo hệ thống phân cấp WordNet. Mỗi
từ/cụm từ có ý nghĩa bên trong WordNet được gọi là “synonym set” hoặc gọi tắt là "synset”. Trong
ImageNet, hình ảnh được tổ chức theo các tập hợp này, với mục tiêu là có
Hơn 1.000 hình ảnh trên mỗi synset.

Trong bối cảnh thị giác máy tính và học sâu, bất cứ khi nào bạn nghe mọi người nói về ImageNet, rất có thể họ đang đề cập đến Thử thách nhận dạng hình ảnh quy mô lớn ImageNet (ImageNet Large Scale Visual Recognition Challenge).

Mục tiêu của quá trình phân loại hình ảnh trong thử thách này là đào tạo một mô hình có thể phân loại
một hình ảnh thành 1.000 danh mục riêng biệt sử dụng khoảng 1,2 triệu hình ảnh để đào tạo,
50.000 để xác nhận và 100.000 để thử nghiệm. 1.000 danh mục hình ảnh này đại diện cho đối tượng
lớp mà chúng ta gặp trong cuộc sống hàng ngày, chẳng hạn như các loài chó, mèo, các hộ gia đình khác nhau
đối tượng, loại xe, và nhiều hơn nữa. Bạn có thể tìm thấy danh sách đầy đủ các danh mục đối tượng trong ILSVRC
thử thách [tại đây](http://pyimg.co/x1ler).
Khi nói đến phân loại hình ảnh, thử thách ImageNet là tiêu chuẩn thực tế cho các thuật toán phân loại thị giác máy tính – và bảng xếp hạng cho thử thách này đã bị chi phối bởi
Mạng thần kinh chuyển đổi (CNN) và kỹ thuật học sâu từ năm 2012.
# 1.8. Kaggle: Facial Expression Recognition Challenge
[Link dowload](https://www.kaggle.com/c/challenges-in-representation-learning-facial-expression-recognition-challenge/data)

Một thử thách khác do Kaggle đặt ra, mục tiêu của Thử thách nhận dạng biểu cảm khuôn mặt
(FER) là xác định chính xác cảm xúc mà một người đang trải qua chỉ đơn giản từ một bức ảnh về họ.
đối mặt. Tổng cộng có 35.888 hình ảnh được cung cấp trong thử thách FER với mục tiêu gắn nhãn cho một
nét mặt thành bảy loại khác nhau:
1. Angry
2. Disgust (sometimes grouped in with “Fear” due to class imbalance)
3. Fear
4. Happy
5. Sad
6. Surprise
7. Neutral 

# 1.9. Indoor CVPR
[Link dowload](http://web.mit.edu/torralba/www/indoor.html)

Bộ dữ liệu Indoor Scene Recognition, như tên gọi, bao gồm một số cảnh trong nhà.
cảnh, bao gồm cửa hàng, nhà ở, không gian giải trí, khu vực làm việc và không gian công cộng. Mục tiêu của điều này
tập dữ liệu là đào tạo chính xác một mô hình có thể nhận ra từng khu vực. 
# 1.10. Stanford Cars
[Link dowload](https://ai.stanford.edu/~jkrause/cars/car_dataset.html)

Một bộ dữ liệu khác do Stanford tổng hợp, Bộ dữ liệu Cars [61] bao gồm 16.185 hình ảnh của 196
các hạng xe ô tô. Bạn có thể chia nhỏ tập dữ liệu này theo bất kỳ cách nào bạn muốn dựa trên kiểu dáng xe,
mô hình, hoặc thậm chí năm nhà sản xuất. Mặc dù có tương đối ít hình ảnh trên mỗi lớp (với
mất cân bằng lớp nghiêm trọng), tôi sẽ trình bày cách sử dụng Mạng thần kinh chuyển đổi để có được **độ chính xác phân loại 95%** khi dán nhãn kiểu dáng và kiểu dáng của xe.

