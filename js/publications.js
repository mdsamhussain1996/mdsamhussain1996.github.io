// js/publications.js
// ─────────────────────────────────────────────────────────────────────────────
// Publications data array.
// HOW TO ADD A PAPER:
//   1. Copy the template at the bottom of this file.
//   2. Fill in every field (replace TODO placeholders).
//   3. topics: choose from  "fractional" | "neural-networks" | "synchronization" | "control"
//   4. Save the file — the page rebuilds automatically on next load.
// ─────────────────────────────────────────────────────────────────────────────

const PUBLICATIONS = [
  // ── PAPER 1 ────────────────────────────────────────────────────────────────
  {
    id: "p1",
    title: "Synchronization of fractional-order quaternion-valued neural networks with time-varying delays",
    authors: "TODO-COAUTHOR-1, **Md Samshad Hussain Ansari**, Muslim Malik",
    journal: "TODO: Journal Name",
    year: 2024,
    doi: "TODO-DOI-1",
    topics: ["fractional", "neural-networks", "synchronization"],
    selected: true,
    abstract: "TODO: Paste the abstract of this paper here. This paper studies the synchronization problem for fractional-order quaternion-valued neural networks with time-varying delays. By separating the quaternion-valued system into real-valued subsystems and using Lyapunov fractional stability theory, novel synchronization criteria are derived.",
    bibtex: `@article{TODO2024sync,
  title   = {Synchronization of fractional-order quaternion-valued neural networks with time-varying delays},
  author  = {TODO-COAUTHOR-1 and Md Samshad Hussain Ansari and Muslim Malik},
  journal = {TODO: Journal Name},
  year    = {2024},
  volume  = {TODO},
  pages   = {TODO},
  doi     = {TODO-DOI-1}
}`
  },
  // ── PAPER 2 ────────────────────────────────────────────────────────────────
  {
    id: "p2",
    title: "Fixed-time synchronization of quaternion-valued neural networks with application to image encryption",
    authors: "TODO-COAUTHOR-2, **Md Samshad Hussain Ansari**, Muslim Malik",
    journal: "TODO: Journal Name",
    year: 2024,
    doi: "TODO-DOI-2",
    topics: ["neural-networks", "synchronization"],
    selected: true,
    abstract: "TODO: Paste the abstract here. This work investigates fixed-time synchronization for quaternion-valued neural networks and demonstrates an application to secure image encryption using the synchronized chaotic dynamics.",
    bibtex: `@article{TODO2024fixed,
  title   = {Fixed-time synchronization of quaternion-valued neural networks with application to image encryption},
  author  = {TODO-COAUTHOR-2 and Md Samshad Hussain Ansari and Muslim Malik},
  journal = {TODO: Journal Name},
  year    = {2024},
  volume  = {TODO},
  pages   = {TODO},
  doi     = {TODO-DOI-2}
}`
  },
  // ── PAPER 3 ────────────────────────────────────────────────────────────────
  {
    id: "p3",
    title: "Controllability of fractional-order impulsive systems with state-dependent impulses",
    authors: "**Md Samshad Hussain Ansari**, Muslim Malik, Juan J. Nieto",
    journal: "TODO: Journal Name",
    year: 2023,
    doi: "TODO-DOI-3",
    topics: ["fractional", "control"],
    selected: true,
    abstract: "TODO: Paste the abstract here. We study the controllability of a class of fractional-order dynamical systems subject to state-dependent impulses. Sufficient conditions for exact controllability are derived using fixed-point techniques and the theory of fractional calculus.",
    bibtex: `@article{TODO2023ctrl,
  title   = {Controllability of fractional-order impulsive systems with state-dependent impulses},
  author  = {Md Samshad Hussain Ansari and Muslim Malik and Juan J. Nieto},
  journal = {TODO: Journal Name},
  year    = {2023},
  volume  = {TODO},
  pages   = {TODO},
  doi     = {TODO-DOI-3}
}`
  },
  // ── PAPER 4 ────────────────────────────────────────────────────────────────
  {
    id: "p4",
    title: "Projective synchronization of fractional-order quaternion-valued neural networks via adaptive control",
    authors: "**Md Samshad Hussain Ansari**, TODO-COAUTHOR-3, Muslim Malik",
    journal: "TODO: Journal Name",
    year: 2023,
    doi: "TODO-DOI-4",
    topics: ["fractional", "neural-networks", "synchronization", "control"],
    selected: false,
    abstract: "TODO: Paste the abstract here. This article considers projective synchronization of fractional-order quaternion-valued neural networks by designing an adaptive feedback controller. The scaling factor is shown to be controllable, enabling a general synchronization framework.",
    bibtex: `@article{TODO2023proj,
  title   = {Projective synchronization of fractional-order quaternion-valued neural networks via adaptive control},
  author  = {Md Samshad Hussain Ansari and TODO-COAUTHOR-3 and Muslim Malik},
  journal = {TODO: Journal Name},
  year    = {2023},
  volume  = {TODO},
  pages   = {TODO},
  doi     = {TODO-DOI-4}
}`
  },
  // ── PAPER 5 ────────────────────────────────────────────────────────────────
  {
    id: "p5",
    title: "Controllability of second-order impulsive systems in Banach spaces",
    authors: "**Md Samshad Hussain Ansari**, Muslim Malik, Dumitru Baleanu",
    journal: "TODO: Journal Name",
    year: 2022,
    doi: "TODO-DOI-5",
    topics: ["fractional", "control"],
    selected: false,
    abstract: "TODO: Paste the abstract here. The controllability of second-order impulsive differential equations in Banach spaces is examined. Using the cosine family theory and Schauder's fixed-point theorem, sufficient conditions for controllability are established.",
    bibtex: `@article{TODO2022second,
  title   = {Controllability of second-order impulsive systems in Banach spaces},
  author  = {Md Samshad Hussain Ansari and Muslim Malik and Dumitru Baleanu},
  journal = {TODO: Journal Name},
  year    = {2022},
  volume  = {TODO},
  pages   = {TODO},
  doi     = {TODO-DOI-5}
}`
  },
  // ── PAPER 6 ────────────────────────────────────────────────────────────────
  {
    id: "p6",
    title: "Global synchronization of complex networks with fractional-order coupling via feedback control",
    authors: "TODO-COAUTHOR-4, **Md Samshad Hussain Ansari**, Muslim Malik",
    journal: "TODO: Journal Name",
    year: 2022,
    doi: "TODO-DOI-6",
    topics: ["fractional", "synchronization", "control"],
    selected: false,
    abstract: "TODO: Paste the abstract here. We investigate global synchronization of complex dynamical networks with fractional-order coupling. A novel feedback control scheme is designed, and stability conditions are derived using the fractional Lyapunov direct method.",
    bibtex: `@article{TODO2022global,
  title   = {Global synchronization of complex networks with fractional-order coupling via feedback control},
  author  = {TODO-COAUTHOR-4 and Md Samshad Hussain Ansari and Muslim Malik},
  journal = {TODO: Journal Name},
  year    = {2022},
  volume  = {TODO},
  pages   = {TODO},
  doi     = {TODO-DOI-6}
}`
  },
  // ── PAPER 7 ────────────────────────────────────────────────────────────────
  {
    id: "p7",
    title: "Existence and stability results for fractional-order neutral functional differential equations",
    authors: "**Md Samshad Hussain Ansari**, Muslim Malik",
    journal: "TODO: Journal Name",
    year: 2021,
    doi: "TODO-DOI-7",
    topics: ["fractional"],
    selected: false,
    abstract: "TODO: Paste the abstract here. Existence, uniqueness, and Ulam–Hyers stability of solutions for a class of fractional-order neutral functional differential equations are established using the Banach contraction principle.",
    bibtex: `@article{TODO2021exist,
  title   = {Existence and stability results for fractional-order neutral functional differential equations},
  author  = {Md Samshad Hussain Ansari and Muslim Malik},
  journal = {TODO: Journal Name},
  year    = {2021},
  volume  = {TODO},
  pages   = {TODO},
  doi     = {TODO-DOI-7}
}`
  },
  /* ───────────────────────── TEMPLATE ─────────────────────────────────────
  {
    id: "p8",                        // unique string id
    title: "TODO: Paper Title",
    authors: "TODO-Author1, **Md Samshad Hussain Ansari**, TODO-Author2",  // ** bold = your name
    journal: "TODO: Journal / Conference Name",
    year: 2025,
    doi: "TODO-DOI",                 // just the DOI string, e.g. "10.1016/j.xxx.yyy"
    topics: ["fractional"],          // array: "fractional" | "neural-networks" | "synchronization" | "control"
    selected: false,                 // set true to feature in Selected Works
    abstract: "TODO: Abstract text.",
    bibtex: `@article{TODO2025,
  title   = {TODO: Paper Title},
  author  = {TODO-Author1 and Md Samshad Hussain Ansari and TODO-Author2},
  journal = {TODO: Journal},
  year    = {2025},
  volume  = {TODO},
  pages   = {TODO},
  doi     = {TODO-DOI}
}`
  },
  ──────────────────────────────────────────────────────────────────────── */
];
