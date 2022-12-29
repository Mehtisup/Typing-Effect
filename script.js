<script>
var i = 0;
var text = "Mahdi Bozorgi";
var speed = 40;

function typeFunction() {
    if (i < text.length) {
        document.getElementById("name").innerHTML += text.charAt(i);
        i++;
        setTimeout(typeFunction, speed);
    }
}

typeFunction();
</script>
