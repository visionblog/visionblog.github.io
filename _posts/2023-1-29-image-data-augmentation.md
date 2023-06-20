---
layout: post
title: Post 9 - Tăng cường dữ liệu ảnh - Image Data Augmentation
categories : Computer-Vision
author: Nguyen Quoc Khanh
---

<br>

Hiện nay trong deep learning thì vấn đề dữ liệu có vai trò rất quan trọng. Chính vì vậy có những lĩnh vực có ít dữ liệu để cho việc train model thì rất khó để tạo ra được kết quả tốt trong việc dự đoán. Do đó người ta cần đến một kỹ thuật gọi là tăng cường dữ liệu (data augmentation) để phục vụ cho việc nếu bạn có ít dữ liệu, thì bạn vẫn có thể tạo ra được nhiều dữ liệu hơn dựa trên những dữ liệu bạn đã có. Ví dụ như hình dưới, đó là các hình được tạo ra thêm từ một ảnh gốc ban đầu.

{% include image.html url="\images\post9\intro.webp" description="" %}
# 1. Lý thuyết về tăng cường dữ liệu
Tăng cường dữ liệu là một kỹ thuật tăng tập huấn luyện một cách giả tạo bằng cách tạo các bản sao đã sửa đổi của tập dữ liệu bằng cách sử dụng dữ liệu hiện có. Nó bao gồm thực hiện những thay đổi nhỏ đối với tập dữ liệu hoặc sử dụng học sâu để tạo điểm dữ liệu mới.  
# 1.1. Augmented vs. Synthetic data

**Dữ liệu tăng cường** được điều chỉnh từ dữ liệu gốc với một số thay đổi nhỏ. Trong trường hợp tăng cường hình ảnh, chúng ta thực hiện các phép biến đổi không gian màu và hình học (lật, thay đổi kích thước, cắt xén, độ sáng, độ tương phản) để tăng kích thước và sự đa dạng của tập huấn luyện. 

**Dữ liệu tổng hợp** được tạo một cách giả tạo mà không sử dụng tập dữ liệu gốc. Nó thường sử dụng DNN (Deep Neural Networks) và GAN ​​(Generative Adversarial Networks) để tạo dữ liệu tổng hợp. 

**Lưu ý** : các kỹ thuật tăng cường không giới hạn ở hình ảnh. Bạn cũng có thể tăng âm thanh, video, văn bản và các loại dữ liệu khác. 

Bài viết này mình chỉ tổng hợp các phương thức data aumentation cơ bản cho thị giác máy tính, ở các trường dữ liệu khác thì các bạn có thể tìm hiểu thêm.

{% include image.html url="\images\post9\intro.webp" description="Data Augmentation for Computer Vision | by TagX | Medium" %}

* Original (Ảnh gốc): dĩ nhiên rồi, bao giờ mình cũng có ảnh gốc
* Flip (Lật): lật theo chiều dọc, ngang miễn sao ý nghĩa của ảnh (label) được giữ nguyên hoặc suy ra được. Ví dụ nhận dạng quả bóng tròn, thì mình lật kiểu gì cũng ra quả bóng. Còn với nhận dạng chữ viết tay, lật số 8 vẫn là 8, nhưng 6 sẽ thành 9 (theo chiều ngang) và không ra số gì theo chiều dọc. Còn nhận dạng ảnh y tế thì việc bị lật trên xuống dưới là không bao giờ sảy ra ở ảnh thực tế --> không nên lật làm gì
* Random crop (Cắt ngẫu nhiên): cắt ngẫu nhiên một phần của bức ảnh. Lưu ý là khi cắt phải giữ thành phần chính của bức ảnh mà ta quan tâm. Như ở nhận diện vật thể, nếu ảnh được cắt không có vật thể, vậy giá trị nhãn là không chính xác.
* Color shift (Chuyển đổi màu): Chuyển đổi màu của bức ảnh bằng cách thêm giá trị vào 3 kênh màu RGB. Việc này liên quan tới ảnh chụp đôi khi bị nhiễu --> màu bị ảnh hưởng.
* Noise addition (Thêm nhiễu): Thêm nhiễu vào bức ảnh. Nhiễu thì có nhiều loại như nhiễu ngẫu nhiên, nhiễu có mẫu, nhiễu cộng, nhiễu nhân, nhiễu do nén ảnh, nhiễu mờ do chụp không lấy nét, nhiễu mờ do chuyển động… có thể kể hết cả ngày.
* Information loss (Mất thông tin): Một phần của bức hình bị mất. Có thể minh họa trường hợp bị che khuất.
* Constrast change (Đổi độ tương phản): thay độ tương phản của bức hình, độ bão hòa

{% include image.html url="\images\post9\intro2.webp" description="" %}

