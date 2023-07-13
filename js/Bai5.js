/**
 Khối 1: input
 - số có 2 chữ số
 
 Khối 2: Các bước xử lý
 + Tạo UI
 + Xác định thời điểm chạy tính năng => chạy khi click vào nút "Tính tổng ký số"
 + Tạo hàm
 + Gán hàm vào sự kiện click
 + Tạo Code chi tiết trong hàm
       - Lấy số hàng chục bằng:
         var soChuc = Math.floor(so2Ky / 10)
       - Lấy số hàng đơn vị:
         var soDonVi = so2Ky % 10
       - Tính tổng 2 ký số:
         var tongKySo = soChuc + soDonVi
       - Hiển thị kết quả lên UI
 
 Khối 3: output
 - Tổng 2 ký số của số có 2 chữ số đó
 */
function tongChuSo() {
  var so2Ky = document.getElementById("so2ChuSo").value;
  var soChuc = 0;
  var soChuc = Math.floor(so2Ky / 10);
  var soDonVi = 0;
  var soDonVi = so2Ky % 10;
  var tongKySo = soChuc + soDonVi;
  document.getElementById("tongChuSo").innerHTML =
    "Tổng 2 ký số của số đó là " + tongKySo;
}
document.getElementById("tinhKy").addEventListener("click", tongChuSo);
