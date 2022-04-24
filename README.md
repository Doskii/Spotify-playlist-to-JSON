# Spotify-playlist-to-JSON
Very easy and non-intrusive way to export any Spotify playlist to JSON. No tools, installs or suspicious logins required.

Just copy the contents of [export_spotify_playlist_to_json.js](https://github.com/Doskii/Spotify-playlist-to-JSON/blob/main/export_spotify_playlist_to_json.js) into the console of [the web version of Spotify](https://play.spotify.com/) while looking at a playlist and it will give you a JSON file with every track's title, album and artists.

## Step for step
1. Copy the code from [export_spotify_playlist_to_json.js](https://github.com/Doskii/Spotify-playlist-to-JSON/blob/main/export_spotify_playlist_to_json.js)
2. Open [the web version of Spotify](https://play.spotify.com/)
3. Navigate to your playlist of choice, make sure it is scrolled to the top and that both "title" and "album" columns are visible
4. Press Ctrl-Shift-i on your keyboard to open devtools, navigate to the **console** tab
5. Paste the code, hit enter and wait for it to finish

![out](https://user-images.githubusercontent.com/36999268/164950941-b6e4d9bb-435a-4784-9302-d806d5308e59.gif)

## Why?
I made this script so I could make backups of my playlists in case something were to happen to my account or Spotify itself. I couldn't find a safe looking solution online so I ended up making my own and thought I might as well share it. I didn't spend a whole lot of time on it so it might not work for you and the code could have been neater etc. etc. It's just a quick little script that does the job ¯\\_(ツ)\_/¯. I also can't promise this will keep working forever as it is just looking at the page's HTML meaning that if Spotify updates it, this script might need to update too.
