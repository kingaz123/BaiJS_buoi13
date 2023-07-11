/**
 Khối 1: input
 - 5 số thực
 
 Khối 2: Các bước xử lý
 + Xác định thời điểm chạy tính năng => chạy khi click vào nút "Tính trung bình"
 + Tạo hàm
 + Gán hàm vào sự kiện click
 + Tạo Code chi tiết trong hàm
       - Lấy giá trị của 5 số từ các ô input
       - Lập công thức tính giá trị trung bình. Lưu ý đây là trường hợp tính toán có dùng dấu "+", nên nhớ chuyển giá trị chuổi (giá trị nhận được mặc định từ các ô input) sang giá trị số để dùng được dấu "+" cho việc tính toán mà không bị nối chuổi. Công thức tính kết quả trung bình:
         Tbinh= (Number(so1) + Number(so2) + Number(so3) + Number(so4) + Number(so5))/5
       - Hiển thị kết quả lên UI
 
 Khối 3: output
 - giá trị trung bình của 5 số thực
 */

function tinhTB() {
  var so1 = document.getElementById("so1").value;
  var so2 = document.getElementById("so2").value;
  var so3 = document.getElementById("so3").value;
  var so4 = document.getElementById("so4").value;
  var so5 = document.getElementById("so5").value;

  var tBinh = 0;
  tBinh =
    (Number(so1) + Number(so2) + Number(so3) + Number(so4) + Number(so5)) / 5;

  document.getElementById("giaTriTb").innerHTML =
    "Giá trị trung bình của 5 số thực trên là " + tBinh.toLocaleString();
}

document.getElementById("btnBai2").onclick = tinhTB;
