export const dot = {
  // sprite: null,
  // track: null,
  sprite: [],
  track: [],

  // Initialize the dot: connect sprite and track properties with supplied SVG elements
  init: function (obj) {
    for (let i = 0; i < obj.length; i++) {
      this.sprite.push(document.getElementById(obj[i].sprite));
      this.track.push(document.getElementById(obj[i].track));
    }
    console.log(this.sprite, this.track, obj);
  },

  // Put the dot on its spot
  move: function (u) {
    let p = [];
    for (let i = 0; i < this.sprite.length; i++) {
      p.push(
        this.track[i].getPointAtLength(u * this.track[i].getTotalLength())
      );
    }

    for (let i = 0; i < this.sprite.length; i++) {
      if (this.sprite[i].id == "Oval-2") {
        this.sprite[i].setAttribute(
          "transform",
          `translate(${p[i].x - 142}, ${p[i].y - 125})`
        );
      }
      if (this.sprite[i].id == "Oval-2-Copy") {
        this.sprite[i].setAttribute(
          "transform",
          ` translate(255.368742, 279.234343) scale(-1, 1) translate(-255.368742, -279.234343) translate(${
            p[i].x - 243
          }, ${p[i].y - 155})`
        );
      }
      if (this.sprite[i].id == "Oval-2-Copy-2") {
        this.sprite[i].setAttribute(
          "transform",
          `translate(${p[i].x - 127}, ${p[i].y - 258})`
        );
      }
    }
  },
};
