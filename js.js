$(document).ready(function() {
    var sum = null;
    var mem = null;
    var oper = null;
    var enterPress = false;
    var timing = 250;

    function animateButton(x) {
        x.animate({opacity:'toggle'}, timing);
        x.animate({opacity:'toggle'}, timing);
    }

    function presentOutput(x) {
        if (x === null) {
            $('#output').attr("value", 0);
        }
        else {
            $('#output').attr("value", x);        
        }
        $('#sumOutput').attr("value", sum);
        $('#memOutput').attr("value", mem);
        $('#operOutput').attr("value", oper);
        $('#enterOutput').attr("value", enterPress);
    };
    presentOutput(sum);

    function updateOper(val) {
        if (enterPress === true) {
            mem = null;
            enterPress = false;
            presentOutput(sum)
        }
        else {
            updateSum();
            mem = null;
            presentOutput(sum);
        }

        oper = val;
    };
    function updateMem(val) {
        if (mem === null) {
            mem = val;
            
        }
        else {
            mem = mem + val;
            
        }
        presentOutput(mem);
    };    
    function clearSum() {
        sum = null;
        mem = null;
        oper = null;
        presentOutput(sum);
    };
    function updateSum() {
        if (mem === null) {
            sum = sum;
        }
        else if (sum === null) {
            sum = parseInt(mem);
        }
        else {
            if (oper === 'addi') {
                sum = sum + parseInt(mem);
            }
            else if (oper === 'diff') {
                sum = sum - parseInt(mem);
            }
            else if (oper === 'prod') {
                sum = sum * parseInt(mem);
            }
            else if (oper === 'divi') {
                sum = sum / parseInt(mem);
            }
        }
        presentOutput(sum);
    }

    
    $('#clear').click(function() {
        clearSum();
        enterPress = false;
        animateButton($("#clear"));
    });    
    $('#enter').click(function() {
        updateSum();
        enterPress = true;
        animateButton($("#enter"));
    });
    $('#addi').click(function() {
        updateOper('addi');
        animateButton($("#addi"));
    });
    $('#diff').click(function() {
        updateOper('diff');
        animateButton($("#diff"));
    });
    $('#prod').click(function() {
        updateOper('prod');
        animateButton($("#prod"));
    });
    $('#divi').click(function() {
        updateOper('divi');
        animateButton($("#divi"));
    });
    $('#1').click(function() {
        updateMem('1');
        animateButton($("#1"));
    });
    $('#2').click(function() {
        updateMem('2');
        animateButton($("#2"));
    });
    $('#3').click(function() {
        updateMem('3');
        animateButton($("#3"));
    });
    $('#4').click(function() {
        updateMem('4');
        animateButton($("#4"));
    });
    $('#5').click(function() {
        updateMem('5');
        animateButton($("#5"));
    });
    $('#6').click(function() {
        updateMem('6');
        animateButton($("#6"));
    });
    $('#7').click(function() {
        updateMem('7');
        animateButton($("#7"));
    });
    $('#8').click(function() {
        updateMem('8');
        animateButton($("#8"));
    });
    $('#9').click(function() {
        updateMem('9');
        animateButton($("#9"));
    });
    $('#0').click(function() {
        updateMem('0');
        animateButton($("#0"));
    });
    $('body').keyup(function(event) {
        
        $('#keypressOutput').attr("value", event.which);
        if (event.which === 8 || event.which === 46) {
            clearSum();

            animateButton($("#clear"));
        };
    });
    $('body').keypress(function(event) {
        
        $('#keypressOutput').attr("value", event.which);
        if (event.which === 49) {
            updateMem('1');
            animateButton($("#1"));
        }
        else if (event.which === 50) {
            updateMem('2');
            animateButton($("#2"));
        }
        else if (event.which === 51) {
            updateMem('3');
            animateButton($("#3"));
        }
        else if (event.which === 52) {
            updateMem('4');
            animateButton($("#4"));
        }
        else if (event.which === 53) {
            updateMem('5');
            animateButton($("#5"));
        }
        else if (event.which === 54) {
            updateMem('6');
            animateButton($("#6"));
        }
        else if (event.which === 55) {
            updateMem('7');
            animateButton($("#7"));
        }
        else if (event.which === 56) {
            updateMem('8');
            animateButton($("#8"));
        }
        else if (event.which === 57) {
            updateMem('9');
            animateButton($("#9"));
        }
        else if (event.which === 48) {
            updateMem('0');
            animateButton($("#0"));
        }
        else if (event.which === 43) {
            updateOper('addi');
            animateButton($("#addi"));
        }
        else if (event.which === 45) {
            updateOper('diff');
            animateButton($("#diff"));
        }
        else if (event.which === 42) {
            updateOper('prod');
            animateButton($("#prod"));
        }
        else if (event.which === 47) {
            updateOper('divi');
            animateButton($("#divi"));
        }
        else if (event.which === 13) {
            updateSum();
            enterPress = true;
            animateButton($("#enter"));
        }
    })
});