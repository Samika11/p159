AFRAME.registerComponent("cursor-listener", {
    schema: {
      selectedItemId: { default: "", type: "string" },
    },
    init: function () {
      this.handleMouseEnterEvents();
      this.handleMouseLeaveEvents();
      this.handleClickEvents();
    },
    handleClickEvents:function(){
      this.el.addEventListener("click",evt=>{
      const placesContainer=document.querySelector("#places-container");
      const {state}=placesContainer.getAttribute("comics");
      if (state==="comics-list"){
        const id=this.el.getAttribute("id");
        const comicsId=["poster-1","poster-2","poster-3","poster-4"];
      if (comicsId.includes(id)){
        placesContainer.setAttribute("comics",{
          state:"view",
          selectedCard:id
        })
      }
      }
      if (state==="view"){
        this.handleViewState();
      }
      if(state==="change-view"){
        this.handleViewState();
      }
      })
    },
    handleViewState: function () {
      const el=this.el;
      const placeContainer = document.querySelector("#places-container");
      const id = this.el.getAttribute("id");
      const {selectedItemId}=placeContainer.getAttribute("cursor-listener");
      const infoBannerComicsId = ["poster-1","poster-2","poster-3","poster-4"];
      if (placesId.includes(id)) {
        placeContainer.setAttribute("cursor-listener", {
          state:"change-view"
        });
        this.el.setAttribute("material", {
          color: "#D76B30",
          opacity: 1,
        });
      }
    },
    handleMouseEnterEvents: function() {
      // Mouse Center Events
      this.el.addEventListener("mouseenter", () => {
        const placeContainer = document.querySelector("#comics-container");
        const { state } = placeContainer.getAttribute("comics");
        if (state === "comics-list") {
          this.handleComicsListState();
        }
      });
    },
    handlePlacesListState: function() {
      const id = this.el.getAttribute("id");
      const comicsId = ["poster-1", "poster-2", "poster-3", "poster-4"];
      if (comicsId.includes(id)) {
        const placeContainer = document.querySelector("#places-container");
        placeContainer.setAttribute("cursor-listener", {
          selectedItemId: id
        });
        this.el.setAttribute("material", {
          color:"#D76B30",
          opacity: 1
        });
      }
    },
    handleMouseLeaveEvents: function () {
      //Cursor 'mouseleave' Events
      this.el.addEventListener("mouseleave", () => {
        const { selectedItemId } = this.data;
        if (selectedItemId) {
          const el = document.querySelector(`#${selectedItemId}`);
          const id = el.getAttribute("id");
          if (id == selectedItemId) {
            el.setAttribute("material", {
              color: "#0077CC",
              opacity: 1,
            });
          }
        }
      });
    },
  });
  