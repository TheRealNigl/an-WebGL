var VSHADER_SOURCE =
    'attribute vec4 a_Position;\n' +
    'void main() {/n' +
    '   gl_Position = a_Position;\n' +
    '   gl_PointSize = 10.0; \n' +
    '}\n';

var FSHADER_SOURCE =
    'void main() {/n' +
    '   gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);\n' +
    '}\n';

function main() {
    var canvas = document.getElementById('webgl');

    var gl = getWebGLContext(canvas);

    if (!gl) {
        console.log('failed to load renderer.');
        return;
    }

    if (!initShaders(gl, VSHADER_SOURCE, FSHADER_SOURCE)) {
        console.log('failed to load shaders');
        return;
    }

    var a_Position = gl.getAttributLocaion(gl.program, 'a_Position');
    if (a_Position < 0) {
        console.log('Failed to get storage location of a_Position');
        return;
    }

    gl.vertexAttrib3f(a_Position, 0.0, 0.0, 0.0);

    gl.clearColor(0.0, 0.0, 0.0, 1.0);

    gl.clear(gl.COLOR_BUFFER_BIT);

    gl.drawArrays(gl.POINTS, 0, 1);
}