let amici = {
  people: [
  {
    name: "Tortel",
    status: "negative",
  },
  {
    name: "Sarto",
    status: "negative",
  },
  {
    name: "Alessia",
    status: "positive",
  },
  {
    name: "Laura",
    status: "negative",
  },
  {
    name: "Alice",
    status: "negative",
  },
  {
    name: "Franza",
    status: "negative",
  },
  {
    name: "Suduz",
    status: "negative",
  },
  {
    name: "Franzo",
    status: "positive",
  },
  {
    name: "Fabio",
    status: "negative",
  },
  {
    name: "Riccardo",
    status: "negative",
  },
  {
    name: "Gero",
    status: "negative",
  },
  {
    name: "AnnaTonna",
    status: "negative",
  },
  {
    name: "Imelda",
    status: "positive",
  },
  {
    name: "Lalla",
    status: "negative",
  },
  {
    name: "Bocchi",
    status: "negative",
  },
  ]
}


function preload(){
  // put preload code here
}

let peopleInSpace = [];

function setup() {
  createCanvas(windowWidth,windowHeight);
  for (let i = 0; i < amici.people.length; i++) {
    addPeople(
      random(windowWidth),
      random(windowHeight),
      amici.people[i].name,
      amici.people[i].status,
    );
  }
}

function draw() {
  // put drawing code here
  background(20);

  for(let i = 0; i < peopleInSpace.length; i++) {
    peopleInSpace[i].run();
  }
}

function addPeople(x, y, name, status) {
  let bubbleColor;
  if (status == "negative") {
    bubbleColor = "green";
  } else {
    bubbleColor = "tomato";
  }
  const aNewBubble = new Bubble(x, y, bubbleColor, name)
  peopleInSpace.push(aNewBubble);
}

class Bubble {
  constructor(temp_x,temp_y,temp_color,temp_name) {
    this.x=temp_x;
    this.y=temp_y;
    this.r=100;
    this.color=temp_color;
    this.name = temp_name;

    this.speed = 2;
    this.yDir = 1;
	  this.xDir = 1;
  }

  display() {
    push();
    noStroke();
    fill(color(this.color));
    ellipse(this.x,this.y, this.r);
    textAlign(CENTER);
    fill(255);
    text(this.name, this.x, this.y);
    pop();
  }

  updatePosition() {
    this.x += this.speed * this.xDir;
		this.y += this.speed * this.yDir;
		if (this.y >= height || this.y <= 0) {
			this.yDir *= -1;
		}
		if (this.x >= width || this.x <= 0) {
			this.xDir *= -1;
		}
  }

  run() {
    this.updatePosition();
    this.display();
  }
}
