/**
 * inputs:
 *  - chiều dài
 *  - chiều rộng
 * 
 * steps:
 *  B1:lấy dữ liệu từ form:
 *      +chieuDai:
 *      +chieuRong;
 *      +chuVi
 *      +dienTich
 *  B2:tính diện tích và chu vi:
 *      +chuVi = (chieuDai + chieuRong)*2
 *      +dienTich = chieuDai * chieuRong
 *  B3: thông báo kết quả
 * 
 * outputs:
 *  - chuVi
 *  - dienTich
 */
function tinhChuVi_DienTich(){
    let chieuDai = document.getElementById("inputChieuDai").value;
    let chieuRong = document.getElementById("inputChieuRong").value;
    let chuVi = 0;
    let dienTich = 0;

    chuVi = (Number(chieuDai)+ Number(chieuRong))*2
    dienTich = chieuDai *chieuRong

    console.log(chuVi , dienTich)

    document.getElementById("txtTinh").innerHTML= "Chu vi là: " + chuVi + " ; " + "Diện tích là: " + dienTich + "."
    
}
document.getElementById("btntinh").onclick= tinhChuVi_DienTich