/**
 Khối 1: input
 - số ngày làm
 
 Khối 2: Các bước xử lý
 + Tạo UI
 + Xác định thời điểm chạy tính năng => chạy khi click vào nút "Tính lương"
 + Tạo hàm
 + Gán hàm vào sự kiện click
 + Tạo Code chi tiết trong hàm
       - Lấy giá trị từ ô input
       - Lập công thức tính toán
         tienLuong = soNgay * 100000
       - Hiển thị kết quả lên UI
 
 Khối 3: output
 - tiền lương
 */
function calcLuong() {
  var soNgay = document.getElementById("soNgay").value;
  var tienLuong = soNgay * 100000;
  document.getElementById("tienLuong").innerHTML =
    "Tiền lương là " + tienLuong.toLocaleString() + " VND";
}

document.getElementById("btnBai1").onclick = calcLuong;
