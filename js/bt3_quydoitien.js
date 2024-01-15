/**
 * inputs:
 * - số tiền USD
 * 
 * steps:
 *  B1: lấy dữ liệu từ form
 *  B2: tính sang tiền VND
 *      + soTienVND
 *      + soTienUSD
 *      + tyGia
 *      + soTienVND = soTienUSD * tyGia
 *  B3: thông báo kết quả
 * 
 * outputs:
 * - soTienVND
 */ 
function quyDoiTienVND(){
    let soTienUSD = document.getElementById("inputUSD").value;
    let soTienVND = 0;
    let tyGia = 23500;

    soTienVND = soTienUSD * tyGia;

    console.log(new Intl.NumberFormat('vn-VN').format(soTienVND));

    document.getElementById("txtQuyDoi").innerHTML = new Intl.NumberFormat('vn-VN').format(soTienVND)

}
document.getElementById("btnQuyDoiTien").onclick = quyDoiTienVND;