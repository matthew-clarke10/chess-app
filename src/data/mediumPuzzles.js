const mediumPuzzles = [
  {
    fen: "r1bq1rk1/1p3p1n/p2p1b1Q/2p1p3/4P2P/1PNP1N2/1PP2PP1/R3K2R w KQ - 1 15",
    correctMoves: [
      {
        from: "f3",
        to: "g5",
        san: "Ng5"
      },
      {
        from: "e4",
        to: "f5",
        san: "exf5"
      },
      {
        from: "h4",
        to: "g5",
        san: "hxg5"
      },
    ],
    responseMoves: ["Bf5", "Bxg5"],
  }
  ,
  {
    fen: "3r1k2/1p4p1/p1b2n1p/2qNQ3/2P5/3B1P2/2P3PP/4RK2 w - - 1 2",
    correctMoves: [
      {
        from: "d5",
        to: "f6",
        san: "Nxf6"
      },
      {
        from: "f6",
        to: "h7",
        san: "Nh7+"
      },
      {
        from: "e1",
        to: "e5",
        san: "Rxe5"
      },
    ],
    responseMoves: ["Qxe5", "Kf7"],
  }
  ,
  {
    fen: "r4rk1/2p1qbpp/8/1p2p3/1P1nP3/p2P4/P2Q1P2/1K3BRR w - - 4 27",
    correctMoves: [
      {
        from: "g1",
        to: "g7",
        san: "Rxg7+"
      },
      {
        from: "d2",
        to: "h6",
        san: "Qh6+"
      },
      {
        from: "h6",
        to: "h7",
        san: "Qxh7#"
      },
    ],
    responseMoves: ["Kxg7", "Kg8"],
  }
  ,
  {
    fen: "3r2nr/1Qbk1ppp/1pB3q1/p1p5/2P1NP2/4n3/PP4PP/R4RK1 b - - 5 20",
    correctMoves: [
      {
        from: "g6",
        to: "c6",
        san: "Qxc6"
      },
      {
        from: "e3",
        to: "d1",
        san: "Nxd1"
      },
      {
        from: "d7",
        to: "e7",
        san: "Ke7"
      },
      {
        from: "d8",
        to: "d1",
        san: "Rxd1+"
      },
    ],
    responseMoves: ["Rfd1", "Rxd1", "Qxc6"],
  }
  ,
  {
    fen: "rnb2rk1/pp3ppp/2p5/8/2Bq4/2nP1Q2/P1P2PPP/R1B1R1K1 w - - 2 14",
    correctMoves: [
      {
        from: "f3",
        to: "f7",
        san: "Qxf7+"
      },
      {
        from: "e1",
        to: "ge86",
        san: "Re8#"
      },
    ],
    responseMoves: ["Rxf7"],
  }
  ,
  {
    fen: "4q3/1p6/1k1p3Q/2pPp2P/1n2P1bR/R1K2N2/1PP3r1/6N1 b - - 6 29",
    correctMoves: [
      {
        from: "g2",
        to: "c2",
        san: "Rxc2+"
      },
      {
        from: "c5",
        to: "c4",
        san: "c4+"
      },
      {
        from: "e8",
        to: "b5",
        san: "Qb5#"
      },
    ],
    responseMoves: ["Kb3", "Kxb4"],
  }
  ,
  {
    fen: "rn1q2kr/pp2n1pp/3b4/2p3N1/3p2b1/8/PPP1QPPP/RNB1K2R w KQ - 2 10",
    correctMoves: [
      {
        from: "e2",
        to: "c4",
        san: "Qc4+"
      },
      {
        from: "c4",
        to: "d5",
        san: "Qxd5+"
      },
    ],
    responseMoves: ["Nd5"],
  }
  ,
  {
    fen: "1kq3r1/p1p2Q2/Pp6/1P2P3/3B1P2/2P4r/6P1/R3R1K1 b - - 0 31",
    correctMoves: [
      {
        from: "g8",
        to: "g2",
        san: "Rxg2+"
      },
      {
        from: "c8",
        to: "g4",
        san: "Qg4+"
      },
      {
        from: "g4",
        to: "f3",
        san: "Qf3+"
      },
      {
        from: "h3",
        to: "h1",
        san: "Rh1#"
      },
    ],
    responseMoves: ["Kxg2", "Kf1", "Bf2"],
  }
  ,
  {
    fen: "8/8/5k2/2q5/p4K2/P2Q1PP1/7P/8 b - - 1 49",
    correctMoves: [
      {
        from: "c5",
        to: "g5",
        san: "Qg5+"
      },
      {
        from: "g5",
        to: "e5",
        san: "Qe5#"
      },
    ],
    responseMoves: ["Ke4"],
  }
  ,
  {
    fen: "2kr3r/p1p1n3/2q5/2p1ppp1/2N3p1/2PP2P1/PP1K1P1N/R2Q3R b - - 1 1",
    correctMoves: [
      {
        from: "d8",
        to: "d3",
        san: "Rxd3+"
      },
      {
        from: "c6",
        to: "e4",
        san: "Qe4+"
      },
      {
        from: "h8",
        to: "d8",
        san: "Rd8+"
      },
      {
        from: "d8",
        to: "d1",
        san: "Rxd1+"
      },
      {
        from: "e4",
        to: "c4",
        san: "Qxc4"
      },
    ],
    responseMoves: ["Kxd3", "Kd2", "Kc1", "Rxd1"],
  }
  ,
  {
    fen: "2r5/4Pk2/5P2/p3B1P1/5K2/1pp5/8/8 w - - 0 2",
    correctMoves: [
      {
        from: "f4",
        to: "f5",
        san: "Kf5"
      },
      {
        from: "e5",
        to: "c3",
        san: "Bxc3"
      },
    ],
    responseMoves: ["Rg8"],
  }
  ,
  {
    fen: "r2r2k1/pp2ppbp/nq4p1/4N3/3PB1b1/4B3/PPQ2PPP/1R2K2R b K - 1 1",
    correctMoves: [
      {
        from: "g7",
        to: "e5",
        san: "Bxe5"
      },
      {
        from: "b6",
        to: "b4",
        san: "Qb4+"
      },
    ],
    responseMoves: ["dxe5"],
  }
  ,
  {
    fen: "5rk1/pp3qp1/2p1pr1p/2PB4/3PRnQ1/8/P2B2PP/4R1K1 b - - 0 23",
    correctMoves: [
      {
        from: "f4",
        to: "h3",
        san: "Nh3+"
      },
      {
        from: "f6",
        to: "f1",
        san: "Rf1+"
      },
      {
        from: "f7",
        to: "f1",
        san: "Qxf1#"
      },
    ],
    responseMoves: ["gxh3", "Rxf1"],
  }
  ,
  {
    fen: "5r1k/ppp3p1/2nb4/5q2/5B2/P1P2pP1/1P3P1P/R2Q1RK1 b - - 2 24",
    correctMoves: [
      {
        from: "c6",
        to: "e5",
        san: "Ne5"
      },
      {
        from: "f5",
        to: "h3",
        san: "Qh3"
      },
      {
        from: "f8",
        to: "f3",
        san: "Rxf3"
      },
      {
        from: "c7",
        to: "d6",
        san: "cxd6"
      },
    ],
    responseMoves: ["Bxe5", "Qxf3", "Bxd6"],
  }
  ,
  {
    fen: "2k4r/pp6/3rpq2/3PR1p1/1P1P2p1/P2Q2P1/5P2/R5K1 b - - 0 24",
    correctMoves: [
      {
        from: "f6",
        to: "h6",
        san: "Qh6"
      },
      {
        from: "h6",
        to: "h2",
        san: "Qh2+"
      },
      {
        from: "h2",
        to: "h1",
        san: "Qh1+"
      },
      {
        from: "h8",
        to: "h1",
        san: "Rxh1+"
      },
      {
        from: "h1",
        to: "a1",
        san: "Rxa1"
      },
    ],
    responseMoves: ["Qe4", "Kf1", "Qxh1", "Ke2"],
  }
  ,
  {
    fen: "6k1/p3bpp1/2p4r/7r/1PQ1pP2/2P1P1Pq/PB4RP/R5K1 b - - 4 24",
    correctMoves: [
      {
        from: "h3",
        to: "g2",
        san: "Qxg2+"
      },
      {
        from: "h5",
        to: "h2",
        san: "Rxh2+"
      },
      {
        from: "h2",
        to: "h1",
        san: "Rh1+"
      },
      {
        from: "h6",
        to: "h2",
        san: "R6h2#"
      },
    ],
    responseMoves: ["Kxg2", "Kf1", "Ke2"],
  }
  ,
  {
    fen: "r4rk1/1bp1qpp1/ppn2b1p/3ppQ2/P2P4/1NP1PNPB/1P3P1P/R4RK1 b - - 1 16",
    correctMoves: [
      {
        from: "b7",
        to: "c8",
        san: "Bc8"
      },
      {
        from: "g7",
        to: "g6",
        san: "g6"
      },
      {
        from: "f6",
        to: "g7",
        san: "Bg7"
      },
    ],
    responseMoves: ["Qh5", "Qxh6"]
  }
  ,
  {
    fen: "6k1/1p1r1r1p/p3Q1p1/8/2P5/2P5/P1q3PP/R4R1K w - - 0 26",
    correctMoves: [
      {
        from: "f1",
        to: "f7",
        san: "Rxf7"
      },
      {
        from: "a1",
        to: "f1",
        san: "Rf1"
      },
      {
        from: "f1",
        to: "f5",
        san: "Rxf5"
      },
    ],
    responseMoves: ["Rxf7", "Qf5"]
  },
  {
    fen: "r6k/1p3Q1p/1n3P2/p5PR/1K1pP3/1P1P4/2P5/q7 w - a6 0 38",
    correctMoves: [
      {
        from: "b4",
        to: "b5",
        san: "Kb5"
      },
      {
        from: "b3",
        to: "a4",
        san: "bxa4"
      },
    ],
    responseMoves: ["Qa4+"]
  }
  ,
  {
    fen: "3r2k1/5pp1/p5rp/1pPpBn2/1P6/P2Q2Pq/5P2/3RR1K1 b - - 12 29",
    correctMoves: [
      {
        from: "f5",
        to: "h4",
        san: "Nh4"
      },
      {
        from: "d5",
        to: "e4",
        san: "dxe4"
      },
      {
        from: "g8",
        to: "h7",
        san: "Kh7"
      },
      {
        from: "h7",
        to: "h8",
        san: "Kxh8"
      },
    ],
    responseMoves: ["Qe4", "Rxd8+", "Rh8+"]
  },
  {
    fen: "3q1r1k/p2b2R1/4ppQ1/1p2P3/8/PP2p3/5KPP/2r5 w - - 0 31",
    correctMoves: [
      {
        from: "f2",
        to: "g3",
        san: "Kg3"
      },
    ],
    responseMoves: []
  }
  ,
  {
    fen: "N1bk4/pp4pp/3p4/3P4/4KP2/6q1/PP6/R1Q5 b - - 2 38",
    correctMoves: [
      {
        from: "c8",
        to: "f5",
        san: "Bf5+"
      },
      {
        from: "g3",
        to: "g6",
        san: "Qg6#"
      },
    ],
    responseMoves: ["Kxf5"]
  },
  {
    fen: "r3k1r1/bppq1p2/3p1R1p/p3p2b/P3P2P/1N1PB3/1PP3P1/RB2Q1K1 b q - 0 19",
    correctMoves: [
      {
        from: "d7",
        to: "h3",
        san: "Qh3"
      },
    ],
    responseMoves: []
  },
  {
    fen: "1R6/p2N2pk/1p1pp2p/1P1b3P/1r6/6K1/8/8 w - - 5 46",
    correctMoves: [
      {
        from: "d7",
        to: "f8",
        san: "Nf8+"
      },
      {
        from: "f8",
        to: "g6",
        san: "Ng6+"
      },
      {
        from: "b8",
        to: "f8",
        san: "Rf8#"
      },
    ],
    responseMoves: ["Kg8", "Kf7"]
  },
  {
    fen: "3qr1k1/2p3p1/1p2np2/b2P3Q/4n3/6P1/1B3PK1/7R w - - 0 36",
    correctMoves: [
      {
        from: "d5",
        to: "e6",
        san: "dxe6"
      },
      {
        from: "h5",
        to: "h8",
        san: "Qh8+"
      },
      {
        from: "h8",
        to: "d8",
        san: "Qxd8"
      },
    ],
    responseMoves: ["Rxe6", "Kf7"]
  }
  ,
  {
    fen: "3rr3/1b3pk1/2q2n1p/2p2Pp1/2B1p1P1/1PN1Q2P/P1P1R2K/3R4 b - - 0 32",
    correctMoves: [
      {
        from: "d8",
        to: "d1",
        san: "Rxd1"
      },
      {
        from: "c6",
        to: "d6",
        san: "Qd6+"
      },
      {
        from: "d6",
        to: "d1",
        san: "Qxd1+"
      },
    ],
    responseMoves: ["Nxd1", "Kh1"],
  },
  {
    fen: "3r2k1/5Rp1/p1p4p/Pp6/1P6/2q1NQ2/5P2/5K2 b - - 0 35",
    correctMoves: [
      {
        from: "c3",
        to: "d3",
        san: "Qd3+"
      },
      {
        from: "d3",
        to: "g6",
        san: "Qg6+"
      },
      {
        from: "g6",
        to: "f7",
        san: "Qxf7+"
      },
      {
        from: "g8",
        to: "f7",
        san: "Kxf7"
      },
    ],
    responseMoves: ["Kg2", "Ng4", "Qxf7+"],
  },
  {
    fen: "6k1/3r1rp1/8/Q2pq2p/3Rp3/2P4P/1P1R1PP1/6K1 b - - 0 1",
    correctMoves: [
      {
        from: "e4",
        to: "e3",
        san: "e3"
      },
      {
        from: "e5",
        to: "e3",
        san: "Qxe3+"
      },
    ],
    responseMoves: ["fxe3"],
  },
  {
    fen: "5b1r/2p1kppp/2Q1q3/4p3/4P3/2P2P2/rP2K2P/n1BR4 w - - 1 22",
    correctMoves: [
      {
        from: "c1",
        to: "g5",
        san: "Bg5+"
      },
      {
        from: "c6",
        to: "c7",
        san: "Qxc7+"
      },
      {
        from: "d1",
        to: "d8",
        san: "Rd8#"
      },
    ],
    responseMoves: ["f6", "Ke8"],
  },
  {
    fen: "rnbq1rk1/ppp2pbp/3p1np1/4p1B1/3PPP2/2N5/PPPQ2PP/R3KBNR w KQ e6 0 7",
    correctMoves: [
      {
        from: "d4",
        to: "e5",
        san: "dxe5"
      },
      {
        from: "d2",
        to: "d8",
        san: "Qxd8"
      },
      {
        from: "f4",
        to: "e5",
        san: "fxe5"
      },
    ],
    responseMoves: ["dxe5", "Rxd8"],
  },
  {
    fen: "3r2k1/3r1ppp/8/4p3/n7/Bq2P3/4QPPP/RR4K1 b - - 1 1",
    correctMoves: [
      {
        from: "b3",
        to: "b1",
        san: "Qxb1+"
      },
      {
        from: "a4",
        to: "c3",
        san: "Nc3"
      },
      {
        from: "c3",
        to: "b1",
        san: "Nxb1"
      },
    ],
    responseMoves: ["Rxb1", "Qc2"],
  },
  {
    fen: "5r2/1q4p1/5k2/8/4p2R/2r4P/4Q1P1/5NK1 w - - 0 48",
    correctMoves: [
      {
        from: "h4",
        to: "f4",
        san: "Rf4+"
      },
      {
        from: "f4",
        to: "e4",
        san: "Rxe4+"
      },
      {
        from: "e4",
        to: "f4",
        san: "Rf4+"
      },
      {
        from: "e2",
        to: "e6",
        san: "Qe6+"
      },
      {
        from: "e6",
        to: "e8",
        san: "Qe8+"
      },
    ],
    responseMoves: ["Ke7", "Kf7", "Kg8", "Rf7"],
  },
  {
    fen: "2r1rk2/pp6/q4p2/3pN1Q1/3P4/2P5/3K1PPP/7R w - - 0 31",
    correctMoves: [
      {
        from: "g5",
        to: "h6",
        san: "Qh6+"
      },
      {
        from: "h6",
        to: "g6",
        san: "Qg6+"
      },
    ],
    responseMoves: ["Kg8"],
  },
  {
    fen: "rnbq1rk1/pp2bpp1/3ppn1p/1BP5/4P3/2N2N2/PPP2PPP/R1BQ1RK1 w - - 0 8",
    correctMoves: [
      {
        from: "c5",
        to: "d6",
        san: "cxd6"
      },
      {
        from: "d1",
        to: "d6",
        san: "Qxd6"
      },
      {
        from: "e4",
        to: "e5",
        san: "e5"
      },
      {
        from: "e5",
        to: "f6",
        san: "exf6"
      },
    ],
    responseMoves: ["Qxd6", "Bxd6", "Be7"],
  },
  {
    fen: "5rk1/2p2pp1/8/6q1/8/Q7/1PP2PbP/R3R1K1 b - - 1 23",
    correctMoves: [
      {
        from: "g2",
        to: "f3",
        san: "Bf3+"
      },
    ],
    responseMoves: [],
  },
  {
    fen: "4r1k1/p2Q1p1p/6p1/P4P2/6P1/R1P3KP/4q3/3R4 b - - 14 48",
    correctMoves: [
      {
        from: "e8",
        to: "e3",
        san: "Re3+"
      },
      {
        from: "e2",
        to: "f2",
        san: "Qf2+"
      },
      {
        from: "h7",
        to: "h6",
        san: "h6+"
      },
      {
        from: "f2",
        to: "h4",
        san: "Qh4+"
      },
      {
        from: "h4",
        to: "g5",
        san: "Qxg5#"
      },
    ],
    responseMoves: ["Kh4", "Kg5", "Kf6", "g5"],
  },
  {
    fen: "8/8/7p/p1k2PpP/1p2p1P1/1P2P3/5K2/8 b - - 15 60",
    correctMoves: [
      {
        from: "a5",
        to: "a4",
        san: "a4"
      },
      {
        from: "c5",
        to: "d6",
        san: "Kd6"
      },
      {
        from: "b4",
        to: "b3",
        san: "b3"
      },
      {
        from: "b3",
        to: "b2",
        san: "b2"
      },
      {
        from: "d6",
        to: "e7",
        san: "Ke7"
      },
      {
        from: "e7",
        to: "f8",
        san: "Kxf8"
      },
    ],
    responseMoves: ["f6", "bxa4", "a5", "f7", "f8=Q+"],
  },
  {
    fen: "r3kb1r/pp3ppp/2n4n/2pB2q1/3P2b1/5Q2/PPP2PPP/RNB1K2R w KQkq - 1 9",
    correctMoves: [
      {
        from: "d5",
        to: "c6",
        san: "Bxc6+"
      },
      {
        from: "f3",
        to: "c6",
        san: "Qxc6+"
      },
      {
        from: "c6",
        to: "a8",
        san: "Qxa8+"
      },
    ],
    responseMoves: ["bxc6", "Bd7"],
  },
  {
    fen: "1r2q3/2p1b1kp/p1N1pnp1/1p3b2/2pP1Q2/P1N5/1PP2P2/2KR2R1 w - - 4 23",
    correctMoves: [
      {
        from: "f4",
        to: "c7",
        san: "Qxc7"
      },
      {
        from: "c7",
        to: "e7",
        san: "Qxe7+"
      },
      {
        from: "c6",
        to: "e7",
        san: "Nxe7"
      },
    ],
    responseMoves: ["Rc8", "Qxe7"],
  },
  {
    fen: "r2q1rk1/pp4p1/2p2n1p/7P/4p1b1/P1B1P3/1PP1NP2/R2QK1R1 w Q - 4 19",
    correctMoves: [
      {
        from: "d1",
        to: "d8",
        san: "Qxd8"
      },
      {
        from: "c3",
        to: "f6",
        san: "Bxf6"
      },
      {
        from: "g1",
        to: "g4",
        san: "Rxg4"
      },
    ],
    responseMoves: ["Raxd8", "Rxf6"],
  },
  {
    fen: "r3r1k1/p4qpn/2p1bp1Q/4pR2/1p2P2B/3PN1R1/1P4PP/7K b - - 2 29",
    correctMoves: [
      {
        from: "e6",
        to: "f5",
        san: "Bxf5"
      },
      {
        from: "h7",
        to: "g5",
        san: "Ng5"
      },
      {
        from: "f6",
        to: "g5",
        san: "hxg5"
      },
    ],
    responseMoves: ["Nxf5", "Rxg5"],
  },
  {
    fen: "5b1r/p4pp1/b3p3/B1RR3p/4kPq1/4P3/P4KPP/8 w - - 0 27",
    correctMoves: [
      {
        from: "d5",
        to: "d4",
        san: "Rd4#"
      },
    ],
    responseMoves: [],
  },
  {
    fen: "8/2p2k2/8/ppp1PPpp/8/PP1P1K1P/8/8 b - - 0 1",
    correctMoves: [
      {
        from: "a5",
        to: "a4",
        san: "a4"
      },
      {
        from: "b5",
        to: "b4",
        san: "b4"
      },
      {
        from: "c5",
        to: "b4",
        san: "cxb4"
      },
      {
        from: "b4",
        to: "b3",
        san: "b4"
      },
      {
        from: "b3",
        to: "b2",
        san: "b2"
      },
      {
        from: "b2",
        to: "b1",
        san: "b1=Q"
      },
      {
        from: "b1",
        to: "h1",
        san: "Qh1+"
      },
      {
        from: "h1",
        to: "a8",
        san: "Qxa8"
      },
    ],
    responseMoves: ["bxa4", "axb4", "a5", "a6", "a7", "a8=Q", "Ke3"],
  },
  {
    fen: "1b1r4/k2q4/P2r4/1p5p/1P2Q1p1/6P1/2R2P1P/2R3K1 w - - 1 40",
    correctMoves: [
      {
        from: "c2",
        to: "c7",
        san: "Rc7+"
      },
      {
        from: "c1",
        to: "c7",
        san: "Rxc7+"
      },
      {
        from: "e4",
        to: "b7",
        san: "Qb7#"
      },
    ],
    responseMoves: ["Qxc7", "Bxc7"],
  },
  {
    fen: "5Q2/1Q4pk/5p1p/8/4Pp2/3P2PP/5qBK/8 b - - 3 40",
    correctMoves: [
      {
        from: "f4",
        to: "g3",
        san: "fxg3+"
      },
      {
        from: "f2",
        to: "e1",
        san: "Qe1+"
      },
      {
        from: "e1",
        to: "f1",
        san: "Qxf1#"
      },
    ],
    responseMoves: ["Kh1", "Bf1"],
  },
  {
    fen: "3rk2r/pp1n1ppp/1bp1pnq1/8/3P2P1/2P1BN1P/PP2QP2/R3KB1R w KQk - 1 14",
    correctMoves: [
      {
        from: "f3",
        to: "h4",
        san: "Nh4"
      },
      {
        from: "f1",
        to: "g2",
        san: "Bg2"
      },
      {
        from: "h4",
        to: "g2",
        san: "Nxg2"
      },
    ],
    responseMoves: ["Qe4", "Qxg2"],
  },
  {
    fen: "8/k1r5/1R6/PKp5/1pP5/8/8/8 b - - 8 58",
    correctMoves: [
      {
        from: "c7",
        to: "b7",
        san: "Rb7"
      },
      {
        from: "b4",
        to: "b3",
        san: "b3"
      },
      {
        from: "b7",
        to: "b6",
        san: "Rxb6"
      },
      {
        from: "a7",
        to: "b8",
        san: "Kb8"
      },
    ],
    responseMoves: ["Kxc5", "Kc6", "axb6+"],
  },
  {
    fen: "r3r1k1/ppp1qpp1/1bn4p/3p4/3P3N/P1Q1P1P1/1P3PKP/R1B2R2 b - - 0 17",
    correctMoves: [
      {
        from: "g7",
        to: "g5",
        san: "g5"
      },
      {
        from: "e7",
        to: "e4",
        san: "Qe4"
      },
      {
        from: "e4",
        to: "f3",
        san: "Qxf3"
      },
    ],
    responseMoves: ["Nf3", "Kg1"],
  },
  {
    fen: "2k2r1N/ppp3Qp/2n5/2b1p3/3q4/3P4/PPP2PPP/RNB2RK1 b - - 0 14",
    correctMoves: [
      {
        from: "f8",
        to: "f2",
        san: "Rxf2"
      },
      {
        from: "d4",
        to: "e3",
        san: "Qxe3"
      },
      {
        from: "c8",
        to: "b8",
        san: "Kb8"
      },
      {
        from: "f2",
        to: "f8",
        san: "Rf8+"
      },
      {
        from: "f8",
        to: "g8",
        san: "Rxg8"
      },
    ],
    responseMoves: ["Be3", "Qg4+", "Qg8+", "Kh1"],
  },
  {
    fen: "r5qk/7p/1Q5b/2pp2p1/1n4P1/7N/1PPB2BP/1K1R1R2 b - - 0 29",
    correctMoves: [
      {
        from: "a8",
        to: "a1",
        san: "Ra1+"
      },
      {
        from: "g8",
        to: "a8",
        san: "Qa8+"
      },
      {
        from: "a8",
        to: "a5",
        san: "Qxa5+"
      },
      {
        from: "a5",
        to: "a2",
        san: "Qa2+"
      },
      {
        from: "a2",
        to: "a1",
        san: "Qa1#"
      },
    ],
    responseMoves: ["Kxa1", "Qa5", "Kb1", "Kc1"],
  },
  {
    fen: "5rk1/1pp3pp/8/3P4/P3Pp2/5KP1/1pr1R1BP/1R6 b - - 0 32",
    correctMoves: [
      {
        from: "f4",
        to: "g3",
        san: "fxg3+"
      },
      {
        from: "c2",
        to: "e2",
        san: "Rxe2+"
      },
      {
        from: "f8",
        to: "f2",
        san: "Rf2+"
      },
      {
        from: "f2",
        to: "g2",
        san: "Rxg2"
      },
      {
        from: "c7",
        to: "d6",
        san: "cxd6"
      },
    ],
    responseMoves: ["Ke3", "Kxe2", "Ke3", "d6"],
  },
  {
    fen: "8/8/8/1b1P3p/2kB2p1/4KpP1/7P/8 b - - 1 1",
    correctMoves: [
      {
        from: "f3",
        to: "f2",
        san: "f2"
      },
      {
        from: "c4",
        to: "d4",
        san: "Kxd4"
      },
    ],
    responseMoves: ["Kxf2"],
  },
  {
    fen: "3b2k1/1R6/p6p/3P1p2/bB1N2p1/1r4P1/7P/4K3 b - - 2 39",
    correctMoves: [
      {
        from: "b3",
        to: "b4",
        san: "Rxb4"
      },
      {
        from: "d8",
        to: "a5",
        san: "Ba5"
      },
      {
        from: "a4",
        to: "c6",
        san: "Bxc6"
      },
      {
        from: "a5",
        to: "b4",
        san: "Bxb4+"
      },
    ],
    responseMoves: ["Rxb4", "Nc6", "dxc6"],
  },
  {
    fen: "r5k1/p1p3pp/1p2pr2/5p1q/3P2n1/P3PN2/1P2QPP1/R1B1R1K1 b - - 3 20",
    correctMoves: [
      {
        from: "f6",
        to: "h6",
        san: "Rh6"
      },
      {
        from: "h5",
        to: "h1",
        san: "Qh1+"
      },
      {
        from: "g4",
        to: "h2",
        san: "Nh2#"
      },
    ],
    responseMoves: ["Kf1", "Ng1"],
  },
  {
    fen: "2kr3r/pp1qppb1/2p1n1p1/3pP3/1PPPn1b1/2N1BN2/P3B1PP/2RQK2R w K - 1 15",
    correctMoves: [
      {
        from: "c4",
        to: "d5",
        san: "cxd5"
      },
      {
        from: "d5",
        to: "e6",
        san: "dxe6"
      },
      {
        from: "c1",
        to: "c3",
        san: "Rxc3"
      },
    ],
    responseMoves: ["Nxc3", "Qxe6"],
  },
  {
    fen: "1Q6/8/8/p7/Pq6/3k4/K7/8 w - - 5 61",
    correctMoves: [
      {
        from: "b8",
        to: "b4",
        san: "Qxb4"
      },
      {
        from: "a2",
        to: "b3",
        san: "Kb3"
      },
      {
        from: "b3",
        to: "b4",
        san: "Kxb4"
      },
      {
        from: "b4",
        to: "b5",
        san: "Kb5"
      },
      {
        from: "b5",
        to: "b6",
        san: "Kb6"
      },
      {
        from: "b6",
        to: "b7",
        san: "Kb7"
      },
    ],
    responseMoves: ["axb4", "Kd4", "Kd5", "Kd6", "Kd7"],
  },
  {
    fen: "8/8/8/2kP4/p2R3P/4K1P1/8/r7 b - - 2 42",
    correctMoves: [
      {
        from: "a1",
        to: "e1",
        san: "Re1+"
      },
      {
        from: "c5",
        to: "d4",
        san: "Kxd4+"
      },
      {
        from: "a4",
        to: "a3",
        san: "a3"
      },
      {
        from: "a3",
        to: "a2",
        san: "a2"
      },
    ],
    responseMoves: ["Kd2", "Kxe1", "Kd2"],
  },
  {
    fen: "r2qkbnr/1p1b3p/p2p4/3Np1p1/1pBnP3/5Q2/P1PP2PP/R1B1K1NR w KQkq - 4 12",
    correctMoves: [
      {
        from: "f3",
        to: "h5",
        san: "Qh5#"
      },
    ],
    responseMoves: [],
  },
  {
    fen: "r1bqk1nr/ppp1p2p/2n2p1b/3p4/3P4/7P/PPP2PP1/RNBQKBNR w KQkq - 1 6",
    correctMoves: [
      {
        from: "d1",
        to: "h5",
        san: "Qh5+"
      },
      {
        from: "c1",
        to: "h6",
        san: "Bxh6+"
      },
      {
        from: "h5",
        to: "h6",
        san: "Qxh6+"
      },
    ],
    responseMoves: ["Kf8", "Nxh6"],
  },
  {
    fen: "r5k1/ppp3pp/8/8/3np3/P3N2q/1PP2QR1/R5K1 b - - 1 1",
    correctMoves: [
      {
        from: "a8",
        to: "f8",
        san: "Rf8"
      },
      {
        from: "g8",
        to: "g7",
        san: "Kxg7"
      },
      {
        from: "h3",
        to: "g2",
        san: "Qxg2+"
      },
    ],
    responseMoves: ["Rxg7+", "Qg2+"],
  },
  {
    fen: "1R2Q3/6p1/2N2k1r/5pN1/5P2/2P5/P3BPKp/8 b - - 3 34",
    correctMoves: [
      {
        from: "a2",
        to: "a1",
        san: "a1=Q+"
      },
      {
        from: "h1",
        to: "h2",
        san: "Qh2+"
      },
      {
        from: "h6",
        to: "h3",
        san: "Rh3+"
      },
      {
        from: "h2",
        to: "h3",
        san: "Qxh3#"
      },
    ],
    responseMoves: ["Kg3", "Kf3", "Nxh3"],
  },
  {
    fen: "5k2/5p2/2P1p1p1/4P2p/3K1P1P/8/2B3P1/r7 w - - 1 2",
    correctMoves: [
      {
        from: "c6",
        to: "c7",
        san: "c7"
      },
      {
        from: "d4",
        to: "c5",
        san: "Kc5"
      },
    ],
    responseMoves: ["Ra8"],
  },
  {
    fen: "2k5/pppqb3/5nNp/4p3/4B3/2P3P1/PP1B3P/R2K1R2 b - - 0 22",
    correctMoves: [
      {
        from: "f6",
        to: "e4",
        san: "Nxe4"
      },
      {
        from: "c8",
        to: "d8",
        san: "Kd8"
      },
      {
        from: "b7",
        to: "c6",
        san: "bxc6"
      },
      {
        from: "d7",
        to: "d2",
        san: "Qxd2+"
      },
    ],
    responseMoves: ["Nxe7+", "Nc6+", "Kc2"],
  },
  {
    fen: "6k1/8/3n1Q2/r2N4/p1qP4/8/6KP/8 w - - 1 2",
    correctMoves: [
      {
        from: "d5",
        to: "e7",
        san: "Ne7+"
      },
      {
        from: "f6",
        to: "g6",
        san: "Qg6+"
      },
      {
        from: "g6",
        to: "h6",
        san: "Qh6#"
      },
    ],
    responseMoves: ["Kh7", "Kh8"],
  },
  {
    fen: "7k/2p3p1/1qB1Q2p/2bpB3/3p4/3P4/1Pp2PPP/6K1 w - - 0 2",
    correctMoves: [
      {
        from: "e6",
        to: "h6",
        san: "Qxh6+"
      },
      {
        from: "h6",
        to: "g7",
        san: "Qxg7+"
      },
    ],
    responseMoves: ["Kg8"],
  },
  {
    fen: "8/8/8/kPK2P2/P5pp/8/6P1/8 b - - 0 58",
    correctMoves: [
      {
        from: "h4",
        to: "h3",
        san: "h3"
      },
      {
        from: "g4",
        to: "g3",
        san: "g3"
      },
      {
        from: "g3",
        to: "g2",
        san: "g2"
      },
      {
        from: "g2",
        to: "g1",
        san: "g1=Q+"
      },
    ],
    responseMoves: ["gxh3", "f6", "f7"],
  },
  {
    fen: "3rk3/p4r2/2p5/1p5Q/2q5/1KP5/PP4PP/RN1R4 w - - 2 28",
    correctMoves: [
      {
        from: "b3",
        to: "c2",
        san: "Kc2"
      },
      {
        from: "c2",
        to: "c1",
        san: "Kc1"
      },
      {
        from: "c1",
        to: "d1",
        san: "Kxd1"
      },
    ],
    responseMoves: ["Qe4+", "Rxd1+"],
  },
  {
    fen: "4kb1r/4pppp/8/6Q1/5P2/2r1q1P1/P1n4P/3R1KNb w k - 0 28",
    correctMoves: [
      {
        from: "g5",
        to: "b5",
        san: "Qb5+"
      },
      {
        from: "b5",
        to: "b8",
        san: "Qb8+"
      },
      {
        from: "b8",
        to: "c8",
        san: "Qxc8#"
      },
    ],
    responseMoves: ["Rc6", "Rc8"],
  },
  {
    fen: "8/Pq4pk/7p/4Q3/4bp2/8/6PP/5BK1 b - - 0 1",
    correctMoves: [
      {
        from: "b7",
        to: "a7",
        san: "Qxa7+"
      },
      {
        from: "a7",
        to: "e3",
        san: "Qe3"
      },
    ],
    responseMoves: ["Kh1"],
  },
  {
    fen: "r3k2r/pp2bpp1/1qp1p1bp/3pP3/5B2/P2BPPP1/1PPQ3P/2KR3R b kq - 1 14",
    correctMoves: [
      {
        from: "g6",
        to: "d3",
        san: "Bxd3"
      },
      {
        from: "g7",
        to: "g5",
        san: "g5"
      },
      {
        from: "g5",
        to: "f4",
        san: "gxf4"
      },
    ],
    responseMoves: ["Qxd3", "g4"],
  },
  {
    fen: "r1bq1rk1/1p3p1n/p2p1b1Q/2p1p3/4P2P/1PNP1N2/1PP2PP1/R3K2R w KQ - 1 15",
    correctMoves: [
      {
        from: "f3",
        to: "g5",
        san: "Ng5"
      },
      {
        from: "e4",
        to: "f5",
        san: "exf5"
      },
      {
        from: "h4",
        to: "g5",
        san: "hxg5"
      },
    ],
    responseMoves: ["Bf5", "Bxg5"],
  }
  ,
  {
    fen: "3r1k2/1p4p1/p1b2n1p/2qNQ3/2P5/3B1P2/2P3PP/4RK2 w - - 1 2",
    correctMoves: [
      {
        from: "d5",
        to: "f6",
        san: "Nxf6"
      },
      {
        from: "f6",
        to: "h7",
        san: "Nh7+"
      },
      {
        from: "e1",
        to: "e5",
        san: "Rxe5"
      },
    ],
    responseMoves: ["Qxe5", "Kf7"],
  }
  ,
  {
    fen: "r4rk1/2p1qbpp/8/1p2p3/1P1nP3/p2P4/P2Q1P2/1K3BRR w - - 4 27",
    correctMoves: [
      {
        from: "g1",
        to: "g7",
        san: "Rxg7+"
      },
      {
        from: "d2",
        to: "h6",
        san: "Qh6+"
      },
      {
        from: "h6",
        to: "h7",
        san: "Qxh7#"
      },
    ],
    responseMoves: ["Kxg7", "Kg8"],
  }
  ,
  {
    fen: "3r2nr/1Qbk1ppp/1pB3q1/p1p5/2P1NP2/4n3/PP4PP/R4RK1 b - - 5 20",
    correctMoves: [
      {
        from: "g6",
        to: "c6",
        san: "Qxc6"
      },
      {
        from: "e3",
        to: "d1",
        san: "Nxd1"
      },
      {
        from: "d7",
        to: "e7",
        san: "Ke7"
      },
      {
        from: "d8",
        to: "d1",
        san: "Rxd1+"
      },
    ],
    responseMoves: ["Rfd1", "Rxd1", "Qxc6"],
  }
  ,
  {
    fen: "rnb2rk1/pp3ppp/2p5/8/2Bq4/2nP1Q2/P1P2PPP/R1B1R1K1 w - - 2 14",
    correctMoves: [
      {
        from: "f3",
        to: "f7",
        san: "Qxf7+"
      },
      {
        from: "e1",
        to: "ge86",
        san: "Re8#"
      },
    ],
    responseMoves: ["Rxf7"],
  }
  ,
  {
    fen: "4q3/1p6/1k1p3Q/2pPp2P/1n2P1bR/R1K2N2/1PP3r1/6N1 b - - 6 29",
    correctMoves: [
      {
        from: "g2",
        to: "c2",
        san: "Rxc2+"
      },
      {
        from: "c5",
        to: "c4",
        san: "c4+"
      },
      {
        from: "e8",
        to: "b5",
        san: "Qb5#"
      },
    ],
    responseMoves: ["Kb3", "Kxb4"],
  }
  ,
  {
    fen: "rn1q2kr/pp2n1pp/3b4/2p3N1/3p2b1/8/PPP1QPPP/RNB1K2R w KQ - 2 10",
    correctMoves: [
      {
        from: "e2",
        to: "c4",
        san: "Qc4+"
      },
      {
        from: "c4",
        to: "d5",
        san: "Qxd5+"
      },
    ],
    responseMoves: ["Nd5"],
  }
  ,
  {
    fen: "1kq3r1/p1p2Q2/Pp6/1P2P3/3B1P2/2P4r/6P1/R3R1K1 b - - 0 31",
    correctMoves: [
      {
        from: "g8",
        to: "g2",
        san: "Rxg2+"
      },
      {
        from: "c8",
        to: "g4",
        san: "Qg4+"
      },
      {
        from: "g4",
        to: "f3",
        san: "Qf3+"
      },
      {
        from: "h3",
        to: "h1",
        san: "Rh1#"
      },
    ],
    responseMoves: ["Kxg2", "Kf1", "Bf2"],
  }
  ,
  {
    fen: "8/8/5k2/2q5/p4K2/P2Q1PP1/7P/8 b - - 1 49",
    correctMoves: [
      {
        from: "c5",
        to: "g5",
        san: "Qg5+"
      },
      {
        from: "g5",
        to: "e5",
        san: "Qe5#"
      },
    ],
    responseMoves: ["Ke4"],
  }
  ,
  {
    fen: "2kr3r/p1p1n3/2q5/2p1ppp1/2N3p1/2PP2P1/PP1K1P1N/R2Q3R b - - 1 1",
    correctMoves: [
      {
        from: "d8",
        to: "d3",
        san: "Rxd3+"
      },
      {
        from: "c6",
        to: "e4",
        san: "Qe4+"
      },
      {
        from: "h8",
        to: "d8",
        san: "Rd8+"
      },
      {
        from: "d8",
        to: "d1",
        san: "Rxd1+"
      },
      {
        from: "e4",
        to: "c4",
        san: "Qxc4"
      },
    ],
    responseMoves: ["Kxd3", "Kd2", "Kc1", "Rxd1"],
  }
  ,
  {
    fen: "2r5/4Pk2/5P2/p3B1P1/5K2/1pp5/8/8 w - - 0 2",
    correctMoves: [
      {
        from: "f4",
        to: "f5",
        san: "Kf5"
      },
      {
        from: "e5",
        to: "c3",
        san: "Bxc3"
      },
    ],
    responseMoves: ["Rg8"],
  }
  ,
  {
    fen: "r2r2k1/pp2ppbp/nq4p1/4N3/3PB1b1/4B3/PPQ2PPP/1R2K2R b K - 1 1",
    correctMoves: [
      {
        from: "g7",
        to: "e5",
        san: "Bxe5"
      },
      {
        from: "b6",
        to: "b4",
        san: "Qb4+"
      },
    ],
    responseMoves: ["dxe5"],
  }
  ,
  {
    fen: "5rk1/pp3qp1/2p1pr1p/2PB4/3PRnQ1/8/P2B2PP/4R1K1 b - - 0 23",
    correctMoves: [
      {
        from: "f4",
        to: "h3",
        san: "Nh3+"
      },
      {
        from: "f6",
        to: "f1",
        san: "Rf1+"
      },
      {
        from: "f7",
        to: "f1",
        san: "Qxf1#"
      },
    ],
    responseMoves: ["gxh3", "Rxf1"],
  }
  ,
  {
    fen: "5r1k/ppp3p1/2nb4/5q2/5B2/P1P2pP1/1P3P1P/R2Q1RK1 b - - 2 24",
    correctMoves: [
      {
        from: "c6",
        to: "e5",
        san: "Ne5"
      },
      {
        from: "f5",
        to: "h3",
        san: "Qh3"
      },
      {
        from: "f8",
        to: "f3",
        san: "Rxf3"
      },
      {
        from: "c7",
        to: "d6",
        san: "cxd6"
      },
    ],
    responseMoves: ["Bxe5", "Qxf3", "Bxd6"],
  }
  ,
  {
    fen: "2k4r/pp6/3rpq2/3PR1p1/1P1P2p1/P2Q2P1/5P2/R5K1 b - - 0 24",
    correctMoves: [
      {
        from: "f6",
        to: "h6",
        san: "Qh6"
      },
      {
        from: "h6",
        to: "h2",
        san: "Qh2+"
      },
      {
        from: "h2",
        to: "h1",
        san: "Qh1+"
      },
      {
        from: "h8",
        to: "h1",
        san: "Rxh1+"
      },
      {
        from: "h1",
        to: "a1",
        san: "Rxa1"
      },
    ],
    responseMoves: ["Qe4", "Kf1", "Qxh1", "Ke2"],
  }
  ,
  {
    fen: "6k1/p3bpp1/2p4r/7r/1PQ1pP2/2P1P1Pq/PB4RP/R5K1 b - - 4 24",
    correctMoves: [
      {
        from: "h3",
        to: "g2",
        san: "Qxg2+"
      },
      {
        from: "h5",
        to: "h2",
        san: "Rxh2+"
      },
      {
        from: "h2",
        to: "h1",
        san: "Rh1+"
      },
      {
        from: "h6",
        to: "h2",
        san: "R6h2#"
      },
    ],
    responseMoves: ["Kxg2", "Kf1", "Ke2"],
  }
  ,
  {
    fen: "r4rk1/1bp1qpp1/ppn2b1p/3ppQ2/P2P4/1NP1PNPB/1P3P1P/R4RK1 b - - 1 16",
    correctMoves: [
      {
        from: "b7",
        to: "c8",
        san: "Bc8"
      },
      {
        from: "g7",
        to: "g6",
        san: "g6"
      },
      {
        from: "f6",
        to: "g7",
        san: "Bg7"
      },
    ],
    responseMoves: ["Qh5", "Qxh6"]
  }
  ,
  {
    fen: "6k1/1p1r1r1p/p3Q1p1/8/2P5/2P5/P1q3PP/R4R1K w - - 0 26",
    correctMoves: [
      {
        from: "f1",
        to: "f7",
        san: "Rxf7"
      },
      {
        from: "a1",
        to: "f1",
        san: "Rf1"
      },
      {
        from: "f1",
        to: "f5",
        san: "Rxf5"
      },
    ],
    responseMoves: ["Rxf7", "Qf5"]
  },
  {
    fen: "r6k/1p3Q1p/1n3P2/p5PR/1K1pP3/1P1P4/2P5/q7 w - a6 0 38",
    correctMoves: [
      {
        from: "b4",
        to: "b5",
        san: "Kb5"
      },
      {
        from: "b3",
        to: "a4",
        san: "bxa4"
      },
    ],
    responseMoves: ["Qa4+"]
  }
  ,
  {
    fen: "3r2k1/5pp1/p5rp/1pPpBn2/1P6/P2Q2Pq/5P2/3RR1K1 b - - 12 29",
    correctMoves: [
      {
        from: "f5",
        to: "h4",
        san: "Nh4"
      },
      {
        from: "d5",
        to: "e4",
        san: "dxe4"
      },
      {
        from: "g8",
        to: "h7",
        san: "Kh7"
      },
      {
        from: "h7",
        to: "h8",
        san: "Kxh8"
      },
    ],
    responseMoves: ["Qe4", "Rxd8+", "Rh8+"]
  },
  {
    fen: "3q1r1k/p2b2R1/4ppQ1/1p2P3/8/PP2p3/5KPP/2r5 w - - 0 31",
    correctMoves: [
      {
        from: "f2",
        to: "g3",
        san: "Kg3"
      },
    ],
    responseMoves: []
  }
  ,
  {
    fen: "N1bk4/pp4pp/3p4/3P4/4KP2/6q1/PP6/R1Q5 b - - 2 38",
    correctMoves: [
      {
        from: "c8",
        to: "f5",
        san: "Bf5+"
      },
      {
        from: "g3",
        to: "g6",
        san: "Qg6#"
      },
    ],
    responseMoves: ["Kxf5"]
  },
  {
    fen: "r3k1r1/bppq1p2/3p1R1p/p3p2b/P3P2P/1N1PB3/1PP3P1/RB2Q1K1 b q - 0 19",
    correctMoves: [
      {
        from: "d7",
        to: "h3",
        san: "Qh3"
      },
    ],
    responseMoves: []
  },
  {
    fen: "1R6/p2N2pk/1p1pp2p/1P1b3P/1r6/6K1/8/8 w - - 5 46",
    correctMoves: [
      {
        from: "d7",
        to: "f8",
        san: "Nf8+"
      },
      {
        from: "f8",
        to: "g6",
        san: "Ng6+"
      },
      {
        from: "b8",
        to: "f8",
        san: "Rf8#"
      },
    ],
    responseMoves: ["Kg8", "Kf7"]
  },
  {
    fen: "3qr1k1/2p3p1/1p2np2/b2P3Q/4n3/6P1/1B3PK1/7R w - - 0 36",
    correctMoves: [
      {
        from: "d5",
        to: "e6",
        san: "dxe6"
      },
      {
        from: "h5",
        to: "h8",
        san: "Qh8+"
      },
      {
        from: "h8",
        to: "d8",
        san: "Qxd8"
      },
    ],
    responseMoves: ["Rxe6", "Kf7"]
  }
  ,
  {
    fen: "3rr3/1b3pk1/2q2n1p/2p2Pp1/2B1p1P1/1PN1Q2P/P1P1R2K/3R4 b - - 0 32",
    correctMoves: [
      {
        from: "d8",
        to: "d1",
        san: "Rxd1"
      },
      {
        from: "c6",
        to: "d6",
        san: "Qd6+"
      },
      {
        from: "d6",
        to: "d1",
        san: "Qxd1+"
      },
    ],
    responseMoves: ["Nxd1", "Kh1"],
  },
  {
    fen: "3r2k1/5Rp1/p1p4p/Pp6/1P6/2q1NQ2/5P2/5K2 b - - 0 35",
    correctMoves: [
      {
        from: "c3",
        to: "d3",
        san: "Qd3+"
      },
      {
        from: "d3",
        to: "g6",
        san: "Qg6+"
      },
      {
        from: "g6",
        to: "f7",
        san: "Qxf7+"
      },
      {
        from: "g8",
        to: "f7",
        san: "Kxf7"
      },
    ],
    responseMoves: ["Kg2", "Ng4", "Qxf7+"],
  },
  {
    fen: "6k1/3r1rp1/8/Q2pq2p/3Rp3/2P4P/1P1R1PP1/6K1 b - - 0 1",
    correctMoves: [
      {
        from: "e4",
        to: "e3",
        san: "e3"
      },
      {
        from: "e5",
        to: "e3",
        san: "Qxe3+"
      },
    ],
    responseMoves: ["fxe3"],
  },
  {
    fen: "5b1r/2p1kppp/2Q1q3/4p3/4P3/2P2P2/rP2K2P/n1BR4 w - - 1 22",
    correctMoves: [
      {
        from: "c1",
        to: "g5",
        san: "Bg5+"
      },
      {
        from: "c6",
        to: "c7",
        san: "Qxc7+"
      },
      {
        from: "d1",
        to: "d8",
        san: "Rd8#"
      },
    ],
    responseMoves: ["f6", "Ke8"],
  },
  {
    fen: "rnbq1rk1/ppp2pbp/3p1np1/4p1B1/3PPP2/2N5/PPPQ2PP/R3KBNR w KQ e6 0 7",
    correctMoves: [
      {
        from: "d4",
        to: "e5",
        san: "dxe5"
      },
      {
        from: "d2",
        to: "d8",
        san: "Qxd8"
      },
      {
        from: "f4",
        to: "e5",
        san: "fxe5"
      },
    ],
    responseMoves: ["dxe5", "Rxd8"],
  },
  {
    fen: "3r2k1/3r1ppp/8/4p3/n7/Bq2P3/4QPPP/RR4K1 b - - 1 1",
    correctMoves: [
      {
        from: "b3",
        to: "b1",
        san: "Qxb1+"
      },
      {
        from: "a4",
        to: "c3",
        san: "Nc3"
      },
      {
        from: "c3",
        to: "b1",
        san: "Nxb1"
      },
    ],
    responseMoves: ["Rxb1", "Qc2"],
  },
  {
    fen: "5r2/1q4p1/5k2/8/4p2R/2r4P/4Q1P1/5NK1 w - - 0 48",
    correctMoves: [
      {
        from: "h4",
        to: "f4",
        san: "Rf4+"
      },
      {
        from: "f4",
        to: "e4",
        san: "Rxe4+"
      },
      {
        from: "e4",
        to: "f4",
        san: "Rf4+"
      },
      {
        from: "e2",
        to: "e6",
        san: "Qe6+"
      },
      {
        from: "e6",
        to: "e8",
        san: "Qe8+"
      },
    ],
    responseMoves: ["Ke7", "Kf7", "Kg8", "Rf7"],
  },
  {
    fen: "2r1rk2/pp6/q4p2/3pN1Q1/3P4/2P5/3K1PPP/7R w - - 0 31",
    correctMoves: [
      {
        from: "g5",
        to: "h6",
        san: "Qh6+"
      },
      {
        from: "h6",
        to: "g6",
        san: "Qg6+"
      },
    ],
    responseMoves: ["Kg8"],
  },
  {
    fen: "rnbq1rk1/pp2bpp1/3ppn1p/1BP5/4P3/2N2N2/PPP2PPP/R1BQ1RK1 w - - 0 8",
    correctMoves: [
      {
        from: "c5",
        to: "d6",
        san: "cxd6"
      },
      {
        from: "d1",
        to: "d6",
        san: "Qxd6"
      },
      {
        from: "e4",
        to: "e5",
        san: "e5"
      },
      {
        from: "e5",
        to: "f6",
        san: "exf6"
      },
    ],
    responseMoves: ["Qxd6", "Bxd6", "Be7"],
  },
  {
    fen: "5rk1/2p2pp1/8/6q1/8/Q7/1PP2PbP/R3R1K1 b - - 1 23",
    correctMoves: [
      {
        from: "g2",
        to: "f3",
        san: "Bf3+"
      },
    ],
    responseMoves: [],
  },
  {
    fen: "4r1k1/p2Q1p1p/6p1/P4P2/6P1/R1P3KP/4q3/3R4 b - - 14 48",
    correctMoves: [
      {
        from: "e8",
        to: "e3",
        san: "Re3+"
      },
      {
        from: "e2",
        to: "f2",
        san: "Qf2+"
      },
      {
        from: "h7",
        to: "h6",
        san: "h6+"
      },
      {
        from: "f2",
        to: "h4",
        san: "Qh4+"
      },
      {
        from: "h4",
        to: "g5",
        san: "Qxg5#"
      },
    ],
    responseMoves: ["Kh4", "Kg5", "Kf6", "g5"],
  },
  {
    fen: "8/8/7p/p1k2PpP/1p2p1P1/1P2P3/5K2/8 b - - 15 60",
    correctMoves: [
      {
        from: "a5",
        to: "a4",
        san: "a4"
      },
      {
        from: "c5",
        to: "d6",
        san: "Kd6"
      },
      {
        from: "b4",
        to: "b3",
        san: "b3"
      },
      {
        from: "b3",
        to: "b2",
        san: "b2"
      },
      {
        from: "d6",
        to: "e7",
        san: "Ke7"
      },
      {
        from: "e7",
        to: "f8",
        san: "Kxf8"
      },
    ],
    responseMoves: ["f6", "bxa4", "a5", "f7", "f8=Q+"],
  },
  {
    fen: "r3kb1r/pp3ppp/2n4n/2pB2q1/3P2b1/5Q2/PPP2PPP/RNB1K2R w KQkq - 1 9",
    correctMoves: [
      {
        from: "d5",
        to: "c6",
        san: "Bxc6+"
      },
      {
        from: "f3",
        to: "c6",
        san: "Qxc6+"
      },
      {
        from: "c6",
        to: "a8",
        san: "Qxa8+"
      },
    ],
    responseMoves: ["bxc6", "Bd7"],
  },
  {
    fen: "1r2q3/2p1b1kp/p1N1pnp1/1p3b2/2pP1Q2/P1N5/1PP2P2/2KR2R1 w - - 4 23",
    correctMoves: [
      {
        from: "f4",
        to: "c7",
        san: "Qxc7"
      },
      {
        from: "c7",
        to: "e7",
        san: "Qxe7+"
      },
      {
        from: "c6",
        to: "e7",
        san: "Nxe7"
      },
    ],
    responseMoves: ["Rc8", "Qxe7"],
  },
  {
    fen: "r2q1rk1/pp4p1/2p2n1p/7P/4p1b1/P1B1P3/1PP1NP2/R2QK1R1 w Q - 4 19",
    correctMoves: [
      {
        from: "d1",
        to: "d8",
        san: "Qxd8"
      },
      {
        from: "c3",
        to: "f6",
        san: "Bxf6"
      },
      {
        from: "g1",
        to: "g4",
        san: "Rxg4"
      },
    ],
    responseMoves: ["Raxd8", "Rxf6"],
  },
  {
    fen: "r3r1k1/p4qpn/2p1bp1Q/4pR2/1p2P2B/3PN1R1/1P4PP/7K b - - 2 29",
    correctMoves: [
      {
        from: "e6",
        to: "f5",
        san: "Bxf5"
      },
      {
        from: "h7",
        to: "g5",
        san: "Ng5"
      },
      {
        from: "f6",
        to: "g5",
        san: "hxg5"
      },
    ],
    responseMoves: ["Nxf5", "Rxg5"],
  },
  {
    fen: "5b1r/p4pp1/b3p3/B1RR3p/4kPq1/4P3/P4KPP/8 w - - 0 27",
    correctMoves: [
      {
        from: "d5",
        to: "d4",
        san: "Rd4#"
      },
    ],
    responseMoves: [],
  },
  {
    fen: "8/2p2k2/8/ppp1PPpp/8/PP1P1K1P/8/8 b - - 0 1",
    correctMoves: [
      {
        from: "a5",
        to: "a4",
        san: "a4"
      },
      {
        from: "b5",
        to: "b4",
        san: "b4"
      },
      {
        from: "c5",
        to: "b4",
        san: "cxb4"
      },
      {
        from: "b4",
        to: "b3",
        san: "b4"
      },
      {
        from: "b3",
        to: "b2",
        san: "b2"
      },
      {
        from: "b2",
        to: "b1",
        san: "b1=Q"
      },
      {
        from: "b1",
        to: "h1",
        san: "Qh1+"
      },
      {
        from: "h1",
        to: "a8",
        san: "Qxa8"
      },
    ],
    responseMoves: ["bxa4", "axb4", "a5", "a6", "a7", "a8=Q", "Ke3"],
  },
  {
    fen: "1b1r4/k2q4/P2r4/1p5p/1P2Q1p1/6P1/2R2P1P/2R3K1 w - - 1 40",
    correctMoves: [
      {
        from: "c2",
        to: "c7",
        san: "Rc7+"
      },
      {
        from: "c1",
        to: "c7",
        san: "Rxc7+"
      },
      {
        from: "e4",
        to: "b7",
        san: "Qb7#"
      },
    ],
    responseMoves: ["Qxc7", "Bxc7"],
  },
  {
    fen: "5Q2/1Q4pk/5p1p/8/4Pp2/3P2PP/5qBK/8 b - - 3 40",
    correctMoves: [
      {
        from: "f4",
        to: "g3",
        san: "fxg3+"
      },
      {
        from: "f2",
        to: "e1",
        san: "Qe1+"
      },
      {
        from: "e1",
        to: "f1",
        san: "Qxf1#"
      },
    ],
    responseMoves: ["Kh1", "Bf1"],
  },
  {
    fen: "3rk2r/pp1n1ppp/1bp1pnq1/8/3P2P1/2P1BN1P/PP2QP2/R3KB1R w KQk - 1 14",
    correctMoves: [
      {
        from: "f3",
        to: "h4",
        san: "Nh4"
      },
      {
        from: "f1",
        to: "g2",
        san: "Bg2"
      },
      {
        from: "h4",
        to: "g2",
        san: "Nxg2"
      },
    ],
    responseMoves: ["Qe4", "Qxg2"],
  },
  {
    fen: "8/k1r5/1R6/PKp5/1pP5/8/8/8 b - - 8 58",
    correctMoves: [
      {
        from: "c7",
        to: "b7",
        san: "Rb7"
      },
      {
        from: "b4",
        to: "b3",
        san: "b3"
      },
      {
        from: "b7",
        to: "b6",
        san: "Rxb6"
      },
      {
        from: "a7",
        to: "b8",
        san: "Kb8"
      },
    ],
    responseMoves: ["Kxc5", "Kc6", "axb6+"],
  },
  {
    fen: "r3r1k1/ppp1qpp1/1bn4p/3p4/3P3N/P1Q1P1P1/1P3PKP/R1B2R2 b - - 0 17",
    correctMoves: [
      {
        from: "g7",
        to: "g5",
        san: "g5"
      },
      {
        from: "e7",
        to: "e4",
        san: "Qe4"
      },
      {
        from: "e4",
        to: "f3",
        san: "Qxf3"
      },
    ],
    responseMoves: ["Nf3", "Kg1"],
  },
  {
    fen: "2k2r1N/ppp3Qp/2n5/2b1p3/3q4/3P4/PPP2PPP/RNB2RK1 b - - 0 14",
    correctMoves: [
      {
        from: "f8",
        to: "f2",
        san: "Rxf2"
      },
      {
        from: "d4",
        to: "e3",
        san: "Qxe3"
      },
      {
        from: "c8",
        to: "b8",
        san: "Kb8"
      },
      {
        from: "f2",
        to: "f8",
        san: "Rf8+"
      },
      {
        from: "f8",
        to: "g8",
        san: "Rxg8"
      },
    ],
    responseMoves: ["Be3", "Qg4+", "Qg8+", "Kh1"],
  },
  {
    fen: "r5qk/7p/1Q5b/2pp2p1/1n4P1/7N/1PPB2BP/1K1R1R2 b - - 0 29",
    correctMoves: [
      {
        from: "a8",
        to: "a1",
        san: "Ra1+"
      },
      {
        from: "g8",
        to: "a8",
        san: "Qa8+"
      },
      {
        from: "a8",
        to: "a5",
        san: "Qxa5+"
      },
      {
        from: "a5",
        to: "a2",
        san: "Qa2+"
      },
      {
        from: "a2",
        to: "a1",
        san: "Qa1#"
      },
    ],
    responseMoves: ["Kxa1", "Qa5", "Kb1", "Kc1"],
  },
  {
    fen: "5rk1/1pp3pp/8/3P4/P3Pp2/5KP1/1pr1R1BP/1R6 b - - 0 32",
    correctMoves: [
      {
        from: "f4",
        to: "g3",
        san: "fxg3+"
      },
      {
        from: "c2",
        to: "e2",
        san: "Rxe2+"
      },
      {
        from: "f8",
        to: "f2",
        san: "Rf2+"
      },
      {
        from: "f2",
        to: "g2",
        san: "Rxg2"
      },
      {
        from: "c7",
        to: "d6",
        san: "cxd6"
      },
    ],
    responseMoves: ["Ke3", "Kxe2", "Ke3", "d6"],
  },
  {
    fen: "8/8/8/1b1P3p/2kB2p1/4KpP1/7P/8 b - - 1 1",
    correctMoves: [
      {
        from: "f3",
        to: "f2",
        san: "f2"
      },
      {
        from: "c4",
        to: "d4",
        san: "Kxd4"
      },
    ],
    responseMoves: ["Kxf2"],
  },
  {
    fen: "3b2k1/1R6/p6p/3P1p2/bB1N2p1/1r4P1/7P/4K3 b - - 2 39",
    correctMoves: [
      {
        from: "b3",
        to: "b4",
        san: "Rxb4"
      },
      {
        from: "d8",
        to: "a5",
        san: "Ba5"
      },
      {
        from: "a4",
        to: "c6",
        san: "Bxc6"
      },
      {
        from: "a5",
        to: "b4",
        san: "Bxb4+"
      },
    ],
    responseMoves: ["Rxb4", "Nc6", "dxc6"],
  },
  {
    fen: "r5k1/p1p3pp/1p2pr2/5p1q/3P2n1/P3PN2/1P2QPP1/R1B1R1K1 b - - 3 20",
    correctMoves: [
      {
        from: "f6",
        to: "h6",
        san: "Rh6"
      },
      {
        from: "h5",
        to: "h1",
        san: "Qh1+"
      },
      {
        from: "g4",
        to: "h2",
        san: "Nh2#"
      },
    ],
    responseMoves: ["Kf1", "Ng1"],
  },
  {
    fen: "2kr3r/pp1qppb1/2p1n1p1/3pP3/1PPPn1b1/2N1BN2/P3B1PP/2RQK2R w K - 1 15",
    correctMoves: [
      {
        from: "c4",
        to: "d5",
        san: "cxd5"
      },
      {
        from: "d5",
        to: "e6",
        san: "dxe6"
      },
      {
        from: "c1",
        to: "c3",
        san: "Rxc3"
      },
    ],
    responseMoves: ["Nxc3", "Qxe6"],
  },
  {
    fen: "1Q6/8/8/p7/Pq6/3k4/K7/8 w - - 5 61",
    correctMoves: [
      {
        from: "b8",
        to: "b4",
        san: "Qxb4"
      },
      {
        from: "a2",
        to: "b3",
        san: "Kb3"
      },
      {
        from: "b3",
        to: "b4",
        san: "Kxb4"
      },
      {
        from: "b4",
        to: "b5",
        san: "Kb5"
      },
      {
        from: "b5",
        to: "b6",
        san: "Kb6"
      },
      {
        from: "b6",
        to: "b7",
        san: "Kb7"
      },
    ],
    responseMoves: ["axb4", "Kd4", "Kd5", "Kd6", "Kd7"],
  },
  {
    fen: "8/8/8/2kP4/p2R3P/4K1P1/8/r7 b - - 2 42",
    correctMoves: [
      {
        from: "a1",
        to: "e1",
        san: "Re1+"
      },
      {
        from: "c5",
        to: "d4",
        san: "Kxd4+"
      },
      {
        from: "a4",
        to: "a3",
        san: "a3"
      },
      {
        from: "a3",
        to: "a2",
        san: "a2"
      },
    ],
    responseMoves: ["Kd2", "Kxe1", "Kd2"],
  },
  {
    fen: "r2qkbnr/1p1b3p/p2p4/3Np1p1/1pBnP3/5Q2/P1PP2PP/R1B1K1NR w KQkq - 4 12",
    correctMoves: [
      {
        from: "f3",
        to: "h5",
        san: "Qh5#"
      },
    ],
    responseMoves: [],
  },
  {
    fen: "r1bqk1nr/ppp1p2p/2n2p1b/3p4/3P4/7P/PPP2PP1/RNBQKBNR w KQkq - 1 6",
    correctMoves: [
      {
        from: "d1",
        to: "h5",
        san: "Qh5+"
      },
      {
        from: "c1",
        to: "h6",
        san: "Bxh6+"
      },
      {
        from: "h5",
        to: "h6",
        san: "Qxh6+"
      },
    ],
    responseMoves: ["Kf8", "Nxh6"],
  },
  {
    fen: "r5k1/ppp3pp/8/8/3np3/P3N2q/1PP2QR1/R5K1 b - - 1 1",
    correctMoves: [
      {
        from: "a8",
        to: "f8",
        san: "Rf8"
      },
      {
        from: "g8",
        to: "g7",
        san: "Kxg7"
      },
      {
        from: "h3",
        to: "g2",
        san: "Qxg2+"
      },
    ],
    responseMoves: ["Rxg7+", "Qg2+"],
  },
  {
    fen: "1R2Q3/6p1/2N2k1r/5pN1/5P2/2P5/P3BPKp/8 b - - 3 34",
    correctMoves: [
      {
        from: "a2",
        to: "a1",
        san: "a1=Q+"
      },
      {
        from: "h1",
        to: "h2",
        san: "Qh2+"
      },
      {
        from: "h6",
        to: "h3",
        san: "Rh3+"
      },
      {
        from: "h2",
        to: "h3",
        san: "Qxh3#"
      },
    ],
    responseMoves: ["Kg3", "Kf3", "Nxh3"],
  },
  {
    fen: "5k2/5p2/2P1p1p1/4P2p/3K1P1P/8/2B3P1/r7 w - - 1 2",
    correctMoves: [
      {
        from: "c6",
        to: "c7",
        san: "c7"
      },
      {
        from: "d4",
        to: "c5",
        san: "Kc5"
      },
    ],
    responseMoves: ["Ra8"],
  },
  {
    fen: "2k5/pppqb3/5nNp/4p3/4B3/2P3P1/PP1B3P/R2K1R2 b - - 0 22",
    correctMoves: [
      {
        from: "f6",
        to: "e4",
        san: "Nxe4"
      },
      {
        from: "c8",
        to: "d8",
        san: "Kd8"
      },
      {
        from: "b7",
        to: "c6",
        san: "bxc6"
      },
      {
        from: "d7",
        to: "d2",
        san: "Qxd2+"
      },
    ],
    responseMoves: ["Nxe7+", "Nc6+", "Kc2"],
  },
  {
    fen: "6k1/8/3n1Q2/r2N4/p1qP4/8/6KP/8 w - - 1 2",
    correctMoves: [
      {
        from: "d5",
        to: "e7",
        san: "Ne7+"
      },
      {
        from: "f6",
        to: "g6",
        san: "Qg6+"
      },
      {
        from: "g6",
        to: "h6",
        san: "Qh6#"
      },
    ],
    responseMoves: ["Kh7", "Kh8"],
  },
  {
    fen: "7k/2p3p1/1qB1Q2p/2bpB3/3p4/3P4/1Pp2PPP/6K1 w - - 0 2",
    correctMoves: [
      {
        from: "e6",
        to: "h6",
        san: "Qxh6+"
      },
      {
        from: "h6",
        to: "g7",
        san: "Qxg7+"
      },
    ],
    responseMoves: ["Kg8"],
  },
  {
    fen: "8/8/8/kPK2P2/P5pp/8/6P1/8 b - - 0 58",
    correctMoves: [
      {
        from: "h4",
        to: "h3",
        san: "h3"
      },
      {
        from: "g4",
        to: "g3",
        san: "g3"
      },
      {
        from: "g3",
        to: "g2",
        san: "g2"
      },
      {
        from: "g2",
        to: "g1",
        san: "g1=Q+"
      },
    ],
    responseMoves: ["gxh3", "f6", "f7"],
  },
  {
    fen: "3rk3/p4r2/2p5/1p5Q/2q5/1KP5/PP4PP/RN1R4 w - - 2 28",
    correctMoves: [
      {
        from: "b3",
        to: "c2",
        san: "Kc2"
      },
      {
        from: "c2",
        to: "c1",
        san: "Kc1"
      },
      {
        from: "c1",
        to: "d1",
        san: "Kxd1"
      },
    ],
    responseMoves: ["Qe4+", "Rxd1+"],
  },
  {
    fen: "4kb1r/4pppp/8/6Q1/5P2/2r1q1P1/P1n4P/3R1KNb w k - 0 28",
    correctMoves: [
      {
        from: "g5",
        to: "b5",
        san: "Qb5+"
      },
      {
        from: "b5",
        to: "b8",
        san: "Qb8+"
      },
      {
        from: "b8",
        to: "c8",
        san: "Qxc8#"
      },
    ],
    responseMoves: ["Rc6", "Rc8"],
  },
  {
    fen: "8/Pq4pk/7p/4Q3/4bp2/8/6PP/5BK1 b - - 0 1",
    correctMoves: [
      {
        from: "b7",
        to: "a7",
        san: "Qxa7+"
      },
      {
        from: "a7",
        to: "e3",
        san: "Qe3"
      },
    ],
    responseMoves: ["Kh1"],
  },
  {
    fen: "r3k2r/pp2bpp1/1qp1p1bp/3pP3/5B2/P2BPPP1/1PPQ3P/2KR3R b kq - 1 14",
    correctMoves: [
      {
        from: "g6",
        to: "d3",
        san: "Bxd3"
      },
      {
        from: "g7",
        to: "g5",
        san: "g5"
      },
      {
        from: "g5",
        to: "f4",
        san: "gxf4"
      },
    ],
    responseMoves: ["Qxd3", "g4"],
  },
  {
    fen: "r1bq1rk1/1p3p1n/p2p1b1Q/2p1p3/4P2P/1PNP1N2/1PP2PP1/R3K2R w KQ - 1 15",
    correctMoves: [
      {
        from: "f3",
        to: "g5",
        san: "Ng5"
      },
      {
        from: "e4",
        to: "f5",
        san: "exf5"
      },
      {
        from: "h4",
        to: "g5",
        san: "hxg5"
      },
    ],
    responseMoves: ["Bf5", "Bxg5"],
  }
  ,
  {
    fen: "3r1k2/1p4p1/p1b2n1p/2qNQ3/2P5/3B1P2/2P3PP/4RK2 w - - 1 2",
    correctMoves: [
      {
        from: "d5",
        to: "f6",
        san: "Nxf6"
      },
      {
        from: "f6",
        to: "h7",
        san: "Nh7+"
      },
      {
        from: "e1",
        to: "e5",
        san: "Rxe5"
      },
    ],
    responseMoves: ["Qxe5", "Kf7"],
  }
  ,
  {
    fen: "r4rk1/2p1qbpp/8/1p2p3/1P1nP3/p2P4/P2Q1P2/1K3BRR w - - 4 27",
    correctMoves: [
      {
        from: "g1",
        to: "g7",
        san: "Rxg7+"
      },
      {
        from: "d2",
        to: "h6",
        san: "Qh6+"
      },
      {
        from: "h6",
        to: "h7",
        san: "Qxh7#"
      },
    ],
    responseMoves: ["Kxg7", "Kg8"],
  }
  ,
  {
    fen: "3r2nr/1Qbk1ppp/1pB3q1/p1p5/2P1NP2/4n3/PP4PP/R4RK1 b - - 5 20",
    correctMoves: [
      {
        from: "g6",
        to: "c6",
        san: "Qxc6"
      },
      {
        from: "e3",
        to: "d1",
        san: "Nxd1"
      },
      {
        from: "d7",
        to: "e7",
        san: "Ke7"
      },
      {
        from: "d8",
        to: "d1",
        san: "Rxd1+"
      },
    ],
    responseMoves: ["Rfd1", "Rxd1", "Qxc6"],
  }
  ,
  {
    fen: "rnb2rk1/pp3ppp/2p5/8/2Bq4/2nP1Q2/P1P2PPP/R1B1R1K1 w - - 2 14",
    correctMoves: [
      {
        from: "f3",
        to: "f7",
        san: "Qxf7+"
      },
      {
        from: "e1",
        to: "ge86",
        san: "Re8#"
      },
    ],
    responseMoves: ["Rxf7"],
  }
  ,
  {
    fen: "4q3/1p6/1k1p3Q/2pPp2P/1n2P1bR/R1K2N2/1PP3r1/6N1 b - - 6 29",
    correctMoves: [
      {
        from: "g2",
        to: "c2",
        san: "Rxc2+"
      },
      {
        from: "c5",
        to: "c4",
        san: "c4+"
      },
      {
        from: "e8",
        to: "b5",
        san: "Qb5#"
      },
    ],
    responseMoves: ["Kb3", "Kxb4"],
  }
  ,
  {
    fen: "rn1q2kr/pp2n1pp/3b4/2p3N1/3p2b1/8/PPP1QPPP/RNB1K2R w KQ - 2 10",
    correctMoves: [
      {
        from: "e2",
        to: "c4",
        san: "Qc4+"
      },
      {
        from: "c4",
        to: "d5",
        san: "Qxd5+"
      },
    ],
    responseMoves: ["Nd5"],
  }
  ,
  {
    fen: "1kq3r1/p1p2Q2/Pp6/1P2P3/3B1P2/2P4r/6P1/R3R1K1 b - - 0 31",
    correctMoves: [
      {
        from: "g8",
        to: "g2",
        san: "Rxg2+"
      },
      {
        from: "c8",
        to: "g4",
        san: "Qg4+"
      },
      {
        from: "g4",
        to: "f3",
        san: "Qf3+"
      },
      {
        from: "h3",
        to: "h1",
        san: "Rh1#"
      },
    ],
    responseMoves: ["Kxg2", "Kf1", "Bf2"],
  }
  ,
  {
    fen: "8/8/5k2/2q5/p4K2/P2Q1PP1/7P/8 b - - 1 49",
    correctMoves: [
      {
        from: "c5",
        to: "g5",
        san: "Qg5+"
      },
      {
        from: "g5",
        to: "e5",
        san: "Qe5#"
      },
    ],
    responseMoves: ["Ke4"],
  }
  ,
  {
    fen: "2kr3r/p1p1n3/2q5/2p1ppp1/2N3p1/2PP2P1/PP1K1P1N/R2Q3R b - - 1 1",
    correctMoves: [
      {
        from: "d8",
        to: "d3",
        san: "Rxd3+"
      },
      {
        from: "c6",
        to: "e4",
        san: "Qe4+"
      },
      {
        from: "h8",
        to: "d8",
        san: "Rd8+"
      },
      {
        from: "d8",
        to: "d1",
        san: "Rxd1+"
      },
      {
        from: "e4",
        to: "c4",
        san: "Qxc4"
      },
    ],
    responseMoves: ["Kxd3", "Kd2", "Kc1", "Rxd1"],
  }
  ,
  {
    fen: "2r5/4Pk2/5P2/p3B1P1/5K2/1pp5/8/8 w - - 0 2",
    correctMoves: [
      {
        from: "f4",
        to: "f5",
        san: "Kf5"
      },
      {
        from: "e5",
        to: "c3",
        san: "Bxc3"
      },
    ],
    responseMoves: ["Rg8"],
  }
  ,
  {
    fen: "r2r2k1/pp2ppbp/nq4p1/4N3/3PB1b1/4B3/PPQ2PPP/1R2K2R b K - 1 1",
    correctMoves: [
      {
        from: "g7",
        to: "e5",
        san: "Bxe5"
      },
      {
        from: "b6",
        to: "b4",
        san: "Qb4+"
      },
    ],
    responseMoves: ["dxe5"],
  }
  ,
  {
    fen: "5rk1/pp3qp1/2p1pr1p/2PB4/3PRnQ1/8/P2B2PP/4R1K1 b - - 0 23",
    correctMoves: [
      {
        from: "f4",
        to: "h3",
        san: "Nh3+"
      },
      {
        from: "f6",
        to: "f1",
        san: "Rf1+"
      },
      {
        from: "f7",
        to: "f1",
        san: "Qxf1#"
      },
    ],
    responseMoves: ["gxh3", "Rxf1"],
  }
  ,
  {
    fen: "5r1k/ppp3p1/2nb4/5q2/5B2/P1P2pP1/1P3P1P/R2Q1RK1 b - - 2 24",
    correctMoves: [
      {
        from: "c6",
        to: "e5",
        san: "Ne5"
      },
      {
        from: "f5",
        to: "h3",
        san: "Qh3"
      },
      {
        from: "f8",
        to: "f3",
        san: "Rxf3"
      },
      {
        from: "c7",
        to: "d6",
        san: "cxd6"
      },
    ],
    responseMoves: ["Bxe5", "Qxf3", "Bxd6"],
  }
  ,
  {
    fen: "2k4r/pp6/3rpq2/3PR1p1/1P1P2p1/P2Q2P1/5P2/R5K1 b - - 0 24",
    correctMoves: [
      {
        from: "f6",
        to: "h6",
        san: "Qh6"
      },
      {
        from: "h6",
        to: "h2",
        san: "Qh2+"
      },
      {
        from: "h2",
        to: "h1",
        san: "Qh1+"
      },
      {
        from: "h8",
        to: "h1",
        san: "Rxh1+"
      },
      {
        from: "h1",
        to: "a1",
        san: "Rxa1"
      },
    ],
    responseMoves: ["Qe4", "Kf1", "Qxh1", "Ke2"],
  }
  ,
  {
    fen: "6k1/p3bpp1/2p4r/7r/1PQ1pP2/2P1P1Pq/PB4RP/R5K1 b - - 4 24",
    correctMoves: [
      {
        from: "h3",
        to: "g2",
        san: "Qxg2+"
      },
      {
        from: "h5",
        to: "h2",
        san: "Rxh2+"
      },
      {
        from: "h2",
        to: "h1",
        san: "Rh1+"
      },
      {
        from: "h6",
        to: "h2",
        san: "R6h2#"
      },
    ],
    responseMoves: ["Kxg2", "Kf1", "Ke2"],
  }
  ,
  {
    fen: "r4rk1/1bp1qpp1/ppn2b1p/3ppQ2/P2P4/1NP1PNPB/1P3P1P/R4RK1 b - - 1 16",
    correctMoves: [
      {
        from: "b7",
        to: "c8",
        san: "Bc8"
      },
      {
        from: "g7",
        to: "g6",
        san: "g6"
      },
      {
        from: "f6",
        to: "g7",
        san: "Bg7"
      },
    ],
    responseMoves: ["Qh5", "Qxh6"]
  }
  ,
  {
    fen: "6k1/1p1r1r1p/p3Q1p1/8/2P5/2P5/P1q3PP/R4R1K w - - 0 26",
    correctMoves: [
      {
        from: "f1",
        to: "f7",
        san: "Rxf7"
      },
      {
        from: "a1",
        to: "f1",
        san: "Rf1"
      },
      {
        from: "f1",
        to: "f5",
        san: "Rxf5"
      },
    ],
    responseMoves: ["Rxf7", "Qf5"]
  },
  {
    fen: "r6k/1p3Q1p/1n3P2/p5PR/1K1pP3/1P1P4/2P5/q7 w - a6 0 38",
    correctMoves: [
      {
        from: "b4",
        to: "b5",
        san: "Kb5"
      },
      {
        from: "b3",
        to: "a4",
        san: "bxa4"
      },
    ],
    responseMoves: ["Qa4+"]
  }
  ,
  {
    fen: "3r2k1/5pp1/p5rp/1pPpBn2/1P6/P2Q2Pq/5P2/3RR1K1 b - - 12 29",
    correctMoves: [
      {
        from: "f5",
        to: "h4",
        san: "Nh4"
      },
      {
        from: "d5",
        to: "e4",
        san: "dxe4"
      },
      {
        from: "g8",
        to: "h7",
        san: "Kh7"
      },
      {
        from: "h7",
        to: "h8",
        san: "Kxh8"
      },
    ],
    responseMoves: ["Qe4", "Rxd8+", "Rh8+"]
  },
  {
    fen: "3q1r1k/p2b2R1/4ppQ1/1p2P3/8/PP2p3/5KPP/2r5 w - - 0 31",
    correctMoves: [
      {
        from: "f2",
        to: "g3",
        san: "Kg3"
      },
    ],
    responseMoves: []
  }
  ,
  {
    fen: "N1bk4/pp4pp/3p4/3P4/4KP2/6q1/PP6/R1Q5 b - - 2 38",
    correctMoves: [
      {
        from: "c8",
        to: "f5",
        san: "Bf5+"
      },
      {
        from: "g3",
        to: "g6",
        san: "Qg6#"
      },
    ],
    responseMoves: ["Kxf5"]
  },
  {
    fen: "r3k1r1/bppq1p2/3p1R1p/p3p2b/P3P2P/1N1PB3/1PP3P1/RB2Q1K1 b q - 0 19",
    correctMoves: [
      {
        from: "d7",
        to: "h3",
        san: "Qh3"
      },
    ],
    responseMoves: []
  },
  {
    fen: "1R6/p2N2pk/1p1pp2p/1P1b3P/1r6/6K1/8/8 w - - 5 46",
    correctMoves: [
      {
        from: "d7",
        to: "f8",
        san: "Nf8+"
      },
      {
        from: "f8",
        to: "g6",
        san: "Ng6+"
      },
      {
        from: "b8",
        to: "f8",
        san: "Rf8#"
      },
    ],
    responseMoves: ["Kg8", "Kf7"]
  },
  {
    fen: "3qr1k1/2p3p1/1p2np2/b2P3Q/4n3/6P1/1B3PK1/7R w - - 0 36",
    correctMoves: [
      {
        from: "d5",
        to: "e6",
        san: "dxe6"
      },
      {
        from: "h5",
        to: "h8",
        san: "Qh8+"
      },
      {
        from: "h8",
        to: "d8",
        san: "Qxd8"
      },
    ],
    responseMoves: ["Rxe6", "Kf7"]
  }
  ,
  {
    fen: "3rr3/1b3pk1/2q2n1p/2p2Pp1/2B1p1P1/1PN1Q2P/P1P1R2K/3R4 b - - 0 32",
    correctMoves: [
      {
        from: "d8",
        to: "d1",
        san: "Rxd1"
      },
      {
        from: "c6",
        to: "d6",
        san: "Qd6+"
      },
      {
        from: "d6",
        to: "d1",
        san: "Qxd1+"
      },
    ],
    responseMoves: ["Nxd1", "Kh1"],
  },
  {
    fen: "3r2k1/5Rp1/p1p4p/Pp6/1P6/2q1NQ2/5P2/5K2 b - - 0 35",
    correctMoves: [
      {
        from: "c3",
        to: "d3",
        san: "Qd3+"
      },
      {
        from: "d3",
        to: "g6",
        san: "Qg6+"
      },
      {
        from: "g6",
        to: "f7",
        san: "Qxf7+"
      },
      {
        from: "g8",
        to: "f7",
        san: "Kxf7"
      },
    ],
    responseMoves: ["Kg2", "Ng4", "Qxf7+"],
  },
  {
    fen: "6k1/3r1rp1/8/Q2pq2p/3Rp3/2P4P/1P1R1PP1/6K1 b - - 0 1",
    correctMoves: [
      {
        from: "e4",
        to: "e3",
        san: "e3"
      },
      {
        from: "e5",
        to: "e3",
        san: "Qxe3+"
      },
    ],
    responseMoves: ["fxe3"],
  },
  {
    fen: "5b1r/2p1kppp/2Q1q3/4p3/4P3/2P2P2/rP2K2P/n1BR4 w - - 1 22",
    correctMoves: [
      {
        from: "c1",
        to: "g5",
        san: "Bg5+"
      },
      {
        from: "c6",
        to: "c7",
        san: "Qxc7+"
      },
      {
        from: "d1",
        to: "d8",
        san: "Rd8#"
      },
    ],
    responseMoves: ["f6", "Ke8"],
  },
  {
    fen: "rnbq1rk1/ppp2pbp/3p1np1/4p1B1/3PPP2/2N5/PPPQ2PP/R3KBNR w KQ e6 0 7",
    correctMoves: [
      {
        from: "d4",
        to: "e5",
        san: "dxe5"
      },
      {
        from: "d2",
        to: "d8",
        san: "Qxd8"
      },
      {
        from: "f4",
        to: "e5",
        san: "fxe5"
      },
    ],
    responseMoves: ["dxe5", "Rxd8"],
  },
  {
    fen: "3r2k1/3r1ppp/8/4p3/n7/Bq2P3/4QPPP/RR4K1 b - - 1 1",
    correctMoves: [
      {
        from: "b3",
        to: "b1",
        san: "Qxb1+"
      },
      {
        from: "a4",
        to: "c3",
        san: "Nc3"
      },
      {
        from: "c3",
        to: "b1",
        san: "Nxb1"
      },
    ],
    responseMoves: ["Rxb1", "Qc2"],
  },
  {
    fen: "5r2/1q4p1/5k2/8/4p2R/2r4P/4Q1P1/5NK1 w - - 0 48",
    correctMoves: [
      {
        from: "h4",
        to: "f4",
        san: "Rf4+"
      },
      {
        from: "f4",
        to: "e4",
        san: "Rxe4+"
      },
      {
        from: "e4",
        to: "f4",
        san: "Rf4+"
      },
      {
        from: "e2",
        to: "e6",
        san: "Qe6+"
      },
      {
        from: "e6",
        to: "e8",
        san: "Qe8+"
      },
    ],
    responseMoves: ["Ke7", "Kf7", "Kg8", "Rf7"],
  },
  {
    fen: "2r1rk2/pp6/q4p2/3pN1Q1/3P4/2P5/3K1PPP/7R w - - 0 31",
    correctMoves: [
      {
        from: "g5",
        to: "h6",
        san: "Qh6+"
      },
      {
        from: "h6",
        to: "g6",
        san: "Qg6+"
      },
    ],
    responseMoves: ["Kg8"],
  },
  {
    fen: "rnbq1rk1/pp2bpp1/3ppn1p/1BP5/4P3/2N2N2/PPP2PPP/R1BQ1RK1 w - - 0 8",
    correctMoves: [
      {
        from: "c5",
        to: "d6",
        san: "cxd6"
      },
      {
        from: "d1",
        to: "d6",
        san: "Qxd6"
      },
      {
        from: "e4",
        to: "e5",
        san: "e5"
      },
      {
        from: "e5",
        to: "f6",
        san: "exf6"
      },
    ],
    responseMoves: ["Qxd6", "Bxd6", "Be7"],
  },
  {
    fen: "5rk1/2p2pp1/8/6q1/8/Q7/1PP2PbP/R3R1K1 b - - 1 23",
    correctMoves: [
      {
        from: "g2",
        to: "f3",
        san: "Bf3+"
      },
    ],
    responseMoves: [],
  },
  {
    fen: "4r1k1/p2Q1p1p/6p1/P4P2/6P1/R1P3KP/4q3/3R4 b - - 14 48",
    correctMoves: [
      {
        from: "e8",
        to: "e3",
        san: "Re3+"
      },
      {
        from: "e2",
        to: "f2",
        san: "Qf2+"
      },
      {
        from: "h7",
        to: "h6",
        san: "h6+"
      },
      {
        from: "f2",
        to: "h4",
        san: "Qh4+"
      },
      {
        from: "h4",
        to: "g5",
        san: "Qxg5#"
      },
    ],
    responseMoves: ["Kh4", "Kg5", "Kf6", "g5"],
  },
  {
    fen: "8/8/7p/p1k2PpP/1p2p1P1/1P2P3/5K2/8 b - - 15 60",
    correctMoves: [
      {
        from: "a5",
        to: "a4",
        san: "a4"
      },
      {
        from: "c5",
        to: "d6",
        san: "Kd6"
      },
      {
        from: "b4",
        to: "b3",
        san: "b3"
      },
      {
        from: "b3",
        to: "b2",
        san: "b2"
      },
      {
        from: "d6",
        to: "e7",
        san: "Ke7"
      },
      {
        from: "e7",
        to: "f8",
        san: "Kxf8"
      },
    ],
    responseMoves: ["f6", "bxa4", "a5", "f7", "f8=Q+"],
  },
  {
    fen: "r3kb1r/pp3ppp/2n4n/2pB2q1/3P2b1/5Q2/PPP2PPP/RNB1K2R w KQkq - 1 9",
    correctMoves: [
      {
        from: "d5",
        to: "c6",
        san: "Bxc6+"
      },
      {
        from: "f3",
        to: "c6",
        san: "Qxc6+"
      },
      {
        from: "c6",
        to: "a8",
        san: "Qxa8+"
      },
    ],
    responseMoves: ["bxc6", "Bd7"],
  },
  {
    fen: "1r2q3/2p1b1kp/p1N1pnp1/1p3b2/2pP1Q2/P1N5/1PP2P2/2KR2R1 w - - 4 23",
    correctMoves: [
      {
        from: "f4",
        to: "c7",
        san: "Qxc7"
      },
      {
        from: "c7",
        to: "e7",
        san: "Qxe7+"
      },
      {
        from: "c6",
        to: "e7",
        san: "Nxe7"
      },
    ],
    responseMoves: ["Rc8", "Qxe7"],
  },
  {
    fen: "r2q1rk1/pp4p1/2p2n1p/7P/4p1b1/P1B1P3/1PP1NP2/R2QK1R1 w Q - 4 19",
    correctMoves: [
      {
        from: "d1",
        to: "d8",
        san: "Qxd8"
      },
      {
        from: "c3",
        to: "f6",
        san: "Bxf6"
      },
      {
        from: "g1",
        to: "g4",
        san: "Rxg4"
      },
    ],
    responseMoves: ["Raxd8", "Rxf6"],
  },
  {
    fen: "r3r1k1/p4qpn/2p1bp1Q/4pR2/1p2P2B/3PN1R1/1P4PP/7K b - - 2 29",
    correctMoves: [
      {
        from: "e6",
        to: "f5",
        san: "Bxf5"
      },
      {
        from: "h7",
        to: "g5",
        san: "Ng5"
      },
      {
        from: "f6",
        to: "g5",
        san: "hxg5"
      },
    ],
    responseMoves: ["Nxf5", "Rxg5"],
  },
  {
    fen: "5b1r/p4pp1/b3p3/B1RR3p/4kPq1/4P3/P4KPP/8 w - - 0 27",
    correctMoves: [
      {
        from: "d5",
        to: "d4",
        san: "Rd4#"
      },
    ],
    responseMoves: [],
  },
  {
    fen: "8/2p2k2/8/ppp1PPpp/8/PP1P1K1P/8/8 b - - 0 1",
    correctMoves: [
      {
        from: "a5",
        to: "a4",
        san: "a4"
      },
      {
        from: "b5",
        to: "b4",
        san: "b4"
      },
      {
        from: "c5",
        to: "b4",
        san: "cxb4"
      },
      {
        from: "b4",
        to: "b3",
        san: "b4"
      },
      {
        from: "b3",
        to: "b2",
        san: "b2"
      },
      {
        from: "b2",
        to: "b1",
        san: "b1=Q"
      },
      {
        from: "b1",
        to: "h1",
        san: "Qh1+"
      },
      {
        from: "h1",
        to: "a8",
        san: "Qxa8"
      },
    ],
    responseMoves: ["bxa4", "axb4", "a5", "a6", "a7", "a8=Q", "Ke3"],
  },
  {
    fen: "1b1r4/k2q4/P2r4/1p5p/1P2Q1p1/6P1/2R2P1P/2R3K1 w - - 1 40",
    correctMoves: [
      {
        from: "c2",
        to: "c7",
        san: "Rc7+"
      },
      {
        from: "c1",
        to: "c7",
        san: "Rxc7+"
      },
      {
        from: "e4",
        to: "b7",
        san: "Qb7#"
      },
    ],
    responseMoves: ["Qxc7", "Bxc7"],
  },
  {
    fen: "5Q2/1Q4pk/5p1p/8/4Pp2/3P2PP/5qBK/8 b - - 3 40",
    correctMoves: [
      {
        from: "f4",
        to: "g3",
        san: "fxg3+"
      },
      {
        from: "f2",
        to: "e1",
        san: "Qe1+"
      },
      {
        from: "e1",
        to: "f1",
        san: "Qxf1#"
      },
    ],
    responseMoves: ["Kh1", "Bf1"],
  },
  {
    fen: "3rk2r/pp1n1ppp/1bp1pnq1/8/3P2P1/2P1BN1P/PP2QP2/R3KB1R w KQk - 1 14",
    correctMoves: [
      {
        from: "f3",
        to: "h4",
        san: "Nh4"
      },
      {
        from: "f1",
        to: "g2",
        san: "Bg2"
      },
      {
        from: "h4",
        to: "g2",
        san: "Nxg2"
      },
    ],
    responseMoves: ["Qe4", "Qxg2"],
  },
  {
    fen: "8/k1r5/1R6/PKp5/1pP5/8/8/8 b - - 8 58",
    correctMoves: [
      {
        from: "c7",
        to: "b7",
        san: "Rb7"
      },
      {
        from: "b4",
        to: "b3",
        san: "b3"
      },
      {
        from: "b7",
        to: "b6",
        san: "Rxb6"
      },
      {
        from: "a7",
        to: "b8",
        san: "Kb8"
      },
    ],
    responseMoves: ["Kxc5", "Kc6", "axb6+"],
  },
  {
    fen: "r3r1k1/ppp1qpp1/1bn4p/3p4/3P3N/P1Q1P1P1/1P3PKP/R1B2R2 b - - 0 17",
    correctMoves: [
      {
        from: "g7",
        to: "g5",
        san: "g5"
      },
      {
        from: "e7",
        to: "e4",
        san: "Qe4"
      },
      {
        from: "e4",
        to: "f3",
        san: "Qxf3"
      },
    ],
    responseMoves: ["Nf3", "Kg1"],
  },
  {
    fen: "2k2r1N/ppp3Qp/2n5/2b1p3/3q4/3P4/PPP2PPP/RNB2RK1 b - - 0 14",
    correctMoves: [
      {
        from: "f8",
        to: "f2",
        san: "Rxf2"
      },
      {
        from: "d4",
        to: "e3",
        san: "Qxe3"
      },
      {
        from: "c8",
        to: "b8",
        san: "Kb8"
      },
      {
        from: "f2",
        to: "f8",
        san: "Rf8+"
      },
      {
        from: "f8",
        to: "g8",
        san: "Rxg8"
      },
    ],
    responseMoves: ["Be3", "Qg4+", "Qg8+", "Kh1"],
  },
  {
    fen: "r5qk/7p/1Q5b/2pp2p1/1n4P1/7N/1PPB2BP/1K1R1R2 b - - 0 29",
    correctMoves: [
      {
        from: "a8",
        to: "a1",
        san: "Ra1+"
      },
      {
        from: "g8",
        to: "a8",
        san: "Qa8+"
      },
      {
        from: "a8",
        to: "a5",
        san: "Qxa5+"
      },
      {
        from: "a5",
        to: "a2",
        san: "Qa2+"
      },
      {
        from: "a2",
        to: "a1",
        san: "Qa1#"
      },
    ],
    responseMoves: ["Kxa1", "Qa5", "Kb1", "Kc1"],
  },
  {
    fen: "5rk1/1pp3pp/8/3P4/P3Pp2/5KP1/1pr1R1BP/1R6 b - - 0 32",
    correctMoves: [
      {
        from: "f4",
        to: "g3",
        san: "fxg3+"
      },
      {
        from: "c2",
        to: "e2",
        san: "Rxe2+"
      },
      {
        from: "f8",
        to: "f2",
        san: "Rf2+"
      },
      {
        from: "f2",
        to: "g2",
        san: "Rxg2"
      },
      {
        from: "c7",
        to: "d6",
        san: "cxd6"
      },
    ],
    responseMoves: ["Ke3", "Kxe2", "Ke3", "d6"],
  },
  {
    fen: "8/8/8/1b1P3p/2kB2p1/4KpP1/7P/8 b - - 1 1",
    correctMoves: [
      {
        from: "f3",
        to: "f2",
        san: "f2"
      },
      {
        from: "c4",
        to: "d4",
        san: "Kxd4"
      },
    ],
    responseMoves: ["Kxf2"],
  },
  {
    fen: "3b2k1/1R6/p6p/3P1p2/bB1N2p1/1r4P1/7P/4K3 b - - 2 39",
    correctMoves: [
      {
        from: "b3",
        to: "b4",
        san: "Rxb4"
      },
      {
        from: "d8",
        to: "a5",
        san: "Ba5"
      },
      {
        from: "a4",
        to: "c6",
        san: "Bxc6"
      },
      {
        from: "a5",
        to: "b4",
        san: "Bxb4+"
      },
    ],
    responseMoves: ["Rxb4", "Nc6", "dxc6"],
  },
  {
    fen: "r5k1/p1p3pp/1p2pr2/5p1q/3P2n1/P3PN2/1P2QPP1/R1B1R1K1 b - - 3 20",
    correctMoves: [
      {
        from: "f6",
        to: "h6",
        san: "Rh6"
      },
      {
        from: "h5",
        to: "h1",
        san: "Qh1+"
      },
      {
        from: "g4",
        to: "h2",
        san: "Nh2#"
      },
    ],
    responseMoves: ["Kf1", "Ng1"],
  },
  {
    fen: "2kr3r/pp1qppb1/2p1n1p1/3pP3/1PPPn1b1/2N1BN2/P3B1PP/2RQK2R w K - 1 15",
    correctMoves: [
      {
        from: "c4",
        to: "d5",
        san: "cxd5"
      },
      {
        from: "d5",
        to: "e6",
        san: "dxe6"
      },
      {
        from: "c1",
        to: "c3",
        san: "Rxc3"
      },
    ],
    responseMoves: ["Nxc3", "Qxe6"],
  },
  {
    fen: "1Q6/8/8/p7/Pq6/3k4/K7/8 w - - 5 61",
    correctMoves: [
      {
        from: "b8",
        to: "b4",
        san: "Qxb4"
      },
      {
        from: "a2",
        to: "b3",
        san: "Kb3"
      },
      {
        from: "b3",
        to: "b4",
        san: "Kxb4"
      },
      {
        from: "b4",
        to: "b5",
        san: "Kb5"
      },
      {
        from: "b5",
        to: "b6",
        san: "Kb6"
      },
      {
        from: "b6",
        to: "b7",
        san: "Kb7"
      },
    ],
    responseMoves: ["axb4", "Kd4", "Kd5", "Kd6", "Kd7"],
  },
  {
    fen: "8/8/8/2kP4/p2R3P/4K1P1/8/r7 b - - 2 42",
    correctMoves: [
      {
        from: "a1",
        to: "e1",
        san: "Re1+"
      },
      {
        from: "c5",
        to: "d4",
        san: "Kxd4+"
      },
      {
        from: "a4",
        to: "a3",
        san: "a3"
      },
      {
        from: "a3",
        to: "a2",
        san: "a2"
      },
    ],
    responseMoves: ["Kd2", "Kxe1", "Kd2"],
  },
  {
    fen: "r2qkbnr/1p1b3p/p2p4/3Np1p1/1pBnP3/5Q2/P1PP2PP/R1B1K1NR w KQkq - 4 12",
    correctMoves: [
      {
        from: "f3",
        to: "h5",
        san: "Qh5#"
      },
    ],
    responseMoves: [],
  },
  {
    fen: "r1bqk1nr/ppp1p2p/2n2p1b/3p4/3P4/7P/PPP2PP1/RNBQKBNR w KQkq - 1 6",
    correctMoves: [
      {
        from: "d1",
        to: "h5",
        san: "Qh5+"
      },
      {
        from: "c1",
        to: "h6",
        san: "Bxh6+"
      },
      {
        from: "h5",
        to: "h6",
        san: "Qxh6+"
      },
    ],
    responseMoves: ["Kf8", "Nxh6"],
  },
  {
    fen: "r5k1/ppp3pp/8/8/3np3/P3N2q/1PP2QR1/R5K1 b - - 1 1",
    correctMoves: [
      {
        from: "a8",
        to: "f8",
        san: "Rf8"
      },
      {
        from: "g8",
        to: "g7",
        san: "Kxg7"
      },
      {
        from: "h3",
        to: "g2",
        san: "Qxg2+"
      },
    ],
    responseMoves: ["Rxg7+", "Qg2+"],
  },
  {
    fen: "1R2Q3/6p1/2N2k1r/5pN1/5P2/2P5/P3BPKp/8 b - - 3 34",
    correctMoves: [
      {
        from: "a2",
        to: "a1",
        san: "a1=Q+"
      },
      {
        from: "h1",
        to: "h2",
        san: "Qh2+"
      },
      {
        from: "h6",
        to: "h3",
        san: "Rh3+"
      },
      {
        from: "h2",
        to: "h3",
        san: "Qxh3#"
      },
    ],
    responseMoves: ["Kg3", "Kf3", "Nxh3"],
  },
  {
    fen: "5k2/5p2/2P1p1p1/4P2p/3K1P1P/8/2B3P1/r7 w - - 1 2",
    correctMoves: [
      {
        from: "c6",
        to: "c7",
        san: "c7"
      },
      {
        from: "d4",
        to: "c5",
        san: "Kc5"
      },
    ],
    responseMoves: ["Ra8"],
  },
  {
    fen: "2k5/pppqb3/5nNp/4p3/4B3/2P3P1/PP1B3P/R2K1R2 b - - 0 22",
    correctMoves: [
      {
        from: "f6",
        to: "e4",
        san: "Nxe4"
      },
      {
        from: "c8",
        to: "d8",
        san: "Kd8"
      },
      {
        from: "b7",
        to: "c6",
        san: "bxc6"
      },
      {
        from: "d7",
        to: "d2",
        san: "Qxd2+"
      },
    ],
    responseMoves: ["Nxe7+", "Nc6+", "Kc2"],
  },
  {
    fen: "6k1/8/3n1Q2/r2N4/p1qP4/8/6KP/8 w - - 1 2",
    correctMoves: [
      {
        from: "d5",
        to: "e7",
        san: "Ne7+"
      },
      {
        from: "f6",
        to: "g6",
        san: "Qg6+"
      },
      {
        from: "g6",
        to: "h6",
        san: "Qh6#"
      },
    ],
    responseMoves: ["Kh7", "Kh8"],
  },
  {
    fen: "7k/2p3p1/1qB1Q2p/2bpB3/3p4/3P4/1Pp2PPP/6K1 w - - 0 2",
    correctMoves: [
      {
        from: "e6",
        to: "h6",
        san: "Qxh6+"
      },
      {
        from: "h6",
        to: "g7",
        san: "Qxg7+"
      },
    ],
    responseMoves: ["Kg8"],
  },
  {
    fen: "8/8/8/kPK2P2/P5pp/8/6P1/8 b - - 0 58",
    correctMoves: [
      {
        from: "h4",
        to: "h3",
        san: "h3"
      },
      {
        from: "g4",
        to: "g3",
        san: "g3"
      },
      {
        from: "g3",
        to: "g2",
        san: "g2"
      },
      {
        from: "g2",
        to: "g1",
        san: "g1=Q+"
      },
    ],
    responseMoves: ["gxh3", "f6", "f7"],
  },
  {
    fen: "3rk3/p4r2/2p5/1p5Q/2q5/1KP5/PP4PP/RN1R4 w - - 2 28",
    correctMoves: [
      {
        from: "b3",
        to: "c2",
        san: "Kc2"
      },
      {
        from: "c2",
        to: "c1",
        san: "Kc1"
      },
      {
        from: "c1",
        to: "d1",
        san: "Kxd1"
      },
    ],
    responseMoves: ["Qe4+", "Rxd1+"],
  },
  {
    fen: "4kb1r/4pppp/8/6Q1/5P2/2r1q1P1/P1n4P/3R1KNb w k - 0 28",
    correctMoves: [
      {
        from: "g5",
        to: "b5",
        san: "Qb5+"
      },
      {
        from: "b5",
        to: "b8",
        san: "Qb8+"
      },
      {
        from: "b8",
        to: "c8",
        san: "Qxc8#"
      },
    ],
    responseMoves: ["Rc6", "Rc8"],
  },
  {
    fen: "8/Pq4pk/7p/4Q3/4bp2/8/6PP/5BK1 b - - 0 1",
    correctMoves: [
      {
        from: "b7",
        to: "a7",
        san: "Qxa7+"
      },
      {
        from: "a7",
        to: "e3",
        san: "Qe3"
      },
    ],
    responseMoves: ["Kh1"],
  },
  {
    fen: "r3k2r/pp2bpp1/1qp1p1bp/3pP3/5B2/P2BPPP1/1PPQ3P/2KR3R b kq - 1 14",
    correctMoves: [
      {
        from: "g6",
        to: "d3",
        san: "Bxd3"
      },
      {
        from: "g7",
        to: "g5",
        san: "g5"
      },
      {
        from: "g5",
        to: "f4",
        san: "gxf4"
      },
    ],
    responseMoves: ["Qxd3", "g4"],
  },
  {
    fen: "r1bq1rk1/1p3p1n/p2p1b1Q/2p1p3/4P2P/1PNP1N2/1PP2PP1/R3K2R w KQ - 1 15",
    correctMoves: [
      {
        from: "f3",
        to: "g5",
        san: "Ng5"
      },
      {
        from: "e4",
        to: "f5",
        san: "exf5"
      },
      {
        from: "h4",
        to: "g5",
        san: "hxg5"
      },
    ],
    responseMoves: ["Bf5", "Bxg5"],
  }
  ,
  {
    fen: "3r1k2/1p4p1/p1b2n1p/2qNQ3/2P5/3B1P2/2P3PP/4RK2 w - - 1 2",
    correctMoves: [
      {
        from: "d5",
        to: "f6",
        san: "Nxf6"
      },
      {
        from: "f6",
        to: "h7",
        san: "Nh7+"
      },
      {
        from: "e1",
        to: "e5",
        san: "Rxe5"
      },
    ],
    responseMoves: ["Qxe5", "Kf7"],
  }
  ,
  {
    fen: "r4rk1/2p1qbpp/8/1p2p3/1P1nP3/p2P4/P2Q1P2/1K3BRR w - - 4 27",
    correctMoves: [
      {
        from: "g1",
        to: "g7",
        san: "Rxg7+"
      },
      {
        from: "d2",
        to: "h6",
        san: "Qh6+"
      },
      {
        from: "h6",
        to: "h7",
        san: "Qxh7#"
      },
    ],
    responseMoves: ["Kxg7", "Kg8"],
  }
  ,
  {
    fen: "3r2nr/1Qbk1ppp/1pB3q1/p1p5/2P1NP2/4n3/PP4PP/R4RK1 b - - 5 20",
    correctMoves: [
      {
        from: "g6",
        to: "c6",
        san: "Qxc6"
      },
      {
        from: "e3",
        to: "d1",
        san: "Nxd1"
      },
      {
        from: "d7",
        to: "e7",
        san: "Ke7"
      },
      {
        from: "d8",
        to: "d1",
        san: "Rxd1+"
      },
    ],
    responseMoves: ["Rfd1", "Rxd1", "Qxc6"],
  }
  ,
  {
    fen: "rnb2rk1/pp3ppp/2p5/8/2Bq4/2nP1Q2/P1P2PPP/R1B1R1K1 w - - 2 14",
    correctMoves: [
      {
        from: "f3",
        to: "f7",
        san: "Qxf7+"
      },
      {
        from: "e1",
        to: "ge86",
        san: "Re8#"
      },
    ],
    responseMoves: ["Rxf7"],
  }
  ,
  {
    fen: "4q3/1p6/1k1p3Q/2pPp2P/1n2P1bR/R1K2N2/1PP3r1/6N1 b - - 6 29",
    correctMoves: [
      {
        from: "g2",
        to: "c2",
        san: "Rxc2+"
      },
      {
        from: "c5",
        to: "c4",
        san: "c4+"
      },
      {
        from: "e8",
        to: "b5",
        san: "Qb5#"
      },
    ],
    responseMoves: ["Kb3", "Kxb4"],
  }
  ,
  {
    fen: "rn1q2kr/pp2n1pp/3b4/2p3N1/3p2b1/8/PPP1QPPP/RNB1K2R w KQ - 2 10",
    correctMoves: [
      {
        from: "e2",
        to: "c4",
        san: "Qc4+"
      },
      {
        from: "c4",
        to: "d5",
        san: "Qxd5+"
      },
    ],
    responseMoves: ["Nd5"],
  }
  ,
  {
    fen: "1kq3r1/p1p2Q2/Pp6/1P2P3/3B1P2/2P4r/6P1/R3R1K1 b - - 0 31",
    correctMoves: [
      {
        from: "g8",
        to: "g2",
        san: "Rxg2+"
      },
      {
        from: "c8",
        to: "g4",
        san: "Qg4+"
      },
      {
        from: "g4",
        to: "f3",
        san: "Qf3+"
      },
      {
        from: "h3",
        to: "h1",
        san: "Rh1#"
      },
    ],
    responseMoves: ["Kxg2", "Kf1", "Bf2"],
  }
  ,
  {
    fen: "8/8/5k2/2q5/p4K2/P2Q1PP1/7P/8 b - - 1 49",
    correctMoves: [
      {
        from: "c5",
        to: "g5",
        san: "Qg5+"
      },
      {
        from: "g5",
        to: "e5",
        san: "Qe5#"
      },
    ],
    responseMoves: ["Ke4"],
  }
  ,
  {
    fen: "2kr3r/p1p1n3/2q5/2p1ppp1/2N3p1/2PP2P1/PP1K1P1N/R2Q3R b - - 1 1",
    correctMoves: [
      {
        from: "d8",
        to: "d3",
        san: "Rxd3+"
      },
      {
        from: "c6",
        to: "e4",
        san: "Qe4+"
      },
      {
        from: "h8",
        to: "d8",
        san: "Rd8+"
      },
      {
        from: "d8",
        to: "d1",
        san: "Rxd1+"
      },
      {
        from: "e4",
        to: "c4",
        san: "Qxc4"
      },
    ],
    responseMoves: ["Kxd3", "Kd2", "Kc1", "Rxd1"],
  }
  ,
  {
    fen: "2r5/4Pk2/5P2/p3B1P1/5K2/1pp5/8/8 w - - 0 2",
    correctMoves: [
      {
        from: "f4",
        to: "f5",
        san: "Kf5"
      },
      {
        from: "e5",
        to: "c3",
        san: "Bxc3"
      },
    ],
    responseMoves: ["Rg8"],
  }
  ,
  {
    fen: "r2r2k1/pp2ppbp/nq4p1/4N3/3PB1b1/4B3/PPQ2PPP/1R2K2R b K - 1 1",
    correctMoves: [
      {
        from: "g7",
        to: "e5",
        san: "Bxe5"
      },
      {
        from: "b6",
        to: "b4",
        san: "Qb4+"
      },
    ],
    responseMoves: ["dxe5"],
  }
  ,
  {
    fen: "5rk1/pp3qp1/2p1pr1p/2PB4/3PRnQ1/8/P2B2PP/4R1K1 b - - 0 23",
    correctMoves: [
      {
        from: "f4",
        to: "h3",
        san: "Nh3+"
      },
      {
        from: "f6",
        to: "f1",
        san: "Rf1+"
      },
      {
        from: "f7",
        to: "f1",
        san: "Qxf1#"
      },
    ],
    responseMoves: ["gxh3", "Rxf1"],
  }
  ,
  {
    fen: "5r1k/ppp3p1/2nb4/5q2/5B2/P1P2pP1/1P3P1P/R2Q1RK1 b - - 2 24",
    correctMoves: [
      {
        from: "c6",
        to: "e5",
        san: "Ne5"
      },
      {
        from: "f5",
        to: "h3",
        san: "Qh3"
      },
      {
        from: "f8",
        to: "f3",
        san: "Rxf3"
      },
      {
        from: "c7",
        to: "d6",
        san: "cxd6"
      },
    ],
    responseMoves: ["Bxe5", "Qxf3", "Bxd6"],
  }
  ,
  {
    fen: "2k4r/pp6/3rpq2/3PR1p1/1P1P2p1/P2Q2P1/5P2/R5K1 b - - 0 24",
    correctMoves: [
      {
        from: "f6",
        to: "h6",
        san: "Qh6"
      },
      {
        from: "h6",
        to: "h2",
        san: "Qh2+"
      },
      {
        from: "h2",
        to: "h1",
        san: "Qh1+"
      },
      {
        from: "h8",
        to: "h1",
        san: "Rxh1+"
      },
      {
        from: "h1",
        to: "a1",
        san: "Rxa1"
      },
    ],
    responseMoves: ["Qe4", "Kf1", "Qxh1", "Ke2"],
  }
  ,
  {
    fen: "6k1/p3bpp1/2p4r/7r/1PQ1pP2/2P1P1Pq/PB4RP/R5K1 b - - 4 24",
    correctMoves: [
      {
        from: "h3",
        to: "g2",
        san: "Qxg2+"
      },
      {
        from: "h5",
        to: "h2",
        san: "Rxh2+"
      },
      {
        from: "h2",
        to: "h1",
        san: "Rh1+"
      },
      {
        from: "h6",
        to: "h2",
        san: "R6h2#"
      },
    ],
    responseMoves: ["Kxg2", "Kf1", "Ke2"],
  }
  ,
  {
    fen: "r4rk1/1bp1qpp1/ppn2b1p/3ppQ2/P2P4/1NP1PNPB/1P3P1P/R4RK1 b - - 1 16",
    correctMoves: [
      {
        from: "b7",
        to: "c8",
        san: "Bc8"
      },
      {
        from: "g7",
        to: "g6",
        san: "g6"
      },
      {
        from: "f6",
        to: "g7",
        san: "Bg7"
      },
    ],
    responseMoves: ["Qh5", "Qxh6"]
  }
  ,
  {
    fen: "6k1/1p1r1r1p/p3Q1p1/8/2P5/2P5/P1q3PP/R4R1K w - - 0 26",
    correctMoves: [
      {
        from: "f1",
        to: "f7",
        san: "Rxf7"
      },
      {
        from: "a1",
        to: "f1",
        san: "Rf1"
      },
      {
        from: "f1",
        to: "f5",
        san: "Rxf5"
      },
    ],
    responseMoves: ["Rxf7", "Qf5"]
  },
  {
    fen: "r6k/1p3Q1p/1n3P2/p5PR/1K1pP3/1P1P4/2P5/q7 w - a6 0 38",
    correctMoves: [
      {
        from: "b4",
        to: "b5",
        san: "Kb5"
      },
      {
        from: "b3",
        to: "a4",
        san: "bxa4"
      },
    ],
    responseMoves: ["Qa4+"]
  }
  ,
  {
    fen: "3r2k1/5pp1/p5rp/1pPpBn2/1P6/P2Q2Pq/5P2/3RR1K1 b - - 12 29",
    correctMoves: [
      {
        from: "f5",
        to: "h4",
        san: "Nh4"
      },
      {
        from: "d5",
        to: "e4",
        san: "dxe4"
      },
      {
        from: "g8",
        to: "h7",
        san: "Kh7"
      },
      {
        from: "h7",
        to: "h8",
        san: "Kxh8"
      },
    ],
    responseMoves: ["Qe4", "Rxd8+", "Rh8+"]
  },
  {
    fen: "3q1r1k/p2b2R1/4ppQ1/1p2P3/8/PP2p3/5KPP/2r5 w - - 0 31",
    correctMoves: [
      {
        from: "f2",
        to: "g3",
        san: "Kg3"
      },
    ],
    responseMoves: []
  }
  ,
  {
    fen: "N1bk4/pp4pp/3p4/3P4/4KP2/6q1/PP6/R1Q5 b - - 2 38",
    correctMoves: [
      {
        from: "c8",
        to: "f5",
        san: "Bf5+"
      },
      {
        from: "g3",
        to: "g6",
        san: "Qg6#"
      },
    ],
    responseMoves: ["Kxf5"]
  },
  {
    fen: "r3k1r1/bppq1p2/3p1R1p/p3p2b/P3P2P/1N1PB3/1PP3P1/RB2Q1K1 b q - 0 19",
    correctMoves: [
      {
        from: "d7",
        to: "h3",
        san: "Qh3"
      },
    ],
    responseMoves: []
  },
  {
    fen: "1R6/p2N2pk/1p1pp2p/1P1b3P/1r6/6K1/8/8 w - - 5 46",
    correctMoves: [
      {
        from: "d7",
        to: "f8",
        san: "Nf8+"
      },
      {
        from: "f8",
        to: "g6",
        san: "Ng6+"
      },
      {
        from: "b8",
        to: "f8",
        san: "Rf8#"
      },
    ],
    responseMoves: ["Kg8", "Kf7"]
  },
  {
    fen: "3qr1k1/2p3p1/1p2np2/b2P3Q/4n3/6P1/1B3PK1/7R w - - 0 36",
    correctMoves: [
      {
        from: "d5",
        to: "e6",
        san: "dxe6"
      },
      {
        from: "h5",
        to: "h8",
        san: "Qh8+"
      },
      {
        from: "h8",
        to: "d8",
        san: "Qxd8"
      },
    ],
    responseMoves: ["Rxe6", "Kf7"]
  }
  ,
  {
    fen: "3rr3/1b3pk1/2q2n1p/2p2Pp1/2B1p1P1/1PN1Q2P/P1P1R2K/3R4 b - - 0 32",
    correctMoves: [
      {
        from: "d8",
        to: "d1",
        san: "Rxd1"
      },
      {
        from: "c6",
        to: "d6",
        san: "Qd6+"
      },
      {
        from: "d6",
        to: "d1",
        san: "Qxd1+"
      },
    ],
    responseMoves: ["Nxd1", "Kh1"],
  },
  {
    fen: "3r2k1/5Rp1/p1p4p/Pp6/1P6/2q1NQ2/5P2/5K2 b - - 0 35",
    correctMoves: [
      {
        from: "c3",
        to: "d3",
        san: "Qd3+"
      },
      {
        from: "d3",
        to: "g6",
        san: "Qg6+"
      },
      {
        from: "g6",
        to: "f7",
        san: "Qxf7+"
      },
      {
        from: "g8",
        to: "f7",
        san: "Kxf7"
      },
    ],
    responseMoves: ["Kg2", "Ng4", "Qxf7+"],
  },
  {
    fen: "6k1/3r1rp1/8/Q2pq2p/3Rp3/2P4P/1P1R1PP1/6K1 b - - 0 1",
    correctMoves: [
      {
        from: "e4",
        to: "e3",
        san: "e3"
      },
      {
        from: "e5",
        to: "e3",
        san: "Qxe3+"
      },
    ],
    responseMoves: ["fxe3"],
  },
  {
    fen: "5b1r/2p1kppp/2Q1q3/4p3/4P3/2P2P2/rP2K2P/n1BR4 w - - 1 22",
    correctMoves: [
      {
        from: "c1",
        to: "g5",
        san: "Bg5+"
      },
      {
        from: "c6",
        to: "c7",
        san: "Qxc7+"
      },
      {
        from: "d1",
        to: "d8",
        san: "Rd8#"
      },
    ],
    responseMoves: ["f6", "Ke8"],
  },
  {
    fen: "rnbq1rk1/ppp2pbp/3p1np1/4p1B1/3PPP2/2N5/PPPQ2PP/R3KBNR w KQ e6 0 7",
    correctMoves: [
      {
        from: "d4",
        to: "e5",
        san: "dxe5"
      },
      {
        from: "d2",
        to: "d8",
        san: "Qxd8"
      },
      {
        from: "f4",
        to: "e5",
        san: "fxe5"
      },
    ],
    responseMoves: ["dxe5", "Rxd8"],
  },
  {
    fen: "3r2k1/3r1ppp/8/4p3/n7/Bq2P3/4QPPP/RR4K1 b - - 1 1",
    correctMoves: [
      {
        from: "b3",
        to: "b1",
        san: "Qxb1+"
      },
      {
        from: "a4",
        to: "c3",
        san: "Nc3"
      },
      {
        from: "c3",
        to: "b1",
        san: "Nxb1"
      },
    ],
    responseMoves: ["Rxb1", "Qc2"],
  },
  {
    fen: "5r2/1q4p1/5k2/8/4p2R/2r4P/4Q1P1/5NK1 w - - 0 48",
    correctMoves: [
      {
        from: "h4",
        to: "f4",
        san: "Rf4+"
      },
      {
        from: "f4",
        to: "e4",
        san: "Rxe4+"
      },
      {
        from: "e4",
        to: "f4",
        san: "Rf4+"
      },
      {
        from: "e2",
        to: "e6",
        san: "Qe6+"
      },
      {
        from: "e6",
        to: "e8",
        san: "Qe8+"
      },
    ],
    responseMoves: ["Ke7", "Kf7", "Kg8", "Rf7"],
  },
  {
    fen: "2r1rk2/pp6/q4p2/3pN1Q1/3P4/2P5/3K1PPP/7R w - - 0 31",
    correctMoves: [
      {
        from: "g5",
        to: "h6",
        san: "Qh6+"
      },
      {
        from: "h6",
        to: "g6",
        san: "Qg6+"
      },
    ],
    responseMoves: ["Kg8"],
  },
  {
    fen: "rnbq1rk1/pp2bpp1/3ppn1p/1BP5/4P3/2N2N2/PPP2PPP/R1BQ1RK1 w - - 0 8",
    correctMoves: [
      {
        from: "c5",
        to: "d6",
        san: "cxd6"
      },
      {
        from: "d1",
        to: "d6",
        san: "Qxd6"
      },
      {
        from: "e4",
        to: "e5",
        san: "e5"
      },
      {
        from: "e5",
        to: "f6",
        san: "exf6"
      },
    ],
    responseMoves: ["Qxd6", "Bxd6", "Be7"],
  },
  {
    fen: "5rk1/2p2pp1/8/6q1/8/Q7/1PP2PbP/R3R1K1 b - - 1 23",
    correctMoves: [
      {
        from: "g2",
        to: "f3",
        san: "Bf3+"
      },
    ],
    responseMoves: [],
  },
  {
    fen: "4r1k1/p2Q1p1p/6p1/P4P2/6P1/R1P3KP/4q3/3R4 b - - 14 48",
    correctMoves: [
      {
        from: "e8",
        to: "e3",
        san: "Re3+"
      },
      {
        from: "e2",
        to: "f2",
        san: "Qf2+"
      },
      {
        from: "h7",
        to: "h6",
        san: "h6+"
      },
      {
        from: "f2",
        to: "h4",
        san: "Qh4+"
      },
      {
        from: "h4",
        to: "g5",
        san: "Qxg5#"
      },
    ],
    responseMoves: ["Kh4", "Kg5", "Kf6", "g5"],
  },
  {
    fen: "8/8/7p/p1k2PpP/1p2p1P1/1P2P3/5K2/8 b - - 15 60",
    correctMoves: [
      {
        from: "a5",
        to: "a4",
        san: "a4"
      },
      {
        from: "c5",
        to: "d6",
        san: "Kd6"
      },
      {
        from: "b4",
        to: "b3",
        san: "b3"
      },
      {
        from: "b3",
        to: "b2",
        san: "b2"
      },
      {
        from: "d6",
        to: "e7",
        san: "Ke7"
      },
      {
        from: "e7",
        to: "f8",
        san: "Kxf8"
      },
    ],
    responseMoves: ["f6", "bxa4", "a5", "f7", "f8=Q+"],
  },
  {
    fen: "r3kb1r/pp3ppp/2n4n/2pB2q1/3P2b1/5Q2/PPP2PPP/RNB1K2R w KQkq - 1 9",
    correctMoves: [
      {
        from: "d5",
        to: "c6",
        san: "Bxc6+"
      },
      {
        from: "f3",
        to: "c6",
        san: "Qxc6+"
      },
      {
        from: "c6",
        to: "a8",
        san: "Qxa8+"
      },
    ],
    responseMoves: ["bxc6", "Bd7"],
  },
  {
    fen: "1r2q3/2p1b1kp/p1N1pnp1/1p3b2/2pP1Q2/P1N5/1PP2P2/2KR2R1 w - - 4 23",
    correctMoves: [
      {
        from: "f4",
        to: "c7",
        san: "Qxc7"
      },
      {
        from: "c7",
        to: "e7",
        san: "Qxe7+"
      },
      {
        from: "c6",
        to: "e7",
        san: "Nxe7"
      },
    ],
    responseMoves: ["Rc8", "Qxe7"],
  },
  {
    fen: "r2q1rk1/pp4p1/2p2n1p/7P/4p1b1/P1B1P3/1PP1NP2/R2QK1R1 w Q - 4 19",
    correctMoves: [
      {
        from: "d1",
        to: "d8",
        san: "Qxd8"
      },
      {
        from: "c3",
        to: "f6",
        san: "Bxf6"
      },
      {
        from: "g1",
        to: "g4",
        san: "Rxg4"
      },
    ],
    responseMoves: ["Raxd8", "Rxf6"],
  },
  {
    fen: "r3r1k1/p4qpn/2p1bp1Q/4pR2/1p2P2B/3PN1R1/1P4PP/7K b - - 2 29",
    correctMoves: [
      {
        from: "e6",
        to: "f5",
        san: "Bxf5"
      },
      {
        from: "h7",
        to: "g5",
        san: "Ng5"
      },
      {
        from: "f6",
        to: "g5",
        san: "hxg5"
      },
    ],
    responseMoves: ["Nxf5", "Rxg5"],
  },
  {
    fen: "5b1r/p4pp1/b3p3/B1RR3p/4kPq1/4P3/P4KPP/8 w - - 0 27",
    correctMoves: [
      {
        from: "d5",
        to: "d4",
        san: "Rd4#"
      },
    ],
    responseMoves: [],
  },
  {
    fen: "8/2p2k2/8/ppp1PPpp/8/PP1P1K1P/8/8 b - - 0 1",
    correctMoves: [
      {
        from: "a5",
        to: "a4",
        san: "a4"
      },
      {
        from: "b5",
        to: "b4",
        san: "b4"
      },
      {
        from: "c5",
        to: "b4",
        san: "cxb4"
      },
      {
        from: "b4",
        to: "b3",
        san: "b4"
      },
      {
        from: "b3",
        to: "b2",
        san: "b2"
      },
      {
        from: "b2",
        to: "b1",
        san: "b1=Q"
      },
      {
        from: "b1",
        to: "h1",
        san: "Qh1+"
      },
      {
        from: "h1",
        to: "a8",
        san: "Qxa8"
      },
    ],
    responseMoves: ["bxa4", "axb4", "a5", "a6", "a7", "a8=Q", "Ke3"],
  },
  {
    fen: "1b1r4/k2q4/P2r4/1p5p/1P2Q1p1/6P1/2R2P1P/2R3K1 w - - 1 40",
    correctMoves: [
      {
        from: "c2",
        to: "c7",
        san: "Rc7+"
      },
      {
        from: "c1",
        to: "c7",
        san: "Rxc7+"
      },
      {
        from: "e4",
        to: "b7",
        san: "Qb7#"
      },
    ],
    responseMoves: ["Qxc7", "Bxc7"],
  },
  {
    fen: "5Q2/1Q4pk/5p1p/8/4Pp2/3P2PP/5qBK/8 b - - 3 40",
    correctMoves: [
      {
        from: "f4",
        to: "g3",
        san: "fxg3+"
      },
      {
        from: "f2",
        to: "e1",
        san: "Qe1+"
      },
      {
        from: "e1",
        to: "f1",
        san: "Qxf1#"
      },
    ],
    responseMoves: ["Kh1", "Bf1"],
  },
  {
    fen: "3rk2r/pp1n1ppp/1bp1pnq1/8/3P2P1/2P1BN1P/PP2QP2/R3KB1R w KQk - 1 14",
    correctMoves: [
      {
        from: "f3",
        to: "h4",
        san: "Nh4"
      },
      {
        from: "f1",
        to: "g2",
        san: "Bg2"
      },
      {
        from: "h4",
        to: "g2",
        san: "Nxg2"
      },
    ],
    responseMoves: ["Qe4", "Qxg2"],
  },
  {
    fen: "8/k1r5/1R6/PKp5/1pP5/8/8/8 b - - 8 58",
    correctMoves: [
      {
        from: "c7",
        to: "b7",
        san: "Rb7"
      },
      {
        from: "b4",
        to: "b3",
        san: "b3"
      },
      {
        from: "b7",
        to: "b6",
        san: "Rxb6"
      },
      {
        from: "a7",
        to: "b8",
        san: "Kb8"
      },
    ],
    responseMoves: ["Kxc5", "Kc6", "axb6+"],
  },
  {
    fen: "r3r1k1/ppp1qpp1/1bn4p/3p4/3P3N/P1Q1P1P1/1P3PKP/R1B2R2 b - - 0 17",
    correctMoves: [
      {
        from: "g7",
        to: "g5",
        san: "g5"
      },
      {
        from: "e7",
        to: "e4",
        san: "Qe4"
      },
      {
        from: "e4",
        to: "f3",
        san: "Qxf3"
      },
    ],
    responseMoves: ["Nf3", "Kg1"],
  },
  {
    fen: "2k2r1N/ppp3Qp/2n5/2b1p3/3q4/3P4/PPP2PPP/RNB2RK1 b - - 0 14",
    correctMoves: [
      {
        from: "f8",
        to: "f2",
        san: "Rxf2"
      },
      {
        from: "d4",
        to: "e3",
        san: "Qxe3"
      },
      {
        from: "c8",
        to: "b8",
        san: "Kb8"
      },
      {
        from: "f2",
        to: "f8",
        san: "Rf8+"
      },
      {
        from: "f8",
        to: "g8",
        san: "Rxg8"
      },
    ],
    responseMoves: ["Be3", "Qg4+", "Qg8+", "Kh1"],
  },
  {
    fen: "r5qk/7p/1Q5b/2pp2p1/1n4P1/7N/1PPB2BP/1K1R1R2 b - - 0 29",
    correctMoves: [
      {
        from: "a8",
        to: "a1",
        san: "Ra1+"
      },
      {
        from: "g8",
        to: "a8",
        san: "Qa8+"
      },
      {
        from: "a8",
        to: "a5",
        san: "Qxa5+"
      },
      {
        from: "a5",
        to: "a2",
        san: "Qa2+"
      },
      {
        from: "a2",
        to: "a1",
        san: "Qa1#"
      },
    ],
    responseMoves: ["Kxa1", "Qa5", "Kb1", "Kc1"],
  },
  {
    fen: "5rk1/1pp3pp/8/3P4/P3Pp2/5KP1/1pr1R1BP/1R6 b - - 0 32",
    correctMoves: [
      {
        from: "f4",
        to: "g3",
        san: "fxg3+"
      },
      {
        from: "c2",
        to: "e2",
        san: "Rxe2+"
      },
      {
        from: "f8",
        to: "f2",
        san: "Rf2+"
      },
      {
        from: "f2",
        to: "g2",
        san: "Rxg2"
      },
      {
        from: "c7",
        to: "d6",
        san: "cxd6"
      },
    ],
    responseMoves: ["Ke3", "Kxe2", "Ke3", "d6"],
  },
  {
    fen: "8/8/8/1b1P3p/2kB2p1/4KpP1/7P/8 b - - 1 1",
    correctMoves: [
      {
        from: "f3",
        to: "f2",
        san: "f2"
      },
      {
        from: "c4",
        to: "d4",
        san: "Kxd4"
      },
    ],
    responseMoves: ["Kxf2"],
  },
  {
    fen: "3b2k1/1R6/p6p/3P1p2/bB1N2p1/1r4P1/7P/4K3 b - - 2 39",
    correctMoves: [
      {
        from: "b3",
        to: "b4",
        san: "Rxb4"
      },
      {
        from: "d8",
        to: "a5",
        san: "Ba5"
      },
      {
        from: "a4",
        to: "c6",
        san: "Bxc6"
      },
      {
        from: "a5",
        to: "b4",
        san: "Bxb4+"
      },
    ],
    responseMoves: ["Rxb4", "Nc6", "dxc6"],
  },
  {
    fen: "r5k1/p1p3pp/1p2pr2/5p1q/3P2n1/P3PN2/1P2QPP1/R1B1R1K1 b - - 3 20",
    correctMoves: [
      {
        from: "f6",
        to: "h6",
        san: "Rh6"
      },
      {
        from: "h5",
        to: "h1",
        san: "Qh1+"
      },
      {
        from: "g4",
        to: "h2",
        san: "Nh2#"
      },
    ],
    responseMoves: ["Kf1", "Ng1"],
  },
  {
    fen: "2kr3r/pp1qppb1/2p1n1p1/3pP3/1PPPn1b1/2N1BN2/P3B1PP/2RQK2R w K - 1 15",
    correctMoves: [
      {
        from: "c4",
        to: "d5",
        san: "cxd5"
      },
      {
        from: "d5",
        to: "e6",
        san: "dxe6"
      },
      {
        from: "c1",
        to: "c3",
        san: "Rxc3"
      },
    ],
    responseMoves: ["Nxc3", "Qxe6"],
  },
  {
    fen: "1Q6/8/8/p7/Pq6/3k4/K7/8 w - - 5 61",
    correctMoves: [
      {
        from: "b8",
        to: "b4",
        san: "Qxb4"
      },
      {
        from: "a2",
        to: "b3",
        san: "Kb3"
      },
      {
        from: "b3",
        to: "b4",
        san: "Kxb4"
      },
      {
        from: "b4",
        to: "b5",
        san: "Kb5"
      },
      {
        from: "b5",
        to: "b6",
        san: "Kb6"
      },
      {
        from: "b6",
        to: "b7",
        san: "Kb7"
      },
    ],
    responseMoves: ["axb4", "Kd4", "Kd5", "Kd6", "Kd7"],
  },
  {
    fen: "8/8/8/2kP4/p2R3P/4K1P1/8/r7 b - - 2 42",
    correctMoves: [
      {
        from: "a1",
        to: "e1",
        san: "Re1+"
      },
      {
        from: "c5",
        to: "d4",
        san: "Kxd4+"
      },
      {
        from: "a4",
        to: "a3",
        san: "a3"
      },
      {
        from: "a3",
        to: "a2",
        san: "a2"
      },
    ],
    responseMoves: ["Kd2", "Kxe1", "Kd2"],
  },
  {
    fen: "r2qkbnr/1p1b3p/p2p4/3Np1p1/1pBnP3/5Q2/P1PP2PP/R1B1K1NR w KQkq - 4 12",
    correctMoves: [
      {
        from: "f3",
        to: "h5",
        san: "Qh5#"
      },
    ],
    responseMoves: [],
  },
  {
    fen: "r1bqk1nr/ppp1p2p/2n2p1b/3p4/3P4/7P/PPP2PP1/RNBQKBNR w KQkq - 1 6",
    correctMoves: [
      {
        from: "d1",
        to: "h5",
        san: "Qh5+"
      },
      {
        from: "c1",
        to: "h6",
        san: "Bxh6+"
      },
      {
        from: "h5",
        to: "h6",
        san: "Qxh6+"
      },
    ],
    responseMoves: ["Kf8", "Nxh6"],
  },
  {
    fen: "r5k1/ppp3pp/8/8/3np3/P3N2q/1PP2QR1/R5K1 b - - 1 1",
    correctMoves: [
      {
        from: "a8",
        to: "f8",
        san: "Rf8"
      },
      {
        from: "g8",
        to: "g7",
        san: "Kxg7"
      },
      {
        from: "h3",
        to: "g2",
        san: "Qxg2+"
      },
    ],
    responseMoves: ["Rxg7+", "Qg2+"],
  },
  {
    fen: "1R2Q3/6p1/2N2k1r/5pN1/5P2/2P5/P3BPKp/8 b - - 3 34",
    correctMoves: [
      {
        from: "a2",
        to: "a1",
        san: "a1=Q+"
      },
      {
        from: "h1",
        to: "h2",
        san: "Qh2+"
      },
      {
        from: "h6",
        to: "h3",
        san: "Rh3+"
      },
      {
        from: "h2",
        to: "h3",
        san: "Qxh3#"
      },
    ],
    responseMoves: ["Kg3", "Kf3", "Nxh3"],
  },
  {
    fen: "5k2/5p2/2P1p1p1/4P2p/3K1P1P/8/2B3P1/r7 w - - 1 2",
    correctMoves: [
      {
        from: "c6",
        to: "c7",
        san: "c7"
      },
      {
        from: "d4",
        to: "c5",
        san: "Kc5"
      },
    ],
    responseMoves: ["Ra8"],
  },
  {
    fen: "2k5/pppqb3/5nNp/4p3/4B3/2P3P1/PP1B3P/R2K1R2 b - - 0 22",
    correctMoves: [
      {
        from: "f6",
        to: "e4",
        san: "Nxe4"
      },
      {
        from: "c8",
        to: "d8",
        san: "Kd8"
      },
      {
        from: "b7",
        to: "c6",
        san: "bxc6"
      },
      {
        from: "d7",
        to: "d2",
        san: "Qxd2+"
      },
    ],
    responseMoves: ["Nxe7+", "Nc6+", "Kc2"],
  },
  {
    fen: "6k1/8/3n1Q2/r2N4/p1qP4/8/6KP/8 w - - 1 2",
    correctMoves: [
      {
        from: "d5",
        to: "e7",
        san: "Ne7+"
      },
      {
        from: "f6",
        to: "g6",
        san: "Qg6+"
      },
      {
        from: "g6",
        to: "h6",
        san: "Qh6#"
      },
    ],
    responseMoves: ["Kh7", "Kh8"],
  },
  {
    fen: "7k/2p3p1/1qB1Q2p/2bpB3/3p4/3P4/1Pp2PPP/6K1 w - - 0 2",
    correctMoves: [
      {
        from: "e6",
        to: "h6",
        san: "Qxh6+"
      },
      {
        from: "h6",
        to: "g7",
        san: "Qxg7+"
      },
    ],
    responseMoves: ["Kg8"],
  },
  {
    fen: "8/8/8/kPK2P2/P5pp/8/6P1/8 b - - 0 58",
    correctMoves: [
      {
        from: "h4",
        to: "h3",
        san: "h3"
      },
      {
        from: "g4",
        to: "g3",
        san: "g3"
      },
      {
        from: "g3",
        to: "g2",
        san: "g2"
      },
      {
        from: "g2",
        to: "g1",
        san: "g1=Q+"
      },
    ],
    responseMoves: ["gxh3", "f6", "f7"],
  },
  {
    fen: "3rk3/p4r2/2p5/1p5Q/2q5/1KP5/PP4PP/RN1R4 w - - 2 28",
    correctMoves: [
      {
        from: "b3",
        to: "c2",
        san: "Kc2"
      },
      {
        from: "c2",
        to: "c1",
        san: "Kc1"
      },
      {
        from: "c1",
        to: "d1",
        san: "Kxd1"
      },
    ],
    responseMoves: ["Qe4+", "Rxd1+"],
  },
  {
    fen: "4kb1r/4pppp/8/6Q1/5P2/2r1q1P1/P1n4P/3R1KNb w k - 0 28",
    correctMoves: [
      {
        from: "g5",
        to: "b5",
        san: "Qb5+"
      },
      {
        from: "b5",
        to: "b8",
        san: "Qb8+"
      },
      {
        from: "b8",
        to: "c8",
        san: "Qxc8#"
      },
    ],
    responseMoves: ["Rc6", "Rc8"],
  },
  {
    fen: "8/Pq4pk/7p/4Q3/4bp2/8/6PP/5BK1 b - - 0 1",
    correctMoves: [
      {
        from: "b7",
        to: "a7",
        san: "Qxa7+"
      },
      {
        from: "a7",
        to: "e3",
        san: "Qe3"
      },
    ],
    responseMoves: ["Kh1"],
  },
  {
    fen: "r3k2r/pp2bpp1/1qp1p1bp/3pP3/5B2/P2BPPP1/1PPQ3P/2KR3R b kq - 1 14",
    correctMoves: [
      {
        from: "g6",
        to: "d3",
        san: "Bxd3"
      },
      {
        from: "g7",
        to: "g5",
        san: "g5"
      },
      {
        from: "g5",
        to: "f4",
        san: "gxf4"
      },
    ],
    responseMoves: ["Qxd3", "g4"],
  },
  {
    fen: "r1bq1rk1/1p3p1n/p2p1b1Q/2p1p3/4P2P/1PNP1N2/1PP2PP1/R3K2R w KQ - 1 15",
    correctMoves: [
      {
        from: "f3",
        to: "g5",
        san: "Ng5"
      },
      {
        from: "e4",
        to: "f5",
        san: "exf5"
      },
      {
        from: "h4",
        to: "g5",
        san: "hxg5"
      },
    ],
    responseMoves: ["Bf5", "Bxg5"],
  }
  ,
  {
    fen: "3r1k2/1p4p1/p1b2n1p/2qNQ3/2P5/3B1P2/2P3PP/4RK2 w - - 1 2",
    correctMoves: [
      {
        from: "d5",
        to: "f6",
        san: "Nxf6"
      },
      {
        from: "f6",
        to: "h7",
        san: "Nh7+"
      },
      {
        from: "e1",
        to: "e5",
        san: "Rxe5"
      },
    ],
    responseMoves: ["Qxe5", "Kf7"],
  }
  ,
  {
    fen: "r4rk1/2p1qbpp/8/1p2p3/1P1nP3/p2P4/P2Q1P2/1K3BRR w - - 4 27",
    correctMoves: [
      {
        from: "g1",
        to: "g7",
        san: "Rxg7+"
      },
      {
        from: "d2",
        to: "h6",
        san: "Qh6+"
      },
      {
        from: "h6",
        to: "h7",
        san: "Qxh7#"
      },
    ],
    responseMoves: ["Kxg7", "Kg8"],
  }
  ,
  {
    fen: "3r2nr/1Qbk1ppp/1pB3q1/p1p5/2P1NP2/4n3/PP4PP/R4RK1 b - - 5 20",
    correctMoves: [
      {
        from: "g6",
        to: "c6",
        san: "Qxc6"
      },
      {
        from: "e3",
        to: "d1",
        san: "Nxd1"
      },
      {
        from: "d7",
        to: "e7",
        san: "Ke7"
      },
      {
        from: "d8",
        to: "d1",
        san: "Rxd1+"
      },
    ],
    responseMoves: ["Rfd1", "Rxd1", "Qxc6"],
  }
  ,
  {
    fen: "rnb2rk1/pp3ppp/2p5/8/2Bq4/2nP1Q2/P1P2PPP/R1B1R1K1 w - - 2 14",
    correctMoves: [
      {
        from: "f3",
        to: "f7",
        san: "Qxf7+"
      },
      {
        from: "e1",
        to: "ge86",
        san: "Re8#"
      },
    ],
    responseMoves: ["Rxf7"],
  }
  ,
  {
    fen: "4q3/1p6/1k1p3Q/2pPp2P/1n2P1bR/R1K2N2/1PP3r1/6N1 b - - 6 29",
    correctMoves: [
      {
        from: "g2",
        to: "c2",
        san: "Rxc2+"
      },
      {
        from: "c5",
        to: "c4",
        san: "c4+"
      },
      {
        from: "e8",
        to: "b5",
        san: "Qb5#"
      },
    ],
    responseMoves: ["Kb3", "Kxb4"],
  }
  ,
  {
    fen: "rn1q2kr/pp2n1pp/3b4/2p3N1/3p2b1/8/PPP1QPPP/RNB1K2R w KQ - 2 10",
    correctMoves: [
      {
        from: "e2",
        to: "c4",
        san: "Qc4+"
      },
      {
        from: "c4",
        to: "d5",
        san: "Qxd5+"
      },
    ],
    responseMoves: ["Nd5"],
  }
  ,
  {
    fen: "1kq3r1/p1p2Q2/Pp6/1P2P3/3B1P2/2P4r/6P1/R3R1K1 b - - 0 31",
    correctMoves: [
      {
        from: "g8",
        to: "g2",
        san: "Rxg2+"
      },
      {
        from: "c8",
        to: "g4",
        san: "Qg4+"
      },
      {
        from: "g4",
        to: "f3",
        san: "Qf3+"
      },
      {
        from: "h3",
        to: "h1",
        san: "Rh1#"
      },
    ],
    responseMoves: ["Kxg2", "Kf1", "Bf2"],
  }
  ,
  {
    fen: "8/8/5k2/2q5/p4K2/P2Q1PP1/7P/8 b - - 1 49",
    correctMoves: [
      {
        from: "c5",
        to: "g5",
        san: "Qg5+"
      },
      {
        from: "g5",
        to: "e5",
        san: "Qe5#"
      },
    ],
    responseMoves: ["Ke4"],
  }
  ,
  {
    fen: "2kr3r/p1p1n3/2q5/2p1ppp1/2N3p1/2PP2P1/PP1K1P1N/R2Q3R b - - 1 1",
    correctMoves: [
      {
        from: "d8",
        to: "d3",
        san: "Rxd3+"
      },
      {
        from: "c6",
        to: "e4",
        san: "Qe4+"
      },
      {
        from: "h8",
        to: "d8",
        san: "Rd8+"
      },
      {
        from: "d8",
        to: "d1",
        san: "Rxd1+"
      },
      {
        from: "e4",
        to: "c4",
        san: "Qxc4"
      },
    ],
    responseMoves: ["Kxd3", "Kd2", "Kc1", "Rxd1"],
  }
  ,
  {
    fen: "2r5/4Pk2/5P2/p3B1P1/5K2/1pp5/8/8 w - - 0 2",
    correctMoves: [
      {
        from: "f4",
        to: "f5",
        san: "Kf5"
      },
      {
        from: "e5",
        to: "c3",
        san: "Bxc3"
      },
    ],
    responseMoves: ["Rg8"],
  }
  ,
  {
    fen: "r2r2k1/pp2ppbp/nq4p1/4N3/3PB1b1/4B3/PPQ2PPP/1R2K2R b K - 1 1",
    correctMoves: [
      {
        from: "g7",
        to: "e5",
        san: "Bxe5"
      },
      {
        from: "b6",
        to: "b4",
        san: "Qb4+"
      },
    ],
    responseMoves: ["dxe5"],
  }
  ,
  {
    fen: "5rk1/pp3qp1/2p1pr1p/2PB4/3PRnQ1/8/P2B2PP/4R1K1 b - - 0 23",
    correctMoves: [
      {
        from: "f4",
        to: "h3",
        san: "Nh3+"
      },
      {
        from: "f6",
        to: "f1",
        san: "Rf1+"
      },
      {
        from: "f7",
        to: "f1",
        san: "Qxf1#"
      },
    ],
    responseMoves: ["gxh3", "Rxf1"],
  }
  ,
  {
    fen: "5r1k/ppp3p1/2nb4/5q2/5B2/P1P2pP1/1P3P1P/R2Q1RK1 b - - 2 24",
    correctMoves: [
      {
        from: "c6",
        to: "e5",
        san: "Ne5"
      },
      {
        from: "f5",
        to: "h3",
        san: "Qh3"
      },
      {
        from: "f8",
        to: "f3",
        san: "Rxf3"
      },
      {
        from: "c7",
        to: "d6",
        san: "cxd6"
      },
    ],
    responseMoves: ["Bxe5", "Qxf3", "Bxd6"],
  }
  ,
  {
    fen: "2k4r/pp6/3rpq2/3PR1p1/1P1P2p1/P2Q2P1/5P2/R5K1 b - - 0 24",
    correctMoves: [
      {
        from: "f6",
        to: "h6",
        san: "Qh6"
      },
      {
        from: "h6",
        to: "h2",
        san: "Qh2+"
      },
      {
        from: "h2",
        to: "h1",
        san: "Qh1+"
      },
      {
        from: "h8",
        to: "h1",
        san: "Rxh1+"
      },
      {
        from: "h1",
        to: "a1",
        san: "Rxa1"
      },
    ],
    responseMoves: ["Qe4", "Kf1", "Qxh1", "Ke2"],
  }
  ,
  {
    fen: "6k1/p3bpp1/2p4r/7r/1PQ1pP2/2P1P1Pq/PB4RP/R5K1 b - - 4 24",
    correctMoves: [
      {
        from: "h3",
        to: "g2",
        san: "Qxg2+"
      },
      {
        from: "h5",
        to: "h2",
        san: "Rxh2+"
      },
      {
        from: "h2",
        to: "h1",
        san: "Rh1+"
      },
      {
        from: "h6",
        to: "h2",
        san: "R6h2#"
      },
    ],
    responseMoves: ["Kxg2", "Kf1", "Ke2"],
  }
  ,
  {
    fen: "r4rk1/1bp1qpp1/ppn2b1p/3ppQ2/P2P4/1NP1PNPB/1P3P1P/R4RK1 b - - 1 16",
    correctMoves: [
      {
        from: "b7",
        to: "c8",
        san: "Bc8"
      },
      {
        from: "g7",
        to: "g6",
        san: "g6"
      },
      {
        from: "f6",
        to: "g7",
        san: "Bg7"
      },
    ],
    responseMoves: ["Qh5", "Qxh6"]
  }
  ,
  {
    fen: "6k1/1p1r1r1p/p3Q1p1/8/2P5/2P5/P1q3PP/R4R1K w - - 0 26",
    correctMoves: [
      {
        from: "f1",
        to: "f7",
        san: "Rxf7"
      },
      {
        from: "a1",
        to: "f1",
        san: "Rf1"
      },
      {
        from: "f1",
        to: "f5",
        san: "Rxf5"
      },
    ],
    responseMoves: ["Rxf7", "Qf5"]
  },
  {
    fen: "r6k/1p3Q1p/1n3P2/p5PR/1K1pP3/1P1P4/2P5/q7 w - a6 0 38",
    correctMoves: [
      {
        from: "b4",
        to: "b5",
        san: "Kb5"
      },
      {
        from: "b3",
        to: "a4",
        san: "bxa4"
      },
    ],
    responseMoves: ["Qa4+"]
  }
  ,
  {
    fen: "3r2k1/5pp1/p5rp/1pPpBn2/1P6/P2Q2Pq/5P2/3RR1K1 b - - 12 29",
    correctMoves: [
      {
        from: "f5",
        to: "h4",
        san: "Nh4"
      },
      {
        from: "d5",
        to: "e4",
        san: "dxe4"
      },
      {
        from: "g8",
        to: "h7",
        san: "Kh7"
      },
      {
        from: "h7",
        to: "h8",
        san: "Kxh8"
      },
    ],
    responseMoves: ["Qe4", "Rxd8+", "Rh8+"]
  },
  {
    fen: "3q1r1k/p2b2R1/4ppQ1/1p2P3/8/PP2p3/5KPP/2r5 w - - 0 31",
    correctMoves: [
      {
        from: "f2",
        to: "g3",
        san: "Kg3"
      },
    ],
    responseMoves: []
  }
  ,
  {
    fen: "N1bk4/pp4pp/3p4/3P4/4KP2/6q1/PP6/R1Q5 b - - 2 38",
    correctMoves: [
      {
        from: "c8",
        to: "f5",
        san: "Bf5+"
      },
      {
        from: "g3",
        to: "g6",
        san: "Qg6#"
      },
    ],
    responseMoves: ["Kxf5"]
  },
  {
    fen: "r3k1r1/bppq1p2/3p1R1p/p3p2b/P3P2P/1N1PB3/1PP3P1/RB2Q1K1 b q - 0 19",
    correctMoves: [
      {
        from: "d7",
        to: "h3",
        san: "Qh3"
      },
    ],
    responseMoves: []
  },
  {
    fen: "1R6/p2N2pk/1p1pp2p/1P1b3P/1r6/6K1/8/8 w - - 5 46",
    correctMoves: [
      {
        from: "d7",
        to: "f8",
        san: "Nf8+"
      },
      {
        from: "f8",
        to: "g6",
        san: "Ng6+"
      },
      {
        from: "b8",
        to: "f8",
        san: "Rf8#"
      },
    ],
    responseMoves: ["Kg8", "Kf7"]
  },
  {
    fen: "3qr1k1/2p3p1/1p2np2/b2P3Q/4n3/6P1/1B3PK1/7R w - - 0 36",
    correctMoves: [
      {
        from: "d5",
        to: "e6",
        san: "dxe6"
      },
      {
        from: "h5",
        to: "h8",
        san: "Qh8+"
      },
      {
        from: "h8",
        to: "d8",
        san: "Qxd8"
      },
    ],
    responseMoves: ["Rxe6", "Kf7"]
  }
  ,
  {
    fen: "3rr3/1b3pk1/2q2n1p/2p2Pp1/2B1p1P1/1PN1Q2P/P1P1R2K/3R4 b - - 0 32",
    correctMoves: [
      {
        from: "d8",
        to: "d1",
        san: "Rxd1"
      },
      {
        from: "c6",
        to: "d6",
        san: "Qd6+"
      },
      {
        from: "d6",
        to: "d1",
        san: "Qxd1+"
      },
    ],
    responseMoves: ["Nxd1", "Kh1"],
  },
  {
    fen: "3r2k1/5Rp1/p1p4p/Pp6/1P6/2q1NQ2/5P2/5K2 b - - 0 35",
    correctMoves: [
      {
        from: "c3",
        to: "d3",
        san: "Qd3+"
      },
      {
        from: "d3",
        to: "g6",
        san: "Qg6+"
      },
      {
        from: "g6",
        to: "f7",
        san: "Qxf7+"
      },
      {
        from: "g8",
        to: "f7",
        san: "Kxf7"
      },
    ],
    responseMoves: ["Kg2", "Ng4", "Qxf7+"],
  },
  {
    fen: "6k1/3r1rp1/8/Q2pq2p/3Rp3/2P4P/1P1R1PP1/6K1 b - - 0 1",
    correctMoves: [
      {
        from: "e4",
        to: "e3",
        san: "e3"
      },
      {
        from: "e5",
        to: "e3",
        san: "Qxe3+"
      },
    ],
    responseMoves: ["fxe3"],
  },
  {
    fen: "5b1r/2p1kppp/2Q1q3/4p3/4P3/2P2P2/rP2K2P/n1BR4 w - - 1 22",
    correctMoves: [
      {
        from: "c1",
        to: "g5",
        san: "Bg5+"
      },
      {
        from: "c6",
        to: "c7",
        san: "Qxc7+"
      },
      {
        from: "d1",
        to: "d8",
        san: "Rd8#"
      },
    ],
    responseMoves: ["f6", "Ke8"],
  },
  {
    fen: "rnbq1rk1/ppp2pbp/3p1np1/4p1B1/3PPP2/2N5/PPPQ2PP/R3KBNR w KQ e6 0 7",
    correctMoves: [
      {
        from: "d4",
        to: "e5",
        san: "dxe5"
      },
      {
        from: "d2",
        to: "d8",
        san: "Qxd8"
      },
      {
        from: "f4",
        to: "e5",
        san: "fxe5"
      },
    ],
    responseMoves: ["dxe5", "Rxd8"],
  },
  {
    fen: "3r2k1/3r1ppp/8/4p3/n7/Bq2P3/4QPPP/RR4K1 b - - 1 1",
    correctMoves: [
      {
        from: "b3",
        to: "b1",
        san: "Qxb1+"
      },
      {
        from: "a4",
        to: "c3",
        san: "Nc3"
      },
      {
        from: "c3",
        to: "b1",
        san: "Nxb1"
      },
    ],
    responseMoves: ["Rxb1", "Qc2"],
  },
  {
    fen: "5r2/1q4p1/5k2/8/4p2R/2r4P/4Q1P1/5NK1 w - - 0 48",
    correctMoves: [
      {
        from: "h4",
        to: "f4",
        san: "Rf4+"
      },
      {
        from: "f4",
        to: "e4",
        san: "Rxe4+"
      },
      {
        from: "e4",
        to: "f4",
        san: "Rf4+"
      },
      {
        from: "e2",
        to: "e6",
        san: "Qe6+"
      },
      {
        from: "e6",
        to: "e8",
        san: "Qe8+"
      },
    ],
    responseMoves: ["Ke7", "Kf7", "Kg8", "Rf7"],
  },
  {
    fen: "2r1rk2/pp6/q4p2/3pN1Q1/3P4/2P5/3K1PPP/7R w - - 0 31",
    correctMoves: [
      {
        from: "g5",
        to: "h6",
        san: "Qh6+"
      },
      {
        from: "h6",
        to: "g6",
        san: "Qg6+"
      },
    ],
    responseMoves: ["Kg8"],
  },
  {
    fen: "rnbq1rk1/pp2bpp1/3ppn1p/1BP5/4P3/2N2N2/PPP2PPP/R1BQ1RK1 w - - 0 8",
    correctMoves: [
      {
        from: "c5",
        to: "d6",
        san: "cxd6"
      },
      {
        from: "d1",
        to: "d6",
        san: "Qxd6"
      },
      {
        from: "e4",
        to: "e5",
        san: "e5"
      },
      {
        from: "e5",
        to: "f6",
        san: "exf6"
      },
    ],
    responseMoves: ["Qxd6", "Bxd6", "Be7"],
  },
  {
    fen: "5rk1/2p2pp1/8/6q1/8/Q7/1PP2PbP/R3R1K1 b - - 1 23",
    correctMoves: [
      {
        from: "g2",
        to: "f3",
        san: "Bf3+"
      },
    ],
    responseMoves: [],
  },
  {
    fen: "4r1k1/p2Q1p1p/6p1/P4P2/6P1/R1P3KP/4q3/3R4 b - - 14 48",
    correctMoves: [
      {
        from: "e8",
        to: "e3",
        san: "Re3+"
      },
      {
        from: "e2",
        to: "f2",
        san: "Qf2+"
      },
      {
        from: "h7",
        to: "h6",
        san: "h6+"
      },
      {
        from: "f2",
        to: "h4",
        san: "Qh4+"
      },
      {
        from: "h4",
        to: "g5",
        san: "Qxg5#"
      },
    ],
    responseMoves: ["Kh4", "Kg5", "Kf6", "g5"],
  },
  {
    fen: "8/8/7p/p1k2PpP/1p2p1P1/1P2P3/5K2/8 b - - 15 60",
    correctMoves: [
      {
        from: "a5",
        to: "a4",
        san: "a4"
      },
      {
        from: "c5",
        to: "d6",
        san: "Kd6"
      },
      {
        from: "b4",
        to: "b3",
        san: "b3"
      },
      {
        from: "b3",
        to: "b2",
        san: "b2"
      },
      {
        from: "d6",
        to: "e7",
        san: "Ke7"
      },
      {
        from: "e7",
        to: "f8",
        san: "Kxf8"
      },
    ],
    responseMoves: ["f6", "bxa4", "a5", "f7", "f8=Q+"],
  },
  {
    fen: "r3kb1r/pp3ppp/2n4n/2pB2q1/3P2b1/5Q2/PPP2PPP/RNB1K2R w KQkq - 1 9",
    correctMoves: [
      {
        from: "d5",
        to: "c6",
        san: "Bxc6+"
      },
      {
        from: "f3",
        to: "c6",
        san: "Qxc6+"
      },
      {
        from: "c6",
        to: "a8",
        san: "Qxa8+"
      },
    ],
    responseMoves: ["bxc6", "Bd7"],
  },
  {
    fen: "1r2q3/2p1b1kp/p1N1pnp1/1p3b2/2pP1Q2/P1N5/1PP2P2/2KR2R1 w - - 4 23",
    correctMoves: [
      {
        from: "f4",
        to: "c7",
        san: "Qxc7"
      },
      {
        from: "c7",
        to: "e7",
        san: "Qxe7+"
      },
      {
        from: "c6",
        to: "e7",
        san: "Nxe7"
      },
    ],
    responseMoves: ["Rc8", "Qxe7"],
  },
  {
    fen: "r2q1rk1/pp4p1/2p2n1p/7P/4p1b1/P1B1P3/1PP1NP2/R2QK1R1 w Q - 4 19",
    correctMoves: [
      {
        from: "d1",
        to: "d8",
        san: "Qxd8"
      },
      {
        from: "c3",
        to: "f6",
        san: "Bxf6"
      },
      {
        from: "g1",
        to: "g4",
        san: "Rxg4"
      },
    ],
    responseMoves: ["Raxd8", "Rxf6"],
  },
  {
    fen: "r3r1k1/p4qpn/2p1bp1Q/4pR2/1p2P2B/3PN1R1/1P4PP/7K b - - 2 29",
    correctMoves: [
      {
        from: "e6",
        to: "f5",
        san: "Bxf5"
      },
      {
        from: "h7",
        to: "g5",
        san: "Ng5"
      },
      {
        from: "f6",
        to: "g5",
        san: "hxg5"
      },
    ],
    responseMoves: ["Nxf5", "Rxg5"],
  },
  {
    fen: "5b1r/p4pp1/b3p3/B1RR3p/4kPq1/4P3/P4KPP/8 w - - 0 27",
    correctMoves: [
      {
        from: "d5",
        to: "d4",
        san: "Rd4#"
      },
    ],
    responseMoves: [],
  },
  {
    fen: "8/2p2k2/8/ppp1PPpp/8/PP1P1K1P/8/8 b - - 0 1",
    correctMoves: [
      {
        from: "a5",
        to: "a4",
        san: "a4"
      },
      {
        from: "b5",
        to: "b4",
        san: "b4"
      },
      {
        from: "c5",
        to: "b4",
        san: "cxb4"
      },
      {
        from: "b4",
        to: "b3",
        san: "b4"
      },
      {
        from: "b3",
        to: "b2",
        san: "b2"
      },
      {
        from: "b2",
        to: "b1",
        san: "b1=Q"
      },
      {
        from: "b1",
        to: "h1",
        san: "Qh1+"
      },
      {
        from: "h1",
        to: "a8",
        san: "Qxa8"
      },
    ],
    responseMoves: ["bxa4", "axb4", "a5", "a6", "a7", "a8=Q", "Ke3"],
  },
  {
    fen: "1b1r4/k2q4/P2r4/1p5p/1P2Q1p1/6P1/2R2P1P/2R3K1 w - - 1 40",
    correctMoves: [
      {
        from: "c2",
        to: "c7",
        san: "Rc7+"
      },
      {
        from: "c1",
        to: "c7",
        san: "Rxc7+"
      },
      {
        from: "e4",
        to: "b7",
        san: "Qb7#"
      },
    ],
    responseMoves: ["Qxc7", "Bxc7"],
  },
  {
    fen: "5Q2/1Q4pk/5p1p/8/4Pp2/3P2PP/5qBK/8 b - - 3 40",
    correctMoves: [
      {
        from: "f4",
        to: "g3",
        san: "fxg3+"
      },
      {
        from: "f2",
        to: "e1",
        san: "Qe1+"
      },
      {
        from: "e1",
        to: "f1",
        san: "Qxf1#"
      },
    ],
    responseMoves: ["Kh1", "Bf1"],
  },
  {
    fen: "3rk2r/pp1n1ppp/1bp1pnq1/8/3P2P1/2P1BN1P/PP2QP2/R3KB1R w KQk - 1 14",
    correctMoves: [
      {
        from: "f3",
        to: "h4",
        san: "Nh4"
      },
      {
        from: "f1",
        to: "g2",
        san: "Bg2"
      },
      {
        from: "h4",
        to: "g2",
        san: "Nxg2"
      },
    ],
    responseMoves: ["Qe4", "Qxg2"],
  },
  {
    fen: "8/k1r5/1R6/PKp5/1pP5/8/8/8 b - - 8 58",
    correctMoves: [
      {
        from: "c7",
        to: "b7",
        san: "Rb7"
      },
      {
        from: "b4",
        to: "b3",
        san: "b3"
      },
      {
        from: "b7",
        to: "b6",
        san: "Rxb6"
      },
      {
        from: "a7",
        to: "b8",
        san: "Kb8"
      },
    ],
    responseMoves: ["Kxc5", "Kc6", "axb6+"],
  },
  {
    fen: "r3r1k1/ppp1qpp1/1bn4p/3p4/3P3N/P1Q1P1P1/1P3PKP/R1B2R2 b - - 0 17",
    correctMoves: [
      {
        from: "g7",
        to: "g5",
        san: "g5"
      },
      {
        from: "e7",
        to: "e4",
        san: "Qe4"
      },
      {
        from: "e4",
        to: "f3",
        san: "Qxf3"
      },
    ],
    responseMoves: ["Nf3", "Kg1"],
  },
  {
    fen: "2k2r1N/ppp3Qp/2n5/2b1p3/3q4/3P4/PPP2PPP/RNB2RK1 b - - 0 14",
    correctMoves: [
      {
        from: "f8",
        to: "f2",
        san: "Rxf2"
      },
      {
        from: "d4",
        to: "e3",
        san: "Qxe3"
      },
      {
        from: "c8",
        to: "b8",
        san: "Kb8"
      },
      {
        from: "f2",
        to: "f8",
        san: "Rf8+"
      },
      {
        from: "f8",
        to: "g8",
        san: "Rxg8"
      },
    ],
    responseMoves: ["Be3", "Qg4+", "Qg8+", "Kh1"],
  },
  {
    fen: "r5qk/7p/1Q5b/2pp2p1/1n4P1/7N/1PPB2BP/1K1R1R2 b - - 0 29",
    correctMoves: [
      {
        from: "a8",
        to: "a1",
        san: "Ra1+"
      },
      {
        from: "g8",
        to: "a8",
        san: "Qa8+"
      },
      {
        from: "a8",
        to: "a5",
        san: "Qxa5+"
      },
      {
        from: "a5",
        to: "a2",
        san: "Qa2+"
      },
      {
        from: "a2",
        to: "a1",
        san: "Qa1#"
      },
    ],
    responseMoves: ["Kxa1", "Qa5", "Kb1", "Kc1"],
  },
  {
    fen: "5rk1/1pp3pp/8/3P4/P3Pp2/5KP1/1pr1R1BP/1R6 b - - 0 32",
    correctMoves: [
      {
        from: "f4",
        to: "g3",
        san: "fxg3+"
      },
      {
        from: "c2",
        to: "e2",
        san: "Rxe2+"
      },
      {
        from: "f8",
        to: "f2",
        san: "Rf2+"
      },
      {
        from: "f2",
        to: "g2",
        san: "Rxg2"
      },
      {
        from: "c7",
        to: "d6",
        san: "cxd6"
      },
    ],
    responseMoves: ["Ke3", "Kxe2", "Ke3", "d6"],
  },
  {
    fen: "8/8/8/1b1P3p/2kB2p1/4KpP1/7P/8 b - - 1 1",
    correctMoves: [
      {
        from: "f3",
        to: "f2",
        san: "f2"
      },
      {
        from: "c4",
        to: "d4",
        san: "Kxd4"
      },
    ],
    responseMoves: ["Kxf2"],
  },
  {
    fen: "3b2k1/1R6/p6p/3P1p2/bB1N2p1/1r4P1/7P/4K3 b - - 2 39",
    correctMoves: [
      {
        from: "b3",
        to: "b4",
        san: "Rxb4"
      },
      {
        from: "d8",
        to: "a5",
        san: "Ba5"
      },
      {
        from: "a4",
        to: "c6",
        san: "Bxc6"
      },
      {
        from: "a5",
        to: "b4",
        san: "Bxb4+"
      },
    ],
    responseMoves: ["Rxb4", "Nc6", "dxc6"],
  },
  {
    fen: "r5k1/p1p3pp/1p2pr2/5p1q/3P2n1/P3PN2/1P2QPP1/R1B1R1K1 b - - 3 20",
    correctMoves: [
      {
        from: "f6",
        to: "h6",
        san: "Rh6"
      },
      {
        from: "h5",
        to: "h1",
        san: "Qh1+"
      },
      {
        from: "g4",
        to: "h2",
        san: "Nh2#"
      },
    ],
    responseMoves: ["Kf1", "Ng1"],
  },
  {
    fen: "2kr3r/pp1qppb1/2p1n1p1/3pP3/1PPPn1b1/2N1BN2/P3B1PP/2RQK2R w K - 1 15",
    correctMoves: [
      {
        from: "c4",
        to: "d5",
        san: "cxd5"
      },
      {
        from: "d5",
        to: "e6",
        san: "dxe6"
      },
      {
        from: "c1",
        to: "c3",
        san: "Rxc3"
      },
    ],
    responseMoves: ["Nxc3", "Qxe6"],
  },
  {
    fen: "1Q6/8/8/p7/Pq6/3k4/K7/8 w - - 5 61",
    correctMoves: [
      {
        from: "b8",
        to: "b4",
        san: "Qxb4"
      },
      {
        from: "a2",
        to: "b3",
        san: "Kb3"
      },
      {
        from: "b3",
        to: "b4",
        san: "Kxb4"
      },
      {
        from: "b4",
        to: "b5",
        san: "Kb5"
      },
      {
        from: "b5",
        to: "b6",
        san: "Kb6"
      },
      {
        from: "b6",
        to: "b7",
        san: "Kb7"
      },
    ],
    responseMoves: ["axb4", "Kd4", "Kd5", "Kd6", "Kd7"],
  },
  {
    fen: "8/8/8/2kP4/p2R3P/4K1P1/8/r7 b - - 2 42",
    correctMoves: [
      {
        from: "a1",
        to: "e1",
        san: "Re1+"
      },
      {
        from: "c5",
        to: "d4",
        san: "Kxd4+"
      },
      {
        from: "a4",
        to: "a3",
        san: "a3"
      },
      {
        from: "a3",
        to: "a2",
        san: "a2"
      },
    ],
    responseMoves: ["Kd2", "Kxe1", "Kd2"],
  },
  {
    fen: "r2qkbnr/1p1b3p/p2p4/3Np1p1/1pBnP3/5Q2/P1PP2PP/R1B1K1NR w KQkq - 4 12",
    correctMoves: [
      {
        from: "f3",
        to: "h5",
        san: "Qh5#"
      },
    ],
    responseMoves: [],
  },
  {
    fen: "r1bqk1nr/ppp1p2p/2n2p1b/3p4/3P4/7P/PPP2PP1/RNBQKBNR w KQkq - 1 6",
    correctMoves: [
      {
        from: "d1",
        to: "h5",
        san: "Qh5+"
      },
      {
        from: "c1",
        to: "h6",
        san: "Bxh6+"
      },
      {
        from: "h5",
        to: "h6",
        san: "Qxh6+"
      },
    ],
    responseMoves: ["Kf8", "Nxh6"],
  },
  {
    fen: "r5k1/ppp3pp/8/8/3np3/P3N2q/1PP2QR1/R5K1 b - - 1 1",
    correctMoves: [
      {
        from: "a8",
        to: "f8",
        san: "Rf8"
      },
      {
        from: "g8",
        to: "g7",
        san: "Kxg7"
      },
      {
        from: "h3",
        to: "g2",
        san: "Qxg2+"
      },
    ],
    responseMoves: ["Rxg7+", "Qg2+"],
  },
  {
    fen: "1R2Q3/6p1/2N2k1r/5pN1/5P2/2P5/P3BPKp/8 b - - 3 34",
    correctMoves: [
      {
        from: "a2",
        to: "a1",
        san: "a1=Q+"
      },
      {
        from: "h1",
        to: "h2",
        san: "Qh2+"
      },
      {
        from: "h6",
        to: "h3",
        san: "Rh3+"
      },
      {
        from: "h2",
        to: "h3",
        san: "Qxh3#"
      },
    ],
    responseMoves: ["Kg3", "Kf3", "Nxh3"],
  },
  {
    fen: "5k2/5p2/2P1p1p1/4P2p/3K1P1P/8/2B3P1/r7 w - - 1 2",
    correctMoves: [
      {
        from: "c6",
        to: "c7",
        san: "c7"
      },
      {
        from: "d4",
        to: "c5",
        san: "Kc5"
      },
    ],
    responseMoves: ["Ra8"],
  },
  {
    fen: "2k5/pppqb3/5nNp/4p3/4B3/2P3P1/PP1B3P/R2K1R2 b - - 0 22",
    correctMoves: [
      {
        from: "f6",
        to: "e4",
        san: "Nxe4"
      },
      {
        from: "c8",
        to: "d8",
        san: "Kd8"
      },
      {
        from: "b7",
        to: "c6",
        san: "bxc6"
      },
      {
        from: "d7",
        to: "d2",
        san: "Qxd2+"
      },
    ],
    responseMoves: ["Nxe7+", "Nc6+", "Kc2"],
  },
  {
    fen: "6k1/8/3n1Q2/r2N4/p1qP4/8/6KP/8 w - - 1 2",
    correctMoves: [
      {
        from: "d5",
        to: "e7",
        san: "Ne7+"
      },
      {
        from: "f6",
        to: "g6",
        san: "Qg6+"
      },
      {
        from: "g6",
        to: "h6",
        san: "Qh6#"
      },
    ],
    responseMoves: ["Kh7", "Kh8"],
  },
  {
    fen: "7k/2p3p1/1qB1Q2p/2bpB3/3p4/3P4/1Pp2PPP/6K1 w - - 0 2",
    correctMoves: [
      {
        from: "e6",
        to: "h6",
        san: "Qxh6+"
      },
      {
        from: "h6",
        to: "g7",
        san: "Qxg7+"
      },
    ],
    responseMoves: ["Kg8"],
  },
  {
    fen: "8/8/8/kPK2P2/P5pp/8/6P1/8 b - - 0 58",
    correctMoves: [
      {
        from: "h4",
        to: "h3",
        san: "h3"
      },
      {
        from: "g4",
        to: "g3",
        san: "g3"
      },
      {
        from: "g3",
        to: "g2",
        san: "g2"
      },
      {
        from: "g2",
        to: "g1",
        san: "g1=Q+"
      },
    ],
    responseMoves: ["gxh3", "f6", "f7"],
  },
  {
    fen: "3rk3/p4r2/2p5/1p5Q/2q5/1KP5/PP4PP/RN1R4 w - - 2 28",
    correctMoves: [
      {
        from: "b3",
        to: "c2",
        san: "Kc2"
      },
      {
        from: "c2",
        to: "c1",
        san: "Kc1"
      },
      {
        from: "c1",
        to: "d1",
        san: "Kxd1"
      },
    ],
    responseMoves: ["Qe4+", "Rxd1+"],
  },
  {
    fen: "4kb1r/4pppp/8/6Q1/5P2/2r1q1P1/P1n4P/3R1KNb w k - 0 28",
    correctMoves: [
      {
        from: "g5",
        to: "b5",
        san: "Qb5+"
      },
      {
        from: "b5",
        to: "b8",
        san: "Qb8+"
      },
      {
        from: "b8",
        to: "c8",
        san: "Qxc8#"
      },
    ],
    responseMoves: ["Rc6", "Rc8"],
  },
  {
    fen: "8/Pq4pk/7p/4Q3/4bp2/8/6PP/5BK1 b - - 0 1",
    correctMoves: [
      {
        from: "b7",
        to: "a7",
        san: "Qxa7+"
      },
      {
        from: "a7",
        to: "e3",
        san: "Qe3"
      },
    ],
    responseMoves: ["Kh1"],
  },
  {
    fen: "r3k2r/pp2bpp1/1qp1p1bp/3pP3/5B2/P2BPPP1/1PPQ3P/2KR3R b kq - 1 14",
    correctMoves: [
      {
        from: "g6",
        to: "d3",
        san: "Bxd3"
      },
      {
        from: "g7",
        to: "g5",
        san: "g5"
      },
      {
        from: "g5",
        to: "f4",
        san: "gxf4"
      },
    ],
    responseMoves: ["Qxd3", "g4"],
  },
  {
    fen: "r1bq1rk1/1p3p1n/p2p1b1Q/2p1p3/4P2P/1PNP1N2/1PP2PP1/R3K2R w KQ - 1 15",
    correctMoves: [
      {
        from: "f3",
        to: "g5",
        san: "Ng5"
      },
      {
        from: "e4",
        to: "f5",
        san: "exf5"
      },
      {
        from: "h4",
        to: "g5",
        san: "hxg5"
      },
    ],
    responseMoves: ["Bf5", "Bxg5"],
  }
  ,
  {
    fen: "3r1k2/1p4p1/p1b2n1p/2qNQ3/2P5/3B1P2/2P3PP/4RK2 w - - 1 2",
    correctMoves: [
      {
        from: "d5",
        to: "f6",
        san: "Nxf6"
      },
      {
        from: "f6",
        to: "h7",
        san: "Nh7+"
      },
      {
        from: "e1",
        to: "e5",
        san: "Rxe5"
      },
    ],
    responseMoves: ["Qxe5", "Kf7"],
  }
  ,
  {
    fen: "r4rk1/2p1qbpp/8/1p2p3/1P1nP3/p2P4/P2Q1P2/1K3BRR w - - 4 27",
    correctMoves: [
      {
        from: "g1",
        to: "g7",
        san: "Rxg7+"
      },
      {
        from: "d2",
        to: "h6",
        san: "Qh6+"
      },
      {
        from: "h6",
        to: "h7",
        san: "Qxh7#"
      },
    ],
    responseMoves: ["Kxg7", "Kg8"],
  }
  ,
  {
    fen: "3r2nr/1Qbk1ppp/1pB3q1/p1p5/2P1NP2/4n3/PP4PP/R4RK1 b - - 5 20",
    correctMoves: [
      {
        from: "g6",
        to: "c6",
        san: "Qxc6"
      },
      {
        from: "e3",
        to: "d1",
        san: "Nxd1"
      },
      {
        from: "d7",
        to: "e7",
        san: "Ke7"
      },
      {
        from: "d8",
        to: "d1",
        san: "Rxd1+"
      },
    ],
    responseMoves: ["Rfd1", "Rxd1", "Qxc6"],
  }
  ,
  {
    fen: "rnb2rk1/pp3ppp/2p5/8/2Bq4/2nP1Q2/P1P2PPP/R1B1R1K1 w - - 2 14",
    correctMoves: [
      {
        from: "f3",
        to: "f7",
        san: "Qxf7+"
      },
      {
        from: "e1",
        to: "ge86",
        san: "Re8#"
      },
    ],
    responseMoves: ["Rxf7"],
  }
  ,
  {
    fen: "4q3/1p6/1k1p3Q/2pPp2P/1n2P1bR/R1K2N2/1PP3r1/6N1 b - - 6 29",
    correctMoves: [
      {
        from: "g2",
        to: "c2",
        san: "Rxc2+"
      },
      {
        from: "c5",
        to: "c4",
        san: "c4+"
      },
      {
        from: "e8",
        to: "b5",
        san: "Qb5#"
      },
    ],
    responseMoves: ["Kb3", "Kxb4"],
  }
  ,
  {
    fen: "rn1q2kr/pp2n1pp/3b4/2p3N1/3p2b1/8/PPP1QPPP/RNB1K2R w KQ - 2 10",
    correctMoves: [
      {
        from: "e2",
        to: "c4",
        san: "Qc4+"
      },
      {
        from: "c4",
        to: "d5",
        san: "Qxd5+"
      },
    ],
    responseMoves: ["Nd5"],
  }
  ,
  {
    fen: "1kq3r1/p1p2Q2/Pp6/1P2P3/3B1P2/2P4r/6P1/R3R1K1 b - - 0 31",
    correctMoves: [
      {
        from: "g8",
        to: "g2",
        san: "Rxg2+"
      },
      {
        from: "c8",
        to: "g4",
        san: "Qg4+"
      },
      {
        from: "g4",
        to: "f3",
        san: "Qf3+"
      },
      {
        from: "h3",
        to: "h1",
        san: "Rh1#"
      },
    ],
    responseMoves: ["Kxg2", "Kf1", "Bf2"],
  }
  ,
  {
    fen: "8/8/5k2/2q5/p4K2/P2Q1PP1/7P/8 b - - 1 49",
    correctMoves: [
      {
        from: "c5",
        to: "g5",
        san: "Qg5+"
      },
      {
        from: "g5",
        to: "e5",
        san: "Qe5#"
      },
    ],
    responseMoves: ["Ke4"],
  }
  ,
  {
    fen: "2kr3r/p1p1n3/2q5/2p1ppp1/2N3p1/2PP2P1/PP1K1P1N/R2Q3R b - - 1 1",
    correctMoves: [
      {
        from: "d8",
        to: "d3",
        san: "Rxd3+"
      },
      {
        from: "c6",
        to: "e4",
        san: "Qe4+"
      },
      {
        from: "h8",
        to: "d8",
        san: "Rd8+"
      },
      {
        from: "d8",
        to: "d1",
        san: "Rxd1+"
      },
      {
        from: "e4",
        to: "c4",
        san: "Qxc4"
      },
    ],
    responseMoves: ["Kxd3", "Kd2", "Kc1", "Rxd1"],
  }
  ,
  {
    fen: "2r5/4Pk2/5P2/p3B1P1/5K2/1pp5/8/8 w - - 0 2",
    correctMoves: [
      {
        from: "f4",
        to: "f5",
        san: "Kf5"
      },
      {
        from: "e5",
        to: "c3",
        san: "Bxc3"
      },
    ],
    responseMoves: ["Rg8"],
  }
  ,
  {
    fen: "r2r2k1/pp2ppbp/nq4p1/4N3/3PB1b1/4B3/PPQ2PPP/1R2K2R b K - 1 1",
    correctMoves: [
      {
        from: "g7",
        to: "e5",
        san: "Bxe5"
      },
      {
        from: "b6",
        to: "b4",
        san: "Qb4+"
      },
    ],
    responseMoves: ["dxe5"],
  }
  ,
  {
    fen: "5rk1/pp3qp1/2p1pr1p/2PB4/3PRnQ1/8/P2B2PP/4R1K1 b - - 0 23",
    correctMoves: [
      {
        from: "f4",
        to: "h3",
        san: "Nh3+"
      },
      {
        from: "f6",
        to: "f1",
        san: "Rf1+"
      },
      {
        from: "f7",
        to: "f1",
        san: "Qxf1#"
      },
    ],
    responseMoves: ["gxh3", "Rxf1"],
  }
  ,
  {
    fen: "5r1k/ppp3p1/2nb4/5q2/5B2/P1P2pP1/1P3P1P/R2Q1RK1 b - - 2 24",
    correctMoves: [
      {
        from: "c6",
        to: "e5",
        san: "Ne5"
      },
      {
        from: "f5",
        to: "h3",
        san: "Qh3"
      },
      {
        from: "f8",
        to: "f3",
        san: "Rxf3"
      },
      {
        from: "c7",
        to: "d6",
        san: "cxd6"
      },
    ],
    responseMoves: ["Bxe5", "Qxf3", "Bxd6"],
  }
  ,
  {
    fen: "2k4r/pp6/3rpq2/3PR1p1/1P1P2p1/P2Q2P1/5P2/R5K1 b - - 0 24",
    correctMoves: [
      {
        from: "f6",
        to: "h6",
        san: "Qh6"
      },
      {
        from: "h6",
        to: "h2",
        san: "Qh2+"
      },
      {
        from: "h2",
        to: "h1",
        san: "Qh1+"
      },
      {
        from: "h8",
        to: "h1",
        san: "Rxh1+"
      },
      {
        from: "h1",
        to: "a1",
        san: "Rxa1"
      },
    ],
    responseMoves: ["Qe4", "Kf1", "Qxh1", "Ke2"],
  }
  ,
  {
    fen: "6k1/p3bpp1/2p4r/7r/1PQ1pP2/2P1P1Pq/PB4RP/R5K1 b - - 4 24",
    correctMoves: [
      {
        from: "h3",
        to: "g2",
        san: "Qxg2+"
      },
      {
        from: "h5",
        to: "h2",
        san: "Rxh2+"
      },
      {
        from: "h2",
        to: "h1",
        san: "Rh1+"
      },
      {
        from: "h6",
        to: "h2",
        san: "R6h2#"
      },
    ],
    responseMoves: ["Kxg2", "Kf1", "Ke2"],
  }
  ,
  {
    fen: "r4rk1/1bp1qpp1/ppn2b1p/3ppQ2/P2P4/1NP1PNPB/1P3P1P/R4RK1 b - - 1 16",
    correctMoves: [
      {
        from: "b7",
        to: "c8",
        san: "Bc8"
      },
      {
        from: "g7",
        to: "g6",
        san: "g6"
      },
      {
        from: "f6",
        to: "g7",
        san: "Bg7"
      },
    ],
    responseMoves: ["Qh5", "Qxh6"]
  }
  ,
  {
    fen: "6k1/1p1r1r1p/p3Q1p1/8/2P5/2P5/P1q3PP/R4R1K w - - 0 26",
    correctMoves: [
      {
        from: "f1",
        to: "f7",
        san: "Rxf7"
      },
      {
        from: "a1",
        to: "f1",
        san: "Rf1"
      },
      {
        from: "f1",
        to: "f5",
        san: "Rxf5"
      },
    ],
    responseMoves: ["Rxf7", "Qf5"]
  },
  {
    fen: "r6k/1p3Q1p/1n3P2/p5PR/1K1pP3/1P1P4/2P5/q7 w - a6 0 38",
    correctMoves: [
      {
        from: "b4",
        to: "b5",
        san: "Kb5"
      },
      {
        from: "b3",
        to: "a4",
        san: "bxa4"
      },
    ],
    responseMoves: ["Qa4+"]
  }
  ,
  {
    fen: "3r2k1/5pp1/p5rp/1pPpBn2/1P6/P2Q2Pq/5P2/3RR1K1 b - - 12 29",
    correctMoves: [
      {
        from: "f5",
        to: "h4",
        san: "Nh4"
      },
      {
        from: "d5",
        to: "e4",
        san: "dxe4"
      },
      {
        from: "g8",
        to: "h7",
        san: "Kh7"
      },
      {
        from: "h7",
        to: "h8",
        san: "Kxh8"
      },
    ],
    responseMoves: ["Qe4", "Rxd8+", "Rh8+"]
  },
  {
    fen: "3q1r1k/p2b2R1/4ppQ1/1p2P3/8/PP2p3/5KPP/2r5 w - - 0 31",
    correctMoves: [
      {
        from: "f2",
        to: "g3",
        san: "Kg3"
      },
    ],
    responseMoves: []
  }
  ,
  {
    fen: "N1bk4/pp4pp/3p4/3P4/4KP2/6q1/PP6/R1Q5 b - - 2 38",
    correctMoves: [
      {
        from: "c8",
        to: "f5",
        san: "Bf5+"
      },
      {
        from: "g3",
        to: "g6",
        san: "Qg6#"
      },
    ],
    responseMoves: ["Kxf5"]
  },
  {
    fen: "r3k1r1/bppq1p2/3p1R1p/p3p2b/P3P2P/1N1PB3/1PP3P1/RB2Q1K1 b q - 0 19",
    correctMoves: [
      {
        from: "d7",
        to: "h3",
        san: "Qh3"
      },
    ],
    responseMoves: []
  },
  {
    fen: "1R6/p2N2pk/1p1pp2p/1P1b3P/1r6/6K1/8/8 w - - 5 46",
    correctMoves: [
      {
        from: "d7",
        to: "f8",
        san: "Nf8+"
      },
      {
        from: "f8",
        to: "g6",
        san: "Ng6+"
      },
      {
        from: "b8",
        to: "f8",
        san: "Rf8#"
      },
    ],
    responseMoves: ["Kg8", "Kf7"]
  },
  {
    fen: "3qr1k1/2p3p1/1p2np2/b2P3Q/4n3/6P1/1B3PK1/7R w - - 0 36",
    correctMoves: [
      {
        from: "d5",
        to: "e6",
        san: "dxe6"
      },
      {
        from: "h5",
        to: "h8",
        san: "Qh8+"
      },
      {
        from: "h8",
        to: "d8",
        san: "Qxd8"
      },
    ],
    responseMoves: ["Rxe6", "Kf7"]
  }
  ,
  {
    fen: "3rr3/1b3pk1/2q2n1p/2p2Pp1/2B1p1P1/1PN1Q2P/P1P1R2K/3R4 b - - 0 32",
    correctMoves: [
      {
        from: "d8",
        to: "d1",
        san: "Rxd1"
      },
      {
        from: "c6",
        to: "d6",
        san: "Qd6+"
      },
      {
        from: "d6",
        to: "d1",
        san: "Qxd1+"
      },
    ],
    responseMoves: ["Nxd1", "Kh1"],
  },
  {
    fen: "3r2k1/5Rp1/p1p4p/Pp6/1P6/2q1NQ2/5P2/5K2 b - - 0 35",
    correctMoves: [
      {
        from: "c3",
        to: "d3",
        san: "Qd3+"
      },
      {
        from: "d3",
        to: "g6",
        san: "Qg6+"
      },
      {
        from: "g6",
        to: "f7",
        san: "Qxf7+"
      },
      {
        from: "g8",
        to: "f7",
        san: "Kxf7"
      },
    ],
    responseMoves: ["Kg2", "Ng4", "Qxf7+"],
  },
  {
    fen: "6k1/3r1rp1/8/Q2pq2p/3Rp3/2P4P/1P1R1PP1/6K1 b - - 0 1",
    correctMoves: [
      {
        from: "e4",
        to: "e3",
        san: "e3"
      },
      {
        from: "e5",
        to: "e3",
        san: "Qxe3+"
      },
    ],
    responseMoves: ["fxe3"],
  },
  {
    fen: "5b1r/2p1kppp/2Q1q3/4p3/4P3/2P2P2/rP2K2P/n1BR4 w - - 1 22",
    correctMoves: [
      {
        from: "c1",
        to: "g5",
        san: "Bg5+"
      },
      {
        from: "c6",
        to: "c7",
        san: "Qxc7+"
      },
      {
        from: "d1",
        to: "d8",
        san: "Rd8#"
      },
    ],
    responseMoves: ["f6", "Ke8"],
  },
  {
    fen: "rnbq1rk1/ppp2pbp/3p1np1/4p1B1/3PPP2/2N5/PPPQ2PP/R3KBNR w KQ e6 0 7",
    correctMoves: [
      {
        from: "d4",
        to: "e5",
        san: "dxe5"
      },
      {
        from: "d2",
        to: "d8",
        san: "Qxd8"
      },
      {
        from: "f4",
        to: "e5",
        san: "fxe5"
      },
    ],
    responseMoves: ["dxe5", "Rxd8"],
  },
  {
    fen: "3r2k1/3r1ppp/8/4p3/n7/Bq2P3/4QPPP/RR4K1 b - - 1 1",
    correctMoves: [
      {
        from: "b3",
        to: "b1",
        san: "Qxb1+"
      },
      {
        from: "a4",
        to: "c3",
        san: "Nc3"
      },
      {
        from: "c3",
        to: "b1",
        san: "Nxb1"
      },
    ],
    responseMoves: ["Rxb1", "Qc2"],
  },
  {
    fen: "5r2/1q4p1/5k2/8/4p2R/2r4P/4Q1P1/5NK1 w - - 0 48",
    correctMoves: [
      {
        from: "h4",
        to: "f4",
        san: "Rf4+"
      },
      {
        from: "f4",
        to: "e4",
        san: "Rxe4+"
      },
      {
        from: "e4",
        to: "f4",
        san: "Rf4+"
      },
      {
        from: "e2",
        to: "e6",
        san: "Qe6+"
      },
      {
        from: "e6",
        to: "e8",
        san: "Qe8+"
      },
    ],
    responseMoves: ["Ke7", "Kf7", "Kg8", "Rf7"],
  },
  {
    fen: "2r1rk2/pp6/q4p2/3pN1Q1/3P4/2P5/3K1PPP/7R w - - 0 31",
    correctMoves: [
      {
        from: "g5",
        to: "h6",
        san: "Qh6+"
      },
      {
        from: "h6",
        to: "g6",
        san: "Qg6+"
      },
    ],
    responseMoves: ["Kg8"],
  },
  {
    fen: "rnbq1rk1/pp2bpp1/3ppn1p/1BP5/4P3/2N2N2/PPP2PPP/R1BQ1RK1 w - - 0 8",
    correctMoves: [
      {
        from: "c5",
        to: "d6",
        san: "cxd6"
      },
      {
        from: "d1",
        to: "d6",
        san: "Qxd6"
      },
      {
        from: "e4",
        to: "e5",
        san: "e5"
      },
      {
        from: "e5",
        to: "f6",
        san: "exf6"
      },
    ],
    responseMoves: ["Qxd6", "Bxd6", "Be7"],
  },
  {
    fen: "5rk1/2p2pp1/8/6q1/8/Q7/1PP2PbP/R3R1K1 b - - 1 23",
    correctMoves: [
      {
        from: "g2",
        to: "f3",
        san: "Bf3+"
      },
    ],
    responseMoves: [],
  },
  {
    fen: "4r1k1/p2Q1p1p/6p1/P4P2/6P1/R1P3KP/4q3/3R4 b - - 14 48",
    correctMoves: [
      {
        from: "e8",
        to: "e3",
        san: "Re3+"
      },
      {
        from: "e2",
        to: "f2",
        san: "Qf2+"
      },
      {
        from: "h7",
        to: "h6",
        san: "h6+"
      },
      {
        from: "f2",
        to: "h4",
        san: "Qh4+"
      },
      {
        from: "h4",
        to: "g5",
        san: "Qxg5#"
      },
    ],
    responseMoves: ["Kh4", "Kg5", "Kf6", "g5"],
  },
  {
    fen: "8/8/7p/p1k2PpP/1p2p1P1/1P2P3/5K2/8 b - - 15 60",
    correctMoves: [
      {
        from: "a5",
        to: "a4",
        san: "a4"
      },
      {
        from: "c5",
        to: "d6",
        san: "Kd6"
      },
      {
        from: "b4",
        to: "b3",
        san: "b3"
      },
      {
        from: "b3",
        to: "b2",
        san: "b2"
      },
      {
        from: "d6",
        to: "e7",
        san: "Ke7"
      },
      {
        from: "e7",
        to: "f8",
        san: "Kxf8"
      },
    ],
    responseMoves: ["f6", "bxa4", "a5", "f7", "f8=Q+"],
  },
  {
    fen: "r3kb1r/pp3ppp/2n4n/2pB2q1/3P2b1/5Q2/PPP2PPP/RNB1K2R w KQkq - 1 9",
    correctMoves: [
      {
        from: "d5",
        to: "c6",
        san: "Bxc6+"
      },
      {
        from: "f3",
        to: "c6",
        san: "Qxc6+"
      },
      {
        from: "c6",
        to: "a8",
        san: "Qxa8+"
      },
    ],
    responseMoves: ["bxc6", "Bd7"],
  },
  {
    fen: "1r2q3/2p1b1kp/p1N1pnp1/1p3b2/2pP1Q2/P1N5/1PP2P2/2KR2R1 w - - 4 23",
    correctMoves: [
      {
        from: "f4",
        to: "c7",
        san: "Qxc7"
      },
      {
        from: "c7",
        to: "e7",
        san: "Qxe7+"
      },
      {
        from: "c6",
        to: "e7",
        san: "Nxe7"
      },
    ],
    responseMoves: ["Rc8", "Qxe7"],
  },
  {
    fen: "r2q1rk1/pp4p1/2p2n1p/7P/4p1b1/P1B1P3/1PP1NP2/R2QK1R1 w Q - 4 19",
    correctMoves: [
      {
        from: "d1",
        to: "d8",
        san: "Qxd8"
      },
      {
        from: "c3",
        to: "f6",
        san: "Bxf6"
      },
      {
        from: "g1",
        to: "g4",
        san: "Rxg4"
      },
    ],
    responseMoves: ["Raxd8", "Rxf6"],
  },
  {
    fen: "r3r1k1/p4qpn/2p1bp1Q/4pR2/1p2P2B/3PN1R1/1P4PP/7K b - - 2 29",
    correctMoves: [
      {
        from: "e6",
        to: "f5",
        san: "Bxf5"
      },
      {
        from: "h7",
        to: "g5",
        san: "Ng5"
      },
      {
        from: "f6",
        to: "g5",
        san: "hxg5"
      },
    ],
    responseMoves: ["Nxf5", "Rxg5"],
  },
  {
    fen: "5b1r/p4pp1/b3p3/B1RR3p/4kPq1/4P3/P4KPP/8 w - - 0 27",
    correctMoves: [
      {
        from: "d5",
        to: "d4",
        san: "Rd4#"
      },
    ],
    responseMoves: [],
  },
  {
    fen: "8/2p2k2/8/ppp1PPpp/8/PP1P1K1P/8/8 b - - 0 1",
    correctMoves: [
      {
        from: "a5",
        to: "a4",
        san: "a4"
      },
      {
        from: "b5",
        to: "b4",
        san: "b4"
      },
      {
        from: "c5",
        to: "b4",
        san: "cxb4"
      },
      {
        from: "b4",
        to: "b3",
        san: "b4"
      },
      {
        from: "b3",
        to: "b2",
        san: "b2"
      },
      {
        from: "b2",
        to: "b1",
        san: "b1=Q"
      },
      {
        from: "b1",
        to: "h1",
        san: "Qh1+"
      },
      {
        from: "h1",
        to: "a8",
        san: "Qxa8"
      },
    ],
    responseMoves: ["bxa4", "axb4", "a5", "a6", "a7", "a8=Q", "Ke3"],
  },
  {
    fen: "1b1r4/k2q4/P2r4/1p5p/1P2Q1p1/6P1/2R2P1P/2R3K1 w - - 1 40",
    correctMoves: [
      {
        from: "c2",
        to: "c7",
        san: "Rc7+"
      },
      {
        from: "c1",
        to: "c7",
        san: "Rxc7+"
      },
      {
        from: "e4",
        to: "b7",
        san: "Qb7#"
      },
    ],
    responseMoves: ["Qxc7", "Bxc7"],
  },
  {
    fen: "5Q2/1Q4pk/5p1p/8/4Pp2/3P2PP/5qBK/8 b - - 3 40",
    correctMoves: [
      {
        from: "f4",
        to: "g3",
        san: "fxg3+"
      },
      {
        from: "f2",
        to: "e1",
        san: "Qe1+"
      },
      {
        from: "e1",
        to: "f1",
        san: "Qxf1#"
      },
    ],
    responseMoves: ["Kh1", "Bf1"],
  },
  {
    fen: "3rk2r/pp1n1ppp/1bp1pnq1/8/3P2P1/2P1BN1P/PP2QP2/R3KB1R w KQk - 1 14",
    correctMoves: [
      {
        from: "f3",
        to: "h4",
        san: "Nh4"
      },
      {
        from: "f1",
        to: "g2",
        san: "Bg2"
      },
      {
        from: "h4",
        to: "g2",
        san: "Nxg2"
      },
    ],
    responseMoves: ["Qe4", "Qxg2"],
  },
  {
    fen: "8/k1r5/1R6/PKp5/1pP5/8/8/8 b - - 8 58",
    correctMoves: [
      {
        from: "c7",
        to: "b7",
        san: "Rb7"
      },
      {
        from: "b4",
        to: "b3",
        san: "b3"
      },
      {
        from: "b7",
        to: "b6",
        san: "Rxb6"
      },
      {
        from: "a7",
        to: "b8",
        san: "Kb8"
      },
    ],
    responseMoves: ["Kxc5", "Kc6", "axb6+"],
  },
  {
    fen: "r3r1k1/ppp1qpp1/1bn4p/3p4/3P3N/P1Q1P1P1/1P3PKP/R1B2R2 b - - 0 17",
    correctMoves: [
      {
        from: "g7",
        to: "g5",
        san: "g5"
      },
      {
        from: "e7",
        to: "e4",
        san: "Qe4"
      },
      {
        from: "e4",
        to: "f3",
        san: "Qxf3"
      },
    ],
    responseMoves: ["Nf3", "Kg1"],
  },
  {
    fen: "2k2r1N/ppp3Qp/2n5/2b1p3/3q4/3P4/PPP2PPP/RNB2RK1 b - - 0 14",
    correctMoves: [
      {
        from: "f8",
        to: "f2",
        san: "Rxf2"
      },
      {
        from: "d4",
        to: "e3",
        san: "Qxe3"
      },
      {
        from: "c8",
        to: "b8",
        san: "Kb8"
      },
      {
        from: "f2",
        to: "f8",
        san: "Rf8+"
      },
      {
        from: "f8",
        to: "g8",
        san: "Rxg8"
      },
    ],
    responseMoves: ["Be3", "Qg4+", "Qg8+", "Kh1"],
  },
  {
    fen: "r5qk/7p/1Q5b/2pp2p1/1n4P1/7N/1PPB2BP/1K1R1R2 b - - 0 29",
    correctMoves: [
      {
        from: "a8",
        to: "a1",
        san: "Ra1+"
      },
      {
        from: "g8",
        to: "a8",
        san: "Qa8+"
      },
      {
        from: "a8",
        to: "a5",
        san: "Qxa5+"
      },
      {
        from: "a5",
        to: "a2",
        san: "Qa2+"
      },
      {
        from: "a2",
        to: "a1",
        san: "Qa1#"
      },
    ],
    responseMoves: ["Kxa1", "Qa5", "Kb1", "Kc1"],
  },
  {
    fen: "5rk1/1pp3pp/8/3P4/P3Pp2/5KP1/1pr1R1BP/1R6 b - - 0 32",
    correctMoves: [
      {
        from: "f4",
        to: "g3",
        san: "fxg3+"
      },
      {
        from: "c2",
        to: "e2",
        san: "Rxe2+"
      },
      {
        from: "f8",
        to: "f2",
        san: "Rf2+"
      },
      {
        from: "f2",
        to: "g2",
        san: "Rxg2"
      },
      {
        from: "c7",
        to: "d6",
        san: "cxd6"
      },
    ],
    responseMoves: ["Ke3", "Kxe2", "Ke3", "d6"],
  },
  {
    fen: "8/8/8/1b1P3p/2kB2p1/4KpP1/7P/8 b - - 1 1",
    correctMoves: [
      {
        from: "f3",
        to: "f2",
        san: "f2"
      },
      {
        from: "c4",
        to: "d4",
        san: "Kxd4"
      },
    ],
    responseMoves: ["Kxf2"],
  },
  {
    fen: "3b2k1/1R6/p6p/3P1p2/bB1N2p1/1r4P1/7P/4K3 b - - 2 39",
    correctMoves: [
      {
        from: "b3",
        to: "b4",
        san: "Rxb4"
      },
      {
        from: "d8",
        to: "a5",
        san: "Ba5"
      },
      {
        from: "a4",
        to: "c6",
        san: "Bxc6"
      },
      {
        from: "a5",
        to: "b4",
        san: "Bxb4+"
      },
    ],
    responseMoves: ["Rxb4", "Nc6", "dxc6"],
  },
  {
    fen: "r5k1/p1p3pp/1p2pr2/5p1q/3P2n1/P3PN2/1P2QPP1/R1B1R1K1 b - - 3 20",
    correctMoves: [
      {
        from: "f6",
        to: "h6",
        san: "Rh6"
      },
      {
        from: "h5",
        to: "h1",
        san: "Qh1+"
      },
      {
        from: "g4",
        to: "h2",
        san: "Nh2#"
      },
    ],
    responseMoves: ["Kf1", "Ng1"],
  },
  {
    fen: "2kr3r/pp1qppb1/2p1n1p1/3pP3/1PPPn1b1/2N1BN2/P3B1PP/2RQK2R w K - 1 15",
    correctMoves: [
      {
        from: "c4",
        to: "d5",
        san: "cxd5"
      },
      {
        from: "d5",
        to: "e6",
        san: "dxe6"
      },
      {
        from: "c1",
        to: "c3",
        san: "Rxc3"
      },
    ],
    responseMoves: ["Nxc3", "Qxe6"],
  },
  {
    fen: "1Q6/8/8/p7/Pq6/3k4/K7/8 w - - 5 61",
    correctMoves: [
      {
        from: "b8",
        to: "b4",
        san: "Qxb4"
      },
      {
        from: "a2",
        to: "b3",
        san: "Kb3"
      },
      {
        from: "b3",
        to: "b4",
        san: "Kxb4"
      },
      {
        from: "b4",
        to: "b5",
        san: "Kb5"
      },
      {
        from: "b5",
        to: "b6",
        san: "Kb6"
      },
      {
        from: "b6",
        to: "b7",
        san: "Kb7"
      },
    ],
    responseMoves: ["axb4", "Kd4", "Kd5", "Kd6", "Kd7"],
  },
  {
    fen: "8/8/8/2kP4/p2R3P/4K1P1/8/r7 b - - 2 42",
    correctMoves: [
      {
        from: "a1",
        to: "e1",
        san: "Re1+"
      },
      {
        from: "c5",
        to: "d4",
        san: "Kxd4+"
      },
      {
        from: "a4",
        to: "a3",
        san: "a3"
      },
      {
        from: "a3",
        to: "a2",
        san: "a2"
      },
    ],
    responseMoves: ["Kd2", "Kxe1", "Kd2"],
  },
  {
    fen: "r2qkbnr/1p1b3p/p2p4/3Np1p1/1pBnP3/5Q2/P1PP2PP/R1B1K1NR w KQkq - 4 12",
    correctMoves: [
      {
        from: "f3",
        to: "h5",
        san: "Qh5#"
      },
    ],
    responseMoves: [],
  },
  {
    fen: "r1bqk1nr/ppp1p2p/2n2p1b/3p4/3P4/7P/PPP2PP1/RNBQKBNR w KQkq - 1 6",
    correctMoves: [
      {
        from: "d1",
        to: "h5",
        san: "Qh5+"
      },
      {
        from: "c1",
        to: "h6",
        san: "Bxh6+"
      },
      {
        from: "h5",
        to: "h6",
        san: "Qxh6+"
      },
    ],
    responseMoves: ["Kf8", "Nxh6"],
  },
  {
    fen: "r5k1/ppp3pp/8/8/3np3/P3N2q/1PP2QR1/R5K1 b - - 1 1",
    correctMoves: [
      {
        from: "a8",
        to: "f8",
        san: "Rf8"
      },
      {
        from: "g8",
        to: "g7",
        san: "Kxg7"
      },
      {
        from: "h3",
        to: "g2",
        san: "Qxg2+"
      },
    ],
    responseMoves: ["Rxg7+", "Qg2+"],
  },
  {
    fen: "1R2Q3/6p1/2N2k1r/5pN1/5P2/2P5/P3BPKp/8 b - - 3 34",
    correctMoves: [
      {
        from: "a2",
        to: "a1",
        san: "a1=Q+"
      },
      {
        from: "h1",
        to: "h2",
        san: "Qh2+"
      },
      {
        from: "h6",
        to: "h3",
        san: "Rh3+"
      },
      {
        from: "h2",
        to: "h3",
        san: "Qxh3#"
      },
    ],
    responseMoves: ["Kg3", "Kf3", "Nxh3"],
  },
  {
    fen: "5k2/5p2/2P1p1p1/4P2p/3K1P1P/8/2B3P1/r7 w - - 1 2",
    correctMoves: [
      {
        from: "c6",
        to: "c7",
        san: "c7"
      },
      {
        from: "d4",
        to: "c5",
        san: "Kc5"
      },
    ],
    responseMoves: ["Ra8"],
  },
  {
    fen: "2k5/pppqb3/5nNp/4p3/4B3/2P3P1/PP1B3P/R2K1R2 b - - 0 22",
    correctMoves: [
      {
        from: "f6",
        to: "e4",
        san: "Nxe4"
      },
      {
        from: "c8",
        to: "d8",
        san: "Kd8"
      },
      {
        from: "b7",
        to: "c6",
        san: "bxc6"
      },
      {
        from: "d7",
        to: "d2",
        san: "Qxd2+"
      },
    ],
    responseMoves: ["Nxe7+", "Nc6+", "Kc2"],
  },
  {
    fen: "6k1/8/3n1Q2/r2N4/p1qP4/8/6KP/8 w - - 1 2",
    correctMoves: [
      {
        from: "d5",
        to: "e7",
        san: "Ne7+"
      },
      {
        from: "f6",
        to: "g6",
        san: "Qg6+"
      },
      {
        from: "g6",
        to: "h6",
        san: "Qh6#"
      },
    ],
    responseMoves: ["Kh7", "Kh8"],
  },
  {
    fen: "7k/2p3p1/1qB1Q2p/2bpB3/3p4/3P4/1Pp2PPP/6K1 w - - 0 2",
    correctMoves: [
      {
        from: "e6",
        to: "h6",
        san: "Qxh6+"
      },
      {
        from: "h6",
        to: "g7",
        san: "Qxg7+"
      },
    ],
    responseMoves: ["Kg8"],
  },
  {
    fen: "8/8/8/kPK2P2/P5pp/8/6P1/8 b - - 0 58",
    correctMoves: [
      {
        from: "h4",
        to: "h3",
        san: "h3"
      },
      {
        from: "g4",
        to: "g3",
        san: "g3"
      },
      {
        from: "g3",
        to: "g2",
        san: "g2"
      },
      {
        from: "g2",
        to: "g1",
        san: "g1=Q+"
      },
    ],
    responseMoves: ["gxh3", "f6", "f7"],
  },
  {
    fen: "3rk3/p4r2/2p5/1p5Q/2q5/1KP5/PP4PP/RN1R4 w - - 2 28",
    correctMoves: [
      {
        from: "b3",
        to: "c2",
        san: "Kc2"
      },
      {
        from: "c2",
        to: "c1",
        san: "Kc1"
      },
      {
        from: "c1",
        to: "d1",
        san: "Kxd1"
      },
    ],
    responseMoves: ["Qe4+", "Rxd1+"],
  },
  {
    fen: "4kb1r/4pppp/8/6Q1/5P2/2r1q1P1/P1n4P/3R1KNb w k - 0 28",
    correctMoves: [
      {
        from: "g5",
        to: "b5",
        san: "Qb5+"
      },
      {
        from: "b5",
        to: "b8",
        san: "Qb8+"
      },
      {
        from: "b8",
        to: "c8",
        san: "Qxc8#"
      },
    ],
    responseMoves: ["Rc6", "Rc8"],
  },
  {
    fen: "8/Pq4pk/7p/4Q3/4bp2/8/6PP/5BK1 b - - 0 1",
    correctMoves: [
      {
        from: "b7",
        to: "a7",
        san: "Qxa7+"
      },
      {
        from: "a7",
        to: "e3",
        san: "Qe3"
      },
    ],
    responseMoves: ["Kh1"],
  },
  {
    fen: "r3k2r/pp2bpp1/1qp1p1bp/3pP3/5B2/P2BPPP1/1PPQ3P/2KR3R b kq - 1 14",
    correctMoves: [
      {
        from: "g6",
        to: "d3",
        san: "Bxd3"
      },
      {
        from: "g7",
        to: "g5",
        san: "g5"
      },
      {
        from: "g5",
        to: "f4",
        san: "gxf4"
      },
    ],
    responseMoves: ["Qxd3", "g4"],
  },
];

export default mediumPuzzles;