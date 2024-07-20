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
  }
  ,
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
  }
  ,
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
  }
  ,
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
  }
  ,
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
  }
  ,
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
  }
  ,
  {
    fen: "r1b5/3kr1P1/1pp5/8/1P6/P1Q2p1n/5P1P/R4K1R b - - 0 28",
    correctMoves: [
      {
        from: "c8",
        to: "a6",
        san: "Ba6+"
      },
      {
        from: "a6",
        to: "b5",
        san: "Bxb5+"
      },
    ],
    responseMoves: ["b5"],
  }
  ,
  {
    fen: "r4rk1/ppqb2pp/3b1pn1/2pPn2Q/8/1P2PN2/PB1PB1PP/RN3RK1 b - - 0 1",
    correctMoves: [
      {
        from: "d7",
        to: "g4",
        san: "Bg4"
      },
      {
        from: "g4",
        to: "h5",
        san: "Bxh5"
      },
      {
        from: "c7",
        to: "d6",
        san: "Qxd6"
      },
    ],
    responseMoves: ["Bxe5", "Bxd6"],
  }
  ,
  {
    fen: "1k1r4/ppp1p3/4B2b/5P1p/5p2/N1P4P/PP2K3/3R4 b - - 1 21",
    correctMoves: [
      {
        from: "f4",
        to: "f3",
        san: "f3+"
      },
      {
        from: "f3",
        to: "f2",
        san: "f2+"
      },
      {
        from: "d8",
        to: "d1",
        san: "Rxd1"
      },
    ],
    responseMoves: ["Ke1", "Kxf2"],
  }
  ,
  {
    fen: "r1bqkb1r/1pp2ppp/p1n5/1B1np3/Q7/2P2N2/PP1P1PPP/RNB1K2R w KQkq - 0 7",
    correctMoves: [
      {
        from: "b5",
        to: "c6",
        san: "Bxc6+"
      },
      {
        from: "a4",
        to: "c6",
        san: "Qxc6+"
      },
      {
        from: "c6",
        to: "d5",
        san: "Qxd5"
      },
    ],
    responseMoves: ["bxc6", "Bd7"],
  }
  ,
  {
    fen: "5r1k/pp2b1pp/2np4/3Qp3/2P5/1P4B1/P1q1B1PP/5RK1 w - - 5 21",
    correctMoves: [
      {
        from: "f1",
        to: "f8",
        san: "Rxf8+"
      },
      {
        from: "d5",
        to: "f7",
        san: "Qf7"
      },
      {
        from: "f7",
        to: "f8",
        san: "Qxf8+"
      },
    ],
    responseMoves: ["Bxf8", "h6"],
  }
  ,
  {
    fen: "r2r2k1/p1p3pp/1p2b3/4Pp2/5P2/q1P1B1P1/PQ5P/RR4K1 b - - 3 22",
    correctMoves: [
      {
        from: "d8",
        to: "d1",
        san: "Rd1+"
      },
      {
        from: "a3",
        to: "b2",
        san: "Qxb2+"
      },
      {
        from: "d1",
        to: "a1",
        san: "Rxd1"
      },
    ],
    responseMoves: ["Kf2", "Rxb2"],
  }
  ,
  {
    fen: "rr4k1/3q1pb1/4n1p1/3pP1P1/3P3Q/7R/pp1N1PK1/7R w - - 0 2",
    correctMoves: [
      {
        from: "h5",
        to: "h8",
        san: "Qh8+"
      },
      {
        from: "h3",
        to: "h8",
        san: "Rxh8+"
      },
      {
        from: "h1",
        to: "h7",
        san: "R1h7#"
      },
    ],
    responseMoves: ["Bxh8", "Kg7"],
  }
  ,
  {
    fen: "r5k1/pppbQ1pp/4p3/8/2N5/8/PPP1q3/5RK1 w - - 10 28",
    correctMoves: [
      {
        from: "e7",
        to: "f7",
        san: "Qf7+"
      },
      {
        from: "f7",
        to: "f8",
        san: "Qf8+"
      },
      {
        from: "f1",
        to: "f8",
        san: "Rxf8#"
      },
    ],
    responseMoves: ["Kh8", "Rxf8"],
  }
  ,
  {
    fen: "8/8/4p1K1/4k3/6p1/6P1/5P2/8 b - - 1 53",
    correctMoves: [
      {
        from: "e5",
        to: "e4",
        san: "Ke4"
      },
      {
        from: "e4",
        to: "f3",
        san: "Kf3"
      },
      {
        from: "f3",
        to: "f2",
        san: "Kxf2"
      },
      {
        from: "e6",
        to: "e5",
        san: "e5+"
      },
      {
        from: "e5",
        to: "e4",
        san: "e4"
      },
      {
        from: "e4",
        to: "e3",
        san: "e3"
      },
      {
        from: "e3",
        to: "e2",
        san: "e2"
      },
    ],
    responseMoves: ["Kf6", "Ke5", "Kf4", "Kxg4", "Kf4", "g4"],
  }
  ,
  {
    fen: "8/2P2p2/8/PR6/6pk/r7/6PK/8 b - - 0 45",
    correctMoves: [
      {
        from: "g4",
        to: "g3",
        san: "g3+"
      },
      {
        from: "a3",
        to: "a1",
        san: "Ra1+"
      },
      {
        from: "a1",
        to: "b1",
        san: "Rxb1#"
      }
    ],
    responseMoves: ["Kh1", "Rb1"],
  }
  ,
  {
    fen: "8/R7/3p1Rp1/3Pp2p/4P2k/4PK2/1r4P1/8 b - - 3 41",
    correctMoves: [
      {
        from: "g6",
        to: "g5",
        san: "g5"
      },
      {
        from: "h4",
        to: "h3",
        san: "Kh3"
      },
      {
        from: "g5",
        to: "g4",
        san: "g4+"
      },
      {
        from: "h5",
        to: "g4",
        san: "hxg4#"
      }
    ],
    responseMoves: ["g3+", "Rg7", "Rxg4"]
  }
  ,
  {
    fen: "r2q1rk1/1p1b1ppp/p7/3Nb3/B7/8/PP3PPP/R2Q1RK1 b - - 0 1",
    correctMoves: [
      {
        from: "d7",
        to: "a4",
        san: "Bxa4"
      },
      {
        from: "d8",
        to: "d5",
        san: "Qxd5"
      }
    ],
    responseMoves: [
      "Qxa4"
    ]
  },
  {
    fen: "rnbqk1nr/p5pp/1p1bp3/1p1pN3/3P4/2N2Q2/PPP2PPP/R1B1K2R w KQkq - 0 10",
    correctMoves: [
      {
        from: "f3",
        to: "f7",
        san: "Qf7#"
      }
    ],
    responseMoves: []
  }
  ,
  {
    fen: "5rk1/p3pp1p/2n3p1/5bN1/1P6/P2B1Q2/6PP/qN2K2R b K - 1 1",
    correctMoves: [
      {
        from: "c6",
        to: "e5",
        san: "Ne5"
      },
      {
        from: "e5",
        to: "f3",
        san: "Nxf3+"
      }
    ],
    responseMoves: [
      "Bxf5"
    ]
  },
  {
    fen: "2k5/pppr4/5KB1/8/2P2p2/1P3r2/P7/4R3 w - - 0 36",
    correctMoves: [
      {
        from: "e1",
        to: "e8",
        san: "Re8+"
      },
      {
        from: "g6",
        to: "f5",
        san: "Bf5+"
      },
      {
        from: "e8",
        to: "d8",
        san: "Rxd8#"
      }
    ],
    responseMoves: [
      "Rd8",
      "Kb8"
    ]
  }
  ,
  {
    fen: "5rk1/1R4p1/2p1p2p/2PpN1q1/1P1P2Pp/4P1nP/6PK/4Q3 b - - 0 37",
    correctMoves: [
      {
        from: "f8",
        to: "f1",
        san: "Rf1"
      },
      {
        from: "g8",
        to: "h7",
        san: "Kh7"
      },
      {
        from: "g3",
        to: "f1",
        san: "Nxf1+"
      }
    ],
    responseMoves: [
      "Rb8+",
      "Qxf1"
    ]
  },
  {
    fen: "5r1r/1pp1kB2/p2p3p/6p1/1P6/PQ1R4/1KP2q1P/8 w - - 4 32",
    correctMoves: [
      {
        from: "b3",
        to: "e6",
        san: "Qe6+"
      },
      {
        from: "d3",
        to: "d6",
        san: "Rxd6+"
      },
      {
        from: "e6",
        to: "d6",
        san: "Qxd6+"
      },
      {
        from: "f7",
        to: "e6",
        san: "Be6#"
      }
    ],
    responseMoves: [
      "Kd8",
      "cxd6",
      "Kc8"
    ]
  },
  {
    fen: "2R2b2/4kp1p/3p2r1/3P3p/1P2P3/P3BPrP/8/2R4K b - - 5 40",
    correctMoves: [
      {
        from: "g3",
        to: "h3",
        san: "Rxh3#"
      }
    ],
    responseMoves: []
  },
  {
    fen: "3r2r1/1p3kp1/p4p2/7Q/PB6/8/1q3PPP/3RK2R b K - 7 29",
    correctMoves: [
      {
        from: "g7",
        to: "g6",
        san: "g6"
      },
      {
        from: "g8",
        to: "g7",
        san: "Rg7"
      },
      {
        from: "f7",
        to: "g7",
        san: "Kxg7"
      },
      {
        from: "d8",
        to: "d1",
        san: "Rxd1"
      }
    ],
    responseMoves: [
      "Qh7+",
      "Qxg7+",
      "0-0"
    ]
  }
  ,
  {
    fen: "rnbqkb1r/ppp2ppp/3p4/3Pp3/2P1n3/5P2/PP4PP/RNBQKBNR b KQkq c3 0 5",
    correctMoves: [
      {
        from: "d8",
        to: "h4",
        san: "Qh4+"
      },
      {
        from: "e4",
        to: "g3",
        san: "Nxg3"
      },
      {
        from: "h4",
        to: "h1",
        san: "Qxh1"
      },
    ],
    responseMoves: ["g3", "hxg3"],
  },
  {
    fen: "Q7/p1ppkp1p/2n5/8/3P4/2q3P1/P2NKP1P/5B1R b - - 0 17",
    correctMoves: [
      {
        from: "c6",
        to: "d4",
        san: "Nxd4+"
      },
      {
        from: "c3",
        to: "c2",
        san: "Qc2+"
      },
      {
        from: "c2",
        to: "c1",
        san: "Qc1#"
      },
    ],
    responseMoves: ["Kd1", "Ke1"],
  },
  {
    fen: "3r3k/3r3p/pR4p1/4pb2/NP4P1/2P1n2P/P3BR2/2K5 b - b3 0 28",
    correctMoves: [
      {
        from: "d7",
        to: "d1",
        san: "Rd1+"
      },
      {
        from: "d8",
        to: "d1",
        san: "Rxd1+"
      },
      {
        from: "d1",
        to: "b1",
        san: "Rb1+"
      },
      {
        from: "e3",
        to: "c4",
        san: "Nc4#"
      },
    ],
    responseMoves: ["Bxd1", "Kb2", "Ka3"],
  },
  {
    fen: "r1b1kb1r/1pp1q1pp/p1np1p1n/1B1Q4/4P3/2P1BN2/PP3PPP/RN2K2R w KQkq - 0 10",
    correctMoves: [
      {
        from: "b5",
        to: "c6",
        san: "Bxc6+"
      },
      {
        from: "d5",
        to: "c6",
        san: "Qxc6+"
      },
      {
        from: "c6",
        to: "a8",
        san: "Qxa8++"
      },
    ],
    responseMoves: ["bxc6", "Qd7"],
  },
  {
    fen: "rn2kb1r/p1p2ppp/b4n2/1q1Pp1N1/1p1P4/1QP2P2/PPB3PP/RNB1K2R b KQkq - 0 11",
    correctMoves: [
      {
        from: "b5",
        to: "e2",
        san: "Qe2#"
      },
    ],
    responseMoves: [],
  },
  {
    fen: "r3kbQ1/5p2/b3q2N/3prN2/1p6/5P2/1PP1p1PP/R2R3K w - - 0 31",
    correctMoves: [
      {
        from: "f5",
        to: "g7",
        san: "Ng7+"
      },
      {
        from: "g7",
        to: "e6",
        san: "Nxe6"
      },
      {
        from: "a1",
        to: "d1",
        san: "Rxd1"
      },
    ],
    responseMoves: ["Kd7", "exd1=Q+"],
  },
  {
    fen: "8/8/2R1k3/5pp1/8/3PKP1P/r7/8 b - - 4 40",
    correctMoves: [
      {
        from: "e6",
        to: "d5",
        san: "Kd5"
      },
      {
        from: "f5",
        to: "f4",
        san: "f4+"
      },
      {
        from: "g5",
        to: "f4",
        san: "gxf4+"
      },
    ],
    responseMoves: ["Rc4", "Rxf4"],
  },
  {
    fen: "1r6/8/p1Bp4/P1p1p1k1/1pP1PpP1/3P3R/1r6/5KR1 b - - 3 38",
    correctMoves: [
      {
        from: "b2",
        to: "b1",
        san: "Rb1+"
      },
      {
        from: "b1",
        to: "g1",
        san: "Rxg1"
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
    ],
    responseMoves: ["Kf2", "Kxg1", "Rh1"],
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
    fen: "4rk2/1p5p/1b5p/1p1pNp1P/1P3P2/P5P1/6K1/4R3 w - - 1 35",
    correctMoves: [
      {
        from: "e5",
        to: "d7",
        san: "Nd7+"
      },
      {
        from: "e1",
        to: "e8",
        san: "Rxe8"
      },
      {
        from: "d7",
        to: "b6",
        san: "Nxb6"
      },
    ],
    responseMoves: ["Kf7", "Kxe8"],
  },
  {
    fen: "rnbqkb1r/ppp3pp/3p2n1/4pQ2/2B1P3/8/PPPP1PPP/RNB1K2R w KQkq - 0 7",
    correctMoves: [
      {
        from: "f5",
        to: "f7",
        san: "Qf7#"
      },
    ],
    responseMoves: [],
  },
  {
    fen: "Rn2r1k1/2pb1ppp/8/2B5/1P6/6P1/2P2P1P/3NR1K1 b - - 2 26",
    correctMoves: [
      {
        from: "e8",
        to: "e1",
        san: "Rxe1+"
      },
      {
        from: "d7",
        to: "c6",
        san: "Bc6+"
      },
      {
        from: "c6",
        to: "a8",
        san: "Bxa8"
      },
    ],
    responseMoves: ["Kg2", "Kh3"],
  },
  {
    fen: "8/5pkp/1rq3p1/3pP3/7Q/b3B1P1/5PKP/8 w - - 0 2",
    correctMoves: [
      {
        from: "e3",
        to: "h6",
        san: "Bh6+"
      },
      {
        from: "h4",
        to: "d8",
        san: "Qd8+"
      },
      {
        from: "d8",
        to: "e8",
        san: "Qxe8+"
      },
    ],
    responseMoves: ["Kg8", "Qe8"],
  },
  {
    fen: "1k2rr2/1pp5/p7/3P4/8/6Q1/P4qPP/3RR2K b - - 3 25",
    correctMoves: [
      {
        from: "e8",
        to: "e1",
        san: "Rxe1+"
      },
      {
        from: "f2",
        to: "f1",
        san: "Qf1+"
      },
      {
        from: "f8",
        to: "f1",
        san: "Rxf1#"
      },
    ],
    responseMoves: ["Rxe1", "Rxf1"],
  },
  {
    fen: "rnbqk2r/ppp2ppp/5n2/3P4/1bPPpP2/2N5/PP4PP/R1BQKBNR w KQkq - 1 2",
    correctMoves: [
      {
        from: "d1",
        to: "a4",
        san: "Qa4+"
      },
      {
        from: "a4",
        to: "b4",
        san: "Qxb4"
      },
    ],
    responseMoves: ["c6"],
  },
  {
    fen: "8/3R1R1p/r1r3p1/6k1/6P1/5K1P/8/8 w - - 1 48",
    correctMoves: [
      {
        from: "d7",
        to: "d5",
        san: "Rd5+"
      },
      {
        from: "g4",
        to: "g5",
        san: "g5+"
      },
      {
        from: "f7",
        to: "h7",
        san: "Rxh7#"
      },
    ],
    responseMoves: ["Kh6", "Kh5"],
  },
  {
    fen: "8/p7/1p2pk1p/1P6/P3KPP1/8/8/8 w - - 1 2",
    correctMoves: [
      {
        from: "g4",
        to: "g5",
        san: "g5+"
      },
      {
        from: "f4",
        to: "g5",
        san: "fxg5+"
      },
      {
        from: "e4",
        to: "e5",
        san: "Ke5"
      },
    ],
    responseMoves: ["hxg5", "Kxg5"],
  },
  {
    fen: "1r3k2/2q4Q/n4pB1/1ppPp1p1/2P3P1/1P5P/6K1/8 w - - 1 2",
    correctMoves: [
      {
        from: "h7",
        to: "h8",
        san: "Qh8+"
      },
      {
        from: "h8",
        to: "g7",
        san: "Qg7+"
      },
      {
        from: "g7",
        to: "f6",
        san: "Qxf6+"
      },
    ],
    responseMoves: ["Ke7", "Kd6"],
  },
  {
    fen: "5r2/1p3pk1/p3p1p1/6Q1/P3bP1P/1B6/1PP2qP1/3R3K w - - 1 30",
    correctMoves: [
      {
        from: "g5",
        to: "e5",
        san: "Qe5+"
      },
      {
        from: "e5",
        to: "e4",
        san: "Qxe4"
      },
      {
        from: "h1",
        to: "g1",
        san: "Kg1"
      },
    ],
    responseMoves: ["Kh7", "Qxh4+"],
  },
  {
    fen: "4Rnk1/3q1pb1/3p2p1/3P4/PQbP2P1/5P2/P4BK1/8 w - - 1 2",
    correctMoves: [
      {
        from: "e8",
        to: "f8",
        san: "Rxf8+"
      },
      {
        from: "b4",
        to: "c4",
        san: "Qxc4"
      },
    ],
    responseMoves: ["Bxf8"],
  },
  {
    fen: "4r2r/p6Q/2p3p1/5pk1/3q4/3B2P1/2P2RK1/8 w - - 3 34",
    correctMoves: [
      {
        from: "f2",
        to: "f5",
        san: "Rxf5+"
      },
      {
        from: "h7",
        to: "f5",
        san: "Qxf5+"
      },
      {
        from: "f5",
        to: "g6",
        san: "Qg6#"
      },
    ],
    responseMoves: ["gxf5", "Kh6"],
  },
  {
    fen: "Q7/4k1p1/5pp1/p2pp1n1/P7/4q1P1/BP5P/1R3R1K b - - 0 29",
    correctMoves: [
      {
        from: "e3",
        to: "e4",
        san: "Qe4+"
      },
      {
        from: "e4",
        to: "f3",
        san: "Qxf3+"
      },
      {
        from: "g5",
        to: "h3",
        san: "Nh3#"
      },
    ],
    responseMoves: ["Rf3", "Kg1"],
  },
  {
    fen: "2kr2nr/p1p3pp/8/2p1n3/2B5/8/PPP2PPP/R2R2K1 w - - 0 15",
    correctMoves: [
      {
        from: "c4",
        to: "a6",
        san: "Ba6+"
      },
      {
        from: "d1",
        to: "d8",
        san: "Rxd8#"
      },
    ],
    responseMoves: ["Kb8"],
  },
  {
    fen: "3r3r/5p1k/2R1pPp1/p7/3R1Pp1/8/Pq2bQ1P/6K1 w - - 1 31",
    correctMoves: [
      {
        from: "f2",
        to: "h4",
        san: "Qh4+"
      },
      {
        from: "d4",
        to: "d8",
        san: "Rxd8#"
      },
    ],
    responseMoves: ["Kg8"],
  },
  {
    fen: "8/8/r3Rp2/1k1p1P2/1p1P4/2pK4/2P5/8 b - - 1 1",
    correctMoves: [
      {
        from: "a6",
        to: "e6",
        san: "Rxe6"
      },
      {
        from: "b5",
        to: "c6",
        san: "Kc6"
      },
      {
        from: "c6",
        to: "d7",
        san: "Kd7"
      },
    ],
    responseMoves: ["fxe6", "e7"],
  },
  {
    fen: "rnb2rk1/ppp2ppp/8/8/3q4/3B4/PPP2PPP/R2Q1RK1 w - - 0 2",
    correctMoves: [
      {
        from: "d3",
        to: "h7",
        san: "Bxh7+"
      },
      {
        from: "d1",
        to: "d4",
        san: "Qxd4"
      },
    ],
    responseMoves: ["Kxh7"],
  },
  {
    fen: "3B4/8/4b1pp/4pk2/B4b1P/5P2/5K2/8 w - - 4 37",
    correctMoves: [
      {
        from: "a4",
        to: "c2",
        san: "Bc2+"
      },
      {
        from: "c2",
        to: "e4",
        san: "Bxe4+"
      },
      {
        from: "d8",
        to: "c7",
        san: "Bc7+"
      },
      {
        from: "c7",
        to: "f4",
        san: "Bxf4"
      },
    ],
    responseMoves: ["e4", "Ke5", "Kf6"],
  },
  {
    fen: "3r1rk1/p1p2ppp/8/2b5/3q4/2N1B3/PPK1R1Q1/R7 b - - 15 31",
    correctMoves: [
      {
        from: "d4",
        to: "d3",
        san: "Qd3+"
      },
      {
        from: "c5",
        to: "e3",
        san: "Bxe3+"
      },
      {
        from: "d3",
        to: "e3",
        san: "Qxe3+"
      },
    ],
    responseMoves: ["Kc1", "Rxe3"],
  },
  {
    fen: "r5k1/2p2ppp/3p4/R3q3/4P3/8/3Q1PPP/R5K1 b - - 0 27",
    correctMoves: [
      {
        from: "e5",
        to: "a1",
        san: "Qxa1+"
      },
      {
        from: "a8",
        to: "a1",
        san: "Rxa1+"
      },
      {
        from: "a1",
        to: "d1",
        san: "Rxd1#"
      },
    ],
    responseMoves: ["Rxa1", "Qd1"],
  },
  {
    fen: "1k6/pp3N2/6p1/2Rp1b2/3P4/BP2q3/P3B2r/2RK4 w - - 0 30",
    correctMoves: [
      {
        from: "c5",
        to: "c8",
        san: "Rc8+"
      },
      {
        from: "a3",
        to: "d6",
        san: "Bd6+"
      },
      {
        from: "c1",
        to: "c8",
        san: "Rxc8#"
      },
    ],
    responseMoves: ["Bxc8", "Ka8"],
  },
  {
    fen: "r1bqkb1r/p1p2ppp/2pp4/8/2B1nP2/3P4/PPP3PP/RNBQK2R b KQkq - 0 7",
    correctMoves: [
      {
        from: "d8",
        to: "h4",
        san: "Qh4+"
      },
      {
        from: "e4",
        to: "g3",
        san: "Nxg3"
      },
      {
        from: "h4",
        to: "h1",
        san: "Qxh1+"
      },
    ],
    responseMoves: ["g3", "hxg3"],
  },
  {
    fen: "k2r1b2/p2r1ppp/2p5/3NP3/5Pn1/3R4/P1P3P1/1R3K2 w - - 2 25",
    correctMoves: [
      {
        from: "d5",
        to: "c7",
        san: "Nc7+"
      },
      {
        from: "d3",
        to: "d8",
        san: "Rxd8+"
      },
      {
        from: "d8",
        to: "c8",
        san: "Rxc8#"
      },
    ],
    responseMoves: ["Rxc7", "Rc8"],
  },
  {
    fen: "2rr2k1/pp3ppp/3qp3/4Nbb1/1n1P4/P1N1P2P/1P1QB1P1/2RR2K1 b - - 0 1",
    correctMoves: [
      {
        from: "d6",
        to: "e5",
        san: "Qxe5"
      },
      {
        from: "d8",
        to: "d2",
        san: "Rxd2"
      },
      {
        from: "g5",
        to: "e3",
        san: "Bxe3+"
      },
    ],
    responseMoves: ["dxe5", "Rxd2"],
  },
  {
    fen: "r6r/p7/2P2pkp/4pRp1/2P1Qb1q/2P5/P2N2PP/R2K4 b - - 2 23",
    correctMoves: [
      {
        from: "h4",
        to: "g4",
        san: "Qg4+"
      },
      {
        from: "g4",
        to: "f5",
        san: "Qxf5"
      },
      {
        from: "g6",
        to: "f5",
        san: "Kxf5"
      },
    ],
    responseMoves: ["Kc2", "Qxf5"],
  },
  {
    fen: "2kr1bnr/pbpp2qp/1p2pp2/4N3/P6B/2NP4/1PP1BPPP/R2Q1RK1 b - - 0 11",
    correctMoves: [
      {
        from: "g7",
        to: "g2",
        san: "Qxg2#"
      },
    ],
    responseMoves: [],
  },
  {
    fen: "r2q1knr/ppp2ppp/2np4/1B6/3bP3/5Q2/PP3PPP/RNBR2K1 w - - 1 2",
    correctMoves: [
      {
        from: "b5",
        to: "c6",
        san: "Bxc6"
      },
      {
        from: "d1",
        to: "d4",
        san: "Rxd4"
      },
    ],
    responseMoves: ["bxc6"],
  },
  {
    fen: "r6k/1pp2p2/2b1p3/1p5p/1b2qP2/7Q/PP4RP/7K w - - 0 29",
    correctMoves: [
      {
        from: "h3",
        to: "h5",
        san: "Qxh5+"
      },
      {
        from: "h5",
        to: "e5",
        san: "Qe5+"
      },
      {
        from: "e5",
        to: "f6",
        san: "Qxf6+"
      },
      {
        from: "f6",
        to: "g7",
        san: "Qxg7#"
      },
    ],
    responseMoves: ["Qh7", "f6", "Qg7"],
  },
  {
    fen: "rn1qk1nr/pbp2ppp/1p2p3/8/2BP4/P1P1P3/5PPP/R1BQK1NR b KQkq - 0 1",
    correctMoves: [
      {
        from: "b7",
        to: "g2",
        san: "Bxg2"
      },
      {
        from: "g2",
        to: "h1",
        san: "Bxh1"
      },
      {
        from: "d8",
        to: "f6",
        san: "Qf6"
      },
    ],
    responseMoves: ["Qg4", "Qxg7"],
  },
  {
    fen: "7k/p3b1p1/1pQ4p/2P1p3/4Pp2/P4q2/1P3rRB/7K w - - 0 34",
    correctMoves: [
      {
        from: "c6",
        to: "e8",
        san: "Qe8+"
      },
      {
        from: "e8",
        to: "g6",
        san: "Qg6+"
      },
      {
        from: "g6",
        to: "g7",
        san: "Qxg7#"
      },
    ],
    responseMoves: ["Kh7", "Kg8"],
  },
  {
    fen: "4kbnr/pp2p1pp/1q1rB3/8/6P1/4QP2/P2B1K1P/3RR3 b k - 1 1",
    correctMoves: [
      {
        from: "d6",
        to: "e6",
        san: "Rxe6"
      },
      {
        from: "e6",
        to: "b6",
        san: "Rxb6"
      },
    ],
    responseMoves: ["Qxb6"],
  },
  {
    fen: "rn2k2r/pp2bppp/2pB4/5p2/q2P4/1PP2P2/2K1Q1PP/3R2NR b kq - 0 15",
    correctMoves: [
      {
        from: "a4",
        to: "a2",
        san: "Qa2+"
      },
      {
        from: "a2",
        to: "e2",
        san: "Qxe2+"
      },
      {
        from: "e7",
        to: "d6",
        san: "Bxd6+"
      },
    ],
    responseMoves: ["Kd3", "Kxe2"],
  },
  {
    fen: "6rk/p4p1p/1p1pbPpQ/4b3/2PqP3/PR3R2/4B1PP/7K w - - 1 2",
    correctMoves: [
      {
        from: "h6",
        to: "h7",
        san: "Qxh7+"
      },
      {
        from: "f3",
        to: "h3",
        san: "Rh3+"
      },
      {
        from: "b3",
        to: "h3",
        san: "Rxh3#"
      },
    ],
    responseMoves: ["Kxh7", "Bxh3"],
  },
  {
    fen: "6k1/5p2/8/6pp/4P3/5PP1/P1K5/8 b - - 1 49",
    correctMoves: [
      {
        from: "h5",
        to: "h4",
        san: "h4"
      },
      {
        from: "g5",
        to: "h4",
        san: "gxh4"
      },
      {
        from: "h4",
        to: "h3",
        san: "h3"
      },
      {
        from: "h3",
        to: "h2",
        san: "h2"
      },
    ],
    responseMoves: ["gxh4", "Kd3", "Ke3"],
  },
  {
    fen: "1k6/1p1P1K2/p1p5/2P2n2/8/8/8/8 b - - 8 64",
    correctMoves: [
      {
        from: "b8",
        to: "c7",
        san: "Kc7"
      },
      {
        from: "f5",
        to: "g7",
        san: "Ng7+"
      },
    ],
    responseMoves: ["Ke8"],
  },
  {
    fen: "3q1rk1/5pp1/1p1p3p/p1n3b1/3NPB2/P3Q3/1P3PPP/2R3K1 b - - 0 23",
    correctMoves: [
      {
        from: "g5",
        to: "f4",
        san: "Bxf4"
      },
      {
        from: "c5",
        to: "d3",
        san: "Nd3"
      },
      {
        from: "d3",
        to: "c1",
        san: "Nxc1"
      },
    ],
    responseMoves: ["Qxf4", "Qe3"],
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
  }
  ,
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
  }
  ,
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
  }
  ,
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
  }
  ,
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
  }
  ,
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
  }
  ,
  {
    fen: "r1b5/3kr1P1/1pp5/8/1P6/P1Q2p1n/5P1P/R4K1R b - - 0 28",
    correctMoves: [
      {
        from: "c8",
        to: "a6",
        san: "Ba6+"
      },
      {
        from: "a6",
        to: "b5",
        san: "Bxb5+"
      },
    ],
    responseMoves: ["b5"],
  }
  ,
  {
    fen: "r4rk1/ppqb2pp/3b1pn1/2pPn2Q/8/1P2PN2/PB1PB1PP/RN3RK1 b - - 0 1",
    correctMoves: [
      {
        from: "d7",
        to: "g4",
        san: "Bg4"
      },
      {
        from: "g4",
        to: "h5",
        san: "Bxh5"
      },
      {
        from: "c7",
        to: "d6",
        san: "Qxd6"
      },
    ],
    responseMoves: ["Bxe5", "Bxd6"],
  }
  ,
  {
    fen: "1k1r4/ppp1p3/4B2b/5P1p/5p2/N1P4P/PP2K3/3R4 b - - 1 21",
    correctMoves: [
      {
        from: "f4",
        to: "f3",
        san: "f3+"
      },
      {
        from: "f3",
        to: "f2",
        san: "f2+"
      },
      {
        from: "d8",
        to: "d1",
        san: "Rxd1"
      },
    ],
    responseMoves: ["Ke1", "Kxf2"],
  }
  ,
  {
    fen: "r1bqkb1r/1pp2ppp/p1n5/1B1np3/Q7/2P2N2/PP1P1PPP/RNB1K2R w KQkq - 0 7",
    correctMoves: [
      {
        from: "b5",
        to: "c6",
        san: "Bxc6+"
      },
      {
        from: "a4",
        to: "c6",
        san: "Qxc6+"
      },
      {
        from: "c6",
        to: "d5",
        san: "Qxd5"
      },
    ],
    responseMoves: ["bxc6", "Bd7"],
  }
  ,
  {
    fen: "5r1k/pp2b1pp/2np4/3Qp3/2P5/1P4B1/P1q1B1PP/5RK1 w - - 5 21",
    correctMoves: [
      {
        from: "f1",
        to: "f8",
        san: "Rxf8+"
      },
      {
        from: "d5",
        to: "f7",
        san: "Qf7"
      },
      {
        from: "f7",
        to: "f8",
        san: "Qxf8+"
      },
    ],
    responseMoves: ["Bxf8", "h6"],
  }
  ,
  {
    fen: "r2r2k1/p1p3pp/1p2b3/4Pp2/5P2/q1P1B1P1/PQ5P/RR4K1 b - - 3 22",
    correctMoves: [
      {
        from: "d8",
        to: "d1",
        san: "Rd1+"
      },
      {
        from: "a3",
        to: "b2",
        san: "Qxb2+"
      },
      {
        from: "d1",
        to: "a1",
        san: "Rxd1"
      },
    ],
    responseMoves: ["Kf2", "Rxb2"],
  }
  ,
  {
    fen: "rr4k1/3q1pb1/4n1p1/3pP1P1/3P3Q/7R/pp1N1PK1/7R w - - 0 2",
    correctMoves: [
      {
        from: "h5",
        to: "h8",
        san: "Qh8+"
      },
      {
        from: "h3",
        to: "h8",
        san: "Rxh8+"
      },
      {
        from: "h1",
        to: "h7",
        san: "R1h7#"
      },
    ],
    responseMoves: ["Bxh8", "Kg7"],
  }
  ,
  {
    fen: "r5k1/pppbQ1pp/4p3/8/2N5/8/PPP1q3/5RK1 w - - 10 28",
    correctMoves: [
      {
        from: "e7",
        to: "f7",
        san: "Qf7+"
      },
      {
        from: "f7",
        to: "f8",
        san: "Qf8+"
      },
      {
        from: "f1",
        to: "f8",
        san: "Rxf8#"
      },
    ],
    responseMoves: ["Kh8", "Rxf8"],
  }
  ,
  {
    fen: "8/8/4p1K1/4k3/6p1/6P1/5P2/8 b - - 1 53",
    correctMoves: [
      {
        from: "e5",
        to: "e4",
        san: "Ke4"
      },
      {
        from: "e4",
        to: "f3",
        san: "Kf3"
      },
      {
        from: "f3",
        to: "f2",
        san: "Kxf2"
      },
      {
        from: "e6",
        to: "e5",
        san: "e5+"
      },
      {
        from: "e5",
        to: "e4",
        san: "e4"
      },
      {
        from: "e4",
        to: "e3",
        san: "e3"
      },
      {
        from: "e3",
        to: "e2",
        san: "e2"
      },
    ],
    responseMoves: ["Kf6", "Ke5", "Kf4", "Kxg4", "Kf4", "g4"],
  }
  ,
  {
    fen: "8/2P2p2/8/PR6/6pk/r7/6PK/8 b - - 0 45",
    correctMoves: [
      {
        from: "g4",
        to: "g3",
        san: "g3+"
      },
      {
        from: "a3",
        to: "a1",
        san: "Ra1+"
      },
      {
        from: "a1",
        to: "b1",
        san: "Rxb1#"
      }
    ],
    responseMoves: ["Kh1", "Rb1"],
  }
  ,
  {
    fen: "8/R7/3p1Rp1/3Pp2p/4P2k/4PK2/1r4P1/8 b - - 3 41",
    correctMoves: [
      {
        from: "g6",
        to: "g5",
        san: "g5"
      },
      {
        from: "h4",
        to: "h3",
        san: "Kh3"
      },
      {
        from: "g5",
        to: "g4",
        san: "g4+"
      },
      {
        from: "h5",
        to: "g4",
        san: "hxg4#"
      }
    ],
    responseMoves: ["g3+", "Rg7", "Rxg4"]
  }
  ,
  {
    fen: "r2q1rk1/1p1b1ppp/p7/3Nb3/B7/8/PP3PPP/R2Q1RK1 b - - 0 1",
    correctMoves: [
      {
        from: "d7",
        to: "a4",
        san: "Bxa4"
      },
      {
        from: "d8",
        to: "d5",
        san: "Qxd5"
      }
    ],
    responseMoves: [
      "Qxa4"
    ]
  },
  {
    fen: "rnbqk1nr/p5pp/1p1bp3/1p1pN3/3P4/2N2Q2/PPP2PPP/R1B1K2R w KQkq - 0 10",
    correctMoves: [
      {
        from: "f3",
        to: "f7",
        san: "Qf7#"
      }
    ],
    responseMoves: []
  }
  ,
  {
    fen: "5rk1/p3pp1p/2n3p1/5bN1/1P6/P2B1Q2/6PP/qN2K2R b K - 1 1",
    correctMoves: [
      {
        from: "c6",
        to: "e5",
        san: "Ne5"
      },
      {
        from: "e5",
        to: "f3",
        san: "Nxf3+"
      }
    ],
    responseMoves: [
      "Bxf5"
    ]
  },
  {
    fen: "2k5/pppr4/5KB1/8/2P2p2/1P3r2/P7/4R3 w - - 0 36",
    correctMoves: [
      {
        from: "e1",
        to: "e8",
        san: "Re8+"
      },
      {
        from: "g6",
        to: "f5",
        san: "Bf5+"
      },
      {
        from: "e8",
        to: "d8",
        san: "Rxd8#"
      }
    ],
    responseMoves: [
      "Rd8",
      "Kb8"
    ]
  }
  ,
  {
    fen: "5rk1/1R4p1/2p1p2p/2PpN1q1/1P1P2Pp/4P1nP/6PK/4Q3 b - - 0 37",
    correctMoves: [
      {
        from: "f8",
        to: "f1",
        san: "Rf1"
      },
      {
        from: "g8",
        to: "h7",
        san: "Kh7"
      },
      {
        from: "g3",
        to: "f1",
        san: "Nxf1+"
      }
    ],
    responseMoves: [
      "Rb8+",
      "Qxf1"
    ]
  },
  {
    fen: "5r1r/1pp1kB2/p2p3p/6p1/1P6/PQ1R4/1KP2q1P/8 w - - 4 32",
    correctMoves: [
      {
        from: "b3",
        to: "e6",
        san: "Qe6+"
      },
      {
        from: "d3",
        to: "d6",
        san: "Rxd6+"
      },
      {
        from: "e6",
        to: "d6",
        san: "Qxd6+"
      },
      {
        from: "f7",
        to: "e6",
        san: "Be6#"
      }
    ],
    responseMoves: [
      "Kd8",
      "cxd6",
      "Kc8"
    ]
  },
  {
    fen: "2R2b2/4kp1p/3p2r1/3P3p/1P2P3/P3BPrP/8/2R4K b - - 5 40",
    correctMoves: [
      {
        from: "g3",
        to: "h3",
        san: "Rxh3#"
      }
    ],
    responseMoves: []
  },
  {
    fen: "3r2r1/1p3kp1/p4p2/7Q/PB6/8/1q3PPP/3RK2R b K - 7 29",
    correctMoves: [
      {
        from: "g7",
        to: "g6",
        san: "g6"
      },
      {
        from: "g8",
        to: "g7",
        san: "Rg7"
      },
      {
        from: "f7",
        to: "g7",
        san: "Kxg7"
      },
      {
        from: "d8",
        to: "d1",
        san: "Rxd1"
      }
    ],
    responseMoves: [
      "Qh7+",
      "Qxg7+",
      "0-0"
    ]
  }
  ,
  {
    fen: "rnbqkb1r/ppp2ppp/3p4/3Pp3/2P1n3/5P2/PP4PP/RNBQKBNR b KQkq c3 0 5",
    correctMoves: [
      {
        from: "d8",
        to: "h4",
        san: "Qh4+"
      },
      {
        from: "e4",
        to: "g3",
        san: "Nxg3"
      },
      {
        from: "h4",
        to: "h1",
        san: "Qxh1"
      },
    ],
    responseMoves: ["g3", "hxg3"],
  },
  {
    fen: "Q7/p1ppkp1p/2n5/8/3P4/2q3P1/P2NKP1P/5B1R b - - 0 17",
    correctMoves: [
      {
        from: "c6",
        to: "d4",
        san: "Nxd4+"
      },
      {
        from: "c3",
        to: "c2",
        san: "Qc2+"
      },
      {
        from: "c2",
        to: "c1",
        san: "Qc1#"
      },
    ],
    responseMoves: ["Kd1", "Ke1"],
  },
  {
    fen: "3r3k/3r3p/pR4p1/4pb2/NP4P1/2P1n2P/P3BR2/2K5 b - b3 0 28",
    correctMoves: [
      {
        from: "d7",
        to: "d1",
        san: "Rd1+"
      },
      {
        from: "d8",
        to: "d1",
        san: "Rxd1+"
      },
      {
        from: "d1",
        to: "b1",
        san: "Rb1+"
      },
      {
        from: "e3",
        to: "c4",
        san: "Nc4#"
      },
    ],
    responseMoves: ["Bxd1", "Kb2", "Ka3"],
  },
  {
    fen: "r1b1kb1r/1pp1q1pp/p1np1p1n/1B1Q4/4P3/2P1BN2/PP3PPP/RN2K2R w KQkq - 0 10",
    correctMoves: [
      {
        from: "b5",
        to: "c6",
        san: "Bxc6+"
      },
      {
        from: "d5",
        to: "c6",
        san: "Qxc6+"
      },
      {
        from: "c6",
        to: "a8",
        san: "Qxa8++"
      },
    ],
    responseMoves: ["bxc6", "Qd7"],
  },
  {
    fen: "rn2kb1r/p1p2ppp/b4n2/1q1Pp1N1/1p1P4/1QP2P2/PPB3PP/RNB1K2R b KQkq - 0 11",
    correctMoves: [
      {
        from: "b5",
        to: "e2",
        san: "Qe2#"
      },
    ],
    responseMoves: [],
  },
  {
    fen: "r3kbQ1/5p2/b3q2N/3prN2/1p6/5P2/1PP1p1PP/R2R3K w - - 0 31",
    correctMoves: [
      {
        from: "f5",
        to: "g7",
        san: "Ng7+"
      },
      {
        from: "g7",
        to: "e6",
        san: "Nxe6"
      },
      {
        from: "a1",
        to: "d1",
        san: "Rxd1"
      },
    ],
    responseMoves: ["Kd7", "exd1=Q+"],
  },
  {
    fen: "8/8/2R1k3/5pp1/8/3PKP1P/r7/8 b - - 4 40",
    correctMoves: [
      {
        from: "e6",
        to: "d5",
        san: "Kd5"
      },
      {
        from: "f5",
        to: "f4",
        san: "f4+"
      },
      {
        from: "g5",
        to: "f4",
        san: "gxf4+"
      },
    ],
    responseMoves: ["Rc4", "Rxf4"],
  },
  {
    fen: "1r6/8/p1Bp4/P1p1p1k1/1pP1PpP1/3P3R/1r6/5KR1 b - - 3 38",
    correctMoves: [
      {
        from: "b2",
        to: "b1",
        san: "Rb1+"
      },
      {
        from: "b1",
        to: "g1",
        san: "Rxg1"
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
    ],
    responseMoves: ["Kf2", "Kxg1", "Rh1"],
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
    fen: "4rk2/1p5p/1b5p/1p1pNp1P/1P3P2/P5P1/6K1/4R3 w - - 1 35",
    correctMoves: [
      {
        from: "e5",
        to: "d7",
        san: "Nd7+"
      },
      {
        from: "e1",
        to: "e8",
        san: "Rxe8"
      },
      {
        from: "d7",
        to: "b6",
        san: "Nxb6"
      },
    ],
    responseMoves: ["Kf7", "Kxe8"],
  },
  {
    fen: "rnbqkb1r/ppp3pp/3p2n1/4pQ2/2B1P3/8/PPPP1PPP/RNB1K2R w KQkq - 0 7",
    correctMoves: [
      {
        from: "f5",
        to: "f7",
        san: "Qf7#"
      },
    ],
    responseMoves: [],
  },
  {
    fen: "Rn2r1k1/2pb1ppp/8/2B5/1P6/6P1/2P2P1P/3NR1K1 b - - 2 26",
    correctMoves: [
      {
        from: "e8",
        to: "e1",
        san: "Rxe1+"
      },
      {
        from: "d7",
        to: "c6",
        san: "Bc6+"
      },
      {
        from: "c6",
        to: "a8",
        san: "Bxa8"
      },
    ],
    responseMoves: ["Kg2", "Kh3"],
  },
  {
    fen: "8/5pkp/1rq3p1/3pP3/7Q/b3B1P1/5PKP/8 w - - 0 2",
    correctMoves: [
      {
        from: "e3",
        to: "h6",
        san: "Bh6+"
      },
      {
        from: "h4",
        to: "d8",
        san: "Qd8+"
      },
      {
        from: "d8",
        to: "e8",
        san: "Qxe8+"
      },
    ],
    responseMoves: ["Kg8", "Qe8"],
  },
  {
    fen: "1k2rr2/1pp5/p7/3P4/8/6Q1/P4qPP/3RR2K b - - 3 25",
    correctMoves: [
      {
        from: "e8",
        to: "e1",
        san: "Rxe1+"
      },
      {
        from: "f2",
        to: "f1",
        san: "Qf1+"
      },
      {
        from: "f8",
        to: "f1",
        san: "Rxf1#"
      },
    ],
    responseMoves: ["Rxe1", "Rxf1"],
  },
  {
    fen: "rnbqk2r/ppp2ppp/5n2/3P4/1bPPpP2/2N5/PP4PP/R1BQKBNR w KQkq - 1 2",
    correctMoves: [
      {
        from: "d1",
        to: "a4",
        san: "Qa4+"
      },
      {
        from: "a4",
        to: "b4",
        san: "Qxb4"
      },
    ],
    responseMoves: ["c6"],
  },
  {
    fen: "8/3R1R1p/r1r3p1/6k1/6P1/5K1P/8/8 w - - 1 48",
    correctMoves: [
      {
        from: "d7",
        to: "d5",
        san: "Rd5+"
      },
      {
        from: "g4",
        to: "g5",
        san: "g5+"
      },
      {
        from: "f7",
        to: "h7",
        san: "Rxh7#"
      },
    ],
    responseMoves: ["Kh6", "Kh5"],
  },
  {
    fen: "8/p7/1p2pk1p/1P6/P3KPP1/8/8/8 w - - 1 2",
    correctMoves: [
      {
        from: "g4",
        to: "g5",
        san: "g5+"
      },
      {
        from: "f4",
        to: "g5",
        san: "fxg5+"
      },
      {
        from: "e4",
        to: "e5",
        san: "Ke5"
      },
    ],
    responseMoves: ["hxg5", "Kxg5"],
  },
  {
    fen: "1r3k2/2q4Q/n4pB1/1ppPp1p1/2P3P1/1P5P/6K1/8 w - - 1 2",
    correctMoves: [
      {
        from: "h7",
        to: "h8",
        san: "Qh8+"
      },
      {
        from: "h8",
        to: "g7",
        san: "Qg7+"
      },
      {
        from: "g7",
        to: "f6",
        san: "Qxf6+"
      },
    ],
    responseMoves: ["Ke7", "Kd6"],
  },
  {
    fen: "5r2/1p3pk1/p3p1p1/6Q1/P3bP1P/1B6/1PP2qP1/3R3K w - - 1 30",
    correctMoves: [
      {
        from: "g5",
        to: "e5",
        san: "Qe5+"
      },
      {
        from: "e5",
        to: "e4",
        san: "Qxe4"
      },
      {
        from: "h1",
        to: "g1",
        san: "Kg1"
      },
    ],
    responseMoves: ["Kh7", "Qxh4+"],
  },
  {
    fen: "4Rnk1/3q1pb1/3p2p1/3P4/PQbP2P1/5P2/P4BK1/8 w - - 1 2",
    correctMoves: [
      {
        from: "e8",
        to: "f8",
        san: "Rxf8+"
      },
      {
        from: "b4",
        to: "c4",
        san: "Qxc4"
      },
    ],
    responseMoves: ["Bxf8"],
  },
  {
    fen: "4r2r/p6Q/2p3p1/5pk1/3q4/3B2P1/2P2RK1/8 w - - 3 34",
    correctMoves: [
      {
        from: "f2",
        to: "f5",
        san: "Rxf5+"
      },
      {
        from: "h7",
        to: "f5",
        san: "Qxf5+"
      },
      {
        from: "f5",
        to: "g6",
        san: "Qg6#"
      },
    ],
    responseMoves: ["gxf5", "Kh6"],
  },
  {
    fen: "Q7/4k1p1/5pp1/p2pp1n1/P7/4q1P1/BP5P/1R3R1K b - - 0 29",
    correctMoves: [
      {
        from: "e3",
        to: "e4",
        san: "Qe4+"
      },
      {
        from: "e4",
        to: "f3",
        san: "Qxf3+"
      },
      {
        from: "g5",
        to: "h3",
        san: "Nh3#"
      },
    ],
    responseMoves: ["Rf3", "Kg1"],
  },
  {
    fen: "2kr2nr/p1p3pp/8/2p1n3/2B5/8/PPP2PPP/R2R2K1 w - - 0 15",
    correctMoves: [
      {
        from: "c4",
        to: "a6",
        san: "Ba6+"
      },
      {
        from: "d1",
        to: "d8",
        san: "Rxd8#"
      },
    ],
    responseMoves: ["Kb8"],
  },
  {
    fen: "3r3r/5p1k/2R1pPp1/p7/3R1Pp1/8/Pq2bQ1P/6K1 w - - 1 31",
    correctMoves: [
      {
        from: "f2",
        to: "h4",
        san: "Qh4+"
      },
      {
        from: "d4",
        to: "d8",
        san: "Rxd8#"
      },
    ],
    responseMoves: ["Kg8"],
  },
  {
    fen: "8/8/r3Rp2/1k1p1P2/1p1P4/2pK4/2P5/8 b - - 1 1",
    correctMoves: [
      {
        from: "a6",
        to: "e6",
        san: "Rxe6"
      },
      {
        from: "b5",
        to: "c6",
        san: "Kc6"
      },
      {
        from: "c6",
        to: "d7",
        san: "Kd7"
      },
    ],
    responseMoves: ["fxe6", "e7"],
  },
  {
    fen: "rnb2rk1/ppp2ppp/8/8/3q4/3B4/PPP2PPP/R2Q1RK1 w - - 0 2",
    correctMoves: [
      {
        from: "d3",
        to: "h7",
        san: "Bxh7+"
      },
      {
        from: "d1",
        to: "d4",
        san: "Qxd4"
      },
    ],
    responseMoves: ["Kxh7"],
  },
  {
    fen: "3B4/8/4b1pp/4pk2/B4b1P/5P2/5K2/8 w - - 4 37",
    correctMoves: [
      {
        from: "a4",
        to: "c2",
        san: "Bc2+"
      },
      {
        from: "c2",
        to: "e4",
        san: "Bxe4+"
      },
      {
        from: "d8",
        to: "c7",
        san: "Bc7+"
      },
      {
        from: "c7",
        to: "f4",
        san: "Bxf4"
      },
    ],
    responseMoves: ["e4", "Ke5", "Kf6"],
  },
  {
    fen: "3r1rk1/p1p2ppp/8/2b5/3q4/2N1B3/PPK1R1Q1/R7 b - - 15 31",
    correctMoves: [
      {
        from: "d4",
        to: "d3",
        san: "Qd3+"
      },
      {
        from: "c5",
        to: "e3",
        san: "Bxe3+"
      },
      {
        from: "d3",
        to: "e3",
        san: "Qxe3+"
      },
    ],
    responseMoves: ["Kc1", "Rxe3"],
  },
  {
    fen: "r5k1/2p2ppp/3p4/R3q3/4P3/8/3Q1PPP/R5K1 b - - 0 27",
    correctMoves: [
      {
        from: "e5",
        to: "a1",
        san: "Qxa1+"
      },
      {
        from: "a8",
        to: "a1",
        san: "Rxa1+"
      },
      {
        from: "a1",
        to: "d1",
        san: "Rxd1#"
      },
    ],
    responseMoves: ["Rxa1", "Qd1"],
  },
  {
    fen: "1k6/pp3N2/6p1/2Rp1b2/3P4/BP2q3/P3B2r/2RK4 w - - 0 30",
    correctMoves: [
      {
        from: "c5",
        to: "c8",
        san: "Rc8+"
      },
      {
        from: "a3",
        to: "d6",
        san: "Bd6+"
      },
      {
        from: "c1",
        to: "c8",
        san: "Rxc8#"
      },
    ],
    responseMoves: ["Bxc8", "Ka8"],
  },
  {
    fen: "r1bqkb1r/p1p2ppp/2pp4/8/2B1nP2/3P4/PPP3PP/RNBQK2R b KQkq - 0 7",
    correctMoves: [
      {
        from: "d8",
        to: "h4",
        san: "Qh4+"
      },
      {
        from: "e4",
        to: "g3",
        san: "Nxg3"
      },
      {
        from: "h4",
        to: "h1",
        san: "Qxh1+"
      },
    ],
    responseMoves: ["g3", "hxg3"],
  },
  {
    fen: "k2r1b2/p2r1ppp/2p5/3NP3/5Pn1/3R4/P1P3P1/1R3K2 w - - 2 25",
    correctMoves: [
      {
        from: "d5",
        to: "c7",
        san: "Nc7+"
      },
      {
        from: "d3",
        to: "d8",
        san: "Rxd8+"
      },
      {
        from: "d8",
        to: "c8",
        san: "Rxc8#"
      },
    ],
    responseMoves: ["Rxc7", "Rc8"],
  },
  {
    fen: "2rr2k1/pp3ppp/3qp3/4Nbb1/1n1P4/P1N1P2P/1P1QB1P1/2RR2K1 b - - 0 1",
    correctMoves: [
      {
        from: "d6",
        to: "e5",
        san: "Qxe5"
      },
      {
        from: "d8",
        to: "d2",
        san: "Rxd2"
      },
      {
        from: "g5",
        to: "e3",
        san: "Bxe3+"
      },
    ],
    responseMoves: ["dxe5", "Rxd2"],
  },
  {
    fen: "r6r/p7/2P2pkp/4pRp1/2P1Qb1q/2P5/P2N2PP/R2K4 b - - 2 23",
    correctMoves: [
      {
        from: "h4",
        to: "g4",
        san: "Qg4+"
      },
      {
        from: "g4",
        to: "f5",
        san: "Qxf5"
      },
      {
        from: "g6",
        to: "f5",
        san: "Kxf5"
      },
    ],
    responseMoves: ["Kc2", "Qxf5"],
  },
  {
    fen: "2kr1bnr/pbpp2qp/1p2pp2/4N3/P6B/2NP4/1PP1BPPP/R2Q1RK1 b - - 0 11",
    correctMoves: [
      {
        from: "g7",
        to: "g2",
        san: "Qxg2#"
      },
    ],
    responseMoves: [],
  },
  {
    fen: "r2q1knr/ppp2ppp/2np4/1B6/3bP3/5Q2/PP3PPP/RNBR2K1 w - - 1 2",
    correctMoves: [
      {
        from: "b5",
        to: "c6",
        san: "Bxc6"
      },
      {
        from: "d1",
        to: "d4",
        san: "Rxd4"
      },
    ],
    responseMoves: ["bxc6"],
  },
  {
    fen: "r6k/1pp2p2/2b1p3/1p5p/1b2qP2/7Q/PP4RP/7K w - - 0 29",
    correctMoves: [
      {
        from: "h3",
        to: "h5",
        san: "Qxh5+"
      },
      {
        from: "h5",
        to: "e5",
        san: "Qe5+"
      },
      {
        from: "e5",
        to: "f6",
        san: "Qxf6+"
      },
      {
        from: "f6",
        to: "g7",
        san: "Qxg7#"
      },
    ],
    responseMoves: ["Qh7", "f6", "Qg7"],
  },
  {
    fen: "rn1qk1nr/pbp2ppp/1p2p3/8/2BP4/P1P1P3/5PPP/R1BQK1NR b KQkq - 0 1",
    correctMoves: [
      {
        from: "b7",
        to: "g2",
        san: "Bxg2"
      },
      {
        from: "g2",
        to: "h1",
        san: "Bxh1"
      },
      {
        from: "d8",
        to: "f6",
        san: "Qf6"
      },
    ],
    responseMoves: ["Qg4", "Qxg7"],
  },
  {
    fen: "7k/p3b1p1/1pQ4p/2P1p3/4Pp2/P4q2/1P3rRB/7K w - - 0 34",
    correctMoves: [
      {
        from: "c6",
        to: "e8",
        san: "Qe8+"
      },
      {
        from: "e8",
        to: "g6",
        san: "Qg6+"
      },
      {
        from: "g6",
        to: "g7",
        san: "Qxg7#"
      },
    ],
    responseMoves: ["Kh7", "Kg8"],
  },
  {
    fen: "4kbnr/pp2p1pp/1q1rB3/8/6P1/4QP2/P2B1K1P/3RR3 b k - 1 1",
    correctMoves: [
      {
        from: "d6",
        to: "e6",
        san: "Rxe6"
      },
      {
        from: "e6",
        to: "b6",
        san: "Rxb6"
      },
    ],
    responseMoves: ["Qxb6"],
  },
  {
    fen: "rn2k2r/pp2bppp/2pB4/5p2/q2P4/1PP2P2/2K1Q1PP/3R2NR b kq - 0 15",
    correctMoves: [
      {
        from: "a4",
        to: "a2",
        san: "Qa2+"
      },
      {
        from: "a2",
        to: "e2",
        san: "Qxe2+"
      },
      {
        from: "e7",
        to: "d6",
        san: "Bxd6+"
      },
    ],
    responseMoves: ["Kd3", "Kxe2"],
  },
  {
    fen: "6rk/p4p1p/1p1pbPpQ/4b3/2PqP3/PR3R2/4B1PP/7K w - - 1 2",
    correctMoves: [
      {
        from: "h6",
        to: "h7",
        san: "Qxh7+"
      },
      {
        from: "f3",
        to: "h3",
        san: "Rh3+"
      },
      {
        from: "b3",
        to: "h3",
        san: "Rxh3#"
      },
    ],
    responseMoves: ["Kxh7", "Bxh3"],
  },
  {
    fen: "6k1/5p2/8/6pp/4P3/5PP1/P1K5/8 b - - 1 49",
    correctMoves: [
      {
        from: "h5",
        to: "h4",
        san: "h4"
      },
      {
        from: "g5",
        to: "h4",
        san: "gxh4"
      },
      {
        from: "h4",
        to: "h3",
        san: "h3"
      },
      {
        from: "h3",
        to: "h2",
        san: "h2"
      },
    ],
    responseMoves: ["gxh4", "Kd3", "Ke3"],
  },
  {
    fen: "1k6/1p1P1K2/p1p5/2P2n2/8/8/8/8 b - - 8 64",
    correctMoves: [
      {
        from: "b8",
        to: "c7",
        san: "Kc7"
      },
      {
        from: "f5",
        to: "g7",
        san: "Ng7+"
      },
    ],
    responseMoves: ["Ke8"],
  },
  {
    fen: "3q1rk1/5pp1/1p1p3p/p1n3b1/3NPB2/P3Q3/1P3PPP/2R3K1 b - - 0 23",
    correctMoves: [
      {
        from: "g5",
        to: "f4",
        san: "Bxf4"
      },
      {
        from: "c5",
        to: "d3",
        san: "Nd3"
      },
      {
        from: "d3",
        to: "c1",
        san: "Nxc1"
      },
    ],
    responseMoves: ["Qxf4", "Qe3"],
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
  }
  ,
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
  }
  ,
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
  }
  ,
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
  }
  ,
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
  }
  ,
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
  }
  ,
  {
    fen: "r1b5/3kr1P1/1pp5/8/1P6/P1Q2p1n/5P1P/R4K1R b - - 0 28",
    correctMoves: [
      {
        from: "c8",
        to: "a6",
        san: "Ba6+"
      },
      {
        from: "a6",
        to: "b5",
        san: "Bxb5+"
      },
    ],
    responseMoves: ["b5"],
  }
  ,
  {
    fen: "r4rk1/ppqb2pp/3b1pn1/2pPn2Q/8/1P2PN2/PB1PB1PP/RN3RK1 b - - 0 1",
    correctMoves: [
      {
        from: "d7",
        to: "g4",
        san: "Bg4"
      },
      {
        from: "g4",
        to: "h5",
        san: "Bxh5"
      },
      {
        from: "c7",
        to: "d6",
        san: "Qxd6"
      },
    ],
    responseMoves: ["Bxe5", "Bxd6"],
  }
  ,
  {
    fen: "1k1r4/ppp1p3/4B2b/5P1p/5p2/N1P4P/PP2K3/3R4 b - - 1 21",
    correctMoves: [
      {
        from: "f4",
        to: "f3",
        san: "f3+"
      },
      {
        from: "f3",
        to: "f2",
        san: "f2+"
      },
      {
        from: "d8",
        to: "d1",
        san: "Rxd1"
      },
    ],
    responseMoves: ["Ke1", "Kxf2"],
  }
  ,
  {
    fen: "r1bqkb1r/1pp2ppp/p1n5/1B1np3/Q7/2P2N2/PP1P1PPP/RNB1K2R w KQkq - 0 7",
    correctMoves: [
      {
        from: "b5",
        to: "c6",
        san: "Bxc6+"
      },
      {
        from: "a4",
        to: "c6",
        san: "Qxc6+"
      },
      {
        from: "c6",
        to: "d5",
        san: "Qxd5"
      },
    ],
    responseMoves: ["bxc6", "Bd7"],
  }
  ,
  {
    fen: "5r1k/pp2b1pp/2np4/3Qp3/2P5/1P4B1/P1q1B1PP/5RK1 w - - 5 21",
    correctMoves: [
      {
        from: "f1",
        to: "f8",
        san: "Rxf8+"
      },
      {
        from: "d5",
        to: "f7",
        san: "Qf7"
      },
      {
        from: "f7",
        to: "f8",
        san: "Qxf8+"
      },
    ],
    responseMoves: ["Bxf8", "h6"],
  }
  ,
  {
    fen: "r2r2k1/p1p3pp/1p2b3/4Pp2/5P2/q1P1B1P1/PQ5P/RR4K1 b - - 3 22",
    correctMoves: [
      {
        from: "d8",
        to: "d1",
        san: "Rd1+"
      },
      {
        from: "a3",
        to: "b2",
        san: "Qxb2+"
      },
      {
        from: "d1",
        to: "a1",
        san: "Rxd1"
      },
    ],
    responseMoves: ["Kf2", "Rxb2"],
  }
  ,
  {
    fen: "rr4k1/3q1pb1/4n1p1/3pP1P1/3P3Q/7R/pp1N1PK1/7R w - - 0 2",
    correctMoves: [
      {
        from: "h5",
        to: "h8",
        san: "Qh8+"
      },
      {
        from: "h3",
        to: "h8",
        san: "Rxh8+"
      },
      {
        from: "h1",
        to: "h7",
        san: "R1h7#"
      },
    ],
    responseMoves: ["Bxh8", "Kg7"],
  }
  ,
  {
    fen: "r5k1/pppbQ1pp/4p3/8/2N5/8/PPP1q3/5RK1 w - - 10 28",
    correctMoves: [
      {
        from: "e7",
        to: "f7",
        san: "Qf7+"
      },
      {
        from: "f7",
        to: "f8",
        san: "Qf8+"
      },
      {
        from: "f1",
        to: "f8",
        san: "Rxf8#"
      },
    ],
    responseMoves: ["Kh8", "Rxf8"],
  }
  ,
  {
    fen: "8/8/4p1K1/4k3/6p1/6P1/5P2/8 b - - 1 53",
    correctMoves: [
      {
        from: "e5",
        to: "e4",
        san: "Ke4"
      },
      {
        from: "e4",
        to: "f3",
        san: "Kf3"
      },
      {
        from: "f3",
        to: "f2",
        san: "Kxf2"
      },
      {
        from: "e6",
        to: "e5",
        san: "e5+"
      },
      {
        from: "e5",
        to: "e4",
        san: "e4"
      },
      {
        from: "e4",
        to: "e3",
        san: "e3"
      },
      {
        from: "e3",
        to: "e2",
        san: "e2"
      },
    ],
    responseMoves: ["Kf6", "Ke5", "Kf4", "Kxg4", "Kf4", "g4"],
  }
  ,
  {
    fen: "8/2P2p2/8/PR6/6pk/r7/6PK/8 b - - 0 45",
    correctMoves: [
      {
        from: "g4",
        to: "g3",
        san: "g3+"
      },
      {
        from: "a3",
        to: "a1",
        san: "Ra1+"
      },
      {
        from: "a1",
        to: "b1",
        san: "Rxb1#"
      }
    ],
    responseMoves: ["Kh1", "Rb1"],
  }
  ,
  {
    fen: "8/R7/3p1Rp1/3Pp2p/4P2k/4PK2/1r4P1/8 b - - 3 41",
    correctMoves: [
      {
        from: "g6",
        to: "g5",
        san: "g5"
      },
      {
        from: "h4",
        to: "h3",
        san: "Kh3"
      },
      {
        from: "g5",
        to: "g4",
        san: "g4+"
      },
      {
        from: "h5",
        to: "g4",
        san: "hxg4#"
      }
    ],
    responseMoves: ["g3+", "Rg7", "Rxg4"]
  }
  ,
  {
    fen: "r2q1rk1/1p1b1ppp/p7/3Nb3/B7/8/PP3PPP/R2Q1RK1 b - - 0 1",
    correctMoves: [
      {
        from: "d7",
        to: "a4",
        san: "Bxa4"
      },
      {
        from: "d8",
        to: "d5",
        san: "Qxd5"
      }
    ],
    responseMoves: [
      "Qxa4"
    ]
  },
  {
    fen: "rnbqk1nr/p5pp/1p1bp3/1p1pN3/3P4/2N2Q2/PPP2PPP/R1B1K2R w KQkq - 0 10",
    correctMoves: [
      {
        from: "f3",
        to: "f7",
        san: "Qf7#"
      }
    ],
    responseMoves: []
  }
  ,
  {
    fen: "5rk1/p3pp1p/2n3p1/5bN1/1P6/P2B1Q2/6PP/qN2K2R b K - 1 1",
    correctMoves: [
      {
        from: "c6",
        to: "e5",
        san: "Ne5"
      },
      {
        from: "e5",
        to: "f3",
        san: "Nxf3+"
      }
    ],
    responseMoves: [
      "Bxf5"
    ]
  },
  {
    fen: "2k5/pppr4/5KB1/8/2P2p2/1P3r2/P7/4R3 w - - 0 36",
    correctMoves: [
      {
        from: "e1",
        to: "e8",
        san: "Re8+"
      },
      {
        from: "g6",
        to: "f5",
        san: "Bf5+"
      },
      {
        from: "e8",
        to: "d8",
        san: "Rxd8#"
      }
    ],
    responseMoves: [
      "Rd8",
      "Kb8"
    ]
  }
  ,
  {
    fen: "5rk1/1R4p1/2p1p2p/2PpN1q1/1P1P2Pp/4P1nP/6PK/4Q3 b - - 0 37",
    correctMoves: [
      {
        from: "f8",
        to: "f1",
        san: "Rf1"
      },
      {
        from: "g8",
        to: "h7",
        san: "Kh7"
      },
      {
        from: "g3",
        to: "f1",
        san: "Nxf1+"
      }
    ],
    responseMoves: [
      "Rb8+",
      "Qxf1"
    ]
  },
  {
    fen: "5r1r/1pp1kB2/p2p3p/6p1/1P6/PQ1R4/1KP2q1P/8 w - - 4 32",
    correctMoves: [
      {
        from: "b3",
        to: "e6",
        san: "Qe6+"
      },
      {
        from: "d3",
        to: "d6",
        san: "Rxd6+"
      },
      {
        from: "e6",
        to: "d6",
        san: "Qxd6+"
      },
      {
        from: "f7",
        to: "e6",
        san: "Be6#"
      }
    ],
    responseMoves: [
      "Kd8",
      "cxd6",
      "Kc8"
    ]
  },
  {
    fen: "2R2b2/4kp1p/3p2r1/3P3p/1P2P3/P3BPrP/8/2R4K b - - 5 40",
    correctMoves: [
      {
        from: "g3",
        to: "h3",
        san: "Rxh3#"
      }
    ],
    responseMoves: []
  },
  {
    fen: "3r2r1/1p3kp1/p4p2/7Q/PB6/8/1q3PPP/3RK2R b K - 7 29",
    correctMoves: [
      {
        from: "g7",
        to: "g6",
        san: "g6"
      },
      {
        from: "g8",
        to: "g7",
        san: "Rg7"
      },
      {
        from: "f7",
        to: "g7",
        san: "Kxg7"
      },
      {
        from: "d8",
        to: "d1",
        san: "Rxd1"
      }
    ],
    responseMoves: [
      "Qh7+",
      "Qxg7+",
      "0-0"
    ]
  }
  ,
  {
    fen: "rnbqkb1r/ppp2ppp/3p4/3Pp3/2P1n3/5P2/PP4PP/RNBQKBNR b KQkq c3 0 5",
    correctMoves: [
      {
        from: "d8",
        to: "h4",
        san: "Qh4+"
      },
      {
        from: "e4",
        to: "g3",
        san: "Nxg3"
      },
      {
        from: "h4",
        to: "h1",
        san: "Qxh1"
      },
    ],
    responseMoves: ["g3", "hxg3"],
  },
  {
    fen: "Q7/p1ppkp1p/2n5/8/3P4/2q3P1/P2NKP1P/5B1R b - - 0 17",
    correctMoves: [
      {
        from: "c6",
        to: "d4",
        san: "Nxd4+"
      },
      {
        from: "c3",
        to: "c2",
        san: "Qc2+"
      },
      {
        from: "c2",
        to: "c1",
        san: "Qc1#"
      },
    ],
    responseMoves: ["Kd1", "Ke1"],
  },
  {
    fen: "3r3k/3r3p/pR4p1/4pb2/NP4P1/2P1n2P/P3BR2/2K5 b - b3 0 28",
    correctMoves: [
      {
        from: "d7",
        to: "d1",
        san: "Rd1+"
      },
      {
        from: "d8",
        to: "d1",
        san: "Rxd1+"
      },
      {
        from: "d1",
        to: "b1",
        san: "Rb1+"
      },
      {
        from: "e3",
        to: "c4",
        san: "Nc4#"
      },
    ],
    responseMoves: ["Bxd1", "Kb2", "Ka3"],
  },
  {
    fen: "r1b1kb1r/1pp1q1pp/p1np1p1n/1B1Q4/4P3/2P1BN2/PP3PPP/RN2K2R w KQkq - 0 10",
    correctMoves: [
      {
        from: "b5",
        to: "c6",
        san: "Bxc6+"
      },
      {
        from: "d5",
        to: "c6",
        san: "Qxc6+"
      },
      {
        from: "c6",
        to: "a8",
        san: "Qxa8++"
      },
    ],
    responseMoves: ["bxc6", "Qd7"],
  },
  {
    fen: "rn2kb1r/p1p2ppp/b4n2/1q1Pp1N1/1p1P4/1QP2P2/PPB3PP/RNB1K2R b KQkq - 0 11",
    correctMoves: [
      {
        from: "b5",
        to: "e2",
        san: "Qe2#"
      },
    ],
    responseMoves: [],
  },
  {
    fen: "r3kbQ1/5p2/b3q2N/3prN2/1p6/5P2/1PP1p1PP/R2R3K w - - 0 31",
    correctMoves: [
      {
        from: "f5",
        to: "g7",
        san: "Ng7+"
      },
      {
        from: "g7",
        to: "e6",
        san: "Nxe6"
      },
      {
        from: "a1",
        to: "d1",
        san: "Rxd1"
      },
    ],
    responseMoves: ["Kd7", "exd1=Q+"],
  },
  {
    fen: "8/8/2R1k3/5pp1/8/3PKP1P/r7/8 b - - 4 40",
    correctMoves: [
      {
        from: "e6",
        to: "d5",
        san: "Kd5"
      },
      {
        from: "f5",
        to: "f4",
        san: "f4+"
      },
      {
        from: "g5",
        to: "f4",
        san: "gxf4+"
      },
    ],
    responseMoves: ["Rc4", "Rxf4"],
  },
  {
    fen: "1r6/8/p1Bp4/P1p1p1k1/1pP1PpP1/3P3R/1r6/5KR1 b - - 3 38",
    correctMoves: [
      {
        from: "b2",
        to: "b1",
        san: "Rb1+"
      },
      {
        from: "b1",
        to: "g1",
        san: "Rxg1"
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
    ],
    responseMoves: ["Kf2", "Kxg1", "Rh1"],
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
    fen: "4rk2/1p5p/1b5p/1p1pNp1P/1P3P2/P5P1/6K1/4R3 w - - 1 35",
    correctMoves: [
      {
        from: "e5",
        to: "d7",
        san: "Nd7+"
      },
      {
        from: "e1",
        to: "e8",
        san: "Rxe8"
      },
      {
        from: "d7",
        to: "b6",
        san: "Nxb6"
      },
    ],
    responseMoves: ["Kf7", "Kxe8"],
  },
  {
    fen: "rnbqkb1r/ppp3pp/3p2n1/4pQ2/2B1P3/8/PPPP1PPP/RNB1K2R w KQkq - 0 7",
    correctMoves: [
      {
        from: "f5",
        to: "f7",
        san: "Qf7#"
      },
    ],
    responseMoves: [],
  },
  {
    fen: "Rn2r1k1/2pb1ppp/8/2B5/1P6/6P1/2P2P1P/3NR1K1 b - - 2 26",
    correctMoves: [
      {
        from: "e8",
        to: "e1",
        san: "Rxe1+"
      },
      {
        from: "d7",
        to: "c6",
        san: "Bc6+"
      },
      {
        from: "c6",
        to: "a8",
        san: "Bxa8"
      },
    ],
    responseMoves: ["Kg2", "Kh3"],
  },
  {
    fen: "8/5pkp/1rq3p1/3pP3/7Q/b3B1P1/5PKP/8 w - - 0 2",
    correctMoves: [
      {
        from: "e3",
        to: "h6",
        san: "Bh6+"
      },
      {
        from: "h4",
        to: "d8",
        san: "Qd8+"
      },
      {
        from: "d8",
        to: "e8",
        san: "Qxe8+"
      },
    ],
    responseMoves: ["Kg8", "Qe8"],
  },
  {
    fen: "1k2rr2/1pp5/p7/3P4/8/6Q1/P4qPP/3RR2K b - - 3 25",
    correctMoves: [
      {
        from: "e8",
        to: "e1",
        san: "Rxe1+"
      },
      {
        from: "f2",
        to: "f1",
        san: "Qf1+"
      },
      {
        from: "f8",
        to: "f1",
        san: "Rxf1#"
      },
    ],
    responseMoves: ["Rxe1", "Rxf1"],
  },
  {
    fen: "rnbqk2r/ppp2ppp/5n2/3P4/1bPPpP2/2N5/PP4PP/R1BQKBNR w KQkq - 1 2",
    correctMoves: [
      {
        from: "d1",
        to: "a4",
        san: "Qa4+"
      },
      {
        from: "a4",
        to: "b4",
        san: "Qxb4"
      },
    ],
    responseMoves: ["c6"],
  },
  {
    fen: "8/3R1R1p/r1r3p1/6k1/6P1/5K1P/8/8 w - - 1 48",
    correctMoves: [
      {
        from: "d7",
        to: "d5",
        san: "Rd5+"
      },
      {
        from: "g4",
        to: "g5",
        san: "g5+"
      },
      {
        from: "f7",
        to: "h7",
        san: "Rxh7#"
      },
    ],
    responseMoves: ["Kh6", "Kh5"],
  },
  {
    fen: "8/p7/1p2pk1p/1P6/P3KPP1/8/8/8 w - - 1 2",
    correctMoves: [
      {
        from: "g4",
        to: "g5",
        san: "g5+"
      },
      {
        from: "f4",
        to: "g5",
        san: "fxg5+"
      },
      {
        from: "e4",
        to: "e5",
        san: "Ke5"
      },
    ],
    responseMoves: ["hxg5", "Kxg5"],
  },
  {
    fen: "1r3k2/2q4Q/n4pB1/1ppPp1p1/2P3P1/1P5P/6K1/8 w - - 1 2",
    correctMoves: [
      {
        from: "h7",
        to: "h8",
        san: "Qh8+"
      },
      {
        from: "h8",
        to: "g7",
        san: "Qg7+"
      },
      {
        from: "g7",
        to: "f6",
        san: "Qxf6+"
      },
    ],
    responseMoves: ["Ke7", "Kd6"],
  },
  {
    fen: "5r2/1p3pk1/p3p1p1/6Q1/P3bP1P/1B6/1PP2qP1/3R3K w - - 1 30",
    correctMoves: [
      {
        from: "g5",
        to: "e5",
        san: "Qe5+"
      },
      {
        from: "e5",
        to: "e4",
        san: "Qxe4"
      },
      {
        from: "h1",
        to: "g1",
        san: "Kg1"
      },
    ],
    responseMoves: ["Kh7", "Qxh4+"],
  },
  {
    fen: "4Rnk1/3q1pb1/3p2p1/3P4/PQbP2P1/5P2/P4BK1/8 w - - 1 2",
    correctMoves: [
      {
        from: "e8",
        to: "f8",
        san: "Rxf8+"
      },
      {
        from: "b4",
        to: "c4",
        san: "Qxc4"
      },
    ],
    responseMoves: ["Bxf8"],
  },
  {
    fen: "4r2r/p6Q/2p3p1/5pk1/3q4/3B2P1/2P2RK1/8 w - - 3 34",
    correctMoves: [
      {
        from: "f2",
        to: "f5",
        san: "Rxf5+"
      },
      {
        from: "h7",
        to: "f5",
        san: "Qxf5+"
      },
      {
        from: "f5",
        to: "g6",
        san: "Qg6#"
      },
    ],
    responseMoves: ["gxf5", "Kh6"],
  },
  {
    fen: "Q7/4k1p1/5pp1/p2pp1n1/P7/4q1P1/BP5P/1R3R1K b - - 0 29",
    correctMoves: [
      {
        from: "e3",
        to: "e4",
        san: "Qe4+"
      },
      {
        from: "e4",
        to: "f3",
        san: "Qxf3+"
      },
      {
        from: "g5",
        to: "h3",
        san: "Nh3#"
      },
    ],
    responseMoves: ["Rf3", "Kg1"],
  },
  {
    fen: "2kr2nr/p1p3pp/8/2p1n3/2B5/8/PPP2PPP/R2R2K1 w - - 0 15",
    correctMoves: [
      {
        from: "c4",
        to: "a6",
        san: "Ba6+"
      },
      {
        from: "d1",
        to: "d8",
        san: "Rxd8#"
      },
    ],
    responseMoves: ["Kb8"],
  },
  {
    fen: "3r3r/5p1k/2R1pPp1/p7/3R1Pp1/8/Pq2bQ1P/6K1 w - - 1 31",
    correctMoves: [
      {
        from: "f2",
        to: "h4",
        san: "Qh4+"
      },
      {
        from: "d4",
        to: "d8",
        san: "Rxd8#"
      },
    ],
    responseMoves: ["Kg8"],
  },
  {
    fen: "8/8/r3Rp2/1k1p1P2/1p1P4/2pK4/2P5/8 b - - 1 1",
    correctMoves: [
      {
        from: "a6",
        to: "e6",
        san: "Rxe6"
      },
      {
        from: "b5",
        to: "c6",
        san: "Kc6"
      },
      {
        from: "c6",
        to: "d7",
        san: "Kd7"
      },
    ],
    responseMoves: ["fxe6", "e7"],
  },
  {
    fen: "rnb2rk1/ppp2ppp/8/8/3q4/3B4/PPP2PPP/R2Q1RK1 w - - 0 2",
    correctMoves: [
      {
        from: "d3",
        to: "h7",
        san: "Bxh7+"
      },
      {
        from: "d1",
        to: "d4",
        san: "Qxd4"
      },
    ],
    responseMoves: ["Kxh7"],
  },
  {
    fen: "3B4/8/4b1pp/4pk2/B4b1P/5P2/5K2/8 w - - 4 37",
    correctMoves: [
      {
        from: "a4",
        to: "c2",
        san: "Bc2+"
      },
      {
        from: "c2",
        to: "e4",
        san: "Bxe4+"
      },
      {
        from: "d8",
        to: "c7",
        san: "Bc7+"
      },
      {
        from: "c7",
        to: "f4",
        san: "Bxf4"
      },
    ],
    responseMoves: ["e4", "Ke5", "Kf6"],
  },
  {
    fen: "3r1rk1/p1p2ppp/8/2b5/3q4/2N1B3/PPK1R1Q1/R7 b - - 15 31",
    correctMoves: [
      {
        from: "d4",
        to: "d3",
        san: "Qd3+"
      },
      {
        from: "c5",
        to: "e3",
        san: "Bxe3+"
      },
      {
        from: "d3",
        to: "e3",
        san: "Qxe3+"
      },
    ],
    responseMoves: ["Kc1", "Rxe3"],
  },
  {
    fen: "r5k1/2p2ppp/3p4/R3q3/4P3/8/3Q1PPP/R5K1 b - - 0 27",
    correctMoves: [
      {
        from: "e5",
        to: "a1",
        san: "Qxa1+"
      },
      {
        from: "a8",
        to: "a1",
        san: "Rxa1+"
      },
      {
        from: "a1",
        to: "d1",
        san: "Rxd1#"
      },
    ],
    responseMoves: ["Rxa1", "Qd1"],
  },
  {
    fen: "1k6/pp3N2/6p1/2Rp1b2/3P4/BP2q3/P3B2r/2RK4 w - - 0 30",
    correctMoves: [
      {
        from: "c5",
        to: "c8",
        san: "Rc8+"
      },
      {
        from: "a3",
        to: "d6",
        san: "Bd6+"
      },
      {
        from: "c1",
        to: "c8",
        san: "Rxc8#"
      },
    ],
    responseMoves: ["Bxc8", "Ka8"],
  },
  {
    fen: "r1bqkb1r/p1p2ppp/2pp4/8/2B1nP2/3P4/PPP3PP/RNBQK2R b KQkq - 0 7",
    correctMoves: [
      {
        from: "d8",
        to: "h4",
        san: "Qh4+"
      },
      {
        from: "e4",
        to: "g3",
        san: "Nxg3"
      },
      {
        from: "h4",
        to: "h1",
        san: "Qxh1+"
      },
    ],
    responseMoves: ["g3", "hxg3"],
  },
  {
    fen: "k2r1b2/p2r1ppp/2p5/3NP3/5Pn1/3R4/P1P3P1/1R3K2 w - - 2 25",
    correctMoves: [
      {
        from: "d5",
        to: "c7",
        san: "Nc7+"
      },
      {
        from: "d3",
        to: "d8",
        san: "Rxd8+"
      },
      {
        from: "d8",
        to: "c8",
        san: "Rxc8#"
      },
    ],
    responseMoves: ["Rxc7", "Rc8"],
  },
  {
    fen: "2rr2k1/pp3ppp/3qp3/4Nbb1/1n1P4/P1N1P2P/1P1QB1P1/2RR2K1 b - - 0 1",
    correctMoves: [
      {
        from: "d6",
        to: "e5",
        san: "Qxe5"
      },
      {
        from: "d8",
        to: "d2",
        san: "Rxd2"
      },
      {
        from: "g5",
        to: "e3",
        san: "Bxe3+"
      },
    ],
    responseMoves: ["dxe5", "Rxd2"],
  },
  {
    fen: "r6r/p7/2P2pkp/4pRp1/2P1Qb1q/2P5/P2N2PP/R2K4 b - - 2 23",
    correctMoves: [
      {
        from: "h4",
        to: "g4",
        san: "Qg4+"
      },
      {
        from: "g4",
        to: "f5",
        san: "Qxf5"
      },
      {
        from: "g6",
        to: "f5",
        san: "Kxf5"
      },
    ],
    responseMoves: ["Kc2", "Qxf5"],
  },
  {
    fen: "2kr1bnr/pbpp2qp/1p2pp2/4N3/P6B/2NP4/1PP1BPPP/R2Q1RK1 b - - 0 11",
    correctMoves: [
      {
        from: "g7",
        to: "g2",
        san: "Qxg2#"
      },
    ],
    responseMoves: [],
  },
  {
    fen: "r2q1knr/ppp2ppp/2np4/1B6/3bP3/5Q2/PP3PPP/RNBR2K1 w - - 1 2",
    correctMoves: [
      {
        from: "b5",
        to: "c6",
        san: "Bxc6"
      },
      {
        from: "d1",
        to: "d4",
        san: "Rxd4"
      },
    ],
    responseMoves: ["bxc6"],
  },
  {
    fen: "r6k/1pp2p2/2b1p3/1p5p/1b2qP2/7Q/PP4RP/7K w - - 0 29",
    correctMoves: [
      {
        from: "h3",
        to: "h5",
        san: "Qxh5+"
      },
      {
        from: "h5",
        to: "e5",
        san: "Qe5+"
      },
      {
        from: "e5",
        to: "f6",
        san: "Qxf6+"
      },
      {
        from: "f6",
        to: "g7",
        san: "Qxg7#"
      },
    ],
    responseMoves: ["Qh7", "f6", "Qg7"],
  },
  {
    fen: "rn1qk1nr/pbp2ppp/1p2p3/8/2BP4/P1P1P3/5PPP/R1BQK1NR b KQkq - 0 1",
    correctMoves: [
      {
        from: "b7",
        to: "g2",
        san: "Bxg2"
      },
      {
        from: "g2",
        to: "h1",
        san: "Bxh1"
      },
      {
        from: "d8",
        to: "f6",
        san: "Qf6"
      },
    ],
    responseMoves: ["Qg4", "Qxg7"],
  },
  {
    fen: "7k/p3b1p1/1pQ4p/2P1p3/4Pp2/P4q2/1P3rRB/7K w - - 0 34",
    correctMoves: [
      {
        from: "c6",
        to: "e8",
        san: "Qe8+"
      },
      {
        from: "e8",
        to: "g6",
        san: "Qg6+"
      },
      {
        from: "g6",
        to: "g7",
        san: "Qxg7#"
      },
    ],
    responseMoves: ["Kh7", "Kg8"],
  },
  {
    fen: "4kbnr/pp2p1pp/1q1rB3/8/6P1/4QP2/P2B1K1P/3RR3 b k - 1 1",
    correctMoves: [
      {
        from: "d6",
        to: "e6",
        san: "Rxe6"
      },
      {
        from: "e6",
        to: "b6",
        san: "Rxb6"
      },
    ],
    responseMoves: ["Qxb6"],
  },
  {
    fen: "rn2k2r/pp2bppp/2pB4/5p2/q2P4/1PP2P2/2K1Q1PP/3R2NR b kq - 0 15",
    correctMoves: [
      {
        from: "a4",
        to: "a2",
        san: "Qa2+"
      },
      {
        from: "a2",
        to: "e2",
        san: "Qxe2+"
      },
      {
        from: "e7",
        to: "d6",
        san: "Bxd6+"
      },
    ],
    responseMoves: ["Kd3", "Kxe2"],
  },
  {
    fen: "6rk/p4p1p/1p1pbPpQ/4b3/2PqP3/PR3R2/4B1PP/7K w - - 1 2",
    correctMoves: [
      {
        from: "h6",
        to: "h7",
        san: "Qxh7+"
      },
      {
        from: "f3",
        to: "h3",
        san: "Rh3+"
      },
      {
        from: "b3",
        to: "h3",
        san: "Rxh3#"
      },
    ],
    responseMoves: ["Kxh7", "Bxh3"],
  },
  {
    fen: "6k1/5p2/8/6pp/4P3/5PP1/P1K5/8 b - - 1 49",
    correctMoves: [
      {
        from: "h5",
        to: "h4",
        san: "h4"
      },
      {
        from: "g5",
        to: "h4",
        san: "gxh4"
      },
      {
        from: "h4",
        to: "h3",
        san: "h3"
      },
      {
        from: "h3",
        to: "h2",
        san: "h2"
      },
    ],
    responseMoves: ["gxh4", "Kd3", "Ke3"],
  },
  {
    fen: "1k6/1p1P1K2/p1p5/2P2n2/8/8/8/8 b - - 8 64",
    correctMoves: [
      {
        from: "b8",
        to: "c7",
        san: "Kc7"
      },
      {
        from: "f5",
        to: "g7",
        san: "Ng7+"
      },
    ],
    responseMoves: ["Ke8"],
  },
  {
    fen: "3q1rk1/5pp1/1p1p3p/p1n3b1/3NPB2/P3Q3/1P3PPP/2R3K1 b - - 0 23",
    correctMoves: [
      {
        from: "g5",
        to: "f4",
        san: "Bxf4"
      },
      {
        from: "c5",
        to: "d3",
        san: "Nd3"
      },
      {
        from: "d3",
        to: "c1",
        san: "Nxc1"
      },
    ],
    responseMoves: ["Qxf4", "Qe3"],
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
  }
  ,
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
  }
  ,
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
  }
  ,
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
  }
  ,
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
  }
  ,
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
  }
  ,
  {
    fen: "r1b5/3kr1P1/1pp5/8/1P6/P1Q2p1n/5P1P/R4K1R b - - 0 28",
    correctMoves: [
      {
        from: "c8",
        to: "a6",
        san: "Ba6+"
      },
      {
        from: "a6",
        to: "b5",
        san: "Bxb5+"
      },
    ],
    responseMoves: ["b5"],
  }
  ,
  {
    fen: "r4rk1/ppqb2pp/3b1pn1/2pPn2Q/8/1P2PN2/PB1PB1PP/RN3RK1 b - - 0 1",
    correctMoves: [
      {
        from: "d7",
        to: "g4",
        san: "Bg4"
      },
      {
        from: "g4",
        to: "h5",
        san: "Bxh5"
      },
      {
        from: "c7",
        to: "d6",
        san: "Qxd6"
      },
    ],
    responseMoves: ["Bxe5", "Bxd6"],
  }
  ,
  {
    fen: "1k1r4/ppp1p3/4B2b/5P1p/5p2/N1P4P/PP2K3/3R4 b - - 1 21",
    correctMoves: [
      {
        from: "f4",
        to: "f3",
        san: "f3+"
      },
      {
        from: "f3",
        to: "f2",
        san: "f2+"
      },
      {
        from: "d8",
        to: "d1",
        san: "Rxd1"
      },
    ],
    responseMoves: ["Ke1", "Kxf2"],
  }
  ,
  {
    fen: "r1bqkb1r/1pp2ppp/p1n5/1B1np3/Q7/2P2N2/PP1P1PPP/RNB1K2R w KQkq - 0 7",
    correctMoves: [
      {
        from: "b5",
        to: "c6",
        san: "Bxc6+"
      },
      {
        from: "a4",
        to: "c6",
        san: "Qxc6+"
      },
      {
        from: "c6",
        to: "d5",
        san: "Qxd5"
      },
    ],
    responseMoves: ["bxc6", "Bd7"],
  }
  ,
  {
    fen: "5r1k/pp2b1pp/2np4/3Qp3/2P5/1P4B1/P1q1B1PP/5RK1 w - - 5 21",
    correctMoves: [
      {
        from: "f1",
        to: "f8",
        san: "Rxf8+"
      },
      {
        from: "d5",
        to: "f7",
        san: "Qf7"
      },
      {
        from: "f7",
        to: "f8",
        san: "Qxf8+"
      },
    ],
    responseMoves: ["Bxf8", "h6"],
  }
  ,
  {
    fen: "r2r2k1/p1p3pp/1p2b3/4Pp2/5P2/q1P1B1P1/PQ5P/RR4K1 b - - 3 22",
    correctMoves: [
      {
        from: "d8",
        to: "d1",
        san: "Rd1+"
      },
      {
        from: "a3",
        to: "b2",
        san: "Qxb2+"
      },
      {
        from: "d1",
        to: "a1",
        san: "Rxd1"
      },
    ],
    responseMoves: ["Kf2", "Rxb2"],
  }
  ,
  {
    fen: "rr4k1/3q1pb1/4n1p1/3pP1P1/3P3Q/7R/pp1N1PK1/7R w - - 0 2",
    correctMoves: [
      {
        from: "h5",
        to: "h8",
        san: "Qh8+"
      },
      {
        from: "h3",
        to: "h8",
        san: "Rxh8+"
      },
      {
        from: "h1",
        to: "h7",
        san: "R1h7#"
      },
    ],
    responseMoves: ["Bxh8", "Kg7"],
  }
  ,
  {
    fen: "r5k1/pppbQ1pp/4p3/8/2N5/8/PPP1q3/5RK1 w - - 10 28",
    correctMoves: [
      {
        from: "e7",
        to: "f7",
        san: "Qf7+"
      },
      {
        from: "f7",
        to: "f8",
        san: "Qf8+"
      },
      {
        from: "f1",
        to: "f8",
        san: "Rxf8#"
      },
    ],
    responseMoves: ["Kh8", "Rxf8"],
  }
  ,
  {
    fen: "8/8/4p1K1/4k3/6p1/6P1/5P2/8 b - - 1 53",
    correctMoves: [
      {
        from: "e5",
        to: "e4",
        san: "Ke4"
      },
      {
        from: "e4",
        to: "f3",
        san: "Kf3"
      },
      {
        from: "f3",
        to: "f2",
        san: "Kxf2"
      },
      {
        from: "e6",
        to: "e5",
        san: "e5+"
      },
      {
        from: "e5",
        to: "e4",
        san: "e4"
      },
      {
        from: "e4",
        to: "e3",
        san: "e3"
      },
      {
        from: "e3",
        to: "e2",
        san: "e2"
      },
    ],
    responseMoves: ["Kf6", "Ke5", "Kf4", "Kxg4", "Kf4", "g4"],
  }
  ,
  {
    fen: "8/2P2p2/8/PR6/6pk/r7/6PK/8 b - - 0 45",
    correctMoves: [
      {
        from: "g4",
        to: "g3",
        san: "g3+"
      },
      {
        from: "a3",
        to: "a1",
        san: "Ra1+"
      },
      {
        from: "a1",
        to: "b1",
        san: "Rxb1#"
      }
    ],
    responseMoves: ["Kh1", "Rb1"],
  }
  ,
  {
    fen: "8/R7/3p1Rp1/3Pp2p/4P2k/4PK2/1r4P1/8 b - - 3 41",
    correctMoves: [
      {
        from: "g6",
        to: "g5",
        san: "g5"
      },
      {
        from: "h4",
        to: "h3",
        san: "Kh3"
      },
      {
        from: "g5",
        to: "g4",
        san: "g4+"
      },
      {
        from: "h5",
        to: "g4",
        san: "hxg4#"
      }
    ],
    responseMoves: ["g3+", "Rg7", "Rxg4"]
  }
  ,
  {
    fen: "r2q1rk1/1p1b1ppp/p7/3Nb3/B7/8/PP3PPP/R2Q1RK1 b - - 0 1",
    correctMoves: [
      {
        from: "d7",
        to: "a4",
        san: "Bxa4"
      },
      {
        from: "d8",
        to: "d5",
        san: "Qxd5"
      }
    ],
    responseMoves: [
      "Qxa4"
    ]
  },
  {
    fen: "rnbqk1nr/p5pp/1p1bp3/1p1pN3/3P4/2N2Q2/PPP2PPP/R1B1K2R w KQkq - 0 10",
    correctMoves: [
      {
        from: "f3",
        to: "f7",
        san: "Qf7#"
      }
    ],
    responseMoves: []
  }
  ,
  {
    fen: "5rk1/p3pp1p/2n3p1/5bN1/1P6/P2B1Q2/6PP/qN2K2R b K - 1 1",
    correctMoves: [
      {
        from: "c6",
        to: "e5",
        san: "Ne5"
      },
      {
        from: "e5",
        to: "f3",
        san: "Nxf3+"
      }
    ],
    responseMoves: [
      "Bxf5"
    ]
  },
  {
    fen: "2k5/pppr4/5KB1/8/2P2p2/1P3r2/P7/4R3 w - - 0 36",
    correctMoves: [
      {
        from: "e1",
        to: "e8",
        san: "Re8+"
      },
      {
        from: "g6",
        to: "f5",
        san: "Bf5+"
      },
      {
        from: "e8",
        to: "d8",
        san: "Rxd8#"
      }
    ],
    responseMoves: [
      "Rd8",
      "Kb8"
    ]
  }
  ,
  {
    fen: "5rk1/1R4p1/2p1p2p/2PpN1q1/1P1P2Pp/4P1nP/6PK/4Q3 b - - 0 37",
    correctMoves: [
      {
        from: "f8",
        to: "f1",
        san: "Rf1"
      },
      {
        from: "g8",
        to: "h7",
        san: "Kh7"
      },
      {
        from: "g3",
        to: "f1",
        san: "Nxf1+"
      }
    ],
    responseMoves: [
      "Rb8+",
      "Qxf1"
    ]
  },
  {
    fen: "5r1r/1pp1kB2/p2p3p/6p1/1P6/PQ1R4/1KP2q1P/8 w - - 4 32",
    correctMoves: [
      {
        from: "b3",
        to: "e6",
        san: "Qe6+"
      },
      {
        from: "d3",
        to: "d6",
        san: "Rxd6+"
      },
      {
        from: "e6",
        to: "d6",
        san: "Qxd6+"
      },
      {
        from: "f7",
        to: "e6",
        san: "Be6#"
      }
    ],
    responseMoves: [
      "Kd8",
      "cxd6",
      "Kc8"
    ]
  },
  {
    fen: "2R2b2/4kp1p/3p2r1/3P3p/1P2P3/P3BPrP/8/2R4K b - - 5 40",
    correctMoves: [
      {
        from: "g3",
        to: "h3",
        san: "Rxh3#"
      }
    ],
    responseMoves: []
  },
  {
    fen: "3r2r1/1p3kp1/p4p2/7Q/PB6/8/1q3PPP/3RK2R b K - 7 29",
    correctMoves: [
      {
        from: "g7",
        to: "g6",
        san: "g6"
      },
      {
        from: "g8",
        to: "g7",
        san: "Rg7"
      },
      {
        from: "f7",
        to: "g7",
        san: "Kxg7"
      },
      {
        from: "d8",
        to: "d1",
        san: "Rxd1"
      }
    ],
    responseMoves: [
      "Qh7+",
      "Qxg7+",
      "0-0"
    ]
  }
  ,
  {
    fen: "rnbqkb1r/ppp2ppp/3p4/3Pp3/2P1n3/5P2/PP4PP/RNBQKBNR b KQkq c3 0 5",
    correctMoves: [
      {
        from: "d8",
        to: "h4",
        san: "Qh4+"
      },
      {
        from: "e4",
        to: "g3",
        san: "Nxg3"
      },
      {
        from: "h4",
        to: "h1",
        san: "Qxh1"
      },
    ],
    responseMoves: ["g3", "hxg3"],
  },
  {
    fen: "Q7/p1ppkp1p/2n5/8/3P4/2q3P1/P2NKP1P/5B1R b - - 0 17",
    correctMoves: [
      {
        from: "c6",
        to: "d4",
        san: "Nxd4+"
      },
      {
        from: "c3",
        to: "c2",
        san: "Qc2+"
      },
      {
        from: "c2",
        to: "c1",
        san: "Qc1#"
      },
    ],
    responseMoves: ["Kd1", "Ke1"],
  },
  {
    fen: "3r3k/3r3p/pR4p1/4pb2/NP4P1/2P1n2P/P3BR2/2K5 b - b3 0 28",
    correctMoves: [
      {
        from: "d7",
        to: "d1",
        san: "Rd1+"
      },
      {
        from: "d8",
        to: "d1",
        san: "Rxd1+"
      },
      {
        from: "d1",
        to: "b1",
        san: "Rb1+"
      },
      {
        from: "e3",
        to: "c4",
        san: "Nc4#"
      },
    ],
    responseMoves: ["Bxd1", "Kb2", "Ka3"],
  },
  {
    fen: "r1b1kb1r/1pp1q1pp/p1np1p1n/1B1Q4/4P3/2P1BN2/PP3PPP/RN2K2R w KQkq - 0 10",
    correctMoves: [
      {
        from: "b5",
        to: "c6",
        san: "Bxc6+"
      },
      {
        from: "d5",
        to: "c6",
        san: "Qxc6+"
      },
      {
        from: "c6",
        to: "a8",
        san: "Qxa8++"
      },
    ],
    responseMoves: ["bxc6", "Qd7"],
  },
  {
    fen: "rn2kb1r/p1p2ppp/b4n2/1q1Pp1N1/1p1P4/1QP2P2/PPB3PP/RNB1K2R b KQkq - 0 11",
    correctMoves: [
      {
        from: "b5",
        to: "e2",
        san: "Qe2#"
      },
    ],
    responseMoves: [],
  },
  {
    fen: "r3kbQ1/5p2/b3q2N/3prN2/1p6/5P2/1PP1p1PP/R2R3K w - - 0 31",
    correctMoves: [
      {
        from: "f5",
        to: "g7",
        san: "Ng7+"
      },
      {
        from: "g7",
        to: "e6",
        san: "Nxe6"
      },
      {
        from: "a1",
        to: "d1",
        san: "Rxd1"
      },
    ],
    responseMoves: ["Kd7", "exd1=Q+"],
  },
  {
    fen: "8/8/2R1k3/5pp1/8/3PKP1P/r7/8 b - - 4 40",
    correctMoves: [
      {
        from: "e6",
        to: "d5",
        san: "Kd5"
      },
      {
        from: "f5",
        to: "f4",
        san: "f4+"
      },
      {
        from: "g5",
        to: "f4",
        san: "gxf4+"
      },
    ],
    responseMoves: ["Rc4", "Rxf4"],
  },
  {
    fen: "1r6/8/p1Bp4/P1p1p1k1/1pP1PpP1/3P3R/1r6/5KR1 b - - 3 38",
    correctMoves: [
      {
        from: "b2",
        to: "b1",
        san: "Rb1+"
      },
      {
        from: "b1",
        to: "g1",
        san: "Rxg1"
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
    ],
    responseMoves: ["Kf2", "Kxg1", "Rh1"],
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
    fen: "4rk2/1p5p/1b5p/1p1pNp1P/1P3P2/P5P1/6K1/4R3 w - - 1 35",
    correctMoves: [
      {
        from: "e5",
        to: "d7",
        san: "Nd7+"
      },
      {
        from: "e1",
        to: "e8",
        san: "Rxe8"
      },
      {
        from: "d7",
        to: "b6",
        san: "Nxb6"
      },
    ],
    responseMoves: ["Kf7", "Kxe8"],
  },
  {
    fen: "rnbqkb1r/ppp3pp/3p2n1/4pQ2/2B1P3/8/PPPP1PPP/RNB1K2R w KQkq - 0 7",
    correctMoves: [
      {
        from: "f5",
        to: "f7",
        san: "Qf7#"
      },
    ],
    responseMoves: [],
  },
  {
    fen: "Rn2r1k1/2pb1ppp/8/2B5/1P6/6P1/2P2P1P/3NR1K1 b - - 2 26",
    correctMoves: [
      {
        from: "e8",
        to: "e1",
        san: "Rxe1+"
      },
      {
        from: "d7",
        to: "c6",
        san: "Bc6+"
      },
      {
        from: "c6",
        to: "a8",
        san: "Bxa8"
      },
    ],
    responseMoves: ["Kg2", "Kh3"],
  },
  {
    fen: "8/5pkp/1rq3p1/3pP3/7Q/b3B1P1/5PKP/8 w - - 0 2",
    correctMoves: [
      {
        from: "e3",
        to: "h6",
        san: "Bh6+"
      },
      {
        from: "h4",
        to: "d8",
        san: "Qd8+"
      },
      {
        from: "d8",
        to: "e8",
        san: "Qxe8+"
      },
    ],
    responseMoves: ["Kg8", "Qe8"],
  },
  {
    fen: "1k2rr2/1pp5/p7/3P4/8/6Q1/P4qPP/3RR2K b - - 3 25",
    correctMoves: [
      {
        from: "e8",
        to: "e1",
        san: "Rxe1+"
      },
      {
        from: "f2",
        to: "f1",
        san: "Qf1+"
      },
      {
        from: "f8",
        to: "f1",
        san: "Rxf1#"
      },
    ],
    responseMoves: ["Rxe1", "Rxf1"],
  },
  {
    fen: "rnbqk2r/ppp2ppp/5n2/3P4/1bPPpP2/2N5/PP4PP/R1BQKBNR w KQkq - 1 2",
    correctMoves: [
      {
        from: "d1",
        to: "a4",
        san: "Qa4+"
      },
      {
        from: "a4",
        to: "b4",
        san: "Qxb4"
      },
    ],
    responseMoves: ["c6"],
  },
  {
    fen: "8/3R1R1p/r1r3p1/6k1/6P1/5K1P/8/8 w - - 1 48",
    correctMoves: [
      {
        from: "d7",
        to: "d5",
        san: "Rd5+"
      },
      {
        from: "g4",
        to: "g5",
        san: "g5+"
      },
      {
        from: "f7",
        to: "h7",
        san: "Rxh7#"
      },
    ],
    responseMoves: ["Kh6", "Kh5"],
  },
  {
    fen: "8/p7/1p2pk1p/1P6/P3KPP1/8/8/8 w - - 1 2",
    correctMoves: [
      {
        from: "g4",
        to: "g5",
        san: "g5+"
      },
      {
        from: "f4",
        to: "g5",
        san: "fxg5+"
      },
      {
        from: "e4",
        to: "e5",
        san: "Ke5"
      },
    ],
    responseMoves: ["hxg5", "Kxg5"],
  },
  {
    fen: "1r3k2/2q4Q/n4pB1/1ppPp1p1/2P3P1/1P5P/6K1/8 w - - 1 2",
    correctMoves: [
      {
        from: "h7",
        to: "h8",
        san: "Qh8+"
      },
      {
        from: "h8",
        to: "g7",
        san: "Qg7+"
      },
      {
        from: "g7",
        to: "f6",
        san: "Qxf6+"
      },
    ],
    responseMoves: ["Ke7", "Kd6"],
  },
  {
    fen: "5r2/1p3pk1/p3p1p1/6Q1/P3bP1P/1B6/1PP2qP1/3R3K w - - 1 30",
    correctMoves: [
      {
        from: "g5",
        to: "e5",
        san: "Qe5+"
      },
      {
        from: "e5",
        to: "e4",
        san: "Qxe4"
      },
      {
        from: "h1",
        to: "g1",
        san: "Kg1"
      },
    ],
    responseMoves: ["Kh7", "Qxh4+"],
  },
  {
    fen: "4Rnk1/3q1pb1/3p2p1/3P4/PQbP2P1/5P2/P4BK1/8 w - - 1 2",
    correctMoves: [
      {
        from: "e8",
        to: "f8",
        san: "Rxf8+"
      },
      {
        from: "b4",
        to: "c4",
        san: "Qxc4"
      },
    ],
    responseMoves: ["Bxf8"],
  },
  {
    fen: "4r2r/p6Q/2p3p1/5pk1/3q4/3B2P1/2P2RK1/8 w - - 3 34",
    correctMoves: [
      {
        from: "f2",
        to: "f5",
        san: "Rxf5+"
      },
      {
        from: "h7",
        to: "f5",
        san: "Qxf5+"
      },
      {
        from: "f5",
        to: "g6",
        san: "Qg6#"
      },
    ],
    responseMoves: ["gxf5", "Kh6"],
  },
  {
    fen: "Q7/4k1p1/5pp1/p2pp1n1/P7/4q1P1/BP5P/1R3R1K b - - 0 29",
    correctMoves: [
      {
        from: "e3",
        to: "e4",
        san: "Qe4+"
      },
      {
        from: "e4",
        to: "f3",
        san: "Qxf3+"
      },
      {
        from: "g5",
        to: "h3",
        san: "Nh3#"
      },
    ],
    responseMoves: ["Rf3", "Kg1"],
  },
  {
    fen: "2kr2nr/p1p3pp/8/2p1n3/2B5/8/PPP2PPP/R2R2K1 w - - 0 15",
    correctMoves: [
      {
        from: "c4",
        to: "a6",
        san: "Ba6+"
      },
      {
        from: "d1",
        to: "d8",
        san: "Rxd8#"
      },
    ],
    responseMoves: ["Kb8"],
  },
  {
    fen: "3r3r/5p1k/2R1pPp1/p7/3R1Pp1/8/Pq2bQ1P/6K1 w - - 1 31",
    correctMoves: [
      {
        from: "f2",
        to: "h4",
        san: "Qh4+"
      },
      {
        from: "d4",
        to: "d8",
        san: "Rxd8#"
      },
    ],
    responseMoves: ["Kg8"],
  },
  {
    fen: "8/8/r3Rp2/1k1p1P2/1p1P4/2pK4/2P5/8 b - - 1 1",
    correctMoves: [
      {
        from: "a6",
        to: "e6",
        san: "Rxe6"
      },
      {
        from: "b5",
        to: "c6",
        san: "Kc6"
      },
      {
        from: "c6",
        to: "d7",
        san: "Kd7"
      },
    ],
    responseMoves: ["fxe6", "e7"],
  },
  {
    fen: "rnb2rk1/ppp2ppp/8/8/3q4/3B4/PPP2PPP/R2Q1RK1 w - - 0 2",
    correctMoves: [
      {
        from: "d3",
        to: "h7",
        san: "Bxh7+"
      },
      {
        from: "d1",
        to: "d4",
        san: "Qxd4"
      },
    ],
    responseMoves: ["Kxh7"],
  },
  {
    fen: "3B4/8/4b1pp/4pk2/B4b1P/5P2/5K2/8 w - - 4 37",
    correctMoves: [
      {
        from: "a4",
        to: "c2",
        san: "Bc2+"
      },
      {
        from: "c2",
        to: "e4",
        san: "Bxe4+"
      },
      {
        from: "d8",
        to: "c7",
        san: "Bc7+"
      },
      {
        from: "c7",
        to: "f4",
        san: "Bxf4"
      },
    ],
    responseMoves: ["e4", "Ke5", "Kf6"],
  },
  {
    fen: "3r1rk1/p1p2ppp/8/2b5/3q4/2N1B3/PPK1R1Q1/R7 b - - 15 31",
    correctMoves: [
      {
        from: "d4",
        to: "d3",
        san: "Qd3+"
      },
      {
        from: "c5",
        to: "e3",
        san: "Bxe3+"
      },
      {
        from: "d3",
        to: "e3",
        san: "Qxe3+"
      },
    ],
    responseMoves: ["Kc1", "Rxe3"],
  },
  {
    fen: "r5k1/2p2ppp/3p4/R3q3/4P3/8/3Q1PPP/R5K1 b - - 0 27",
    correctMoves: [
      {
        from: "e5",
        to: "a1",
        san: "Qxa1+"
      },
      {
        from: "a8",
        to: "a1",
        san: "Rxa1+"
      },
      {
        from: "a1",
        to: "d1",
        san: "Rxd1#"
      },
    ],
    responseMoves: ["Rxa1", "Qd1"],
  },
  {
    fen: "1k6/pp3N2/6p1/2Rp1b2/3P4/BP2q3/P3B2r/2RK4 w - - 0 30",
    correctMoves: [
      {
        from: "c5",
        to: "c8",
        san: "Rc8+"
      },
      {
        from: "a3",
        to: "d6",
        san: "Bd6+"
      },
      {
        from: "c1",
        to: "c8",
        san: "Rxc8#"
      },
    ],
    responseMoves: ["Bxc8", "Ka8"],
  },
  {
    fen: "r1bqkb1r/p1p2ppp/2pp4/8/2B1nP2/3P4/PPP3PP/RNBQK2R b KQkq - 0 7",
    correctMoves: [
      {
        from: "d8",
        to: "h4",
        san: "Qh4+"
      },
      {
        from: "e4",
        to: "g3",
        san: "Nxg3"
      },
      {
        from: "h4",
        to: "h1",
        san: "Qxh1+"
      },
    ],
    responseMoves: ["g3", "hxg3"],
  },
  {
    fen: "k2r1b2/p2r1ppp/2p5/3NP3/5Pn1/3R4/P1P3P1/1R3K2 w - - 2 25",
    correctMoves: [
      {
        from: "d5",
        to: "c7",
        san: "Nc7+"
      },
      {
        from: "d3",
        to: "d8",
        san: "Rxd8+"
      },
      {
        from: "d8",
        to: "c8",
        san: "Rxc8#"
      },
    ],
    responseMoves: ["Rxc7", "Rc8"],
  },
  {
    fen: "2rr2k1/pp3ppp/3qp3/4Nbb1/1n1P4/P1N1P2P/1P1QB1P1/2RR2K1 b - - 0 1",
    correctMoves: [
      {
        from: "d6",
        to: "e5",
        san: "Qxe5"
      },
      {
        from: "d8",
        to: "d2",
        san: "Rxd2"
      },
      {
        from: "g5",
        to: "e3",
        san: "Bxe3+"
      },
    ],
    responseMoves: ["dxe5", "Rxd2"],
  },
  {
    fen: "r6r/p7/2P2pkp/4pRp1/2P1Qb1q/2P5/P2N2PP/R2K4 b - - 2 23",
    correctMoves: [
      {
        from: "h4",
        to: "g4",
        san: "Qg4+"
      },
      {
        from: "g4",
        to: "f5",
        san: "Qxf5"
      },
      {
        from: "g6",
        to: "f5",
        san: "Kxf5"
      },
    ],
    responseMoves: ["Kc2", "Qxf5"],
  },
  {
    fen: "2kr1bnr/pbpp2qp/1p2pp2/4N3/P6B/2NP4/1PP1BPPP/R2Q1RK1 b - - 0 11",
    correctMoves: [
      {
        from: "g7",
        to: "g2",
        san: "Qxg2#"
      },
    ],
    responseMoves: [],
  },
  {
    fen: "r2q1knr/ppp2ppp/2np4/1B6/3bP3/5Q2/PP3PPP/RNBR2K1 w - - 1 2",
    correctMoves: [
      {
        from: "b5",
        to: "c6",
        san: "Bxc6"
      },
      {
        from: "d1",
        to: "d4",
        san: "Rxd4"
      },
    ],
    responseMoves: ["bxc6"],
  },
  {
    fen: "r6k/1pp2p2/2b1p3/1p5p/1b2qP2/7Q/PP4RP/7K w - - 0 29",
    correctMoves: [
      {
        from: "h3",
        to: "h5",
        san: "Qxh5+"
      },
      {
        from: "h5",
        to: "e5",
        san: "Qe5+"
      },
      {
        from: "e5",
        to: "f6",
        san: "Qxf6+"
      },
      {
        from: "f6",
        to: "g7",
        san: "Qxg7#"
      },
    ],
    responseMoves: ["Qh7", "f6", "Qg7"],
  },
  {
    fen: "rn1qk1nr/pbp2ppp/1p2p3/8/2BP4/P1P1P3/5PPP/R1BQK1NR b KQkq - 0 1",
    correctMoves: [
      {
        from: "b7",
        to: "g2",
        san: "Bxg2"
      },
      {
        from: "g2",
        to: "h1",
        san: "Bxh1"
      },
      {
        from: "d8",
        to: "f6",
        san: "Qf6"
      },
    ],
    responseMoves: ["Qg4", "Qxg7"],
  },
  {
    fen: "7k/p3b1p1/1pQ4p/2P1p3/4Pp2/P4q2/1P3rRB/7K w - - 0 34",
    correctMoves: [
      {
        from: "c6",
        to: "e8",
        san: "Qe8+"
      },
      {
        from: "e8",
        to: "g6",
        san: "Qg6+"
      },
      {
        from: "g6",
        to: "g7",
        san: "Qxg7#"
      },
    ],
    responseMoves: ["Kh7", "Kg8"],
  },
  {
    fen: "4kbnr/pp2p1pp/1q1rB3/8/6P1/4QP2/P2B1K1P/3RR3 b k - 1 1",
    correctMoves: [
      {
        from: "d6",
        to: "e6",
        san: "Rxe6"
      },
      {
        from: "e6",
        to: "b6",
        san: "Rxb6"
      },
    ],
    responseMoves: ["Qxb6"],
  },
  {
    fen: "rn2k2r/pp2bppp/2pB4/5p2/q2P4/1PP2P2/2K1Q1PP/3R2NR b kq - 0 15",
    correctMoves: [
      {
        from: "a4",
        to: "a2",
        san: "Qa2+"
      },
      {
        from: "a2",
        to: "e2",
        san: "Qxe2+"
      },
      {
        from: "e7",
        to: "d6",
        san: "Bxd6+"
      },
    ],
    responseMoves: ["Kd3", "Kxe2"],
  },
  {
    fen: "6rk/p4p1p/1p1pbPpQ/4b3/2PqP3/PR3R2/4B1PP/7K w - - 1 2",
    correctMoves: [
      {
        from: "h6",
        to: "h7",
        san: "Qxh7+"
      },
      {
        from: "f3",
        to: "h3",
        san: "Rh3+"
      },
      {
        from: "b3",
        to: "h3",
        san: "Rxh3#"
      },
    ],
    responseMoves: ["Kxh7", "Bxh3"],
  },
  {
    fen: "6k1/5p2/8/6pp/4P3/5PP1/P1K5/8 b - - 1 49",
    correctMoves: [
      {
        from: "h5",
        to: "h4",
        san: "h4"
      },
      {
        from: "g5",
        to: "h4",
        san: "gxh4"
      },
      {
        from: "h4",
        to: "h3",
        san: "h3"
      },
      {
        from: "h3",
        to: "h2",
        san: "h2"
      },
    ],
    responseMoves: ["gxh4", "Kd3", "Ke3"],
  },
  {
    fen: "1k6/1p1P1K2/p1p5/2P2n2/8/8/8/8 b - - 8 64",
    correctMoves: [
      {
        from: "b8",
        to: "c7",
        san: "Kc7"
      },
      {
        from: "f5",
        to: "g7",
        san: "Ng7+"
      },
    ],
    responseMoves: ["Ke8"],
  },
  {
    fen: "3q1rk1/5pp1/1p1p3p/p1n3b1/3NPB2/P3Q3/1P3PPP/2R3K1 b - - 0 23",
    correctMoves: [
      {
        from: "g5",
        to: "f4",
        san: "Bxf4"
      },
      {
        from: "c5",
        to: "d3",
        san: "Nd3"
      },
      {
        from: "d3",
        to: "c1",
        san: "Nxc1"
      },
    ],
    responseMoves: ["Qxf4", "Qe3"],
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
  }
  ,
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
  }
  ,
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
  }
  ,
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
  }
  ,
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
  }
  ,
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
  }
  ,
  {
    fen: "r1b5/3kr1P1/1pp5/8/1P6/P1Q2p1n/5P1P/R4K1R b - - 0 28",
    correctMoves: [
      {
        from: "c8",
        to: "a6",
        san: "Ba6+"
      },
      {
        from: "a6",
        to: "b5",
        san: "Bxb5+"
      },
    ],
    responseMoves: ["b5"],
  }
  ,
  {
    fen: "r4rk1/ppqb2pp/3b1pn1/2pPn2Q/8/1P2PN2/PB1PB1PP/RN3RK1 b - - 0 1",
    correctMoves: [
      {
        from: "d7",
        to: "g4",
        san: "Bg4"
      },
      {
        from: "g4",
        to: "h5",
        san: "Bxh5"
      },
      {
        from: "c7",
        to: "d6",
        san: "Qxd6"
      },
    ],
    responseMoves: ["Bxe5", "Bxd6"],
  }
  ,
  {
    fen: "1k1r4/ppp1p3/4B2b/5P1p/5p2/N1P4P/PP2K3/3R4 b - - 1 21",
    correctMoves: [
      {
        from: "f4",
        to: "f3",
        san: "f3+"
      },
      {
        from: "f3",
        to: "f2",
        san: "f2+"
      },
      {
        from: "d8",
        to: "d1",
        san: "Rxd1"
      },
    ],
    responseMoves: ["Ke1", "Kxf2"],
  }
  ,
  {
    fen: "r1bqkb1r/1pp2ppp/p1n5/1B1np3/Q7/2P2N2/PP1P1PPP/RNB1K2R w KQkq - 0 7",
    correctMoves: [
      {
        from: "b5",
        to: "c6",
        san: "Bxc6+"
      },
      {
        from: "a4",
        to: "c6",
        san: "Qxc6+"
      },
      {
        from: "c6",
        to: "d5",
        san: "Qxd5"
      },
    ],
    responseMoves: ["bxc6", "Bd7"],
  }
  ,
  {
    fen: "5r1k/pp2b1pp/2np4/3Qp3/2P5/1P4B1/P1q1B1PP/5RK1 w - - 5 21",
    correctMoves: [
      {
        from: "f1",
        to: "f8",
        san: "Rxf8+"
      },
      {
        from: "d5",
        to: "f7",
        san: "Qf7"
      },
      {
        from: "f7",
        to: "f8",
        san: "Qxf8+"
      },
    ],
    responseMoves: ["Bxf8", "h6"],
  }
  ,
  {
    fen: "r2r2k1/p1p3pp/1p2b3/4Pp2/5P2/q1P1B1P1/PQ5P/RR4K1 b - - 3 22",
    correctMoves: [
      {
        from: "d8",
        to: "d1",
        san: "Rd1+"
      },
      {
        from: "a3",
        to: "b2",
        san: "Qxb2+"
      },
      {
        from: "d1",
        to: "a1",
        san: "Rxd1"
      },
    ],
    responseMoves: ["Kf2", "Rxb2"],
  }
  ,
  {
    fen: "rr4k1/3q1pb1/4n1p1/3pP1P1/3P3Q/7R/pp1N1PK1/7R w - - 0 2",
    correctMoves: [
      {
        from: "h5",
        to: "h8",
        san: "Qh8+"
      },
      {
        from: "h3",
        to: "h8",
        san: "Rxh8+"
      },
      {
        from: "h1",
        to: "h7",
        san: "R1h7#"
      },
    ],
    responseMoves: ["Bxh8", "Kg7"],
  }
  ,
  {
    fen: "r5k1/pppbQ1pp/4p3/8/2N5/8/PPP1q3/5RK1 w - - 10 28",
    correctMoves: [
      {
        from: "e7",
        to: "f7",
        san: "Qf7+"
      },
      {
        from: "f7",
        to: "f8",
        san: "Qf8+"
      },
      {
        from: "f1",
        to: "f8",
        san: "Rxf8#"
      },
    ],
    responseMoves: ["Kh8", "Rxf8"],
  }
  ,
  {
    fen: "8/8/4p1K1/4k3/6p1/6P1/5P2/8 b - - 1 53",
    correctMoves: [
      {
        from: "e5",
        to: "e4",
        san: "Ke4"
      },
      {
        from: "e4",
        to: "f3",
        san: "Kf3"
      },
      {
        from: "f3",
        to: "f2",
        san: "Kxf2"
      },
      {
        from: "e6",
        to: "e5",
        san: "e5+"
      },
      {
        from: "e5",
        to: "e4",
        san: "e4"
      },
      {
        from: "e4",
        to: "e3",
        san: "e3"
      },
      {
        from: "e3",
        to: "e2",
        san: "e2"
      },
    ],
    responseMoves: ["Kf6", "Ke5", "Kf4", "Kxg4", "Kf4", "g4"],
  }
  ,
  {
    fen: "8/2P2p2/8/PR6/6pk/r7/6PK/8 b - - 0 45",
    correctMoves: [
      {
        from: "g4",
        to: "g3",
        san: "g3+"
      },
      {
        from: "a3",
        to: "a1",
        san: "Ra1+"
      },
      {
        from: "a1",
        to: "b1",
        san: "Rxb1#"
      }
    ],
    responseMoves: ["Kh1", "Rb1"],
  }
  ,
  {
    fen: "8/R7/3p1Rp1/3Pp2p/4P2k/4PK2/1r4P1/8 b - - 3 41",
    correctMoves: [
      {
        from: "g6",
        to: "g5",
        san: "g5"
      },
      {
        from: "h4",
        to: "h3",
        san: "Kh3"
      },
      {
        from: "g5",
        to: "g4",
        san: "g4+"
      },
      {
        from: "h5",
        to: "g4",
        san: "hxg4#"
      }
    ],
    responseMoves: ["g3+", "Rg7", "Rxg4"]
  }
  ,
  {
    fen: "r2q1rk1/1p1b1ppp/p7/3Nb3/B7/8/PP3PPP/R2Q1RK1 b - - 0 1",
    correctMoves: [
      {
        from: "d7",
        to: "a4",
        san: "Bxa4"
      },
      {
        from: "d8",
        to: "d5",
        san: "Qxd5"
      }
    ],
    responseMoves: [
      "Qxa4"
    ]
  },
  {
    fen: "rnbqk1nr/p5pp/1p1bp3/1p1pN3/3P4/2N2Q2/PPP2PPP/R1B1K2R w KQkq - 0 10",
    correctMoves: [
      {
        from: "f3",
        to: "f7",
        san: "Qf7#"
      }
    ],
    responseMoves: []
  }
  ,
  {
    fen: "5rk1/p3pp1p/2n3p1/5bN1/1P6/P2B1Q2/6PP/qN2K2R b K - 1 1",
    correctMoves: [
      {
        from: "c6",
        to: "e5",
        san: "Ne5"
      },
      {
        from: "e5",
        to: "f3",
        san: "Nxf3+"
      }
    ],
    responseMoves: [
      "Bxf5"
    ]
  },
  {
    fen: "2k5/pppr4/5KB1/8/2P2p2/1P3r2/P7/4R3 w - - 0 36",
    correctMoves: [
      {
        from: "e1",
        to: "e8",
        san: "Re8+"
      },
      {
        from: "g6",
        to: "f5",
        san: "Bf5+"
      },
      {
        from: "e8",
        to: "d8",
        san: "Rxd8#"
      }
    ],
    responseMoves: [
      "Rd8",
      "Kb8"
    ]
  }
  ,
  {
    fen: "5rk1/1R4p1/2p1p2p/2PpN1q1/1P1P2Pp/4P1nP/6PK/4Q3 b - - 0 37",
    correctMoves: [
      {
        from: "f8",
        to: "f1",
        san: "Rf1"
      },
      {
        from: "g8",
        to: "h7",
        san: "Kh7"
      },
      {
        from: "g3",
        to: "f1",
        san: "Nxf1+"
      }
    ],
    responseMoves: [
      "Rb8+",
      "Qxf1"
    ]
  },
  {
    fen: "5r1r/1pp1kB2/p2p3p/6p1/1P6/PQ1R4/1KP2q1P/8 w - - 4 32",
    correctMoves: [
      {
        from: "b3",
        to: "e6",
        san: "Qe6+"
      },
      {
        from: "d3",
        to: "d6",
        san: "Rxd6+"
      },
      {
        from: "e6",
        to: "d6",
        san: "Qxd6+"
      },
      {
        from: "f7",
        to: "e6",
        san: "Be6#"
      }
    ],
    responseMoves: [
      "Kd8",
      "cxd6",
      "Kc8"
    ]
  },
  {
    fen: "2R2b2/4kp1p/3p2r1/3P3p/1P2P3/P3BPrP/8/2R4K b - - 5 40",
    correctMoves: [
      {
        from: "g3",
        to: "h3",
        san: "Rxh3#"
      }
    ],
    responseMoves: []
  },
  {
    fen: "3r2r1/1p3kp1/p4p2/7Q/PB6/8/1q3PPP/3RK2R b K - 7 29",
    correctMoves: [
      {
        from: "g7",
        to: "g6",
        san: "g6"
      },
      {
        from: "g8",
        to: "g7",
        san: "Rg7"
      },
      {
        from: "f7",
        to: "g7",
        san: "Kxg7"
      },
      {
        from: "d8",
        to: "d1",
        san: "Rxd1"
      }
    ],
    responseMoves: [
      "Qh7+",
      "Qxg7+",
      "0-0"
    ]
  }
  ,
  {
    fen: "rnbqkb1r/ppp2ppp/3p4/3Pp3/2P1n3/5P2/PP4PP/RNBQKBNR b KQkq c3 0 5",
    correctMoves: [
      {
        from: "d8",
        to: "h4",
        san: "Qh4+"
      },
      {
        from: "e4",
        to: "g3",
        san: "Nxg3"
      },
      {
        from: "h4",
        to: "h1",
        san: "Qxh1"
      },
    ],
    responseMoves: ["g3", "hxg3"],
  },
  {
    fen: "Q7/p1ppkp1p/2n5/8/3P4/2q3P1/P2NKP1P/5B1R b - - 0 17",
    correctMoves: [
      {
        from: "c6",
        to: "d4",
        san: "Nxd4+"
      },
      {
        from: "c3",
        to: "c2",
        san: "Qc2+"
      },
      {
        from: "c2",
        to: "c1",
        san: "Qc1#"
      },
    ],
    responseMoves: ["Kd1", "Ke1"],
  },
  {
    fen: "3r3k/3r3p/pR4p1/4pb2/NP4P1/2P1n2P/P3BR2/2K5 b - b3 0 28",
    correctMoves: [
      {
        from: "d7",
        to: "d1",
        san: "Rd1+"
      },
      {
        from: "d8",
        to: "d1",
        san: "Rxd1+"
      },
      {
        from: "d1",
        to: "b1",
        san: "Rb1+"
      },
      {
        from: "e3",
        to: "c4",
        san: "Nc4#"
      },
    ],
    responseMoves: ["Bxd1", "Kb2", "Ka3"],
  },
  {
    fen: "r1b1kb1r/1pp1q1pp/p1np1p1n/1B1Q4/4P3/2P1BN2/PP3PPP/RN2K2R w KQkq - 0 10",
    correctMoves: [
      {
        from: "b5",
        to: "c6",
        san: "Bxc6+"
      },
      {
        from: "d5",
        to: "c6",
        san: "Qxc6+"
      },
      {
        from: "c6",
        to: "a8",
        san: "Qxa8++"
      },
    ],
    responseMoves: ["bxc6", "Qd7"],
  },
  {
    fen: "rn2kb1r/p1p2ppp/b4n2/1q1Pp1N1/1p1P4/1QP2P2/PPB3PP/RNB1K2R b KQkq - 0 11",
    correctMoves: [
      {
        from: "b5",
        to: "e2",
        san: "Qe2#"
      },
    ],
    responseMoves: [],
  },
  {
    fen: "r3kbQ1/5p2/b3q2N/3prN2/1p6/5P2/1PP1p1PP/R2R3K w - - 0 31",
    correctMoves: [
      {
        from: "f5",
        to: "g7",
        san: "Ng7+"
      },
      {
        from: "g7",
        to: "e6",
        san: "Nxe6"
      },
      {
        from: "a1",
        to: "d1",
        san: "Rxd1"
      },
    ],
    responseMoves: ["Kd7", "exd1=Q+"],
  },
  {
    fen: "8/8/2R1k3/5pp1/8/3PKP1P/r7/8 b - - 4 40",
    correctMoves: [
      {
        from: "e6",
        to: "d5",
        san: "Kd5"
      },
      {
        from: "f5",
        to: "f4",
        san: "f4+"
      },
      {
        from: "g5",
        to: "f4",
        san: "gxf4+"
      },
    ],
    responseMoves: ["Rc4", "Rxf4"],
  },
  {
    fen: "1r6/8/p1Bp4/P1p1p1k1/1pP1PpP1/3P3R/1r6/5KR1 b - - 3 38",
    correctMoves: [
      {
        from: "b2",
        to: "b1",
        san: "Rb1+"
      },
      {
        from: "b1",
        to: "g1",
        san: "Rxg1"
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
    ],
    responseMoves: ["Kf2", "Kxg1", "Rh1"],
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
    fen: "4rk2/1p5p/1b5p/1p1pNp1P/1P3P2/P5P1/6K1/4R3 w - - 1 35",
    correctMoves: [
      {
        from: "e5",
        to: "d7",
        san: "Nd7+"
      },
      {
        from: "e1",
        to: "e8",
        san: "Rxe8"
      },
      {
        from: "d7",
        to: "b6",
        san: "Nxb6"
      },
    ],
    responseMoves: ["Kf7", "Kxe8"],
  },
  {
    fen: "rnbqkb1r/ppp3pp/3p2n1/4pQ2/2B1P3/8/PPPP1PPP/RNB1K2R w KQkq - 0 7",
    correctMoves: [
      {
        from: "f5",
        to: "f7",
        san: "Qf7#"
      },
    ],
    responseMoves: [],
  },
  {
    fen: "Rn2r1k1/2pb1ppp/8/2B5/1P6/6P1/2P2P1P/3NR1K1 b - - 2 26",
    correctMoves: [
      {
        from: "e8",
        to: "e1",
        san: "Rxe1+"
      },
      {
        from: "d7",
        to: "c6",
        san: "Bc6+"
      },
      {
        from: "c6",
        to: "a8",
        san: "Bxa8"
      },
    ],
    responseMoves: ["Kg2", "Kh3"],
  },
  {
    fen: "8/5pkp/1rq3p1/3pP3/7Q/b3B1P1/5PKP/8 w - - 0 2",
    correctMoves: [
      {
        from: "e3",
        to: "h6",
        san: "Bh6+"
      },
      {
        from: "h4",
        to: "d8",
        san: "Qd8+"
      },
      {
        from: "d8",
        to: "e8",
        san: "Qxe8+"
      },
    ],
    responseMoves: ["Kg8", "Qe8"],
  },
  {
    fen: "1k2rr2/1pp5/p7/3P4/8/6Q1/P4qPP/3RR2K b - - 3 25",
    correctMoves: [
      {
        from: "e8",
        to: "e1",
        san: "Rxe1+"
      },
      {
        from: "f2",
        to: "f1",
        san: "Qf1+"
      },
      {
        from: "f8",
        to: "f1",
        san: "Rxf1#"
      },
    ],
    responseMoves: ["Rxe1", "Rxf1"],
  },
  {
    fen: "rnbqk2r/ppp2ppp/5n2/3P4/1bPPpP2/2N5/PP4PP/R1BQKBNR w KQkq - 1 2",
    correctMoves: [
      {
        from: "d1",
        to: "a4",
        san: "Qa4+"
      },
      {
        from: "a4",
        to: "b4",
        san: "Qxb4"
      },
    ],
    responseMoves: ["c6"],
  },
  {
    fen: "8/3R1R1p/r1r3p1/6k1/6P1/5K1P/8/8 w - - 1 48",
    correctMoves: [
      {
        from: "d7",
        to: "d5",
        san: "Rd5+"
      },
      {
        from: "g4",
        to: "g5",
        san: "g5+"
      },
      {
        from: "f7",
        to: "h7",
        san: "Rxh7#"
      },
    ],
    responseMoves: ["Kh6", "Kh5"],
  },
  {
    fen: "8/p7/1p2pk1p/1P6/P3KPP1/8/8/8 w - - 1 2",
    correctMoves: [
      {
        from: "g4",
        to: "g5",
        san: "g5+"
      },
      {
        from: "f4",
        to: "g5",
        san: "fxg5+"
      },
      {
        from: "e4",
        to: "e5",
        san: "Ke5"
      },
    ],
    responseMoves: ["hxg5", "Kxg5"],
  },
  {
    fen: "1r3k2/2q4Q/n4pB1/1ppPp1p1/2P3P1/1P5P/6K1/8 w - - 1 2",
    correctMoves: [
      {
        from: "h7",
        to: "h8",
        san: "Qh8+"
      },
      {
        from: "h8",
        to: "g7",
        san: "Qg7+"
      },
      {
        from: "g7",
        to: "f6",
        san: "Qxf6+"
      },
    ],
    responseMoves: ["Ke7", "Kd6"],
  },
  {
    fen: "5r2/1p3pk1/p3p1p1/6Q1/P3bP1P/1B6/1PP2qP1/3R3K w - - 1 30",
    correctMoves: [
      {
        from: "g5",
        to: "e5",
        san: "Qe5+"
      },
      {
        from: "e5",
        to: "e4",
        san: "Qxe4"
      },
      {
        from: "h1",
        to: "g1",
        san: "Kg1"
      },
    ],
    responseMoves: ["Kh7", "Qxh4+"],
  },
  {
    fen: "4Rnk1/3q1pb1/3p2p1/3P4/PQbP2P1/5P2/P4BK1/8 w - - 1 2",
    correctMoves: [
      {
        from: "e8",
        to: "f8",
        san: "Rxf8+"
      },
      {
        from: "b4",
        to: "c4",
        san: "Qxc4"
      },
    ],
    responseMoves: ["Bxf8"],
  },
  {
    fen: "4r2r/p6Q/2p3p1/5pk1/3q4/3B2P1/2P2RK1/8 w - - 3 34",
    correctMoves: [
      {
        from: "f2",
        to: "f5",
        san: "Rxf5+"
      },
      {
        from: "h7",
        to: "f5",
        san: "Qxf5+"
      },
      {
        from: "f5",
        to: "g6",
        san: "Qg6#"
      },
    ],
    responseMoves: ["gxf5", "Kh6"],
  },
  {
    fen: "Q7/4k1p1/5pp1/p2pp1n1/P7/4q1P1/BP5P/1R3R1K b - - 0 29",
    correctMoves: [
      {
        from: "e3",
        to: "e4",
        san: "Qe4+"
      },
      {
        from: "e4",
        to: "f3",
        san: "Qxf3+"
      },
      {
        from: "g5",
        to: "h3",
        san: "Nh3#"
      },
    ],
    responseMoves: ["Rf3", "Kg1"],
  },
  {
    fen: "2kr2nr/p1p3pp/8/2p1n3/2B5/8/PPP2PPP/R2R2K1 w - - 0 15",
    correctMoves: [
      {
        from: "c4",
        to: "a6",
        san: "Ba6+"
      },
      {
        from: "d1",
        to: "d8",
        san: "Rxd8#"
      },
    ],
    responseMoves: ["Kb8"],
  },
  {
    fen: "3r3r/5p1k/2R1pPp1/p7/3R1Pp1/8/Pq2bQ1P/6K1 w - - 1 31",
    correctMoves: [
      {
        from: "f2",
        to: "h4",
        san: "Qh4+"
      },
      {
        from: "d4",
        to: "d8",
        san: "Rxd8#"
      },
    ],
    responseMoves: ["Kg8"],
  },
  {
    fen: "8/8/r3Rp2/1k1p1P2/1p1P4/2pK4/2P5/8 b - - 1 1",
    correctMoves: [
      {
        from: "a6",
        to: "e6",
        san: "Rxe6"
      },
      {
        from: "b5",
        to: "c6",
        san: "Kc6"
      },
      {
        from: "c6",
        to: "d7",
        san: "Kd7"
      },
    ],
    responseMoves: ["fxe6", "e7"],
  },
  {
    fen: "rnb2rk1/ppp2ppp/8/8/3q4/3B4/PPP2PPP/R2Q1RK1 w - - 0 2",
    correctMoves: [
      {
        from: "d3",
        to: "h7",
        san: "Bxh7+"
      },
      {
        from: "d1",
        to: "d4",
        san: "Qxd4"
      },
    ],
    responseMoves: ["Kxh7"],
  },
  {
    fen: "3B4/8/4b1pp/4pk2/B4b1P/5P2/5K2/8 w - - 4 37",
    correctMoves: [
      {
        from: "a4",
        to: "c2",
        san: "Bc2+"
      },
      {
        from: "c2",
        to: "e4",
        san: "Bxe4+"
      },
      {
        from: "d8",
        to: "c7",
        san: "Bc7+"
      },
      {
        from: "c7",
        to: "f4",
        san: "Bxf4"
      },
    ],
    responseMoves: ["e4", "Ke5", "Kf6"],
  },
  {
    fen: "3r1rk1/p1p2ppp/8/2b5/3q4/2N1B3/PPK1R1Q1/R7 b - - 15 31",
    correctMoves: [
      {
        from: "d4",
        to: "d3",
        san: "Qd3+"
      },
      {
        from: "c5",
        to: "e3",
        san: "Bxe3+"
      },
      {
        from: "d3",
        to: "e3",
        san: "Qxe3+"
      },
    ],
    responseMoves: ["Kc1", "Rxe3"],
  },
  {
    fen: "r5k1/2p2ppp/3p4/R3q3/4P3/8/3Q1PPP/R5K1 b - - 0 27",
    correctMoves: [
      {
        from: "e5",
        to: "a1",
        san: "Qxa1+"
      },
      {
        from: "a8",
        to: "a1",
        san: "Rxa1+"
      },
      {
        from: "a1",
        to: "d1",
        san: "Rxd1#"
      },
    ],
    responseMoves: ["Rxa1", "Qd1"],
  },
  {
    fen: "1k6/pp3N2/6p1/2Rp1b2/3P4/BP2q3/P3B2r/2RK4 w - - 0 30",
    correctMoves: [
      {
        from: "c5",
        to: "c8",
        san: "Rc8+"
      },
      {
        from: "a3",
        to: "d6",
        san: "Bd6+"
      },
      {
        from: "c1",
        to: "c8",
        san: "Rxc8#"
      },
    ],
    responseMoves: ["Bxc8", "Ka8"],
  },
  {
    fen: "r1bqkb1r/p1p2ppp/2pp4/8/2B1nP2/3P4/PPP3PP/RNBQK2R b KQkq - 0 7",
    correctMoves: [
      {
        from: "d8",
        to: "h4",
        san: "Qh4+"
      },
      {
        from: "e4",
        to: "g3",
        san: "Nxg3"
      },
      {
        from: "h4",
        to: "h1",
        san: "Qxh1+"
      },
    ],
    responseMoves: ["g3", "hxg3"],
  },
  {
    fen: "k2r1b2/p2r1ppp/2p5/3NP3/5Pn1/3R4/P1P3P1/1R3K2 w - - 2 25",
    correctMoves: [
      {
        from: "d5",
        to: "c7",
        san: "Nc7+"
      },
      {
        from: "d3",
        to: "d8",
        san: "Rxd8+"
      },
      {
        from: "d8",
        to: "c8",
        san: "Rxc8#"
      },
    ],
    responseMoves: ["Rxc7", "Rc8"],
  },
  {
    fen: "2rr2k1/pp3ppp/3qp3/4Nbb1/1n1P4/P1N1P2P/1P1QB1P1/2RR2K1 b - - 0 1",
    correctMoves: [
      {
        from: "d6",
        to: "e5",
        san: "Qxe5"
      },
      {
        from: "d8",
        to: "d2",
        san: "Rxd2"
      },
      {
        from: "g5",
        to: "e3",
        san: "Bxe3+"
      },
    ],
    responseMoves: ["dxe5", "Rxd2"],
  },
  {
    fen: "r6r/p7/2P2pkp/4pRp1/2P1Qb1q/2P5/P2N2PP/R2K4 b - - 2 23",
    correctMoves: [
      {
        from: "h4",
        to: "g4",
        san: "Qg4+"
      },
      {
        from: "g4",
        to: "f5",
        san: "Qxf5"
      },
      {
        from: "g6",
        to: "f5",
        san: "Kxf5"
      },
    ],
    responseMoves: ["Kc2", "Qxf5"],
  },
  {
    fen: "2kr1bnr/pbpp2qp/1p2pp2/4N3/P6B/2NP4/1PP1BPPP/R2Q1RK1 b - - 0 11",
    correctMoves: [
      {
        from: "g7",
        to: "g2",
        san: "Qxg2#"
      },
    ],
    responseMoves: [],
  },
  {
    fen: "r2q1knr/ppp2ppp/2np4/1B6/3bP3/5Q2/PP3PPP/RNBR2K1 w - - 1 2",
    correctMoves: [
      {
        from: "b5",
        to: "c6",
        san: "Bxc6"
      },
      {
        from: "d1",
        to: "d4",
        san: "Rxd4"
      },
    ],
    responseMoves: ["bxc6"],
  },
  {
    fen: "r6k/1pp2p2/2b1p3/1p5p/1b2qP2/7Q/PP4RP/7K w - - 0 29",
    correctMoves: [
      {
        from: "h3",
        to: "h5",
        san: "Qxh5+"
      },
      {
        from: "h5",
        to: "e5",
        san: "Qe5+"
      },
      {
        from: "e5",
        to: "f6",
        san: "Qxf6+"
      },
      {
        from: "f6",
        to: "g7",
        san: "Qxg7#"
      },
    ],
    responseMoves: ["Qh7", "f6", "Qg7"],
  },
  {
    fen: "rn1qk1nr/pbp2ppp/1p2p3/8/2BP4/P1P1P3/5PPP/R1BQK1NR b KQkq - 0 1",
    correctMoves: [
      {
        from: "b7",
        to: "g2",
        san: "Bxg2"
      },
      {
        from: "g2",
        to: "h1",
        san: "Bxh1"
      },
      {
        from: "d8",
        to: "f6",
        san: "Qf6"
      },
    ],
    responseMoves: ["Qg4", "Qxg7"],
  },
  {
    fen: "7k/p3b1p1/1pQ4p/2P1p3/4Pp2/P4q2/1P3rRB/7K w - - 0 34",
    correctMoves: [
      {
        from: "c6",
        to: "e8",
        san: "Qe8+"
      },
      {
        from: "e8",
        to: "g6",
        san: "Qg6+"
      },
      {
        from: "g6",
        to: "g7",
        san: "Qxg7#"
      },
    ],
    responseMoves: ["Kh7", "Kg8"],
  },
  {
    fen: "4kbnr/pp2p1pp/1q1rB3/8/6P1/4QP2/P2B1K1P/3RR3 b k - 1 1",
    correctMoves: [
      {
        from: "d6",
        to: "e6",
        san: "Rxe6"
      },
      {
        from: "e6",
        to: "b6",
        san: "Rxb6"
      },
    ],
    responseMoves: ["Qxb6"],
  },
  {
    fen: "rn2k2r/pp2bppp/2pB4/5p2/q2P4/1PP2P2/2K1Q1PP/3R2NR b kq - 0 15",
    correctMoves: [
      {
        from: "a4",
        to: "a2",
        san: "Qa2+"
      },
      {
        from: "a2",
        to: "e2",
        san: "Qxe2+"
      },
      {
        from: "e7",
        to: "d6",
        san: "Bxd6+"
      },
    ],
    responseMoves: ["Kd3", "Kxe2"],
  },
  {
    fen: "6rk/p4p1p/1p1pbPpQ/4b3/2PqP3/PR3R2/4B1PP/7K w - - 1 2",
    correctMoves: [
      {
        from: "h6",
        to: "h7",
        san: "Qxh7+"
      },
      {
        from: "f3",
        to: "h3",
        san: "Rh3+"
      },
      {
        from: "b3",
        to: "h3",
        san: "Rxh3#"
      },
    ],
    responseMoves: ["Kxh7", "Bxh3"],
  },
  {
    fen: "6k1/5p2/8/6pp/4P3/5PP1/P1K5/8 b - - 1 49",
    correctMoves: [
      {
        from: "h5",
        to: "h4",
        san: "h4"
      },
      {
        from: "g5",
        to: "h4",
        san: "gxh4"
      },
      {
        from: "h4",
        to: "h3",
        san: "h3"
      },
      {
        from: "h3",
        to: "h2",
        san: "h2"
      },
    ],
    responseMoves: ["gxh4", "Kd3", "Ke3"],
  },
  {
    fen: "1k6/1p1P1K2/p1p5/2P2n2/8/8/8/8 b - - 8 64",
    correctMoves: [
      {
        from: "b8",
        to: "c7",
        san: "Kc7"
      },
      {
        from: "f5",
        to: "g7",
        san: "Ng7+"
      },
    ],
    responseMoves: ["Ke8"],
  },
  {
    fen: "3q1rk1/5pp1/1p1p3p/p1n3b1/3NPB2/P3Q3/1P3PPP/2R3K1 b - - 0 23",
    correctMoves: [
      {
        from: "g5",
        to: "f4",
        san: "Bxf4"
      },
      {
        from: "c5",
        to: "d3",
        san: "Nd3"
      },
      {
        from: "d3",
        to: "c1",
        san: "Nxc1"
      },
    ],
    responseMoves: ["Qxf4", "Qe3"],
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
  }
  ,
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
  }
  ,
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
  }
  ,
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
  }
  ,
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
  }
  ,
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
  }
  ,
  {
    fen: "r1b5/3kr1P1/1pp5/8/1P6/P1Q2p1n/5P1P/R4K1R b - - 0 28",
    correctMoves: [
      {
        from: "c8",
        to: "a6",
        san: "Ba6+"
      },
      {
        from: "a6",
        to: "b5",
        san: "Bxb5+"
      },
    ],
    responseMoves: ["b5"],
  }
  ,
  {
    fen: "r4rk1/ppqb2pp/3b1pn1/2pPn2Q/8/1P2PN2/PB1PB1PP/RN3RK1 b - - 0 1",
    correctMoves: [
      {
        from: "d7",
        to: "g4",
        san: "Bg4"
      },
      {
        from: "g4",
        to: "h5",
        san: "Bxh5"
      },
      {
        from: "c7",
        to: "d6",
        san: "Qxd6"
      },
    ],
    responseMoves: ["Bxe5", "Bxd6"],
  }
  ,
  {
    fen: "1k1r4/ppp1p3/4B2b/5P1p/5p2/N1P4P/PP2K3/3R4 b - - 1 21",
    correctMoves: [
      {
        from: "f4",
        to: "f3",
        san: "f3+"
      },
      {
        from: "f3",
        to: "f2",
        san: "f2+"
      },
      {
        from: "d8",
        to: "d1",
        san: "Rxd1"
      },
    ],
    responseMoves: ["Ke1", "Kxf2"],
  }
  ,
  {
    fen: "r1bqkb1r/1pp2ppp/p1n5/1B1np3/Q7/2P2N2/PP1P1PPP/RNB1K2R w KQkq - 0 7",
    correctMoves: [
      {
        from: "b5",
        to: "c6",
        san: "Bxc6+"
      },
      {
        from: "a4",
        to: "c6",
        san: "Qxc6+"
      },
      {
        from: "c6",
        to: "d5",
        san: "Qxd5"
      },
    ],
    responseMoves: ["bxc6", "Bd7"],
  }
  ,
  {
    fen: "5r1k/pp2b1pp/2np4/3Qp3/2P5/1P4B1/P1q1B1PP/5RK1 w - - 5 21",
    correctMoves: [
      {
        from: "f1",
        to: "f8",
        san: "Rxf8+"
      },
      {
        from: "d5",
        to: "f7",
        san: "Qf7"
      },
      {
        from: "f7",
        to: "f8",
        san: "Qxf8+"
      },
    ],
    responseMoves: ["Bxf8", "h6"],
  }
  ,
  {
    fen: "r2r2k1/p1p3pp/1p2b3/4Pp2/5P2/q1P1B1P1/PQ5P/RR4K1 b - - 3 22",
    correctMoves: [
      {
        from: "d8",
        to: "d1",
        san: "Rd1+"
      },
      {
        from: "a3",
        to: "b2",
        san: "Qxb2+"
      },
      {
        from: "d1",
        to: "a1",
        san: "Rxd1"
      },
    ],
    responseMoves: ["Kf2", "Rxb2"],
  }
  ,
  {
    fen: "rr4k1/3q1pb1/4n1p1/3pP1P1/3P3Q/7R/pp1N1PK1/7R w - - 0 2",
    correctMoves: [
      {
        from: "h5",
        to: "h8",
        san: "Qh8+"
      },
      {
        from: "h3",
        to: "h8",
        san: "Rxh8+"
      },
      {
        from: "h1",
        to: "h7",
        san: "R1h7#"
      },
    ],
    responseMoves: ["Bxh8", "Kg7"],
  }
  ,
  {
    fen: "r5k1/pppbQ1pp/4p3/8/2N5/8/PPP1q3/5RK1 w - - 10 28",
    correctMoves: [
      {
        from: "e7",
        to: "f7",
        san: "Qf7+"
      },
      {
        from: "f7",
        to: "f8",
        san: "Qf8+"
      },
      {
        from: "f1",
        to: "f8",
        san: "Rxf8#"
      },
    ],
    responseMoves: ["Kh8", "Rxf8"],
  }
  ,
  {
    fen: "8/8/4p1K1/4k3/6p1/6P1/5P2/8 b - - 1 53",
    correctMoves: [
      {
        from: "e5",
        to: "e4",
        san: "Ke4"
      },
      {
        from: "e4",
        to: "f3",
        san: "Kf3"
      },
      {
        from: "f3",
        to: "f2",
        san: "Kxf2"
      },
      {
        from: "e6",
        to: "e5",
        san: "e5+"
      },
      {
        from: "e5",
        to: "e4",
        san: "e4"
      },
      {
        from: "e4",
        to: "e3",
        san: "e3"
      },
      {
        from: "e3",
        to: "e2",
        san: "e2"
      },
    ],
    responseMoves: ["Kf6", "Ke5", "Kf4", "Kxg4", "Kf4", "g4"],
  }
  ,
  {
    fen: "8/2P2p2/8/PR6/6pk/r7/6PK/8 b - - 0 45",
    correctMoves: [
      {
        from: "g4",
        to: "g3",
        san: "g3+"
      },
      {
        from: "a3",
        to: "a1",
        san: "Ra1+"
      },
      {
        from: "a1",
        to: "b1",
        san: "Rxb1#"
      }
    ],
    responseMoves: ["Kh1", "Rb1"],
  }
  ,
  {
    fen: "8/R7/3p1Rp1/3Pp2p/4P2k/4PK2/1r4P1/8 b - - 3 41",
    correctMoves: [
      {
        from: "g6",
        to: "g5",
        san: "g5"
      },
      {
        from: "h4",
        to: "h3",
        san: "Kh3"
      },
      {
        from: "g5",
        to: "g4",
        san: "g4+"
      },
      {
        from: "h5",
        to: "g4",
        san: "hxg4#"
      }
    ],
    responseMoves: ["g3+", "Rg7", "Rxg4"]
  }
  ,
  {
    fen: "r2q1rk1/1p1b1ppp/p7/3Nb3/B7/8/PP3PPP/R2Q1RK1 b - - 0 1",
    correctMoves: [
      {
        from: "d7",
        to: "a4",
        san: "Bxa4"
      },
      {
        from: "d8",
        to: "d5",
        san: "Qxd5"
      }
    ],
    responseMoves: [
      "Qxa4"
    ]
  },
  {
    fen: "rnbqk1nr/p5pp/1p1bp3/1p1pN3/3P4/2N2Q2/PPP2PPP/R1B1K2R w KQkq - 0 10",
    correctMoves: [
      {
        from: "f3",
        to: "f7",
        san: "Qf7#"
      }
    ],
    responseMoves: []
  }
  ,
  {
    fen: "5rk1/p3pp1p/2n3p1/5bN1/1P6/P2B1Q2/6PP/qN2K2R b K - 1 1",
    correctMoves: [
      {
        from: "c6",
        to: "e5",
        san: "Ne5"
      },
      {
        from: "e5",
        to: "f3",
        san: "Nxf3+"
      }
    ],
    responseMoves: [
      "Bxf5"
    ]
  },
  {
    fen: "2k5/pppr4/5KB1/8/2P2p2/1P3r2/P7/4R3 w - - 0 36",
    correctMoves: [
      {
        from: "e1",
        to: "e8",
        san: "Re8+"
      },
      {
        from: "g6",
        to: "f5",
        san: "Bf5+"
      },
      {
        from: "e8",
        to: "d8",
        san: "Rxd8#"
      }
    ],
    responseMoves: [
      "Rd8",
      "Kb8"
    ]
  }
  ,
  {
    fen: "5rk1/1R4p1/2p1p2p/2PpN1q1/1P1P2Pp/4P1nP/6PK/4Q3 b - - 0 37",
    correctMoves: [
      {
        from: "f8",
        to: "f1",
        san: "Rf1"
      },
      {
        from: "g8",
        to: "h7",
        san: "Kh7"
      },
      {
        from: "g3",
        to: "f1",
        san: "Nxf1+"
      }
    ],
    responseMoves: [
      "Rb8+",
      "Qxf1"
    ]
  },
  {
    fen: "5r1r/1pp1kB2/p2p3p/6p1/1P6/PQ1R4/1KP2q1P/8 w - - 4 32",
    correctMoves: [
      {
        from: "b3",
        to: "e6",
        san: "Qe6+"
      },
      {
        from: "d3",
        to: "d6",
        san: "Rxd6+"
      },
      {
        from: "e6",
        to: "d6",
        san: "Qxd6+"
      },
      {
        from: "f7",
        to: "e6",
        san: "Be6#"
      }
    ],
    responseMoves: [
      "Kd8",
      "cxd6",
      "Kc8"
    ]
  },
  {
    fen: "2R2b2/4kp1p/3p2r1/3P3p/1P2P3/P3BPrP/8/2R4K b - - 5 40",
    correctMoves: [
      {
        from: "g3",
        to: "h3",
        san: "Rxh3#"
      }
    ],
    responseMoves: []
  },
  {
    fen: "3r2r1/1p3kp1/p4p2/7Q/PB6/8/1q3PPP/3RK2R b K - 7 29",
    correctMoves: [
      {
        from: "g7",
        to: "g6",
        san: "g6"
      },
      {
        from: "g8",
        to: "g7",
        san: "Rg7"
      },
      {
        from: "f7",
        to: "g7",
        san: "Kxg7"
      },
      {
        from: "d8",
        to: "d1",
        san: "Rxd1"
      }
    ],
    responseMoves: [
      "Qh7+",
      "Qxg7+",
      "0-0"
    ]
  }
  ,
  {
    fen: "rnbqkb1r/ppp2ppp/3p4/3Pp3/2P1n3/5P2/PP4PP/RNBQKBNR b KQkq c3 0 5",
    correctMoves: [
      {
        from: "d8",
        to: "h4",
        san: "Qh4+"
      },
      {
        from: "e4",
        to: "g3",
        san: "Nxg3"
      },
      {
        from: "h4",
        to: "h1",
        san: "Qxh1"
      },
    ],
    responseMoves: ["g3", "hxg3"],
  },
  {
    fen: "Q7/p1ppkp1p/2n5/8/3P4/2q3P1/P2NKP1P/5B1R b - - 0 17",
    correctMoves: [
      {
        from: "c6",
        to: "d4",
        san: "Nxd4+"
      },
      {
        from: "c3",
        to: "c2",
        san: "Qc2+"
      },
      {
        from: "c2",
        to: "c1",
        san: "Qc1#"
      },
    ],
    responseMoves: ["Kd1", "Ke1"],
  },
  {
    fen: "3r3k/3r3p/pR4p1/4pb2/NP4P1/2P1n2P/P3BR2/2K5 b - b3 0 28",
    correctMoves: [
      {
        from: "d7",
        to: "d1",
        san: "Rd1+"
      },
      {
        from: "d8",
        to: "d1",
        san: "Rxd1+"
      },
      {
        from: "d1",
        to: "b1",
        san: "Rb1+"
      },
      {
        from: "e3",
        to: "c4",
        san: "Nc4#"
      },
    ],
    responseMoves: ["Bxd1", "Kb2", "Ka3"],
  },
  {
    fen: "r1b1kb1r/1pp1q1pp/p1np1p1n/1B1Q4/4P3/2P1BN2/PP3PPP/RN2K2R w KQkq - 0 10",
    correctMoves: [
      {
        from: "b5",
        to: "c6",
        san: "Bxc6+"
      },
      {
        from: "d5",
        to: "c6",
        san: "Qxc6+"
      },
      {
        from: "c6",
        to: "a8",
        san: "Qxa8++"
      },
    ],
    responseMoves: ["bxc6", "Qd7"],
  },
  {
    fen: "rn2kb1r/p1p2ppp/b4n2/1q1Pp1N1/1p1P4/1QP2P2/PPB3PP/RNB1K2R b KQkq - 0 11",
    correctMoves: [
      {
        from: "b5",
        to: "e2",
        san: "Qe2#"
      },
    ],
    responseMoves: [],
  },
  {
    fen: "r3kbQ1/5p2/b3q2N/3prN2/1p6/5P2/1PP1p1PP/R2R3K w - - 0 31",
    correctMoves: [
      {
        from: "f5",
        to: "g7",
        san: "Ng7+"
      },
      {
        from: "g7",
        to: "e6",
        san: "Nxe6"
      },
      {
        from: "a1",
        to: "d1",
        san: "Rxd1"
      },
    ],
    responseMoves: ["Kd7", "exd1=Q+"],
  },
  {
    fen: "8/8/2R1k3/5pp1/8/3PKP1P/r7/8 b - - 4 40",
    correctMoves: [
      {
        from: "e6",
        to: "d5",
        san: "Kd5"
      },
      {
        from: "f5",
        to: "f4",
        san: "f4+"
      },
      {
        from: "g5",
        to: "f4",
        san: "gxf4+"
      },
    ],
    responseMoves: ["Rc4", "Rxf4"],
  },
  {
    fen: "1r6/8/p1Bp4/P1p1p1k1/1pP1PpP1/3P3R/1r6/5KR1 b - - 3 38",
    correctMoves: [
      {
        from: "b2",
        to: "b1",
        san: "Rb1+"
      },
      {
        from: "b1",
        to: "g1",
        san: "Rxg1"
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
    ],
    responseMoves: ["Kf2", "Kxg1", "Rh1"],
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
    fen: "4rk2/1p5p/1b5p/1p1pNp1P/1P3P2/P5P1/6K1/4R3 w - - 1 35",
    correctMoves: [
      {
        from: "e5",
        to: "d7",
        san: "Nd7+"
      },
      {
        from: "e1",
        to: "e8",
        san: "Rxe8"
      },
      {
        from: "d7",
        to: "b6",
        san: "Nxb6"
      },
    ],
    responseMoves: ["Kf7", "Kxe8"],
  },
  {
    fen: "rnbqkb1r/ppp3pp/3p2n1/4pQ2/2B1P3/8/PPPP1PPP/RNB1K2R w KQkq - 0 7",
    correctMoves: [
      {
        from: "f5",
        to: "f7",
        san: "Qf7#"
      },
    ],
    responseMoves: [],
  },
  {
    fen: "Rn2r1k1/2pb1ppp/8/2B5/1P6/6P1/2P2P1P/3NR1K1 b - - 2 26",
    correctMoves: [
      {
        from: "e8",
        to: "e1",
        san: "Rxe1+"
      },
      {
        from: "d7",
        to: "c6",
        san: "Bc6+"
      },
      {
        from: "c6",
        to: "a8",
        san: "Bxa8"
      },
    ],
    responseMoves: ["Kg2", "Kh3"],
  },
  {
    fen: "8/5pkp/1rq3p1/3pP3/7Q/b3B1P1/5PKP/8 w - - 0 2",
    correctMoves: [
      {
        from: "e3",
        to: "h6",
        san: "Bh6+"
      },
      {
        from: "h4",
        to: "d8",
        san: "Qd8+"
      },
      {
        from: "d8",
        to: "e8",
        san: "Qxe8+"
      },
    ],
    responseMoves: ["Kg8", "Qe8"],
  },
  {
    fen: "1k2rr2/1pp5/p7/3P4/8/6Q1/P4qPP/3RR2K b - - 3 25",
    correctMoves: [
      {
        from: "e8",
        to: "e1",
        san: "Rxe1+"
      },
      {
        from: "f2",
        to: "f1",
        san: "Qf1+"
      },
      {
        from: "f8",
        to: "f1",
        san: "Rxf1#"
      },
    ],
    responseMoves: ["Rxe1", "Rxf1"],
  },
  {
    fen: "rnbqk2r/ppp2ppp/5n2/3P4/1bPPpP2/2N5/PP4PP/R1BQKBNR w KQkq - 1 2",
    correctMoves: [
      {
        from: "d1",
        to: "a4",
        san: "Qa4+"
      },
      {
        from: "a4",
        to: "b4",
        san: "Qxb4"
      },
    ],
    responseMoves: ["c6"],
  },
  {
    fen: "8/3R1R1p/r1r3p1/6k1/6P1/5K1P/8/8 w - - 1 48",
    correctMoves: [
      {
        from: "d7",
        to: "d5",
        san: "Rd5+"
      },
      {
        from: "g4",
        to: "g5",
        san: "g5+"
      },
      {
        from: "f7",
        to: "h7",
        san: "Rxh7#"
      },
    ],
    responseMoves: ["Kh6", "Kh5"],
  },
  {
    fen: "8/p7/1p2pk1p/1P6/P3KPP1/8/8/8 w - - 1 2",
    correctMoves: [
      {
        from: "g4",
        to: "g5",
        san: "g5+"
      },
      {
        from: "f4",
        to: "g5",
        san: "fxg5+"
      },
      {
        from: "e4",
        to: "e5",
        san: "Ke5"
      },
    ],
    responseMoves: ["hxg5", "Kxg5"],
  },
  {
    fen: "1r3k2/2q4Q/n4pB1/1ppPp1p1/2P3P1/1P5P/6K1/8 w - - 1 2",
    correctMoves: [
      {
        from: "h7",
        to: "h8",
        san: "Qh8+"
      },
      {
        from: "h8",
        to: "g7",
        san: "Qg7+"
      },
      {
        from: "g7",
        to: "f6",
        san: "Qxf6+"
      },
    ],
    responseMoves: ["Ke7", "Kd6"],
  },
  {
    fen: "5r2/1p3pk1/p3p1p1/6Q1/P3bP1P/1B6/1PP2qP1/3R3K w - - 1 30",
    correctMoves: [
      {
        from: "g5",
        to: "e5",
        san: "Qe5+"
      },
      {
        from: "e5",
        to: "e4",
        san: "Qxe4"
      },
      {
        from: "h1",
        to: "g1",
        san: "Kg1"
      },
    ],
    responseMoves: ["Kh7", "Qxh4+"],
  },
  {
    fen: "4Rnk1/3q1pb1/3p2p1/3P4/PQbP2P1/5P2/P4BK1/8 w - - 1 2",
    correctMoves: [
      {
        from: "e8",
        to: "f8",
        san: "Rxf8+"
      },
      {
        from: "b4",
        to: "c4",
        san: "Qxc4"
      },
    ],
    responseMoves: ["Bxf8"],
  },
  {
    fen: "4r2r/p6Q/2p3p1/5pk1/3q4/3B2P1/2P2RK1/8 w - - 3 34",
    correctMoves: [
      {
        from: "f2",
        to: "f5",
        san: "Rxf5+"
      },
      {
        from: "h7",
        to: "f5",
        san: "Qxf5+"
      },
      {
        from: "f5",
        to: "g6",
        san: "Qg6#"
      },
    ],
    responseMoves: ["gxf5", "Kh6"],
  },
  {
    fen: "Q7/4k1p1/5pp1/p2pp1n1/P7/4q1P1/BP5P/1R3R1K b - - 0 29",
    correctMoves: [
      {
        from: "e3",
        to: "e4",
        san: "Qe4+"
      },
      {
        from: "e4",
        to: "f3",
        san: "Qxf3+"
      },
      {
        from: "g5",
        to: "h3",
        san: "Nh3#"
      },
    ],
    responseMoves: ["Rf3", "Kg1"],
  },
  {
    fen: "2kr2nr/p1p3pp/8/2p1n3/2B5/8/PPP2PPP/R2R2K1 w - - 0 15",
    correctMoves: [
      {
        from: "c4",
        to: "a6",
        san: "Ba6+"
      },
      {
        from: "d1",
        to: "d8",
        san: "Rxd8#"
      },
    ],
    responseMoves: ["Kb8"],
  },
  {
    fen: "3r3r/5p1k/2R1pPp1/p7/3R1Pp1/8/Pq2bQ1P/6K1 w - - 1 31",
    correctMoves: [
      {
        from: "f2",
        to: "h4",
        san: "Qh4+"
      },
      {
        from: "d4",
        to: "d8",
        san: "Rxd8#"
      },
    ],
    responseMoves: ["Kg8"],
  },
  {
    fen: "8/8/r3Rp2/1k1p1P2/1p1P4/2pK4/2P5/8 b - - 1 1",
    correctMoves: [
      {
        from: "a6",
        to: "e6",
        san: "Rxe6"
      },
      {
        from: "b5",
        to: "c6",
        san: "Kc6"
      },
      {
        from: "c6",
        to: "d7",
        san: "Kd7"
      },
    ],
    responseMoves: ["fxe6", "e7"],
  },
  {
    fen: "rnb2rk1/ppp2ppp/8/8/3q4/3B4/PPP2PPP/R2Q1RK1 w - - 0 2",
    correctMoves: [
      {
        from: "d3",
        to: "h7",
        san: "Bxh7+"
      },
      {
        from: "d1",
        to: "d4",
        san: "Qxd4"
      },
    ],
    responseMoves: ["Kxh7"],
  },
  {
    fen: "3B4/8/4b1pp/4pk2/B4b1P/5P2/5K2/8 w - - 4 37",
    correctMoves: [
      {
        from: "a4",
        to: "c2",
        san: "Bc2+"
      },
      {
        from: "c2",
        to: "e4",
        san: "Bxe4+"
      },
      {
        from: "d8",
        to: "c7",
        san: "Bc7+"
      },
      {
        from: "c7",
        to: "f4",
        san: "Bxf4"
      },
    ],
    responseMoves: ["e4", "Ke5", "Kf6"],
  },
  {
    fen: "3r1rk1/p1p2ppp/8/2b5/3q4/2N1B3/PPK1R1Q1/R7 b - - 15 31",
    correctMoves: [
      {
        from: "d4",
        to: "d3",
        san: "Qd3+"
      },
      {
        from: "c5",
        to: "e3",
        san: "Bxe3+"
      },
      {
        from: "d3",
        to: "e3",
        san: "Qxe3+"
      },
    ],
    responseMoves: ["Kc1", "Rxe3"],
  },
  {
    fen: "r5k1/2p2ppp/3p4/R3q3/4P3/8/3Q1PPP/R5K1 b - - 0 27",
    correctMoves: [
      {
        from: "e5",
        to: "a1",
        san: "Qxa1+"
      },
      {
        from: "a8",
        to: "a1",
        san: "Rxa1+"
      },
      {
        from: "a1",
        to: "d1",
        san: "Rxd1#"
      },
    ],
    responseMoves: ["Rxa1", "Qd1"],
  },
  {
    fen: "1k6/pp3N2/6p1/2Rp1b2/3P4/BP2q3/P3B2r/2RK4 w - - 0 30",
    correctMoves: [
      {
        from: "c5",
        to: "c8",
        san: "Rc8+"
      },
      {
        from: "a3",
        to: "d6",
        san: "Bd6+"
      },
      {
        from: "c1",
        to: "c8",
        san: "Rxc8#"
      },
    ],
    responseMoves: ["Bxc8", "Ka8"],
  },
  {
    fen: "r1bqkb1r/p1p2ppp/2pp4/8/2B1nP2/3P4/PPP3PP/RNBQK2R b KQkq - 0 7",
    correctMoves: [
      {
        from: "d8",
        to: "h4",
        san: "Qh4+"
      },
      {
        from: "e4",
        to: "g3",
        san: "Nxg3"
      },
      {
        from: "h4",
        to: "h1",
        san: "Qxh1+"
      },
    ],
    responseMoves: ["g3", "hxg3"],
  },
  {
    fen: "k2r1b2/p2r1ppp/2p5/3NP3/5Pn1/3R4/P1P3P1/1R3K2 w - - 2 25",
    correctMoves: [
      {
        from: "d5",
        to: "c7",
        san: "Nc7+"
      },
      {
        from: "d3",
        to: "d8",
        san: "Rxd8+"
      },
      {
        from: "d8",
        to: "c8",
        san: "Rxc8#"
      },
    ],
    responseMoves: ["Rxc7", "Rc8"],
  },
  {
    fen: "2rr2k1/pp3ppp/3qp3/4Nbb1/1n1P4/P1N1P2P/1P1QB1P1/2RR2K1 b - - 0 1",
    correctMoves: [
      {
        from: "d6",
        to: "e5",
        san: "Qxe5"
      },
      {
        from: "d8",
        to: "d2",
        san: "Rxd2"
      },
      {
        from: "g5",
        to: "e3",
        san: "Bxe3+"
      },
    ],
    responseMoves: ["dxe5", "Rxd2"],
  },
  {
    fen: "r6r/p7/2P2pkp/4pRp1/2P1Qb1q/2P5/P2N2PP/R2K4 b - - 2 23",
    correctMoves: [
      {
        from: "h4",
        to: "g4",
        san: "Qg4+"
      },
      {
        from: "g4",
        to: "f5",
        san: "Qxf5"
      },
      {
        from: "g6",
        to: "f5",
        san: "Kxf5"
      },
    ],
    responseMoves: ["Kc2", "Qxf5"],
  },
  {
    fen: "2kr1bnr/pbpp2qp/1p2pp2/4N3/P6B/2NP4/1PP1BPPP/R2Q1RK1 b - - 0 11",
    correctMoves: [
      {
        from: "g7",
        to: "g2",
        san: "Qxg2#"
      },
    ],
    responseMoves: [],
  },
  {
    fen: "r2q1knr/ppp2ppp/2np4/1B6/3bP3/5Q2/PP3PPP/RNBR2K1 w - - 1 2",
    correctMoves: [
      {
        from: "b5",
        to: "c6",
        san: "Bxc6"
      },
      {
        from: "d1",
        to: "d4",
        san: "Rxd4"
      },
    ],
    responseMoves: ["bxc6"],
  },
  {
    fen: "r6k/1pp2p2/2b1p3/1p5p/1b2qP2/7Q/PP4RP/7K w - - 0 29",
    correctMoves: [
      {
        from: "h3",
        to: "h5",
        san: "Qxh5+"
      },
      {
        from: "h5",
        to: "e5",
        san: "Qe5+"
      },
      {
        from: "e5",
        to: "f6",
        san: "Qxf6+"
      },
      {
        from: "f6",
        to: "g7",
        san: "Qxg7#"
      },
    ],
    responseMoves: ["Qh7", "f6", "Qg7"],
  },
  {
    fen: "rn1qk1nr/pbp2ppp/1p2p3/8/2BP4/P1P1P3/5PPP/R1BQK1NR b KQkq - 0 1",
    correctMoves: [
      {
        from: "b7",
        to: "g2",
        san: "Bxg2"
      },
      {
        from: "g2",
        to: "h1",
        san: "Bxh1"
      },
      {
        from: "d8",
        to: "f6",
        san: "Qf6"
      },
    ],
    responseMoves: ["Qg4", "Qxg7"],
  },
  {
    fen: "7k/p3b1p1/1pQ4p/2P1p3/4Pp2/P4q2/1P3rRB/7K w - - 0 34",
    correctMoves: [
      {
        from: "c6",
        to: "e8",
        san: "Qe8+"
      },
      {
        from: "e8",
        to: "g6",
        san: "Qg6+"
      },
      {
        from: "g6",
        to: "g7",
        san: "Qxg7#"
      },
    ],
    responseMoves: ["Kh7", "Kg8"],
  },
  {
    fen: "4kbnr/pp2p1pp/1q1rB3/8/6P1/4QP2/P2B1K1P/3RR3 b k - 1 1",
    correctMoves: [
      {
        from: "d6",
        to: "e6",
        san: "Rxe6"
      },
      {
        from: "e6",
        to: "b6",
        san: "Rxb6"
      },
    ],
    responseMoves: ["Qxb6"],
  },
  {
    fen: "rn2k2r/pp2bppp/2pB4/5p2/q2P4/1PP2P2/2K1Q1PP/3R2NR b kq - 0 15",
    correctMoves: [
      {
        from: "a4",
        to: "a2",
        san: "Qa2+"
      },
      {
        from: "a2",
        to: "e2",
        san: "Qxe2+"
      },
      {
        from: "e7",
        to: "d6",
        san: "Bxd6+"
      },
    ],
    responseMoves: ["Kd3", "Kxe2"],
  },
  {
    fen: "6rk/p4p1p/1p1pbPpQ/4b3/2PqP3/PR3R2/4B1PP/7K w - - 1 2",
    correctMoves: [
      {
        from: "h6",
        to: "h7",
        san: "Qxh7+"
      },
      {
        from: "f3",
        to: "h3",
        san: "Rh3+"
      },
      {
        from: "b3",
        to: "h3",
        san: "Rxh3#"
      },
    ],
    responseMoves: ["Kxh7", "Bxh3"],
  },
  {
    fen: "6k1/5p2/8/6pp/4P3/5PP1/P1K5/8 b - - 1 49",
    correctMoves: [
      {
        from: "h5",
        to: "h4",
        san: "h4"
      },
      {
        from: "g5",
        to: "h4",
        san: "gxh4"
      },
      {
        from: "h4",
        to: "h3",
        san: "h3"
      },
      {
        from: "h3",
        to: "h2",
        san: "h2"
      },
    ],
    responseMoves: ["gxh4", "Kd3", "Ke3"],
  },
  {
    fen: "1k6/1p1P1K2/p1p5/2P2n2/8/8/8/8 b - - 8 64",
    correctMoves: [
      {
        from: "b8",
        to: "c7",
        san: "Kc7"
      },
      {
        from: "f5",
        to: "g7",
        san: "Ng7+"
      },
    ],
    responseMoves: ["Ke8"],
  },
  {
    fen: "3q1rk1/5pp1/1p1p3p/p1n3b1/3NPB2/P3Q3/1P3PPP/2R3K1 b - - 0 23",
    correctMoves: [
      {
        from: "g5",
        to: "f4",
        san: "Bxf4"
      },
      {
        from: "c5",
        to: "d3",
        san: "Nd3"
      },
      {
        from: "d3",
        to: "c1",
        san: "Nxc1"
      },
    ],
    responseMoves: ["Qxf4", "Qe3"],
  },
];

export default easyPuzzles;