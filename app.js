var result = document.getElementById('result')

var val;

function calculation(e) {
    result.value += e;
    val = e;

    console.log(val);


}

function results() {
    console.log(result.value);
    result.value=eval(result.value)
}


function clear() {
    result.value = '';
}

function on() {
    result.value = "";
}

function del() {

    result.value=result.value.slice(0,-1)
}