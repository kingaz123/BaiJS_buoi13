/**
 Khối 1: input
 - chiều dài
 - chiều rộng
 
 Khối 2: Các bước xử lý
 + Tạo UI
 + Xác định thời điểm chạy tính năng => chạy khi click vào nút "Tính"
 + Tạo hàm
 + Gán hàm vào sự kiện click
 + Tạo Code chi tiết trong hàm
       - Lấy chiều dài và chiều rộng hình chữ nhật từ các ô input
       - Lập công thức tính toán:
         dienTich = chieuDai * chieuRong
         chuVi = (Number(chieuDai) + Number(chieuRong))*2
       - Hiển thị kết quả lên UI
 
 Khối 3: output
 - Diện tích hình chữ nhật
 - Chu vi hình chữ nhật
 */
function tinhHcn() {
  var chieuDai = document.getElementById("chieuDai").value;
  var chieuRong = document.getElementById("chieuRong").value;
  var dienTich = chieuDai * chieuRong;
  var chuVi = (Number(chieuDai) + Number(chieuRong)) * 2;
  document.getElementById("ketQua").innerHTML =
    "Diện tích của hình chữ nhật là " +
    dienTich.toLocaleString() +
    " (m<span style='vertical-align:super; font-size:0.6em' >2</span>)</br> Chu vi của hình chữ nhật là " +
    chuVi.toLocaleString() +
    " (m)";
}
