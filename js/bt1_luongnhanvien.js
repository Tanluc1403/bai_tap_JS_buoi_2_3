/**
 * /**
 * inputs:
 *  - số ngày làm
 *  - tiền làm 1 ngày
 * 
 * step (process)
 * funtion
 *  -B1: lấy dữ liệu từ form
 *  -B2: tính tienLuong
 *      tienLuong = soNgayLam * luongMotNgay
 *  -B4: thông báo kết quả
 * 
 * outputs:
 * - tienLuong
 */ 
 
function tinhTienLuong(){
    let soNgayLam = document.getElementById("inputNgay").value;
    let luongMotNgay = 100000;
    let tienLuong = 0;

    console.log(soNgayLam , luongMotNgay);

    tienLuong = (soNgayLam * luongMotNgay);

    console.log(tienLuong)

    document.getElementById("txtTienLuong").innerHTML = new Intl.NumberFormat('vn-VN').format(tienLuong)
}
document.getElementById("btnTinh").onclick = tinhTienLuong;