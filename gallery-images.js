(() => {
  const galleryEntries = [
    {
      section: "April 2026 (Stripe Young Scientist and Technologist Bootcamp)",
      slot: "April 2026 01",
      src: "assets/gallery/april-2026-01.png",
      caption: "April 2026 01",
      alt: "Stripe Young Scientist and Technologist Bootcamp group image"
    },
    {
      section: "January 2026 (Stripe Young Scientist and Technologist Bootcamp)",
      slot: "January 2026 01",
      src: "assets/gallery/january-2026-01.png",
      caption: "January 2026 01",
      alt: "January 2026 award image"
    },
    {
      section: "January 2026 (Stripe Young Scientist and Technologist Bootcamp)",
      slot: "January 2026 02",
      src: "assets/gallery/january-2026-02.png",
      caption: "January 2026 02",
      alt: "January 2026 project display image"
    },
    {
      section: "January 2026 (Stripe Young Scientist and Technologist Bootcamp)",
      slot: "January 2026 03",
      src: "assets/gallery/january-2026-03.png",
      caption: "January 2026 03",
      alt: "January 2026 exhibition image"
    },
    {
      section: "December 2026 (TECS ceremony and Christmas)",
      slot: "December 2026 01",
      src: "assets/gallery/december-2026-01.png",
      caption: "December 2026 01",
      alt: "TECS ceremony award image"
    },
    {
      section: "December 2026 (TECS ceremony and Christmas)",
      slot: "December 2026 02",
      src: "assets/gallery/december-2026-02.png",
      caption: "December 2026 02",
      alt: "TECS ceremony winner image"
    },
    {
      section: "December 2026 (TECS ceremony and Christmas)",
      slot: "December 2026 03",
      src: "assets/gallery/december-2026-03.png",
      caption: "December 2026 03",
      alt: "TECS ceremony group image"
    },
    {
      section: "December 2026 (TECS ceremony and Christmas)",
      slot: "December 2026 04",
      src: "assets/gallery/december-2026-04.png",
      caption: "December 2026 04",
      alt: "TECS ceremony speaking image"
    },
    {
      section: "November 2026 (Google Ireland x Common Purpose 2025)",
      slot: "November 2026 01",
      src: "assets/advocacy/common-purpose-google-01.png",
      caption: "November 2026 01",
      alt: "Google Ireland and Common Purpose programme image"
    },
    {
      section: "November 2026 (Google Ireland x Common Purpose 2025)",
      slot: "November 2026 02",
      src: "assets/advocacy/common-purpose-google-02.png",
      caption: "November 2026 02",
      alt: "Google Ireland and Common Purpose group session image"
    },
    {
      section: "November 2026 (Google Ireland x Common Purpose 2025)",
      slot: "November 2026 03",
      src: "assets/advocacy/common-purpose-google-03.png",
      caption: "November 2026 03",
      alt: "Google Ireland and Common Purpose event image"
    },
    {
      section: "September 2026 (Learnovate Trinity College Dublin 2025)",
      slot: "September 2026 01",
      src: "assets/advocacy/learnovate-01.png",
      caption: "September 2026 01",
      alt: "Learnovate Trinity College Dublin event image"
    },
    {
      section: "September 2026 (Learnovate Trinity College Dublin 2025)",
      slot: "September 2026 02",
      src: "assets/advocacy/learnovate-02.png",
      caption: "September 2026 02",
      alt: "Learnovate Trinity College Dublin talk image"
    },
    {
      section: "September 2026 (Learnovate Trinity College Dublin 2025)",
      slot: "September 2026 03",
      src: "assets/advocacy/learnovate-03.png",
      caption: "September 2026 03",
      alt: "Learnovate Trinity College Dublin audience image"
    },
    {
      section: "August 2025 (Stripe Young Scientist Launch + Dublin Maker 2025 + Stripe Young Scientist photoshoot)",
      slot: "Dublin Maker 2025 01",
      src: "assets/advocacy/dublin-maker-01.png",
      caption: "Dublin Maker 2025 01",
      alt: "Dublin Maker 2025 demonstration image"
    },
    {
      section: "August 2025 (Stripe Young Scientist Launch + Dublin Maker 2025 + Stripe Young Scientist photoshoot)",
      slot: "Dublin Maker 2025 02",
      src: "assets/advocacy/dublin-maker-02.png",
      caption: "Dublin Maker 2025 02",
      alt: "Dublin Maker 2025 conversation image"
    },
    {
      section: "August 2025 (Stripe Young Scientist Launch + Dublin Maker 2025 + Stripe Young Scientist photoshoot)",
      slot: "Photoshoot 01",
      src: "assets/gallery/photoshoot-01.png",
      caption: "Photoshoot 01",
      alt: "Stripe Young Scientist photoshoot image"
    },
    {
      section: "August 2025 (Stripe Young Scientist Launch + Dublin Maker 2025 + Stripe Young Scientist photoshoot)",
      slot: "Photoshoot 02",
      src: "assets/gallery/photoshoot-02.png",
      caption: "Photoshoot 02",
      alt: "Stripe Young Scientist group photoshoot image"
    },
    {
      section: "August 2025 (PATCH)",
      slot: "August PATCH 01",
      src: "assets/gallery/august-patch-01.png",
      caption: "August PATCH 01",
      alt: "PATCH group selfie image"
    },
    {
      section: "August 2025 (PATCH)",
      slot: "August PATCH 02",
      src: "assets/gallery/august-patch-02.png",
      caption: "August PATCH 02",
      alt: "PATCH table group image"
    },
    {
      section: "August 2025 (PATCH)",
      slot: "August PATCH 03",
      src: "assets/gallery/august-patch-03.png",
      caption: "August PATCH 03",
      alt: "PATCH stage image"
    },
    {
      section: "August 2025 (PATCH)",
      slot: "August PATCH 04",
      src: "assets/gallery/august-patch-04.png",
      caption: "August PATCH 04",
      alt: "PATCH meeting image"
    },
    {
      section: "August 2025 (PATCH)",
      slot: "August PATCH 05",
      src: "assets/gallery/august-patch-05.png",
      caption: "August PATCH 05",
      alt: "PATCH outdoor group image"
    },
    {
      section: "August 2025 (PATCH)",
      slot: "August PATCH 06",
      src: "assets/gallery/august-patch-06.png",
      caption: "August PATCH 06",
      alt: "PATCH Stripe image"
    },
    {
      section: "July 2025 (PATCH)",
      slot: "July PATCH 01",
      src: "assets/gallery/july-patch-01.png",
      caption: "July PATCH 01",
      alt: "PATCH selfie image"
    },
    {
      section: "July 2025 (PATCH)",
      slot: "July PATCH 02",
      src: "assets/gallery/july-patch-02.png",
      caption: "July PATCH 02",
      alt: "PATCH outdoor image"
    },
    {
      section: "July 2025 (PATCH)",
      slot: "July PATCH 03",
      src: "assets/gallery/july-patch-03.png",
      caption: "July PATCH 03",
      alt: "PATCH group image"
    },
    {
      section: "July 2025 (PATCH)",
      slot: "July PATCH 04",
      src: "assets/gallery/july-patch-04.png",
      caption: "July PATCH 04",
      alt: "PATCH theatre image"
    },
    {
      section: "July 2025 (PATCH)",
      slot: "July PATCH 05",
      src: "assets/gallery/july-patch-05.png",
      caption: "July PATCH 05",
      alt: "PATCH pair image"
    },
    {
      section: "July 2025 (PATCH)",
      slot: "July PATCH 06",
      src: "assets/gallery/july-patch-06.png",
      caption: "July PATCH 06",
      alt: "PATCH microphone image"
    },
    {
      section: "May 2025 (Dublin Tech Circuit Kickoff + RTE Jr podcast + Young Environmentalist Awards)",
      slot: "DTC Kickoff 01",
      src: "assets/gallery/dtc-kickoff-01.png",
      caption: "DTC Kickoff 01",
      alt: "Dublin Tech Circuit speaking image"
    },
    {
      section: "May 2025 (Dublin Tech Circuit Kickoff + RTE Jr podcast + Young Environmentalist Awards)",
      slot: "DTC Kickoff 02",
      src: "assets/gallery/dtc-kickoff-02.png",
      caption: "DTC Kickoff 02",
      alt: "Dublin Tech Circuit workshop image"
    },
    {
      section: "May 2025 (Dublin Tech Circuit Kickoff + RTE Jr podcast + Young Environmentalist Awards)",
      slot: "RTE Jr podcast 01",
      src: "assets/ireland-wind-change/gallery-rte-studio-wide.png",
      caption: "RTE Jr podcast 01",
      alt: "RTE Jr podcast studio image"
    },
    {
      section: "May 2025 (Dublin Tech Circuit Kickoff + RTE Jr podcast + Young Environmentalist Awards)",
      slot: "RTE Jr podcast 02",
      src: "assets/ireland-wind-change/gallery-rte-monitors.png",
      caption: "RTE Jr podcast 02",
      alt: "RTE Jr podcast monitor image"
    },
    {
      section: "April 2025 (Tech-team trials Marian College + Google AI in Community)",
      slot: "Google AI in Community 01",
      src: "assets/advocacy/google-ai-community-01.png",
      caption: "Google AI in Community 01",
      alt: "Google AI in Community event image"
    },
    {
      section: "April 2025 (Tech-team trials Marian College + Google AI in Community)",
      slot: "Google AI in Community 02",
      src: "assets/advocacy/google-ai-community-02.png",
      caption: "Google AI in Community 02",
      alt: "Google AI in Community session image"
    },
    {
      section: "May 2025 (Google AI Safety Labs speaker + Piloting Dublin Tech Circuit)",
      slot: "Google AI Safety Labs 01",
      src: "assets/neurocognitive/gallery-google-panel.png",
      caption: "Google AI Safety Labs 01",
      alt: "Google AI Safety Labs panel image"
    },
    {
      section: "May 2025 (Google AI Safety Labs speaker + Piloting Dublin Tech Circuit)",
      slot: "Google AI Safety Labs 02",
      src: "assets/neurocognitive/gallery-google-panel-alt.png",
      caption: "Google AI Safety Labs 02",
      alt: "Google AI Safety Labs panel alternate image"
    },
    {
      section: "May 2025 (Google AI Safety Labs speaker + Piloting Dublin Tech Circuit)",
      slot: "Piloting DTC 01",
      src: "assets/gallery/piloting-dtc-01.png",
      caption: "Piloting DTC 01",
      alt: "Dublin Tech Circuit bootcamp group image"
    },
    {
      section: "May 2025 (Google AI Safety Labs speaker + Piloting Dublin Tech Circuit)",
      slot: "Piloting DTC 02",
      src: "assets/dublin-tech-circuit/gallery/strip-close-build.png",
      caption: "Piloting DTC 02",
      alt: "Dublin Tech Circuit close build session image"
    },
    {
      section: "January 2025 (Stripe Young Scientist 2025)",
      slot: "Stripe YSTE 2025 01",
      src: "assets/neurocognitive/gallery-category-award.png",
      caption: "Stripe YSTE 2025 01",
      alt: "Stripe Young Scientist category award image"
    },
    {
      section: "January 2025 (Stripe Young Scientist 2025)",
      slot: "Stripe YSTE 2025 02",
      src: "assets/neurocognitive/gallery-poster-trophy.png",
      caption: "Stripe YSTE 2025 02",
      alt: "Stripe Young Scientist poster and trophy image"
    },
    {
      section: "January 2025 (Stripe Young Scientist 2025)",
      slot: "Stripe YSTE 2025 03",
      src: "assets/traffic-signal/gallery-stripe-bootcamp-team.png",
      caption: "Stripe YSTE 2025 03",
      alt: "Stripe Young Scientist bootcamp team image"
    },
    {
      section: "2024 archive",
      slot: "2024 01",
      src: "assets/pocket-doc/coolest-projects-global.jpg",
      caption: "2024 01",
      alt: "Coolest Projects Global image"
    },
    {
      section: "2024 archive",
      slot: "2024 02",
      src: "assets/pocket-doc/coolest-projects-favourites.jpg",
      caption: "2024 02",
      alt: "Coolest Projects judges favourite image"
    },
    {
      section: "2024 archive",
      slot: "2024 03",
      src: "assets/neurocognitive/gallery-walton-club.png",
      caption: "2024 03",
      alt: "Trinity Walton Club image"
    },
    {
      section: "2024 archive",
      slot: "2024 04",
      src: "assets/ireland-wind-change/gallery-google-panel-wide.png",
      caption: "2024 04",
      alt: "Google panel wide image"
    },
    {
      section: "2024 archive",
      slot: "2024 05",
      src: "assets/ireland-wind-change/gallery-embassy-book.png",
      caption: "2024 05",
      alt: "Embassy book event image"
    },
    {
      section: "2024 archive",
      slot: "2024 06",
      src: "assets/traffic-signal/gallery-eflow-award.png",
      caption: "2024 06",
      alt: "eFlow award image"
    },
    {
      section: "2024 archive",
      slot: "2024 07",
      src: "assets/traffic-signal/gallery-tecs-award.png",
      caption: "2024 07",
      alt: "TECS award image"
    }
  ];

  const normalize = (value) => value.trim().replace(/\s+/g, " ").toLowerCase();

  const getSlotSection = (slot) =>
    slot.closest(".gallery-set")?.querySelector("h3")?.textContent?.trim() ?? "";

  const getSlotLabel = (slot) =>
    slot.querySelector("span")?.textContent?.trim() ?? "";

  const findEntryForSlot = (section, slotLabel) =>
    galleryEntries.find(
      (entry) =>
        normalize(entry.section) === normalize(section) &&
        normalize(entry.slot) === normalize(slotLabel)
    );

  const loadImage = (slot, entry) => {
    if (!entry?.src || slot.dataset.galleryLoaded === "true") return;
    slot.dataset.galleryLoaded = "true";

    const image = new Image();
    image.onload = () => {
      image.alt = entry.alt || entry.caption || entry.slot;
      image.loading = "lazy";
      image.decoding = "async";
      slot.classList.add("has-image");
      slot.prepend(image);
    };
    image.onerror = () => {
      image.remove();
      slot.classList.remove("has-image");
    };
    image.src = entry.src;
  };

  const prepareSlot = (slot) => {
    const entry = findEntryForSlot(getSlotSection(slot), getSlotLabel(slot));
    loadImage(slot, entry);
  };

  const slotsWithImages = [...document.querySelectorAll(".gallery-placeholder")].filter(
    (slot) => findEntryForSlot(getSlotSection(slot), getSlotLabel(slot))
  );

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          observer.unobserve(entry.target);
          prepareSlot(entry.target);
        });
      },
      { rootMargin: "360px 0px" }
    );

    slotsWithImages.forEach((slot) => observer.observe(slot));
    return;
  }

  slotsWithImages.forEach(prepareSlot);
})();
