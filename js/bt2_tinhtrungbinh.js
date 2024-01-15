/**
 * inputs:
 *  - giá trị 5 số thực
 * 
 * steps:
 *  - B1: lấy dữ liệu từ form
 *  - B2: tính trung bình của 5 số thực
 *      + trungBinh = (soThuc1 + soThuc2 + soThuc3 +soThuc4 +soThuc5)/5
 *  - B3: thông báo kết quả
 * 
 * out puts:
 *  - trungBinh
 */
function tinhTrungBinh(){
    let soThuc1 = document.getElementById("inputSo1").value;
    let soThuc2 = document.getElementById("inputSo2").value;
    let soThuc3 = document.getElementById("inputSo3").value;
    let soThuc4 = document.getElementById("inputSo4").value;
    let soThuc5 = document.getElementById("inputSo5").value;

    let trungBinh = 0;

    trungBinh = (Number(soThuc1)+Number(soThuc2)+Number(soThuc3)+Number(soThuc4)+Number(soThuc5))/5

    console.log(trungBinh)
    
    document.getElementById("txtTrungBinh").innerHTML=trungBinh;

}
document.getElementById("btnTinhTrungBinh").onclick = tinhTrungBinh;