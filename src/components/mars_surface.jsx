import React from 'react';


class MarsSurface extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      oldLocation: []
    };
  }

  // put elements in store // update store on interval
  // calls draw function on interval
  componentDidMount() {
    const grid = this.createGridUtil();
    this.props.createGrid(grid);
    setInterval(() => {
      this.props.getBots();
      this.props.getNodes();
      this.draw();
    }, 1000);
  }

  updateCoords(x,y) {
    const nodes = this.props.nodes;
    const bots = this.props.bots;
    const grid = this.props.grid;

    // no node and no bots
    if (nodes.length === 0 || bots.length === 0) {
      return "white";
    }
    let cell = grid[x][y];
    //placing nodes
    nodes.forEach(node => {
      if ((node.Location.X === x && node.Location.Y === y) && cell[0].className !== "red") {
        cell[0].className = "green";
        cell[1].node = node.Id;
      }
    });
    //placing bots
    bots.forEach(bot => {
      if ((bot.Location.X === x && bot.Location.Y === y) && cell[0].className !== "green") {
        cell[0].className = "red";
        cell[1].bot = bot.Id;
      } else if ((bot.Location.X === x && bot.Location.Y === y) && cell[0].className === "green") {
        cell[0].className = "orange";
        cell[1].bot = bot.Id;
        let claims = bot.Claims;
        // bots claiming nodes
        if (claims.length < 3) claims.push(cell[1].node);
        else {
          claims.shift();
          claims.push(cell[1].node);
          bot.Score += 1;
        }
      }
    });
    // nodes claiming bots
    nodes.forEach(node => {
      if ((node.Location.X === x && node.Location.Y === y) && (cell[0].className === "orange" && node.ClaimedBy === "")) {
        node.ClaimedBy = cell[1].bot;
        if (node.Value >= 0) node.Value -= 1;
      } else {
        node.ClaimedBy = "";
      }
    });
  }

  createGridUtil() {
    const grid = this.props.grid;
    const gridClass = document.querySelector(".grid-container");
    gridClass.removeChild(gridClass.firstChild);
    for (let i = 0; i < 20; i++) {
      for (let j = 0; j < 20; j++) {
        let newCell = document.createElement("div");
        newCell.classList.add(this.updateCoords(i,j));
        gridClass.appendChild(newCell);
        grid[i][j] = [newCell, {bot: "", node: ""}];
      }
    }
    return grid;
  }

  // remove old bot location
  clearBots() {
    const grid = this.props.grid;
    grid.forEach(row => {
      row.forEach(cell =>{
        if (cell[0].className === "red") {
          cell[0].className = "white";
          cell[1].bot = "";
        }
      });
    });
  }


  draw() {
    const grid = this.props.grid;

    this.clearBots();
    for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid.length; j++) {
        this.updateCoords(i,j);
      }
    }
  }




  render() {
    return (
      <div>
      </div>
    )
  }
}

export default MarsSurface;
