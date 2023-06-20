---
layout: post
title: Ứng dụng công nghệ AI trong Hệ thống gợi ý (Recommender System)
categories : Paper-Explain
author: Nguyen Quoc Khanh
---

<br>

# 1. Hiện tượng Long tail trong thương mại

Trước khi thảo luận về ứng dụng chính của hệ thống gợi ý, ta sẽ nói về hiện tượng Long tail trong thương mại khiến các hệ thống gợi ý trở nên cần thiết. Ta sẽ đi xem xét các hệ thống phân phối thực và hệ thống phân phối trực tuyến. 

Hệ thống phân phối thực thường bao gồm hai khu vực: khu vực kệ trưng bày sản phẩm và khu vực kho hàng. Và các không gian trưng bày là hạn chế nên khách hàng chỉ có thể xem một phần nhỏ trong tất cả các mặt hàng tồn tại. Ví dụ như một hệ thống phân phối sách thực có thể trưng bày hàng ngàn cuốn sách trên kệ nhưng một hệ thống phân phối trực tuyến, ví dụ như Amnazon có thể trưng bày hàng triệu triệu cuốn sách. Ta có thể thấy rõ sự hạn chế của hệ thống phân phối thực, đặc trưng bởi sự khan hiếm tài nguyên vật lý. Ngoài ra, những sản phẩm được trưng ra mang tính phổ biến chứ chưa chắc đã phù hợp với một khách hàng cụ thể. Một cửa hàng có thể có món hàng một khách hàng tìm kiếm nhưng có thể không bán được vì khách hàng không nhìn thấy sản phẩm đó trên giá; việc này dẫn đến việc khách hàng không tiếp cận được sản phẩm ngay cả khi chúng đã được trưng ra.  Với các hệ thống phân phối trực tuyến, các đặc trưng về tài nguyên và không gian trưng bày  online gần như là vô tận, mọi sản phẩm đều có thể được trưng ra. Sự tiện lợi và chi phí chuyển đối rất thấp, từ đó  doanh thu và lợi nhuận của hệ thống được tăng lên.

<img title="a title" alt="Alt text" src="{{ site.baseurl }}/images/31102022/longtail.png">

Trục tung đại diện cho sự phổ biển (số lần một mục được chọn). Các sản phẩm được sắp xếp trên trục hoàng theo mức độ phổ biến của chúng. Hệ thống phân phối thực chỉ cung cấp các sản phẩm phố biến nhất ở bên trái đường thẳng trong khi các hệ thống trực tuyến cung cấp toàn bộ phạm vi các mặt hàng (đuổi thể hiện các mặt hàng phổ biến)[3]. Hiện tượng Long tail buộc các hệ thống trực tuyến phải đề xuất, gợi ý các sản phẩm cho người dùng, không thể hiển thị tất cả các mặt hàng có thể theo các hệ thống thực. 
# 2. Sự cần thiết của hệ thống gợi ý (Recommendation System)
Hoạt động online đang là một xu hướng phát triển mạnh mẽ trên thế giới nói chung và Việt Nam nói riêng. Việt Nam hiện đang là một quốc gia rất có tiềm năng về thương mại điện tử, đây chính là cơ hội cho những công ty biết đổi mới và biết chăm sóc khách hàng (Viễn thông, 2020). Ngày nay với sự phát triển của các hệ thống thương mại điện tử, việc chú trọng đến trải nghiệm người dùng cũng như tiếp cận những sản phẩm đến tay người dùng vô cùng quan trọng.

Đối với thương mại điện tử, người mua và người bán không cần gặp gỡ trực tiếp, mà họ giao dịch với nhau trên các hệ thống. Vì vậy, rất cần có một trợ lý bán hàng tự động. Việc tìm ra một “chuyên gia” tư vấn thông minh, thân thiện, am hiểu khách hàng trên các hệ thống vô cùng quan trọng và cũng chính là một thách thức. Vấn đề này có thể được giải quyết bằng việc tích hợp các kỹ thuật gợi ý (Recommender Systems - là một dạng của hệ hỗ trợ quyết định) trong các hệ thống thương mại điện tử. Hệ thống gọi ý  như 1 chuyên gia tư vấn, dự đoán thông minh sở thích của khách hàng và cung cấp những thông tin mà họ thực sự quan tâm. 

Các kỹ thuật hệ gợi ý đã và đang được nghiên cứu, ứng dụng một cách mạnh mẽ và mang lại lợi ích cho cả người cung cấp dịch vụ và người sử dụng dịch vụ. Hầu hết các trang thương mại lớn trên thế giới đều sử dụng các kỹ thuật gợi ý trong website của mình để nâng cao trải nghiệm cho khách hàng, nâng cao chất lượng dịch vụ và thu lại lợi nhuận tốt hơn:
<ul>
    <li>Amazon sử dụng để đề xuất sản phẩm cho khách hàng.</li>
    <li>YouTube sử dụng nó để đề xuất các video và quyết định video sẽ phát tiếp theo trên chế độ tự động phát.</li>
    <li>Facebook sử dụng nó để gợi ý kết bạn, đề xuất các trang để thích và mọi người theo dõi.</li>
