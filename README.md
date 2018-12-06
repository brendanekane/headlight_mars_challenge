# Mars Mining Discovery Tournament

Hackathon hosted by Headlight Labs in November, 2018. Goal was to create a front-end website within two hours showing bots mining nodes on the surface of mars by utilizing their API. Two end points were available for their API — one for bots and one for nodes. The api would return a json object that included information for each node/bot such as unique identifying name, (x,y) location coordinates, value/score (depending on node/bot), claim_by/claims (depending on node/bot), etc. The bots would move location every 1000 milliseconds but the nodes would never change location. Ultimately I ended up placing as one of the top finishers in the contest. 


## My approach

My approach was to make a react app that managed state by using redux. In order to save on time I used create-react-app to generate the skeleton code as well as webpack, babel, and other dependencies. In order to make my state more maneagable to work with I created a selectors file that takes in the state in mapStateToProps props function and returns a normalized state. I separated out my API calls from my actions into a APIUtils file which I imported the necessary functions when required.

## Tradeoffs I made

The biggest tradeoff the I made was using create-react-app because it includes a lot of scripts and dependencies that are entirely necessary for this app. However considering I wanted to use a redux workflow to manage my state I knew that I wouldn't have time to build the react skeleton and configure webpack in the time given.

## Future goals

With more time I would've implemented:
   * First and foremost, I would have liked to make the UI look much nicer. I think some more colors or pictures would be the first thing to change, as well as having roaming bot, mining bot, and mineral sprites instead of colored squares would look a whole lot better.
   * I think that the ability to directly control the bots would be a really cool feature to implement. However I think that the amount of time that a bot can be controlled should be limited, to allow a nice mixture of random movement from API calls and structured movement from a user.

The first feature would probably only take me 20-30 minutes to find the sprites and have each grid cell that contained a node or a bot have its class replaced by a tag that put the sprite on the DOM.

The second feature would take much longer to implement. I would first need a way for the user to directly select the bot that they want to control. Then I would need to implement a way for the user to actually control the bot. I think I would approach this by binding the cursor as well as the arrow keeps to certain functions. The cursor function could select the specific cell that's clicked on and store it's bot in memory, then the arrow key functions would grab that bot in memory and directly manipulate its Location values based on which direction was pushed.
