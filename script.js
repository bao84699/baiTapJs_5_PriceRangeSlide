let minrange = document.getElementById("minrange");
let maxrange = document.getElementById("maxrange");

let minprice = document.getElementById("minprice");
let maxprice = document.getElementById("maxprice");

let dodai = document.getElementById("dodai");

let minlabel = document.getElementById("minlabel");
let maxlabel = document.getElementById("maxlabel");

let gap = 100;

minrange.addEventListener("input", ()=> {
    // Kiểm tra xem hai thằng thumb có trùng hoặc khoảng cách quá gần nhau không
    if (maxrange.value - minrange.value < gap) {
        minrange.value = maxrange.value - gap;
    }
    // Cập nhật thông tin lên hai ô
    minprice.textContent = minrange.value;
    maxprice.textContent = maxrange.value;

    // Tính khoảng cách cho thumb đầu
    let dau = (minrange.value / 6000) * 100;
    // Tính độ dài giữa hai thumb
    let width = ((maxrange.value - minrange.value)/6000) * 100;
    // Cập nhật cho thanh độ dài (màu đỏ); cộng cho % là vì muốn left = x% của thanh input --> chính xác hơn px
    dodai.style.left = dau + "%";
    // Cập nhật độ dài
    dodai.style.width = width + "%";


    // Cách tính vị trí của hai label cũng tương tự hai thumb
    minlabel.textContent = "$" + minrange.value;
    maxlabel.textContent = "$" + maxrange.value;

    minlabel.style.left = dau + "%";
    maxlabel.style.left = (dau + width) + "%";
})

maxrange.addEventListener("input", ()=> {
    if (maxrange.value - minrange.value < gap) {
        // maxrange.value = Number(minrange.value) + gap; --> Lí do ép kiểu vì trong JS phép cộng sẽ ưu tiên cộng chuỗi hơn là tự hiểu việc cộng số nên phải ép kiểu
    }
    maxprice.textContent = maxrange.value;
    minprice.textContent = minrange.value;

    let dau = (minrange.value / 6000) * 100;
    let width = ((maxrange.value - minrange.value)/6000) * 100;
    dodai.style.left = dau + "%";
    dodai.style.width = width + "%";

    minlabel.textContent = "$" + minrange.value;
    maxlabel.textContent = "$" + maxrange.value;

    minlabel.style.left = dau + "%";
    maxlabel.style.left = (dau + width) + "%";
})


// Khi chạy trang thì ta sẽ có giá trị mặc định của 2 thumb nhưng chưa có thực hiện sự kiện InputDeviceInfo, vì thế thanh màu đỏ sẽ không hiển thị, thằng dispatchEvent sẽ gọi một sự kiện input ngay lập tức khi load trang
minrange.dispatchEvent(new Event("input"));
maxrange.dispatchEvent(new Event("input"));