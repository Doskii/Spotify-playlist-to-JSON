document.querySelector("div.main-view-container div.os-viewport.os-viewport-native-scrollbars-invisible").scrollTo(0,0);
result = [];
console.log("Starting in 3 sec");
document.body.style.pointerEvents = "none !important";
document.querySelector(".main-view-container div.os-scrollbar.os-scrollbar-vertical").style.display = "none";
setTimeout(() => { // small delay to allow browser to scroll to the top
  totalRows = parseInt(document.querySelector("[data-testid='playlist-tracklist']").getAttribute("aria-rowcount"));
  if (totalRows > 0) {
    intervalId = setInterval(() => {
      lastRow = document.querySelector("[data-testid='playlist-tracklist'] > div:nth-of-type(2) [role='row']:last-of-type");
      firstRow = document.querySelector("[data-testid='playlist-tracklist'] > div:nth-of-type(2) [role='row']:first-of-type");
      if (lastRow != null && firstRow != null) { // sometimes null if browser can't keep up, just skip and wait
        lastRowNr = parseInt(lastRow.getAttribute("aria-rowindex"));
        firstRowNr = parseInt(firstRow.getAttribute("aria-rowindex"));
        if (lastRowNr-2 > result.length-1) { // has list updated yet?
          document.querySelectorAll("[data-testid='playlist-tracklist'] > div:nth-of-type(2) [role='row']").forEach(row => {
            console.log("Track " + (row.getAttribute("aria-rowindex")-1) + "/" + (totalRows-1));
            let nr = {
              title: row.querySelector("div[dir='auto']").textContent,
              album: row.querySelector("div > div:nth-of-type(3) > span").textContent,
              artist: [],
            };
            row.querySelectorAll("div > div:nth-of-type(2) > div > span.standalone-ellipsis-one-line a").forEach(a => nr.artist.push(a.textContent));
            result[row.getAttribute("aria-rowindex")-2] = nr;
          });
          lastRow.scrollIntoView();
        }
        if (lastRowNr >= totalRows) { // have we reached final row?
          // done collecting, download json string as file
          clearInterval(intervalId);
          console.log(result);
          blob = new Blob([JSON.stringify(result, null, 2)], { type: "json" });
          a = document.createElement('a');
          a.download = "spotify_export.json";
          a.href = URL.createObjectURL(blob);
          a.dataset.downloadurl = ["json", a.download, a.href].join(':');
          a.style.display = "none";
          document.body.appendChild(a);
          a.click();
          document.body.removeChild(a);
          setTimeout(function() { URL.revokeObjectURL(a.href); }, 1500);
          // clean up
          document.body.style.pointerEvents = "";
          document.querySelector(".main-view-container div.os-scrollbar.os-scrollbar-vertical").style.display = "";
          return;
        }
      }
    }, 50);
  }
  else {
    console.log("No tracks found! Empty playlist?")
  }
}, 3000);
