const easyPuzzles = [
  {
    fen: "2r2r2/1p1b3k/3p2R1/3p3P/2nqP3/p1P2P2/PP4Q1/2K4R w - - 0 2",
    correctMoves: [
      {
        from: "g6",
        to: "h6",
        san: "Rh6+"
      },
      {
        from: "g2",
        to: "g6",
        san: "Qg6#"
      },
    ],
    responseMoves: ["Kxh6"],
  },
  {
    fen: "6rk/5R2/2pBp1q1/1p1nP3/1P1P2p1/7P/5Q1K/8 w - - 0 2",
    correctMoves: [
      {
        from: "f2",
        to: "h4",
        san: "Qh4+"
      },
      {
        from: "h4",
        to: "h5",
        san: "Qxh5#"
      },
    ],
    responseMoves: ["Qh5"],
  },
  {
    fen: "1r2r1k1/q3bpp1/p4n1p/2p2P2/8/Q3NP2/PPPRB1PP/2KR4 b - - 1 22",
    correctMoves: [
      {
        from: "c5",
        to: "c4",
        san: "c4"
      },
      {
        from: "e7",
        to: "b4",
        san: "Bb4"
      },
      {
        from: "b8",
        to: "b4",
        san: "Rxb4"
      },
    ],
    responseMoves: ["Qc3", "Qxb4"],
  },
  {
    fen: "3k1r2/1R4R1/p7/q3p2p/3p4/8/2P1KP2/8 w - - 3 30",
    correctMoves: [
      {
        from: "b7",
        to: "b8",
        san: "Rb8#"
      },
    ],
    responseMoves: [],
  },
  {
    fen: "rn1qk2r/pbpp2pp/1p1bp3/4N3/2PPp3/4P2P/PP3PP1/R1BQKB1R w KQkq - 1 2",
    correctMoves: [
      {
        from: "d1",
        to: "h5",
        san: "Qh5+"
      },
      {
        from: "e5",
        to: "g6",
        san: "Nxg6"
      },
      {
        from: "h5",
        to: "h8",
        san: "Qxh8+"
      },
    ],
    responseMoves: ["g6", "hxg6"],
  },
  {
    fen: "r5r1/1p3pqk/p4Q1p/4pn2/P3R1N1/2P4P/1P4P1/2R4K b - - 0 29",
    correctMoves: [
      {
        from: "f5",
        to: "g3",
        san: "Ng3+"
      },
      {
        from: "g3",
        to: "e4",
        san: "Nxe4"
      },
    ],
    responseMoves: ["Kg1"],
  },
  {
    fen: "2r2r2/1p1b3k/3p2R1/3p3P/2nqP3/p1P2P2/PP4Q1/2K4R w - - 0 2",
    correctMoves: [
      {
        from: "g6",
        to: "h6",
        san: "Rh6+"
      },
      {
        from: "g2",
        to: "g6",
        san: "Qg6#"
      },
    ],
    responseMoves: ["Kxh6"],
  },
  {
    fen: "6rk/5R2/2pBp1q1/1p1nP3/1P1P2p1/7P/5Q1K/8 w - - 0 2",
    correctMoves: [
      {
        from: "f2",
        to: "h4",
        san: "Qh4+"
      },
      {
        from: "h4",
        to: "h5",
        san: "Qxh5#"
      },
    ],
    responseMoves: ["Qh5"],
  },
  {
    fen: "1r2r1k1/q3bpp1/p4n1p/2p2P2/8/Q3NP2/PPPRB1PP/2KR4 b - - 1 22",
    correctMoves: [
      {
        from: "c5",
        to: "c4",
        san: "c4"
      },
      {
        from: "e7",
        to: "b4",
        san: "Bb4"
      },
      {
        from: "b8",
        to: "b4",
        san: "Rxb4"
      },
    ],
    responseMoves: ["Qc3", "Qxb4"],
  },
  {
    fen: "3k1r2/1R4R1/p7/q3p2p/3p4/8/2P1KP2/8 w - - 3 30",
    correctMoves: [
      {
        from: "b7",
        to: "b8",
        san: "Rb8#"
      },
    ],
    responseMoves: [],
  },
  {
    fen: "rn1qk2r/pbpp2pp/1p1bp3/4N3/2PPp3/4P2P/PP3PP1/R1BQKB1R w KQkq - 1 2",
    correctMoves: [
      {
        from: "d1",
        to: "h5",
        san: "Qh5+"
      },
      {
        from: "e5",
        to: "g6",
        san: "Nxg6"
      },
      {
        from: "h5",
        to: "h8",
        san: "Qxh8+"
      },
    ],
    responseMoves: ["g6", "hxg6"],
  },
  {
    fen: "r5r1/1p3pqk/p4Q1p/4pn2/P3R1N1/2P4P/1P4P1/2R4K b - - 0 29",
    correctMoves: [
      {
        from: "f5",
        to: "g3",
        san: "Ng3+"
      },
      {
        from: "g3",
        to: "e4",
        san: "Nxe4"
      },
    ],
    responseMoves: ["Kg1"],
  },
  {
    fen: "2r2r2/1p1b3k/3p2R1/3p3P/2nqP3/p1P2P2/PP4Q1/2K4R w - - 0 2",
    correctMoves: [
      {
        from: "g6",
        to: "h6",
        san: "Rh6+"
      },
      {
        from: "g2",
        to: "g6",
        san: "Qg6#"
      },
    ],
    responseMoves: ["Kxh6"],
  },
  {
    fen: "6rk/5R2/2pBp1q1/1p1nP3/1P1P2p1/7P/5Q1K/8 w - - 0 2",
    correctMoves: [
      {
        from: "f2",
        to: "h4",
        san: "Qh4+"
      },
      {
        from: "h4",
        to: "h5",
        san: "Qxh5#"
      },
    ],
    responseMoves: ["Qh5"],
  },
  {
    fen: "1r2r1k1/q3bpp1/p4n1p/2p2P2/8/Q3NP2/PPPRB1PP/2KR4 b - - 1 22",
    correctMoves: [
      {
        from: "c5",
        to: "c4",
        san: "c4"
      },
      {
        from: "e7",
        to: "b4",
        san: "Bb4"
      },
      {
        from: "b8",
        to: "b4",
        san: "Rxb4"
      },
    ],
    responseMoves: ["Qc3", "Qxb4"],
  },
  {
    fen: "3k1r2/1R4R1/p7/q3p2p/3p4/8/2P1KP2/8 w - - 3 30",
    correctMoves: [
      {
        from: "b7",
        to: "b8",
        san: "Rb8#"
      },
    ],
    responseMoves: [],
  },
  {
    fen: "rn1qk2r/pbpp2pp/1p1bp3/4N3/2PPp3/4P2P/PP3PP1/R1BQKB1R w KQkq - 1 2",
    correctMoves: [
      {
        from: "d1",
        to: "h5",
        san: "Qh5+"
      },
      {
        from: "e5",
        to: "g6",
        san: "Nxg6"
      },
      {
        from: "h5",
        to: "h8",
        san: "Qxh8+"
      },
    ],
    responseMoves: ["g6", "hxg6"],
  },
  {
    fen: "r5r1/1p3pqk/p4Q1p/4pn2/P3R1N1/2P4P/1P4P1/2R4K b - - 0 29",
    correctMoves: [
      {
        from: "f5",
        to: "g3",
        san: "Ng3+"
      },
      {
        from: "g3",
        to: "e4",
        san: "Nxe4"
      },
    ],
    responseMoves: ["Kg1"],
  },
  {
    fen: "2r2r2/1p1b3k/3p2R1/3p3P/2nqP3/p1P2P2/PP4Q1/2K4R w - - 0 2",
    correctMoves: [
      {
        from: "g6",
        to: "h6",
        san: "Rh6+"
      },
      {
        from: "g2",
        to: "g6",
        san: "Qg6#"
      },
    ],
    responseMoves: ["Kxh6"],
  },
  {
    fen: "6rk/5R2/2pBp1q1/1p1nP3/1P1P2p1/7P/5Q1K/8 w - - 0 2",
    correctMoves: [
      {
        from: "f2",
        to: "h4",
        san: "Qh4+"
      },
      {
        from: "h4",
        to: "h5",
        san: "Qxh5#"
      },
    ],
    responseMoves: ["Qh5"],
  },
  {
    fen: "1r2r1k1/q3bpp1/p4n1p/2p2P2/8/Q3NP2/PPPRB1PP/2KR4 b - - 1 22",
    correctMoves: [
      {
        from: "c5",
        to: "c4",
        san: "c4"
      },
      {
        from: "e7",
        to: "b4",
        san: "Bb4"
      },
      {
        from: "b8",
        to: "b4",
        san: "Rxb4"
      },
    ],
    responseMoves: ["Qc3", "Qxb4"],
  },
  {
    fen: "3k1r2/1R4R1/p7/q3p2p/3p4/8/2P1KP2/8 w - - 3 30",
    correctMoves: [
      {
        from: "b7",
        to: "b8",
        san: "Rb8#"
      },
    ],
    responseMoves: [],
  },
  {
    fen: "rn1qk2r/pbpp2pp/1p1bp3/4N3/2PPp3/4P2P/PP3PP1/R1BQKB1R w KQkq - 1 2",
    correctMoves: [
      {
        from: "d1",
        to: "h5",
        san: "Qh5+"
      },
      {
        from: "e5",
        to: "g6",
        san: "Nxg6"
      },
      {
        from: "h5",
        to: "h8",
        san: "Qxh8+"
      },
    ],
    responseMoves: ["g6", "hxg6"],
  },
  {
    fen: "r5r1/1p3pqk/p4Q1p/4pn2/P3R1N1/2P4P/1P4P1/2R4K b - - 0 29",
    correctMoves: [
      {
        from: "f5",
        to: "g3",
        san: "Ng3+"
      },
      {
        from: "g3",
        to: "e4",
        san: "Nxe4"
      },
    ],
    responseMoves: ["Kg1"],
  },
  {
    fen: "2r2r2/1p1b3k/3p2R1/3p3P/2nqP3/p1P2P2/PP4Q1/2K4R w - - 0 2",
    correctMoves: [
      {
        from: "g6",
        to: "h6",
        san: "Rh6+"
      },
      {
        from: "g2",
        to: "g6",
        san: "Qg6#"
      },
    ],
    responseMoves: ["Kxh6"],
  },
  {
    fen: "6rk/5R2/2pBp1q1/1p1nP3/1P1P2p1/7P/5Q1K/8 w - - 0 2",
    correctMoves: [
      {
        from: "f2",
        to: "h4",
        san: "Qh4+"
      },
      {
        from: "h4",
        to: "h5",
        san: "Qxh5#"
      },
    ],
    responseMoves: ["Qh5"],
  },
  {
    fen: "1r2r1k1/q3bpp1/p4n1p/2p2P2/8/Q3NP2/PPPRB1PP/2KR4 b - - 1 22",
    correctMoves: [
      {
        from: "c5",
        to: "c4",
        san: "c4"
      },
      {
        from: "e7",
        to: "b4",
        san: "Bb4"
      },
      {
        from: "b8",
        to: "b4",
        san: "Rxb4"
      },
    ],
    responseMoves: ["Qc3", "Qxb4"],
  },
  {
    fen: "3k1r2/1R4R1/p7/q3p2p/3p4/8/2P1KP2/8 w - - 3 30",
    correctMoves: [
      {
        from: "b7",
        to: "b8",
        san: "Rb8#"
      },
    ],
    responseMoves: [],
  },
  {
    fen: "rn1qk2r/pbpp2pp/1p1bp3/4N3/2PPp3/4P2P/PP3PP1/R1BQKB1R w KQkq - 1 2",
    correctMoves: [
      {
        from: "d1",
        to: "h5",
        san: "Qh5+"
      },
      {
        from: "e5",
        to: "g6",
        san: "Nxg6"
      },
      {
        from: "h5",
        to: "h8",
        san: "Qxh8+"
      },
    ],
    responseMoves: ["g6", "hxg6"],
  },
  {
    fen: "r5r1/1p3pqk/p4Q1p/4pn2/P3R1N1/2P4P/1P4P1/2R4K b - - 0 29",
    correctMoves: [
      {
        from: "f5",
        to: "g3",
        san: "Ng3+"
      },
      {
        from: "g3",
        to: "e4",
        san: "Nxe4"
      },
    ],
    responseMoves: ["Kg1"],
  },
  {
    fen: "2r2r2/1p1b3k/3p2R1/3p3P/2nqP3/p1P2P2/PP4Q1/2K4R w - - 0 2",
    correctMoves: [
      {
        from: "g6",
        to: "h6",
        san: "Rh6+"
      },
      {
        from: "g2",
        to: "g6",
        san: "Qg6#"
      },
    ],
    responseMoves: ["Kxh6"],
  },
  {
    fen: "6rk/5R2/2pBp1q1/1p1nP3/1P1P2p1/7P/5Q1K/8 w - - 0 2",
    correctMoves: [
      {
        from: "f2",
        to: "h4",
        san: "Qh4+"
      },
      {
        from: "h4",
        to: "h5",
        san: "Qxh5#"
      },
    ],
    responseMoves: ["Qh5"],
  },
  {
    fen: "1r2r1k1/q3bpp1/p4n1p/2p2P2/8/Q3NP2/PPPRB1PP/2KR4 b - - 1 22",
    correctMoves: [
      {
        from: "c5",
        to: "c4",
        san: "c4"
      },
      {
        from: "e7",
        to: "b4",
        san: "Bb4"
      },
      {
        from: "b8",
        to: "b4",
        san: "Rxb4"
      },
    ],
    responseMoves: ["Qc3", "Qxb4"],
  },
  {
    fen: "3k1r2/1R4R1/p7/q3p2p/3p4/8/2P1KP2/8 w - - 3 30",
    correctMoves: [
      {
        from: "b7",
        to: "b8",
        san: "Rb8#"
      },
    ],
    responseMoves: [],
  },
  {
    fen: "rn1qk2r/pbpp2pp/1p1bp3/4N3/2PPp3/4P2P/PP3PP1/R1BQKB1R w KQkq - 1 2",
    correctMoves: [
      {
        from: "d1",
        to: "h5",
        san: "Qh5+"
      },
      {
        from: "e5",
        to: "g6",
        san: "Nxg6"
      },
      {
        from: "h5",
        to: "h8",
        san: "Qxh8+"
      },
    ],
    responseMoves: ["g6", "hxg6"],
  },
  {
    fen: "r5r1/1p3pqk/p4Q1p/4pn2/P3R1N1/2P4P/1P4P1/2R4K b - - 0 29",
    correctMoves: [
      {
        from: "f5",
        to: "g3",
        san: "Ng3+"
      },
      {
        from: "g3",
        to: "e4",
        san: "Nxe4"
      },
    ],
    responseMoves: ["Kg1"],
  },
  {
    fen: "2r2r2/1p1b3k/3p2R1/3p3P/2nqP3/p1P2P2/PP4Q1/2K4R w - - 0 2",
    correctMoves: [
      {
        from: "g6",
        to: "h6",
        san: "Rh6+"
      },
      {
        from: "g2",
        to: "g6",
        san: "Qg6#"
      },
    ],
    responseMoves: ["Kxh6"],
  },
  {
    fen: "6rk/5R2/2pBp1q1/1p1nP3/1P1P2p1/7P/5Q1K/8 w - - 0 2",
    correctMoves: [
      {
        from: "f2",
        to: "h4",
        san: "Qh4+"
      },
      {
        from: "h4",
        to: "h5",
        san: "Qxh5#"
      },
    ],
    responseMoves: ["Qh5"],
  },
  {
    fen: "1r2r1k1/q3bpp1/p4n1p/2p2P2/8/Q3NP2/PPPRB1PP/2KR4 b - - 1 22",
    correctMoves: [
      {
        from: "c5",
        to: "c4",
        san: "c4"
      },
      {
        from: "e7",
        to: "b4",
        san: "Bb4"
      },
      {
        from: "b8",
        to: "b4",
        san: "Rxb4"
      },
    ],
    responseMoves: ["Qc3", "Qxb4"],
  },
  {
    fen: "3k1r2/1R4R1/p7/q3p2p/3p4/8/2P1KP2/8 w - - 3 30",
    correctMoves: [
      {
        from: "b7",
        to: "b8",
        san: "Rb8#"
      },
    ],
    responseMoves: [],
  },
  {
    fen: "rn1qk2r/pbpp2pp/1p1bp3/4N3/2PPp3/4P2P/PP3PP1/R1BQKB1R w KQkq - 1 2",
    correctMoves: [
      {
        from: "d1",
        to: "h5",
        san: "Qh5+"
      },
      {
        from: "e5",
        to: "g6",
        san: "Nxg6"
      },
      {
        from: "h5",
        to: "h8",
        san: "Qxh8+"
      },
    ],
    responseMoves: ["g6", "hxg6"],
  },
  {
    fen: "r5r1/1p3pqk/p4Q1p/4pn2/P3R1N1/2P4P/1P4P1/2R4K b - - 0 29",
    correctMoves: [
      {
        from: "f5",
        to: "g3",
        san: "Ng3+"
      },
      {
        from: "g3",
        to: "e4",
        san: "Nxe4"
      },
    ],
    responseMoves: ["Kg1"],
  },
  {
    fen: "2r2r2/1p1b3k/3p2R1/3p3P/2nqP3/p1P2P2/PP4Q1/2K4R w - - 0 2",
    correctMoves: [
      {
        from: "g6",
        to: "h6",
        san: "Rh6+"
      },
      {
        from: "g2",
        to: "g6",
        san: "Qg6#"
      },
    ],
    responseMoves: ["Kxh6"],
  },
  {
    fen: "6rk/5R2/2pBp1q1/1p1nP3/1P1P2p1/7P/5Q1K/8 w - - 0 2",
    correctMoves: [
      {
        from: "f2",
        to: "h4",
        san: "Qh4+"
      },
      {
        from: "h4",
        to: "h5",
        san: "Qxh5#"
      },
    ],
    responseMoves: ["Qh5"],
  },
  {
    fen: "1r2r1k1/q3bpp1/p4n1p/2p2P2/8/Q3NP2/PPPRB1PP/2KR4 b - - 1 22",
    correctMoves: [
      {
        from: "c5",
        to: "c4",
        san: "c4"
      },
      {
        from: "e7",
        to: "b4",
        san: "Bb4"
      },
      {
        from: "b8",
        to: "b4",
        san: "Rxb4"
      },
    ],
    responseMoves: ["Qc3", "Qxb4"],
  },
  {
    fen: "3k1r2/1R4R1/p7/q3p2p/3p4/8/2P1KP2/8 w - - 3 30",
    correctMoves: [
      {
        from: "b7",
        to: "b8",
        san: "Rb8#"
      },
    ],
    responseMoves: [],
  },
  {
    fen: "rn1qk2r/pbpp2pp/1p1bp3/4N3/2PPp3/4P2P/PP3PP1/R1BQKB1R w KQkq - 1 2",
    correctMoves: [
      {
        from: "d1",
        to: "h5",
        san: "Qh5+"
      },
      {
        from: "e5",
        to: "g6",
        san: "Nxg6"
      },
      {
        from: "h5",
        to: "h8",
        san: "Qxh8+"
      },
    ],
    responseMoves: ["g6", "hxg6"],
  },
  {
    fen: "r5r1/1p3pqk/p4Q1p/4pn2/P3R1N1/2P4P/1P4P1/2R4K b - - 0 29",
    correctMoves: [
      {
        from: "f5",
        to: "g3",
        san: "Ng3+"
      },
      {
        from: "g3",
        to: "e4",
        san: "Nxe4"
      },
    ],
    responseMoves: ["Kg1"],
  },
  {
    fen: "2r2r2/1p1b3k/3p2R1/3p3P/2nqP3/p1P2P2/PP4Q1/2K4R w - - 0 2",
    correctMoves: [
      {
        from: "g6",
        to: "h6",
        san: "Rh6+"
      },
      {
        from: "g2",
        to: "g6",
        san: "Qg6#"
      },
    ],
    responseMoves: ["Kxh6"],
  },
  {
    fen: "6rk/5R2/2pBp1q1/1p1nP3/1P1P2p1/7P/5Q1K/8 w - - 0 2",
    correctMoves: [
      {
        from: "f2",
        to: "h4",
        san: "Qh4+"
      },
      {
        from: "h4",
        to: "h5",
        san: "Qxh5#"
      },
    ],
    responseMoves: ["Qh5"],
  },
  {
    fen: "1r2r1k1/q3bpp1/p4n1p/2p2P2/8/Q3NP2/PPPRB1PP/2KR4 b - - 1 22",
    correctMoves: [
      {
        from: "c5",
        to: "c4",
        san: "c4"
      },
      {
        from: "e7",
        to: "b4",
        san: "Bb4"
      },
      {
        from: "b8",
        to: "b4",
        san: "Rxb4"
      },
    ],
    responseMoves: ["Qc3", "Qxb4"],
  },
  {
    fen: "3k1r2/1R4R1/p7/q3p2p/3p4/8/2P1KP2/8 w - - 3 30",
    correctMoves: [
      {
        from: "b7",
        to: "b8",
        san: "Rb8#"
      },
    ],
    responseMoves: [],
  },
  {
    fen: "rn1qk2r/pbpp2pp/1p1bp3/4N3/2PPp3/4P2P/PP3PP1/R1BQKB1R w KQkq - 1 2",
    correctMoves: [
      {
        from: "d1",
        to: "h5",
        san: "Qh5+"
      },
      {
        from: "e5",
        to: "g6",
        san: "Nxg6"
      },
      {
        from: "h5",
        to: "h8",
        san: "Qxh8+"
      },
    ],
    responseMoves: ["g6", "hxg6"],
  },
  {
    fen: "r5r1/1p3pqk/p4Q1p/4pn2/P3R1N1/2P4P/1P4P1/2R4K b - - 0 29",
    correctMoves: [
      {
        from: "f5",
        to: "g3",
        san: "Ng3+"
      },
      {
        from: "g3",
        to: "e4",
        san: "Nxe4"
      },
    ],
    responseMoves: ["Kg1"],
  },
  {
    fen: "2r2r2/1p1b3k/3p2R1/3p3P/2nqP3/p1P2P2/PP4Q1/2K4R w - - 0 2",
    correctMoves: [
      {
        from: "g6",
        to: "h6",
        san: "Rh6+"
      },
      {
        from: "g2",
        to: "g6",
        san: "Qg6#"
      },
    ],
    responseMoves: ["Kxh6"],
  },
  {
    fen: "6rk/5R2/2pBp1q1/1p1nP3/1P1P2p1/7P/5Q1K/8 w - - 0 2",
    correctMoves: [
      {
        from: "f2",
        to: "h4",
        san: "Qh4+"
      },
      {
        from: "h4",
        to: "h5",
        san: "Qxh5#"
      },
    ],
    responseMoves: ["Qh5"],
  },
  {
    fen: "1r2r1k1/q3bpp1/p4n1p/2p2P2/8/Q3NP2/PPPRB1PP/2KR4 b - - 1 22",
    correctMoves: [
      {
        from: "c5",
        to: "c4",
        san: "c4"
      },
      {
        from: "e7",
        to: "b4",
        san: "Bb4"
      },
      {
        from: "b8",
        to: "b4",
        san: "Rxb4"
      },
    ],
    responseMoves: ["Qc3", "Qxb4"],
  },
  {
    fen: "3k1r2/1R4R1/p7/q3p2p/3p4/8/2P1KP2/8 w - - 3 30",
    correctMoves: [
      {
        from: "b7",
        to: "b8",
        san: "Rb8#"
      },
    ],
    responseMoves: [],
  },
  {
    fen: "rn1qk2r/pbpp2pp/1p1bp3/4N3/2PPp3/4P2P/PP3PP1/R1BQKB1R w KQkq - 1 2",
    correctMoves: [
      {
        from: "d1",
        to: "h5",
        san: "Qh5+"
      },
      {
        from: "e5",
        to: "g6",
        san: "Nxg6"
      },
      {
        from: "h5",
        to: "h8",
        san: "Qxh8+"
      },
    ],
    responseMoves: ["g6", "hxg6"],
  },
  {
    fen: "r5r1/1p3pqk/p4Q1p/4pn2/P3R1N1/2P4P/1P4P1/2R4K b - - 0 29",
    correctMoves: [
      {
        from: "f5",
        to: "g3",
        san: "Ng3+"
      },
      {
        from: "g3",
        to: "e4",
        san: "Nxe4"
      },
    ],
    responseMoves: ["Kg1"],
  },
  {
    fen: "2r2r2/1p1b3k/3p2R1/3p3P/2nqP3/p1P2P2/PP4Q1/2K4R w - - 0 2",
    correctMoves: [
      {
        from: "g6",
        to: "h6",
        san: "Rh6+"
      },
      {
        from: "g2",
        to: "g6",
        san: "Qg6#"
      },
    ],
    responseMoves: ["Kxh6"],
  },
  {
    fen: "6rk/5R2/2pBp1q1/1p1nP3/1P1P2p1/7P/5Q1K/8 w - - 0 2",
    correctMoves: [
      {
        from: "f2",
        to: "h4",
        san: "Qh4+"
      },
      {
        from: "h4",
        to: "h5",
        san: "Qxh5#"
      },
    ],
    responseMoves: ["Qh5"],
  },
  {
    fen: "1r2r1k1/q3bpp1/p4n1p/2p2P2/8/Q3NP2/PPPRB1PP/2KR4 b - - 1 22",
    correctMoves: [
      {
        from: "c5",
        to: "c4",
        san: "c4"
      },
      {
        from: "e7",
        to: "b4",
        san: "Bb4"
      },
      {
        from: "b8",
        to: "b4",
        san: "Rxb4"
      },
    ],
    responseMoves: ["Qc3", "Qxb4"],
  },
  {
    fen: "3k1r2/1R4R1/p7/q3p2p/3p4/8/2P1KP2/8 w - - 3 30",
    correctMoves: [
      {
        from: "b7",
        to: "b8",
        san: "Rb8#"
      },
    ],
    responseMoves: [],
  },
  {
    fen: "rn1qk2r/pbpp2pp/1p1bp3/4N3/2PPp3/4P2P/PP3PP1/R1BQKB1R w KQkq - 1 2",
    correctMoves: [
      {
        from: "d1",
        to: "h5",
        san: "Qh5+"
      },
      {
        from: "e5",
        to: "g6",
        san: "Nxg6"
      },
      {
        from: "h5",
        to: "h8",
        san: "Qxh8+"
      },
    ],
    responseMoves: ["g6", "hxg6"],
  },
  {
    fen: "r5r1/1p3pqk/p4Q1p/4pn2/P3R1N1/2P4P/1P4P1/2R4K b - - 0 29",
    correctMoves: [
      {
        from: "f5",
        to: "g3",
        san: "Ng3+"
      },
      {
        from: "g3",
        to: "e4",
        san: "Nxe4"
      },
    ],
    responseMoves: ["Kg1"],
  },
  {
    fen: "2r2r2/1p1b3k/3p2R1/3p3P/2nqP3/p1P2P2/PP4Q1/2K4R w - - 0 2",
    correctMoves: [
      {
        from: "g6",
        to: "h6",
        san: "Rh6+"
      },
      {
        from: "g2",
        to: "g6",
        san: "Qg6#"
      },
    ],
    responseMoves: ["Kxh6"],
  },
  {
    fen: "6rk/5R2/2pBp1q1/1p1nP3/1P1P2p1/7P/5Q1K/8 w - - 0 2",
    correctMoves: [
      {
        from: "f2",
        to: "h4",
        san: "Qh4+"
      },
      {
        from: "h4",
        to: "h5",
        san: "Qxh5#"
      },
    ],
    responseMoves: ["Qh5"],
  },
  {
    fen: "1r2r1k1/q3bpp1/p4n1p/2p2P2/8/Q3NP2/PPPRB1PP/2KR4 b - - 1 22",
    correctMoves: [
      {
        from: "c5",
        to: "c4",
        san: "c4"
      },
      {
        from: "e7",
        to: "b4",
        san: "Bb4"
      },
      {
        from: "b8",
        to: "b4",
        san: "Rxb4"
      },
    ],
    responseMoves: ["Qc3", "Qxb4"],
  },
  {
    fen: "3k1r2/1R4R1/p7/q3p2p/3p4/8/2P1KP2/8 w - - 3 30",
    correctMoves: [
      {
        from: "b7",
        to: "b8",
        san: "Rb8#"
      },
    ],
    responseMoves: [],
  },
  {
    fen: "rn1qk2r/pbpp2pp/1p1bp3/4N3/2PPp3/4P2P/PP3PP1/R1BQKB1R w KQkq - 1 2",
    correctMoves: [
      {
        from: "d1",
        to: "h5",
        san: "Qh5+"
      },
      {
        from: "e5",
        to: "g6",
        san: "Nxg6"
      },
      {
        from: "h5",
        to: "h8",
        san: "Qxh8+"
      },
    ],
    responseMoves: ["g6", "hxg6"],
  },
  {
    fen: "r5r1/1p3pqk/p4Q1p/4pn2/P3R1N1/2P4P/1P4P1/2R4K b - - 0 29",
    correctMoves: [
      {
        from: "f5",
        to: "g3",
        san: "Ng3+"
      },
      {
        from: "g3",
        to: "e4",
        san: "Nxe4"
      },
    ],
    responseMoves: ["Kg1"],
  },
  {
    fen: "2r2r2/1p1b3k/3p2R1/3p3P/2nqP3/p1P2P2/PP4Q1/2K4R w - - 0 2",
    correctMoves: [
      {
        from: "g6",
        to: "h6",
        san: "Rh6+"
      },
      {
        from: "g2",
        to: "g6",
        san: "Qg6#"
      },
    ],
    responseMoves: ["Kxh6"],
  },
  {
    fen: "6rk/5R2/2pBp1q1/1p1nP3/1P1P2p1/7P/5Q1K/8 w - - 0 2",
    correctMoves: [
      {
        from: "f2",
        to: "h4",
        san: "Qh4+"
      },
      {
        from: "h4",
        to: "h5",
        san: "Qxh5#"
      },
    ],
    responseMoves: ["Qh5"],
  },
  {
    fen: "1r2r1k1/q3bpp1/p4n1p/2p2P2/8/Q3NP2/PPPRB1PP/2KR4 b - - 1 22",
    correctMoves: [
      {
        from: "c5",
        to: "c4",
        san: "c4"
      },
      {
        from: "e7",
        to: "b4",
        san: "Bb4"
      },
      {
        from: "b8",
        to: "b4",
        san: "Rxb4"
      },
    ],
    responseMoves: ["Qc3", "Qxb4"],
  },
  {
    fen: "3k1r2/1R4R1/p7/q3p2p/3p4/8/2P1KP2/8 w - - 3 30",
    correctMoves: [
      {
        from: "b7",
        to: "b8",
        san: "Rb8#"
      },
    ],
    responseMoves: [],
  },
  {
    fen: "rn1qk2r/pbpp2pp/1p1bp3/4N3/2PPp3/4P2P/PP3PP1/R1BQKB1R w KQkq - 1 2",
    correctMoves: [
      {
        from: "d1",
        to: "h5",
        san: "Qh5+"
      },
      {
        from: "e5",
        to: "g6",
        san: "Nxg6"
      },
      {
        from: "h5",
        to: "h8",
        san: "Qxh8+"
      },
    ],
    responseMoves: ["g6", "hxg6"],
  },
  {
    fen: "r5r1/1p3pqk/p4Q1p/4pn2/P3R1N1/2P4P/1P4P1/2R4K b - - 0 29",
    correctMoves: [
      {
        from: "f5",
        to: "g3",
        san: "Ng3+"
      },
      {
        from: "g3",
        to: "e4",
        san: "Nxe4"
      },
    ],
    responseMoves: ["Kg1"],
  },
  {
    fen: "2r2r2/1p1b3k/3p2R1/3p3P/2nqP3/p1P2P2/PP4Q1/2K4R w - - 0 2",
    correctMoves: [
      {
        from: "g6",
        to: "h6",
        san: "Rh6+"
      },
      {
        from: "g2",
        to: "g6",
        san: "Qg6#"
      },
    ],
    responseMoves: ["Kxh6"],
  },
  {
    fen: "6rk/5R2/2pBp1q1/1p1nP3/1P1P2p1/7P/5Q1K/8 w - - 0 2",
    correctMoves: [
      {
        from: "f2",
        to: "h4",
        san: "Qh4+"
      },
      {
        from: "h4",
        to: "h5",
        san: "Qxh5#"
      },
    ],
    responseMoves: ["Qh5"],
  },
  {
    fen: "1r2r1k1/q3bpp1/p4n1p/2p2P2/8/Q3NP2/PPPRB1PP/2KR4 b - - 1 22",
    correctMoves: [
      {
        from: "c5",
        to: "c4",
        san: "c4"
      },
      {
        from: "e7",
        to: "b4",
        san: "Bb4"
      },
      {
        from: "b8",
        to: "b4",
        san: "Rxb4"
      },
    ],
    responseMoves: ["Qc3", "Qxb4"],
  },
  {
    fen: "3k1r2/1R4R1/p7/q3p2p/3p4/8/2P1KP2/8 w - - 3 30",
    correctMoves: [
      {
        from: "b7",
        to: "b8",
        san: "Rb8#"
      },
    ],
    responseMoves: [],
  },
  {
    fen: "rn1qk2r/pbpp2pp/1p1bp3/4N3/2PPp3/4P2P/PP3PP1/R1BQKB1R w KQkq - 1 2",
    correctMoves: [
      {
        from: "d1",
        to: "h5",
        san: "Qh5+"
      },
      {
        from: "e5",
        to: "g6",
        san: "Nxg6"
      },
      {
        from: "h5",
        to: "h8",
        san: "Qxh8+"
      },
    ],
    responseMoves: ["g6", "hxg6"],
  },
  {
    fen: "r5r1/1p3pqk/p4Q1p/4pn2/P3R1N1/2P4P/1P4P1/2R4K b - - 0 29",
    correctMoves: [
      {
        from: "f5",
        to: "g3",
        san: "Ng3+"
      },
      {
        from: "g3",
        to: "e4",
        san: "Nxe4"
      },
    ],
    responseMoves: ["Kg1"],
  },
  {
    fen: "2r2r2/1p1b3k/3p2R1/3p3P/2nqP3/p1P2P2/PP4Q1/2K4R w - - 0 2",
    correctMoves: [
      {
        from: "g6",
        to: "h6",
        san: "Rh6+"
      },
      {
        from: "g2",
        to: "g6",
        san: "Qg6#"
      },
    ],
    responseMoves: ["Kxh6"],
  },
  {
    fen: "6rk/5R2/2pBp1q1/1p1nP3/1P1P2p1/7P/5Q1K/8 w - - 0 2",
    correctMoves: [
      {
        from: "f2",
        to: "h4",
        san: "Qh4+"
      },
      {
        from: "h4",
        to: "h5",
        san: "Qxh5#"
      },
    ],
    responseMoves: ["Qh5"],
  },
  {
    fen: "1r2r1k1/q3bpp1/p4n1p/2p2P2/8/Q3NP2/PPPRB1PP/2KR4 b - - 1 22",
    correctMoves: [
      {
        from: "c5",
        to: "c4",
        san: "c4"
      },
      {
        from: "e7",
        to: "b4",
        san: "Bb4"
      },
      {
        from: "b8",
        to: "b4",
        san: "Rxb4"
      },
    ],
    responseMoves: ["Qc3", "Qxb4"],
  },
  {
    fen: "3k1r2/1R4R1/p7/q3p2p/3p4/8/2P1KP2/8 w - - 3 30",
    correctMoves: [
      {
        from: "b7",
        to: "b8",
        san: "Rb8#"
      },
    ],
    responseMoves: [],
  },
  {
    fen: "rn1qk2r/pbpp2pp/1p1bp3/4N3/2PPp3/4P2P/PP3PP1/R1BQKB1R w KQkq - 1 2",
    correctMoves: [
      {
        from: "d1",
        to: "h5",
        san: "Qh5+"
      },
      {
        from: "e5",
        to: "g6",
        san: "Nxg6"
      },
      {
        from: "h5",
        to: "h8",
        san: "Qxh8+"
      },
    ],
    responseMoves: ["g6", "hxg6"],
  },
  {
    fen: "r5r1/1p3pqk/p4Q1p/4pn2/P3R1N1/2P4P/1P4P1/2R4K b - - 0 29",
    correctMoves: [
      {
        from: "f5",
        to: "g3",
        san: "Ng3+"
      },
      {
        from: "g3",
        to: "e4",
        san: "Nxe4"
      },
    ],
    responseMoves: ["Kg1"],
  },
  {
    fen: "2r2r2/1p1b3k/3p2R1/3p3P/2nqP3/p1P2P2/PP4Q1/2K4R w - - 0 2",
    correctMoves: [
      {
        from: "g6",
        to: "h6",
        san: "Rh6+"
      },
      {
        from: "g2",
        to: "g6",
        san: "Qg6#"
      },
    ],
    responseMoves: ["Kxh6"],
  },
  {
    fen: "6rk/5R2/2pBp1q1/1p1nP3/1P1P2p1/7P/5Q1K/8 w - - 0 2",
    correctMoves: [
      {
        from: "f2",
        to: "h4",
        san: "Qh4+"
      },
      {
        from: "h4",
        to: "h5",
        san: "Qxh5#"
      },
    ],
    responseMoves: ["Qh5"],
  },
  {
    fen: "1r2r1k1/q3bpp1/p4n1p/2p2P2/8/Q3NP2/PPPRB1PP/2KR4 b - - 1 22",
    correctMoves: [
      {
        from: "c5",
        to: "c4",
        san: "c4"
      },
      {
        from: "e7",
        to: "b4",
        san: "Bb4"
      },
      {
        from: "b8",
        to: "b4",
        san: "Rxb4"
      },
    ],
    responseMoves: ["Qc3", "Qxb4"],
  },
  {
    fen: "3k1r2/1R4R1/p7/q3p2p/3p4/8/2P1KP2/8 w - - 3 30",
    correctMoves: [
      {
        from: "b7",
        to: "b8",
        san: "Rb8#"
      },
    ],
    responseMoves: [],
  },
  {
    fen: "rn1qk2r/pbpp2pp/1p1bp3/4N3/2PPp3/4P2P/PP3PP1/R1BQKB1R w KQkq - 1 2",
    correctMoves: [
      {
        from: "d1",
        to: "h5",
        san: "Qh5+"
      },
      {
        from: "e5",
        to: "g6",
        san: "Nxg6"
      },
      {
        from: "h5",
        to: "h8",
        san: "Qxh8+"
      },
    ],
    responseMoves: ["g6", "hxg6"],
  },
  {
    fen: "r5r1/1p3pqk/p4Q1p/4pn2/P3R1N1/2P4P/1P4P1/2R4K b - - 0 29",
    correctMoves: [
      {
        from: "f5",
        to: "g3",
        san: "Ng3+"
      },
      {
        from: "g3",
        to: "e4",
        san: "Nxe4"
      },
    ],
    responseMoves: ["Kg1"],
  },
  {
    fen: "2r2r2/1p1b3k/3p2R1/3p3P/2nqP3/p1P2P2/PP4Q1/2K4R w - - 0 2",
    correctMoves: [
      {
        from: "g6",
        to: "h6",
        san: "Rh6+"
      },
      {
        from: "g2",
        to: "g6",
        san: "Qg6#"
      },
    ],
    responseMoves: ["Kxh6"],
  },
  {
    fen: "6rk/5R2/2pBp1q1/1p1nP3/1P1P2p1/7P/5Q1K/8 w - - 0 2",
    correctMoves: [
      {
        from: "f2",
        to: "h4",
        san: "Qh4+"
      },
      {
        from: "h4",
        to: "h5",
        san: "Qxh5#"
      },
    ],
    responseMoves: ["Qh5"],
  },
  {
    fen: "1r2r1k1/q3bpp1/p4n1p/2p2P2/8/Q3NP2/PPPRB1PP/2KR4 b - - 1 22",
    correctMoves: [
      {
        from: "c5",
        to: "c4",
        san: "c4"
      },
      {
        from: "e7",
        to: "b4",
        san: "Bb4"
      },
      {
        from: "b8",
        to: "b4",
        san: "Rxb4"
      },
    ],
    responseMoves: ["Qc3", "Qxb4"],
  },
  {
    fen: "3k1r2/1R4R1/p7/q3p2p/3p4/8/2P1KP2/8 w - - 3 30",
    correctMoves: [
      {
        from: "b7",
        to: "b8",
        san: "Rb8#"
      },
    ],
    responseMoves: [],
  },
  {
    fen: "rn1qk2r/pbpp2pp/1p1bp3/4N3/2PPp3/4P2P/PP3PP1/R1BQKB1R w KQkq - 1 2",
    correctMoves: [
      {
        from: "d1",
        to: "h5",
        san: "Qh5+"
      },
      {
        from: "e5",
        to: "g6",
        san: "Nxg6"
      },
      {
        from: "h5",
        to: "h8",
        san: "Qxh8+"
      },
    ],
    responseMoves: ["g6", "hxg6"],
  },
  {
    fen: "r5r1/1p3pqk/p4Q1p/4pn2/P3R1N1/2P4P/1P4P1/2R4K b - - 0 29",
    correctMoves: [
      {
        from: "f5",
        to: "g3",
        san: "Ng3+"
      },
      {
        from: "g3",
        to: "e4",
        san: "Nxe4"
      },
    ],
    responseMoves: ["Kg1"],
  },
  {
    fen: "2r2r2/1p1b3k/3p2R1/3p3P/2nqP3/p1P2P2/PP4Q1/2K4R w - - 0 2",
    correctMoves: [
      {
        from: "g6",
        to: "h6",
        san: "Rh6+"
      },
      {
        from: "g2",
        to: "g6",
        san: "Qg6#"
      },
    ],
    responseMoves: ["Kxh6"],
  },
  {
    fen: "6rk/5R2/2pBp1q1/1p1nP3/1P1P2p1/7P/5Q1K/8 w - - 0 2",
    correctMoves: [
      {
        from: "f2",
        to: "h4",
        san: "Qh4+"
      },
      {
        from: "h4",
        to: "h5",
        san: "Qxh5#"
      },
    ],
    responseMoves: ["Qh5"],
  },
  {
    fen: "1r2r1k1/q3bpp1/p4n1p/2p2P2/8/Q3NP2/PPPRB1PP/2KR4 b - - 1 22",
    correctMoves: [
      {
        from: "c5",
        to: "c4",
        san: "c4"
      },
      {
        from: "e7",
        to: "b4",
        san: "Bb4"
      },
      {
        from: "b8",
        to: "b4",
        san: "Rxb4"
      },
    ],
    responseMoves: ["Qc3", "Qxb4"],
  },
  {
    fen: "3k1r2/1R4R1/p7/q3p2p/3p4/8/2P1KP2/8 w - - 3 30",
    correctMoves: [
      {
        from: "b7",
        to: "b8",
        san: "Rb8#"
      },
    ],
    responseMoves: [],
  },
  {
    fen: "rn1qk2r/pbpp2pp/1p1bp3/4N3/2PPp3/4P2P/PP3PP1/R1BQKB1R w KQkq - 1 2",
    correctMoves: [
      {
        from: "d1",
        to: "h5",
        san: "Qh5+"
      },
      {
        from: "e5",
        to: "g6",
        san: "Nxg6"
      },
      {
        from: "h5",
        to: "h8",
        san: "Qxh8+"
      },
    ],
    responseMoves: ["g6", "hxg6"],
  },
  {
    fen: "r5r1/1p3pqk/p4Q1p/4pn2/P3R1N1/2P4P/1P4P1/2R4K b - - 0 29",
    correctMoves: [
      {
        from: "f5",
        to: "g3",
        san: "Ng3+"
      },
      {
        from: "g3",
        to: "e4",
        san: "Nxe4"
      },
    ],
    responseMoves: ["Kg1"],
  },
  {
    fen: "2r2r2/1p1b3k/3p2R1/3p3P/2nqP3/p1P2P2/PP4Q1/2K4R w - - 0 2",
    correctMoves: [
      {
        from: "g6",
        to: "h6",
        san: "Rh6+"
      },
      {
        from: "g2",
        to: "g6",
        san: "Qg6#"
      },
    ],
    responseMoves: ["Kxh6"],
  },
  {
    fen: "6rk/5R2/2pBp1q1/1p1nP3/1P1P2p1/7P/5Q1K/8 w - - 0 2",
    correctMoves: [
      {
        from: "f2",
        to: "h4",
        san: "Qh4+"
      },
      {
        from: "h4",
        to: "h5",
        san: "Qxh5#"
      },
    ],
    responseMoves: ["Qh5"],
  },
  {
    fen: "1r2r1k1/q3bpp1/p4n1p/2p2P2/8/Q3NP2/PPPRB1PP/2KR4 b - - 1 22",
    correctMoves: [
      {
        from: "c5",
        to: "c4",
        san: "c4"
      },
      {
        from: "e7",
        to: "b4",
        san: "Bb4"
      },
      {
        from: "b8",
        to: "b4",
        san: "Rxb4"
      },
    ],
    responseMoves: ["Qc3", "Qxb4"],
  },
  {
    fen: "3k1r2/1R4R1/p7/q3p2p/3p4/8/2P1KP2/8 w - - 3 30",
    correctMoves: [
      {
        from: "b7",
        to: "b8",
        san: "Rb8#"
      },
    ],
    responseMoves: [],
  },
  {
    fen: "rn1qk2r/pbpp2pp/1p1bp3/4N3/2PPp3/4P2P/PP3PP1/R1BQKB1R w KQkq - 1 2",
    correctMoves: [
      {
        from: "d1",
        to: "h5",
        san: "Qh5+"
      },
      {
        from: "e5",
        to: "g6",
        san: "Nxg6"
      },
      {
        from: "h5",
        to: "h8",
        san: "Qxh8+"
      },
    ],
    responseMoves: ["g6", "hxg6"],
  },
  {
    fen: "r5r1/1p3pqk/p4Q1p/4pn2/P3R1N1/2P4P/1P4P1/2R4K b - - 0 29",
    correctMoves: [
      {
        from: "f5",
        to: "g3",
        san: "Ng3+"
      },
      {
        from: "g3",
        to: "e4",
        san: "Nxe4"
      },
    ],
    responseMoves: ["Kg1"],
  },
  {
    fen: "2r2r2/1p1b3k/3p2R1/3p3P/2nqP3/p1P2P2/PP4Q1/2K4R w - - 0 2",
    correctMoves: [
      {
        from: "g6",
        to: "h6",
        san: "Rh6+"
      },
      {
        from: "g2",
        to: "g6",
        san: "Qg6#"
      },
    ],
    responseMoves: ["Kxh6"],
  },
  {
    fen: "6rk/5R2/2pBp1q1/1p1nP3/1P1P2p1/7P/5Q1K/8 w - - 0 2",
    correctMoves: [
      {
        from: "f2",
        to: "h4",
        san: "Qh4+"
      },
      {
        from: "h4",
        to: "h5",
        san: "Qxh5#"
      },
    ],
    responseMoves: ["Qh5"],
  },
  {
    fen: "1r2r1k1/q3bpp1/p4n1p/2p2P2/8/Q3NP2/PPPRB1PP/2KR4 b - - 1 22",
    correctMoves: [
      {
        from: "c5",
        to: "c4",
        san: "c4"
      },
      {
        from: "e7",
        to: "b4",
        san: "Bb4"
      },
      {
        from: "b8",
        to: "b4",
        san: "Rxb4"
      },
    ],
    responseMoves: ["Qc3", "Qxb4"],
  },
  {
    fen: "3k1r2/1R4R1/p7/q3p2p/3p4/8/2P1KP2/8 w - - 3 30",
    correctMoves: [
      {
        from: "b7",
        to: "b8",
        san: "Rb8#"
      },
    ],
    responseMoves: [],
  },
  {
    fen: "rn1qk2r/pbpp2pp/1p1bp3/4N3/2PPp3/4P2P/PP3PP1/R1BQKB1R w KQkq - 1 2",
    correctMoves: [
      {
        from: "d1",
        to: "h5",
        san: "Qh5+"
      },
      {
        from: "e5",
        to: "g6",
        san: "Nxg6"
      },
      {
        from: "h5",
        to: "h8",
        san: "Qxh8+"
      },
    ],
    responseMoves: ["g6", "hxg6"],
  },
  {
    fen: "r5r1/1p3pqk/p4Q1p/4pn2/P3R1N1/2P4P/1P4P1/2R4K b - - 0 29",
    correctMoves: [
      {
        from: "f5",
        to: "g3",
        san: "Ng3+"
      },
      {
        from: "g3",
        to: "e4",
        san: "Nxe4"
      },
    ],
    responseMoves: ["Kg1"],
  },
  {
    fen: "rn1qk2r/pbpp2pp/1p1bp3/4N3/2PPp3/4P2P/PP3PP1/R1BQKB1R w KQkq - 1 2",
    correctMoves: [
      {
        from: "d1",
        to: "h5",
        san: "Qh5+"
      },
      {
        from: "e5",
        to: "g6",
        san: "Nxg6"
      },
      {
        from: "h5",
        to: "h8",
        san: "Qxh8+"
      },
    ],
    responseMoves: ["g6", "hxg6"],
  },
  {
    fen: "r5r1/1p3pqk/p4Q1p/4pn2/P3R1N1/2P4P/1P4P1/2R4K b - - 0 29",
    correctMoves: [
      {
        from: "f5",
        to: "g3",
        san: "Ng3+"
      },
      {
        from: "g3",
        to: "e4",
        san: "Nxe4"
      },
    ],
    responseMoves: ["Kg1"],
  },
  {
    fen: "2r2r2/1p1b3k/3p2R1/3p3P/2nqP3/p1P2P2/PP4Q1/2K4R w - - 0 2",
    correctMoves: [
      {
        from: "g6",
        to: "h6",
        san: "Rh6+"
      },
      {
        from: "g2",
        to: "g6",
        san: "Qg6#"
      },
    ],
    responseMoves: ["Kxh6"],
  },
  {
    fen: "6rk/5R2/2pBp1q1/1p1nP3/1P1P2p1/7P/5Q1K/8 w - - 0 2",
    correctMoves: [
      {
        from: "f2",
        to: "h4",
        san: "Qh4+"
      },
      {
        from: "h4",
        to: "h5",
        san: "Qxh5#"
      },
    ],
    responseMoves: ["Qh5"],
  },
  {
    fen: "1r2r1k1/q3bpp1/p4n1p/2p2P2/8/Q3NP2/PPPRB1PP/2KR4 b - - 1 22",
    correctMoves: [
      {
        from: "c5",
        to: "c4",
        san: "c4"
      },
      {
        from: "e7",
        to: "b4",
        san: "Bb4"
      },
      {
        from: "b8",
        to: "b4",
        san: "Rxb4"
      },
    ],
    responseMoves: ["Qc3", "Qxb4"],
  },
  {
    fen: "3k1r2/1R4R1/p7/q3p2p/3p4/8/2P1KP2/8 w - - 3 30",
    correctMoves: [
      {
        from: "b7",
        to: "b8",
        san: "Rb8#"
      },
    ],
    responseMoves: [],
  },
  {
    fen: "rn1qk2r/pbpp2pp/1p1bp3/4N3/2PPp3/4P2P/PP3PP1/R1BQKB1R w KQkq - 1 2",
    correctMoves: [
      {
        from: "d1",
        to: "h5",
        san: "Qh5+"
      },
      {
        from: "e5",
        to: "g6",
        san: "Nxg6"
      },
      {
        from: "h5",
        to: "h8",
        san: "Qxh8+"
      },
    ],
    responseMoves: ["g6", "hxg6"],
  },
  {
    fen: "r5r1/1p3pqk/p4Q1p/4pn2/P3R1N1/2P4P/1P4P1/2R4K b - - 0 29",
    correctMoves: [
      {
        from: "f5",
        to: "g3",
        san: "Ng3+"
      },
      {
        from: "g3",
        to: "e4",
        san: "Nxe4"
      },
    ],
    responseMoves: ["Kg1"],
  },
  {
    fen: "2r2r2/1p1b3k/3p2R1/3p3P/2nqP3/p1P2P2/PP4Q1/2K4R w - - 0 2",
    correctMoves: [
      {
        from: "g6",
        to: "h6",
        san: "Rh6+"
      },
      {
        from: "g2",
        to: "g6",
        san: "Qg6#"
      },
    ],
    responseMoves: ["Kxh6"],
  },
  {
    fen: "6rk/5R2/2pBp1q1/1p1nP3/1P1P2p1/7P/5Q1K/8 w - - 0 2",
    correctMoves: [
      {
        from: "f2",
        to: "h4",
        san: "Qh4+"
      },
      {
        from: "h4",
        to: "h5",
        san: "Qxh5#"
      },
    ],
    responseMoves: ["Qh5"],
  },
  {
    fen: "1r2r1k1/q3bpp1/p4n1p/2p2P2/8/Q3NP2/PPPRB1PP/2KR4 b - - 1 22",
    correctMoves: [
      {
        from: "c5",
        to: "c4",
        san: "c4"
      },
      {
        from: "e7",
        to: "b4",
        san: "Bb4"
      },
      {
        from: "b8",
        to: "b4",
        san: "Rxb4"
      },
    ],
    responseMoves: ["Qc3", "Qxb4"],
  },
  {
    fen: "3k1r2/1R4R1/p7/q3p2p/3p4/8/2P1KP2/8 w - - 3 30",
    correctMoves: [
      {
        from: "b7",
        to: "b8",
        san: "Rb8#"
      },
    ],
    responseMoves: [],
  },
  {
    fen: "rn1qk2r/pbpp2pp/1p1bp3/4N3/2PPp3/4P2P/PP3PP1/R1BQKB1R w KQkq - 1 2",
    correctMoves: [
      {
        from: "d1",
        to: "h5",
        san: "Qh5+"
      },
      {
        from: "e5",
        to: "g6",
        san: "Nxg6"
      },
      {
        from: "h5",
        to: "h8",
        san: "Qxh8+"
      },
    ],
    responseMoves: ["g6", "hxg6"],
  },
  {
    fen: "r5r1/1p3pqk/p4Q1p/4pn2/P3R1N1/2P4P/1P4P1/2R4K b - - 0 29",
    correctMoves: [
      {
        from: "f5",
        to: "g3",
        san: "Ng3+"
      },
      {
        from: "g3",
        to: "e4",
        san: "Nxe4"
      },
    ],
    responseMoves: ["Kg1"],
  },
  {
    fen: "2r2r2/1p1b3k/3p2R1/3p3P/2nqP3/p1P2P2/PP4Q1/2K4R w - - 0 2",
    correctMoves: [
      {
        from: "g6",
        to: "h6",
        san: "Rh6+"
      },
      {
        from: "g2",
        to: "g6",
        san: "Qg6#"
      },
    ],
    responseMoves: ["Kxh6"],
  },
  {
    fen: "6rk/5R2/2pBp1q1/1p1nP3/1P1P2p1/7P/5Q1K/8 w - - 0 2",
    correctMoves: [
      {
        from: "f2",
        to: "h4",
        san: "Qh4+"
      },
      {
        from: "h4",
        to: "h5",
        san: "Qxh5#"
      },
    ],
    responseMoves: ["Qh5"],
  },
  {
    fen: "1r2r1k1/q3bpp1/p4n1p/2p2P2/8/Q3NP2/PPPRB1PP/2KR4 b - - 1 22",
    correctMoves: [
      {
        from: "c5",
        to: "c4",
        san: "c4"
      },
      {
        from: "e7",
        to: "b4",
        san: "Bb4"
      },
      {
        from: "b8",
        to: "b4",
        san: "Rxb4"
      },
    ],
    responseMoves: ["Qc3", "Qxb4"],
  },
  {
    fen: "3k1r2/1R4R1/p7/q3p2p/3p4/8/2P1KP2/8 w - - 3 30",
    correctMoves: [
      {
        from: "b7",
        to: "b8",
        san: "Rb8#"
      },
    ],
    responseMoves: [],
  },
  {
    fen: "rn1qk2r/pbpp2pp/1p1bp3/4N3/2PPp3/4P2P/PP3PP1/R1BQKB1R w KQkq - 1 2",
    correctMoves: [
      {
        from: "d1",
        to: "h5",
        san: "Qh5+"
      },
      {
        from: "e5",
        to: "g6",
        san: "Nxg6"
      },
      {
        from: "h5",
        to: "h8",
        san: "Qxh8+"
      },
    ],
    responseMoves: ["g6", "hxg6"],
  },
  {
    fen: "r5r1/1p3pqk/p4Q1p/4pn2/P3R1N1/2P4P/1P4P1/2R4K b - - 0 29",
    correctMoves: [
      {
        from: "f5",
        to: "g3",
        san: "Ng3+"
      },
      {
        from: "g3",
        to: "e4",
        san: "Nxe4"
      },
    ],
    responseMoves: ["Kg1"],
  },
  {
    fen: "2r2r2/1p1b3k/3p2R1/3p3P/2nqP3/p1P2P2/PP4Q1/2K4R w - - 0 2",
    correctMoves: [
      {
        from: "g6",
        to: "h6",
        san: "Rh6+"
      },
      {
        from: "g2",
        to: "g6",
        san: "Qg6#"
      },
    ],
    responseMoves: ["Kxh6"],
  },
  {
    fen: "6rk/5R2/2pBp1q1/1p1nP3/1P1P2p1/7P/5Q1K/8 w - - 0 2",
    correctMoves: [
      {
        from: "f2",
        to: "h4",
        san: "Qh4+"
      },
      {
        from: "h4",
        to: "h5",
        san: "Qxh5#"
      },
    ],
    responseMoves: ["Qh5"],
  },
  {
    fen: "1r2r1k1/q3bpp1/p4n1p/2p2P2/8/Q3NP2/PPPRB1PP/2KR4 b - - 1 22",
    correctMoves: [
      {
        from: "c5",
        to: "c4",
        san: "c4"
      },
      {
        from: "e7",
        to: "b4",
        san: "Bb4"
      },
      {
        from: "b8",
        to: "b4",
        san: "Rxb4"
      },
    ],
    responseMoves: ["Qc3", "Qxb4"],
  },
  {
    fen: "3k1r2/1R4R1/p7/q3p2p/3p4/8/2P1KP2/8 w - - 3 30",
    correctMoves: [
      {
        from: "b7",
        to: "b8",
        san: "Rb8#"
      },
    ],
    responseMoves: [],
  },
  {
    fen: "rn1qk2r/pbpp2pp/1p1bp3/4N3/2PPp3/4P2P/PP3PP1/R1BQKB1R w KQkq - 1 2",
    correctMoves: [
      {
        from: "d1",
        to: "h5",
        san: "Qh5+"
      },
      {
        from: "e5",
        to: "g6",
        san: "Nxg6"
      },
      {
        from: "h5",
        to: "h8",
        san: "Qxh8+"
      },
    ],
    responseMoves: ["g6", "hxg6"],
  },
  {
    fen: "r5r1/1p3pqk/p4Q1p/4pn2/P3R1N1/2P4P/1P4P1/2R4K b - - 0 29",
    correctMoves: [
      {
        from: "f5",
        to: "g3",
        san: "Ng3+"
      },
      {
        from: "g3",
        to: "e4",
        san: "Nxe4"
      },
    ],
    responseMoves: ["Kg1"],
  },
  {
    fen: "2r2r2/1p1b3k/3p2R1/3p3P/2nqP3/p1P2P2/PP4Q1/2K4R w - - 0 2",
    correctMoves: [
      {
        from: "g6",
        to: "h6",
        san: "Rh6+"
      },
      {
        from: "g2",
        to: "g6",
        san: "Qg6#"
      },
    ],
    responseMoves: ["Kxh6"],
  },
  {
    fen: "6rk/5R2/2pBp1q1/1p1nP3/1P1P2p1/7P/5Q1K/8 w - - 0 2",
    correctMoves: [
      {
        from: "f2",
        to: "h4",
        san: "Qh4+"
      },
      {
        from: "h4",
        to: "h5",
        san: "Qxh5#"
      },
    ],
    responseMoves: ["Qh5"],
  },
  {
    fen: "1r2r1k1/q3bpp1/p4n1p/2p2P2/8/Q3NP2/PPPRB1PP/2KR4 b - - 1 22",
    correctMoves: [
      {
        from: "c5",
        to: "c4",
        san: "c4"
      },
      {
        from: "e7",
        to: "b4",
        san: "Bb4"
      },
      {
        from: "b8",
        to: "b4",
        san: "Rxb4"
      },
    ],
    responseMoves: ["Qc3", "Qxb4"],
  },
  {
    fen: "3k1r2/1R4R1/p7/q3p2p/3p4/8/2P1KP2/8 w - - 3 30",
    correctMoves: [
      {
        from: "b7",
        to: "b8",
        san: "Rb8#"
      },
    ],
    responseMoves: [],
  },
  {
    fen: "rn1qk2r/pbpp2pp/1p1bp3/4N3/2PPp3/4P2P/PP3PP1/R1BQKB1R w KQkq - 1 2",
    correctMoves: [
      {
        from: "d1",
        to: "h5",
        san: "Qh5+"
      },
      {
        from: "e5",
        to: "g6",
        san: "Nxg6"
      },
      {
        from: "h5",
        to: "h8",
        san: "Qxh8+"
      },
    ],
    responseMoves: ["g6", "hxg6"],
  },
  {
    fen: "r5r1/1p3pqk/p4Q1p/4pn2/P3R1N1/2P4P/1P4P1/2R4K b - - 0 29",
    correctMoves: [
      {
        from: "f5",
        to: "g3",
        san: "Ng3+"
      },
      {
        from: "g3",
        to: "e4",
        san: "Nxe4"
      },
    ],
    responseMoves: ["Kg1"],
  },
  {
    fen: "2r2r2/1p1b3k/3p2R1/3p3P/2nqP3/p1P2P2/PP4Q1/2K4R w - - 0 2",
    correctMoves: [
      {
        from: "g6",
        to: "h6",
        san: "Rh6+"
      },
      {
        from: "g2",
        to: "g6",
        san: "Qg6#"
      },
    ],
    responseMoves: ["Kxh6"],
  },
  {
    fen: "6rk/5R2/2pBp1q1/1p1nP3/1P1P2p1/7P/5Q1K/8 w - - 0 2",
    correctMoves: [
      {
        from: "f2",
        to: "h4",
        san: "Qh4+"
      },
      {
        from: "h4",
        to: "h5",
        san: "Qxh5#"
      },
    ],
    responseMoves: ["Qh5"],
  },
  {
    fen: "1r2r1k1/q3bpp1/p4n1p/2p2P2/8/Q3NP2/PPPRB1PP/2KR4 b - - 1 22",
    correctMoves: [
      {
        from: "c5",
        to: "c4",
        san: "c4"
      },
      {
        from: "e7",
        to: "b4",
        san: "Bb4"
      },
      {
        from: "b8",
        to: "b4",
        san: "Rxb4"
      },
    ],
    responseMoves: ["Qc3", "Qxb4"],
  },
  {
    fen: "3k1r2/1R4R1/p7/q3p2p/3p4/8/2P1KP2/8 w - - 3 30",
    correctMoves: [
      {
        from: "b7",
        to: "b8",
        san: "Rb8#"
      },
    ],
    responseMoves: [],
  },
  {
    fen: "rn1qk2r/pbpp2pp/1p1bp3/4N3/2PPp3/4P2P/PP3PP1/R1BQKB1R w KQkq - 1 2",
    correctMoves: [
      {
        from: "d1",
        to: "h5",
        san: "Qh5+"
      },
      {
        from: "e5",
        to: "g6",
        san: "Nxg6"
      },
      {
        from: "h5",
        to: "h8",
        san: "Qxh8+"
      },
    ],
    responseMoves: ["g6", "hxg6"],
  },
  {
    fen: "r5r1/1p3pqk/p4Q1p/4pn2/P3R1N1/2P4P/1P4P1/2R4K b - - 0 29",
    correctMoves: [
      {
        from: "f5",
        to: "g3",
        san: "Ng3+"
      },
      {
        from: "g3",
        to: "e4",
        san: "Nxe4"
      },
    ],
    responseMoves: ["Kg1"],
  },
  {
    fen: "2r2r2/1p1b3k/3p2R1/3p3P/2nqP3/p1P2P2/PP4Q1/2K4R w - - 0 2",
    correctMoves: [
      {
        from: "g6",
        to: "h6",
        san: "Rh6+"
      },
      {
        from: "g2",
        to: "g6",
        san: "Qg6#"
      },
    ],
    responseMoves: ["Kxh6"],
  },
  {
    fen: "6rk/5R2/2pBp1q1/1p1nP3/1P1P2p1/7P/5Q1K/8 w - - 0 2",
    correctMoves: [
      {
        from: "f2",
        to: "h4",
        san: "Qh4+"
      },
      {
        from: "h4",
        to: "h5",
        san: "Qxh5#"
      },
    ],
    responseMoves: ["Qh5"],
  },
  {
    fen: "1r2r1k1/q3bpp1/p4n1p/2p2P2/8/Q3NP2/PPPRB1PP/2KR4 b - - 1 22",
    correctMoves: [
      {
        from: "c5",
        to: "c4",
        san: "c4"
      },
      {
        from: "e7",
        to: "b4",
        san: "Bb4"
      },
      {
        from: "b8",
        to: "b4",
        san: "Rxb4"
      },
    ],
    responseMoves: ["Qc3", "Qxb4"],
  },
  {
    fen: "3k1r2/1R4R1/p7/q3p2p/3p4/8/2P1KP2/8 w - - 3 30",
    correctMoves: [
      {
        from: "b7",
        to: "b8",
        san: "Rb8#"
      },
    ],
    responseMoves: [],
  },
  {
    fen: "rn1qk2r/pbpp2pp/1p1bp3/4N3/2PPp3/4P2P/PP3PP1/R1BQKB1R w KQkq - 1 2",
    correctMoves: [
      {
        from: "d1",
        to: "h5",
        san: "Qh5+"
      },
      {
        from: "e5",
        to: "g6",
        san: "Nxg6"
      },
      {
        from: "h5",
        to: "h8",
        san: "Qxh8+"
      },
    ],
    responseMoves: ["g6", "hxg6"],
  },
  {
    fen: "r5r1/1p3pqk/p4Q1p/4pn2/P3R1N1/2P4P/1P4P1/2R4K b - - 0 29",
    correctMoves: [
      {
        from: "f5",
        to: "g3",
        san: "Ng3+"
      },
      {
        from: "g3",
        to: "e4",
        san: "Nxe4"
      },
    ],
    responseMoves: ["Kg1"],
  },
  {
    fen: "2r2r2/1p1b3k/3p2R1/3p3P/2nqP3/p1P2P2/PP4Q1/2K4R w - - 0 2",
    correctMoves: [
      {
        from: "g6",
        to: "h6",
        san: "Rh6+"
      },
      {
        from: "g2",
        to: "g6",
        san: "Qg6#"
      },
    ],
    responseMoves: ["Kxh6"],
  },
  {
    fen: "6rk/5R2/2pBp1q1/1p1nP3/1P1P2p1/7P/5Q1K/8 w - - 0 2",
    correctMoves: [
      {
        from: "f2",
        to: "h4",
        san: "Qh4+"
      },
      {
        from: "h4",
        to: "h5",
        san: "Qxh5#"
      },
    ],
    responseMoves: ["Qh5"],
  },
  {
    fen: "1r2r1k1/q3bpp1/p4n1p/2p2P2/8/Q3NP2/PPPRB1PP/2KR4 b - - 1 22",
    correctMoves: [
      {
        from: "c5",
        to: "c4",
        san: "c4"
      },
      {
        from: "e7",
        to: "b4",
        san: "Bb4"
      },
      {
        from: "b8",
        to: "b4",
        san: "Rxb4"
      },
    ],
    responseMoves: ["Qc3", "Qxb4"],
  },
  {
    fen: "3k1r2/1R4R1/p7/q3p2p/3p4/8/2P1KP2/8 w - - 3 30",
    correctMoves: [
      {
        from: "b7",
        to: "b8",
        san: "Rb8#"
      },
    ],
    responseMoves: [],
  },
  {
    fen: "rn1qk2r/pbpp2pp/1p1bp3/4N3/2PPp3/4P2P/PP3PP1/R1BQKB1R w KQkq - 1 2",
    correctMoves: [
      {
        from: "d1",
        to: "h5",
        san: "Qh5+"
      },
      {
        from: "e5",
        to: "g6",
        san: "Nxg6"
      },
      {
        from: "h5",
        to: "h8",
        san: "Qxh8+"
      },
    ],
    responseMoves: ["g6", "hxg6"],
  },
  {
    fen: "r5r1/1p3pqk/p4Q1p/4pn2/P3R1N1/2P4P/1P4P1/2R4K b - - 0 29",
    correctMoves: [
      {
        from: "f5",
        to: "g3",
        san: "Ng3+"
      },
      {
        from: "g3",
        to: "e4",
        san: "Nxe4"
      },
    ],
    responseMoves: ["Kg1"],
  },
  {
    fen: "2r2r2/1p1b3k/3p2R1/3p3P/2nqP3/p1P2P2/PP4Q1/2K4R w - - 0 2",
    correctMoves: [
      {
        from: "g6",
        to: "h6",
        san: "Rh6+"
      },
      {
        from: "g2",
        to: "g6",
        san: "Qg6#"
      },
    ],
    responseMoves: ["Kxh6"],
  },
  {
    fen: "6rk/5R2/2pBp1q1/1p1nP3/1P1P2p1/7P/5Q1K/8 w - - 0 2",
    correctMoves: [
      {
        from: "f2",
        to: "h4",
        san: "Qh4+"
      },
      {
        from: "h4",
        to: "h5",
        san: "Qxh5#"
      },
    ],
    responseMoves: ["Qh5"],
  },
  {
    fen: "1r2r1k1/q3bpp1/p4n1p/2p2P2/8/Q3NP2/PPPRB1PP/2KR4 b - - 1 22",
    correctMoves: [
      {
        from: "c5",
        to: "c4",
        san: "c4"
      },
      {
        from: "e7",
        to: "b4",
        san: "Bb4"
      },
      {
        from: "b8",
        to: "b4",
        san: "Rxb4"
      },
    ],
    responseMoves: ["Qc3", "Qxb4"],
  },
  {
    fen: "3k1r2/1R4R1/p7/q3p2p/3p4/8/2P1KP2/8 w - - 3 30",
    correctMoves: [
      {
        from: "b7",
        to: "b8",
        san: "Rb8#"
      },
    ],
    responseMoves: [],
  },
  {
    fen: "rn1qk2r/pbpp2pp/1p1bp3/4N3/2PPp3/4P2P/PP3PP1/R1BQKB1R w KQkq - 1 2",
    correctMoves: [
      {
        from: "d1",
        to: "h5",
        san: "Qh5+"
      },
      {
        from: "e5",
        to: "g6",
        san: "Nxg6"
      },
      {
        from: "h5",
        to: "h8",
        san: "Qxh8+"
      },
    ],
    responseMoves: ["g6", "hxg6"],
  },
  {
    fen: "r5r1/1p3pqk/p4Q1p/4pn2/P3R1N1/2P4P/1P4P1/2R4K b - - 0 29",
    correctMoves: [
      {
        from: "f5",
        to: "g3",
        san: "Ng3+"
      },
      {
        from: "g3",
        to: "e4",
        san: "Nxe4"
      },
    ],
    responseMoves: ["Kg1"],
  },
  {
    fen: "2r2r2/1p1b3k/3p2R1/3p3P/2nqP3/p1P2P2/PP4Q1/2K4R w - - 0 2",
    correctMoves: [
      {
        from: "g6",
        to: "h6",
        san: "Rh6+"
      },
      {
        from: "g2",
        to: "g6",
        san: "Qg6#"
      },
    ],
    responseMoves: ["Kxh6"],
  },
  {
    fen: "6rk/5R2/2pBp1q1/1p1nP3/1P1P2p1/7P/5Q1K/8 w - - 0 2",
    correctMoves: [
      {
        from: "f2",
        to: "h4",
        san: "Qh4+"
      },
      {
        from: "h4",
        to: "h5",
        san: "Qxh5#"
      },
    ],
    responseMoves: ["Qh5"],
  },
  {
    fen: "1r2r1k1/q3bpp1/p4n1p/2p2P2/8/Q3NP2/PPPRB1PP/2KR4 b - - 1 22",
    correctMoves: [
      {
        from: "c5",
        to: "c4",
        san: "c4"
      },
      {
        from: "e7",
        to: "b4",
        san: "Bb4"
      },
      {
        from: "b8",
        to: "b4",
        san: "Rxb4"
      },
    ],
    responseMoves: ["Qc3", "Qxb4"],
  },
  {
    fen: "3k1r2/1R4R1/p7/q3p2p/3p4/8/2P1KP2/8 w - - 3 30",
    correctMoves: [
      {
        from: "b7",
        to: "b8",
        san: "Rb8#"
      },
    ],
    responseMoves: [],
  },
  {
    fen: "rn1qk2r/pbpp2pp/1p1bp3/4N3/2PPp3/4P2P/PP3PP1/R1BQKB1R w KQkq - 1 2",
    correctMoves: [
      {
        from: "d1",
        to: "h5",
        san: "Qh5+"
      },
      {
        from: "e5",
        to: "g6",
        san: "Nxg6"
      },
      {
        from: "h5",
        to: "h8",
        san: "Qxh8+"
      },
    ],
    responseMoves: ["g6", "hxg6"],
  },
  {
    fen: "r5r1/1p3pqk/p4Q1p/4pn2/P3R1N1/2P4P/1P4P1/2R4K b - - 0 29",
    correctMoves: [
      {
        from: "f5",
        to: "g3",
        san: "Ng3+"
      },
      {
        from: "g3",
        to: "e4",
        san: "Nxe4"
      },
    ],
    responseMoves: ["Kg1"],
  },
  {
    fen: "2r2r2/1p1b3k/3p2R1/3p3P/2nqP3/p1P2P2/PP4Q1/2K4R w - - 0 2",
    correctMoves: [
      {
        from: "g6",
        to: "h6",
        san: "Rh6+"
      },
      {
        from: "g2",
        to: "g6",
        san: "Qg6#"
      },
    ],
    responseMoves: ["Kxh6"],
  },
  {
    fen: "6rk/5R2/2pBp1q1/1p1nP3/1P1P2p1/7P/5Q1K/8 w - - 0 2",
    correctMoves: [
      {
        from: "f2",
        to: "h4",
        san: "Qh4+"
      },
      {
        from: "h4",
        to: "h5",
        san: "Qxh5#"
      },
    ],
    responseMoves: ["Qh5"],
  },
  {
    fen: "1r2r1k1/q3bpp1/p4n1p/2p2P2/8/Q3NP2/PPPRB1PP/2KR4 b - - 1 22",
    correctMoves: [
      {
        from: "c5",
        to: "c4",
        san: "c4"
      },
      {
        from: "e7",
        to: "b4",
        san: "Bb4"
      },
      {
        from: "b8",
        to: "b4",
        san: "Rxb4"
      },
    ],
    responseMoves: ["Qc3", "Qxb4"],
  },
  {
    fen: "3k1r2/1R4R1/p7/q3p2p/3p4/8/2P1KP2/8 w - - 3 30",
    correctMoves: [
      {
        from: "b7",
        to: "b8",
        san: "Rb8#"
      },
    ],
    responseMoves: [],
  },
  {
    fen: "rn1qk2r/pbpp2pp/1p1bp3/4N3/2PPp3/4P2P/PP3PP1/R1BQKB1R w KQkq - 1 2",
    correctMoves: [
      {
        from: "d1",
        to: "h5",
        san: "Qh5+"
      },
      {
        from: "e5",
        to: "g6",
        san: "Nxg6"
      },
      {
        from: "h5",
        to: "h8",
        san: "Qxh8+"
      },
    ],
    responseMoves: ["g6", "hxg6"],
  },
  {
    fen: "r5r1/1p3pqk/p4Q1p/4pn2/P3R1N1/2P4P/1P4P1/2R4K b - - 0 29",
    correctMoves: [
      {
        from: "f5",
        to: "g3",
        san: "Ng3+"
      },
      {
        from: "g3",
        to: "e4",
        san: "Nxe4"
      },
    ],
    responseMoves: ["Kg1"],
  },
  {
    fen: "2r2r2/1p1b3k/3p2R1/3p3P/2nqP3/p1P2P2/PP4Q1/2K4R w - - 0 2",
    correctMoves: [
      {
        from: "g6",
        to: "h6",
        san: "Rh6+"
      },
      {
        from: "g2",
        to: "g6",
        san: "Qg6#"
      },
    ],
    responseMoves: ["Kxh6"],
  },
  {
    fen: "6rk/5R2/2pBp1q1/1p1nP3/1P1P2p1/7P/5Q1K/8 w - - 0 2",
    correctMoves: [
      {
        from: "f2",
        to: "h4",
        san: "Qh4+"
      },
      {
        from: "h4",
        to: "h5",
        san: "Qxh5#"
      },
    ],
    responseMoves: ["Qh5"],
  },
  {
    fen: "1r2r1k1/q3bpp1/p4n1p/2p2P2/8/Q3NP2/PPPRB1PP/2KR4 b - - 1 22",
    correctMoves: [
      {
        from: "c5",
        to: "c4",
        san: "c4"
      },
      {
        from: "e7",
        to: "b4",
        san: "Bb4"
      },
      {
        from: "b8",
        to: "b4",
        san: "Rxb4"
      },
    ],
    responseMoves: ["Qc3", "Qxb4"],
  },
  {
    fen: "3k1r2/1R4R1/p7/q3p2p/3p4/8/2P1KP2/8 w - - 3 30",
    correctMoves: [
      {
        from: "b7",
        to: "b8",
        san: "Rb8#"
      },
    ],
    responseMoves: [],
  },
  {
    fen: "rn1qk2r/pbpp2pp/1p1bp3/4N3/2PPp3/4P2P/PP3PP1/R1BQKB1R w KQkq - 1 2",
    correctMoves: [
      {
        from: "d1",
        to: "h5",
        san: "Qh5+"
      },
      {
        from: "e5",
        to: "g6",
        san: "Nxg6"
      },
      {
        from: "h5",
        to: "h8",
        san: "Qxh8+"
      },
    ],
    responseMoves: ["g6", "hxg6"],
  },
  {
    fen: "r5r1/1p3pqk/p4Q1p/4pn2/P3R1N1/2P4P/1P4P1/2R4K b - - 0 29",
    correctMoves: [
      {
        from: "f5",
        to: "g3",
        san: "Ng3+"
      },
      {
        from: "g3",
        to: "e4",
        san: "Nxe4"
      },
    ],
    responseMoves: ["Kg1"],
  },
  {
    fen: "2r2r2/1p1b3k/3p2R1/3p3P/2nqP3/p1P2P2/PP4Q1/2K4R w - - 0 2",
    correctMoves: [
      {
        from: "g6",
        to: "h6",
        san: "Rh6+"
      },
      {
        from: "g2",
        to: "g6",
        san: "Qg6#"
      },
    ],
    responseMoves: ["Kxh6"],
  },
  {
    fen: "6rk/5R2/2pBp1q1/1p1nP3/1P1P2p1/7P/5Q1K/8 w - - 0 2",
    correctMoves: [
      {
        from: "f2",
        to: "h4",
        san: "Qh4+"
      },
      {
        from: "h4",
        to: "h5",
        san: "Qxh5#"
      },
    ],
    responseMoves: ["Qh5"],
  },
  {
    fen: "1r2r1k1/q3bpp1/p4n1p/2p2P2/8/Q3NP2/PPPRB1PP/2KR4 b - - 1 22",
    correctMoves: [
      {
        from: "c5",
        to: "c4",
        san: "c4"
      },
      {
        from: "e7",
        to: "b4",
        san: "Bb4"
      },
      {
        from: "b8",
        to: "b4",
        san: "Rxb4"
      },
    ],
    responseMoves: ["Qc3", "Qxb4"],
  },
  {
    fen: "3k1r2/1R4R1/p7/q3p2p/3p4/8/2P1KP2/8 w - - 3 30",
    correctMoves: [
      {
        from: "b7",
        to: "b8",
        san: "Rb8#"
      },
    ],
    responseMoves: [],
  },
  {
    fen: "rn1qk2r/pbpp2pp/1p1bp3/4N3/2PPp3/4P2P/PP3PP1/R1BQKB1R w KQkq - 1 2",
    correctMoves: [
      {
        from: "d1",
        to: "h5",
        san: "Qh5+"
      },
      {
        from: "e5",
        to: "g6",
        san: "Nxg6"
      },
      {
        from: "h5",
        to: "h8",
        san: "Qxh8+"
      },
    ],
    responseMoves: ["g6", "hxg6"],
  },
  {
    fen: "r5r1/1p3pqk/p4Q1p/4pn2/P3R1N1/2P4P/1P4P1/2R4K b - - 0 29",
    correctMoves: [
      {
        from: "f5",
        to: "g3",
        san: "Ng3+"
      },
      {
        from: "g3",
        to: "e4",
        san: "Nxe4"
      },
    ],
    responseMoves: ["Kg1"],
  },
  {
    fen: "2r2r2/1p1b3k/3p2R1/3p3P/2nqP3/p1P2P2/PP4Q1/2K4R w - - 0 2",
    correctMoves: [
      {
        from: "g6",
        to: "h6",
        san: "Rh6+"
      },
      {
        from: "g2",
        to: "g6",
        san: "Qg6#"
      },
    ],
    responseMoves: ["Kxh6"],
  },
  {
    fen: "6rk/5R2/2pBp1q1/1p1nP3/1P1P2p1/7P/5Q1K/8 w - - 0 2",
    correctMoves: [
      {
        from: "f2",
        to: "h4",
        san: "Qh4+"
      },
      {
        from: "h4",
        to: "h5",
        san: "Qxh5#"
      },
    ],
    responseMoves: ["Qh5"],
  },
  {
    fen: "1r2r1k1/q3bpp1/p4n1p/2p2P2/8/Q3NP2/PPPRB1PP/2KR4 b - - 1 22",
    correctMoves: [
      {
        from: "c5",
        to: "c4",
        san: "c4"
      },
      {
        from: "e7",
        to: "b4",
        san: "Bb4"
      },
      {
        from: "b8",
        to: "b4",
        san: "Rxb4"
      },
    ],
    responseMoves: ["Qc3", "Qxb4"],
  },
  {
    fen: "3k1r2/1R4R1/p7/q3p2p/3p4/8/2P1KP2/8 w - - 3 30",
    correctMoves: [
      {
        from: "b7",
        to: "b8",
        san: "Rb8#"
      },
    ],
    responseMoves: [],
  },
  {
    fen: "rn1qk2r/pbpp2pp/1p1bp3/4N3/2PPp3/4P2P/PP3PP1/R1BQKB1R w KQkq - 1 2",
    correctMoves: [
      {
        from: "d1",
        to: "h5",
        san: "Qh5+"
      },
      {
        from: "e5",
        to: "g6",
        san: "Nxg6"
      },
      {
        from: "h5",
        to: "h8",
        san: "Qxh8+"
      },
    ],
    responseMoves: ["g6", "hxg6"],
  },
  {
    fen: "r5r1/1p3pqk/p4Q1p/4pn2/P3R1N1/2P4P/1P4P1/2R4K b - - 0 29",
    correctMoves: [
      {
        from: "f5",
        to: "g3",
        san: "Ng3+"
      },
      {
        from: "g3",
        to: "e4",
        san: "Nxe4"
      },
    ],
    responseMoves: ["Kg1"],
  },
  {
    fen: "2r2r2/1p1b3k/3p2R1/3p3P/2nqP3/p1P2P2/PP4Q1/2K4R w - - 0 2",
    correctMoves: [
      {
        from: "g6",
        to: "h6",
        san: "Rh6+"
      },
      {
        from: "g2",
        to: "g6",
        san: "Qg6#"
      },
    ],
    responseMoves: ["Kxh6"],
  },
  {
    fen: "6rk/5R2/2pBp1q1/1p1nP3/1P1P2p1/7P/5Q1K/8 w - - 0 2",
    correctMoves: [
      {
        from: "f2",
        to: "h4",
        san: "Qh4+"
      },
      {
        from: "h4",
        to: "h5",
        san: "Qxh5#"
      },
    ],
    responseMoves: ["Qh5"],
  },
  {
    fen: "1r2r1k1/q3bpp1/p4n1p/2p2P2/8/Q3NP2/PPPRB1PP/2KR4 b - - 1 22",
    correctMoves: [
      {
        from: "c5",
        to: "c4",
        san: "c4"
      },
      {
        from: "e7",
        to: "b4",
        san: "Bb4"
      },
      {
        from: "b8",
        to: "b4",
        san: "Rxb4"
      },
    ],
    responseMoves: ["Qc3", "Qxb4"],
  },
  {
    fen: "3k1r2/1R4R1/p7/q3p2p/3p4/8/2P1KP2/8 w - - 3 30",
    correctMoves: [
      {
        from: "b7",
        to: "b8",
        san: "Rb8#"
      },
    ],
    responseMoves: [],
  },
  {
    fen: "rn1qk2r/pbpp2pp/1p1bp3/4N3/2PPp3/4P2P/PP3PP1/R1BQKB1R w KQkq - 1 2",
    correctMoves: [
      {
        from: "d1",
        to: "h5",
        san: "Qh5+"
      },
      {
        from: "e5",
        to: "g6",
        san: "Nxg6"
      },
      {
        from: "h5",
        to: "h8",
        san: "Qxh8+"
      },
    ],
    responseMoves: ["g6", "hxg6"],
  },
  {
    fen: "r5r1/1p3pqk/p4Q1p/4pn2/P3R1N1/2P4P/1P4P1/2R4K b - - 0 29",
    correctMoves: [
      {
        from: "f5",
        to: "g3",
        san: "Ng3+"
      },
      {
        from: "g3",
        to: "e4",
        san: "Nxe4"
      },
    ],
    responseMoves: ["Kg1"],
  },
  {
    fen: "2r2r2/1p1b3k/3p2R1/3p3P/2nqP3/p1P2P2/PP4Q1/2K4R w - - 0 2",
    correctMoves: [
      {
        from: "g6",
        to: "h6",
        san: "Rh6+"
      },
      {
        from: "g2",
        to: "g6",
        san: "Qg6#"
      },
    ],
    responseMoves: ["Kxh6"],
  },
  {
    fen: "6rk/5R2/2pBp1q1/1p1nP3/1P1P2p1/7P/5Q1K/8 w - - 0 2",
    correctMoves: [
      {
        from: "f2",
        to: "h4",
        san: "Qh4+"
      },
      {
        from: "h4",
        to: "h5",
        san: "Qxh5#"
      },
    ],
    responseMoves: ["Qh5"],
  },
  {
    fen: "1r2r1k1/q3bpp1/p4n1p/2p2P2/8/Q3NP2/PPPRB1PP/2KR4 b - - 1 22",
    correctMoves: [
      {
        from: "c5",
        to: "c4",
        san: "c4"
      },
      {
        from: "e7",
        to: "b4",
        san: "Bb4"
      },
      {
        from: "b8",
        to: "b4",
        san: "Rxb4"
      },
    ],
    responseMoves: ["Qc3", "Qxb4"],
  },
  {
    fen: "3k1r2/1R4R1/p7/q3p2p/3p4/8/2P1KP2/8 w - - 3 30",
    correctMoves: [
      {
        from: "b7",
        to: "b8",
        san: "Rb8#"
      },
    ],
    responseMoves: [],
  },
  {
    fen: "rn1qk2r/pbpp2pp/1p1bp3/4N3/2PPp3/4P2P/PP3PP1/R1BQKB1R w KQkq - 1 2",
    correctMoves: [
      {
        from: "d1",
        to: "h5",
        san: "Qh5+"
      },
      {
        from: "e5",
        to: "g6",
        san: "Nxg6"
      },
      {
        from: "h5",
        to: "h8",
        san: "Qxh8+"
      },
    ],
    responseMoves: ["g6", "hxg6"],
  },
  {
    fen: "r5r1/1p3pqk/p4Q1p/4pn2/P3R1N1/2P4P/1P4P1/2R4K b - - 0 29",
    correctMoves: [
      {
        from: "f5",
        to: "g3",
        san: "Ng3+"
      },
      {
        from: "g3",
        to: "e4",
        san: "Nxe4"
      },
    ],
    responseMoves: ["Kg1"],
  },
  {
    fen: "2r2r2/1p1b3k/3p2R1/3p3P/2nqP3/p1P2P2/PP4Q1/2K4R w - - 0 2",
    correctMoves: [
      {
        from: "g6",
        to: "h6",
        san: "Rh6+"
      },
      {
        from: "g2",
        to: "g6",
        san: "Qg6#"
      },
    ],
    responseMoves: ["Kxh6"],
  },
  {
    fen: "6rk/5R2/2pBp1q1/1p1nP3/1P1P2p1/7P/5Q1K/8 w - - 0 2",
    correctMoves: [
      {
        from: "f2",
        to: "h4",
        san: "Qh4+"
      },
      {
        from: "h4",
        to: "h5",
        san: "Qxh5#"
      },
    ],
    responseMoves: ["Qh5"],
  },
  {
    fen: "1r2r1k1/q3bpp1/p4n1p/2p2P2/8/Q3NP2/PPPRB1PP/2KR4 b - - 1 22",
    correctMoves: [
      {
        from: "c5",
        to: "c4",
        san: "c4"
      },
      {
        from: "e7",
        to: "b4",
        san: "Bb4"
      },
      {
        from: "b8",
        to: "b4",
        san: "Rxb4"
      },
    ],
    responseMoves: ["Qc3", "Qxb4"],
  },
  {
    fen: "3k1r2/1R4R1/p7/q3p2p/3p4/8/2P1KP2/8 w - - 3 30",
    correctMoves: [
      {
        from: "b7",
        to: "b8",
        san: "Rb8#"
      },
    ],
    responseMoves: [],
  },
  {
    fen: "rn1qk2r/pbpp2pp/1p1bp3/4N3/2PPp3/4P2P/PP3PP1/R1BQKB1R w KQkq - 1 2",
    correctMoves: [
      {
        from: "d1",
        to: "h5",
        san: "Qh5+"
      },
      {
        from: "e5",
        to: "g6",
        san: "Nxg6"
      },
      {
        from: "h5",
        to: "h8",
        san: "Qxh8+"
      },
    ],
    responseMoves: ["g6", "hxg6"],
  },
  {
    fen: "r5r1/1p3pqk/p4Q1p/4pn2/P3R1N1/2P4P/1P4P1/2R4K b - - 0 29",
    correctMoves: [
      {
        from: "f5",
        to: "g3",
        san: "Ng3+"
      },
      {
        from: "g3",
        to: "e4",
        san: "Nxe4"
      },
    ],
    responseMoves: ["Kg1"],
  },
  {
    fen: "2r2r2/1p1b3k/3p2R1/3p3P/2nqP3/p1P2P2/PP4Q1/2K4R w - - 0 2",
    correctMoves: [
      {
        from: "g6",
        to: "h6",
        san: "Rh6+"
      },
      {
        from: "g2",
        to: "g6",
        san: "Qg6#"
      },
    ],
    responseMoves: ["Kxh6"],
  },
  {
    fen: "6rk/5R2/2pBp1q1/1p1nP3/1P1P2p1/7P/5Q1K/8 w - - 0 2",
    correctMoves: [
      {
        from: "f2",
        to: "h4",
        san: "Qh4+"
      },
      {
        from: "h4",
        to: "h5",
        san: "Qxh5#"
      },
    ],
    responseMoves: ["Qh5"],
  },
  {
    fen: "1r2r1k1/q3bpp1/p4n1p/2p2P2/8/Q3NP2/PPPRB1PP/2KR4 b - - 1 22",
    correctMoves: [
      {
        from: "c5",
        to: "c4",
        san: "c4"
      },
      {
        from: "e7",
        to: "b4",
        san: "Bb4"
      },
      {
        from: "b8",
        to: "b4",
        san: "Rxb4"
      },
    ],
    responseMoves: ["Qc3", "Qxb4"],
  },
  {
    fen: "3k1r2/1R4R1/p7/q3p2p/3p4/8/2P1KP2/8 w - - 3 30",
    correctMoves: [
      {
        from: "b7",
        to: "b8",
        san: "Rb8#"
      },
    ],
    responseMoves: [],
  },
  {
    fen: "rn1qk2r/pbpp2pp/1p1bp3/4N3/2PPp3/4P2P/PP3PP1/R1BQKB1R w KQkq - 1 2",
    correctMoves: [
      {
        from: "d1",
        to: "h5",
        san: "Qh5+"
      },
      {
        from: "e5",
        to: "g6",
        san: "Nxg6"
      },
      {
        from: "h5",
        to: "h8",
        san: "Qxh8+"
      },
    ],
    responseMoves: ["g6", "hxg6"],
  },
  {
    fen: "r5r1/1p3pqk/p4Q1p/4pn2/P3R1N1/2P4P/1P4P1/2R4K b - - 0 29",
    correctMoves: [
      {
        from: "f5",
        to: "g3",
        san: "Ng3+"
      },
      {
        from: "g3",
        to: "e4",
        san: "Nxe4"
      },
    ],
    responseMoves: ["Kg1"],
  },
  {
    fen: "2r2r2/1p1b3k/3p2R1/3p3P/2nqP3/p1P2P2/PP4Q1/2K4R w - - 0 2",
    correctMoves: [
      {
        from: "g6",
        to: "h6",
        san: "Rh6+"
      },
      {
        from: "g2",
        to: "g6",
        san: "Qg6#"
      },
    ],
    responseMoves: ["Kxh6"],
  },
  {
    fen: "6rk/5R2/2pBp1q1/1p1nP3/1P1P2p1/7P/5Q1K/8 w - - 0 2",
    correctMoves: [
      {
        from: "f2",
        to: "h4",
        san: "Qh4+"
      },
      {
        from: "h4",
        to: "h5",
        san: "Qxh5#"
      },
    ],
    responseMoves: ["Qh5"],
  },
  {
    fen: "1r2r1k1/q3bpp1/p4n1p/2p2P2/8/Q3NP2/PPPRB1PP/2KR4 b - - 1 22",
    correctMoves: [
      {
        from: "c5",
        to: "c4",
        san: "c4"
      },
      {
        from: "e7",
        to: "b4",
        san: "Bb4"
      },
      {
        from: "b8",
        to: "b4",
        san: "Rxb4"
      },
    ],
    responseMoves: ["Qc3", "Qxb4"],
  },
  {
    fen: "3k1r2/1R4R1/p7/q3p2p/3p4/8/2P1KP2/8 w - - 3 30",
    correctMoves: [
      {
        from: "b7",
        to: "b8",
        san: "Rb8#"
      },
    ],
    responseMoves: [],
  },
  {
    fen: "rn1qk2r/pbpp2pp/1p1bp3/4N3/2PPp3/4P2P/PP3PP1/R1BQKB1R w KQkq - 1 2",
    correctMoves: [
      {
        from: "d1",
        to: "h5",
        san: "Qh5+"
      },
      {
        from: "e5",
        to: "g6",
        san: "Nxg6"
      },
      {
        from: "h5",
        to: "h8",
        san: "Qxh8+"
      },
    ],
    responseMoves: ["g6", "hxg6"],
  },
  {
    fen: "r5r1/1p3pqk/p4Q1p/4pn2/P3R1N1/2P4P/1P4P1/2R4K b - - 0 29",
    correctMoves: [
      {
        from: "f5",
        to: "g3",
        san: "Ng3+"
      },
      {
        from: "g3",
        to: "e4",
        san: "Nxe4"
      },
    ],
    responseMoves: ["Kg1"],
  },
  {
    fen: "2r2r2/1p1b3k/3p2R1/3p3P/2nqP3/p1P2P2/PP4Q1/2K4R w - - 0 2",
    correctMoves: [
      {
        from: "g6",
        to: "h6",
        san: "Rh6+"
      },
      {
        from: "g2",
        to: "g6",
        san: "Qg6#"
      },
    ],
    responseMoves: ["Kxh6"],
  },
  {
    fen: "6rk/5R2/2pBp1q1/1p1nP3/1P1P2p1/7P/5Q1K/8 w - - 0 2",
    correctMoves: [
      {
        from: "f2",
        to: "h4",
        san: "Qh4+"
      },
      {
        from: "h4",
        to: "h5",
        san: "Qxh5#"
      },
    ],
    responseMoves: ["Qh5"],
  },
  {
    fen: "1r2r1k1/q3bpp1/p4n1p/2p2P2/8/Q3NP2/PPPRB1PP/2KR4 b - - 1 22",
    correctMoves: [
      {
        from: "c5",
        to: "c4",
        san: "c4"
      },
      {
        from: "e7",
        to: "b4",
        san: "Bb4"
      },
      {
        from: "b8",
        to: "b4",
        san: "Rxb4"
      },
    ],
    responseMoves: ["Qc3", "Qxb4"],
  },
  {
    fen: "3k1r2/1R4R1/p7/q3p2p/3p4/8/2P1KP2/8 w - - 3 30",
    correctMoves: [
      {
        from: "b7",
        to: "b8",
        san: "Rb8#"
      },
    ],
    responseMoves: [],
  },
  {
    fen: "rn1qk2r/pbpp2pp/1p1bp3/4N3/2PPp3/4P2P/PP3PP1/R1BQKB1R w KQkq - 1 2",
    correctMoves: [
      {
        from: "d1",
        to: "h5",
        san: "Qh5+"
      },
      {
        from: "e5",
        to: "g6",
        san: "Nxg6"
      },
      {
        from: "h5",
        to: "h8",
        san: "Qxh8+"
      },
    ],
    responseMoves: ["g6", "hxg6"],
  },
  {
    fen: "r5r1/1p3pqk/p4Q1p/4pn2/P3R1N1/2P4P/1P4P1/2R4K b - - 0 29",
    correctMoves: [
      {
        from: "f5",
        to: "g3",
        san: "Ng3+"
      },
      {
        from: "g3",
        to: "e4",
        san: "Nxe4"
      },
    ],
    responseMoves: ["Kg1"],
  },
  {
    fen: "rn1qk2r/pbpp2pp/1p1bp3/4N3/2PPp3/4P2P/PP3PP1/R1BQKB1R w KQkq - 1 2",
    correctMoves: [
      {
        from: "d1",
        to: "h5",
        san: "Qh5+"
      },
      {
        from: "e5",
        to: "g6",
        san: "Nxg6"
      },
      {
        from: "h5",
        to: "h8",
        san: "Qxh8+"
      },
    ],
    responseMoves: ["g6", "hxg6"],
  },
  {
    fen: "r5r1/1p3pqk/p4Q1p/4pn2/P3R1N1/2P4P/1P4P1/2R4K b - - 0 29",
    correctMoves: [
      {
        from: "f5",
        to: "g3",
        san: "Ng3+"
      },
      {
        from: "g3",
        to: "e4",
        san: "Nxe4"
      },
    ],
    responseMoves: ["Kg1"],
  },
  {
    fen: "2r2r2/1p1b3k/3p2R1/3p3P/2nqP3/p1P2P2/PP4Q1/2K4R w - - 0 2",
    correctMoves: [
      {
        from: "g6",
        to: "h6",
        san: "Rh6+"
      },
      {
        from: "g2",
        to: "g6",
        san: "Qg6#"
      },
    ],
    responseMoves: ["Kxh6"],
  },
  {
    fen: "6rk/5R2/2pBp1q1/1p1nP3/1P1P2p1/7P/5Q1K/8 w - - 0 2",
    correctMoves: [
      {
        from: "f2",
        to: "h4",
        san: "Qh4+"
      },
      {
        from: "h4",
        to: "h5",
        san: "Qxh5#"
      },
    ],
    responseMoves: ["Qh5"],
  },
  {
    fen: "1r2r1k1/q3bpp1/p4n1p/2p2P2/8/Q3NP2/PPPRB1PP/2KR4 b - - 1 22",
    correctMoves: [
      {
        from: "c5",
        to: "c4",
        san: "c4"
      },
      {
        from: "e7",
        to: "b4",
        san: "Bb4"
      },
      {
        from: "b8",
        to: "b4",
        san: "Rxb4"
      },
    ],
    responseMoves: ["Qc3", "Qxb4"],
  },
  {
    fen: "3k1r2/1R4R1/p7/q3p2p/3p4/8/2P1KP2/8 w - - 3 30",
    correctMoves: [
      {
        from: "b7",
        to: "b8",
        san: "Rb8#"
      },
    ],
    responseMoves: [],
  },
  {
    fen: "rn1qk2r/pbpp2pp/1p1bp3/4N3/2PPp3/4P2P/PP3PP1/R1BQKB1R w KQkq - 1 2",
    correctMoves: [
      {
        from: "d1",
        to: "h5",
        san: "Qh5+"
      },
      {
        from: "e5",
        to: "g6",
        san: "Nxg6"
      },
      {
        from: "h5",
        to: "h8",
        san: "Qxh8+"
      },
    ],
    responseMoves: ["g6", "hxg6"],
  },
  {
    fen: "r5r1/1p3pqk/p4Q1p/4pn2/P3R1N1/2P4P/1P4P1/2R4K b - - 0 29",
    correctMoves: [
      {
        from: "f5",
        to: "g3",
        san: "Ng3+"
      },
      {
        from: "g3",
        to: "e4",
        san: "Nxe4"
      },
    ],
    responseMoves: ["Kg1"],
  },
  {
    fen: "2r2r2/1p1b3k/3p2R1/3p3P/2nqP3/p1P2P2/PP4Q1/2K4R w - - 0 2",
    correctMoves: [
      {
        from: "g6",
        to: "h6",
        san: "Rh6+"
      },
      {
        from: "g2",
        to: "g6",
        san: "Qg6#"
      },
    ],
    responseMoves: ["Kxh6"],
  },
  {
    fen: "6rk/5R2/2pBp1q1/1p1nP3/1P1P2p1/7P/5Q1K/8 w - - 0 2",
    correctMoves: [
      {
        from: "f2",
        to: "h4",
        san: "Qh4+"
      },
      {
        from: "h4",
        to: "h5",
        san: "Qxh5#"
      },
    ],
    responseMoves: ["Qh5"],
  },
  {
    fen: "1r2r1k1/q3bpp1/p4n1p/2p2P2/8/Q3NP2/PPPRB1PP/2KR4 b - - 1 22",
    correctMoves: [
      {
        from: "c5",
        to: "c4",
        san: "c4"
      },
      {
        from: "e7",
        to: "b4",
        san: "Bb4"
      },
      {
        from: "b8",
        to: "b4",
        san: "Rxb4"
      },
    ],
    responseMoves: ["Qc3", "Qxb4"],
  },
  {
    fen: "3k1r2/1R4R1/p7/q3p2p/3p4/8/2P1KP2/8 w - - 3 30",
    correctMoves: [
      {
        from: "b7",
        to: "b8",
        san: "Rb8#"
      },
    ],
    responseMoves: [],
  },
  {
    fen: "rn1qk2r/pbpp2pp/1p1bp3/4N3/2PPp3/4P2P/PP3PP1/R1BQKB1R w KQkq - 1 2",
    correctMoves: [
      {
        from: "d1",
        to: "h5",
        san: "Qh5+"
      },
      {
        from: "e5",
        to: "g6",
        san: "Nxg6"
      },
      {
        from: "h5",
        to: "h8",
        san: "Qxh8+"
      },
    ],
    responseMoves: ["g6", "hxg6"],
  },
  {
    fen: "r5r1/1p3pqk/p4Q1p/4pn2/P3R1N1/2P4P/1P4P1/2R4K b - - 0 29",
    correctMoves: [
      {
        from: "f5",
        to: "g3",
        san: "Ng3+"
      },
      {
        from: "g3",
        to: "e4",
        san: "Nxe4"
      },
    ],
    responseMoves: ["Kg1"],
  },
  {
    fen: "2r2r2/1p1b3k/3p2R1/3p3P/2nqP3/p1P2P2/PP4Q1/2K4R w - - 0 2",
    correctMoves: [
      {
        from: "g6",
        to: "h6",
        san: "Rh6+"
      },
      {
        from: "g2",
        to: "g6",
        san: "Qg6#"
      },
    ],
    responseMoves: ["Kxh6"],
  },
  {
    fen: "6rk/5R2/2pBp1q1/1p1nP3/1P1P2p1/7P/5Q1K/8 w - - 0 2",
    correctMoves: [
      {
        from: "f2",
        to: "h4",
        san: "Qh4+"
      },
      {
        from: "h4",
        to: "h5",
        san: "Qxh5#"
      },
    ],
    responseMoves: ["Qh5"],
  },
  {
    fen: "1r2r1k1/q3bpp1/p4n1p/2p2P2/8/Q3NP2/PPPRB1PP/2KR4 b - - 1 22",
    correctMoves: [
      {
        from: "c5",
        to: "c4",
        san: "c4"
      },
      {
        from: "e7",
        to: "b4",
        san: "Bb4"
      },
      {
        from: "b8",
        to: "b4",
        san: "Rxb4"
      },
    ],
    responseMoves: ["Qc3", "Qxb4"],
  },
  {
    fen: "3k1r2/1R4R1/p7/q3p2p/3p4/8/2P1KP2/8 w - - 3 30",
    correctMoves: [
      {
        from: "b7",
        to: "b8",
        san: "Rb8#"
      },
    ],
    responseMoves: [],
  },
  {
    fen: "rn1qk2r/pbpp2pp/1p1bp3/4N3/2PPp3/4P2P/PP3PP1/R1BQKB1R w KQkq - 1 2",
    correctMoves: [
      {
        from: "d1",
        to: "h5",
        san: "Qh5+"
      },
      {
        from: "e5",
        to: "g6",
        san: "Nxg6"
      },
      {
        from: "h5",
        to: "h8",
        san: "Qxh8+"
      },
    ],
    responseMoves: ["g6", "hxg6"],
  },
  {
    fen: "r5r1/1p3pqk/p4Q1p/4pn2/P3R1N1/2P4P/1P4P1/2R4K b - - 0 29",
    correctMoves: [
      {
        from: "f5",
        to: "g3",
        san: "Ng3+"
      },
      {
        from: "g3",
        to: "e4",
        san: "Nxe4"
      },
    ],
    responseMoves: ["Kg1"],
  },
  {
    fen: "2r2r2/1p1b3k/3p2R1/3p3P/2nqP3/p1P2P2/PP4Q1/2K4R w - - 0 2",
    correctMoves: [
      {
        from: "g6",
        to: "h6",
        san: "Rh6+"
      },
      {
        from: "g2",
        to: "g6",
        san: "Qg6#"
      },
    ],
    responseMoves: ["Kxh6"],
  },
  {
    fen: "6rk/5R2/2pBp1q1/1p1nP3/1P1P2p1/7P/5Q1K/8 w - - 0 2",
    correctMoves: [
      {
        from: "f2",
        to: "h4",
        san: "Qh4+"
      },
      {
        from: "h4",
        to: "h5",
        san: "Qxh5#"
      },
    ],
    responseMoves: ["Qh5"],
  },
  {
    fen: "1r2r1k1/q3bpp1/p4n1p/2p2P2/8/Q3NP2/PPPRB1PP/2KR4 b - - 1 22",
    correctMoves: [
      {
        from: "c5",
        to: "c4",
        san: "c4"
      },
      {
        from: "e7",
        to: "b4",
        san: "Bb4"
      },
      {
        from: "b8",
        to: "b4",
        san: "Rxb4"
      },
    ],
    responseMoves: ["Qc3", "Qxb4"],
  },
  {
    fen: "3k1r2/1R4R1/p7/q3p2p/3p4/8/2P1KP2/8 w - - 3 30",
    correctMoves: [
      {
        from: "b7",
        to: "b8",
        san: "Rb8#"
      },
    ],
    responseMoves: [],
  },
  {
    fen: "rn1qk2r/pbpp2pp/1p1bp3/4N3/2PPp3/4P2P/PP3PP1/R1BQKB1R w KQkq - 1 2",
    correctMoves: [
      {
        from: "d1",
        to: "h5",
        san: "Qh5+"
      },
      {
        from: "e5",
        to: "g6",
        san: "Nxg6"
      },
      {
        from: "h5",
        to: "h8",
        san: "Qxh8+"
      },
    ],
    responseMoves: ["g6", "hxg6"],
  },
  {
    fen: "r5r1/1p3pqk/p4Q1p/4pn2/P3R1N1/2P4P/1P4P1/2R4K b - - 0 29",
    correctMoves: [
      {
        from: "f5",
        to: "g3",
        san: "Ng3+"
      },
      {
        from: "g3",
        to: "e4",
        san: "Nxe4"
      },
    ],
    responseMoves: ["Kg1"],
  },
  {
    fen: "2r2r2/1p1b3k/3p2R1/3p3P/2nqP3/p1P2P2/PP4Q1/2K4R w - - 0 2",
    correctMoves: [
      {
        from: "g6",
        to: "h6",
        san: "Rh6+"
      },
      {
        from: "g2",
        to: "g6",
        san: "Qg6#"
      },
    ],
    responseMoves: ["Kxh6"],
  },
  {
    fen: "6rk/5R2/2pBp1q1/1p1nP3/1P1P2p1/7P/5Q1K/8 w - - 0 2",
    correctMoves: [
      {
        from: "f2",
        to: "h4",
        san: "Qh4+"
      },
      {
        from: "h4",
        to: "h5",
        san: "Qxh5#"
      },
    ],
    responseMoves: ["Qh5"],
  },
  {
    fen: "1r2r1k1/q3bpp1/p4n1p/2p2P2/8/Q3NP2/PPPRB1PP/2KR4 b - - 1 22",
    correctMoves: [
      {
        from: "c5",
        to: "c4",
        san: "c4"
      },
      {
        from: "e7",
        to: "b4",
        san: "Bb4"
      },
      {
        from: "b8",
        to: "b4",
        san: "Rxb4"
      },
    ],
    responseMoves: ["Qc3", "Qxb4"],
  },
  {
    fen: "3k1r2/1R4R1/p7/q3p2p/3p4/8/2P1KP2/8 w - - 3 30",
    correctMoves: [
      {
        from: "b7",
        to: "b8",
        san: "Rb8#"
      },
    ],
    responseMoves: [],
  },
  {
    fen: "rn1qk2r/pbpp2pp/1p1bp3/4N3/2PPp3/4P2P/PP3PP1/R1BQKB1R w KQkq - 1 2",
    correctMoves: [
      {
        from: "d1",
        to: "h5",
        san: "Qh5+"
      },
      {
        from: "e5",
        to: "g6",
        san: "Nxg6"
      },
      {
        from: "h5",
        to: "h8",
        san: "Qxh8+"
      },
    ],
    responseMoves: ["g6", "hxg6"],
  },
  {
    fen: "r5r1/1p3pqk/p4Q1p/4pn2/P3R1N1/2P4P/1P4P1/2R4K b - - 0 29",
    correctMoves: [
      {
        from: "f5",
        to: "g3",
        san: "Ng3+"
      },
      {
        from: "g3",
        to: "e4",
        san: "Nxe4"
      },
    ],
    responseMoves: ["Kg1"],
  },
  {
    fen: "2r2r2/1p1b3k/3p2R1/3p3P/2nqP3/p1P2P2/PP4Q1/2K4R w - - 0 2",
    correctMoves: [
      {
        from: "g6",
        to: "h6",
        san: "Rh6+"
      },
      {
        from: "g2",
        to: "g6",
        san: "Qg6#"
      },
    ],
    responseMoves: ["Kxh6"],
  },
  {
    fen: "6rk/5R2/2pBp1q1/1p1nP3/1P1P2p1/7P/5Q1K/8 w - - 0 2",
    correctMoves: [
      {
        from: "f2",
        to: "h4",
        san: "Qh4+"
      },
      {
        from: "h4",
        to: "h5",
        san: "Qxh5#"
      },
    ],
    responseMoves: ["Qh5"],
  },
  {
    fen: "1r2r1k1/q3bpp1/p4n1p/2p2P2/8/Q3NP2/PPPRB1PP/2KR4 b - - 1 22",
    correctMoves: [
      {
        from: "c5",
        to: "c4",
        san: "c4"
      },
      {
        from: "e7",
        to: "b4",
        san: "Bb4"
      },
      {
        from: "b8",
        to: "b4",
        san: "Rxb4"
      },
    ],
    responseMoves: ["Qc3", "Qxb4"],
  },
  {
    fen: "3k1r2/1R4R1/p7/q3p2p/3p4/8/2P1KP2/8 w - - 3 30",
    correctMoves: [
      {
        from: "b7",
        to: "b8",
        san: "Rb8#"
      },
    ],
    responseMoves: [],
  },
  {
    fen: "rn1qk2r/pbpp2pp/1p1bp3/4N3/2PPp3/4P2P/PP3PP1/R1BQKB1R w KQkq - 1 2",
    correctMoves: [
      {
        from: "d1",
        to: "h5",
        san: "Qh5+"
      },
      {
        from: "e5",
        to: "g6",
        san: "Nxg6"
      },
      {
        from: "h5",
        to: "h8",
        san: "Qxh8+"
      },
    ],
    responseMoves: ["g6", "hxg6"],
  },
  {
    fen: "r5r1/1p3pqk/p4Q1p/4pn2/P3R1N1/2P4P/1P4P1/2R4K b - - 0 29",
    correctMoves: [
      {
        from: "f5",
        to: "g3",
        san: "Ng3+"
      },
      {
        from: "g3",
        to: "e4",
        san: "Nxe4"
      },
    ],
    responseMoves: ["Kg1"],
  },
  {
    fen: "2r2r2/1p1b3k/3p2R1/3p3P/2nqP3/p1P2P2/PP4Q1/2K4R w - - 0 2",
    correctMoves: [
      {
        from: "g6",
        to: "h6",
        san: "Rh6+"
      },
      {
        from: "g2",
        to: "g6",
        san: "Qg6#"
      },
    ],
    responseMoves: ["Kxh6"],
  },
  {
    fen: "6rk/5R2/2pBp1q1/1p1nP3/1P1P2p1/7P/5Q1K/8 w - - 0 2",
    correctMoves: [
      {
        from: "f2",
        to: "h4",
        san: "Qh4+"
      },
      {
        from: "h4",
        to: "h5",
        san: "Qxh5#"
      },
    ],
    responseMoves: ["Qh5"],
  },
  {
    fen: "1r2r1k1/q3bpp1/p4n1p/2p2P2/8/Q3NP2/PPPRB1PP/2KR4 b - - 1 22",
    correctMoves: [
      {
        from: "c5",
        to: "c4",
        san: "c4"
      },
      {
        from: "e7",
        to: "b4",
        san: "Bb4"
      },
      {
        from: "b8",
        to: "b4",
        san: "Rxb4"
      },
    ],
    responseMoves: ["Qc3", "Qxb4"],
  },
  {
    fen: "3k1r2/1R4R1/p7/q3p2p/3p4/8/2P1KP2/8 w - - 3 30",
    correctMoves: [
      {
        from: "b7",
        to: "b8",
        san: "Rb8#"
      },
    ],
    responseMoves: [],
  },
  {
    fen: "rn1qk2r/pbpp2pp/1p1bp3/4N3/2PPp3/4P2P/PP3PP1/R1BQKB1R w KQkq - 1 2",
    correctMoves: [
      {
        from: "d1",
        to: "h5",
        san: "Qh5+"
      },
      {
        from: "e5",
        to: "g6",
        san: "Nxg6"
      },
      {
        from: "h5",
        to: "h8",
        san: "Qxh8+"
      },
    ],
    responseMoves: ["g6", "hxg6"],
  },
  {
    fen: "r5r1/1p3pqk/p4Q1p/4pn2/P3R1N1/2P4P/1P4P1/2R4K b - - 0 29",
    correctMoves: [
      {
        from: "f5",
        to: "g3",
        san: "Ng3+"
      },
      {
        from: "g3",
        to: "e4",
        san: "Nxe4"
      },
    ],
    responseMoves: ["Kg1"],
  },
  {
    fen: "2r2r2/1p1b3k/3p2R1/3p3P/2nqP3/p1P2P2/PP4Q1/2K4R w - - 0 2",
    correctMoves: [
      {
        from: "g6",
        to: "h6",
        san: "Rh6+"
      },
      {
        from: "g2",
        to: "g6",
        san: "Qg6#"
      },
    ],
    responseMoves: ["Kxh6"],
  },
  {
    fen: "6rk/5R2/2pBp1q1/1p1nP3/1P1P2p1/7P/5Q1K/8 w - - 0 2",
    correctMoves: [
      {
        from: "f2",
        to: "h4",
        san: "Qh4+"
      },
      {
        from: "h4",
        to: "h5",
        san: "Qxh5#"
      },
    ],
    responseMoves: ["Qh5"],
  },
  {
    fen: "1r2r1k1/q3bpp1/p4n1p/2p2P2/8/Q3NP2/PPPRB1PP/2KR4 b - - 1 22",
    correctMoves: [
      {
        from: "c5",
        to: "c4",
        san: "c4"
      },
      {
        from: "e7",
        to: "b4",
        san: "Bb4"
      },
      {
        from: "b8",
        to: "b4",
        san: "Rxb4"
      },
    ],
    responseMoves: ["Qc3", "Qxb4"],
  },
  {
    fen: "3k1r2/1R4R1/p7/q3p2p/3p4/8/2P1KP2/8 w - - 3 30",
    correctMoves: [
      {
        from: "b7",
        to: "b8",
        san: "Rb8#"
      },
    ],
    responseMoves: [],
  },
  {
    fen: "rn1qk2r/pbpp2pp/1p1bp3/4N3/2PPp3/4P2P/PP3PP1/R1BQKB1R w KQkq - 1 2",
    correctMoves: [
      {
        from: "d1",
        to: "h5",
        san: "Qh5+"
      },
      {
        from: "e5",
        to: "g6",
        san: "Nxg6"
      },
      {
        from: "h5",
        to: "h8",
        san: "Qxh8+"
      },
    ],
    responseMoves: ["g6", "hxg6"],
  },
  {
    fen: "r5r1/1p3pqk/p4Q1p/4pn2/P3R1N1/2P4P/1P4P1/2R4K b - - 0 29",
    correctMoves: [
      {
        from: "f5",
        to: "g3",
        san: "Ng3+"
      },
      {
        from: "g3",
        to: "e4",
        san: "Nxe4"
      },
    ],
    responseMoves: ["Kg1"],
  },
  {
    fen: "2r2r2/1p1b3k/3p2R1/3p3P/2nqP3/p1P2P2/PP4Q1/2K4R w - - 0 2",
    correctMoves: [
      {
        from: "g6",
        to: "h6",
        san: "Rh6+"
      },
      {
        from: "g2",
        to: "g6",
        san: "Qg6#"
      },
    ],
    responseMoves: ["Kxh6"],
  },
  {
    fen: "6rk/5R2/2pBp1q1/1p1nP3/1P1P2p1/7P/5Q1K/8 w - - 0 2",
    correctMoves: [
      {
        from: "f2",
        to: "h4",
        san: "Qh4+"
      },
      {
        from: "h4",
        to: "h5",
        san: "Qxh5#"
      },
    ],
    responseMoves: ["Qh5"],
  },
  {
    fen: "1r2r1k1/q3bpp1/p4n1p/2p2P2/8/Q3NP2/PPPRB1PP/2KR4 b - - 1 22",
    correctMoves: [
      {
        from: "c5",
        to: "c4",
        san: "c4"
      },
      {
        from: "e7",
        to: "b4",
        san: "Bb4"
      },
      {
        from: "b8",
        to: "b4",
        san: "Rxb4"
      },
    ],
    responseMoves: ["Qc3", "Qxb4"],
  },
  {
    fen: "3k1r2/1R4R1/p7/q3p2p/3p4/8/2P1KP2/8 w - - 3 30",
    correctMoves: [
      {
        from: "b7",
        to: "b8",
        san: "Rb8#"
      },
    ],
    responseMoves: [],
  },
  {
    fen: "rn1qk2r/pbpp2pp/1p1bp3/4N3/2PPp3/4P2P/PP3PP1/R1BQKB1R w KQkq - 1 2",
    correctMoves: [
      {
        from: "d1",
        to: "h5",
        san: "Qh5+"
      },
      {
        from: "e5",
        to: "g6",
        san: "Nxg6"
      },
      {
        from: "h5",
        to: "h8",
        san: "Qxh8+"
      },
    ],
    responseMoves: ["g6", "hxg6"],
  },
  {
    fen: "r5r1/1p3pqk/p4Q1p/4pn2/P3R1N1/2P4P/1P4P1/2R4K b - - 0 29",
    correctMoves: [
      {
        from: "f5",
        to: "g3",
        san: "Ng3+"
      },
      {
        from: "g3",
        to: "e4",
        san: "Nxe4"
      },
    ],
    responseMoves: ["Kg1"],
  },
  {
    fen: "2r2r2/1p1b3k/3p2R1/3p3P/2nqP3/p1P2P2/PP4Q1/2K4R w - - 0 2",
    correctMoves: [
      {
        from: "g6",
        to: "h6",
        san: "Rh6+"
      },
      {
        from: "g2",
        to: "g6",
        san: "Qg6#"
      },
    ],
    responseMoves: ["Kxh6"],
  },
  {
    fen: "6rk/5R2/2pBp1q1/1p1nP3/1P1P2p1/7P/5Q1K/8 w - - 0 2",
    correctMoves: [
      {
        from: "f2",
        to: "h4",
        san: "Qh4+"
      },
      {
        from: "h4",
        to: "h5",
        san: "Qxh5#"
      },
    ],
    responseMoves: ["Qh5"],
  },
  {
    fen: "1r2r1k1/q3bpp1/p4n1p/2p2P2/8/Q3NP2/PPPRB1PP/2KR4 b - - 1 22",
    correctMoves: [
      {
        from: "c5",
        to: "c4",
        san: "c4"
      },
      {
        from: "e7",
        to: "b4",
        san: "Bb4"
      },
      {
        from: "b8",
        to: "b4",
        san: "Rxb4"
      },
    ],
    responseMoves: ["Qc3", "Qxb4"],
  },
  {
    fen: "3k1r2/1R4R1/p7/q3p2p/3p4/8/2P1KP2/8 w - - 3 30",
    correctMoves: [
      {
        from: "b7",
        to: "b8",
        san: "Rb8#"
      },
    ],
    responseMoves: [],
  },
  {
    fen: "rn1qk2r/pbpp2pp/1p1bp3/4N3/2PPp3/4P2P/PP3PP1/R1BQKB1R w KQkq - 1 2",
    correctMoves: [
      {
        from: "d1",
        to: "h5",
        san: "Qh5+"
      },
      {
        from: "e5",
        to: "g6",
        san: "Nxg6"
      },
      {
        from: "h5",
        to: "h8",
        san: "Qxh8+"
      },
    ],
    responseMoves: ["g6", "hxg6"],
  },
  {
    fen: "r5r1/1p3pqk/p4Q1p/4pn2/P3R1N1/2P4P/1P4P1/2R4K b - - 0 29",
    correctMoves: [
      {
        from: "f5",
        to: "g3",
        san: "Ng3+"
      },
      {
        from: "g3",
        to: "e4",
        san: "Nxe4"
      },
    ],
    responseMoves: ["Kg1"],
  },
  {
    fen: "2r2r2/1p1b3k/3p2R1/3p3P/2nqP3/p1P2P2/PP4Q1/2K4R w - - 0 2",
    correctMoves: [
      {
        from: "g6",
        to: "h6",
        san: "Rh6+"
      },
      {
        from: "g2",
        to: "g6",
        san: "Qg6#"
      },
    ],
    responseMoves: ["Kxh6"],
  },
  {
    fen: "6rk/5R2/2pBp1q1/1p1nP3/1P1P2p1/7P/5Q1K/8 w - - 0 2",
    correctMoves: [
      {
        from: "f2",
        to: "h4",
        san: "Qh4+"
      },
      {
        from: "h4",
        to: "h5",
        san: "Qxh5#"
      },
    ],
    responseMoves: ["Qh5"],
  },
  {
    fen: "1r2r1k1/q3bpp1/p4n1p/2p2P2/8/Q3NP2/PPPRB1PP/2KR4 b - - 1 22",
    correctMoves: [
      {
        from: "c5",
        to: "c4",
        san: "c4"
      },
      {
        from: "e7",
        to: "b4",
        san: "Bb4"
      },
      {
        from: "b8",
        to: "b4",
        san: "Rxb4"
      },
    ],
    responseMoves: ["Qc3", "Qxb4"],
  },
  {
    fen: "3k1r2/1R4R1/p7/q3p2p/3p4/8/2P1KP2/8 w - - 3 30",
    correctMoves: [
      {
        from: "b7",
        to: "b8",
        san: "Rb8#"
      },
    ],
    responseMoves: [],
  },
  {
    fen: "rn1qk2r/pbpp2pp/1p1bp3/4N3/2PPp3/4P2P/PP3PP1/R1BQKB1R w KQkq - 1 2",
    correctMoves: [
      {
        from: "d1",
        to: "h5",
        san: "Qh5+"
      },
      {
        from: "e5",
        to: "g6",
        san: "Nxg6"
      },
      {
        from: "h5",
        to: "h8",
        san: "Qxh8+"
      },
    ],
    responseMoves: ["g6", "hxg6"],
  },
  {
    fen: "r5r1/1p3pqk/p4Q1p/4pn2/P3R1N1/2P4P/1P4P1/2R4K b - - 0 29",
    correctMoves: [
      {
        from: "f5",
        to: "g3",
        san: "Ng3+"
      },
      {
        from: "g3",
        to: "e4",
        san: "Nxe4"
      },
    ],
    responseMoves: ["Kg1"],
  },
  {
    fen: "2r2r2/1p1b3k/3p2R1/3p3P/2nqP3/p1P2P2/PP4Q1/2K4R w - - 0 2",
    correctMoves: [
      {
        from: "g6",
        to: "h6",
        san: "Rh6+"
      },
      {
        from: "g2",
        to: "g6",
        san: "Qg6#"
      },
    ],
    responseMoves: ["Kxh6"],
  },
  {
    fen: "6rk/5R2/2pBp1q1/1p1nP3/1P1P2p1/7P/5Q1K/8 w - - 0 2",
    correctMoves: [
      {
        from: "f2",
        to: "h4",
        san: "Qh4+"
      },
      {
        from: "h4",
        to: "h5",
        san: "Qxh5#"
      },
    ],
    responseMoves: ["Qh5"],
  },
  {
    fen: "1r2r1k1/q3bpp1/p4n1p/2p2P2/8/Q3NP2/PPPRB1PP/2KR4 b - - 1 22",
    correctMoves: [
      {
        from: "c5",
        to: "c4",
        san: "c4"
      },
      {
        from: "e7",
        to: "b4",
        san: "Bb4"
      },
      {
        from: "b8",
        to: "b4",
        san: "Rxb4"
      },
    ],
    responseMoves: ["Qc3", "Qxb4"],
  },
  {
    fen: "3k1r2/1R4R1/p7/q3p2p/3p4/8/2P1KP2/8 w - - 3 30",
    correctMoves: [
      {
        from: "b7",
        to: "b8",
        san: "Rb8#"
      },
    ],
    responseMoves: [],
  },
  {
    fen: "rn1qk2r/pbpp2pp/1p1bp3/4N3/2PPp3/4P2P/PP3PP1/R1BQKB1R w KQkq - 1 2",
    correctMoves: [
      {
        from: "d1",
        to: "h5",
        san: "Qh5+"
      },
      {
        from: "e5",
        to: "g6",
        san: "Nxg6"
      },
      {
        from: "h5",
        to: "h8",
        san: "Qxh8+"
      },
    ],
    responseMoves: ["g6", "hxg6"],
  },
  {
    fen: "r5r1/1p3pqk/p4Q1p/4pn2/P3R1N1/2P4P/1P4P1/2R4K b - - 0 29",
    correctMoves: [
      {
        from: "f5",
        to: "g3",
        san: "Ng3+"
      },
      {
        from: "g3",
        to: "e4",
        san: "Nxe4"
      },
    ],
    responseMoves: ["Kg1"],
  },
  {
    fen: "2r2r2/1p1b3k/3p2R1/3p3P/2nqP3/p1P2P2/PP4Q1/2K4R w - - 0 2",
    correctMoves: [
      {
        from: "g6",
        to: "h6",
        san: "Rh6+"
      },
      {
        from: "g2",
        to: "g6",
        san: "Qg6#"
      },
    ],
    responseMoves: ["Kxh6"],
  },
  {
    fen: "6rk/5R2/2pBp1q1/1p1nP3/1P1P2p1/7P/5Q1K/8 w - - 0 2",
    correctMoves: [
      {
        from: "f2",
        to: "h4",
        san: "Qh4+"
      },
      {
        from: "h4",
        to: "h5",
        san: "Qxh5#"
      },
    ],
    responseMoves: ["Qh5"],
  },
  {
    fen: "1r2r1k1/q3bpp1/p4n1p/2p2P2/8/Q3NP2/PPPRB1PP/2KR4 b - - 1 22",
    correctMoves: [
      {
        from: "c5",
        to: "c4",
        san: "c4"
      },
      {
        from: "e7",
        to: "b4",
        san: "Bb4"
      },
      {
        from: "b8",
        to: "b4",
        san: "Rxb4"
      },
    ],
    responseMoves: ["Qc3", "Qxb4"],
  },
  {
    fen: "3k1r2/1R4R1/p7/q3p2p/3p4/8/2P1KP2/8 w - - 3 30",
    correctMoves: [
      {
        from: "b7",
        to: "b8",
        san: "Rb8#"
      },
    ],
    responseMoves: [],
  },
  {
    fen: "rn1qk2r/pbpp2pp/1p1bp3/4N3/2PPp3/4P2P/PP3PP1/R1BQKB1R w KQkq - 1 2",
    correctMoves: [
      {
        from: "d1",
        to: "h5",
        san: "Qh5+"
      },
      {
        from: "e5",
        to: "g6",
        san: "Nxg6"
      },
      {
        from: "h5",
        to: "h8",
        san: "Qxh8+"
      },
    ],
    responseMoves: ["g6", "hxg6"],
  },
  {
    fen: "r5r1/1p3pqk/p4Q1p/4pn2/P3R1N1/2P4P/1P4P1/2R4K b - - 0 29",
    correctMoves: [
      {
        from: "f5",
        to: "g3",
        san: "Ng3+"
      },
      {
        from: "g3",
        to: "e4",
        san: "Nxe4"
      },
    ],
    responseMoves: ["Kg1"],
  },
  {
    fen: "2r2r2/1p1b3k/3p2R1/3p3P/2nqP3/p1P2P2/PP4Q1/2K4R w - - 0 2",
    correctMoves: [
      {
        from: "g6",
        to: "h6",
        san: "Rh6+"
      },
      {
        from: "g2",
        to: "g6",
        san: "Qg6#"
      },
    ],
    responseMoves: ["Kxh6"],
  },
  {
    fen: "6rk/5R2/2pBp1q1/1p1nP3/1P1P2p1/7P/5Q1K/8 w - - 0 2",
    correctMoves: [
      {
        from: "f2",
        to: "h4",
        san: "Qh4+"
      },
      {
        from: "h4",
        to: "h5",
        san: "Qxh5#"
      },
    ],
    responseMoves: ["Qh5"],
  },
  {
    fen: "1r2r1k1/q3bpp1/p4n1p/2p2P2/8/Q3NP2/PPPRB1PP/2KR4 b - - 1 22",
    correctMoves: [
      {
        from: "c5",
        to: "c4",
        san: "c4"
      },
      {
        from: "e7",
        to: "b4",
        san: "Bb4"
      },
      {
        from: "b8",
        to: "b4",
        san: "Rxb4"
      },
    ],
    responseMoves: ["Qc3", "Qxb4"],
  },
  {
    fen: "3k1r2/1R4R1/p7/q3p2p/3p4/8/2P1KP2/8 w - - 3 30",
    correctMoves: [
      {
        from: "b7",
        to: "b8",
        san: "Rb8#"
      },
    ],
    responseMoves: [],
  },
  {
    fen: "rn1qk2r/pbpp2pp/1p1bp3/4N3/2PPp3/4P2P/PP3PP1/R1BQKB1R w KQkq - 1 2",
    correctMoves: [
      {
        from: "d1",
        to: "h5",
        san: "Qh5+"
      },
      {
        from: "e5",
        to: "g6",
        san: "Nxg6"
      },
      {
        from: "h5",
        to: "h8",
        san: "Qxh8+"
      },
    ],
    responseMoves: ["g6", "hxg6"],
  },
  {
    fen: "r5r1/1p3pqk/p4Q1p/4pn2/P3R1N1/2P4P/1P4P1/2R4K b - - 0 29",
    correctMoves: [
      {
        from: "f5",
        to: "g3",
        san: "Ng3+"
      },
      {
        from: "g3",
        to: "e4",
        san: "Nxe4"
      },
    ],
    responseMoves: ["Kg1"],
  },
  {
    fen: "2r2r2/1p1b3k/3p2R1/3p3P/2nqP3/p1P2P2/PP4Q1/2K4R w - - 0 2",
    correctMoves: [
      {
        from: "g6",
        to: "h6",
        san: "Rh6+"
      },
      {
        from: "g2",
        to: "g6",
        san: "Qg6#"
      },
    ],
    responseMoves: ["Kxh6"],
  },
  {
    fen: "6rk/5R2/2pBp1q1/1p1nP3/1P1P2p1/7P/5Q1K/8 w - - 0 2",
    correctMoves: [
      {
        from: "f2",
        to: "h4",
        san: "Qh4+"
      },
      {
        from: "h4",
        to: "h5",
        san: "Qxh5#"
      },
    ],
    responseMoves: ["Qh5"],
  },
  {
    fen: "1r2r1k1/q3bpp1/p4n1p/2p2P2/8/Q3NP2/PPPRB1PP/2KR4 b - - 1 22",
    correctMoves: [
      {
        from: "c5",
        to: "c4",
        san: "c4"
      },
      {
        from: "e7",
        to: "b4",
        san: "Bb4"
      },
      {
        from: "b8",
        to: "b4",
        san: "Rxb4"
      },
    ],
    responseMoves: ["Qc3", "Qxb4"],
  },
  {
    fen: "3k1r2/1R4R1/p7/q3p2p/3p4/8/2P1KP2/8 w - - 3 30",
    correctMoves: [
      {
        from: "b7",
        to: "b8",
        san: "Rb8#"
      },
    ],
    responseMoves: [],
  },
  {
    fen: "rn1qk2r/pbpp2pp/1p1bp3/4N3/2PPp3/4P2P/PP3PP1/R1BQKB1R w KQkq - 1 2",
    correctMoves: [
      {
        from: "d1",
        to: "h5",
        san: "Qh5+"
      },
      {
        from: "e5",
        to: "g6",
        san: "Nxg6"
      },
      {
        from: "h5",
        to: "h8",
        san: "Qxh8+"
      },
    ],
    responseMoves: ["g6", "hxg6"],
  },
  {
    fen: "r5r1/1p3pqk/p4Q1p/4pn2/P3R1N1/2P4P/1P4P1/2R4K b - - 0 29",
    correctMoves: [
      {
        from: "f5",
        to: "g3",
        san: "Ng3+"
      },
      {
        from: "g3",
        to: "e4",
        san: "Nxe4"
      },
    ],
    responseMoves: ["Kg1"],
  },
  {
    fen: "2r2r2/1p1b3k/3p2R1/3p3P/2nqP3/p1P2P2/PP4Q1/2K4R w - - 0 2",
    correctMoves: [
      {
        from: "g6",
        to: "h6",
        san: "Rh6+"
      },
      {
        from: "g2",
        to: "g6",
        san: "Qg6#"
      },
    ],
    responseMoves: ["Kxh6"],
  },
  {
    fen: "6rk/5R2/2pBp1q1/1p1nP3/1P1P2p1/7P/5Q1K/8 w - - 0 2",
    correctMoves: [
      {
        from: "f2",
        to: "h4",
        san: "Qh4+"
      },
      {
        from: "h4",
        to: "h5",
        san: "Qxh5#"
      },
    ],
    responseMoves: ["Qh5"],
  },
  {
    fen: "1r2r1k1/q3bpp1/p4n1p/2p2P2/8/Q3NP2/PPPRB1PP/2KR4 b - - 1 22",
    correctMoves: [
      {
        from: "c5",
        to: "c4",
        san: "c4"
      },
      {
        from: "e7",
        to: "b4",
        san: "Bb4"
      },
      {
        from: "b8",
        to: "b4",
        san: "Rxb4"
      },
    ],
    responseMoves: ["Qc3", "Qxb4"],
  },
  {
    fen: "3k1r2/1R4R1/p7/q3p2p/3p4/8/2P1KP2/8 w - - 3 30",
    correctMoves: [
      {
        from: "b7",
        to: "b8",
        san: "Rb8#"
      },
    ],
    responseMoves: [],
  },
  {
    fen: "rn1qk2r/pbpp2pp/1p1bp3/4N3/2PPp3/4P2P/PP3PP1/R1BQKB1R w KQkq - 1 2",
    correctMoves: [
      {
        from: "d1",
        to: "h5",
        san: "Qh5+"
      },
      {
        from: "e5",
        to: "g6",
        san: "Nxg6"
      },
      {
        from: "h5",
        to: "h8",
        san: "Qxh8+"
      },
    ],
    responseMoves: ["g6", "hxg6"],
  },
  {
    fen: "r5r1/1p3pqk/p4Q1p/4pn2/P3R1N1/2P4P/1P4P1/2R4K b - - 0 29",
    correctMoves: [
      {
        from: "f5",
        to: "g3",
        san: "Ng3+"
      },
      {
        from: "g3",
        to: "e4",
        san: "Nxe4"
      },
    ],
    responseMoves: ["Kg1"],
  },
  {
    fen: "2r2r2/1p1b3k/3p2R1/3p3P/2nqP3/p1P2P2/PP4Q1/2K4R w - - 0 2",
    correctMoves: [
      {
        from: "g6",
        to: "h6",
        san: "Rh6+"
      },
      {
        from: "g2",
        to: "g6",
        san: "Qg6#"
      },
    ],
    responseMoves: ["Kxh6"],
  },
  {
    fen: "6rk/5R2/2pBp1q1/1p1nP3/1P1P2p1/7P/5Q1K/8 w - - 0 2",
    correctMoves: [
      {
        from: "f2",
        to: "h4",
        san: "Qh4+"
      },
      {
        from: "h4",
        to: "h5",
        san: "Qxh5#"
      },
    ],
    responseMoves: ["Qh5"],
  },
  {
    fen: "1r2r1k1/q3bpp1/p4n1p/2p2P2/8/Q3NP2/PPPRB1PP/2KR4 b - - 1 22",
    correctMoves: [
      {
        from: "c5",
        to: "c4",
        san: "c4"
      },
      {
        from: "e7",
        to: "b4",
        san: "Bb4"
      },
      {
        from: "b8",
        to: "b4",
        san: "Rxb4"
      },
    ],
    responseMoves: ["Qc3", "Qxb4"],
  },
  {
    fen: "3k1r2/1R4R1/p7/q3p2p/3p4/8/2P1KP2/8 w - - 3 30",
    correctMoves: [
      {
        from: "b7",
        to: "b8",
        san: "Rb8#"
      },
    ],
    responseMoves: [],
  },
  {
    fen: "rn1qk2r/pbpp2pp/1p1bp3/4N3/2PPp3/4P2P/PP3PP1/R1BQKB1R w KQkq - 1 2",
    correctMoves: [
      {
        from: "d1",
        to: "h5",
        san: "Qh5+"
      },
      {
        from: "e5",
        to: "g6",
        san: "Nxg6"
      },
      {
        from: "h5",
        to: "h8",
        san: "Qxh8+"
      },
    ],
    responseMoves: ["g6", "hxg6"],
  },
  {
    fen: "r5r1/1p3pqk/p4Q1p/4pn2/P3R1N1/2P4P/1P4P1/2R4K b - - 0 29",
    correctMoves: [
      {
        from: "f5",
        to: "g3",
        san: "Ng3+"
      },
      {
        from: "g3",
        to: "e4",
        san: "Nxe4"
      },
    ],
    responseMoves: ["Kg1"],
  },
  {
    fen: "2r2r2/1p1b3k/3p2R1/3p3P/2nqP3/p1P2P2/PP4Q1/2K4R w - - 0 2",
    correctMoves: [
      {
        from: "g6",
        to: "h6",
        san: "Rh6+"
      },
      {
        from: "g2",
        to: "g6",
        san: "Qg6#"
      },
    ],
    responseMoves: ["Kxh6"],
  },
  {
    fen: "6rk/5R2/2pBp1q1/1p1nP3/1P1P2p1/7P/5Q1K/8 w - - 0 2",
    correctMoves: [
      {
        from: "f2",
        to: "h4",
        san: "Qh4+"
      },
      {
        from: "h4",
        to: "h5",
        san: "Qxh5#"
      },
    ],
    responseMoves: ["Qh5"],
  },
  {
    fen: "1r2r1k1/q3bpp1/p4n1p/2p2P2/8/Q3NP2/PPPRB1PP/2KR4 b - - 1 22",
    correctMoves: [
      {
        from: "c5",
        to: "c4",
        san: "c4"
      },
      {
        from: "e7",
        to: "b4",
        san: "Bb4"
      },
      {
        from: "b8",
        to: "b4",
        san: "Rxb4"
      },
    ],
    responseMoves: ["Qc3", "Qxb4"],
  },
  {
    fen: "3k1r2/1R4R1/p7/q3p2p/3p4/8/2P1KP2/8 w - - 3 30",
    correctMoves: [
      {
        from: "b7",
        to: "b8",
        san: "Rb8#"
      },
    ],
    responseMoves: [],
  },
  {
    fen: "rn1qk2r/pbpp2pp/1p1bp3/4N3/2PPp3/4P2P/PP3PP1/R1BQKB1R w KQkq - 1 2",
    correctMoves: [
      {
        from: "d1",
        to: "h5",
        san: "Qh5+"
      },
      {
        from: "e5",
        to: "g6",
        san: "Nxg6"
      },
      {
        from: "h5",
        to: "h8",
        san: "Qxh8+"
      },
    ],
    responseMoves: ["g6", "hxg6"],
  },
  {
    fen: "r5r1/1p3pqk/p4Q1p/4pn2/P3R1N1/2P4P/1P4P1/2R4K b - - 0 29",
    correctMoves: [
      {
        from: "f5",
        to: "g3",
        san: "Ng3+"
      },
      {
        from: "g3",
        to: "e4",
        san: "Nxe4"
      },
    ],
    responseMoves: ["Kg1"],
  },
  {
    fen: "2r2r2/1p1b3k/3p2R1/3p3P/2nqP3/p1P2P2/PP4Q1/2K4R w - - 0 2",
    correctMoves: [
      {
        from: "g6",
        to: "h6",
        san: "Rh6+"
      },
      {
        from: "g2",
        to: "g6",
        san: "Qg6#"
      },
    ],
    responseMoves: ["Kxh6"],
  },
  {
    fen: "6rk/5R2/2pBp1q1/1p1nP3/1P1P2p1/7P/5Q1K/8 w - - 0 2",
    correctMoves: [
      {
        from: "f2",
        to: "h4",
        san: "Qh4+"
      },
      {
        from: "h4",
        to: "h5",
        san: "Qxh5#"
      },
    ],
    responseMoves: ["Qh5"],
  },
  {
    fen: "1r2r1k1/q3bpp1/p4n1p/2p2P2/8/Q3NP2/PPPRB1PP/2KR4 b - - 1 22",
    correctMoves: [
      {
        from: "c5",
        to: "c4",
        san: "c4"
      },
      {
        from: "e7",
        to: "b4",
        san: "Bb4"
      },
      {
        from: "b8",
        to: "b4",
        san: "Rxb4"
      },
    ],
    responseMoves: ["Qc3", "Qxb4"],
  },
  {
    fen: "3k1r2/1R4R1/p7/q3p2p/3p4/8/2P1KP2/8 w - - 3 30",
    correctMoves: [
      {
        from: "b7",
        to: "b8",
        san: "Rb8#"
      },
    ],
    responseMoves: [],
  },
  {
    fen: "rn1qk2r/pbpp2pp/1p1bp3/4N3/2PPp3/4P2P/PP3PP1/R1BQKB1R w KQkq - 1 2",
    correctMoves: [
      {
        from: "d1",
        to: "h5",
        san: "Qh5+"
      },
      {
        from: "e5",
        to: "g6",
        san: "Nxg6"
      },
      {
        from: "h5",
        to: "h8",
        san: "Qxh8+"
      },
    ],
    responseMoves: ["g6", "hxg6"],
  },
  {
    fen: "r5r1/1p3pqk/p4Q1p/4pn2/P3R1N1/2P4P/1P4P1/2R4K b - - 0 29",
    correctMoves: [
      {
        from: "f5",
        to: "g3",
        san: "Ng3+"
      },
      {
        from: "g3",
        to: "e4",
        san: "Nxe4"
      },
    ],
    responseMoves: ["Kg1"],
  },
  {
    fen: "2r2r2/1p1b3k/3p2R1/3p3P/2nqP3/p1P2P2/PP4Q1/2K4R w - - 0 2",
    correctMoves: [
      {
        from: "g6",
        to: "h6",
        san: "Rh6+"
      },
      {
        from: "g2",
        to: "g6",
        san: "Qg6#"
      },
    ],
    responseMoves: ["Kxh6"],
  },
  {
    fen: "6rk/5R2/2pBp1q1/1p1nP3/1P1P2p1/7P/5Q1K/8 w - - 0 2",
    correctMoves: [
      {
        from: "f2",
        to: "h4",
        san: "Qh4+"
      },
      {
        from: "h4",
        to: "h5",
        san: "Qxh5#"
      },
    ],
    responseMoves: ["Qh5"],
  },
  {
    fen: "1r2r1k1/q3bpp1/p4n1p/2p2P2/8/Q3NP2/PPPRB1PP/2KR4 b - - 1 22",
    correctMoves: [
      {
        from: "c5",
        to: "c4",
        san: "c4"
      },
      {
        from: "e7",
        to: "b4",
        san: "Bb4"
      },
      {
        from: "b8",
        to: "b4",
        san: "Rxb4"
      },
    ],
    responseMoves: ["Qc3", "Qxb4"],
  },
  {
    fen: "3k1r2/1R4R1/p7/q3p2p/3p4/8/2P1KP2/8 w - - 3 30",
    correctMoves: [
      {
        from: "b7",
        to: "b8",
        san: "Rb8#"
      },
    ],
    responseMoves: [],
  },
  {
    fen: "rn1qk2r/pbpp2pp/1p1bp3/4N3/2PPp3/4P2P/PP3PP1/R1BQKB1R w KQkq - 1 2",
    correctMoves: [
      {
        from: "d1",
        to: "h5",
        san: "Qh5+"
      },
      {
        from: "e5",
        to: "g6",
        san: "Nxg6"
      },
      {
        from: "h5",
        to: "h8",
        san: "Qxh8+"
      },
    ],
    responseMoves: ["g6", "hxg6"],
  },
  {
    fen: "r5r1/1p3pqk/p4Q1p/4pn2/P3R1N1/2P4P/1P4P1/2R4K b - - 0 29",
    correctMoves: [
      {
        from: "f5",
        to: "g3",
        san: "Ng3+"
      },
      {
        from: "g3",
        to: "e4",
        san: "Nxe4"
      },
    ],
    responseMoves: ["Kg1"],
  },
  {
    fen: "rn1qk2r/pbpp2pp/1p1bp3/4N3/2PPp3/4P2P/PP3PP1/R1BQKB1R w KQkq - 1 2",
    correctMoves: [
      {
        from: "d1",
        to: "h5",
        san: "Qh5+"
      },
      {
        from: "e5",
        to: "g6",
        san: "Nxg6"
      },
      {
        from: "h5",
        to: "h8",
        san: "Qxh8+"
      },
    ],
    responseMoves: ["g6", "hxg6"],
  },
  {
    fen: "r5r1/1p3pqk/p4Q1p/4pn2/P3R1N1/2P4P/1P4P1/2R4K b - - 0 29",
    correctMoves: [
      {
        from: "f5",
        to: "g3",
        san: "Ng3+"
      },
      {
        from: "g3",
        to: "e4",
        san: "Nxe4"
      },
    ],
    responseMoves: ["Kg1"],
  },
];

export default easyPuzzles;