let hr: number = 7,
    mins: number = 30,
    secs: number = 00

setInterval((): void => {
   if (secs <= 0) mins-- && (secs = 60)
      else if (secs > 0) secs--
      else if (mins > 0) mins--
      else hr-- && (mins = 60)

   btn.innerText = `${hr}:${mins}:${secs}`
})