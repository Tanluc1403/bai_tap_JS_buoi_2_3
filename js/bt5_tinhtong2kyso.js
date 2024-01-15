/**
 * inputs:
 * - số có 2 chữ số
 * 
 * steps:
 *  B1: lấy thông tin từ form:
 *      + soHangChuc
 *      + soHangDonVi
 *      + soNhapLieu
 *      + soTong
 *  B1: tìm ra số hàng chục và hàng đơn vị
 *      + soHangChuc = soNhapLieu 
 */
function tinhTong(){
    let soHangChuc = 0;
    let soHangDonVi = 0;
    let soTong = 0;
    let soNhapLieu = document.getElementById("inputSo").value;

    soHangChuc = Math.floor(soNhapLieu / 10)
    soHangDonVi = soNhapLieu % 10
    soTong = Number(soHangChuc) + Number(soHangDonVi)

    console.log(soHangChuc, soHangDonVi)

    document.getElementById("txtTinhTong").innerHTML= soTong;
}
document.getElementById("btnTinhTong").onclick = tinhTong