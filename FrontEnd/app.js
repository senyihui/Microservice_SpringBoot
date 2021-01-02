


// Data process
const button = document.getElementById('submit');
const text = document.getElementById('text');
var output_json = [];

button.addEventListener('click', function (event) {
    let jsonStr = text.value;
    var input_json = JSON.parse(jsonStr);
    var input = input_json.map(elem => {
        return {
            name: elem.real,
            low: elem.imag
        }
    });
    // console.log(input);
    highchartInputConfig(input);

    // Ajax request
    $.ajax({
        // 请求方式
        type: "post",
        // contentType 
        contentType: "application/json",
        // dataType
        dataType: "json",
        async : false,
        // url
        url: 'http://127.0.0.1:2001/fft',

        // 把JS的对象或数组序列化一个json 字符串
        data: JSON.stringify(input_json),
        // result 为请求的返回结果对象
        success: function (result) {
            output_json = result;
            console.log(output_json);
        }
    });
    console.log(output_json);
    var output = output_json.map(elem => {
        return {
            name: elem.re,
            low: elem.im
        }
    });
    
    console.log(output);
    highchartOutputConfig(output);

});


// Highcharts
function highchartInputConfig(input) {
    Highcharts.chart('input-container', {
        chart: {
            type: 'lollipop'
        },
        accessibility: {
            point: {
                descriptionFormatter: function (point) {
                    var ix = point.index + 1,
                        x = point.name,
                        y = point.y;
                    return ix + '. ' + x + ', ' + y + '.';
                }
            }
        },
        legend: {
            enabled: false
        },
        title: {
            text: 'FFT Input'
        },
        tooltip: {
            shared: true
        },
        xAxis: {
            type: 'category'
        },
        yAxis: {
            title: {
                text: 'Y'
            }
        },
        series: [{
            name: 'Input',
            data: input
        }]
    });
}

function highchartOutputConfig(output) {
    Highcharts.chart('output-container', {
        chart: {
            type: 'lollipop'
        },
        accessibility: {
            point: {
                descriptionFormatter: function (point) {
                    var ix = point.index + 1,
                        x = point.name,
                        y = point.y;
                    return ix + '. ' + x + ', ' + y + '.';
                }
            }
        },
        legend: {
            enabled: false
        },
        title: {
            text: 'FFT Output'
        },
        tooltip: {
            shared: true
        },
        xAxis: {
            type: 'category'
        },
        yAxis: {
            title: {
                text: 'Y'
            }
        },
        series: [{
            name: 'Output',
            data: output
        }]
    });
}