* Geometry based: Đủ các thể loại xoay, lật, scale, padding, bóp hình, biến dạng hình,
* Color based: giống như trên, chi tiết hơn chia làm (i) tăng độ sắc nét, (ii) tăng độ sáng, (iii) tăng độ tương phản hay (iv) đổi sang ảnh negative - âm bản.
* Noise/occlusion: Chi tiết hơn các loại nhiễu, như mình kể trên còn nhiều lắm. kể hết rụng răng.
* Whether: thêm tác dụng cảu thời tiết như mưa, tuyết, sương mờ, …
# 1.2. Tại sao chúng ta cần tăng cường dữ liệu?
1. Để ngăn chặn các mô hình overfitting.
2. Tập huấn luyện ban đầu quá nhỏ.
3. Để cải thiện độ chính xác của mô hình.
4. Để giảm chi phí vận hành của việc dán nhãn và làm sạch tập dữ liệu thô. 
# 2. Vấn đề của data augmentation
# 2.1 Tính phụ thuộc dữ liệu và ứng dụng
Vấn đề là “con vịt nào cũng béo vặt lông con nào”, quá nhiều cách thức augmentation, chọn cách nào để cho chất lượng tốt nhất đây? Câu trả lời là - tùy thuộc vào dữ liệu (số lượng mẫu, tính balance/imbalance của mẫu, dữ liệu test, v.v. và ứng dụng tương ứng. Nghĩa là mỗi bộ dữ liệu sẽ có cách thức riêng để augmentation sao cho ra kết quả tốt nhất.

Điển hình là dữ liệu MNIST được cho là tốt với phương pháp elastic distortion, scale, translation, và rotation. Trong khi dữ liệu ảnh tự nhiên như CIFAR10 và ImageNet thì lại tốt với thuật toán random-cropping, iamge miroring, color shiffting/whitenting . Không chỉ có vậy mà một số augmentation method không tốt cho một số tập dữ liệu. Đơn cử là hroizontal flipping tốt cho CIFAR10 nhưng không tốt cho MNIST ( bởi vì flip là thành ra số khác rồi còn gì).
# 2.2 Sự đa dạng của augmentation
Với danh sách các thương thức augmentation kể trên thì cũng còn nhiều cách thức mình chưa liệt kê hết. Bản thân mỗi augmenation lại có các Yếu tố điều khiển riêng. Mình có thể phân loại thành:

* Các phương thức augmentation: flip, rotation, random crop, v.v.
* Các yếu tố điều khiển augmentation: mỗi augmenation sẽ có các yếu tố điều khiển riêng. Ví dụ rotation thì bao nhiêu độ, scaling thì scaling lên xuống bao nhiêu lần, crop random thì random trong khoảng bao nhiêu …
* Tần suất sử dụng từng phương thức augmentation?
* Cách augmentation tốt nhất là một bộ các phương thức augmentation
* Cách augmenation cho từng giai đoạn training/epoch có thể khác nhau. Epoch đầu ở leanring rate lớn có thể khác với các epoch cuối ở learning rate nhỏ
* Cách augmenation cho từng class, tần suất dùng augmenation có thể khác nhau
* Cách augmenation cũng có thể bị ảnh hưởng bở cấu trúc mạng. Tức là augmentation cho mức gain khác nhau tới từng network Và không phải các yếu tố kể trên có tác động giống nhau tới mức độ cải thiện chất lượng của augmentation.


# 2.3 Hạn chế của tăng cường dữ liệu
1. Các sai lệch trong tập dữ liệu gốc vẫn tồn tại trong dữ liệu tăng cường.
2. Đảm bảo chất lượng cho việc tăng cường dữ liệu là tốn kém. 
3. Nghiên cứu và phát triển là cần thiết để xây dựng một hệ thống với các ứng dụng tiên tiến. Ví dụ: tạo hình ảnh có độ phân giải cao bằng GAN có thể là một thách thức.
4. Việc tìm kiếm một phương pháp tăng cường dữ liệu hiệu quả có thể là một thách thức.


# 3. Data Agumentation trong keras

Trong keras có hỗ trợ class **ImageDataGenerator** cho phép tạo thêm dữ liệu. Hôm nay mình xin trình bày về nó.

Class ImageDataGenerator có 3 phương thức **flow(), flow_from_directory() và flow_from_dataframe()** để đọc các ảnh từ một mảng lớn numpy và thư mục chứa ảnh ( from a big numpy array and folder containing images)

Chúng ta sẽ thảo luận về **flow_from_directory()** trong bài này.

Giả sử bạn đã tải được một tập dataset và bạn có 2 thư mục train và test, trong mỗi thư mục thì bạn có các thư mục con , mỗi thư mục con chứa các ảnh thuộc về thư mục con đó.(Xem hình dưới)

Tạo một tập validation set, thường bạn phải tạo thủ công một validation data bởi sampling images từ train folder (bạn có thể lấy ngẫu nhiên, hoặc lấy theo thứ tự mà bạn muoons) và di chuyển chúng vào một thư một tên là "valid". Nếu bạn đã có tập validation, bạn có thể sử dụng chúng thay vì tạo thủ công.


{% include image.html url="\images\post9\intro4.webp" description="" %}

Như bạn có thể thấy ở hình ảnh trên, Test folder chỉ chứa một một folder test_folder và bên trong có tất cả các hình ảnh để test.

Tên của folder cho các lớp là rất quan trọng, đặt tên (hoặc đổi teen) chúng với tên nhãn tương ứng để có thể dễ dàng cho bạn sau này. Sau khi thiết lập các hình ảnh vào cấu trúc như trên, bạn có thể sẵn sàng để code!

## Với class ImageDataGenerator
Có các thuộc tính sau :

* zoom_range: thực hiện zoom ngẫu nhiên trong một phạm vi nào đó
* width_shift_range: Dịch theo chiều ngang ngẫu nhiên trong một phạm vi nào đó
* height_shift_range: Dịch ảnh theo chiều dọc trong một phạm vi nào đó
* brightness_range: Tăng cường độ sáng của ảnh trong một phạm vi nào đó.
* vertical_flip: Lật ảnh ngẫu nhiên theo chiều dọc
* rotation_range: Xoay ảnh góc tối đa là 45 độ
* shear_range: Làm méo ảnh

## Với flow_from_directory
Dưới đây là các thuộc tính được sử dụng phổ biến với flow_from_directory():

```
train_generator = train_datagen.flow_from_directory(
    directory=r"./train/",
    target_size=(224, 224),
    color_mode="rgb",
    batch_size=32,
    class_mode="categorical",
    shuffle=True,
    seed=42
)
```
* directory: phải đặt đường dẫn có các classes của folder.
* target_size: là size của các ảnh input đầu vào, mỗi ảnh sẽ được resized theo kích thước này.
* color_mode: Nếu hình ảnh là màu đen và màu trắng hoặci là grayscale thì set "grayscale" hoặc nếu nó gồm 3 channels thì set "rgb"
* batch_size : Số lượng ảnh được yielded từ generator cho mỗi lô batch.
* class_mode : set "binary" nếu bạn có 2 classes để dự đoán, nếu không thì bạn set "categorical". trong trường hợp nếu bạn đang lập trình một hệ thống tự động Autoencoder, thì cả input và output đều là ảnh, trong trường hợp này thì bạn set là input
* shuffle: set True nếu bạn muốn đổi thứ tự hình ảnh, ngược lại set False.
* seed : Random seed để áp dụng tăng hình ảnh ngẫu nhiên và xáo trộn thứ tự của hình ảnh

```
valid_generator = valid_datagen.flow_from_directory(
    directory=r"./valid/",
    target_size=(224, 224),
    color_mode="rgb",
    batch_size=32,
    class_mode="categorical",
    shuffle=True,
    seed=42
)
```
* Giống train generator ngoại trừ những thay đổi hiển nhiên như đường dẫn thư mục.

```
test_generator = test_datagen.flow_from_directory(
    directory=r"./test/",
    target_size=(224, 224),
    color_mode="rgb",
    batch_size=1,
    class_mode=None,
    shuffle=False,
    seed=42
)
```
* directory: đường dẫn chứa một folder, trong đó có các ảnh để test. Ví dụ, trong trường hợp cấu trúc thư mục ở trên, thì các ảnh sẽ được tìm thấy ở /test/test_images/ Các tham số khác cũng giống như ở trên mình đã trình bày. 

# 4. Kết luận
Các chức năng tăng cường hình ảnh do Tensorflow và Keras cung cấp rất tiện lợi. Bạn chỉ cần thêm một lớp tăng cường, tf.image hoặc ImageDataGenerator để thực hiện tăng cường. Ngoài các khung học sâu, bạn có thể sử dụng các công cụ độc lập như Augmentor, Albumentations, OpenCV và Imgaug để thực hiện tăng cường dữ liệu.

Trong hướng dẫn này, chúng ta đã tìm hiểu về các ưu điểm, hạn chế, ứng dụng và kỹ thuật tăng cường dữ liệu. Hơn nữa, chúng tôi đã học cách áp dụng tính năng tăng cường hình ảnh trên bộ dữ liệu mèo so với chó bằng Keras và Tensorflow. Nếu bạn muốn tìm hiểu thêm về xử lý hình ảnh, hãy học kỹ năng Xử lý hình ảnh với Python . Nó sẽ hướng dẫn bạn những kiến ​​thức cơ bản về chuyển đổi và thao tác hình ảnh, phân tích hình ảnh y tế và xử lý hình ảnh nâng cao bằng Keras. Cảm ơn các bạn đã đọc bài trình bày. Hi vọng các bạn sẽ có thêm kiến thức về data augumentation