</ul>
  
Tuy nhiên, hiện nay, phần lớn trang thương mại điện tử trong nước chưa tích hợp các chức năng này, hoặc nếu có cũng chỉ dừng ở mức gợi ý chung chung, chưa có tính cá nhân hóa.

# 3. Hệ thống gợi ý.
### 3.1. Tổng quan
Hệ thống gợi ý sử dụng các tri thức về sản phẩm, các tri thức của chuyên gia hay tri thức khai phá học được từ hành vi con người dùng để đưa ra các gợi ý về sản phẩm mà họ thích trong hàng ngàn hàng vạn sản phẩm có trong hệ thống.

Các website thương mại điện tử, ví dụ như sách, phim, nhạc, báo...sử dụng hệ thống gợi ý để cung cấp các thông tin giúp cho người sử dụng quyết định sẽ lựa chọn sản phẩm nào. Các sản phẩm được gợi ý dựa trên số lượng sản phẩm đó đã được bán, dựa trên các thông tin cá nhân của người sử dụng, dựa trên sự phân tích hành vi mua hàng trước đó của người sử dụng để đưa ra các dự đoán về hành vi mua hàng trong tương lai của chính khách hàng đó. Các dạng gợi ý bao gồm: gợi ý các sản phẩm tới người tiêu dùng, các thông tin sản phẩm mang tính cá nhân hóa, tổng kết các ý kiến cộng đồng, và cung cấp các chia sẻ, các phê bình, đánh giá mang tính cộng đồng liên quan tới yêu cầu, mục đích của người sử dụng đó.
### 3.2. Các phương pháp gợi ý
Về cơ bản recommender systems được chia làm 3 công nghệ chính :
<ul>
    <li>Content-based filtering (Lọc theo nội dung)</li>
    <li>Collaborative filtering (Lọc cộng tác)</li>
    <li>Hybrid filtering (Lọc kết hợp)</li>
</ul>

Hai thực thể chính trong Recommender System là users và items. Mỗi user sẽ có mức độ quan tâm (degree of preference) tới từng item khác nhau được gán cho mỗi cặp user-item, tạm gọi là rating. Tập hợp tất cả ratings, bao gồm cả những giá trị chưa biết cần được dự đoán, tạo nên một ma trận utility matrix.
### 3.2.1. Content-based filtering
Phương pháp lọc dựa trên nội dung dựa trên mô tả của mặt hàng và hồ sơ về sở thích của người dùng. Các phương pháp này phù hợp nhất với các trường hợp có dữ liệu đã biết về một mục (tên, vị trí, mô tả, v.v.), nhưng không có trên người dùng. Người đề xuất dựa trên nội dung coi đề xuất là một vấn đề phân loại dành riêng cho người dùng và tìm hiểu cách phân loại cho những người thích và không thích dựa trên các tính năng của một mặt hàng.

Trong các hệ thống content-based, dựa trên nội dung của mỗi item, ta cần xây dựng một bộ hồ sơ (profile) cho mỗi item. Profile được biểu diễn dưới dạng toán học là feature vector được trích xuất trực tiếp từ item.Việc xây dựng feature vector cho mỗi item thường bao gồm các kỹ thuật Xử lý ngôn ngữ tự nhiên (Natural Language Processing - NLP).

Việc xây dựng mô hình cho mỗi user có thể coi như bài toán Regreesion hoặc Classification với training data là cặp dữ liệu (item-profile, rating) của user.
### 3.2.2. Collaborative filtering
Lọc cộng tác dựa trên giả định rằng những người đã đồng ý trong quá khứ sẽ đồng ý trong tương lai và họ sẽ thích những loại mặt hàng tương tự như họ đã thích trong quá khứ.

Hệ thống theo lọc công tác phân tích và tổng hợp các điểm số đánh giá của các đối tượng, nhận ra sự tương đồng giữa những người sử dụng trên cơ sở các điểm số đánh giá của họ và tạo ra các gợi ý dựa trên sự so sánh này. Hồ sơ (profile) của người sử dụng điển hình trong hệ thống lọc cộng tác bao gồm một vector các đối tượng (item) và các điểm số đánh giá của chúng, với số chiều tăng lên liên tục khi người sử dụng tương tác với hệ thống theo thời gian.

Để suy ra được mức độ quan tâm (filtering) của một user lên một item ta cần chuẩn hóa dữ liệu (phương pháp phố biến là mean offset) để tính được Similarity matrix. Similarity function thường được dùng là Cosine similarity hoặc Pearson correlation.

