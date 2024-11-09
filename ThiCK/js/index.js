$(document).ready(function () {
    $("#dv").val("");
    var maHV = $("#maHV");
    var tbMaHV = $("#tbMaHV");
    function checkMaHV() {
        if (maHV.val() == "") {
            tbMaHV.html("Vui lòng nhập mã học viên");
            return false;
        }
        var inputMaHV = /^[1-9]{9}$/;
        if (!inputMaHV.test(maHV.val())) {
            tbMaHV.html("Mã học viên gồm 9 ký tự số");
            return false;
        }
        tbMaHV.html("");
        return true;
    }
    maHV.blur(checkMaHV);

    var hoTen = $("#hoTen");
    var tbHoTen = $("#tbHoTen");
    function checkHoTen() {
        if (hoTen.val() == "") {
            tbHoTen.html("Vui lòng nhập họ tên");
            return false;
        }
        var inputHoTen = /^([A-Z]{1}[a-z]{0,6}(\s([A-Z]{1}[a-z]{0,6})){0,6})$/;
        if (!inputHoTen.test(hoTen.val())) {
            tbHoTen.html("Chữ cái đầu phải viết hoa");
            return false;
        }
        tbHoTen.html("");
        return true;
    }
    hoTen.blur(checkHoTen);

    var email = $("#email");
    var tbEmail = $("#tbEmail");
    function checkEmail() {
        if (email.val() == "") {
            tbEmail.html("Vui lòng nhập email");
            return false;
        }
        var inputEmail = /^[A-Za-z]{3,}[0-9_]{0,}@iuh\.edu\.vn$/;
        if (!inputEmail.test(email.val())) {
            tbEmail.html("Email phỉa có ít nhất 3 kỹ tự chữ và số và _ phía sau");
            return false;
        }
        tbEmail.html("");
        return true;
    }
    email.blur(checkEmail);

    var dv = $("#dv");
    function tinhTienDV() {
        var giaDV = {
            "Ván trượt": "20000",
            "Bơi": "15000",
            "Moto nước": "300000"
        }
        $("#giaDV").val(giaDV[dv.val()]);
        tinhTongThanhTien();
    }
    dv.change(tinhTienDV);

    function tinhTienDD() {
        var sum = 0;
        $(".dd:checkbox:checked").each(function () {
            var doDung = $(this).val();
            var giaDD = {
                "Đồ lặn": "15000",
                "Đồ bơi": "120000",
                "Kính bơi": "70000"
            }
            sum += parseInt(giaDD[doDung]);
        })
        $("#giaDD").val(sum);
        tinhTongThanhTien();
    }
    $(".dd:checkbox").change(tinhTienDD);

    function tinhTongThanhTien() {
        $("#tongThanhTien").val(parseInt($("#giaDD").val()) + parseInt($("#giaDV").val()));
    }

    function checkEmpty() {
        var maHV = $("#maHV").val();
        var hoTen = $("#hoTen").val();
        var email = $("#email").val();
        var dichVu = $("#dv").children("option:selected").val();
        var doDung = $(".dd:checkbox:checked").length > 0;
        return maHV != "" && hoTen != "" && email != "" && dichVu != undefined && doDung;
    }

    var i = 1;
    $("#dangKy").on("click", function () {
        if (checkEmpty()) {
            var maHV = $("#maHV").val();
            var hoTen = $("#hoTen").val();
            var email = $("#email").val();
            var giaDV = $("#giaDD").val();
            var giaDD = $("#giaDV").val();
            var tongTien = $("#tongThanhTien").val();

            var them = "<tr><td>" + (i++) +
                "</td><td>" + maHV +
                "</td><td>" + hoTen +
                "</td><td>" + email +
                "</td><td>" + giaDV +
                "</td><td>" + giaDD +
                "</td><td>" + tongTien +
                "</td></tr>";

            $(".table_css1 tbody").append(them);
            $("#maHV, #hoTen, #email, #giaDD, #giaDV, #dv, #tongThanhTien").val("");
            $(".dd:checkbox:checked").prop("checked", false);
            $("#modalId").modal("hide");
        }
        else {
            alert("Vui lòng nhập đầy đủ thông tin");
        }
    })
})