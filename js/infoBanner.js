AFRAME.registerComponent("info-Banner", {
    init: function() {
      this.createComics();
    },
    tick: function() {
      const placesContainer = document.querySelector("#comics-container");
  
      const { state } = placesContainer.getAttribute("comics");
  
      if (state === "view" || state === "change-view") {
  
        this.el.setAttribute("visible", true);
      } else {
        this.el.setAttribute("visible", false);
      }
    },
    createComics: function() {
      const infoBannerContainer = document.querySelector(
        "#info-banner-container"
      );
  
  
      for (var i = 1; i <= 4; i++) {
        const position = {
          x: (prevoiusXPosition += 50),
          y: (prevoiusYPosition += 2),
          z: -40
        };
        const entityEl = this.createPlaceThumbNail(position, i);
        infoBannerContainer.appendChild(entityEl);
      }
    },
    createPlaceThumbNail: function(position, id) {
      const entityEl = document.createElement("a-entity");
      entityEl.setAttribute("visible", true);
      entityEl.setAttribute("id", `place-${id}`);
  
      entityEl.setAttribute("geometry", {
        primitive: "circle",
        radius: 2.5
      });
  
      entityEl.setAttribute("position", position);
      entityEl.setAttribute("cursor-listener", {});
  
      return entityEl;
    }
  });
  