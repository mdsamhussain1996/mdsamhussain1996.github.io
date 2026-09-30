// js/publications.js
// ─────────────────────────────────────────────────────────────────────────────
// Research publications data of Dr. Md Samshad Hussain Ansari.
// ─────────────────────────────────────────────────────────────────────────────

const PUBLICATIONS = [
  // ── JOURNAL ARTICLE 1 ──────────────────────────────────────────────────────
  {
    id: "p1",
    title: "Controllability of Prabhakar fractional dynamical systems",
    authors: "**Md Samshad Hussain Ansari**, Muslim Malik, Dumitru Baleanu",
    journal: "Qualitative Theory of Dynamical Systems 23(2), 1–28 (2024)",
    year: 2024,
    doi: "10.1007/s12346-023-00919-4",
    topics: ["fractional", "control"],
    selected: true,
    abstract: "This paper investigates the controllability of nonlinear fractional dynamical systems involving the Prabhakar fractional derivative with Mittag-Leffler kernels. Using fractional calculus, semigroup theory, and fixed-point theorems, sufficient conditions for exact controllability are established and validated through practical examples.",
    bibtex: `@article{ansari2024prabhakar,
  title   = {Controllability of Prabhakar fractional dynamical systems},
  author  = {Ansari, Md Samshad Hussain and Malik, Muslim and Baleanu, Dumitru},
  journal = {Qualitative Theory of Dynamical Systems},
  year    = {2024},
  volume  = {23},
  number  = {2},
  pages   = {1--28},
  doi     = {10.1007/s12346-023-00919-4}
}`
  },

  // ── JOURNAL ARTICLE 2 ──────────────────────────────────────────────────────
  {
    id: "p2",
    title: "Projective synchronization of fractional-order quaternion-valued uncertain competitive neural networks",
    authors: "**Md Samshad Hussain Ansari**, Muslim Malik",
    journal: "Chinese Journal of Physics 88, 740–755 (2024)",
    year: 2024,
    doi: "10.1016/j.cjph.2024.02.032",
    topics: ["fractional", "neural-networks", "synchronization"],
    selected: true,
    abstract: "This article addresses the projective synchronization problem for fractional-order quaternion-valued competitive neural networks with parameter uncertainties. By decomposing the quaternion systems into four real-valued sub-networks and designing robust feedback controllers, projective synchronization criteria are established via fractional Lyapunov stability theory.",
    bibtex: `@article{ansari2024competitive,
  title   = {Projective synchronization of fractional-order quaternion-valued uncertain competitive neural networks},
  author  = {Ansari, Md Samshad Hussain and Malik, Muslim},
  journal = {Chinese Journal of Physics},
  year    = {2024},
  volume  = {88},
  pages   = {740--755},
  doi     = {10.1016/j.cjph.2024.02.032}
}`
  },

  // ── JOURNAL ARTICLE 3 ──────────────────────────────────────────────────────
  {
    id: "p3",
    title: "Finite-time synchronization of fractional-order uncertain quaternion-valued neural networks via sliding mode control",
    authors: "**Md Samshad Hussain Ansari**, Muslim Malik",
    journal: "International Journal of Computer Mathematics 101(7), 750–767 (2024)",
    year: 2024,
    doi: "10.1080/00207160.2024.2383198",
    topics: ["fractional", "neural-networks", "synchronization", "control"],
    selected: true,
    abstract: "This work designs a fractional sliding mode control strategy to achieve finite-time synchronization for uncertain quaternion-valued neural networks. An appropriate sliding surface in quaternion space is constructed, and reaching conditions are proved ensuring trajectories reach the sliding surface within a predetermined finite settling time.",
    bibtex: `@article{ansari2024sliding,
  title   = {Finite-time synchronization of fractional-order uncertain quaternion-valued neural networks via sliding mode control},
  author  = {Ansari, Md Samshad Hussain and Malik, Muslim},
  journal = {International Journal of Computer Mathematics},
  year    = {2024},
  volume  = {101},
  number  = {7},
  pages   = {750--767},
  doi     = {10.1080/00207160.2024.2383198}
}`
  },

  // ── JOURNAL ARTICLE 4 ──────────────────────────────────────────────────────
  {
    id: "p4",
    title: "Quasi-projective synchronization of nonidentical fractional-order neural networks with inconsistent orders in quaternion field",
    authors: "**Md Samshad Hussain Ansari**, Muslim Malik",
    journal: "Physica Scripta 100(1), 015256 (2024)",
    year: 2024,
    doi: "10.1088/1402-4896/ad9c26",
    topics: ["fractional", "neural-networks", "synchronization"],
    selected: false,
    abstract: "This paper investigates quasi-projective synchronization for nonidentical fractional-order quaternion-valued neural networks possessing inconsistent fractional derivative orders. Error bound estimations and Lyapunov stability conditions are derived without requiring equal derivative orders across drive and response nodes.",
    bibtex: `@article{ansari2024quasiproj,
  title   = {Quasi-projective synchronization of nonidentical fractional-order neural networks with inconsistent orders in quaternion field},
  author  = {Ansari, Md Samshad Hussain and Malik, Muslim},
  journal = {Physica Scripta},
  year    = {2024},
  volume  = {100},
  number  = {1},
  pages   = {015256},
  doi     = {10.1088/1402-4896/ad9c26}
}`
  },

  // ── JOURNAL ARTICLE 5 ──────────────────────────────────────────────────────
  {
    id: "p5",
    title: "Projective synchronization of fractional-order quaternion-valued neural networks with Mittag-Leffler kernel",
    authors: "**Md Samshad Hussain Ansari**, Muslim Malik, Juan J. Nieto",
    journal: "International Journal of General Systems, 1–22 (2025)",
    year: 2025,
    doi: "10.1080/03081079.2025.2457550",
    topics: ["fractional", "neural-networks", "synchronization"],
    selected: true,
    abstract: "Focusing on non-singular kernel fractional derivatives, this study explores projective synchronization for quaternion-valued neural networks governed by the Atangana–Baleanu derivative with Mittag-Leffler kernel. Algebraic conditions and non-commutativity handling mechanisms are formulated via four-dimensional real matrix equivalents.",
    bibtex: `@article{ansari2025mittag,
  title   = {Projective synchronization of fractional-order quaternion-valued neural networks with Mittag-Leffler kernel},
  author  = {Ansari, Md Samshad Hussain and Malik, Muslim and Nieto, Juan J.},
  journal = {International Journal of General Systems},
  year    = {2025},
  pages   = {1--22},
  doi     = {10.1080/03081079.2025.2457550}
}`
  },

  // ── JOURNAL ARTICLE 6 ──────────────────────────────────────────────────────
  {
    id: "p6",
    title: "Controllability of multi-term fractional-order impulsive dynamical systems with φ-Caputo fractional derivative",
    authors: "**Md Samshad Hussain Ansari**, Muslim Malik",
    journal: "Fractional Calculus and Applied Analysis 28, 1040–1070 (2025)",
    year: 2025,
    doi: "10.1007/s13540-025-00393-6",
    topics: ["fractional", "control"],
    selected: true,
    abstract: "This article examines the controllability of multi-term fractional differential equations with impulses and the generalized φ-Caputo fractional derivative. By utilizing generalized Mittag-Leffler functions and fixed-point methodology, rigorous controllability criteria are established for impulsive dynamical systems.",
    bibtex: `@article{ansari2025multiterm,
  title   = {Controllability of multi-term fractional-order impulsive dynamical systems with $\\varphi$-Caputo fractional derivative},
  author  = {Ansari, Md Samshad Hussain and Malik, Muslim},
  journal = {Fractional Calculus and Applied Analysis},
  year    = {2025},
  volume  = {28},
  pages   = {1040--1070},
  doi     = {10.1007/s13540-025-00393-6}
}`
  },

  // ── JOURNAL ARTICLE 7 ──────────────────────────────────────────────────────
  {
    id: "p7",
    title: "Mittag-Leffler and asymptotic adaptive projective synchronization of fractional inertial neural networks in quaternion field",
    authors: "**Md Samshad Hussain Ansari**, Muslim Malik, Juan J. Nieto",
    journal: "The European Physical Journal Plus 140(9), 903 (2025)",
    year: 2025,
    doi: "10.1140/epjp/s13360-025-06840-w",
    topics: ["fractional", "neural-networks", "synchronization", "control"],
    selected: true,
    abstract: "This paper develops adaptive projective synchronization criteria for fractional-order inertial neural networks in the quaternion field. Through a variable transformation to first-order systems, adaptive feedback laws are synthesized without requiring prior knowledge of network parameter bounds.",
    bibtex: `@article{ansari2025inertial,
  title   = {Mittag-Leffler and asymptotic adaptive projective synchronization of fractional inertial neural networks in quaternion field},
  author  = {Ansari, Md Samshad Hussain and Malik, Muslim and Nieto, Juan J.},
  journal = {The European Physical Journal Plus},
  year    = {2025},
  volume  = {140},
  number  = {9},
  pages   = {903},
  doi     = {10.1140/epjp/s13360-025-06840-w}
}`
  },

  // ── BOOK CHAPTER 8 ─────────────────────────────────────────────────────────
  {
    id: "p8",
    title: "Terminal value problem of Prabhakar fractional differential equation",
    authors: "**Md Samshad Hussain Ansari**, Muslim Malik",
    journal: "Continuous and Discrete Dynamics: Theory and Applications, Springer (Accepted, 2025)",
    year: 2025,
    doi: "",
    topics: ["fractional"],
    selected: false,
    abstract: "Book chapter investigating terminal value problems for Prabhakar fractional differential equations, establishing existence, uniqueness, and continuous dependence of solutions on terminal values using fixed-point theorems.",
    bibtex: `@incollection{ansari2025terminal,
  title     = {Terminal value problem of Prabhakar fractional differential equation},
  author    = {Ansari, Md Samshad Hussain and Malik, Muslim},
  booktitle = {Continuous and Discrete Dynamics: Theory and Applications},
  publisher = {Springer},
  year      = {2025},
  note      = {Accepted}
}`
  },

  // ── MANUSCRIPT UNDER REVIEW ───────────────────────────────────────────────
  {
    id: "p9",
    title: "Synchronization of nonidentical quaternion-valued inertial neural networks with different fractional orders using sliding mode control",
    authors: "**Md Samshad Hussain Ansari**",
    journal: "Manuscript Under Review (2025)",
    year: 2025,
    doi: "",
    topics: ["fractional", "neural-networks", "synchronization", "control"],
    selected: false,
    abstract: "Single-authored investigation developing sliding mode controllers for nonidentical quaternion-valued inertial neural networks featuring different fractional derivative orders across dimensions.",
    bibtex: `@article{ansari2025inertialsliding,
  title   = {Synchronization of nonidentical quaternion-valued inertial neural networks with different fractional orders using sliding mode control},
  author  = {Ansari, Md Samshad Hussain},
  journal = {Manuscript Under Review},
  year    = {2025}
}`
  }
];
