$("#parallax").parallax({
  invertX: true,
  invertY: true,
  scalarX: 100,
  frictionY: 0,
  limitY: true,
  originY: 0,
});

(function ($) {
  "use strict";

  document
    .getElementsByTagName("body")[0]
    .addEventListener("mousemove", function (n) {
      (t.style.left = n.clientX + "px"),
        (t.style.top = n.clientY + "px"),
        (e.style.left = n.clientX + "px"),
        (e.style.top = n.clientY + "px"),
        (i.style.left = n.clientX + "px"),
        (i.style.top = n.clientY + "px");
    });

  var t = document.getElementById("cursor"),
    e = document.getElementById("cursor2"),
    i = document.getElementById("cursor3");

  function n(t) {
    e.classList.add("hover"), i.classList.add("hover");
  }

  function s(t) {
    e.classList.remove("hover"), i.classList.remove("hover");
  }

  s();

  for (
    var r = document.querySelectorAll(".hover-target"), a = r.length - 1;
    a >= 0;
    a--
  ) {
    o(r[a]);
  }

  function o(t) {
    t.addEventListener("mouseover", n), t.addEventListener("mouseout", s);
  }

  $(document).ready(function () {
    $(".slide-buttons li:nth-child(1)").on("mouseenter", function () {
      $(".slide-buttons li.active").removeClass("active");
      $(".center.show").removeClass("show");
      $(".center:nth-child(1)").addClass("show");
      $(".slide-buttons li:nth-child(1)").addClass("active");
    });
    $(".slide-buttons li:nth-child(2)").on("mouseenter", function () {
      $(".slide-buttons li.active").removeClass("active");
      $(".center.show").removeClass("show");
      $(".center:nth-child(2)").addClass("show");
      $(".slide-buttons li:nth-child(2)").addClass("active");
    });
    $(".slide-buttons li:nth-child(3)").on("mouseenter", function () {
      $(".slide-buttons li.active").removeClass("active");
      $(".center.show").removeClass("show");
      $(".center:nth-child(3)").addClass("show");
      $(".slide-buttons li:nth-child(3)").addClass("active");
    });
    $(".slide-buttons li:nth-child(4)").on("mouseenter", function () {
      $(".slide-buttons li.active").removeClass("active");
      $(".center.show").removeClass("show");
      $(".center:nth-child(4)").addClass("show");
      $(".slide-buttons li:nth-child(4)").addClass("active");
    });
    $(".slide-buttons li:nth-child(5)").on("mouseenter", function () {
      $(".slide-buttons li.active").removeClass("active");
      $(".center.show").removeClass("show");
      $(".center:nth-child(5)").addClass("show");
      $(".slide-buttons li:nth-child(5)").addClass("active");
    });
    $(".slide-buttons li:nth-child(6)").on("mouseenter", function () {
      $(".slide-buttons li.active").removeClass("active");
      $(".center.show").removeClass("show");
      $(".center:nth-child(6)").addClass("show");
      $(".slide-buttons li:nth-child(6)").addClass("active");
    });
    $(".slide-buttons li:nth-child(1)").trigger("mouseenter");
  });
})(jQuery);

particlesJS("particles1", {
  particles: {
    number: {
      value: 120,
      density: {
        enable: true,
        value_area: 1000,
      },
    },
    color: {
      value: "#2164d9",
    },
    shape: {
      type: "circle",
      stroke: {
        width: 0,
        color: "#000000",
      },
      polygon: {
        nb_sides: 5,
      },
    },
    opacity: {
      value: 1,
      random: false,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.1,
        sync: false,
      },
    },
    size: {
      value: 8,
      random: true,
      anim: {
        enable: false,
        speed: 40,
        size_min: 0.1,
        sync: false,
      },
    },
    line_linked: {
      enable: false,
    },
    move: {
      enable: true,
      speed: 0.2,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200,
      },
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: false,
      },
      onclick: {
        enable: false,
      },
      resize: true,
    },
  },
  retina_detect: true,
});

particlesJS("particles2", {
  particles: {
    number: {
      value: 120,
      density: {
        enable: true,
        value_area: 1000,
      },
    },
    color: {
      value: "#d7e456",
    },
    shape: {
      type: "circle",
      stroke: {
        width: 0,
        color: "#000000",
      },
      polygon: {
        nb_sides: 5,
      },
    },
    opacity: {
      value: 1,
      random: false,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.1,
        sync: false,
      },
    },
    size: {
      value: 8,
      random: true,
      anim: {
        enable: false,
        speed: 40,
        size_min: 0.1,
        sync: false,
      },
    },
    line_linked: {
      enable: false,
    },
    move: {
      enable: true,
      speed: 0.2,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200,
      },
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: false,
      },
      onclick: {
        enable: false,
      },
      resize: true,
    },
  },
  retina_detect: true,
});

particlesJS("particles3", {
  particles: {
    number: {
      value: 120,
      density: {
        enable: true,
        value_area: 1000,
      },
    },
    color: {
      value: "#d7e456",
    },
    shape: {
      type: "circle",
      stroke: {
        width: 1,
        color: "#2164d9",
      },
      polygon: {
        nb_sides: 5,
      },
    },
    opacity: {
      value: 0,
      random: false,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.1,
        sync: false,
      },
    },
    size: {
      value: 8,
      random: true,
      anim: {
        enable: false,
        speed: 40,
        size_min: 0.1,
        sync: false,
      },
    },
    line_linked: {
      enable: false,
    },
    move: {
      enable: true,
      speed: 0.2,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200,
      },
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: false,
      },
      onclick: {
        enable: false,
      },
      resize: true,
    },
  },
  retina_detect: true,
});

particlesJS("particles4", {
  particles: {
    number: {
      value: 120,
      density: {
        enable: true,
        value_area: 1000,
      },
    },
    color: {
      value: "#018c33",
    },
    shape: {
      type: "circle",
      stroke: {
        width: 0,
        color: "#000000",
      },
      polygon: {
        nb_sides: 5,
      },
      image: {
        src: "img/github.svg",
        width: 100,
        height: 100,
      },
    },
    opacity: {
      value: 1,
      random: false,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.1,
        sync: false,
      },
    },
    size: {
      value: 8,
      random: true,
      anim: {
        enable: false,
        speed: 40,
        size_min: 0.1,
        sync: false,
      },
    },
    line_linked: {
      enable: false,
    },
    move: {
      enable: true,
      speed: 0.2,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200,
      },
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: false,
      },
      onclick: {
        enable: false,
      },
      resize: true,
    },
  },
  retina_detect: true,
});
