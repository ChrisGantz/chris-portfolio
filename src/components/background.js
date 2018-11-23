import React from 'react';
import '../css/background.css';

export class Background extends React.Component {
  componentDidMount() {
    this.updateCanvas();
  }
  updateCanvas() {
    function start(canvas) {
      var width = (canvas.width = document.body.clientWidth);
      var height = (canvas.height = 500);
      var letters = Array(256)
        .join(1)
        .split('');

      var draw = function () {
        canvas.getContext('2d').fillStyle = 'rgba(0,0,0,.05)';
        canvas.getContext('2d').fillRect(0, 0, width, height);
        canvas.getContext('2d').fillStyle = '#0F0';
        letters.forEach(function (y_pos, index) {
          let num = String.fromCharCode(0x30A0 + Math.random() * (95));
          let text = String(num);
          let x_pos = index * 10;
          canvas.getContext('2d').fillText(text, x_pos, y_pos);
          letters[index] = y_pos > 758 + Math.random() * 1e4 ? 0 : y_pos + 10;
        });
      };
      setInterval(draw, 60);
    }

    var canvas = this.refs.canvas;
    start(canvas);
  }

  render() {
    return (
      <canvas ref="canvas" id="canvas" />
    );
  }
}

export default Background;
