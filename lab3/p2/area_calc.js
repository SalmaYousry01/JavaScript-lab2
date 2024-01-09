shapeConfirm = true;
while (shapeConfirm) {
    var isValid = true;
    while (isValid) {
        var shape = parseInt(prompt("Choose Shape You Want To Calculate Area For From The Following:\n1-Circle\n2-Triangle\n3-Square\n4-Rectangle\n5-Parallelogram\n6-Trapezium\n7-Ellipse"));
        switch (shape) {
            case 1:
                r = parseFloat(prompt("Enter Radius Of The Circle"));
                alert("Area Of Circle= " + areaCircle(r));
                var isValid = false;
                break;

            case 2:
                b = parseFloat(prompt("Enter Base Of The Triangle"));
                h = parseFloat(prompt("Enter Height Of The Triangle"));
                alert("Area Of Triangle= " + areaTriangle(b, h));
                var isValid = false;
                break;

            case 3:
                a = parseFloat(prompt("Enter Length Of Side"));
                alert("Area Of Square= " + areaSquare(a));
                var isValid = false;
                break;

            case 4:
                l = parseFloat(prompt("Enter Length Of Rectangle"));
                w = parseFloat(prompt("Enter Width Of The Rectangle"));
                alert("Area Of Rectangle= " + areaRectangle(l, w));
                var isValid = false;
                break;

            case 5:
                base = parseFloat(prompt("Enter Base Of Parallelogram"));
                height = parseFloat(prompt("Enter Vertical Height Parallelogram"));
                alert("Area Of Parallelogram= " + areaParrallelogram(base, height));
                var isValid = false;
                break;

            case 6:
                l1 = parseFloat(prompt("Enter Length Of One Parrallel Side"));
                l2 = parseFloat(prompt("Enter Length Of The Other Parrallel Side"));
                he = parseFloat(prompt("Enter Height Of Trapezium"));
                alert("Area Of Trapezium= " + areaTrapezium(l1, l2, he));
                var isValid = false;
                break;

            case 7:
                minor = parseFloat(prompt("Enter The Minor Axis Of Ellipse"));
                major = parseFloat(prompt("Enter The Major Axis Of Ellipse"));
                alert("Area Of Ellipse= " + areaEllipse(minor, major));
                var isValid = false;
                break;

            default:
                prompt("Invalid Option, Please Enter A Valid One");
                var isValid = true;
        }
    }
    shapeConfirm = confirm("Do You Want To Calculate Area For Any Other Shape?");
}

function areaCircle(r) {
    area = 3.14 * r * r;
    return area;
}

function areaTriangle(b, h) {
    area = (1 / 2) * b * h;
    return area;
}

function areaSquare(a) {
    area = a * a;
    return area;
}

function areaRectangle(l, w) {
    area = l * w;
    return area;
}

function areaParrallelogram(b, h) {
    area = b * h;
    return area;
}

function areaTrapezium(a, b, h) {
    area = (1 / 2) * (a + b) * h;
    return area;
}

function areaEllipse(a, b) {
    area = 3.14 * a * b;
    return area;
}