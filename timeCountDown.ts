let hr: number = 7,
    mins: number = 30,
    secs: number = 00

setInterval((): void => {
   if (secs > 0) secs--
      else if (mins > 0) mins-- && (secs = 59)
      else if (hr > 0) hr-- && (mins = 59) && (secs = 59)

   btn.innerText = `${hr}:${mins}:${secs}`
}, 1000)