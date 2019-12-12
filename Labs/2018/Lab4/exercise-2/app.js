const say = require('say')

// Use defalt system voice and speed
say.speak('Hello!')

// Stop the text currently being spoken
say.stop()

let timerId = setTimeout(sorryDave, 5000)

// More complex example (with an OS X voice) and slow speed
say.speak("Hello?", 'Alex', 0.5)

function sorryDave () {
    say.speak('I\'m sorry, Dave')
  }