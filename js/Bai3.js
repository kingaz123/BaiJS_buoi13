/**
 Khối 1: input
 - số tiền USD
 
 Khối 2: Các bước xử lý
 + Tạo UI
 + Xác định thời điểm chạy tính năng => chạy khi click vào nút "Quy đổi"
 + Tạo hàm
 + Gán hàm vào sự kiện click
 + Tạo Code chi tiết trong hàm
       - Lấy số tiền USD từ ô input
       - Lập công thức quy đổi sang VND:
         tienViet= tienUSD * 23500
       - Hiển thị kết quả lên UI
 
 Khối 3: output
 - số tiền VND
 */
function quyDoi() {
  var tienUSD = document.getElementById("tienUSD").value;
  var tienViet = tienUSD * 23500;
  document.getElementById("tienViet").innerHTML =
    tienViet.toLocaleString() + " VND";
}
