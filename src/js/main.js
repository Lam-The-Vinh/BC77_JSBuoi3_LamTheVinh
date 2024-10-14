// bài tập Xét thưởng nhân viên đạt đủ doanh số
document.querySelector("#tinhThuong").onclick = function () {
  let sanPham = document.querySelector("#sanPham").value;
  let thuong = document.querySelector("#thuong");

  if (sanPham >= 100) {
    thuong.innerHTML = "Thưởng 10%";
  } else {
    thuong.innerHTML = "không có thưởng";
  }
};

// bài tập Tính chiết khấu
document.querySelector("#chietKhau").onclick = function () {
  let soTien = document.querySelector("#soTien").value;
  let giam = document.querySelector("#giam");

  if (soTien > 500) {
    let soTienGiam = (1 - 20 / 100) * soTien;
    document.querySelector("#giam span").innerHTML = soTienGiam;
  } else {
    document.querySelector("#giam span").innerHTML = soTien;
  }
};

// bài tập kiểm tra mật khẩu mạnh hay yếu
const batTatMatKhau = document.querySelector(".fa-eye");
const matKhau = document.querySelector("#matKhau");

batTatMatKhau.onclick = function () {
  if (matKhau.type === "password") {
    matKhau.type = "text";
  } else {
    matKhau.type = "password";
  }
};

document.querySelector("#kiemTra").onclick = function () {
  let ketQua = document.querySelector("#ketQua");
  if (matKhau.value.length >= 8) {
    ketQua.innerHTML = "mật khẩu hợp lệ";
  } else {
    ketQua.innerHTML = "mật khẩu không đủ dài vui lòng nhập lại";
  }
};
