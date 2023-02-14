//! Creating a stopwatch
//! Property
//! obj1.duration --> tells the duration of time between the start and stop
//! Methods
//! obj1.start() --> Start the stopwatch
//! obj1.stop() --> stop the stopwatch
//! obj1.reset() --> reset the stopwatch

function Stopwatch() {
  let startTime,
    endTime,
    running = 0;
  let duration = 0;
  this.start = function () {
    if (running) {
      throw new Error("Stopwatch is already started");
    }
    running = true;
    startTime = new Date();
  };
  this.stop = function () {
    if (!running) {
      throw new Error("Stopwatch is not running");
    }
    running = false;
    endTime = new Date();
    const seconds = (endTime.getTime() - startTime.getTime()) / 1000;
    // console.log(seconds);
    // console.log(duration);
    duration += seconds;
  };
  this.reset = function () {
    startTime = null;
    endTime = null;
    running = false;
    duration = 0;
  };

  //! getter function
  Object.defineProperty(this, "duration", {
    get: function () {
      return duration;
    },
  });
}

const sw = new Stopwatch();
sw.duration;
