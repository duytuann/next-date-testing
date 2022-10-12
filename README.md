### MSSV: 20021463
### Họ và tên: Đỗ Duy Tuấn

### Đặc tả

Source kiểm thử chương trình tính toán ngày tiếp theo với input đầu vào là ngày, tháng và năm.
Chương trình sẽ tính toán ngày tiếp theo trong phạm vi từ năm 1900 đến năm 2025.

Hàm tính toán sẽ tính toán xem đầu vào có chứa năm thoả mãn từ 1900-2025 hay không, tiếp thục kiểm tra tháng có hợp lệ từ 1-12 không và cuối cùng kiểm tra ngày có hợp lệ với tháng.

Các điểm cần lưu ý ở bài toán là ngoại lệ của tháng 2, khi năm nhuận nó có 29 ngày và bình thường thì là 28. Ngoài ra ta sẽ kiểm tra năm có chia hết cho 4 hay không (nghĩa là nó có thể là năm nhuận), rồi chúng ta phải xem liệu nó chia hết cho 100 hay không, nếu có thì nó có chia hết cho 400 không? Nếu đúng thì nó sẽ là năm nhuận.

Cuối cùng chúng ta cũng phải kiểm tra tính hợp lệ của đầu vào, các giá trị âm dương, quá giới hạn,...

### SOURCE CODE

Source code có sử dụng thư viện Jest phục vụ việc tạo, chạy và cấu trúc test được tạo ra bởi Facebook.

Để chạy source:
    $ npm install
    $ npm test

Toàn bộ test case năm trong file JSON datatest.json.