Ngoài ra, còn một hướng tiếp cận khác cho Collaborative Filtering dựa trên Matrix Factorization. Bạn đọc có thể xem thêm Matrix Factorization Collaborative Filtering.
### 3.2.3. Hybrid filtering
Hybrid Filtering là sự kết hợp của hai giải thuật Content-based Filtering và Collabrative Filtering. Hybrid Fitering được sử dụng mềm dẻo khi hệ thống Collabrative Filtering không có đủ dữ liệu là các ratings của user, khi đó hệ thống sẽ sử dụng Content-based Filtering và ngược lại, khi Content-based Filtering không có các feature cần thiết trong việc đánh giá thì hệ thống sẽ sử dụng Collaborative Fitering để thay thế.

Hầu hết các hệ thống gợi ý hiện nay đều có xu hướng sử dụng phương pháp kết hợp, kết hợp lọc cộng tác , lọc dựa trên nội dung và các phương pháp tiếp cận khác. Một số nghiên cứu so sánh thực nghiệm hiệu suất của phương pháp lai với các phương pháp cộng tác và dựa trên nội dung thuần túy và chứng minh rằng các phương pháp lai có thể cung cấp các khuyến nghị chính xác hơn so với các phương pháp thuần túy.

Netflix là một ví dụ điển hình về việc sử dụng hệ thống giới thiệu kết hợp. Trang web đưa ra các đề xuất bằng cách so sánh thói quen xem và tìm kiếm của những người dùng tương tự (tức là lọc cộng tác) cũng như đưa ra những bộ phim có chung đặc điểm với những bộ phim được người dùng đánh giá cao (lọc dựa trên nội dung). [3]

# 4. Ưu & Nhược điểm
## 4.1. Ưu điểm
### 4.1.1. Content-based Filtering
<ul>
    <li>Việc xây dựng mô hình cho mỗi user không phụ thuộc vào các users khác mà phụ thuộc vào profile của mỗi item giúp tiết kiệm bộ nhớ và thời gian tính toán.</li>
    <li>Đồng thời, hệ thống có khả năng tận dụng các thông tin đặc trưng của mỗi item như được mô tả trong bản mô tả (description) của mỗi item</li>
</ul>

### 4.1.2. Collaborative Filtering

<ul>
    <li>Mô hình có thể giúp người dùng khám phá những sở thích mới. Hệ thống gợi ý có thể không biết người dùng quan tâm đến một mặt hàng nhất định, nhưng mô hình vẫn có thể đề xuất nó vì những người dùng tương tự cũng quan tâm đến mặt hàng đó (cold-start problem).Ngay cả khi không có thông tin về một mặt hàng, hệ thống vẫn có thể dự đoán xếp hạng mặt hàng mà không cần đợi người dùng mua.</li>
</ul>

## 4.2. Nhược điểm
### 4.2.1. Content-based Filtering

<ul>
    <li>Không thể giải quyết được vấn đề cold-start problem.  Các hệ thống Content-based không tận dụng được thông tin từ các users khác. Những thông tin này thường rất hữu ích vì hành vi mua hàng của các users thường được nhóm thành một vài nhóm đơn giản; nếu biết hành vi mua hàng của một vài users trong nhóm, hệ thống nên suy luận ra hành vi của những users còn lại.</li>
    <li>Không phải lúc nào chúng ta cũng có bản mô tả cho mỗi item. Việc user rating một item thường mang xu hướng cá nhân, dẫn tới thiếu dữ liệu. Các thuật toán NLP cũng phức tạp hơn ở việc phải xử lý các từ gần nghĩa, viết tắt, sai chính tả, hoặc được viết ở các ngôn ngữ khác nhau</li>
</ul>

### 4.2.2. Collaborative Filtering

<ul>
    <li>Hoạt động của CF dựa trên dữ liệu lịch sử về các tương tác trên trang web giữa người dùng và các mặt hàng. Nhưng người dùng mới thì không có đủ dữ liệu lịch sử (dữ liệu thưa thớt) để làm cho hệ thống hoạt động.</li>
    <li>Các thuật toán CF truyền thống thường gặp phải các vấn đề nghiêm trọng về khả năng mở rộng. Khi số lượng người dùng tăng lên và lượng dữ liệu mở rộng, các thuật toán cộng tác sẽ bắt đầu bị giảm hiệu suất do sự gia tăng tuyệt đối về khối lượng dữ liệu.</li>
</ul>

**Bản PDF Latex các bạn có thể xem và tải về** [tại đây](https://www.overleaf.com/read/mpfrxbrrqrmb). 

# 5. References

<ol>
  <li>Vu Huu Tiep, machinelearningcoban: Recommender System. </li>
  <li>François Alain Fournier, Recommender Systems: Technical Report and Literature Review.</li>
  <li>Standford CS246, Ch9: Recommendation systems and the The Long Tail in Wired.</li>
  <li>Wikipedia, Recommerder System.</li>
  <li>Stanford CS294-34, Recommender Systems and Collaborative Filtering.</li>
  <li>Alexander Tuzhilin, The long tail of recommender systems and how to leverage it. Proceedings of the 2008 ACM Conference on Recommender Systems</li>
</ol>