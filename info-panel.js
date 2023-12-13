/* global AFRAME */

AFRAME.registerComponent("info-panel", {
  init: function () {
    var buttonEls = document.querySelectorAll(".menu-button");
    var fadeBackgroundEl = (this.fadeBackgroundEl =
      document.querySelector("#fadeBackground"));

    this.movieTitleEl = document.querySelector("#movieTitle");
    this.movieDescriptionEl = document.querySelector("#movieDescription");

    this.movieInfo = {
      melButton: {
        title: "Melinda Miller",
        imgEl: document.querySelector("#melImage"),
        description:
          "I'm the co-owner of the software consulting agency, Pixo, where I focus on managing and organizing our team. My goal every day is to contribute to a healthy, human-centered work environment that helps us provide excellent service to our clients.",
      },
      jasonButton: {
        title: "Jason Berg",
        imgEl: document.querySelector("#jasonImage"),
        description:
          "With a degree in business, an eye for design, and a passion for technology I've had the opportunity to play unique and interesting roles for organizations of all sizes; providing a thoughtful ear and keen insights to extremely talented individuals on all sides of creative engineering projects.",
      },
      danButton: {
        title: "Danielle Hendricks",
        imgEl: document.querySelector("#danImage"),
        description:
          "I help people and organizations hire experts they can trust. Whether it's businesses seeking tech solutions, museums building exhibits, or couples planning their most important day — my career has been about listening to people's needs and guiding them to a solution. When there's a big decision to make (and investment at stake), I'm here to support you through it.",
      },
    };

    this.onMenuButtonClick = this.onMenuButtonClick.bind(this);
    this.onBackgroundClick = this.onBackgroundClick.bind(this);
    this.backgroundEl = document.querySelector("#background");
    for (var i = 0; i < buttonEls.length; ++i) {
      buttonEls[i].addEventListener("click", this.onMenuButtonClick);
    }
    this.backgroundEl.addEventListener("click", this.onBackgroundClick);
    this.el.object3D.renderOrder = 9999999;
    this.el.object3D.depthTest = false;
    fadeBackgroundEl.object3D.renderOrder = 9;
    fadeBackgroundEl.getObject3D("mesh").material.depthTest = false;
  },

  onMenuButtonClick: function (evt) {
    console.log("clicked");
    var movieInfo = this.movieInfo[evt.currentTarget.id];

    this.backgroundEl.object3D.scale.set(1, 1, 1);

    this.el.object3D.scale.set(1, 1, 1);
    if (AFRAME.utils.device.isMobile()) {
      this.el.object3D.scale.set(1.4, 1.4, 1.4);
    }
    this.el.object3D.visible = true;
    this.fadeBackgroundEl.object3D.visible = true;

    if (this.movieImageEl) {
      this.movieImageEl.object3D.visible = false;
    }
    this.movieImageEl = movieInfo.imgEl;
    this.movieImageEl.object3D.visible = true;

    this.movieTitleEl.setAttribute("text", "value", movieInfo.title);
    this.movieDescriptionEl.setAttribute(
      "text",
      "value",
      movieInfo.description
    );
  },

  onBackgroundClick: function (evt) {
    this.backgroundEl.object3D.scale.set(0.001, 0.001, 0.001);
    this.el.object3D.scale.set(0.001, 0.001, 0.001);
    this.el.object3D.visible = false;
    this.fadeBackgroundEl.object3D.visible = false;
  },
});
