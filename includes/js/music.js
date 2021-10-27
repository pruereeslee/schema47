
(function(){ 
	

  const schemaSynth = new Tone.PolySynth({
    "volume": 0,
    "detune": 0,
    "portamento": 0,
    "envelope": {
      "attack": 1,
      "attackCurve": "linear",
      "decay": 0.1,
      "decayCurve": "exponential",
      "release": 100,
      "releaseCurve": "exponential",
      "sustain": 0.3
    },
    "oscillator": {
      "partialCount": 1,
      "partials": [
        1.2732395447351628
      ],
      "phase": -13,
      "type": "square1"
    }
  })
  .toMaster();
  
  // Set the BPM
  Tone.Transport.bpm.value = 130;
    
  
    
  // null is equal to rest
  const notes = ["C2", ["D3", "E3", "G3", "C2"], "D3", "E3", "G3", ["C2", "D3", "E3"], "G3", "C2", "D3", "E3", "G3",
  "A1", "B2", ["C3", "E3", "A1", "B2"], "C3", "E3", "A1", "B2", "C3", ["E3", "A1"], "B2", "C3", "E3",
  "C2", "D3", ["E3", "G3"], "C2", "D3", "E3", "G3", ["C2", "D3"], "E3", "G3", "C2", ["D3", "E3"], "G3",
  "A1", ["B2", "C3"], "E3", "A1", "B2", "C3", "E3", ["A1", "B2"], "C3", ["E3", "A1"], "B2", "C3", "E3",
  "Bb1", "C3", "D3", "F3", "Bb1", "C3", "D3", "F3", "Bb1", "C3", "D3", "F3", "Bb1", ["C3", "D3"], "F3",
  "G1", ["A2", "B2"], "D3", "G1", "A2", ["B2", "D3", "G1"], "A2", "B2", "F3", ["G1", "A2"], "B2", "F3",
  "C2", "D3", "E3", ["G3", "C2"], "D3", "E3", "G3", ["C2", "D3", "E3"], "G3", "C2", ["D3", "E3"], "G3",
 ];
  
  
  const synthPart = new Tone.Sequence(function(time, notes){
                               schemaSynth.triggerAttackRelease(notes, "100hz", time);
                               }, notes, "8n");
    synthPart.start();
    
    
  /** Play Controls **/
    let playing = false;
    document.querySelector("button").addEventListener("click", function(){ 
      if(!playing){
        Tone.Transport.start();
        playing = true;
      }else{
        Tone.Transport.stop();
        playing = false;
      }
    });
  })(	);
  