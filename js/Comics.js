AFRAME.registerComponent("poster", {
  init: function () {
    this.comicContainer = this.el;
    this.createCards();
  },

  createCards: function () {
    const thumbNailsRef = [
      {
        id: "poster-1",
        title: "Poster 1",
        url: "C:/Users/vikas/Downloads/Project 157/PRO-C157-Student-Activity-main/assets/thumbnails/download (1).jpg",
      },
      {
        id: "poster-2",
        title: "Poster 2",
        url: "C:/Users/vikas/Downloads/Project 157/PRO-C157-Student-Activity-main/assets/thumbnails/download (2).jpg",
      },

      {
        id: "poster-3",
        title: "Poster 3",
        url: "C:/Users/vikas/Downloads/Project 157/PRO-C157-Student-Activity-main/assets/thumbnails/download (3).jpg",
      },
      {
        id: "poster-4",
        title: "Poster 4",
        url: "C:/Users/vikas/Downloads/Project 157/PRO-C157-Student-Activity-main/assets/thumbnails/5f5b76ef439a68b5422a1ffc2ab9acb2.jpg",
      },
    ];
    let prevoiusXPosition = -60;

    for (var item of thumbNailsRef) {
      const posX = prevoiusXPosition + 25;
      const posY = 10;
      const posZ = -40;
      const position = { x: posX, y: posY, z: posZ };
      prevoiusXPosition = posX;

      // Border Element
      const borderEl=this.createBorder(position,item.id);
      // Thumbnail Element
      const thumbnail=this.createThumbnail(item);
      borderEl.appendChild(thumbnail);
      // Title Text Element
      const titleEl=this.createTitleEl(position,item);
      borderEl.appendChild(titleEl)
      const placeContainer = document.querySelector("#places-container");
      placeContainer.appendChild(borderEl);

    }
  },
  createBorder:function(position,id){
    const entityEl=document.createElement("a-entity");
    entityEl.setAttribute("id",id);
    entityEl.setAttribute("visible",true);
    entityEl.setAttribute("geometry",{
      primitive:"ring",
      radiusInner:9,
      radiusOuter:10
    });
    entityEl.setAttribute("position",position);
    entityEl.setAttribute("material",{
      color:"blue",
      opacity:1
    });
    return entityEl;
  },
  createThumbnail:function(item){
    const entityEl=document.createElement("a-entity");
    entityEl.setAttribute("visible",true);
    entityEl.setAttribute("geometry",{
      primitive:"circle",
      radius:9
    });
    entityEl.setAttribute("material",{
      src:item.url
    });
    return entityEl;
  },
  createTitleEl:function(position,item){
    const entityEl=document.createElement("a-entity");
    entityEl.setAttribute("text",{
      font:"exo2bold",
      align:"center",
      width:70,
      color:"#e65100",
      value:item.title
    });
    const elPosition=position;
    elPosition.y=-20;
    entityEl.setAttribute("position",elPosition);
    entityEl.setAttribute("visible",true);
    return entityEl;

  }
});
