# asari-selfbot
selfbot.cc but with better performance &amp; made in NodeJS


## Installation 

1. Visit https://nodejs.org/en/ and download version 10+, doesn't really matter if it's over 10.
2. Download this github project, extract it and put it on desktop.
3. Open the folder, click util and then click edit on **config.json**. 
4. Go into discord, click CTRL+SHIFT+i & click the network tab, then type something in a channel and it should come up a table saying "messages", click that. Go to headers and scroll down til you see "authorization": "yourtoken...", then copy that.
5. Go back into the config.json folder and put in your token where it says tokens:, then you tokens: should look like this: **tokens: ["yourtoken.."]**, save and exit out of the folder.

6. Open CMD, use **cd /path/to/the/project/folder**.
7. Use **npm install** and it should download the packages for you.
8. use node . in the terminal and your bot should activate.
