// console.clear()

let audio
let amp
// let fft

function preload() {
  audio = loadSound('audio/Breathe_Mix6e.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight)
  // canvas.mouseClicked(togglePlay)

  rectMode(CENTER)
  (console.log(audio))

  audio.setVolume(0.1)
  audio.play()

  amp = new p5.Amplitude()
  console.log(amp)
  // fft = new p5.FFT()

 
}

// let song;

// function setup() {
//   song = loadSound('assets/lucky_dragons_-_power_melody.mp3');
//   createCanvas(720, 200);
//   background(255, 0, 0);
// }

// function mousePressed() {
//   if (song.isPlaying()) {
//     // .isPlaying() returns a boolean
//     song.stop();
//     background(255, 0, 0);
//   } else {
//     song.play();
//     background(0, 255, 0);
//   }
// }



function draw() {
  background(0)

  // Comment in/out any of the following blocks of code.

  // 1.
  // Draw a rectangle and size it, according to the amplitude values of the track.
  fill(255)
  noStroke()
  translate(width / 2, height / 2)
  const volume = amp.getLevel()
  const rectSize = map(volume, 0, 0.5, 0, 200)
  rect(0, 0, rectSize, rectSize)

  // 2.
  // Static waveform.
  // stroke(255)
  // translate(0, height / 2)
  // const waveform = audio.getPeaks()
  // for(let i = 0; i < waveform.length; i++){
  //   line(i, waveform[i] * 100,  i, waveform[i] * -100)
  // }

  // 3.
  // FFT waveform
  // const waveform = fft.waveform()
  // noFill()
  // strokeWeight(3)
  // stroke(255)

  // for (let i = 0; i < waveform.length; i++) {
  //   const x = map(i, 0, waveform.length, 0, width)
  //   const y = map(waveform[i], -1, 1, 0, height)
  //   point(x, y)
  // }
}

function togglePlay() {
  if (audio.isPlaying()) {
    audio.pause()
  } else {
    audio.loop()
  }
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight)
}
