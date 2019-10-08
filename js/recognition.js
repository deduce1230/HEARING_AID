//var recognition = new webkitSpeechRecognition();
//  recognition.onresult = function(event) {
//  if (event.results.length > 0) {
//    q.value = event.results[0][0].transcript;
//  }
//}

    var recognizing;
    var recognition = new SpeechRecognition();
    recognition.continuous = true;
    reset();
    recognition.onend = reset;

    recognition.onresult = function (event) {
      for (var i = resultIndex; i < event.results.length; ++i) {
        if (event.results.final) {
          textarea.value += event.results[i][0].transcript;
        }
      }
    }

    function reset() {
      recognizing = false;
      button.innerHTML = "Click to Speak";
    }

    function toggleStartStop() {
      if (recognizing) {
        recognition.stop();
        reset();
      } else {
        recognition.start();
        recognizing = true;
        button.innerHTML = "Click to Stop";
      }
    }
