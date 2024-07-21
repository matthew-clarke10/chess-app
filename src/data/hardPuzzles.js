const hardPuzzles = [
  {
    fen: "r2q1r1k/ppp1bp2/3pn2p/8/6QP/1BP5/PP3P2/R5RK w - - 0 19",
    correctMoves: [
      {
        from: "g4",
        to: "h5",
        san: "Qh5"
      },
      {
        from: "h4",
        to: "g5",
        san: "hxg5"
      },
      {
        from: "g1",
        to: "g5",
        san: "Rxg5"
      },
    ],
    responseMoves: ["Bg5", "Qxg5"],
  }
  ,
  {
    fen: "4b3/4P3/1K1k4/8/1P6/8/P7/8 w - - 1 65",
    correctMoves: [
      {
        from: "b4",
        to: "b5",
        san: "b5"
      },
      {
        from: "a2",
        to: "a4",
        san: "a4"
      },
      {
        from: "b6",
        to: "a7",
        san: "Ka7"
      },
      {
        from: "b5",
        to: "b6",
        san: "b6"
      },
      {
        from: "b6",
        to: "b7",
        san: "b7"
      },
      {
        from: "b7",
        to: "b8",
        san: "b8=Q"
      },
    ],
    responseMoves: ["Kxe7", "Kd6", "Kc5", "Bxa4", "Bb5"],
  }
  ,
  {
    fen: "r1bq1rk1/1p2npbp/p3p1p1/2ppN1Nn/3P1B2/2PBPQ2/PP3PPP/R3K2R w KQ - 6 12",
    correctMoves: [
      {
        from: "f3",
        to: "h5",
        san: "Qxh5"
      },
      {
        from: "d3",
        to: "h7",
        san: "Bxh7+"
      },
      {
        from: "e5",
        to: "f7",
        san: "N5xf7+"
      },
      {
        from: "g5",
        to: "f7",
        san: "Nxf7+"
      },
      {
        from: "f7",
        to: "d8",
        san: "Nxd8"
      },
    ],
    responseMoves: ["gxh5", "Kh8", "Rxf7", "Kxh7"],
  }
  ,
  {
    fen: "k7/3r2p1/p1N1Qn2/1P2B3/K7/1P6/P7/2q5 b - - 0 1",
    correctMoves: [
      {
        from: "a6",
        to: "b5",
        san: "axb5+"
      },
      {
        from: "d7",
        to: "d5",
        san: "Rd5+"
      },
      {
        from: "f6",
        to: "d7",
        san: "Nd7"
      },
    ],
    responseMoves: ["Kxb5", "Ka4"],
  }
  ,
  {
    fen: "2kr3r/1pp2Q2/3q3B/1Pb2P2/8/6P1/P3P2P/1R2KBNR b K - 0 26",
    correctMoves: [
      {
        from: "h8",
        to: "h6",
        san: "Rxh6"
      },
      {
        from: "h6",
        to: "h2",
        san: "Rxh2"
      },
      {
        from: "d6",
        to: "e6",
        san: "Qxe6"
      },
    ],
    responseMoves: ["Nf3", "Qe6+"],
  }
  ,
  {
    fen: "7r/pkn3pp/1b1Q1p2/4p3/1B2q3/1P6/PK3P2/2R2R2 b - - 4 32",
    correctMoves: [
      {
        from: "b6",
        to: "d4",
        san: "Bd4+"
      },
      {
        from: "e4",
        to: "e2",
        san: "Qe2+"
      },
      {
        from: "d4",
        to: "c3",
        san: "Bxc3+"
      },
    ],
    responseMoves: ["Bc3", "Rc2"],
  }
  ,
  {
    fen: "3rkbnr/pp3ppp/2n5/2p1P3/6b1/2P2N1P/PPK2PP1/RNB2B1R b k - 2 9",
    correctMoves: [
      {
        from: "g4",
        to: "f5",
        san: "Bf5+"
      },
      {
        from: "c5",
        to: "c4",
        san: "c4"
      },
      {
        from: "c6",
        to: "a5",
        san: "Na5+"
      },
      {
        from: "a5",
        to: "c4",
        san: "Nxc4"
      },
    ],
    responseMoves: ["Kb3", "Bxc4", "Ka4"],
  }
  ,
  {
    fen: "5k2/2r3pp/4Kp2/p1P1p3/r5P1/2R4P/5P2/2R5 b - - 1 35",
    correctMoves: [
      {
        from: "a4",
        to: "d4",
        san: "Rd4"
      },
      {
        from: "c7",
        to: "c6",
        san: "Rc6+"
      },
      {
        from: "g7",
        to: "g6",
        san: "g6#"
      },
    ],
    responseMoves: ["Rc4", "Kf5"],
  }
  ,
  {
    fen: "r1b1k1nr/ppp2ppp/4q3/3N4/P1Pn4/5B2/4QPPP/R3K1NR b KQkq - 3 14",
    correctMoves: [
      {
        from: "d4",
        to: "e2",
        san: "Nxe2"
      },
      {
        from: "e8",
        to: "e7",
        san: "Ke7"
      },
      {
        from: "e2",
        to: "g1",
        san: "Nxg1"
      },
      {
        from: "c8",
        to: "b7",
        san: "Bxb7"
      },
    ],
    responseMoves: ["Nxc7+", "Nxe6", "Bxb7"],
  }
  ,
  {
    fen: "8/8/p6k/q5p1/5Q2/3p1N2/8/5K2 w - g6 0 49",
    correctMoves: [
      {
        from: "f4",
        to: "f6",
        san: "Qf6+"
      },
      {
        from: "f3",
        to: "e5",
        san: "Ne5"
      },
      {
        from: "f1",
        to: "g2",
        san: "Kg2"
      },
      {
        from: "f6",
        to: "e5",
        san: "Qxe5"
      },
    ],
    responseMoves: ["Kh5", "Qa1+", "Qxe5"],
  }
  ,
  {
    fen: "r4rk1/2p2p2/p2p2qp/1pbNp3/3nP1b1/1B1P2Q1/PPP2PPB/R4RK1 w - - 5 19",
    correctMoves: [
      {
        from: "g3",
        to: "g4",
        san: "Qxg4+"
      },
      {
        from: "d5",
        to: "f6",
        san: "Nf6+"
      },
      {
        from: "f6",
        to: "g4",
        san: "Nxg4"
      },
    ],
    responseMoves: ["Qxg4", "Kg7"],
  }
  ,
  {
    fen: "r4k1r/2ppn2p/1p3P2/p5N1/2bp4/5Q2/q4P1P/1N4K1 w - - 0 24",
    correctMoves: [
      {
        from: "f3",
        to: "a8",
        san: "Qxa8+"
      },
      {
        from: "a8",
        to: "c8",
        san: "Qxc8#"
      },
    ],
    responseMoves: ["Nc8"],
  }
  ,
  {
    fen: "8/p1r1p2R/2N1pkp1/1p3q2/8/1P5P/P3QPP1/b5K1 w - - 1 29",
    correctMoves: [
      {
        from: "c6",
        to: "d8",
        san: "Nd8"
      },
      {
        from: "g1",
        to: "h2",
        san: "Kh2"
      },
      {
        from: "f2",
        to: "f4",
        san: "f4"
      },
      {
        from: "g2",
        to: "g3",
        san: "g3"
      },
    ],
    responseMoves: ["Rc1+", "Qe5+", "Qxf4+"],
  }
  ,
  {
    fen: "3r2k1/5pp1/4n2p/1R2Q3/3Nn3/4B2P/2q2PP1/6K1 b - - 2 25",
    correctMoves: [
      {
        from: "e6",
        to: "d4",
        san: "Nxd4"
      },
      {
        from: "c2",
        to: "d1",
        san: "Qd1+"
      },
      {
        from: "d1",
        to: "d4",
        san: "Qxd4"
      },
      {
        from: "d8",
        to: "d4",
        san: "Rxd4"
      },
    ],
    responseMoves: ["Bxd4", "Kh2", "Qxd4"],
  }
  ,
  {
    fen: "5rrk/pppb3p/3p4/3P1p1B/3p1p1q/3P1Q2/PPP1RP1P/4R2K b - - 7 19",
    correctMoves: [
      {
        from: "f8",
        to: "f6",
        san: "Rf6"
      },
      {
        from: "g8",
        to: "g1",
        san: "Rxg1+"
      },
      {
        from: "f6",
        to: "h6",
        san: "Rh6"
      },
      {
        from: "d7",
        to: "e8",
        san: "Bxe8"
      },
    ],
    responseMoves: ["Rg1", "Kxg1", "Re8+"],
  }
  ,
  {
    fen: "3r1rk1/2p5/1pn1q1p1/p2np2p/P1B1Q2P/2P3BR/1PK3P1/3R4 b - - 3 27",
    correctMoves: [
      {
        from: "d5",
        to: "e3",
        san: "Ne3+"
      },
      {
        from: "e6",
        to: "c4",
        san: "Qxc4"
      },
      {
        from: "c6",
        to: "d4",
        san: "Nd4+"
      },
      {
        from: "c4",
        to: "e2",
        san: "Qe2+"
      },
      {
        from: "e5",
        to: "d4",
        san: "exd4"
      },
      {
        from: "d4",
        to: "d3",
        san: "d3+"
      },
      {
        from: "d3",
        to: "e2",
        san: "dxe2+"
      },
    ],
    responseMoves: ["Qxe3", "b3", "Qxd4", "Rd2", "Rxe2", "Ke2"],
  }
  ,
  {
    fen: "3rk2r/4np1p/p5p1/2Q1b3/2P1q3/4B3/P4PPP/4RRK1 w k - 0 2",
    correctMoves: [
      {
        from: "e3",
        to: "g5",
        san: "Bg5"
      },
      {
        from: "c5",
        to: "a7",
        san: "Qa7"
      },
      {
        from: "a7",
        to: "d7",
        san: "Qxd7+"
      },
      {
        from: "e1",
        to: "e4",
        san: "Rxe4"
      }
    ],
    responseMoves: ["Bd6", "Rd7", "Kxd7"]
  }
  ,
  {
    fen: "8/1k1b4/p3p1P1/1pQp4/3P1P2/P1N3q1/KP4r1/1B6 w - - 1 2",
    correctMoves: [
      {
        from: "c3",
        to: "e4",
        san: "Ne4"
      },
      {
        from: "e4",
        to: "d6",
        san: "Nd6+"
      },
      {
        from: "c5",
        to: "d6",
        san: "Qxd6"
      },
    ],
    responseMoves: ["Qxf4", "Qxd6"]
  },
  {
    fen: "8/6kp/1p1rq2r/p2p1pn1/P1pP2NR/2P3P1/1P5P/4RQK1 b - - 7 34",
    correctMoves: [
      {
        from: "g5",
        to: "f3",
        san: "Nf3+"
      },
      {
        from: "e6",
        to: "e1",
        san: "Qxe1+"
      },
      {
        from: "f3",
        to: "e1",
        san: "Nxe1"
      },
      {
        from: "e1",
        to: "d3",
        san: "Nxd3+"
      },
    ],
    responseMoves: ["Kf2", "Qxe1", "Nxh6"]
  }
  ,
  {
    fen: "r4rk1/1pp2ppp/p1nbpq2/7b/3PB3/2P2N1P/PP3PP1/R1BQR1K1 w - - 1 13",
    correctMoves: [
      {
        from: "g2",
        to: "g4",
        san: "g4"
      },
      {
        from: "c1",
        to: "g5",
        san: "Bg5"
      },
      {
        from: "g5",
        to: "f6",
        san: "Bxf6"
      },
    ],
    responseMoves: ["Bg6", "Bxe4"]
  },
  {
    fen: "1k1rr3/p2p1pp1/1ppbq2p/3R4/Q3P3/2P1B1PP/PP3PK1/4R3 w - - 0 24",
    correctMoves: [
      {
        from: "d5",
        to: "d6",
        san: "Rxd6"
      },
      {
        from: "e3",
        to: "f4",
        san: "Bf4"
      },
      {
        from: "a4",
        to: "d4",
        san: "Qd4"
      },
      {
        from: "c3",
        to: "d4",
        san: "cxd4"
      },
      {
        from: "d4",
        to: "e5",
        san: "dxe5"
      },
    ],
    responseMoves: ["Qxd6", "Re5", "Qxd4", "d6"]
  }
  ,
  {
    fen: "q7/3bkpQR/1p2p3/3p4/1p6/1P1KP3/r4PP1/3R1B2 b - - 4 27",
    correctMoves: [
      {
        from: "d7",
        to: "b5",
        san: "Bb5+"
      },
      {
        from: "a2",
        to: "d2",
        san: "Rd2+"
      },
      {
        from: "d2",
        to: "d3",
        san: "Rxd3+"
      },
      {
        from: "a8",
        to: "a1",
        san: "Qa1+"
      },
      {
        from: "a1",
        to: "c3",
        san: "Qxc3#"
      },
    ],
    responseMoves: ["Kd4", "Bd3", "Rxd3", "Rc3"]
  },
  {
    fen: "rk2R3/7p/1p1p2p1/2b5/8/2PQ3P/5rP1/6K1 b - - 1 37",
    correctMoves: [
      {
        from: "b8",
        to: "c7",
        san: "Kc7"
      },
      {
        from: "c7",
        to: "d8",
        san: "Kd8"
      },
      {
        from: "a8",
        to: "a2",
        san: "Raa2"
      },
      {
        from: "d8",
        to: "e8",
        san: "Kxe8"
      },
    ],
    responseMoves: ["Re7+", "Kh2", "Re8+"]
  },
  {
    fen: "1Qq2k1r/6p1/p4p1p/4Nb2/5P2/8/1P2NKPP/8 w - - 2 28",
    correctMoves: [
      {
        from: "e5",
        to: "g6",
        san: "Ng6+"
      },
      {
        from: "b8",
        to: "c8",
        san: "Qxc8+"
      },
      {
        from: "g6",
        to: "h8",
        san: "Nxh8"
      },
    ],
    responseMoves: ["Kf8", "Bxc8"]
  },
  {
    fen: "8/5p1k/r4p1P/3P1K1R/4PPP1/8/8/3b4 b - - 0 43",
    correctMoves: [
      {
        from: "d1",
        to: "a4",
        san: "Ba4"
      },
      {
        from: "a6",
        to: "d6",
        san: "Rxd6"
      },
      {
        from: "a4",
        to: "d7",
        san: "Bd7#"
      },
    ],
    responseMoves: ["d6", "g5"]
  }
  ,
  {
    fen: "r4rk1/3R3p/p6p/2p5/2b2qP1/1PN4P/P1P2P2/1R1Q2K1 b - - 0 24",
    correctMoves: [
      {
        from: "f4",
        to: "f2",
        san: "Qxf2+"
      },
      {
        from: "f8",
        to: "f3",
        san: "Rf3"
      },
      {
        from: "g8",
        to: "g7",
        san: "Kg7"
      },
      {
        from: "c4",
        to: "d3",
        san: "Bxd3"
      },
      {
        from: "f2",
        to: "f3",
        san: "Qxf3+"
      },
    ],
    responseMoves: ["Kh1", "Rd8+", "Rd3", "Qxf3"],
  },
  {
    fen: "5rk1/1R6/2p1r1pp/5p2/5Q2/q6P/6P1/5R1K w - f6 0 37",
    correctMoves: [
      {
        from: "f4",
        to: "c7",
        san: "Qc7"
      },
      {
        from: "c7",
        to: "e7",
        san: "Qxe7"
      },
      {
        from: "b7",
        to: "e7",
        san: "Rxe7"
      },
    ],
    responseMoves: ["Re7", "Qxe7"],
  },
  {
    fen: "r1b2rk1/5p1p/7n/2p2qp1/p1PPN3/P1BBPP2/1P4PP/R4RK1 w - c6 0 19",
    correctMoves: [
      {
        from: "d4",
        to: "d5",
        san: "d5"
      },
      {
        from: "e4",
        to: "c5",
        san: "Nxc5"
      },
      {
        from: "c5",
        to: "d3",
        san: "Nxd3"
      },
    ],
    responseMoves: ["f6", "Qxd3"],
  },
  {
    fen: "4qrk1/n4pbp/B2p1np1/p2P2B1/1p6/1P3N1P/P3QPP1/2R3K1 w - - 1 26",
    correctMoves: [
      {
        from: "e2",
        to: "e8",
        san: "Qxe8"
      },
      {
        from: "c1",
        to: "c7",
        san: "Rc7"
      },
      {
        from: "g5",
        to: "e3",
        san: "Be3"
      },
      {
        from: "c7",
        to: "a7",
        san: "Rxa7"
      },
      {
        from: "e3",
        to: "a7",
        san: "Bxa7"
      },
    ],
    responseMoves: ["Rxe8", "Ra8", "Nxd5", "Rxa7"],
  },
  {
    fen: "r3rk2/5p2/p3P2R/q2b1p2/2pQ4/7N/P1PP4/1K6 w - - 1 31",
    correctMoves: [
      {
        from: "d4",
        to: "f6",
        san: "Qf6"
      },
      {
        from: "b1",
        to: "a1",
        san: "Ka1"
      },
      {
        from: "a1",
        to: "b1",
        san: "Kxb1"
      },
      {
        from: "b1",
        to: "a1",
        san: "Ka1"
      },
      {
        from: "a1",
        to: "b1",
        san: "Kxb1"
      },
    ],
    responseMoves: ["Rab8+", "Rb1+", "Rb8+", "Rb1+"],
  },
  {
    fen: "2k2bnr/1pp2b1p/p4p2/5N2/5PQP/P1K5/1P1r1qP1/R7 w - - 0 22",
    correctMoves: [
      {
        from: "f5",
        to: "d6",
        san: "Nd6+"
      },
      {
        from: "g4",
        to: "c8",
        san: "Qc8+"
      },
      {
        from: "d6",
        to: "f5",
        san: "Nf5#"
      },
    ],
    responseMoves: ["Kd8", "Ke7"],
  },
  {
    fen: "8/6k1/6p1/2P3Kp/BP5P/5N2/1b3P2/8 b - - 0 40",
    correctMoves: [
      {
        from: "b2",
        to: "c1",
        san: "Bc1+"
      },
      {
        from: "c1",
        to: "d2",
        san: "Bxd2+"
      },
      {
        from: "d2",
        to: "c3",
        san: "Bc3"
      },
      {
        from: "c3",
        to: "d2",
        san: "Bd2#"
      },
    ],
    responseMoves: ["Nd2", "f4", "f5"],
  },
  {
    fen: "8/pQ1P1pp1/1p3k2/7K/r6N/6p1/4P3/5b2 b - - 0 36",
    correctMoves: [
      {
        from: "g7",
        to: "g6",
        san: "g6+"
      },
      {
        from: "f7",
        to: "g6",
        san: "fxg6+"
      },
      {
        from: "a4",
        to: "h4",
        san: "Rh4#"
      },
    ],
    responseMoves: ["Nxg6", "Kh6"],
  },
  {
    fen: "r1b1k3/pp1p1p1Q/4p3/1B1pPP2/1b2n3/2N4P/PPP1K1PR/q7 w q - 0 20",
    correctMoves: [
      {
        from: "h7",
        to: "g8",
        san: "Qg8+"
      },
      {
        from: "f5",
        to: "f6",
        san: "f6+"
      },
      {
        from: "e5",
        to: "f6",
        san: "exf6+"
      },
      {
        from: "g8",
        to: "f8",
        san: "Qf8+"
      },
      {
        from: "f8",
        to: "b4",
        san: "Qxb4"
      },
      {
        from: "b4",
        to: "f4",
        san: "Qf4+"
      },
    ],
    responseMoves: ["Ke7", "Nxf6", "Kd6", "Kc7", "Qg1"],
  },
  {
    fen: "r5k1/1pp4p/pbn2pp1/4qNQ1/5R1P/3B4/1PP2PP1/6K1 w - - 0 2",
    correctMoves: [
      {
        from: "g5",
        to: "h6",
        san: "Qh6"
      },
      {
        from: "d3",
        to: "f5",
        san: "Bxf5"
      },
      {
        from: "f4",
        to: "g4",
        san: "Rg4+"
      },
      {
        from: "f5",
        to: "g6",
        san: "Bxg6+"
      },
      {
        from: "h6",
        to: "g6",
        san: "Qxg6+"
      },
    ],
    responseMoves: ["gxf5", "Ne7", "Ng6", "hxg6"],
  },
  {
    fen: "r1bq3r/ppp1kNpp/2npBp1n/2b1p2Q/4P3/3P4/PPP2PPP/RNB1K2R b KQ - 5 9",
    correctMoves: [
      {
        from: "d8",
        to: "e8",
        san: "Qe8"
      },
      {
        from: "a8",
        to: "c8",
        san: "Rxc8"
      },
      {
        from: "g7",
        to: "h6",
        san: "gxh6"
      },
    ],
    responseMoves: ["Bxc8", "Bxh6"],
  },
  {
    fen: "2r2r2/p4kpQ/2p1p2R/1pq1Ppp1/5nP1/P4K2/1P2B3/3R4 w - - 0 2",
    correctMoves: [
      {
        from: "h6",
        to: "f6",
        san: "Rf6+"
      },
      {
        from: "h7",
        to: "g7",
        san: "Qxg7"
      },
      {
        from: "g7",
        to: "d7",
        san: "Qd7+"
      },
      {
        from: "d7",
        to: "c8",
        san: "Qxc8+"
      },
    ],
    responseMoves: ["Ke8", "Rxf6", "Kf8"],
  },
  {
    fen: "r2k1r2/p1pq1p1b/1pB5/8/1n6/7N/1KP2PPP/3RR3 w - - 3 20",
    correctMoves: [
      {
        from: "d1",
        to: "d7",
        san: "Rxd7+"
      },
      {
        from: "d7",
        to: "f7",
        san: "Rxf7"
      },
      {
        from: "f7",
        to: "f8",
        san: "Rxf8+"
      },
    ],
    responseMoves: ["Kc8", "Nxc6"],
  },
  {
    fen: "r2qkb1r/ppp2p1p/4bnp1/3np1B1/2B5/2PP2Q1/PP3PPP/RN2K1NR w KQkq - 2 10",
    correctMoves: [
      {
        from: "c4",
        to: "d5",
        san: "Bxd5"
      },
      {
        from: "g3",
        to: "e5",
        san: "Qxe5"
      },
      {
        from: "g5",
        to: "f6",
        san: "Bxf6"
      },
      {
        from: "f6",
        to: "e5",
        san: "Bxe5"
      },
    ],
    responseMoves: ["Bxd5", "Qe7", "Qxe5"],
  },
  {
    fen: "8/8/8/8/5K2/k7/p3Q3/8 w - - 2 53",
    correctMoves: [
      {
        from: "e2",
        to: "e5",
        san: "Qe5"
      },
    ],
    responseMoves: [],
  },
  {
    fen: "r1r3k1/6b1/4p2p/3n4/4N3/Pp4N1/P5PP/1KB1R2R b - - 0 1",
    correctMoves: [
      {
        from: "b3",
        to: "a2",
        san: "bxa2+"
      },
      {
        from: "d5",
        to: "b4",
        san: "Nb4+"
      },
      {
        from: "b4",
        to: "c2",
        san: "Nc2"
      },
      {
        from: "c2",
        to: "d4",
        san: "Nd4+"
      },
      {
        from: "d4",
        to: "e2",
        san: "Nxe2"
      },
    ],
    responseMoves: ["Kxa2", "Kb3", "Re2", "Ka2"],
  },
  {
    fen: "8/7k/8/8/5pK1/3n1P1P/8/8 b - - 2 51",
    correctMoves: [
      {
        from: "h7",
        to: "h6",
        san: "Kh6"
      },
      {
        from: "h6",
        to: "h5",
        san: "Kh5"
      },
      {
        from: "h5",
        to: "h4",
        san: "Kh4"
      },
      {
        from: "h4",
        to: "h3",
        san: "Kxh3"
      },
      {
        from: "h3",
        to: "g2",
        san: "Kg2"
      },
      {
        from: "g2",
        to: "g3",
        san: "Kg3"
      },
    ],
    responseMoves: ["Kf5", "Ke4", "Kxd3", "Kd4", "Ke4"],
  },
  {
    fen: "2r4r/6k1/8/p2p1p1p/Pp1Pp3/8/1q1B2Q1/3RK3 b - - 1 35",
    correctMoves: [
      {
        from: "g7",
        to: "f7",
        san: "Kf7"
      },
      {
        from: "b2",
        to: "d4",
        san: "Qxd4"
      },
      {
        from: "d4",
        to: "f6",
        san: "Qf6"
      },
    ],
    responseMoves: ["Qg5", "Qxf5+"],
  },
  {
    fen: "8/p1p5/8/2p1p1pp/P4k2/2PK1B1P/2P3P1/6b1 b - - 1 35",
    correctMoves: [
      {
        from: "e5",
        to: "e4",
        san: "e4+"
      },
      {
        from: "c5",
        to: "c4",
        san: "c4+"
      },
      {
        from: "f4",
        to: "e4",
        san: "Kxe4"
      },
    ],
    responseMoves: ["Bxe4", "Kxc4"],
  },
  {
    fen: "6k1/3B1p2/3p2p1/p1qP2P1/np6/4Q3/PbP5/K1BR4 w - - 0 2",
    correctMoves: [
      {
        from: "c1",
        to: "b2",
        san: "Bxb2"
      },
      {
        from: "b2",
        to: "f6",
        san: "Bf6"
      },
      {
        from: "f6",
        to: "c3",
        san: "Bxc3"
      },
    ],
    responseMoves: ["Qxe3", "Qc3+"],
  },
  {
    fen: "Q7/pp3rp1/2bPp1R1/2P1k3/P7/1P1B1n2/7P/7K b - a3 0 33",
    correctMoves: [
      {
        from: "f3",
        to: "g5",
        san: "Ng5+"
      },
      {
        from: "c6",
        to: "e4",
        san: "Bxe4+"
      },
      {
        from: "g5",
        to: "h3",
        san: "Nh3#"
      },
    ],
    responseMoves: ["Be4", "Kg1"],
  },
  {
    fen: "3q3k/1b5p/p1n2Np1/1p1Q1P2/3p3P/P2Br3/1PP3P1/5R1K b - - 0 1",
    correctMoves: [
      {
        from: "d8",
        to: "f6",
        san: "Qxf6"
      },
      {
        from: "e3",
        to: "e1",
        san: "Re1"
      },
      {
        from: "e1",
        to: "f1",
        san: "Rxf1+"
      },
    ],
    responseMoves: ["fxg6", "Kg1"],
  },
  {
    fen: "8/8/4K1kp/5p1p/8/4P1P1/8/8 b - - 5 43",
    correctMoves: [
      {
        from: "g6",
        to: "g5",
        san: "Kg5"
      },
      {
        from: "g5",
        to: "g4",
        san: "Kg4"
      },
      {
        from: "g4",
        to: "g3",
        san: "Kxg3"
      },
      {
        from: "h5",
        to: "h4",
        san: "h4"
      },
      {
        from: "h4",
        to: "h3",
        san: "h3"
      },
    ],
    responseMoves: ["Kf7", "Kg6", "Kxf5", "e4"],
  },
  {
    fen: "1k1rq2r/pp3ppp/4b2n/np1N4/8/2Q2NP1/PP3PP1/2KRR3 w - - 0 23",
    correctMoves: [
      {
        from: "c3",
        to: "e5",
        san: "Qe5+"
      },
      {
        from: "d5",
        to: "c7",
        san: "Nc7+"
      },
    ],
    responseMoves: ["Ka8"],
  },
  {
    fen: "r1bqk1nr/ppp2pp1/2n1p2p/3p4/3P1BQ1/P1P1P3/2P2PPP/R3KBNR b KQkq - 2 7",
    correctMoves: [
      {
        from: "g7",
        to: "g5",
        san: "g5"
      },
      {
        from: "h6",
        to: "h5",
        san: "h5"
      },
      {
        from: "h5",
        to: "h4",
        san: "h4"
      },
    ],
    responseMoves: ["Be5", "Qg3"],
  },
  {
    fen: "3K4/2p5/2q5/3k4/P7/Q7/8/8 b - - 2 55",
    correctMoves: [
      {
        from: "c6",
        to: "d6",
        san: "Qd6+"
      },
      {
        from: "d5",
        to: "d6",
        san: "Kxd6"
      },
      {
        from: "c7",
        to: "c5",
        san: "c5"
      },
      {
        from: "d6",
        to: "c6",
        san: "Kc6"
      },
    ],
    responseMoves: ["Qxd6+", "a5", "a6"],
  },
  {
    fen: "r3k2r/ppp3pp/3p4/2nPqb1N/2P5/3P4/PP3PPP/R1BQ1K1R w kq - 2 17",
    correctMoves: [
      {
        from: "d3",
        to: "d4",
        san: "d4"
      },
      {
        from: "d1",
        to: "d3",
        san: "Qxd3"
      },
      {
        from: "d4",
        to: "e5",
        san: "dxe5"
      },
    ],
    responseMoves: ["Bd3+", "Nxd3"],
  },
  {
    fen: "r4rk1/7p/p2p4/2pPb1q1/Q1PpP1P1/3B1P2/P7/1R2BRK1 b - - 0 1",
    correctMoves: [
      {
        from: "g5",
        to: "e3",
        san: "Qe3+"
      },
      {
        from: "e3",
        to: "f4",
        san: "Qf4"
      },
      {
        from: "f4",
        to: "g3",
        san: "Qg3+"
      },
      {
        from: "f8",
        to: "f3",
        san: "Rxf3"
      },
    ],
    responseMoves: ["Kg2", "Rf2", "Kf1"],
  },
  {
    fen: "8/1p1k4/8/4pPQP/1RPp4/q2P1P1P/r1PK4/6NR b - - 4 31",
    correctMoves: [
      {
        from: "a3",
        to: "c3",
        san: "Qc3+"
      },
      {
        from: "c3",
        to: "c2",
        san: "Qxc2+"
      },
      {
        from: "c2",
        to: "d2",
        san: "Qxd2+"
      },
    ],
    responseMoves: ["Ke2", "Qd2"],
  },
  {
    fen: "rnbqkbnr/p6p/2p5/3Pppp1/4P3/8/PPP2PPP/R1BQKBNR w KQkq f6 0 8",
    correctMoves: [
      {
        from: "d1",
        to: "h5",
        san: "Qh5+"
      },
      {
        from: "c1",
        to: "g5",
        san: "Bxg5"
      },
      {
        from: "c2",
        to: "c3",
        san: "c3"
      },
    ],
    responseMoves: ["Kd7", "Bb4+"],
  },
  {
    fen: "2R2b1r/pk2p3/1q2Qp1p/4p1p1/3rP3/P6B/1P3P1P/2K4R b - - 3 29",
    correctMoves: [
      {
        from: "b6",
        to: "e6",
        san: "Qxe6"
      },
      {
        from: "d4",
        to: "d6",
        san: "Rd6"
      },
      {
        from: "e7",
        to: "e6",
        san: "e6"
      },
      {
        from: "d6",
        to: "e6",
        san: "Rxe6"
      },
    ],
    responseMoves: ["Bxe6", "Bf5", "Bxe6"],
  },
  {
    fen: "6k1/2q3p1/3R1p1p/3p4/3P4/2r2PQP/6PK/8 b - - 0 34",
    correctMoves: [
      {
        from: "c3",
        to: "c1",
        san: "Rc1"
      },
      {
        from: "c1",
        to: "h1",
        san: "Rh1+"
      },
      {
        from: "c7",
        to: "g3",
        san: "Qxg3"
      },
    ],
    responseMoves: ["Kxd5", "Kxh1"],
  },
  {
    fen: "q3kb1r/r1pn1pp1/pp1pp3/4P3/2BPbP2/6Pp/PPPNQB1P/3R1RK1 b k - 3 15",
    correctMoves: [
      {
        from: "e4",
        to: "d3",
        san: "Bd3"
      },
      {
        from: "a8",
        to: "f3",
        san: "Qxf3"
      },
      {
        from: "d3",
        to: "c4",
        san: "Bxc4"
      },
    ],
    responseMoves: ["Qf3", "Nxf3"],
  },
  {
    fen: "2r3k1/2r2p1p/p3p2p/1p2PnP1/1P2NP2/3R4/2P5/2KR4 w - - 0 2",
    correctMoves: [
      {
        from: "d3",
        to: "d8",
        san: "Rd8+"
      },
      {
        from: "g5",
        to: "h6",
        san: "gxh6+"
      },
      {
        from: "d1",
        to: "h1",
        san: "Rh1+"
      },
      {
        from: "h1",
        to: "g1",
        san: "Rg1+"
      },
    ],
    responseMoves: ["Kg7", "Kxh6", "Kg6"],
  },
  {
    fen: "4Q3/pb3rpp/5k2/2p5/5qP1/P1P1nP2/2P2R1P/R5K1 b - - 5 27",
    correctMoves: [
      {
        from: "b7",
        to: "f3",
        san: "Bxf3"
      },
      {
        from: "f6",
        to: "g5",
        san: "Kg5"
      },
      {
        from: "f4",
        to: "f3",
        san: "Qxf3"
      },
      {
        from: "f7",
        to: "f3",
        san: "Rxf3"
      },
    ],
    responseMoves: ["Qc6+", "Rxf3", "Qxf3"],
  },
  {
    fen: "rnq1k2r/pbppn1pp/1p1P1p2/4N3/1bB5/2N5/PPP2PPP/R1BQK2R b KQkq - 0 9",
    correctMoves: [
      {
        from: "c7",
        to: "d6",
        san: "cxd6"
      },
      {
        from: "g7",
        to: "g6",
        san: "g6"
      },
      {
        from: "e8",
        to: "d8",
        san: "Kd8"
      },
    ],
    responseMoves: ["Qh5+", "Bf7+"],
  },
  {
    fen: "r1bqkb2/1pp1pr1p/p2p4/7Q/2n1N3/4P3/PPPP1PPP/R1B2RK1 w q - 2 12",
    correctMoves: [
      {
        from: "e4",
        to: "g5",
        san: "Ng5"
      },
      {
        from: "f2",
        to: "f4",
        san: "f4"
      },
      {
        from: "g5",
        to: "f7",
        san: "Nxf7"
      },
      {
        from: "f7",
        to: "d8",
        san: "Nxd8"
      },
      {
        from: "f4",
        to: "e5",
        san: "fxe5"
      },
    ],
    responseMoves: ["Ne5", "Bg4", "Bxh5", "Rxd8"],
  },
  {
    fen: "8/8/3Pk1p1/1p2P3/b2b1P2/3N2B1/6K1/8 w - - 0 41",
    correctMoves: [
      {
        from: "g3",
        to: "f2",
        san: "Bf2"
      },
      {
        from: "f4",
        to: "f5",
        san: "f5+"
      },
      {
        from: "d3",
        to: "f4",
        san: "Nf4+"
      },
      {
        from: "d6",
        to: "d7",
        san: "d7"
      },
    ],
    responseMoves: ["Bc2", "gxf5", "Kxe5"],
  },
  {
    fen: "3r2r1/p1Q1kp2/3pp2p/8/3P1pqP/6P1/PPP2P2/R4RK1 b - - 1 21",
    correctMoves: [
      {
        from: "d8",
        to: "d7",
        san: "Rd7"
      },
      {
        from: "g4",
        to: "h3",
        san: "Qh3"
      },
      {
        from: "f4",
        to: "g3",
        san: "fxg3"
      },
    ],
    responseMoves: ["Qc3", "Qf3"],
  },
  {
    fen: "8/8/8/2p5/1kp5/1p6/8/B1K5 b - - 1 49",
    correctMoves: [
      {
        from: "c4",
        to: "c3",
        san: "c3"
      },
      {
        from: "b4",
        to: "c4",
        san: "Kc4"
      },
      {
        from: "c3",
        to: "b2",
        san: "cxb2"
      },
    ],
    responseMoves: ["Kb1", "Bb2"],
  },
  {
    fen: "3kr3/1ppqbR2/p1n2N1p/8/3P4/P1N5/1PP1Q1PP/6K1 b - - 1 22",
    correctMoves: [
      {
        from: "d7",
        to: "d4",
        san: "Qxd4+"
      },
      {
        from: "e7",
        to: "f6",
        san: "Bxf6"
      },
      {
        from: "f6",
        to: "d4",
        san: "Bxd4+"
      },
    ],
    responseMoves: ["Qf2", "Qxd4"],
  },
  {
    fen: "8/6PQ/1kp1p3/p2pP3/4B3/2K3P1/PPP2q2/8 b - - 2 39",
    correctMoves: [
      {
        from: "f2",
        to: "e3",
        san: "Qe3+"
      },
      {
        from: "e3",
        to: "e1",
        san: "Qe1+"
      },
      {
        from: "e1",
        to: "b4",
        san: "Qb4#"
      },
    ],
    responseMoves: ["Bd3", "Kb3"],
  },
  {
    fen: "r3k2r/p1pqbppp/1pn1pn2/2Pp4/1P1PbP2/P2BPN2/6PP/RNBQ1RK1 w kq - 0 11",
    correctMoves: [
      {
        from: "d3",
        to: "b5",
        san: "Bb5"
      },
      {
        from: "f3",
        to: "e5",
        san: "Ne5"
      },
      {
        from: "b5",
        to: "d7",
        san: "Bxd7+"
      },
    ],
    responseMoves: ["a6", "Nxe5"],
  },
  {
    fen: "k2r4/1q3pQ1/p3p1p1/2N3Pp/2P4P/p2rR3/8/4R1K1 b - - 2 48",
    correctMoves: [
      {
        from: "d3",
        to: "e3",
        san: "Rxe3"
      },
      {
        from: "e3",
        to: "e1",
        san: "Rxe1+"
      },
      {
        from: "e1",
        to: "b1",
        san: "Rb1"
      },
      {
        from: "a3",
        to: "a2",
        san: "a2"
      },
      {
        from: "a2",
        to: "a1",
        san: "a1=Q"
      },
      {
        from: "b1",
        to: "a1",
        san: "Rxa1"
      },
    ],
    responseMoves: ["Nxb7", "Kf2", "Nxd8", "Nxe6", "Qxa1"],
  },
  {
    fen: "r1b1qrk1/pppp1ppp/2n5/2b5/2B1P1n1/2N5/PPPB1PPP/R2QK1NR w KQ - 11 9",
    correctMoves: [
      {
        from: "d1",
        to: "g4",
        san: "Qxg4"
      },
      {
        from: "g4",
        to: "h5",
        san: "Qh5"
      },
      {
        from: "e1",
        to: "f2",
        san: "Kxf2"
      },
    ],
    responseMoves: ["d5", "Bf2+"],
  },
  {
    fen: "r2q1r1k/ppp1bp2/3pn2p/8/6QP/1BP5/PP3P2/R5RK w - - 0 19",
    correctMoves: [
      {
        from: "g4",
        to: "h5",
        san: "Qh5"
      },
      {
        from: "h4",
        to: "g5",
        san: "hxg5"
      },
      {
        from: "g1",
        to: "g5",
        san: "Rxg5"
      },
    ],
    responseMoves: ["Bg5", "Qxg5"],
  }
  ,
  {
    fen: "4b3/4P3/1K1k4/8/1P6/8/P7/8 w - - 1 65",
    correctMoves: [
      {
        from: "b4",
        to: "b5",
        san: "b5"
      },
      {
        from: "a2",
        to: "a4",
        san: "a4"
      },
      {
        from: "b6",
        to: "a7",
        san: "Ka7"
      },
      {
        from: "b5",
        to: "b6",
        san: "b6"
      },
      {
        from: "b6",
        to: "b7",
        san: "b7"
      },
      {
        from: "b7",
        to: "b8",
        san: "b8=Q"
      },
    ],
    responseMoves: ["Kxe7", "Kd6", "Kc5", "Bxa4", "Bb5"],
  }
  ,
  {
    fen: "r1bq1rk1/1p2npbp/p3p1p1/2ppN1Nn/3P1B2/2PBPQ2/PP3PPP/R3K2R w KQ - 6 12",
    correctMoves: [
      {
        from: "f3",
        to: "h5",
        san: "Qxh5"
      },
      {
        from: "d3",
        to: "h7",
        san: "Bxh7+"
      },
      {
        from: "e5",
        to: "f7",
        san: "N5xf7+"
      },
      {
        from: "g5",
        to: "f7",
        san: "Nxf7+"
      },
      {
        from: "f7",
        to: "d8",
        san: "Nxd8"
      },
    ],
    responseMoves: ["gxh5", "Kh8", "Rxf7", "Kxh7"],
  }
  ,
  {
    fen: "k7/3r2p1/p1N1Qn2/1P2B3/K7/1P6/P7/2q5 b - - 0 1",
    correctMoves: [
      {
        from: "a6",
        to: "b5",
        san: "axb5+"
      },
      {
        from: "d7",
        to: "d5",
        san: "Rd5+"
      },
      {
        from: "f6",
        to: "d7",
        san: "Nd7"
      },
    ],
    responseMoves: ["Kxb5", "Ka4"],
  }
  ,
  {
    fen: "2kr3r/1pp2Q2/3q3B/1Pb2P2/8/6P1/P3P2P/1R2KBNR b K - 0 26",
    correctMoves: [
      {
        from: "h8",
        to: "h6",
        san: "Rxh6"
      },
      {
        from: "h6",
        to: "h2",
        san: "Rxh2"
      },
      {
        from: "d6",
        to: "e6",
        san: "Qxe6"
      },
    ],
    responseMoves: ["Nf3", "Qe6+"],
  }
  ,
  {
    fen: "7r/pkn3pp/1b1Q1p2/4p3/1B2q3/1P6/PK3P2/2R2R2 b - - 4 32",
    correctMoves: [
      {
        from: "b6",
        to: "d4",
        san: "Bd4+"
      },
      {
        from: "e4",
        to: "e2",
        san: "Qe2+"
      },
      {
        from: "d4",
        to: "c3",
        san: "Bxc3+"
      },
    ],
    responseMoves: ["Bc3", "Rc2"],
  }
  ,
  {
    fen: "3rkbnr/pp3ppp/2n5/2p1P3/6b1/2P2N1P/PPK2PP1/RNB2B1R b k - 2 9",
    correctMoves: [
      {
        from: "g4",
        to: "f5",
        san: "Bf5+"
      },
      {
        from: "c5",
        to: "c4",
        san: "c4"
      },
      {
        from: "c6",
        to: "a5",
        san: "Na5+"
      },
      {
        from: "a5",
        to: "c4",
        san: "Nxc4"
      },
    ],
    responseMoves: ["Kb3", "Bxc4", "Ka4"],
  }
  ,
  {
    fen: "5k2/2r3pp/4Kp2/p1P1p3/r5P1/2R4P/5P2/2R5 b - - 1 35",
    correctMoves: [
      {
        from: "a4",
        to: "d4",
        san: "Rd4"
      },
      {
        from: "c7",
        to: "c6",
        san: "Rc6+"
      },
      {
        from: "g7",
        to: "g6",
        san: "g6#"
      },
    ],
    responseMoves: ["Rc4", "Kf5"],
  }
  ,
  {
    fen: "r1b1k1nr/ppp2ppp/4q3/3N4/P1Pn4/5B2/4QPPP/R3K1NR b KQkq - 3 14",
    correctMoves: [
      {
        from: "d4",
        to: "e2",
        san: "Nxe2"
      },
      {
        from: "e8",
        to: "e7",
        san: "Ke7"
      },
      {
        from: "e2",
        to: "g1",
        san: "Nxg1"
      },
      {
        from: "c8",
        to: "b7",
        san: "Bxb7"
      },
    ],
    responseMoves: ["Nxc7+", "Nxe6", "Bxb7"],
  }
  ,
  {
    fen: "8/8/p6k/q5p1/5Q2/3p1N2/8/5K2 w - g6 0 49",
    correctMoves: [
      {
        from: "f4",
        to: "f6",
        san: "Qf6+"
      },
      {
        from: "f3",
        to: "e5",
        san: "Ne5"
      },
      {
        from: "f1",
        to: "g2",
        san: "Kg2"
      },
      {
        from: "f6",
        to: "e5",
        san: "Qxe5"
      },
    ],
    responseMoves: ["Kh5", "Qa1+", "Qxe5"],
  }
  ,
  {
    fen: "r4rk1/2p2p2/p2p2qp/1pbNp3/3nP1b1/1B1P2Q1/PPP2PPB/R4RK1 w - - 5 19",
    correctMoves: [
      {
        from: "g3",
        to: "g4",
        san: "Qxg4+"
      },
      {
        from: "d5",
        to: "f6",
        san: "Nf6+"
      },
      {
        from: "f6",
        to: "g4",
        san: "Nxg4"
      },
    ],
    responseMoves: ["Qxg4", "Kg7"],
  }
  ,
  {
    fen: "r4k1r/2ppn2p/1p3P2/p5N1/2bp4/5Q2/q4P1P/1N4K1 w - - 0 24",
    correctMoves: [
      {
        from: "f3",
        to: "a8",
        san: "Qxa8+"
      },
      {
        from: "a8",
        to: "c8",
        san: "Qxc8#"
      },
    ],
    responseMoves: ["Nc8"],
  }
  ,
  {
    fen: "8/p1r1p2R/2N1pkp1/1p3q2/8/1P5P/P3QPP1/b5K1 w - - 1 29",
    correctMoves: [
      {
        from: "c6",
        to: "d8",
        san: "Nd8"
      },
      {
        from: "g1",
        to: "h2",
        san: "Kh2"
      },
      {
        from: "f2",
        to: "f4",
        san: "f4"
      },
      {
        from: "g2",
        to: "g3",
        san: "g3"
      },
    ],
    responseMoves: ["Rc1+", "Qe5+", "Qxf4+"],
  }
  ,
  {
    fen: "3r2k1/5pp1/4n2p/1R2Q3/3Nn3/4B2P/2q2PP1/6K1 b - - 2 25",
    correctMoves: [
      {
        from: "e6",
        to: "d4",
        san: "Nxd4"
      },
      {
        from: "c2",
        to: "d1",
        san: "Qd1+"
      },
      {
        from: "d1",
        to: "d4",
        san: "Qxd4"
      },
      {
        from: "d8",
        to: "d4",
        san: "Rxd4"
      },
    ],
    responseMoves: ["Bxd4", "Kh2", "Qxd4"],
  }
  ,
  {
    fen: "5rrk/pppb3p/3p4/3P1p1B/3p1p1q/3P1Q2/PPP1RP1P/4R2K b - - 7 19",
    correctMoves: [
      {
        from: "f8",
        to: "f6",
        san: "Rf6"
      },
      {
        from: "g8",
        to: "g1",
        san: "Rxg1+"
      },
      {
        from: "f6",
        to: "h6",
        san: "Rh6"
      },
      {
        from: "d7",
        to: "e8",
        san: "Bxe8"
      },
    ],
    responseMoves: ["Rg1", "Kxg1", "Re8+"],
  }
  ,
  {
    fen: "3r1rk1/2p5/1pn1q1p1/p2np2p/P1B1Q2P/2P3BR/1PK3P1/3R4 b - - 3 27",
    correctMoves: [
      {
        from: "d5",
        to: "e3",
        san: "Ne3+"
      },
      {
        from: "e6",
        to: "c4",
        san: "Qxc4"
      },
      {
        from: "c6",
        to: "d4",
        san: "Nd4+"
      },
      {
        from: "c4",
        to: "e2",
        san: "Qe2+"
      },
      {
        from: "e5",
        to: "d4",
        san: "exd4"
      },
      {
        from: "d4",
        to: "d3",
        san: "d3+"
      },
      {
        from: "d3",
        to: "e2",
        san: "dxe2+"
      },
    ],
    responseMoves: ["Qxe3", "b3", "Qxd4", "Rd2", "Rxe2", "Ke2"],
  }
  ,
  {
    fen: "3rk2r/4np1p/p5p1/2Q1b3/2P1q3/4B3/P4PPP/4RRK1 w k - 0 2",
    correctMoves: [
      {
        from: "e3",
        to: "g5",
        san: "Bg5"
      },
      {
        from: "c5",
        to: "a7",
        san: "Qa7"
      },
      {
        from: "a7",
        to: "d7",
        san: "Qxd7+"
      },
      {
        from: "e1",
        to: "e4",
        san: "Rxe4"
      }
    ],
    responseMoves: ["Bd6", "Rd7", "Kxd7"]
  }
  ,
  {
    fen: "8/1k1b4/p3p1P1/1pQp4/3P1P2/P1N3q1/KP4r1/1B6 w - - 1 2",
    correctMoves: [
      {
        from: "c3",
        to: "e4",
        san: "Ne4"
      },
      {
        from: "e4",
        to: "d6",
        san: "Nd6+"
      },
      {
        from: "c5",
        to: "d6",
        san: "Qxd6"
      },
    ],
    responseMoves: ["Qxf4", "Qxd6"]
  },
  {
    fen: "8/6kp/1p1rq2r/p2p1pn1/P1pP2NR/2P3P1/1P5P/4RQK1 b - - 7 34",
    correctMoves: [
      {
        from: "g5",
        to: "f3",
        san: "Nf3+"
      },
      {
        from: "e6",
        to: "e1",
        san: "Qxe1+"
      },
      {
        from: "f3",
        to: "e1",
        san: "Nxe1"
      },
      {
        from: "e1",
        to: "d3",
        san: "Nxd3+"
      },
    ],
    responseMoves: ["Kf2", "Qxe1", "Nxh6"]
  }
  ,
  {
    fen: "r4rk1/1pp2ppp/p1nbpq2/7b/3PB3/2P2N1P/PP3PP1/R1BQR1K1 w - - 1 13",
    correctMoves: [
      {
        from: "g2",
        to: "g4",
        san: "g4"
      },
      {
        from: "c1",
        to: "g5",
        san: "Bg5"
      },
      {
        from: "g5",
        to: "f6",
        san: "Bxf6"
      },
    ],
    responseMoves: ["Bg6", "Bxe4"]
  },
  {
    fen: "1k1rr3/p2p1pp1/1ppbq2p/3R4/Q3P3/2P1B1PP/PP3PK1/4R3 w - - 0 24",
    correctMoves: [
      {
        from: "d5",
        to: "d6",
        san: "Rxd6"
      },
      {
        from: "e3",
        to: "f4",
        san: "Bf4"
      },
      {
        from: "a4",
        to: "d4",
        san: "Qd4"
      },
      {
        from: "c3",
        to: "d4",
        san: "cxd4"
      },
      {
        from: "d4",
        to: "e5",
        san: "dxe5"
      },
    ],
    responseMoves: ["Qxd6", "Re5", "Qxd4", "d6"]
  }
  ,
  {
    fen: "q7/3bkpQR/1p2p3/3p4/1p6/1P1KP3/r4PP1/3R1B2 b - - 4 27",
    correctMoves: [
      {
        from: "d7",
        to: "b5",
        san: "Bb5+"
      },
      {
        from: "a2",
        to: "d2",
        san: "Rd2+"
      },
      {
        from: "d2",
        to: "d3",
        san: "Rxd3+"
      },
      {
        from: "a8",
        to: "a1",
        san: "Qa1+"
      },
      {
        from: "a1",
        to: "c3",
        san: "Qxc3#"
      },
    ],
    responseMoves: ["Kd4", "Bd3", "Rxd3", "Rc3"]
  },
  {
    fen: "rk2R3/7p/1p1p2p1/2b5/8/2PQ3P/5rP1/6K1 b - - 1 37",
    correctMoves: [
      {
        from: "b8",
        to: "c7",
        san: "Kc7"
      },
      {
        from: "c7",
        to: "d8",
        san: "Kd8"
      },
      {
        from: "a8",
        to: "a2",
        san: "Raa2"
      },
      {
        from: "d8",
        to: "e8",
        san: "Kxe8"
      },
    ],
    responseMoves: ["Re7+", "Kh2", "Re8+"]
  },
  {
    fen: "1Qq2k1r/6p1/p4p1p/4Nb2/5P2/8/1P2NKPP/8 w - - 2 28",
    correctMoves: [
      {
        from: "e5",
        to: "g6",
        san: "Ng6+"
      },
      {
        from: "b8",
        to: "c8",
        san: "Qxc8+"
      },
      {
        from: "g6",
        to: "h8",
        san: "Nxh8"
      },
    ],
    responseMoves: ["Kf8", "Bxc8"]
  },
  {
    fen: "8/5p1k/r4p1P/3P1K1R/4PPP1/8/8/3b4 b - - 0 43",
    correctMoves: [
      {
        from: "d1",
        to: "a4",
        san: "Ba4"
      },
      {
        from: "a6",
        to: "d6",
        san: "Rxd6"
      },
      {
        from: "a4",
        to: "d7",
        san: "Bd7#"
      },
    ],
    responseMoves: ["d6", "g5"]
  }
  ,
  {
    fen: "r4rk1/3R3p/p6p/2p5/2b2qP1/1PN4P/P1P2P2/1R1Q2K1 b - - 0 24",
    correctMoves: [
      {
        from: "f4",
        to: "f2",
        san: "Qxf2+"
      },
      {
        from: "f8",
        to: "f3",
        san: "Rf3"
      },
      {
        from: "g8",
        to: "g7",
        san: "Kg7"
      },
      {
        from: "c4",
        to: "d3",
        san: "Bxd3"
      },
      {
        from: "f2",
        to: "f3",
        san: "Qxf3+"
      },
    ],
    responseMoves: ["Kh1", "Rd8+", "Rd3", "Qxf3"],
  },
  {
    fen: "5rk1/1R6/2p1r1pp/5p2/5Q2/q6P/6P1/5R1K w - f6 0 37",
    correctMoves: [
      {
        from: "f4",
        to: "c7",
        san: "Qc7"
      },
      {
        from: "c7",
        to: "e7",
        san: "Qxe7"
      },
      {
        from: "b7",
        to: "e7",
        san: "Rxe7"
      },
    ],
    responseMoves: ["Re7", "Qxe7"],
  },
  {
    fen: "r1b2rk1/5p1p/7n/2p2qp1/p1PPN3/P1BBPP2/1P4PP/R4RK1 w - c6 0 19",
    correctMoves: [
      {
        from: "d4",
        to: "d5",
        san: "d5"
      },
      {
        from: "e4",
        to: "c5",
        san: "Nxc5"
      },
      {
        from: "c5",
        to: "d3",
        san: "Nxd3"
      },
    ],
    responseMoves: ["f6", "Qxd3"],
  },
  {
    fen: "4qrk1/n4pbp/B2p1np1/p2P2B1/1p6/1P3N1P/P3QPP1/2R3K1 w - - 1 26",
    correctMoves: [
      {
        from: "e2",
        to: "e8",
        san: "Qxe8"
      },
      {
        from: "c1",
        to: "c7",
        san: "Rc7"
      },
      {
        from: "g5",
        to: "e3",
        san: "Be3"
      },
      {
        from: "c7",
        to: "a7",
        san: "Rxa7"
      },
      {
        from: "e3",
        to: "a7",
        san: "Bxa7"
      },
    ],
    responseMoves: ["Rxe8", "Ra8", "Nxd5", "Rxa7"],
  },
  {
    fen: "r3rk2/5p2/p3P2R/q2b1p2/2pQ4/7N/P1PP4/1K6 w - - 1 31",
    correctMoves: [
      {
        from: "d4",
        to: "f6",
        san: "Qf6"
      },
      {
        from: "b1",
        to: "a1",
        san: "Ka1"
      },
      {
        from: "a1",
        to: "b1",
        san: "Kxb1"
      },
      {
        from: "b1",
        to: "a1",
        san: "Ka1"
      },
      {
        from: "a1",
        to: "b1",
        san: "Kxb1"
      },
    ],
    responseMoves: ["Rab8+", "Rb1+", "Rb8+", "Rb1+"],
  },
  {
    fen: "2k2bnr/1pp2b1p/p4p2/5N2/5PQP/P1K5/1P1r1qP1/R7 w - - 0 22",
    correctMoves: [
      {
        from: "f5",
        to: "d6",
        san: "Nd6+"
      },
      {
        from: "g4",
        to: "c8",
        san: "Qc8+"
      },
      {
        from: "d6",
        to: "f5",
        san: "Nf5#"
      },
    ],
    responseMoves: ["Kd8", "Ke7"],
  },
  {
    fen: "8/6k1/6p1/2P3Kp/BP5P/5N2/1b3P2/8 b - - 0 40",
    correctMoves: [
      {
        from: "b2",
        to: "c1",
        san: "Bc1+"
      },
      {
        from: "c1",
        to: "d2",
        san: "Bxd2+"
      },
      {
        from: "d2",
        to: "c3",
        san: "Bc3"
      },
      {
        from: "c3",
        to: "d2",
        san: "Bd2#"
      },
    ],
    responseMoves: ["Nd2", "f4", "f5"],
  },
  {
    fen: "8/pQ1P1pp1/1p3k2/7K/r6N/6p1/4P3/5b2 b - - 0 36",
    correctMoves: [
      {
        from: "g7",
        to: "g6",
        san: "g6+"
      },
      {
        from: "f7",
        to: "g6",
        san: "fxg6+"
      },
      {
        from: "a4",
        to: "h4",
        san: "Rh4#"
      },
    ],
    responseMoves: ["Nxg6", "Kh6"],
  },
  {
    fen: "r1b1k3/pp1p1p1Q/4p3/1B1pPP2/1b2n3/2N4P/PPP1K1PR/q7 w q - 0 20",
    correctMoves: [
      {
        from: "h7",
        to: "g8",
        san: "Qg8+"
      },
      {
        from: "f5",
        to: "f6",
        san: "f6+"
      },
      {
        from: "e5",
        to: "f6",
        san: "exf6+"
      },
      {
        from: "g8",
        to: "f8",
        san: "Qf8+"
      },
      {
        from: "f8",
        to: "b4",
        san: "Qxb4"
      },
      {
        from: "b4",
        to: "f4",
        san: "Qf4+"
      },
    ],
    responseMoves: ["Ke7", "Nxf6", "Kd6", "Kc7", "Qg1"],
  },
  {
    fen: "r5k1/1pp4p/pbn2pp1/4qNQ1/5R1P/3B4/1PP2PP1/6K1 w - - 0 2",
    correctMoves: [
      {
        from: "g5",
        to: "h6",
        san: "Qh6"
      },
      {
        from: "d3",
        to: "f5",
        san: "Bxf5"
      },
      {
        from: "f4",
        to: "g4",
        san: "Rg4+"
      },
      {
        from: "f5",
        to: "g6",
        san: "Bxg6+"
      },
      {
        from: "h6",
        to: "g6",
        san: "Qxg6+"
      },
    ],
    responseMoves: ["gxf5", "Ne7", "Ng6", "hxg6"],
  },
  {
    fen: "r1bq3r/ppp1kNpp/2npBp1n/2b1p2Q/4P3/3P4/PPP2PPP/RNB1K2R b KQ - 5 9",
    correctMoves: [
      {
        from: "d8",
        to: "e8",
        san: "Qe8"
      },
      {
        from: "a8",
        to: "c8",
        san: "Rxc8"
      },
      {
        from: "g7",
        to: "h6",
        san: "gxh6"
      },
    ],
    responseMoves: ["Bxc8", "Bxh6"],
  },
  {
    fen: "2r2r2/p4kpQ/2p1p2R/1pq1Ppp1/5nP1/P4K2/1P2B3/3R4 w - - 0 2",
    correctMoves: [
      {
        from: "h6",
        to: "f6",
        san: "Rf6+"
      },
      {
        from: "h7",
        to: "g7",
        san: "Qxg7"
      },
      {
        from: "g7",
        to: "d7",
        san: "Qd7+"
      },
      {
        from: "d7",
        to: "c8",
        san: "Qxc8+"
      },
    ],
    responseMoves: ["Ke8", "Rxf6", "Kf8"],
  },
  {
    fen: "r2k1r2/p1pq1p1b/1pB5/8/1n6/7N/1KP2PPP/3RR3 w - - 3 20",
    correctMoves: [
      {
        from: "d1",
        to: "d7",
        san: "Rxd7+"
      },
      {
        from: "d7",
        to: "f7",
        san: "Rxf7"
      },
      {
        from: "f7",
        to: "f8",
        san: "Rxf8+"
      },
    ],
    responseMoves: ["Kc8", "Nxc6"],
  },
  {
    fen: "r2qkb1r/ppp2p1p/4bnp1/3np1B1/2B5/2PP2Q1/PP3PPP/RN2K1NR w KQkq - 2 10",
    correctMoves: [
      {
        from: "c4",
        to: "d5",
        san: "Bxd5"
      },
      {
        from: "g3",
        to: "e5",
        san: "Qxe5"
      },
      {
        from: "g5",
        to: "f6",
        san: "Bxf6"
      },
      {
        from: "f6",
        to: "e5",
        san: "Bxe5"
      },
    ],
    responseMoves: ["Bxd5", "Qe7", "Qxe5"],
  },
  {
    fen: "8/8/8/8/5K2/k7/p3Q3/8 w - - 2 53",
    correctMoves: [
      {
        from: "e2",
        to: "e5",
        san: "Qe5"
      },
    ],
    responseMoves: [],
  },
  {
    fen: "r1r3k1/6b1/4p2p/3n4/4N3/Pp4N1/P5PP/1KB1R2R b - - 0 1",
    correctMoves: [
      {
        from: "b3",
        to: "a2",
        san: "bxa2+"
      },
      {
        from: "d5",
        to: "b4",
        san: "Nb4+"
      },
      {
        from: "b4",
        to: "c2",
        san: "Nc2"
      },
      {
        from: "c2",
        to: "d4",
        san: "Nd4+"
      },
      {
        from: "d4",
        to: "e2",
        san: "Nxe2"
      },
    ],
    responseMoves: ["Kxa2", "Kb3", "Re2", "Ka2"],
  },
  {
    fen: "8/7k/8/8/5pK1/3n1P1P/8/8 b - - 2 51",
    correctMoves: [
      {
        from: "h7",
        to: "h6",
        san: "Kh6"
      },
      {
        from: "h6",
        to: "h5",
        san: "Kh5"
      },
      {
        from: "h5",
        to: "h4",
        san: "Kh4"
      },
      {
        from: "h4",
        to: "h3",
        san: "Kxh3"
      },
      {
        from: "h3",
        to: "g2",
        san: "Kg2"
      },
      {
        from: "g2",
        to: "g3",
        san: "Kg3"
      },
    ],
    responseMoves: ["Kf5", "Ke4", "Kxd3", "Kd4", "Ke4"],
  },
  {
    fen: "2r4r/6k1/8/p2p1p1p/Pp1Pp3/8/1q1B2Q1/3RK3 b - - 1 35",
    correctMoves: [
      {
        from: "g7",
        to: "f7",
        san: "Kf7"
      },
      {
        from: "b2",
        to: "d4",
        san: "Qxd4"
      },
      {
        from: "d4",
        to: "f6",
        san: "Qf6"
      },
    ],
    responseMoves: ["Qg5", "Qxf5+"],
  },
  {
    fen: "8/p1p5/8/2p1p1pp/P4k2/2PK1B1P/2P3P1/6b1 b - - 1 35",
    correctMoves: [
      {
        from: "e5",
        to: "e4",
        san: "e4+"
      },
      {
        from: "c5",
        to: "c4",
        san: "c4+"
      },
      {
        from: "f4",
        to: "e4",
        san: "Kxe4"
      },
    ],
    responseMoves: ["Bxe4", "Kxc4"],
  },
  {
    fen: "6k1/3B1p2/3p2p1/p1qP2P1/np6/4Q3/PbP5/K1BR4 w - - 0 2",
    correctMoves: [
      {
        from: "c1",
        to: "b2",
        san: "Bxb2"
      },
      {
        from: "b2",
        to: "f6",
        san: "Bf6"
      },
      {
        from: "f6",
        to: "c3",
        san: "Bxc3"
      },
    ],
    responseMoves: ["Qxe3", "Qc3+"],
  },
  {
    fen: "Q7/pp3rp1/2bPp1R1/2P1k3/P7/1P1B1n2/7P/7K b - a3 0 33",
    correctMoves: [
      {
        from: "f3",
        to: "g5",
        san: "Ng5+"
      },
      {
        from: "c6",
        to: "e4",
        san: "Bxe4+"
      },
      {
        from: "g5",
        to: "h3",
        san: "Nh3#"
      },
    ],
    responseMoves: ["Be4", "Kg1"],
  },
  {
    fen: "3q3k/1b5p/p1n2Np1/1p1Q1P2/3p3P/P2Br3/1PP3P1/5R1K b - - 0 1",
    correctMoves: [
      {
        from: "d8",
        to: "f6",
        san: "Qxf6"
      },
      {
        from: "e3",
        to: "e1",
        san: "Re1"
      },
      {
        from: "e1",
        to: "f1",
        san: "Rxf1+"
      },
    ],
    responseMoves: ["fxg6", "Kg1"],
  },
  {
    fen: "8/8/4K1kp/5p1p/8/4P1P1/8/8 b - - 5 43",
    correctMoves: [
      {
        from: "g6",
        to: "g5",
        san: "Kg5"
      },
      {
        from: "g5",
        to: "g4",
        san: "Kg4"
      },
      {
        from: "g4",
        to: "g3",
        san: "Kxg3"
      },
      {
        from: "h5",
        to: "h4",
        san: "h4"
      },
      {
        from: "h4",
        to: "h3",
        san: "h3"
      },
    ],
    responseMoves: ["Kf7", "Kg6", "Kxf5", "e4"],
  },
  {
    fen: "1k1rq2r/pp3ppp/4b2n/np1N4/8/2Q2NP1/PP3PP1/2KRR3 w - - 0 23",
    correctMoves: [
      {
        from: "c3",
        to: "e5",
        san: "Qe5+"
      },
      {
        from: "d5",
        to: "c7",
        san: "Nc7+"
      },
    ],
    responseMoves: ["Ka8"],
  },
  {
    fen: "r1bqk1nr/ppp2pp1/2n1p2p/3p4/3P1BQ1/P1P1P3/2P2PPP/R3KBNR b KQkq - 2 7",
    correctMoves: [
      {
        from: "g7",
        to: "g5",
        san: "g5"
      },
      {
        from: "h6",
        to: "h5",
        san: "h5"
      },
      {
        from: "h5",
        to: "h4",
        san: "h4"
      },
    ],
    responseMoves: ["Be5", "Qg3"],
  },
  {
    fen: "3K4/2p5/2q5/3k4/P7/Q7/8/8 b - - 2 55",
    correctMoves: [
      {
        from: "c6",
        to: "d6",
        san: "Qd6+"
      },
      {
        from: "d5",
        to: "d6",
        san: "Kxd6"
      },
      {
        from: "c7",
        to: "c5",
        san: "c5"
      },
      {
        from: "d6",
        to: "c6",
        san: "Kc6"
      },
    ],
    responseMoves: ["Qxd6+", "a5", "a6"],
  },
  {
    fen: "r3k2r/ppp3pp/3p4/2nPqb1N/2P5/3P4/PP3PPP/R1BQ1K1R w kq - 2 17",
    correctMoves: [
      {
        from: "d3",
        to: "d4",
        san: "d4"
      },
      {
        from: "d1",
        to: "d3",
        san: "Qxd3"
      },
      {
        from: "d4",
        to: "e5",
        san: "dxe5"
      },
    ],
    responseMoves: ["Bd3+", "Nxd3"],
  },
  {
    fen: "r4rk1/7p/p2p4/2pPb1q1/Q1PpP1P1/3B1P2/P7/1R2BRK1 b - - 0 1",
    correctMoves: [
      {
        from: "g5",
        to: "e3",
        san: "Qe3+"
      },
      {
        from: "e3",
        to: "f4",
        san: "Qf4"
      },
      {
        from: "f4",
        to: "g3",
        san: "Qg3+"
      },
      {
        from: "f8",
        to: "f3",
        san: "Rxf3"
      },
    ],
    responseMoves: ["Kg2", "Rf2", "Kf1"],
  },
  {
    fen: "8/1p1k4/8/4pPQP/1RPp4/q2P1P1P/r1PK4/6NR b - - 4 31",
    correctMoves: [
      {
        from: "a3",
        to: "c3",
        san: "Qc3+"
      },
      {
        from: "c3",
        to: "c2",
        san: "Qxc2+"
      },
      {
        from: "c2",
        to: "d2",
        san: "Qxd2+"
      },
    ],
    responseMoves: ["Ke2", "Qd2"],
  },
  {
    fen: "rnbqkbnr/p6p/2p5/3Pppp1/4P3/8/PPP2PPP/R1BQKBNR w KQkq f6 0 8",
    correctMoves: [
      {
        from: "d1",
        to: "h5",
        san: "Qh5+"
      },
      {
        from: "c1",
        to: "g5",
        san: "Bxg5"
      },
      {
        from: "c2",
        to: "c3",
        san: "c3"
      },
    ],
    responseMoves: ["Kd7", "Bb4+"],
  },
  {
    fen: "2R2b1r/pk2p3/1q2Qp1p/4p1p1/3rP3/P6B/1P3P1P/2K4R b - - 3 29",
    correctMoves: [
      {
        from: "b6",
        to: "e6",
        san: "Qxe6"
      },
      {
        from: "d4",
        to: "d6",
        san: "Rd6"
      },
      {
        from: "e7",
        to: "e6",
        san: "e6"
      },
      {
        from: "d6",
        to: "e6",
        san: "Rxe6"
      },
    ],
    responseMoves: ["Bxe6", "Bf5", "Bxe6"],
  },
  {
    fen: "6k1/2q3p1/3R1p1p/3p4/3P4/2r2PQP/6PK/8 b - - 0 34",
    correctMoves: [
      {
        from: "c3",
        to: "c1",
        san: "Rc1"
      },
      {
        from: "c1",
        to: "h1",
        san: "Rh1+"
      },
      {
        from: "c7",
        to: "g3",
        san: "Qxg3"
      },
    ],
    responseMoves: ["Kxd5", "Kxh1"],
  },
  {
    fen: "q3kb1r/r1pn1pp1/pp1pp3/4P3/2BPbP2/6Pp/PPPNQB1P/3R1RK1 b k - 3 15",
    correctMoves: [
      {
        from: "e4",
        to: "d3",
        san: "Bd3"
      },
      {
        from: "a8",
        to: "f3",
        san: "Qxf3"
      },
      {
        from: "d3",
        to: "c4",
        san: "Bxc4"
      },
    ],
    responseMoves: ["Qf3", "Nxf3"],
  },
  {
    fen: "2r3k1/2r2p1p/p3p2p/1p2PnP1/1P2NP2/3R4/2P5/2KR4 w - - 0 2",
    correctMoves: [
      {
        from: "d3",
        to: "d8",
        san: "Rd8+"
      },
      {
        from: "g5",
        to: "h6",
        san: "gxh6+"
      },
      {
        from: "d1",
        to: "h1",
        san: "Rh1+"
      },
      {
        from: "h1",
        to: "g1",
        san: "Rg1+"
      },
    ],
    responseMoves: ["Kg7", "Kxh6", "Kg6"],
  },
  {
    fen: "4Q3/pb3rpp/5k2/2p5/5qP1/P1P1nP2/2P2R1P/R5K1 b - - 5 27",
    correctMoves: [
      {
        from: "b7",
        to: "f3",
        san: "Bxf3"
      },
      {
        from: "f6",
        to: "g5",
        san: "Kg5"
      },
      {
        from: "f4",
        to: "f3",
        san: "Qxf3"
      },
      {
        from: "f7",
        to: "f3",
        san: "Rxf3"
      },
    ],
    responseMoves: ["Qc6+", "Rxf3", "Qxf3"],
  },
  {
    fen: "rnq1k2r/pbppn1pp/1p1P1p2/4N3/1bB5/2N5/PPP2PPP/R1BQK2R b KQkq - 0 9",
    correctMoves: [
      {
        from: "c7",
        to: "d6",
        san: "cxd6"
      },
      {
        from: "g7",
        to: "g6",
        san: "g6"
      },
      {
        from: "e8",
        to: "d8",
        san: "Kd8"
      },
    ],
    responseMoves: ["Qh5+", "Bf7+"],
  },
  {
    fen: "r1bqkb2/1pp1pr1p/p2p4/7Q/2n1N3/4P3/PPPP1PPP/R1B2RK1 w q - 2 12",
    correctMoves: [
      {
        from: "e4",
        to: "g5",
        san: "Ng5"
      },
      {
        from: "f2",
        to: "f4",
        san: "f4"
      },
      {
        from: "g5",
        to: "f7",
        san: "Nxf7"
      },
      {
        from: "f7",
        to: "d8",
        san: "Nxd8"
      },
      {
        from: "f4",
        to: "e5",
        san: "fxe5"
      },
    ],
    responseMoves: ["Ne5", "Bg4", "Bxh5", "Rxd8"],
  },
  {
    fen: "8/8/3Pk1p1/1p2P3/b2b1P2/3N2B1/6K1/8 w - - 0 41",
    correctMoves: [
      {
        from: "g3",
        to: "f2",
        san: "Bf2"
      },
      {
        from: "f4",
        to: "f5",
        san: "f5+"
      },
      {
        from: "d3",
        to: "f4",
        san: "Nf4+"
      },
      {
        from: "d6",
        to: "d7",
        san: "d7"
      },
    ],
    responseMoves: ["Bc2", "gxf5", "Kxe5"],
  },
  {
    fen: "3r2r1/p1Q1kp2/3pp2p/8/3P1pqP/6P1/PPP2P2/R4RK1 b - - 1 21",
    correctMoves: [
      {
        from: "d8",
        to: "d7",
        san: "Rd7"
      },
      {
        from: "g4",
        to: "h3",
        san: "Qh3"
      },
      {
        from: "f4",
        to: "g3",
        san: "fxg3"
      },
    ],
    responseMoves: ["Qc3", "Qf3"],
  },
  {
    fen: "8/8/8/2p5/1kp5/1p6/8/B1K5 b - - 1 49",
    correctMoves: [
      {
        from: "c4",
        to: "c3",
        san: "c3"
      },
      {
        from: "b4",
        to: "c4",
        san: "Kc4"
      },
      {
        from: "c3",
        to: "b2",
        san: "cxb2"
      },
    ],
    responseMoves: ["Kb1", "Bb2"],
  },
  {
    fen: "3kr3/1ppqbR2/p1n2N1p/8/3P4/P1N5/1PP1Q1PP/6K1 b - - 1 22",
    correctMoves: [
      {
        from: "d7",
        to: "d4",
        san: "Qxd4+"
      },
      {
        from: "e7",
        to: "f6",
        san: "Bxf6"
      },
      {
        from: "f6",
        to: "d4",
        san: "Bxd4+"
      },
    ],
    responseMoves: ["Qf2", "Qxd4"],
  },
  {
    fen: "8/6PQ/1kp1p3/p2pP3/4B3/2K3P1/PPP2q2/8 b - - 2 39",
    correctMoves: [
      {
        from: "f2",
        to: "e3",
        san: "Qe3+"
      },
      {
        from: "e3",
        to: "e1",
        san: "Qe1+"
      },
      {
        from: "e1",
        to: "b4",
        san: "Qb4#"
      },
    ],
    responseMoves: ["Bd3", "Kb3"],
  },
  {
    fen: "r3k2r/p1pqbppp/1pn1pn2/2Pp4/1P1PbP2/P2BPN2/6PP/RNBQ1RK1 w kq - 0 11",
    correctMoves: [
      {
        from: "d3",
        to: "b5",
        san: "Bb5"
      },
      {
        from: "f3",
        to: "e5",
        san: "Ne5"
      },
      {
        from: "b5",
        to: "d7",
        san: "Bxd7+"
      },
    ],
    responseMoves: ["a6", "Nxe5"],
  },
  {
    fen: "k2r4/1q3pQ1/p3p1p1/2N3Pp/2P4P/p2rR3/8/4R1K1 b - - 2 48",
    correctMoves: [
      {
        from: "d3",
        to: "e3",
        san: "Rxe3"
      },
      {
        from: "e3",
        to: "e1",
        san: "Rxe1+"
      },
      {
        from: "e1",
        to: "b1",
        san: "Rb1"
      },
      {
        from: "a3",
        to: "a2",
        san: "a2"
      },
      {
        from: "a2",
        to: "a1",
        san: "a1=Q"
      },
      {
        from: "b1",
        to: "a1",
        san: "Rxa1"
      },
    ],
    responseMoves: ["Nxb7", "Kf2", "Nxd8", "Nxe6", "Qxa1"],
  },
  {
    fen: "r1b1qrk1/pppp1ppp/2n5/2b5/2B1P1n1/2N5/PPPB1PPP/R2QK1NR w KQ - 11 9",
    correctMoves: [
      {
        from: "d1",
        to: "g4",
        san: "Qxg4"
      },
      {
        from: "g4",
        to: "h5",
        san: "Qh5"
      },
      {
        from: "e1",
        to: "f2",
        san: "Kxf2"
      },
    ],
    responseMoves: ["d5", "Bf2+"],
  },
  {
    fen: "r2q1r1k/ppp1bp2/3pn2p/8/6QP/1BP5/PP3P2/R5RK w - - 0 19",
    correctMoves: [
      {
        from: "g4",
        to: "h5",
        san: "Qh5"
      },
      {
        from: "h4",
        to: "g5",
        san: "hxg5"
      },
      {
        from: "g1",
        to: "g5",
        san: "Rxg5"
      },
    ],
    responseMoves: ["Bg5", "Qxg5"],
  }
  ,
  {
    fen: "4b3/4P3/1K1k4/8/1P6/8/P7/8 w - - 1 65",
    correctMoves: [
      {
        from: "b4",
        to: "b5",
        san: "b5"
      },
      {
        from: "a2",
        to: "a4",
        san: "a4"
      },
      {
        from: "b6",
        to: "a7",
        san: "Ka7"
      },
      {
        from: "b5",
        to: "b6",
        san: "b6"
      },
      {
        from: "b6",
        to: "b7",
        san: "b7"
      },
      {
        from: "b7",
        to: "b8",
        san: "b8=Q"
      },
    ],
    responseMoves: ["Kxe7", "Kd6", "Kc5", "Bxa4", "Bb5"],
  }
  ,
  {
    fen: "r1bq1rk1/1p2npbp/p3p1p1/2ppN1Nn/3P1B2/2PBPQ2/PP3PPP/R3K2R w KQ - 6 12",
    correctMoves: [
      {
        from: "f3",
        to: "h5",
        san: "Qxh5"
      },
      {
        from: "d3",
        to: "h7",
        san: "Bxh7+"
      },
      {
        from: "e5",
        to: "f7",
        san: "N5xf7+"
      },
      {
        from: "g5",
        to: "f7",
        san: "Nxf7+"
      },
      {
        from: "f7",
        to: "d8",
        san: "Nxd8"
      },
    ],
    responseMoves: ["gxh5", "Kh8", "Rxf7", "Kxh7"],
  }
  ,
  {
    fen: "k7/3r2p1/p1N1Qn2/1P2B3/K7/1P6/P7/2q5 b - - 0 1",
    correctMoves: [
      {
        from: "a6",
        to: "b5",
        san: "axb5+"
      },
      {
        from: "d7",
        to: "d5",
        san: "Rd5+"
      },
      {
        from: "f6",
        to: "d7",
        san: "Nd7"
      },
    ],
    responseMoves: ["Kxb5", "Ka4"],
  }
  ,
  {
    fen: "2kr3r/1pp2Q2/3q3B/1Pb2P2/8/6P1/P3P2P/1R2KBNR b K - 0 26",
    correctMoves: [
      {
        from: "h8",
        to: "h6",
        san: "Rxh6"
      },
      {
        from: "h6",
        to: "h2",
        san: "Rxh2"
      },
      {
        from: "d6",
        to: "e6",
        san: "Qxe6"
      },
    ],
    responseMoves: ["Nf3", "Qe6+"],
  }
  ,
  {
    fen: "7r/pkn3pp/1b1Q1p2/4p3/1B2q3/1P6/PK3P2/2R2R2 b - - 4 32",
    correctMoves: [
      {
        from: "b6",
        to: "d4",
        san: "Bd4+"
      },
      {
        from: "e4",
        to: "e2",
        san: "Qe2+"
      },
      {
        from: "d4",
        to: "c3",
        san: "Bxc3+"
      },
    ],
    responseMoves: ["Bc3", "Rc2"],
  }
  ,
  {
    fen: "3rkbnr/pp3ppp/2n5/2p1P3/6b1/2P2N1P/PPK2PP1/RNB2B1R b k - 2 9",
    correctMoves: [
      {
        from: "g4",
        to: "f5",
        san: "Bf5+"
      },
      {
        from: "c5",
        to: "c4",
        san: "c4"
      },
      {
        from: "c6",
        to: "a5",
        san: "Na5+"
      },
      {
        from: "a5",
        to: "c4",
        san: "Nxc4"
      },
    ],
    responseMoves: ["Kb3", "Bxc4", "Ka4"],
  }
  ,
  {
    fen: "5k2/2r3pp/4Kp2/p1P1p3/r5P1/2R4P/5P2/2R5 b - - 1 35",
    correctMoves: [
      {
        from: "a4",
        to: "d4",
        san: "Rd4"
      },
      {
        from: "c7",
        to: "c6",
        san: "Rc6+"
      },
      {
        from: "g7",
        to: "g6",
        san: "g6#"
      },
    ],
    responseMoves: ["Rc4", "Kf5"],
  }
  ,
  {
    fen: "r1b1k1nr/ppp2ppp/4q3/3N4/P1Pn4/5B2/4QPPP/R3K1NR b KQkq - 3 14",
    correctMoves: [
      {
        from: "d4",
        to: "e2",
        san: "Nxe2"
      },
      {
        from: "e8",
        to: "e7",
        san: "Ke7"
      },
      {
        from: "e2",
        to: "g1",
        san: "Nxg1"
      },
      {
        from: "c8",
        to: "b7",
        san: "Bxb7"
      },
    ],
    responseMoves: ["Nxc7+", "Nxe6", "Bxb7"],
  }
  ,
  {
    fen: "8/8/p6k/q5p1/5Q2/3p1N2/8/5K2 w - g6 0 49",
    correctMoves: [
      {
        from: "f4",
        to: "f6",
        san: "Qf6+"
      },
      {
        from: "f3",
        to: "e5",
        san: "Ne5"
      },
      {
        from: "f1",
        to: "g2",
        san: "Kg2"
      },
      {
        from: "f6",
        to: "e5",
        san: "Qxe5"
      },
    ],
    responseMoves: ["Kh5", "Qa1+", "Qxe5"],
  }
  ,
  {
    fen: "r4rk1/2p2p2/p2p2qp/1pbNp3/3nP1b1/1B1P2Q1/PPP2PPB/R4RK1 w - - 5 19",
    correctMoves: [
      {
        from: "g3",
        to: "g4",
        san: "Qxg4+"
      },
      {
        from: "d5",
        to: "f6",
        san: "Nf6+"
      },
      {
        from: "f6",
        to: "g4",
        san: "Nxg4"
      },
    ],
    responseMoves: ["Qxg4", "Kg7"],
  }
  ,
  {
    fen: "r4k1r/2ppn2p/1p3P2/p5N1/2bp4/5Q2/q4P1P/1N4K1 w - - 0 24",
    correctMoves: [
      {
        from: "f3",
        to: "a8",
        san: "Qxa8+"
      },
      {
        from: "a8",
        to: "c8",
        san: "Qxc8#"
      },
    ],
    responseMoves: ["Nc8"],
  }
  ,
  {
    fen: "8/p1r1p2R/2N1pkp1/1p3q2/8/1P5P/P3QPP1/b5K1 w - - 1 29",
    correctMoves: [
      {
        from: "c6",
        to: "d8",
        san: "Nd8"
      },
      {
        from: "g1",
        to: "h2",
        san: "Kh2"
      },
      {
        from: "f2",
        to: "f4",
        san: "f4"
      },
      {
        from: "g2",
        to: "g3",
        san: "g3"
      },
    ],
    responseMoves: ["Rc1+", "Qe5+", "Qxf4+"],
  }
  ,
  {
    fen: "3r2k1/5pp1/4n2p/1R2Q3/3Nn3/4B2P/2q2PP1/6K1 b - - 2 25",
    correctMoves: [
      {
        from: "e6",
        to: "d4",
        san: "Nxd4"
      },
      {
        from: "c2",
        to: "d1",
        san: "Qd1+"
      },
      {
        from: "d1",
        to: "d4",
        san: "Qxd4"
      },
      {
        from: "d8",
        to: "d4",
        san: "Rxd4"
      },
    ],
    responseMoves: ["Bxd4", "Kh2", "Qxd4"],
  }
  ,
  {
    fen: "5rrk/pppb3p/3p4/3P1p1B/3p1p1q/3P1Q2/PPP1RP1P/4R2K b - - 7 19",
    correctMoves: [
      {
        from: "f8",
        to: "f6",
        san: "Rf6"
      },
      {
        from: "g8",
        to: "g1",
        san: "Rxg1+"
      },
      {
        from: "f6",
        to: "h6",
        san: "Rh6"
      },
      {
        from: "d7",
        to: "e8",
        san: "Bxe8"
      },
    ],
    responseMoves: ["Rg1", "Kxg1", "Re8+"],
  }
  ,
  {
    fen: "3r1rk1/2p5/1pn1q1p1/p2np2p/P1B1Q2P/2P3BR/1PK3P1/3R4 b - - 3 27",
    correctMoves: [
      {
        from: "d5",
        to: "e3",
        san: "Ne3+"
      },
      {
        from: "e6",
        to: "c4",
        san: "Qxc4"
      },
      {
        from: "c6",
        to: "d4",
        san: "Nd4+"
      },
      {
        from: "c4",
        to: "e2",
        san: "Qe2+"
      },
      {
        from: "e5",
        to: "d4",
        san: "exd4"
      },
      {
        from: "d4",
        to: "d3",
        san: "d3+"
      },
      {
        from: "d3",
        to: "e2",
        san: "dxe2+"
      },
    ],
    responseMoves: ["Qxe3", "b3", "Qxd4", "Rd2", "Rxe2", "Ke2"],
  }
  ,
  {
    fen: "3rk2r/4np1p/p5p1/2Q1b3/2P1q3/4B3/P4PPP/4RRK1 w k - 0 2",
    correctMoves: [
      {
        from: "e3",
        to: "g5",
        san: "Bg5"
      },
      {
        from: "c5",
        to: "a7",
        san: "Qa7"
      },
      {
        from: "a7",
        to: "d7",
        san: "Qxd7+"
      },
      {
        from: "e1",
        to: "e4",
        san: "Rxe4"
      }
    ],
    responseMoves: ["Bd6", "Rd7", "Kxd7"]
  }
  ,
  {
    fen: "8/1k1b4/p3p1P1/1pQp4/3P1P2/P1N3q1/KP4r1/1B6 w - - 1 2",
    correctMoves: [
      {
        from: "c3",
        to: "e4",
        san: "Ne4"
      },
      {
        from: "e4",
        to: "d6",
        san: "Nd6+"
      },
      {
        from: "c5",
        to: "d6",
        san: "Qxd6"
      },
    ],
    responseMoves: ["Qxf4", "Qxd6"]
  },
  {
    fen: "8/6kp/1p1rq2r/p2p1pn1/P1pP2NR/2P3P1/1P5P/4RQK1 b - - 7 34",
    correctMoves: [
      {
        from: "g5",
        to: "f3",
        san: "Nf3+"
      },
      {
        from: "e6",
        to: "e1",
        san: "Qxe1+"
      },
      {
        from: "f3",
        to: "e1",
        san: "Nxe1"
      },
      {
        from: "e1",
        to: "d3",
        san: "Nxd3+"
      },
    ],
    responseMoves: ["Kf2", "Qxe1", "Nxh6"]
  }
  ,
  {
    fen: "r4rk1/1pp2ppp/p1nbpq2/7b/3PB3/2P2N1P/PP3PP1/R1BQR1K1 w - - 1 13",
    correctMoves: [
      {
        from: "g2",
        to: "g4",
        san: "g4"
      },
      {
        from: "c1",
        to: "g5",
        san: "Bg5"
      },
      {
        from: "g5",
        to: "f6",
        san: "Bxf6"
      },
    ],
    responseMoves: ["Bg6", "Bxe4"]
  },
  {
    fen: "1k1rr3/p2p1pp1/1ppbq2p/3R4/Q3P3/2P1B1PP/PP3PK1/4R3 w - - 0 24",
    correctMoves: [
      {
        from: "d5",
        to: "d6",
        san: "Rxd6"
      },
      {
        from: "e3",
        to: "f4",
        san: "Bf4"
      },
      {
        from: "a4",
        to: "d4",
        san: "Qd4"
      },
      {
        from: "c3",
        to: "d4",
        san: "cxd4"
      },
      {
        from: "d4",
        to: "e5",
        san: "dxe5"
      },
    ],
    responseMoves: ["Qxd6", "Re5", "Qxd4", "d6"]
  }
  ,
  {
    fen: "q7/3bkpQR/1p2p3/3p4/1p6/1P1KP3/r4PP1/3R1B2 b - - 4 27",
    correctMoves: [
      {
        from: "d7",
        to: "b5",
        san: "Bb5+"
      },
      {
        from: "a2",
        to: "d2",
        san: "Rd2+"
      },
      {
        from: "d2",
        to: "d3",
        san: "Rxd3+"
      },
      {
        from: "a8",
        to: "a1",
        san: "Qa1+"
      },
      {
        from: "a1",
        to: "c3",
        san: "Qxc3#"
      },
    ],
    responseMoves: ["Kd4", "Bd3", "Rxd3", "Rc3"]
  },
  {
    fen: "rk2R3/7p/1p1p2p1/2b5/8/2PQ3P/5rP1/6K1 b - - 1 37",
    correctMoves: [
      {
        from: "b8",
        to: "c7",
        san: "Kc7"
      },
      {
        from: "c7",
        to: "d8",
        san: "Kd8"
      },
      {
        from: "a8",
        to: "a2",
        san: "Raa2"
      },
      {
        from: "d8",
        to: "e8",
        san: "Kxe8"
      },
    ],
    responseMoves: ["Re7+", "Kh2", "Re8+"]
  },
  {
    fen: "1Qq2k1r/6p1/p4p1p/4Nb2/5P2/8/1P2NKPP/8 w - - 2 28",
    correctMoves: [
      {
        from: "e5",
        to: "g6",
        san: "Ng6+"
      },
      {
        from: "b8",
        to: "c8",
        san: "Qxc8+"
      },
      {
        from: "g6",
        to: "h8",
        san: "Nxh8"
      },
    ],
    responseMoves: ["Kf8", "Bxc8"]
  },
  {
    fen: "8/5p1k/r4p1P/3P1K1R/4PPP1/8/8/3b4 b - - 0 43",
    correctMoves: [
      {
        from: "d1",
        to: "a4",
        san: "Ba4"
      },
      {
        from: "a6",
        to: "d6",
        san: "Rxd6"
      },
      {
        from: "a4",
        to: "d7",
        san: "Bd7#"
      },
    ],
    responseMoves: ["d6", "g5"]
  }
  ,
  {
    fen: "r4rk1/3R3p/p6p/2p5/2b2qP1/1PN4P/P1P2P2/1R1Q2K1 b - - 0 24",
    correctMoves: [
      {
        from: "f4",
        to: "f2",
        san: "Qxf2+"
      },
      {
        from: "f8",
        to: "f3",
        san: "Rf3"
      },
      {
        from: "g8",
        to: "g7",
        san: "Kg7"
      },
      {
        from: "c4",
        to: "d3",
        san: "Bxd3"
      },
      {
        from: "f2",
        to: "f3",
        san: "Qxf3+"
      },
    ],
    responseMoves: ["Kh1", "Rd8+", "Rd3", "Qxf3"],
  },
  {
    fen: "5rk1/1R6/2p1r1pp/5p2/5Q2/q6P/6P1/5R1K w - f6 0 37",
    correctMoves: [
      {
        from: "f4",
        to: "c7",
        san: "Qc7"
      },
      {
        from: "c7",
        to: "e7",
        san: "Qxe7"
      },
      {
        from: "b7",
        to: "e7",
        san: "Rxe7"
      },
    ],
    responseMoves: ["Re7", "Qxe7"],
  },
  {
    fen: "r1b2rk1/5p1p/7n/2p2qp1/p1PPN3/P1BBPP2/1P4PP/R4RK1 w - c6 0 19",
    correctMoves: [
      {
        from: "d4",
        to: "d5",
        san: "d5"
      },
      {
        from: "e4",
        to: "c5",
        san: "Nxc5"
      },
      {
        from: "c5",
        to: "d3",
        san: "Nxd3"
      },
    ],
    responseMoves: ["f6", "Qxd3"],
  },
  {
    fen: "4qrk1/n4pbp/B2p1np1/p2P2B1/1p6/1P3N1P/P3QPP1/2R3K1 w - - 1 26",
    correctMoves: [
      {
        from: "e2",
        to: "e8",
        san: "Qxe8"
      },
      {
        from: "c1",
        to: "c7",
        san: "Rc7"
      },
      {
        from: "g5",
        to: "e3",
        san: "Be3"
      },
      {
        from: "c7",
        to: "a7",
        san: "Rxa7"
      },
      {
        from: "e3",
        to: "a7",
        san: "Bxa7"
      },
    ],
    responseMoves: ["Rxe8", "Ra8", "Nxd5", "Rxa7"],
  },
  {
    fen: "r3rk2/5p2/p3P2R/q2b1p2/2pQ4/7N/P1PP4/1K6 w - - 1 31",
    correctMoves: [
      {
        from: "d4",
        to: "f6",
        san: "Qf6"
      },
      {
        from: "b1",
        to: "a1",
        san: "Ka1"
      },
      {
        from: "a1",
        to: "b1",
        san: "Kxb1"
      },
      {
        from: "b1",
        to: "a1",
        san: "Ka1"
      },
      {
        from: "a1",
        to: "b1",
        san: "Kxb1"
      },
    ],
    responseMoves: ["Rab8+", "Rb1+", "Rb8+", "Rb1+"],
  },
  {
    fen: "2k2bnr/1pp2b1p/p4p2/5N2/5PQP/P1K5/1P1r1qP1/R7 w - - 0 22",
    correctMoves: [
      {
        from: "f5",
        to: "d6",
        san: "Nd6+"
      },
      {
        from: "g4",
        to: "c8",
        san: "Qc8+"
      },
      {
        from: "d6",
        to: "f5",
        san: "Nf5#"
      },
    ],
    responseMoves: ["Kd8", "Ke7"],
  },
  {
    fen: "8/6k1/6p1/2P3Kp/BP5P/5N2/1b3P2/8 b - - 0 40",
    correctMoves: [
      {
        from: "b2",
        to: "c1",
        san: "Bc1+"
      },
      {
        from: "c1",
        to: "d2",
        san: "Bxd2+"
      },
      {
        from: "d2",
        to: "c3",
        san: "Bc3"
      },
      {
        from: "c3",
        to: "d2",
        san: "Bd2#"
      },
    ],
    responseMoves: ["Nd2", "f4", "f5"],
  },
  {
    fen: "8/pQ1P1pp1/1p3k2/7K/r6N/6p1/4P3/5b2 b - - 0 36",
    correctMoves: [
      {
        from: "g7",
        to: "g6",
        san: "g6+"
      },
      {
        from: "f7",
        to: "g6",
        san: "fxg6+"
      },
      {
        from: "a4",
        to: "h4",
        san: "Rh4#"
      },
    ],
    responseMoves: ["Nxg6", "Kh6"],
  },
  {
    fen: "r1b1k3/pp1p1p1Q/4p3/1B1pPP2/1b2n3/2N4P/PPP1K1PR/q7 w q - 0 20",
    correctMoves: [
      {
        from: "h7",
        to: "g8",
        san: "Qg8+"
      },
      {
        from: "f5",
        to: "f6",
        san: "f6+"
      },
      {
        from: "e5",
        to: "f6",
        san: "exf6+"
      },
      {
        from: "g8",
        to: "f8",
        san: "Qf8+"
      },
      {
        from: "f8",
        to: "b4",
        san: "Qxb4"
      },
      {
        from: "b4",
        to: "f4",
        san: "Qf4+"
      },
    ],
    responseMoves: ["Ke7", "Nxf6", "Kd6", "Kc7", "Qg1"],
  },
  {
    fen: "r5k1/1pp4p/pbn2pp1/4qNQ1/5R1P/3B4/1PP2PP1/6K1 w - - 0 2",
    correctMoves: [
      {
        from: "g5",
        to: "h6",
        san: "Qh6"
      },
      {
        from: "d3",
        to: "f5",
        san: "Bxf5"
      },
      {
        from: "f4",
        to: "g4",
        san: "Rg4+"
      },
      {
        from: "f5",
        to: "g6",
        san: "Bxg6+"
      },
      {
        from: "h6",
        to: "g6",
        san: "Qxg6+"
      },
    ],
    responseMoves: ["gxf5", "Ne7", "Ng6", "hxg6"],
  },
  {
    fen: "r1bq3r/ppp1kNpp/2npBp1n/2b1p2Q/4P3/3P4/PPP2PPP/RNB1K2R b KQ - 5 9",
    correctMoves: [
      {
        from: "d8",
        to: "e8",
        san: "Qe8"
      },
      {
        from: "a8",
        to: "c8",
        san: "Rxc8"
      },
      {
        from: "g7",
        to: "h6",
        san: "gxh6"
      },
    ],
    responseMoves: ["Bxc8", "Bxh6"],
  },
  {
    fen: "2r2r2/p4kpQ/2p1p2R/1pq1Ppp1/5nP1/P4K2/1P2B3/3R4 w - - 0 2",
    correctMoves: [
      {
        from: "h6",
        to: "f6",
        san: "Rf6+"
      },
      {
        from: "h7",
        to: "g7",
        san: "Qxg7"
      },
      {
        from: "g7",
        to: "d7",
        san: "Qd7+"
      },
      {
        from: "d7",
        to: "c8",
        san: "Qxc8+"
      },
    ],
    responseMoves: ["Ke8", "Rxf6", "Kf8"],
  },
  {
    fen: "r2k1r2/p1pq1p1b/1pB5/8/1n6/7N/1KP2PPP/3RR3 w - - 3 20",
    correctMoves: [
      {
        from: "d1",
        to: "d7",
        san: "Rxd7+"
      },
      {
        from: "d7",
        to: "f7",
        san: "Rxf7"
      },
      {
        from: "f7",
        to: "f8",
        san: "Rxf8+"
      },
    ],
    responseMoves: ["Kc8", "Nxc6"],
  },
  {
    fen: "r2qkb1r/ppp2p1p/4bnp1/3np1B1/2B5/2PP2Q1/PP3PPP/RN2K1NR w KQkq - 2 10",
    correctMoves: [
      {
        from: "c4",
        to: "d5",
        san: "Bxd5"
      },
      {
        from: "g3",
        to: "e5",
        san: "Qxe5"
      },
      {
        from: "g5",
        to: "f6",
        san: "Bxf6"
      },
      {
        from: "f6",
        to: "e5",
        san: "Bxe5"
      },
    ],
    responseMoves: ["Bxd5", "Qe7", "Qxe5"],
  },
  {
    fen: "8/8/8/8/5K2/k7/p3Q3/8 w - - 2 53",
    correctMoves: [
      {
        from: "e2",
        to: "e5",
        san: "Qe5"
      },
    ],
    responseMoves: [],
  },
  {
    fen: "r1r3k1/6b1/4p2p/3n4/4N3/Pp4N1/P5PP/1KB1R2R b - - 0 1",
    correctMoves: [
      {
        from: "b3",
        to: "a2",
        san: "bxa2+"
      },
      {
        from: "d5",
        to: "b4",
        san: "Nb4+"
      },
      {
        from: "b4",
        to: "c2",
        san: "Nc2"
      },
      {
        from: "c2",
        to: "d4",
        san: "Nd4+"
      },
      {
        from: "d4",
        to: "e2",
        san: "Nxe2"
      },
    ],
    responseMoves: ["Kxa2", "Kb3", "Re2", "Ka2"],
  },
  {
    fen: "8/7k/8/8/5pK1/3n1P1P/8/8 b - - 2 51",
    correctMoves: [
      {
        from: "h7",
        to: "h6",
        san: "Kh6"
      },
      {
        from: "h6",
        to: "h5",
        san: "Kh5"
      },
      {
        from: "h5",
        to: "h4",
        san: "Kh4"
      },
      {
        from: "h4",
        to: "h3",
        san: "Kxh3"
      },
      {
        from: "h3",
        to: "g2",
        san: "Kg2"
      },
      {
        from: "g2",
        to: "g3",
        san: "Kg3"
      },
    ],
    responseMoves: ["Kf5", "Ke4", "Kxd3", "Kd4", "Ke4"],
  },
  {
    fen: "2r4r/6k1/8/p2p1p1p/Pp1Pp3/8/1q1B2Q1/3RK3 b - - 1 35",
    correctMoves: [
      {
        from: "g7",
        to: "f7",
        san: "Kf7"
      },
      {
        from: "b2",
        to: "d4",
        san: "Qxd4"
      },
      {
        from: "d4",
        to: "f6",
        san: "Qf6"
      },
    ],
    responseMoves: ["Qg5", "Qxf5+"],
  },
  {
    fen: "8/p1p5/8/2p1p1pp/P4k2/2PK1B1P/2P3P1/6b1 b - - 1 35",
    correctMoves: [
      {
        from: "e5",
        to: "e4",
        san: "e4+"
      },
      {
        from: "c5",
        to: "c4",
        san: "c4+"
      },
      {
        from: "f4",
        to: "e4",
        san: "Kxe4"
      },
    ],
    responseMoves: ["Bxe4", "Kxc4"],
  },
  {
    fen: "6k1/3B1p2/3p2p1/p1qP2P1/np6/4Q3/PbP5/K1BR4 w - - 0 2",
    correctMoves: [
      {
        from: "c1",
        to: "b2",
        san: "Bxb2"
      },
      {
        from: "b2",
        to: "f6",
        san: "Bf6"
      },
      {
        from: "f6",
        to: "c3",
        san: "Bxc3"
      },
    ],
    responseMoves: ["Qxe3", "Qc3+"],
  },
  {
    fen: "Q7/pp3rp1/2bPp1R1/2P1k3/P7/1P1B1n2/7P/7K b - a3 0 33",
    correctMoves: [
      {
        from: "f3",
        to: "g5",
        san: "Ng5+"
      },
      {
        from: "c6",
        to: "e4",
        san: "Bxe4+"
      },
      {
        from: "g5",
        to: "h3",
        san: "Nh3#"
      },
    ],
    responseMoves: ["Be4", "Kg1"],
  },
  {
    fen: "3q3k/1b5p/p1n2Np1/1p1Q1P2/3p3P/P2Br3/1PP3P1/5R1K b - - 0 1",
    correctMoves: [
      {
        from: "d8",
        to: "f6",
        san: "Qxf6"
      },
      {
        from: "e3",
        to: "e1",
        san: "Re1"
      },
      {
        from: "e1",
        to: "f1",
        san: "Rxf1+"
      },
    ],
    responseMoves: ["fxg6", "Kg1"],
  },
  {
    fen: "8/8/4K1kp/5p1p/8/4P1P1/8/8 b - - 5 43",
    correctMoves: [
      {
        from: "g6",
        to: "g5",
        san: "Kg5"
      },
      {
        from: "g5",
        to: "g4",
        san: "Kg4"
      },
      {
        from: "g4",
        to: "g3",
        san: "Kxg3"
      },
      {
        from: "h5",
        to: "h4",
        san: "h4"
      },
      {
        from: "h4",
        to: "h3",
        san: "h3"
      },
    ],
    responseMoves: ["Kf7", "Kg6", "Kxf5", "e4"],
  },
  {
    fen: "1k1rq2r/pp3ppp/4b2n/np1N4/8/2Q2NP1/PP3PP1/2KRR3 w - - 0 23",
    correctMoves: [
      {
        from: "c3",
        to: "e5",
        san: "Qe5+"
      },
      {
        from: "d5",
        to: "c7",
        san: "Nc7+"
      },
    ],
    responseMoves: ["Ka8"],
  },
  {
    fen: "r1bqk1nr/ppp2pp1/2n1p2p/3p4/3P1BQ1/P1P1P3/2P2PPP/R3KBNR b KQkq - 2 7",
    correctMoves: [
      {
        from: "g7",
        to: "g5",
        san: "g5"
      },
      {
        from: "h6",
        to: "h5",
        san: "h5"
      },
      {
        from: "h5",
        to: "h4",
        san: "h4"
      },
    ],
    responseMoves: ["Be5", "Qg3"],
  },
  {
    fen: "3K4/2p5/2q5/3k4/P7/Q7/8/8 b - - 2 55",
    correctMoves: [
      {
        from: "c6",
        to: "d6",
        san: "Qd6+"
      },
      {
        from: "d5",
        to: "d6",
        san: "Kxd6"
      },
      {
        from: "c7",
        to: "c5",
        san: "c5"
      },
      {
        from: "d6",
        to: "c6",
        san: "Kc6"
      },
    ],
    responseMoves: ["Qxd6+", "a5", "a6"],
  },
  {
    fen: "r3k2r/ppp3pp/3p4/2nPqb1N/2P5/3P4/PP3PPP/R1BQ1K1R w kq - 2 17",
    correctMoves: [
      {
        from: "d3",
        to: "d4",
        san: "d4"
      },
      {
        from: "d1",
        to: "d3",
        san: "Qxd3"
      },
      {
        from: "d4",
        to: "e5",
        san: "dxe5"
      },
    ],
    responseMoves: ["Bd3+", "Nxd3"],
  },
  {
    fen: "r4rk1/7p/p2p4/2pPb1q1/Q1PpP1P1/3B1P2/P7/1R2BRK1 b - - 0 1",
    correctMoves: [
      {
        from: "g5",
        to: "e3",
        san: "Qe3+"
      },
      {
        from: "e3",
        to: "f4",
        san: "Qf4"
      },
      {
        from: "f4",
        to: "g3",
        san: "Qg3+"
      },
      {
        from: "f8",
        to: "f3",
        san: "Rxf3"
      },
    ],
    responseMoves: ["Kg2", "Rf2", "Kf1"],
  },
  {
    fen: "8/1p1k4/8/4pPQP/1RPp4/q2P1P1P/r1PK4/6NR b - - 4 31",
    correctMoves: [
      {
        from: "a3",
        to: "c3",
        san: "Qc3+"
      },
      {
        from: "c3",
        to: "c2",
        san: "Qxc2+"
      },
      {
        from: "c2",
        to: "d2",
        san: "Qxd2+"
      },
    ],
    responseMoves: ["Ke2", "Qd2"],
  },
  {
    fen: "rnbqkbnr/p6p/2p5/3Pppp1/4P3/8/PPP2PPP/R1BQKBNR w KQkq f6 0 8",
    correctMoves: [
      {
        from: "d1",
        to: "h5",
        san: "Qh5+"
      },
      {
        from: "c1",
        to: "g5",
        san: "Bxg5"
      },
      {
        from: "c2",
        to: "c3",
        san: "c3"
      },
    ],
    responseMoves: ["Kd7", "Bb4+"],
  },
  {
    fen: "2R2b1r/pk2p3/1q2Qp1p/4p1p1/3rP3/P6B/1P3P1P/2K4R b - - 3 29",
    correctMoves: [
      {
        from: "b6",
        to: "e6",
        san: "Qxe6"
      },
      {
        from: "d4",
        to: "d6",
        san: "Rd6"
      },
      {
        from: "e7",
        to: "e6",
        san: "e6"
      },
      {
        from: "d6",
        to: "e6",
        san: "Rxe6"
      },
    ],
    responseMoves: ["Bxe6", "Bf5", "Bxe6"],
  },
  {
    fen: "6k1/2q3p1/3R1p1p/3p4/3P4/2r2PQP/6PK/8 b - - 0 34",
    correctMoves: [
      {
        from: "c3",
        to: "c1",
        san: "Rc1"
      },
      {
        from: "c1",
        to: "h1",
        san: "Rh1+"
      },
      {
        from: "c7",
        to: "g3",
        san: "Qxg3"
      },
    ],
    responseMoves: ["Kxd5", "Kxh1"],
  },
  {
    fen: "q3kb1r/r1pn1pp1/pp1pp3/4P3/2BPbP2/6Pp/PPPNQB1P/3R1RK1 b k - 3 15",
    correctMoves: [
      {
        from: "e4",
        to: "d3",
        san: "Bd3"
      },
      {
        from: "a8",
        to: "f3",
        san: "Qxf3"
      },
      {
        from: "d3",
        to: "c4",
        san: "Bxc4"
      },
    ],
    responseMoves: ["Qf3", "Nxf3"],
  },
  {
    fen: "2r3k1/2r2p1p/p3p2p/1p2PnP1/1P2NP2/3R4/2P5/2KR4 w - - 0 2",
    correctMoves: [
      {
        from: "d3",
        to: "d8",
        san: "Rd8+"
      },
      {
        from: "g5",
        to: "h6",
        san: "gxh6+"
      },
      {
        from: "d1",
        to: "h1",
        san: "Rh1+"
      },
      {
        from: "h1",
        to: "g1",
        san: "Rg1+"
      },
    ],
    responseMoves: ["Kg7", "Kxh6", "Kg6"],
  },
  {
    fen: "4Q3/pb3rpp/5k2/2p5/5qP1/P1P1nP2/2P2R1P/R5K1 b - - 5 27",
    correctMoves: [
      {
        from: "b7",
        to: "f3",
        san: "Bxf3"
      },
      {
        from: "f6",
        to: "g5",
        san: "Kg5"
      },
      {
        from: "f4",
        to: "f3",
        san: "Qxf3"
      },
      {
        from: "f7",
        to: "f3",
        san: "Rxf3"
      },
    ],
    responseMoves: ["Qc6+", "Rxf3", "Qxf3"],
  },
  {
    fen: "rnq1k2r/pbppn1pp/1p1P1p2/4N3/1bB5/2N5/PPP2PPP/R1BQK2R b KQkq - 0 9",
    correctMoves: [
      {
        from: "c7",
        to: "d6",
        san: "cxd6"
      },
      {
        from: "g7",
        to: "g6",
        san: "g6"
      },
      {
        from: "e8",
        to: "d8",
        san: "Kd8"
      },
    ],
    responseMoves: ["Qh5+", "Bf7+"],
  },
  {
    fen: "r1bqkb2/1pp1pr1p/p2p4/7Q/2n1N3/4P3/PPPP1PPP/R1B2RK1 w q - 2 12",
    correctMoves: [
      {
        from: "e4",
        to: "g5",
        san: "Ng5"
      },
      {
        from: "f2",
        to: "f4",
        san: "f4"
      },
      {
        from: "g5",
        to: "f7",
        san: "Nxf7"
      },
      {
        from: "f7",
        to: "d8",
        san: "Nxd8"
      },
      {
        from: "f4",
        to: "e5",
        san: "fxe5"
      },
    ],
    responseMoves: ["Ne5", "Bg4", "Bxh5", "Rxd8"],
  },
  {
    fen: "8/8/3Pk1p1/1p2P3/b2b1P2/3N2B1/6K1/8 w - - 0 41",
    correctMoves: [
      {
        from: "g3",
        to: "f2",
        san: "Bf2"
      },
      {
        from: "f4",
        to: "f5",
        san: "f5+"
      },
      {
        from: "d3",
        to: "f4",
        san: "Nf4+"
      },
      {
        from: "d6",
        to: "d7",
        san: "d7"
      },
    ],
    responseMoves: ["Bc2", "gxf5", "Kxe5"],
  },
  {
    fen: "3r2r1/p1Q1kp2/3pp2p/8/3P1pqP/6P1/PPP2P2/R4RK1 b - - 1 21",
    correctMoves: [
      {
        from: "d8",
        to: "d7",
        san: "Rd7"
      },
      {
        from: "g4",
        to: "h3",
        san: "Qh3"
      },
      {
        from: "f4",
        to: "g3",
        san: "fxg3"
      },
    ],
    responseMoves: ["Qc3", "Qf3"],
  },
  {
    fen: "8/8/8/2p5/1kp5/1p6/8/B1K5 b - - 1 49",
    correctMoves: [
      {
        from: "c4",
        to: "c3",
        san: "c3"
      },
      {
        from: "b4",
        to: "c4",
        san: "Kc4"
      },
      {
        from: "c3",
        to: "b2",
        san: "cxb2"
      },
    ],
    responseMoves: ["Kb1", "Bb2"],
  },
  {
    fen: "3kr3/1ppqbR2/p1n2N1p/8/3P4/P1N5/1PP1Q1PP/6K1 b - - 1 22",
    correctMoves: [
      {
        from: "d7",
        to: "d4",
        san: "Qxd4+"
      },
      {
        from: "e7",
        to: "f6",
        san: "Bxf6"
      },
      {
        from: "f6",
        to: "d4",
        san: "Bxd4+"
      },
    ],
    responseMoves: ["Qf2", "Qxd4"],
  },
  {
    fen: "8/6PQ/1kp1p3/p2pP3/4B3/2K3P1/PPP2q2/8 b - - 2 39",
    correctMoves: [
      {
        from: "f2",
        to: "e3",
        san: "Qe3+"
      },
      {
        from: "e3",
        to: "e1",
        san: "Qe1+"
      },
      {
        from: "e1",
        to: "b4",
        san: "Qb4#"
      },
    ],
    responseMoves: ["Bd3", "Kb3"],
  },
  {
    fen: "r3k2r/p1pqbppp/1pn1pn2/2Pp4/1P1PbP2/P2BPN2/6PP/RNBQ1RK1 w kq - 0 11",
    correctMoves: [
      {
        from: "d3",
        to: "b5",
        san: "Bb5"
      },
      {
        from: "f3",
        to: "e5",
        san: "Ne5"
      },
      {
        from: "b5",
        to: "d7",
        san: "Bxd7+"
      },
    ],
    responseMoves: ["a6", "Nxe5"],
  },
  {
    fen: "k2r4/1q3pQ1/p3p1p1/2N3Pp/2P4P/p2rR3/8/4R1K1 b - - 2 48",
    correctMoves: [
      {
        from: "d3",
        to: "e3",
        san: "Rxe3"
      },
      {
        from: "e3",
        to: "e1",
        san: "Rxe1+"
      },
      {
        from: "e1",
        to: "b1",
        san: "Rb1"
      },
      {
        from: "a3",
        to: "a2",
        san: "a2"
      },
      {
        from: "a2",
        to: "a1",
        san: "a1=Q"
      },
      {
        from: "b1",
        to: "a1",
        san: "Rxa1"
      },
    ],
    responseMoves: ["Nxb7", "Kf2", "Nxd8", "Nxe6", "Qxa1"],
  },
  {
    fen: "r1b1qrk1/pppp1ppp/2n5/2b5/2B1P1n1/2N5/PPPB1PPP/R2QK1NR w KQ - 11 9",
    correctMoves: [
      {
        from: "d1",
        to: "g4",
        san: "Qxg4"
      },
      {
        from: "g4",
        to: "h5",
        san: "Qh5"
      },
      {
        from: "e1",
        to: "f2",
        san: "Kxf2"
      },
    ],
    responseMoves: ["d5", "Bf2+"],
  },
  {
    fen: "r2q1r1k/ppp1bp2/3pn2p/8/6QP/1BP5/PP3P2/R5RK w - - 0 19",
    correctMoves: [
      {
        from: "g4",
        to: "h5",
        san: "Qh5"
      },
      {
        from: "h4",
        to: "g5",
        san: "hxg5"
      },
      {
        from: "g1",
        to: "g5",
        san: "Rxg5"
      },
    ],
    responseMoves: ["Bg5", "Qxg5"],
  }
  ,
  {
    fen: "4b3/4P3/1K1k4/8/1P6/8/P7/8 w - - 1 65",
    correctMoves: [
      {
        from: "b4",
        to: "b5",
        san: "b5"
      },
      {
        from: "a2",
        to: "a4",
        san: "a4"
      },
      {
        from: "b6",
        to: "a7",
        san: "Ka7"
      },
      {
        from: "b5",
        to: "b6",
        san: "b6"
      },
      {
        from: "b6",
        to: "b7",
        san: "b7"
      },
      {
        from: "b7",
        to: "b8",
        san: "b8=Q"
      },
    ],
    responseMoves: ["Kxe7", "Kd6", "Kc5", "Bxa4", "Bb5"],
  }
  ,
  {
    fen: "r1bq1rk1/1p2npbp/p3p1p1/2ppN1Nn/3P1B2/2PBPQ2/PP3PPP/R3K2R w KQ - 6 12",
    correctMoves: [
      {
        from: "f3",
        to: "h5",
        san: "Qxh5"
      },
      {
        from: "d3",
        to: "h7",
        san: "Bxh7+"
      },
      {
        from: "e5",
        to: "f7",
        san: "N5xf7+"
      },
      {
        from: "g5",
        to: "f7",
        san: "Nxf7+"
      },
      {
        from: "f7",
        to: "d8",
        san: "Nxd8"
      },
    ],
    responseMoves: ["gxh5", "Kh8", "Rxf7", "Kxh7"],
  }
  ,
  {
    fen: "k7/3r2p1/p1N1Qn2/1P2B3/K7/1P6/P7/2q5 b - - 0 1",
    correctMoves: [
      {
        from: "a6",
        to: "b5",
        san: "axb5+"
      },
      {
        from: "d7",
        to: "d5",
        san: "Rd5+"
      },
      {
        from: "f6",
        to: "d7",
        san: "Nd7"
      },
    ],
    responseMoves: ["Kxb5", "Ka4"],
  }
  ,
  {
    fen: "2kr3r/1pp2Q2/3q3B/1Pb2P2/8/6P1/P3P2P/1R2KBNR b K - 0 26",
    correctMoves: [
      {
        from: "h8",
        to: "h6",
        san: "Rxh6"
      },
      {
        from: "h6",
        to: "h2",
        san: "Rxh2"
      },
      {
        from: "d6",
        to: "e6",
        san: "Qxe6"
      },
    ],
    responseMoves: ["Nf3", "Qe6+"],
  }
  ,
  {
    fen: "7r/pkn3pp/1b1Q1p2/4p3/1B2q3/1P6/PK3P2/2R2R2 b - - 4 32",
    correctMoves: [
      {
        from: "b6",
        to: "d4",
        san: "Bd4+"
      },
      {
        from: "e4",
        to: "e2",
        san: "Qe2+"
      },
      {
        from: "d4",
        to: "c3",
        san: "Bxc3+"
      },
    ],
    responseMoves: ["Bc3", "Rc2"],
  }
  ,
  {
    fen: "3rkbnr/pp3ppp/2n5/2p1P3/6b1/2P2N1P/PPK2PP1/RNB2B1R b k - 2 9",
    correctMoves: [
      {
        from: "g4",
        to: "f5",
        san: "Bf5+"
      },
      {
        from: "c5",
        to: "c4",
        san: "c4"
      },
      {
        from: "c6",
        to: "a5",
        san: "Na5+"
      },
      {
        from: "a5",
        to: "c4",
        san: "Nxc4"
      },
    ],
    responseMoves: ["Kb3", "Bxc4", "Ka4"],
  }
  ,
  {
    fen: "5k2/2r3pp/4Kp2/p1P1p3/r5P1/2R4P/5P2/2R5 b - - 1 35",
    correctMoves: [
      {
        from: "a4",
        to: "d4",
        san: "Rd4"
      },
      {
        from: "c7",
        to: "c6",
        san: "Rc6+"
      },
      {
        from: "g7",
        to: "g6",
        san: "g6#"
      },
    ],
    responseMoves: ["Rc4", "Kf5"],
  }
  ,
  {
    fen: "r1b1k1nr/ppp2ppp/4q3/3N4/P1Pn4/5B2/4QPPP/R3K1NR b KQkq - 3 14",
    correctMoves: [
      {
        from: "d4",
        to: "e2",
        san: "Nxe2"
      },
      {
        from: "e8",
        to: "e7",
        san: "Ke7"
      },
      {
        from: "e2",
        to: "g1",
        san: "Nxg1"
      },
      {
        from: "c8",
        to: "b7",
        san: "Bxb7"
      },
    ],
    responseMoves: ["Nxc7+", "Nxe6", "Bxb7"],
  }
  ,
  {
    fen: "8/8/p6k/q5p1/5Q2/3p1N2/8/5K2 w - g6 0 49",
    correctMoves: [
      {
        from: "f4",
        to: "f6",
        san: "Qf6+"
      },
      {
        from: "f3",
        to: "e5",
        san: "Ne5"
      },
      {
        from: "f1",
        to: "g2",
        san: "Kg2"
      },
      {
        from: "f6",
        to: "e5",
        san: "Qxe5"
      },
    ],
    responseMoves: ["Kh5", "Qa1+", "Qxe5"],
  }
  ,
  {
    fen: "r4rk1/2p2p2/p2p2qp/1pbNp3/3nP1b1/1B1P2Q1/PPP2PPB/R4RK1 w - - 5 19",
    correctMoves: [
      {
        from: "g3",
        to: "g4",
        san: "Qxg4+"
      },
      {
        from: "d5",
        to: "f6",
        san: "Nf6+"
      },
      {
        from: "f6",
        to: "g4",
        san: "Nxg4"
      },
    ],
    responseMoves: ["Qxg4", "Kg7"],
  }
  ,
  {
    fen: "r4k1r/2ppn2p/1p3P2/p5N1/2bp4/5Q2/q4P1P/1N4K1 w - - 0 24",
    correctMoves: [
      {
        from: "f3",
        to: "a8",
        san: "Qxa8+"
      },
      {
        from: "a8",
        to: "c8",
        san: "Qxc8#"
      },
    ],
    responseMoves: ["Nc8"],
  }
  ,
  {
    fen: "8/p1r1p2R/2N1pkp1/1p3q2/8/1P5P/P3QPP1/b5K1 w - - 1 29",
    correctMoves: [
      {
        from: "c6",
        to: "d8",
        san: "Nd8"
      },
      {
        from: "g1",
        to: "h2",
        san: "Kh2"
      },
      {
        from: "f2",
        to: "f4",
        san: "f4"
      },
      {
        from: "g2",
        to: "g3",
        san: "g3"
      },
    ],
    responseMoves: ["Rc1+", "Qe5+", "Qxf4+"],
  }
  ,
  {
    fen: "3r2k1/5pp1/4n2p/1R2Q3/3Nn3/4B2P/2q2PP1/6K1 b - - 2 25",
    correctMoves: [
      {
        from: "e6",
        to: "d4",
        san: "Nxd4"
      },
      {
        from: "c2",
        to: "d1",
        san: "Qd1+"
      },
      {
        from: "d1",
        to: "d4",
        san: "Qxd4"
      },
      {
        from: "d8",
        to: "d4",
        san: "Rxd4"
      },
    ],
    responseMoves: ["Bxd4", "Kh2", "Qxd4"],
  }
  ,
  {
    fen: "5rrk/pppb3p/3p4/3P1p1B/3p1p1q/3P1Q2/PPP1RP1P/4R2K b - - 7 19",
    correctMoves: [
      {
        from: "f8",
        to: "f6",
        san: "Rf6"
      },
      {
        from: "g8",
        to: "g1",
        san: "Rxg1+"
      },
      {
        from: "f6",
        to: "h6",
        san: "Rh6"
      },
      {
        from: "d7",
        to: "e8",
        san: "Bxe8"
      },
    ],
    responseMoves: ["Rg1", "Kxg1", "Re8+"],
  }
  ,
  {
    fen: "3r1rk1/2p5/1pn1q1p1/p2np2p/P1B1Q2P/2P3BR/1PK3P1/3R4 b - - 3 27",
    correctMoves: [
      {
        from: "d5",
        to: "e3",
        san: "Ne3+"
      },
      {
        from: "e6",
        to: "c4",
        san: "Qxc4"
      },
      {
        from: "c6",
        to: "d4",
        san: "Nd4+"
      },
      {
        from: "c4",
        to: "e2",
        san: "Qe2+"
      },
      {
        from: "e5",
        to: "d4",
        san: "exd4"
      },
      {
        from: "d4",
        to: "d3",
        san: "d3+"
      },
      {
        from: "d3",
        to: "e2",
        san: "dxe2+"
      },
    ],
    responseMoves: ["Qxe3", "b3", "Qxd4", "Rd2", "Rxe2", "Ke2"],
  }
  ,
  {
    fen: "3rk2r/4np1p/p5p1/2Q1b3/2P1q3/4B3/P4PPP/4RRK1 w k - 0 2",
    correctMoves: [
      {
        from: "e3",
        to: "g5",
        san: "Bg5"
      },
      {
        from: "c5",
        to: "a7",
        san: "Qa7"
      },
      {
        from: "a7",
        to: "d7",
        san: "Qxd7+"
      },
      {
        from: "e1",
        to: "e4",
        san: "Rxe4"
      }
    ],
    responseMoves: ["Bd6", "Rd7", "Kxd7"]
  }
  ,
  {
    fen: "8/1k1b4/p3p1P1/1pQp4/3P1P2/P1N3q1/KP4r1/1B6 w - - 1 2",
    correctMoves: [
      {
        from: "c3",
        to: "e4",
        san: "Ne4"
      },
      {
        from: "e4",
        to: "d6",
        san: "Nd6+"
      },
      {
        from: "c5",
        to: "d6",
        san: "Qxd6"
      },
    ],
    responseMoves: ["Qxf4", "Qxd6"]
  },
  {
    fen: "8/6kp/1p1rq2r/p2p1pn1/P1pP2NR/2P3P1/1P5P/4RQK1 b - - 7 34",
    correctMoves: [
      {
        from: "g5",
        to: "f3",
        san: "Nf3+"
      },
      {
        from: "e6",
        to: "e1",
        san: "Qxe1+"
      },
      {
        from: "f3",
        to: "e1",
        san: "Nxe1"
      },
      {
        from: "e1",
        to: "d3",
        san: "Nxd3+"
      },
    ],
    responseMoves: ["Kf2", "Qxe1", "Nxh6"]
  }
  ,
  {
    fen: "r4rk1/1pp2ppp/p1nbpq2/7b/3PB3/2P2N1P/PP3PP1/R1BQR1K1 w - - 1 13",
    correctMoves: [
      {
        from: "g2",
        to: "g4",
        san: "g4"
      },
      {
        from: "c1",
        to: "g5",
        san: "Bg5"
      },
      {
        from: "g5",
        to: "f6",
        san: "Bxf6"
      },
    ],
    responseMoves: ["Bg6", "Bxe4"]
  },
  {
    fen: "1k1rr3/p2p1pp1/1ppbq2p/3R4/Q3P3/2P1B1PP/PP3PK1/4R3 w - - 0 24",
    correctMoves: [
      {
        from: "d5",
        to: "d6",
        san: "Rxd6"
      },
      {
        from: "e3",
        to: "f4",
        san: "Bf4"
      },
      {
        from: "a4",
        to: "d4",
        san: "Qd4"
      },
      {
        from: "c3",
        to: "d4",
        san: "cxd4"
      },
      {
        from: "d4",
        to: "e5",
        san: "dxe5"
      },
    ],
    responseMoves: ["Qxd6", "Re5", "Qxd4", "d6"]
  }
  ,
  {
    fen: "q7/3bkpQR/1p2p3/3p4/1p6/1P1KP3/r4PP1/3R1B2 b - - 4 27",
    correctMoves: [
      {
        from: "d7",
        to: "b5",
        san: "Bb5+"
      },
      {
        from: "a2",
        to: "d2",
        san: "Rd2+"
      },
      {
        from: "d2",
        to: "d3",
        san: "Rxd3+"
      },
      {
        from: "a8",
        to: "a1",
        san: "Qa1+"
      },
      {
        from: "a1",
        to: "c3",
        san: "Qxc3#"
      },
    ],
    responseMoves: ["Kd4", "Bd3", "Rxd3", "Rc3"]
  },
  {
    fen: "rk2R3/7p/1p1p2p1/2b5/8/2PQ3P/5rP1/6K1 b - - 1 37",
    correctMoves: [
      {
        from: "b8",
        to: "c7",
        san: "Kc7"
      },
      {
        from: "c7",
        to: "d8",
        san: "Kd8"
      },
      {
        from: "a8",
        to: "a2",
        san: "Raa2"
      },
      {
        from: "d8",
        to: "e8",
        san: "Kxe8"
      },
    ],
    responseMoves: ["Re7+", "Kh2", "Re8+"]
  },
  {
    fen: "1Qq2k1r/6p1/p4p1p/4Nb2/5P2/8/1P2NKPP/8 w - - 2 28",
    correctMoves: [
      {
        from: "e5",
        to: "g6",
        san: "Ng6+"
      },
      {
        from: "b8",
        to: "c8",
        san: "Qxc8+"
      },
      {
        from: "g6",
        to: "h8",
        san: "Nxh8"
      },
    ],
    responseMoves: ["Kf8", "Bxc8"]
  },
  {
    fen: "8/5p1k/r4p1P/3P1K1R/4PPP1/8/8/3b4 b - - 0 43",
    correctMoves: [
      {
        from: "d1",
        to: "a4",
        san: "Ba4"
      },
      {
        from: "a6",
        to: "d6",
        san: "Rxd6"
      },
      {
        from: "a4",
        to: "d7",
        san: "Bd7#"
      },
    ],
    responseMoves: ["d6", "g5"]
  }
  ,
  {
    fen: "r4rk1/3R3p/p6p/2p5/2b2qP1/1PN4P/P1P2P2/1R1Q2K1 b - - 0 24",
    correctMoves: [
      {
        from: "f4",
        to: "f2",
        san: "Qxf2+"
      },
      {
        from: "f8",
        to: "f3",
        san: "Rf3"
      },
      {
        from: "g8",
        to: "g7",
        san: "Kg7"
      },
      {
        from: "c4",
        to: "d3",
        san: "Bxd3"
      },
      {
        from: "f2",
        to: "f3",
        san: "Qxf3+"
      },
    ],
    responseMoves: ["Kh1", "Rd8+", "Rd3", "Qxf3"],
  },
  {
    fen: "5rk1/1R6/2p1r1pp/5p2/5Q2/q6P/6P1/5R1K w - f6 0 37",
    correctMoves: [
      {
        from: "f4",
        to: "c7",
        san: "Qc7"
      },
      {
        from: "c7",
        to: "e7",
        san: "Qxe7"
      },
      {
        from: "b7",
        to: "e7",
        san: "Rxe7"
      },
    ],
    responseMoves: ["Re7", "Qxe7"],
  },
  {
    fen: "r1b2rk1/5p1p/7n/2p2qp1/p1PPN3/P1BBPP2/1P4PP/R4RK1 w - c6 0 19",
    correctMoves: [
      {
        from: "d4",
        to: "d5",
        san: "d5"
      },
      {
        from: "e4",
        to: "c5",
        san: "Nxc5"
      },
      {
        from: "c5",
        to: "d3",
        san: "Nxd3"
      },
    ],
    responseMoves: ["f6", "Qxd3"],
  },
  {
    fen: "4qrk1/n4pbp/B2p1np1/p2P2B1/1p6/1P3N1P/P3QPP1/2R3K1 w - - 1 26",
    correctMoves: [
      {
        from: "e2",
        to: "e8",
        san: "Qxe8"
      },
      {
        from: "c1",
        to: "c7",
        san: "Rc7"
      },
      {
        from: "g5",
        to: "e3",
        san: "Be3"
      },
      {
        from: "c7",
        to: "a7",
        san: "Rxa7"
      },
      {
        from: "e3",
        to: "a7",
        san: "Bxa7"
      },
    ],
    responseMoves: ["Rxe8", "Ra8", "Nxd5", "Rxa7"],
  },
  {
    fen: "r3rk2/5p2/p3P2R/q2b1p2/2pQ4/7N/P1PP4/1K6 w - - 1 31",
    correctMoves: [
      {
        from: "d4",
        to: "f6",
        san: "Qf6"
      },
      {
        from: "b1",
        to: "a1",
        san: "Ka1"
      },
      {
        from: "a1",
        to: "b1",
        san: "Kxb1"
      },
      {
        from: "b1",
        to: "a1",
        san: "Ka1"
      },
      {
        from: "a1",
        to: "b1",
        san: "Kxb1"
      },
    ],
    responseMoves: ["Rab8+", "Rb1+", "Rb8+", "Rb1+"],
  },
  {
    fen: "2k2bnr/1pp2b1p/p4p2/5N2/5PQP/P1K5/1P1r1qP1/R7 w - - 0 22",
    correctMoves: [
      {
        from: "f5",
        to: "d6",
        san: "Nd6+"
      },
      {
        from: "g4",
        to: "c8",
        san: "Qc8+"
      },
      {
        from: "d6",
        to: "f5",
        san: "Nf5#"
      },
    ],
    responseMoves: ["Kd8", "Ke7"],
  },
  {
    fen: "8/6k1/6p1/2P3Kp/BP5P/5N2/1b3P2/8 b - - 0 40",
    correctMoves: [
      {
        from: "b2",
        to: "c1",
        san: "Bc1+"
      },
      {
        from: "c1",
        to: "d2",
        san: "Bxd2+"
      },
      {
        from: "d2",
        to: "c3",
        san: "Bc3"
      },
      {
        from: "c3",
        to: "d2",
        san: "Bd2#"
      },
    ],
    responseMoves: ["Nd2", "f4", "f5"],
  },
  {
    fen: "8/pQ1P1pp1/1p3k2/7K/r6N/6p1/4P3/5b2 b - - 0 36",
    correctMoves: [
      {
        from: "g7",
        to: "g6",
        san: "g6+"
      },
      {
        from: "f7",
        to: "g6",
        san: "fxg6+"
      },
      {
        from: "a4",
        to: "h4",
        san: "Rh4#"
      },
    ],
    responseMoves: ["Nxg6", "Kh6"],
  },
  {
    fen: "r1b1k3/pp1p1p1Q/4p3/1B1pPP2/1b2n3/2N4P/PPP1K1PR/q7 w q - 0 20",
    correctMoves: [
      {
        from: "h7",
        to: "g8",
        san: "Qg8+"
      },
      {
        from: "f5",
        to: "f6",
        san: "f6+"
      },
      {
        from: "e5",
        to: "f6",
        san: "exf6+"
      },
      {
        from: "g8",
        to: "f8",
        san: "Qf8+"
      },
      {
        from: "f8",
        to: "b4",
        san: "Qxb4"
      },
      {
        from: "b4",
        to: "f4",
        san: "Qf4+"
      },
    ],
    responseMoves: ["Ke7", "Nxf6", "Kd6", "Kc7", "Qg1"],
  },
  {
    fen: "r5k1/1pp4p/pbn2pp1/4qNQ1/5R1P/3B4/1PP2PP1/6K1 w - - 0 2",
    correctMoves: [
      {
        from: "g5",
        to: "h6",
        san: "Qh6"
      },
      {
        from: "d3",
        to: "f5",
        san: "Bxf5"
      },
      {
        from: "f4",
        to: "g4",
        san: "Rg4+"
      },
      {
        from: "f5",
        to: "g6",
        san: "Bxg6+"
      },
      {
        from: "h6",
        to: "g6",
        san: "Qxg6+"
      },
    ],
    responseMoves: ["gxf5", "Ne7", "Ng6", "hxg6"],
  },
  {
    fen: "r1bq3r/ppp1kNpp/2npBp1n/2b1p2Q/4P3/3P4/PPP2PPP/RNB1K2R b KQ - 5 9",
    correctMoves: [
      {
        from: "d8",
        to: "e8",
        san: "Qe8"
      },
      {
        from: "a8",
        to: "c8",
        san: "Rxc8"
      },
      {
        from: "g7",
        to: "h6",
        san: "gxh6"
      },
    ],
    responseMoves: ["Bxc8", "Bxh6"],
  },
  {
    fen: "2r2r2/p4kpQ/2p1p2R/1pq1Ppp1/5nP1/P4K2/1P2B3/3R4 w - - 0 2",
    correctMoves: [
      {
        from: "h6",
        to: "f6",
        san: "Rf6+"
      },
      {
        from: "h7",
        to: "g7",
        san: "Qxg7"
      },
      {
        from: "g7",
        to: "d7",
        san: "Qd7+"
      },
      {
        from: "d7",
        to: "c8",
        san: "Qxc8+"
      },
    ],
    responseMoves: ["Ke8", "Rxf6", "Kf8"],
  },
  {
    fen: "r2k1r2/p1pq1p1b/1pB5/8/1n6/7N/1KP2PPP/3RR3 w - - 3 20",
    correctMoves: [
      {
        from: "d1",
        to: "d7",
        san: "Rxd7+"
      },
      {
        from: "d7",
        to: "f7",
        san: "Rxf7"
      },
      {
        from: "f7",
        to: "f8",
        san: "Rxf8+"
      },
    ],
    responseMoves: ["Kc8", "Nxc6"],
  },
  {
    fen: "r2qkb1r/ppp2p1p/4bnp1/3np1B1/2B5/2PP2Q1/PP3PPP/RN2K1NR w KQkq - 2 10",
    correctMoves: [
      {
        from: "c4",
        to: "d5",
        san: "Bxd5"
      },
      {
        from: "g3",
        to: "e5",
        san: "Qxe5"
      },
      {
        from: "g5",
        to: "f6",
        san: "Bxf6"
      },
      {
        from: "f6",
        to: "e5",
        san: "Bxe5"
      },
    ],
    responseMoves: ["Bxd5", "Qe7", "Qxe5"],
  },
  {
    fen: "8/8/8/8/5K2/k7/p3Q3/8 w - - 2 53",
    correctMoves: [
      {
        from: "e2",
        to: "e5",
        san: "Qe5"
      },
    ],
    responseMoves: [],
  },
  {
    fen: "r1r3k1/6b1/4p2p/3n4/4N3/Pp4N1/P5PP/1KB1R2R b - - 0 1",
    correctMoves: [
      {
        from: "b3",
        to: "a2",
        san: "bxa2+"
      },
      {
        from: "d5",
        to: "b4",
        san: "Nb4+"
      },
      {
        from: "b4",
        to: "c2",
        san: "Nc2"
      },
      {
        from: "c2",
        to: "d4",
        san: "Nd4+"
      },
      {
        from: "d4",
        to: "e2",
        san: "Nxe2"
      },
    ],
    responseMoves: ["Kxa2", "Kb3", "Re2", "Ka2"],
  },
  {
    fen: "8/7k/8/8/5pK1/3n1P1P/8/8 b - - 2 51",
    correctMoves: [
      {
        from: "h7",
        to: "h6",
        san: "Kh6"
      },
      {
        from: "h6",
        to: "h5",
        san: "Kh5"
      },
      {
        from: "h5",
        to: "h4",
        san: "Kh4"
      },
      {
        from: "h4",
        to: "h3",
        san: "Kxh3"
      },
      {
        from: "h3",
        to: "g2",
        san: "Kg2"
      },
      {
        from: "g2",
        to: "g3",
        san: "Kg3"
      },
    ],
    responseMoves: ["Kf5", "Ke4", "Kxd3", "Kd4", "Ke4"],
  },
  {
    fen: "2r4r/6k1/8/p2p1p1p/Pp1Pp3/8/1q1B2Q1/3RK3 b - - 1 35",
    correctMoves: [
      {
        from: "g7",
        to: "f7",
        san: "Kf7"
      },
      {
        from: "b2",
        to: "d4",
        san: "Qxd4"
      },
      {
        from: "d4",
        to: "f6",
        san: "Qf6"
      },
    ],
    responseMoves: ["Qg5", "Qxf5+"],
  },
  {
    fen: "8/p1p5/8/2p1p1pp/P4k2/2PK1B1P/2P3P1/6b1 b - - 1 35",
    correctMoves: [
      {
        from: "e5",
        to: "e4",
        san: "e4+"
      },
      {
        from: "c5",
        to: "c4",
        san: "c4+"
      },
      {
        from: "f4",
        to: "e4",
        san: "Kxe4"
      },
    ],
    responseMoves: ["Bxe4", "Kxc4"],
  },
  {
    fen: "6k1/3B1p2/3p2p1/p1qP2P1/np6/4Q3/PbP5/K1BR4 w - - 0 2",
    correctMoves: [
      {
        from: "c1",
        to: "b2",
        san: "Bxb2"
      },
      {
        from: "b2",
        to: "f6",
        san: "Bf6"
      },
      {
        from: "f6",
        to: "c3",
        san: "Bxc3"
      },
    ],
    responseMoves: ["Qxe3", "Qc3+"],
  },
  {
    fen: "Q7/pp3rp1/2bPp1R1/2P1k3/P7/1P1B1n2/7P/7K b - a3 0 33",
    correctMoves: [
      {
        from: "f3",
        to: "g5",
        san: "Ng5+"
      },
      {
        from: "c6",
        to: "e4",
        san: "Bxe4+"
      },
      {
        from: "g5",
        to: "h3",
        san: "Nh3#"
      },
    ],
    responseMoves: ["Be4", "Kg1"],
  },
  {
    fen: "3q3k/1b5p/p1n2Np1/1p1Q1P2/3p3P/P2Br3/1PP3P1/5R1K b - - 0 1",
    correctMoves: [
      {
        from: "d8",
        to: "f6",
        san: "Qxf6"
      },
      {
        from: "e3",
        to: "e1",
        san: "Re1"
      },
      {
        from: "e1",
        to: "f1",
        san: "Rxf1+"
      },
    ],
    responseMoves: ["fxg6", "Kg1"],
  },
  {
    fen: "8/8/4K1kp/5p1p/8/4P1P1/8/8 b - - 5 43",
    correctMoves: [
      {
        from: "g6",
        to: "g5",
        san: "Kg5"
      },
      {
        from: "g5",
        to: "g4",
        san: "Kg4"
      },
      {
        from: "g4",
        to: "g3",
        san: "Kxg3"
      },
      {
        from: "h5",
        to: "h4",
        san: "h4"
      },
      {
        from: "h4",
        to: "h3",
        san: "h3"
      },
    ],
    responseMoves: ["Kf7", "Kg6", "Kxf5", "e4"],
  },
  {
    fen: "1k1rq2r/pp3ppp/4b2n/np1N4/8/2Q2NP1/PP3PP1/2KRR3 w - - 0 23",
    correctMoves: [
      {
        from: "c3",
        to: "e5",
        san: "Qe5+"
      },
      {
        from: "d5",
        to: "c7",
        san: "Nc7+"
      },
    ],
    responseMoves: ["Ka8"],
  },
  {
    fen: "r1bqk1nr/ppp2pp1/2n1p2p/3p4/3P1BQ1/P1P1P3/2P2PPP/R3KBNR b KQkq - 2 7",
    correctMoves: [
      {
        from: "g7",
        to: "g5",
        san: "g5"
      },
      {
        from: "h6",
        to: "h5",
        san: "h5"
      },
      {
        from: "h5",
        to: "h4",
        san: "h4"
      },
    ],
    responseMoves: ["Be5", "Qg3"],
  },
  {
    fen: "3K4/2p5/2q5/3k4/P7/Q7/8/8 b - - 2 55",
    correctMoves: [
      {
        from: "c6",
        to: "d6",
        san: "Qd6+"
      },
      {
        from: "d5",
        to: "d6",
        san: "Kxd6"
      },
      {
        from: "c7",
        to: "c5",
        san: "c5"
      },
      {
        from: "d6",
        to: "c6",
        san: "Kc6"
      },
    ],
    responseMoves: ["Qxd6+", "a5", "a6"],
  },
  {
    fen: "r3k2r/ppp3pp/3p4/2nPqb1N/2P5/3P4/PP3PPP/R1BQ1K1R w kq - 2 17",
    correctMoves: [
      {
        from: "d3",
        to: "d4",
        san: "d4"
      },
      {
        from: "d1",
        to: "d3",
        san: "Qxd3"
      },
      {
        from: "d4",
        to: "e5",
        san: "dxe5"
      },
    ],
    responseMoves: ["Bd3+", "Nxd3"],
  },
  {
    fen: "r4rk1/7p/p2p4/2pPb1q1/Q1PpP1P1/3B1P2/P7/1R2BRK1 b - - 0 1",
    correctMoves: [
      {
        from: "g5",
        to: "e3",
        san: "Qe3+"
      },
      {
        from: "e3",
        to: "f4",
        san: "Qf4"
      },
      {
        from: "f4",
        to: "g3",
        san: "Qg3+"
      },
      {
        from: "f8",
        to: "f3",
        san: "Rxf3"
      },
    ],
    responseMoves: ["Kg2", "Rf2", "Kf1"],
  },
  {
    fen: "8/1p1k4/8/4pPQP/1RPp4/q2P1P1P/r1PK4/6NR b - - 4 31",
    correctMoves: [
      {
        from: "a3",
        to: "c3",
        san: "Qc3+"
      },
      {
        from: "c3",
        to: "c2",
        san: "Qxc2+"
      },
      {
        from: "c2",
        to: "d2",
        san: "Qxd2+"
      },
    ],
    responseMoves: ["Ke2", "Qd2"],
  },
  {
    fen: "rnbqkbnr/p6p/2p5/3Pppp1/4P3/8/PPP2PPP/R1BQKBNR w KQkq f6 0 8",
    correctMoves: [
      {
        from: "d1",
        to: "h5",
        san: "Qh5+"
      },
      {
        from: "c1",
        to: "g5",
        san: "Bxg5"
      },
      {
        from: "c2",
        to: "c3",
        san: "c3"
      },
    ],
    responseMoves: ["Kd7", "Bb4+"],
  },
  {
    fen: "2R2b1r/pk2p3/1q2Qp1p/4p1p1/3rP3/P6B/1P3P1P/2K4R b - - 3 29",
    correctMoves: [
      {
        from: "b6",
        to: "e6",
        san: "Qxe6"
      },
      {
        from: "d4",
        to: "d6",
        san: "Rd6"
      },
      {
        from: "e7",
        to: "e6",
        san: "e6"
      },
      {
        from: "d6",
        to: "e6",
        san: "Rxe6"
      },
    ],
    responseMoves: ["Bxe6", "Bf5", "Bxe6"],
  },
  {
    fen: "6k1/2q3p1/3R1p1p/3p4/3P4/2r2PQP/6PK/8 b - - 0 34",
    correctMoves: [
      {
        from: "c3",
        to: "c1",
        san: "Rc1"
      },
      {
        from: "c1",
        to: "h1",
        san: "Rh1+"
      },
      {
        from: "c7",
        to: "g3",
        san: "Qxg3"
      },
    ],
    responseMoves: ["Kxd5", "Kxh1"],
  },
  {
    fen: "q3kb1r/r1pn1pp1/pp1pp3/4P3/2BPbP2/6Pp/PPPNQB1P/3R1RK1 b k - 3 15",
    correctMoves: [
      {
        from: "e4",
        to: "d3",
        san: "Bd3"
      },
      {
        from: "a8",
        to: "f3",
        san: "Qxf3"
      },
      {
        from: "d3",
        to: "c4",
        san: "Bxc4"
      },
    ],
    responseMoves: ["Qf3", "Nxf3"],
  },
  {
    fen: "2r3k1/2r2p1p/p3p2p/1p2PnP1/1P2NP2/3R4/2P5/2KR4 w - - 0 2",
    correctMoves: [
      {
        from: "d3",
        to: "d8",
        san: "Rd8+"
      },
      {
        from: "g5",
        to: "h6",
        san: "gxh6+"
      },
      {
        from: "d1",
        to: "h1",
        san: "Rh1+"
      },
      {
        from: "h1",
        to: "g1",
        san: "Rg1+"
      },
    ],
    responseMoves: ["Kg7", "Kxh6", "Kg6"],
  },
  {
    fen: "4Q3/pb3rpp/5k2/2p5/5qP1/P1P1nP2/2P2R1P/R5K1 b - - 5 27",
    correctMoves: [
      {
        from: "b7",
        to: "f3",
        san: "Bxf3"
      },
      {
        from: "f6",
        to: "g5",
        san: "Kg5"
      },
      {
        from: "f4",
        to: "f3",
        san: "Qxf3"
      },
      {
        from: "f7",
        to: "f3",
        san: "Rxf3"
      },
    ],
    responseMoves: ["Qc6+", "Rxf3", "Qxf3"],
  },
  {
    fen: "rnq1k2r/pbppn1pp/1p1P1p2/4N3/1bB5/2N5/PPP2PPP/R1BQK2R b KQkq - 0 9",
    correctMoves: [
      {
        from: "c7",
        to: "d6",
        san: "cxd6"
      },
      {
        from: "g7",
        to: "g6",
        san: "g6"
      },
      {
        from: "e8",
        to: "d8",
        san: "Kd8"
      },
    ],
    responseMoves: ["Qh5+", "Bf7+"],
  },
  {
    fen: "r1bqkb2/1pp1pr1p/p2p4/7Q/2n1N3/4P3/PPPP1PPP/R1B2RK1 w q - 2 12",
    correctMoves: [
      {
        from: "e4",
        to: "g5",
        san: "Ng5"
      },
      {
        from: "f2",
        to: "f4",
        san: "f4"
      },
      {
        from: "g5",
        to: "f7",
        san: "Nxf7"
      },
      {
        from: "f7",
        to: "d8",
        san: "Nxd8"
      },
      {
        from: "f4",
        to: "e5",
        san: "fxe5"
      },
    ],
    responseMoves: ["Ne5", "Bg4", "Bxh5", "Rxd8"],
  },
  {
    fen: "8/8/3Pk1p1/1p2P3/b2b1P2/3N2B1/6K1/8 w - - 0 41",
    correctMoves: [
      {
        from: "g3",
        to: "f2",
        san: "Bf2"
      },
      {
        from: "f4",
        to: "f5",
        san: "f5+"
      },
      {
        from: "d3",
        to: "f4",
        san: "Nf4+"
      },
      {
        from: "d6",
        to: "d7",
        san: "d7"
      },
    ],
    responseMoves: ["Bc2", "gxf5", "Kxe5"],
  },
  {
    fen: "3r2r1/p1Q1kp2/3pp2p/8/3P1pqP/6P1/PPP2P2/R4RK1 b - - 1 21",
    correctMoves: [
      {
        from: "d8",
        to: "d7",
        san: "Rd7"
      },
      {
        from: "g4",
        to: "h3",
        san: "Qh3"
      },
      {
        from: "f4",
        to: "g3",
        san: "fxg3"
      },
    ],
    responseMoves: ["Qc3", "Qf3"],
  },
  {
    fen: "8/8/8/2p5/1kp5/1p6/8/B1K5 b - - 1 49",
    correctMoves: [
      {
        from: "c4",
        to: "c3",
        san: "c3"
      },
      {
        from: "b4",
        to: "c4",
        san: "Kc4"
      },
      {
        from: "c3",
        to: "b2",
        san: "cxb2"
      },
    ],
    responseMoves: ["Kb1", "Bb2"],
  },
  {
    fen: "3kr3/1ppqbR2/p1n2N1p/8/3P4/P1N5/1PP1Q1PP/6K1 b - - 1 22",
    correctMoves: [
      {
        from: "d7",
        to: "d4",
        san: "Qxd4+"
      },
      {
        from: "e7",
        to: "f6",
        san: "Bxf6"
      },
      {
        from: "f6",
        to: "d4",
        san: "Bxd4+"
      },
    ],
    responseMoves: ["Qf2", "Qxd4"],
  },
  {
    fen: "8/6PQ/1kp1p3/p2pP3/4B3/2K3P1/PPP2q2/8 b - - 2 39",
    correctMoves: [
      {
        from: "f2",
        to: "e3",
        san: "Qe3+"
      },
      {
        from: "e3",
        to: "e1",
        san: "Qe1+"
      },
      {
        from: "e1",
        to: "b4",
        san: "Qb4#"
      },
    ],
    responseMoves: ["Bd3", "Kb3"],
  },
  {
    fen: "r3k2r/p1pqbppp/1pn1pn2/2Pp4/1P1PbP2/P2BPN2/6PP/RNBQ1RK1 w kq - 0 11",
    correctMoves: [
      {
        from: "d3",
        to: "b5",
        san: "Bb5"
      },
      {
        from: "f3",
        to: "e5",
        san: "Ne5"
      },
      {
        from: "b5",
        to: "d7",
        san: "Bxd7+"
      },
    ],
    responseMoves: ["a6", "Nxe5"],
  },
  {
    fen: "k2r4/1q3pQ1/p3p1p1/2N3Pp/2P4P/p2rR3/8/4R1K1 b - - 2 48",
    correctMoves: [
      {
        from: "d3",
        to: "e3",
        san: "Rxe3"
      },
      {
        from: "e3",
        to: "e1",
        san: "Rxe1+"
      },
      {
        from: "e1",
        to: "b1",
        san: "Rb1"
      },
      {
        from: "a3",
        to: "a2",
        san: "a2"
      },
      {
        from: "a2",
        to: "a1",
        san: "a1=Q"
      },
      {
        from: "b1",
        to: "a1",
        san: "Rxa1"
      },
    ],
    responseMoves: ["Nxb7", "Kf2", "Nxd8", "Nxe6", "Qxa1"],
  },
  {
    fen: "r1b1qrk1/pppp1ppp/2n5/2b5/2B1P1n1/2N5/PPPB1PPP/R2QK1NR w KQ - 11 9",
    correctMoves: [
      {
        from: "d1",
        to: "g4",
        san: "Qxg4"
      },
      {
        from: "g4",
        to: "h5",
        san: "Qh5"
      },
      {
        from: "e1",
        to: "f2",
        san: "Kxf2"
      },
    ],
    responseMoves: ["d5", "Bf2+"],
  },
  {
    fen: "r2q1r1k/ppp1bp2/3pn2p/8/6QP/1BP5/PP3P2/R5RK w - - 0 19",
    correctMoves: [
      {
        from: "g4",
        to: "h5",
        san: "Qh5"
      },
      {
        from: "h4",
        to: "g5",
        san: "hxg5"
      },
      {
        from: "g1",
        to: "g5",
        san: "Rxg5"
      },
    ],
    responseMoves: ["Bg5", "Qxg5"],
  }
  ,
  {
    fen: "4b3/4P3/1K1k4/8/1P6/8/P7/8 w - - 1 65",
    correctMoves: [
      {
        from: "b4",
        to: "b5",
        san: "b5"
      },
      {
        from: "a2",
        to: "a4",
        san: "a4"
      },
      {
        from: "b6",
        to: "a7",
        san: "Ka7"
      },
      {
        from: "b5",
        to: "b6",
        san: "b6"
      },
      {
        from: "b6",
        to: "b7",
        san: "b7"
      },
      {
        from: "b7",
        to: "b8",
        san: "b8=Q"
      },
    ],
    responseMoves: ["Kxe7", "Kd6", "Kc5", "Bxa4", "Bb5"],
  }
  ,
  {
    fen: "r1bq1rk1/1p2npbp/p3p1p1/2ppN1Nn/3P1B2/2PBPQ2/PP3PPP/R3K2R w KQ - 6 12",
    correctMoves: [
      {
        from: "f3",
        to: "h5",
        san: "Qxh5"
      },
      {
        from: "d3",
        to: "h7",
        san: "Bxh7+"
      },
      {
        from: "e5",
        to: "f7",
        san: "N5xf7+"
      },
      {
        from: "g5",
        to: "f7",
        san: "Nxf7+"
      },
      {
        from: "f7",
        to: "d8",
        san: "Nxd8"
      },
    ],
    responseMoves: ["gxh5", "Kh8", "Rxf7", "Kxh7"],
  }
  ,
  {
    fen: "k7/3r2p1/p1N1Qn2/1P2B3/K7/1P6/P7/2q5 b - - 0 1",
    correctMoves: [
      {
        from: "a6",
        to: "b5",
        san: "axb5+"
      },
      {
        from: "d7",
        to: "d5",
        san: "Rd5+"
      },
      {
        from: "f6",
        to: "d7",
        san: "Nd7"
      },
    ],
    responseMoves: ["Kxb5", "Ka4"],
  }
  ,
  {
    fen: "2kr3r/1pp2Q2/3q3B/1Pb2P2/8/6P1/P3P2P/1R2KBNR b K - 0 26",
    correctMoves: [
      {
        from: "h8",
        to: "h6",
        san: "Rxh6"
      },
      {
        from: "h6",
        to: "h2",
        san: "Rxh2"
      },
      {
        from: "d6",
        to: "e6",
        san: "Qxe6"
      },
    ],
    responseMoves: ["Nf3", "Qe6+"],
  }
  ,
  {
    fen: "7r/pkn3pp/1b1Q1p2/4p3/1B2q3/1P6/PK3P2/2R2R2 b - - 4 32",
    correctMoves: [
      {
        from: "b6",
        to: "d4",
        san: "Bd4+"
      },
      {
        from: "e4",
        to: "e2",
        san: "Qe2+"
      },
      {
        from: "d4",
        to: "c3",
        san: "Bxc3+"
      },
    ],
    responseMoves: ["Bc3", "Rc2"],
  }
  ,
  {
    fen: "3rkbnr/pp3ppp/2n5/2p1P3/6b1/2P2N1P/PPK2PP1/RNB2B1R b k - 2 9",
    correctMoves: [
      {
        from: "g4",
        to: "f5",
        san: "Bf5+"
      },
      {
        from: "c5",
        to: "c4",
        san: "c4"
      },
      {
        from: "c6",
        to: "a5",
        san: "Na5+"
      },
      {
        from: "a5",
        to: "c4",
        san: "Nxc4"
      },
    ],
    responseMoves: ["Kb3", "Bxc4", "Ka4"],
  }
  ,
  {
    fen: "5k2/2r3pp/4Kp2/p1P1p3/r5P1/2R4P/5P2/2R5 b - - 1 35",
    correctMoves: [
      {
        from: "a4",
        to: "d4",
        san: "Rd4"
      },
      {
        from: "c7",
        to: "c6",
        san: "Rc6+"
      },
      {
        from: "g7",
        to: "g6",
        san: "g6#"
      },
    ],
    responseMoves: ["Rc4", "Kf5"],
  }
  ,
  {
    fen: "r1b1k1nr/ppp2ppp/4q3/3N4/P1Pn4/5B2/4QPPP/R3K1NR b KQkq - 3 14",
    correctMoves: [
      {
        from: "d4",
        to: "e2",
        san: "Nxe2"
      },
      {
        from: "e8",
        to: "e7",
        san: "Ke7"
      },
      {
        from: "e2",
        to: "g1",
        san: "Nxg1"
      },
      {
        from: "c8",
        to: "b7",
        san: "Bxb7"
      },
    ],
    responseMoves: ["Nxc7+", "Nxe6", "Bxb7"],
  }
  ,
  {
    fen: "8/8/p6k/q5p1/5Q2/3p1N2/8/5K2 w - g6 0 49",
    correctMoves: [
      {
        from: "f4",
        to: "f6",
        san: "Qf6+"
      },
      {
        from: "f3",
        to: "e5",
        san: "Ne5"
      },
      {
        from: "f1",
        to: "g2",
        san: "Kg2"
      },
      {
        from: "f6",
        to: "e5",
        san: "Qxe5"
      },
    ],
    responseMoves: ["Kh5", "Qa1+", "Qxe5"],
  }
  ,
  {
    fen: "r4rk1/2p2p2/p2p2qp/1pbNp3/3nP1b1/1B1P2Q1/PPP2PPB/R4RK1 w - - 5 19",
    correctMoves: [
      {
        from: "g3",
        to: "g4",
        san: "Qxg4+"
      },
      {
        from: "d5",
        to: "f6",
        san: "Nf6+"
      },
      {
        from: "f6",
        to: "g4",
        san: "Nxg4"
      },
    ],
    responseMoves: ["Qxg4", "Kg7"],
  }
  ,
  {
    fen: "r4k1r/2ppn2p/1p3P2/p5N1/2bp4/5Q2/q4P1P/1N4K1 w - - 0 24",
    correctMoves: [
      {
        from: "f3",
        to: "a8",
        san: "Qxa8+"
      },
      {
        from: "a8",
        to: "c8",
        san: "Qxc8#"
      },
    ],
    responseMoves: ["Nc8"],
  }
  ,
  {
    fen: "8/p1r1p2R/2N1pkp1/1p3q2/8/1P5P/P3QPP1/b5K1 w - - 1 29",
    correctMoves: [
      {
        from: "c6",
        to: "d8",
        san: "Nd8"
      },
      {
        from: "g1",
        to: "h2",
        san: "Kh2"
      },
      {
        from: "f2",
        to: "f4",
        san: "f4"
      },
      {
        from: "g2",
        to: "g3",
        san: "g3"
      },
    ],
    responseMoves: ["Rc1+", "Qe5+", "Qxf4+"],
  }
  ,
  {
    fen: "3r2k1/5pp1/4n2p/1R2Q3/3Nn3/4B2P/2q2PP1/6K1 b - - 2 25",
    correctMoves: [
      {
        from: "e6",
        to: "d4",
        san: "Nxd4"
      },
      {
        from: "c2",
        to: "d1",
        san: "Qd1+"
      },
      {
        from: "d1",
        to: "d4",
        san: "Qxd4"
      },
      {
        from: "d8",
        to: "d4",
        san: "Rxd4"
      },
    ],
    responseMoves: ["Bxd4", "Kh2", "Qxd4"],
  }
  ,
  {
    fen: "5rrk/pppb3p/3p4/3P1p1B/3p1p1q/3P1Q2/PPP1RP1P/4R2K b - - 7 19",
    correctMoves: [
      {
        from: "f8",
        to: "f6",
        san: "Rf6"
      },
      {
        from: "g8",
        to: "g1",
        san: "Rxg1+"
      },
      {
        from: "f6",
        to: "h6",
        san: "Rh6"
      },
      {
        from: "d7",
        to: "e8",
        san: "Bxe8"
      },
    ],
    responseMoves: ["Rg1", "Kxg1", "Re8+"],
  }
  ,
  {
    fen: "3r1rk1/2p5/1pn1q1p1/p2np2p/P1B1Q2P/2P3BR/1PK3P1/3R4 b - - 3 27",
    correctMoves: [
      {
        from: "d5",
        to: "e3",
        san: "Ne3+"
      },
      {
        from: "e6",
        to: "c4",
        san: "Qxc4"
      },
      {
        from: "c6",
        to: "d4",
        san: "Nd4+"
      },
      {
        from: "c4",
        to: "e2",
        san: "Qe2+"
      },
      {
        from: "e5",
        to: "d4",
        san: "exd4"
      },
      {
        from: "d4",
        to: "d3",
        san: "d3+"
      },
      {
        from: "d3",
        to: "e2",
        san: "dxe2+"
      },
    ],
    responseMoves: ["Qxe3", "b3", "Qxd4", "Rd2", "Rxe2", "Ke2"],
  }
  ,
  {
    fen: "3rk2r/4np1p/p5p1/2Q1b3/2P1q3/4B3/P4PPP/4RRK1 w k - 0 2",
    correctMoves: [
      {
        from: "e3",
        to: "g5",
        san: "Bg5"
      },
      {
        from: "c5",
        to: "a7",
        san: "Qa7"
      },
      {
        from: "a7",
        to: "d7",
        san: "Qxd7+"
      },
      {
        from: "e1",
        to: "e4",
        san: "Rxe4"
      }
    ],
    responseMoves: ["Bd6", "Rd7", "Kxd7"]
  }
  ,
  {
    fen: "8/1k1b4/p3p1P1/1pQp4/3P1P2/P1N3q1/KP4r1/1B6 w - - 1 2",
    correctMoves: [
      {
        from: "c3",
        to: "e4",
        san: "Ne4"
      },
      {
        from: "e4",
        to: "d6",
        san: "Nd6+"
      },
      {
        from: "c5",
        to: "d6",
        san: "Qxd6"
      },
    ],
    responseMoves: ["Qxf4", "Qxd6"]
  },
  {
    fen: "8/6kp/1p1rq2r/p2p1pn1/P1pP2NR/2P3P1/1P5P/4RQK1 b - - 7 34",
    correctMoves: [
      {
        from: "g5",
        to: "f3",
        san: "Nf3+"
      },
      {
        from: "e6",
        to: "e1",
        san: "Qxe1+"
      },
      {
        from: "f3",
        to: "e1",
        san: "Nxe1"
      },
      {
        from: "e1",
        to: "d3",
        san: "Nxd3+"
      },
    ],
    responseMoves: ["Kf2", "Qxe1", "Nxh6"]
  }
  ,
  {
    fen: "r4rk1/1pp2ppp/p1nbpq2/7b/3PB3/2P2N1P/PP3PP1/R1BQR1K1 w - - 1 13",
    correctMoves: [
      {
        from: "g2",
        to: "g4",
        san: "g4"
      },
      {
        from: "c1",
        to: "g5",
        san: "Bg5"
      },
      {
        from: "g5",
        to: "f6",
        san: "Bxf6"
      },
    ],
    responseMoves: ["Bg6", "Bxe4"]
  },
  {
    fen: "1k1rr3/p2p1pp1/1ppbq2p/3R4/Q3P3/2P1B1PP/PP3PK1/4R3 w - - 0 24",
    correctMoves: [
      {
        from: "d5",
        to: "d6",
        san: "Rxd6"
      },
      {
        from: "e3",
        to: "f4",
        san: "Bf4"
      },
      {
        from: "a4",
        to: "d4",
        san: "Qd4"
      },
      {
        from: "c3",
        to: "d4",
        san: "cxd4"
      },
      {
        from: "d4",
        to: "e5",
        san: "dxe5"
      },
    ],
    responseMoves: ["Qxd6", "Re5", "Qxd4", "d6"]
  }
  ,
  {
    fen: "q7/3bkpQR/1p2p3/3p4/1p6/1P1KP3/r4PP1/3R1B2 b - - 4 27",
    correctMoves: [
      {
        from: "d7",
        to: "b5",
        san: "Bb5+"
      },
      {
        from: "a2",
        to: "d2",
        san: "Rd2+"
      },
      {
        from: "d2",
        to: "d3",
        san: "Rxd3+"
      },
      {
        from: "a8",
        to: "a1",
        san: "Qa1+"
      },
      {
        from: "a1",
        to: "c3",
        san: "Qxc3#"
      },
    ],
    responseMoves: ["Kd4", "Bd3", "Rxd3", "Rc3"]
  },
  {
    fen: "rk2R3/7p/1p1p2p1/2b5/8/2PQ3P/5rP1/6K1 b - - 1 37",
    correctMoves: [
      {
        from: "b8",
        to: "c7",
        san: "Kc7"
      },
      {
        from: "c7",
        to: "d8",
        san: "Kd8"
      },
      {
        from: "a8",
        to: "a2",
        san: "Raa2"
      },
      {
        from: "d8",
        to: "e8",
        san: "Kxe8"
      },
    ],
    responseMoves: ["Re7+", "Kh2", "Re8+"]
  },
  {
    fen: "1Qq2k1r/6p1/p4p1p/4Nb2/5P2/8/1P2NKPP/8 w - - 2 28",
    correctMoves: [
      {
        from: "e5",
        to: "g6",
        san: "Ng6+"
      },
      {
        from: "b8",
        to: "c8",
        san: "Qxc8+"
      },
      {
        from: "g6",
        to: "h8",
        san: "Nxh8"
      },
    ],
    responseMoves: ["Kf8", "Bxc8"]
  },
  {
    fen: "8/5p1k/r4p1P/3P1K1R/4PPP1/8/8/3b4 b - - 0 43",
    correctMoves: [
      {
        from: "d1",
        to: "a4",
        san: "Ba4"
      },
      {
        from: "a6",
        to: "d6",
        san: "Rxd6"
      },
      {
        from: "a4",
        to: "d7",
        san: "Bd7#"
      },
    ],
    responseMoves: ["d6", "g5"]
  }
  ,
  {
    fen: "r4rk1/3R3p/p6p/2p5/2b2qP1/1PN4P/P1P2P2/1R1Q2K1 b - - 0 24",
    correctMoves: [
      {
        from: "f4",
        to: "f2",
        san: "Qxf2+"
      },
      {
        from: "f8",
        to: "f3",
        san: "Rf3"
      },
      {
        from: "g8",
        to: "g7",
        san: "Kg7"
      },
      {
        from: "c4",
        to: "d3",
        san: "Bxd3"
      },
      {
        from: "f2",
        to: "f3",
        san: "Qxf3+"
      },
    ],
    responseMoves: ["Kh1", "Rd8+", "Rd3", "Qxf3"],
  },
  {
    fen: "5rk1/1R6/2p1r1pp/5p2/5Q2/q6P/6P1/5R1K w - f6 0 37",
    correctMoves: [
      {
        from: "f4",
        to: "c7",
        san: "Qc7"
      },
      {
        from: "c7",
        to: "e7",
        san: "Qxe7"
      },
      {
        from: "b7",
        to: "e7",
        san: "Rxe7"
      },
    ],
    responseMoves: ["Re7", "Qxe7"],
  },
  {
    fen: "r1b2rk1/5p1p/7n/2p2qp1/p1PPN3/P1BBPP2/1P4PP/R4RK1 w - c6 0 19",
    correctMoves: [
      {
        from: "d4",
        to: "d5",
        san: "d5"
      },
      {
        from: "e4",
        to: "c5",
        san: "Nxc5"
      },
      {
        from: "c5",
        to: "d3",
        san: "Nxd3"
      },
    ],
    responseMoves: ["f6", "Qxd3"],
  },
  {
    fen: "4qrk1/n4pbp/B2p1np1/p2P2B1/1p6/1P3N1P/P3QPP1/2R3K1 w - - 1 26",
    correctMoves: [
      {
        from: "e2",
        to: "e8",
        san: "Qxe8"
      },
      {
        from: "c1",
        to: "c7",
        san: "Rc7"
      },
      {
        from: "g5",
        to: "e3",
        san: "Be3"
      },
      {
        from: "c7",
        to: "a7",
        san: "Rxa7"
      },
      {
        from: "e3",
        to: "a7",
        san: "Bxa7"
      },
    ],
    responseMoves: ["Rxe8", "Ra8", "Nxd5", "Rxa7"],
  },
  {
    fen: "r3rk2/5p2/p3P2R/q2b1p2/2pQ4/7N/P1PP4/1K6 w - - 1 31",
    correctMoves: [
      {
        from: "d4",
        to: "f6",
        san: "Qf6"
      },
      {
        from: "b1",
        to: "a1",
        san: "Ka1"
      },
      {
        from: "a1",
        to: "b1",
        san: "Kxb1"
      },
      {
        from: "b1",
        to: "a1",
        san: "Ka1"
      },
      {
        from: "a1",
        to: "b1",
        san: "Kxb1"
      },
    ],
    responseMoves: ["Rab8+", "Rb1+", "Rb8+", "Rb1+"],
  },
  {
    fen: "2k2bnr/1pp2b1p/p4p2/5N2/5PQP/P1K5/1P1r1qP1/R7 w - - 0 22",
    correctMoves: [
      {
        from: "f5",
        to: "d6",
        san: "Nd6+"
      },
      {
        from: "g4",
        to: "c8",
        san: "Qc8+"
      },
      {
        from: "d6",
        to: "f5",
        san: "Nf5#"
      },
    ],
    responseMoves: ["Kd8", "Ke7"],
  },
  {
    fen: "8/6k1/6p1/2P3Kp/BP5P/5N2/1b3P2/8 b - - 0 40",
    correctMoves: [
      {
        from: "b2",
        to: "c1",
        san: "Bc1+"
      },
      {
        from: "c1",
        to: "d2",
        san: "Bxd2+"
      },
      {
        from: "d2",
        to: "c3",
        san: "Bc3"
      },
      {
        from: "c3",
        to: "d2",
        san: "Bd2#"
      },
    ],
    responseMoves: ["Nd2", "f4", "f5"],
  },
  {
    fen: "8/pQ1P1pp1/1p3k2/7K/r6N/6p1/4P3/5b2 b - - 0 36",
    correctMoves: [
      {
        from: "g7",
        to: "g6",
        san: "g6+"
      },
      {
        from: "f7",
        to: "g6",
        san: "fxg6+"
      },
      {
        from: "a4",
        to: "h4",
        san: "Rh4#"
      },
    ],
    responseMoves: ["Nxg6", "Kh6"],
  },
  {
    fen: "r1b1k3/pp1p1p1Q/4p3/1B1pPP2/1b2n3/2N4P/PPP1K1PR/q7 w q - 0 20",
    correctMoves: [
      {
        from: "h7",
        to: "g8",
        san: "Qg8+"
      },
      {
        from: "f5",
        to: "f6",
        san: "f6+"
      },
      {
        from: "e5",
        to: "f6",
        san: "exf6+"
      },
      {
        from: "g8",
        to: "f8",
        san: "Qf8+"
      },
      {
        from: "f8",
        to: "b4",
        san: "Qxb4"
      },
      {
        from: "b4",
        to: "f4",
        san: "Qf4+"
      },
    ],
    responseMoves: ["Ke7", "Nxf6", "Kd6", "Kc7", "Qg1"],
  },
  {
    fen: "r5k1/1pp4p/pbn2pp1/4qNQ1/5R1P/3B4/1PP2PP1/6K1 w - - 0 2",
    correctMoves: [
      {
        from: "g5",
        to: "h6",
        san: "Qh6"
      },
      {
        from: "d3",
        to: "f5",
        san: "Bxf5"
      },
      {
        from: "f4",
        to: "g4",
        san: "Rg4+"
      },
      {
        from: "f5",
        to: "g6",
        san: "Bxg6+"
      },
      {
        from: "h6",
        to: "g6",
        san: "Qxg6+"
      },
    ],
    responseMoves: ["gxf5", "Ne7", "Ng6", "hxg6"],
  },
  {
    fen: "r1bq3r/ppp1kNpp/2npBp1n/2b1p2Q/4P3/3P4/PPP2PPP/RNB1K2R b KQ - 5 9",
    correctMoves: [
      {
        from: "d8",
        to: "e8",
        san: "Qe8"
      },
      {
        from: "a8",
        to: "c8",
        san: "Rxc8"
      },
      {
        from: "g7",
        to: "h6",
        san: "gxh6"
      },
    ],
    responseMoves: ["Bxc8", "Bxh6"],
  },
  {
    fen: "2r2r2/p4kpQ/2p1p2R/1pq1Ppp1/5nP1/P4K2/1P2B3/3R4 w - - 0 2",
    correctMoves: [
      {
        from: "h6",
        to: "f6",
        san: "Rf6+"
      },
      {
        from: "h7",
        to: "g7",
        san: "Qxg7"
      },
      {
        from: "g7",
        to: "d7",
        san: "Qd7+"
      },
      {
        from: "d7",
        to: "c8",
        san: "Qxc8+"
      },
    ],
    responseMoves: ["Ke8", "Rxf6", "Kf8"],
  },
  {
    fen: "r2k1r2/p1pq1p1b/1pB5/8/1n6/7N/1KP2PPP/3RR3 w - - 3 20",
    correctMoves: [
      {
        from: "d1",
        to: "d7",
        san: "Rxd7+"
      },
      {
        from: "d7",
        to: "f7",
        san: "Rxf7"
      },
      {
        from: "f7",
        to: "f8",
        san: "Rxf8+"
      },
    ],
    responseMoves: ["Kc8", "Nxc6"],
  },
  {
    fen: "r2qkb1r/ppp2p1p/4bnp1/3np1B1/2B5/2PP2Q1/PP3PPP/RN2K1NR w KQkq - 2 10",
    correctMoves: [
      {
        from: "c4",
        to: "d5",
        san: "Bxd5"
      },
      {
        from: "g3",
        to: "e5",
        san: "Qxe5"
      },
      {
        from: "g5",
        to: "f6",
        san: "Bxf6"
      },
      {
        from: "f6",
        to: "e5",
        san: "Bxe5"
      },
    ],
    responseMoves: ["Bxd5", "Qe7", "Qxe5"],
  },
  {
    fen: "8/8/8/8/5K2/k7/p3Q3/8 w - - 2 53",
    correctMoves: [
      {
        from: "e2",
        to: "e5",
        san: "Qe5"
      },
    ],
    responseMoves: [],
  },
  {
    fen: "r1r3k1/6b1/4p2p/3n4/4N3/Pp4N1/P5PP/1KB1R2R b - - 0 1",
    correctMoves: [
      {
        from: "b3",
        to: "a2",
        san: "bxa2+"
      },
      {
        from: "d5",
        to: "b4",
        san: "Nb4+"
      },
      {
        from: "b4",
        to: "c2",
        san: "Nc2"
      },
      {
        from: "c2",
        to: "d4",
        san: "Nd4+"
      },
      {
        from: "d4",
        to: "e2",
        san: "Nxe2"
      },
    ],
    responseMoves: ["Kxa2", "Kb3", "Re2", "Ka2"],
  },
  {
    fen: "8/7k/8/8/5pK1/3n1P1P/8/8 b - - 2 51",
    correctMoves: [
      {
        from: "h7",
        to: "h6",
        san: "Kh6"
      },
      {
        from: "h6",
        to: "h5",
        san: "Kh5"
      },
      {
        from: "h5",
        to: "h4",
        san: "Kh4"
      },
      {
        from: "h4",
        to: "h3",
        san: "Kxh3"
      },
      {
        from: "h3",
        to: "g2",
        san: "Kg2"
      },
      {
        from: "g2",
        to: "g3",
        san: "Kg3"
      },
    ],
    responseMoves: ["Kf5", "Ke4", "Kxd3", "Kd4", "Ke4"],
  },
  {
    fen: "2r4r/6k1/8/p2p1p1p/Pp1Pp3/8/1q1B2Q1/3RK3 b - - 1 35",
    correctMoves: [
      {
        from: "g7",
        to: "f7",
        san: "Kf7"
      },
      {
        from: "b2",
        to: "d4",
        san: "Qxd4"
      },
      {
        from: "d4",
        to: "f6",
        san: "Qf6"
      },
    ],
    responseMoves: ["Qg5", "Qxf5+"],
  },
  {
    fen: "8/p1p5/8/2p1p1pp/P4k2/2PK1B1P/2P3P1/6b1 b - - 1 35",
    correctMoves: [
      {
        from: "e5",
        to: "e4",
        san: "e4+"
      },
      {
        from: "c5",
        to: "c4",
        san: "c4+"
      },
      {
        from: "f4",
        to: "e4",
        san: "Kxe4"
      },
    ],
    responseMoves: ["Bxe4", "Kxc4"],
  },
  {
    fen: "6k1/3B1p2/3p2p1/p1qP2P1/np6/4Q3/PbP5/K1BR4 w - - 0 2",
    correctMoves: [
      {
        from: "c1",
        to: "b2",
        san: "Bxb2"
      },
      {
        from: "b2",
        to: "f6",
        san: "Bf6"
      },
      {
        from: "f6",
        to: "c3",
        san: "Bxc3"
      },
    ],
    responseMoves: ["Qxe3", "Qc3+"],
  },
  {
    fen: "Q7/pp3rp1/2bPp1R1/2P1k3/P7/1P1B1n2/7P/7K b - a3 0 33",
    correctMoves: [
      {
        from: "f3",
        to: "g5",
        san: "Ng5+"
      },
      {
        from: "c6",
        to: "e4",
        san: "Bxe4+"
      },
      {
        from: "g5",
        to: "h3",
        san: "Nh3#"
      },
    ],
    responseMoves: ["Be4", "Kg1"],
  },
  {
    fen: "3q3k/1b5p/p1n2Np1/1p1Q1P2/3p3P/P2Br3/1PP3P1/5R1K b - - 0 1",
    correctMoves: [
      {
        from: "d8",
        to: "f6",
        san: "Qxf6"
      },
      {
        from: "e3",
        to: "e1",
        san: "Re1"
      },
      {
        from: "e1",
        to: "f1",
        san: "Rxf1+"
      },
    ],
    responseMoves: ["fxg6", "Kg1"],
  },
  {
    fen: "8/8/4K1kp/5p1p/8/4P1P1/8/8 b - - 5 43",
    correctMoves: [
      {
        from: "g6",
        to: "g5",
        san: "Kg5"
      },
      {
        from: "g5",
        to: "g4",
        san: "Kg4"
      },
      {
        from: "g4",
        to: "g3",
        san: "Kxg3"
      },
      {
        from: "h5",
        to: "h4",
        san: "h4"
      },
      {
        from: "h4",
        to: "h3",
        san: "h3"
      },
    ],
    responseMoves: ["Kf7", "Kg6", "Kxf5", "e4"],
  },
  {
    fen: "1k1rq2r/pp3ppp/4b2n/np1N4/8/2Q2NP1/PP3PP1/2KRR3 w - - 0 23",
    correctMoves: [
      {
        from: "c3",
        to: "e5",
        san: "Qe5+"
      },
      {
        from: "d5",
        to: "c7",
        san: "Nc7+"
      },
    ],
    responseMoves: ["Ka8"],
  },
  {
    fen: "r1bqk1nr/ppp2pp1/2n1p2p/3p4/3P1BQ1/P1P1P3/2P2PPP/R3KBNR b KQkq - 2 7",
    correctMoves: [
      {
        from: "g7",
        to: "g5",
        san: "g5"
      },
      {
        from: "h6",
        to: "h5",
        san: "h5"
      },
      {
        from: "h5",
        to: "h4",
        san: "h4"
      },
    ],
    responseMoves: ["Be5", "Qg3"],
  },
  {
    fen: "3K4/2p5/2q5/3k4/P7/Q7/8/8 b - - 2 55",
    correctMoves: [
      {
        from: "c6",
        to: "d6",
        san: "Qd6+"
      },
      {
        from: "d5",
        to: "d6",
        san: "Kxd6"
      },
      {
        from: "c7",
        to: "c5",
        san: "c5"
      },
      {
        from: "d6",
        to: "c6",
        san: "Kc6"
      },
    ],
    responseMoves: ["Qxd6+", "a5", "a6"],
  },
  {
    fen: "r3k2r/ppp3pp/3p4/2nPqb1N/2P5/3P4/PP3PPP/R1BQ1K1R w kq - 2 17",
    correctMoves: [
      {
        from: "d3",
        to: "d4",
        san: "d4"
      },
      {
        from: "d1",
        to: "d3",
        san: "Qxd3"
      },
      {
        from: "d4",
        to: "e5",
        san: "dxe5"
      },
    ],
    responseMoves: ["Bd3+", "Nxd3"],
  },
  {
    fen: "r4rk1/7p/p2p4/2pPb1q1/Q1PpP1P1/3B1P2/P7/1R2BRK1 b - - 0 1",
    correctMoves: [
      {
        from: "g5",
        to: "e3",
        san: "Qe3+"
      },
      {
        from: "e3",
        to: "f4",
        san: "Qf4"
      },
      {
        from: "f4",
        to: "g3",
        san: "Qg3+"
      },
      {
        from: "f8",
        to: "f3",
        san: "Rxf3"
      },
    ],
    responseMoves: ["Kg2", "Rf2", "Kf1"],
  },
  {
    fen: "8/1p1k4/8/4pPQP/1RPp4/q2P1P1P/r1PK4/6NR b - - 4 31",
    correctMoves: [
      {
        from: "a3",
        to: "c3",
        san: "Qc3+"
      },
      {
        from: "c3",
        to: "c2",
        san: "Qxc2+"
      },
      {
        from: "c2",
        to: "d2",
        san: "Qxd2+"
      },
    ],
    responseMoves: ["Ke2", "Qd2"],
  },
  {
    fen: "rnbqkbnr/p6p/2p5/3Pppp1/4P3/8/PPP2PPP/R1BQKBNR w KQkq f6 0 8",
    correctMoves: [
      {
        from: "d1",
        to: "h5",
        san: "Qh5+"
      },
      {
        from: "c1",
        to: "g5",
        san: "Bxg5"
      },
      {
        from: "c2",
        to: "c3",
        san: "c3"
      },
    ],
    responseMoves: ["Kd7", "Bb4+"],
  },
  {
    fen: "2R2b1r/pk2p3/1q2Qp1p/4p1p1/3rP3/P6B/1P3P1P/2K4R b - - 3 29",
    correctMoves: [
      {
        from: "b6",
        to: "e6",
        san: "Qxe6"
      },
      {
        from: "d4",
        to: "d6",
        san: "Rd6"
      },
      {
        from: "e7",
        to: "e6",
        san: "e6"
      },
      {
        from: "d6",
        to: "e6",
        san: "Rxe6"
      },
    ],
    responseMoves: ["Bxe6", "Bf5", "Bxe6"],
  },
  {
    fen: "6k1/2q3p1/3R1p1p/3p4/3P4/2r2PQP/6PK/8 b - - 0 34",
    correctMoves: [
      {
        from: "c3",
        to: "c1",
        san: "Rc1"
      },
      {
        from: "c1",
        to: "h1",
        san: "Rh1+"
      },
      {
        from: "c7",
        to: "g3",
        san: "Qxg3"
      },
    ],
    responseMoves: ["Kxd5", "Kxh1"],
  },
  {
    fen: "q3kb1r/r1pn1pp1/pp1pp3/4P3/2BPbP2/6Pp/PPPNQB1P/3R1RK1 b k - 3 15",
    correctMoves: [
      {
        from: "e4",
        to: "d3",
        san: "Bd3"
      },
      {
        from: "a8",
        to: "f3",
        san: "Qxf3"
      },
      {
        from: "d3",
        to: "c4",
        san: "Bxc4"
      },
    ],
    responseMoves: ["Qf3", "Nxf3"],
  },
  {
    fen: "2r3k1/2r2p1p/p3p2p/1p2PnP1/1P2NP2/3R4/2P5/2KR4 w - - 0 2",
    correctMoves: [
      {
        from: "d3",
        to: "d8",
        san: "Rd8+"
      },
      {
        from: "g5",
        to: "h6",
        san: "gxh6+"
      },
      {
        from: "d1",
        to: "h1",
        san: "Rh1+"
      },
      {
        from: "h1",
        to: "g1",
        san: "Rg1+"
      },
    ],
    responseMoves: ["Kg7", "Kxh6", "Kg6"],
  },
  {
    fen: "4Q3/pb3rpp/5k2/2p5/5qP1/P1P1nP2/2P2R1P/R5K1 b - - 5 27",
    correctMoves: [
      {
        from: "b7",
        to: "f3",
        san: "Bxf3"
      },
      {
        from: "f6",
        to: "g5",
        san: "Kg5"
      },
      {
        from: "f4",
        to: "f3",
        san: "Qxf3"
      },
      {
        from: "f7",
        to: "f3",
        san: "Rxf3"
      },
    ],
    responseMoves: ["Qc6+", "Rxf3", "Qxf3"],
  },
  {
    fen: "rnq1k2r/pbppn1pp/1p1P1p2/4N3/1bB5/2N5/PPP2PPP/R1BQK2R b KQkq - 0 9",
    correctMoves: [
      {
        from: "c7",
        to: "d6",
        san: "cxd6"
      },
      {
        from: "g7",
        to: "g6",
        san: "g6"
      },
      {
        from: "e8",
        to: "d8",
        san: "Kd8"
      },
    ],
    responseMoves: ["Qh5+", "Bf7+"],
  },
  {
    fen: "r1bqkb2/1pp1pr1p/p2p4/7Q/2n1N3/4P3/PPPP1PPP/R1B2RK1 w q - 2 12",
    correctMoves: [
      {
        from: "e4",
        to: "g5",
        san: "Ng5"
      },
      {
        from: "f2",
        to: "f4",
        san: "f4"
      },
      {
        from: "g5",
        to: "f7",
        san: "Nxf7"
      },
      {
        from: "f7",
        to: "d8",
        san: "Nxd8"
      },
      {
        from: "f4",
        to: "e5",
        san: "fxe5"
      },
    ],
    responseMoves: ["Ne5", "Bg4", "Bxh5", "Rxd8"],
  },
  {
    fen: "8/8/3Pk1p1/1p2P3/b2b1P2/3N2B1/6K1/8 w - - 0 41",
    correctMoves: [
      {
        from: "g3",
        to: "f2",
        san: "Bf2"
      },
      {
        from: "f4",
        to: "f5",
        san: "f5+"
      },
      {
        from: "d3",
        to: "f4",
        san: "Nf4+"
      },
      {
        from: "d6",
        to: "d7",
        san: "d7"
      },
    ],
    responseMoves: ["Bc2", "gxf5", "Kxe5"],
  },
  {
    fen: "3r2r1/p1Q1kp2/3pp2p/8/3P1pqP/6P1/PPP2P2/R4RK1 b - - 1 21",
    correctMoves: [
      {
        from: "d8",
        to: "d7",
        san: "Rd7"
      },
      {
        from: "g4",
        to: "h3",
        san: "Qh3"
      },
      {
        from: "f4",
        to: "g3",
        san: "fxg3"
      },
    ],
    responseMoves: ["Qc3", "Qf3"],
  },
  {
    fen: "8/8/8/2p5/1kp5/1p6/8/B1K5 b - - 1 49",
    correctMoves: [
      {
        from: "c4",
        to: "c3",
        san: "c3"
      },
      {
        from: "b4",
        to: "c4",
        san: "Kc4"
      },
      {
        from: "c3",
        to: "b2",
        san: "cxb2"
      },
    ],
    responseMoves: ["Kb1", "Bb2"],
  },
  {
    fen: "3kr3/1ppqbR2/p1n2N1p/8/3P4/P1N5/1PP1Q1PP/6K1 b - - 1 22",
    correctMoves: [
      {
        from: "d7",
        to: "d4",
        san: "Qxd4+"
      },
      {
        from: "e7",
        to: "f6",
        san: "Bxf6"
      },
      {
        from: "f6",
        to: "d4",
        san: "Bxd4+"
      },
    ],
    responseMoves: ["Qf2", "Qxd4"],
  },
  {
    fen: "8/6PQ/1kp1p3/p2pP3/4B3/2K3P1/PPP2q2/8 b - - 2 39",
    correctMoves: [
      {
        from: "f2",
        to: "e3",
        san: "Qe3+"
      },
      {
        from: "e3",
        to: "e1",
        san: "Qe1+"
      },
      {
        from: "e1",
        to: "b4",
        san: "Qb4#"
      },
    ],
    responseMoves: ["Bd3", "Kb3"],
  },
  {
    fen: "r3k2r/p1pqbppp/1pn1pn2/2Pp4/1P1PbP2/P2BPN2/6PP/RNBQ1RK1 w kq - 0 11",
    correctMoves: [
      {
        from: "d3",
        to: "b5",
        san: "Bb5"
      },
      {
        from: "f3",
        to: "e5",
        san: "Ne5"
      },
      {
        from: "b5",
        to: "d7",
        san: "Bxd7+"
      },
    ],
    responseMoves: ["a6", "Nxe5"],
  },
  {
    fen: "k2r4/1q3pQ1/p3p1p1/2N3Pp/2P4P/p2rR3/8/4R1K1 b - - 2 48",
    correctMoves: [
      {
        from: "d3",
        to: "e3",
        san: "Rxe3"
      },
      {
        from: "e3",
        to: "e1",
        san: "Rxe1+"
      },
      {
        from: "e1",
        to: "b1",
        san: "Rb1"
      },
      {
        from: "a3",
        to: "a2",
        san: "a2"
      },
      {
        from: "a2",
        to: "a1",
        san: "a1=Q"
      },
      {
        from: "b1",
        to: "a1",
        san: "Rxa1"
      },
    ],
    responseMoves: ["Nxb7", "Kf2", "Nxd8", "Nxe6", "Qxa1"],
  },
  {
    fen: "r1b1qrk1/pppp1ppp/2n5/2b5/2B1P1n1/2N5/PPPB1PPP/R2QK1NR w KQ - 11 9",
    correctMoves: [
      {
        from: "d1",
        to: "g4",
        san: "Qxg4"
      },
      {
        from: "g4",
        to: "h5",
        san: "Qh5"
      },
      {
        from: "e1",
        to: "f2",
        san: "Kxf2"
      },
    ],
    responseMoves: ["d5", "Bf2+"],
  },
  {
    fen: "r2q1r1k/ppp1bp2/3pn2p/8/6QP/1BP5/PP3P2/R5RK w - - 0 19",
    correctMoves: [
      {
        from: "g4",
        to: "h5",
        san: "Qh5"
      },
      {
        from: "h4",
        to: "g5",
        san: "hxg5"
      },
      {
        from: "g1",
        to: "g5",
        san: "Rxg5"
      },
    ],
    responseMoves: ["Bg5", "Qxg5"],
  }
  ,
  {
    fen: "4b3/4P3/1K1k4/8/1P6/8/P7/8 w - - 1 65",
    correctMoves: [
      {
        from: "b4",
        to: "b5",
        san: "b5"
      },
      {
        from: "a2",
        to: "a4",
        san: "a4"
      },
      {
        from: "b6",
        to: "a7",
        san: "Ka7"
      },
      {
        from: "b5",
        to: "b6",
        san: "b6"
      },
      {
        from: "b6",
        to: "b7",
        san: "b7"
      },
      {
        from: "b7",
        to: "b8",
        san: "b8=Q"
      },
    ],
    responseMoves: ["Kxe7", "Kd6", "Kc5", "Bxa4", "Bb5"],
  }
  ,
  {
    fen: "r1bq1rk1/1p2npbp/p3p1p1/2ppN1Nn/3P1B2/2PBPQ2/PP3PPP/R3K2R w KQ - 6 12",
    correctMoves: [
      {
        from: "f3",
        to: "h5",
        san: "Qxh5"
      },
      {
        from: "d3",
        to: "h7",
        san: "Bxh7+"
      },
      {
        from: "e5",
        to: "f7",
        san: "N5xf7+"
      },
      {
        from: "g5",
        to: "f7",
        san: "Nxf7+"
      },
      {
        from: "f7",
        to: "d8",
        san: "Nxd8"
      },
    ],
    responseMoves: ["gxh5", "Kh8", "Rxf7", "Kxh7"],
  }
  ,
  {
    fen: "k7/3r2p1/p1N1Qn2/1P2B3/K7/1P6/P7/2q5 b - - 0 1",
    correctMoves: [
      {
        from: "a6",
        to: "b5",
        san: "axb5+"
      },
      {
        from: "d7",
        to: "d5",
        san: "Rd5+"
      },
      {
        from: "f6",
        to: "d7",
        san: "Nd7"
      },
    ],
    responseMoves: ["Kxb5", "Ka4"],
  }
  ,
  {
    fen: "2kr3r/1pp2Q2/3q3B/1Pb2P2/8/6P1/P3P2P/1R2KBNR b K - 0 26",
    correctMoves: [
      {
        from: "h8",
        to: "h6",
        san: "Rxh6"
      },
      {
        from: "h6",
        to: "h2",
        san: "Rxh2"
      },
      {
        from: "d6",
        to: "e6",
        san: "Qxe6"
      },
    ],
    responseMoves: ["Nf3", "Qe6+"],
  }
  ,
  {
    fen: "7r/pkn3pp/1b1Q1p2/4p3/1B2q3/1P6/PK3P2/2R2R2 b - - 4 32",
    correctMoves: [
      {
        from: "b6",
        to: "d4",
        san: "Bd4+"
      },
      {
        from: "e4",
        to: "e2",
        san: "Qe2+"
      },
      {
        from: "d4",
        to: "c3",
        san: "Bxc3+"
      },
    ],
    responseMoves: ["Bc3", "Rc2"],
  }
  ,
  {
    fen: "3rkbnr/pp3ppp/2n5/2p1P3/6b1/2P2N1P/PPK2PP1/RNB2B1R b k - 2 9",
    correctMoves: [
      {
        from: "g4",
        to: "f5",
        san: "Bf5+"
      },
      {
        from: "c5",
        to: "c4",
        san: "c4"
      },
      {
        from: "c6",
        to: "a5",
        san: "Na5+"
      },
      {
        from: "a5",
        to: "c4",
        san: "Nxc4"
      },
    ],
    responseMoves: ["Kb3", "Bxc4", "Ka4"],
  }
  ,
  {
    fen: "5k2/2r3pp/4Kp2/p1P1p3/r5P1/2R4P/5P2/2R5 b - - 1 35",
    correctMoves: [
      {
        from: "a4",
        to: "d4",
        san: "Rd4"
      },
      {
        from: "c7",
        to: "c6",
        san: "Rc6+"
      },
      {
        from: "g7",
        to: "g6",
        san: "g6#"
      },
    ],
    responseMoves: ["Rc4", "Kf5"],
  }
  ,
  {
    fen: "r1b1k1nr/ppp2ppp/4q3/3N4/P1Pn4/5B2/4QPPP/R3K1NR b KQkq - 3 14",
    correctMoves: [
      {
        from: "d4",
        to: "e2",
        san: "Nxe2"
      },
      {
        from: "e8",
        to: "e7",
        san: "Ke7"
      },
      {
        from: "e2",
        to: "g1",
        san: "Nxg1"
      },
      {
        from: "c8",
        to: "b7",
        san: "Bxb7"
      },
    ],
    responseMoves: ["Nxc7+", "Nxe6", "Bxb7"],
  }
  ,
  {
    fen: "8/8/p6k/q5p1/5Q2/3p1N2/8/5K2 w - g6 0 49",
    correctMoves: [
      {
        from: "f4",
        to: "f6",
        san: "Qf6+"
      },
      {
        from: "f3",
        to: "e5",
        san: "Ne5"
      },
      {
        from: "f1",
        to: "g2",
        san: "Kg2"
      },
      {
        from: "f6",
        to: "e5",
        san: "Qxe5"
      },
    ],
    responseMoves: ["Kh5", "Qa1+", "Qxe5"],
  }
  ,
  {
    fen: "r4rk1/2p2p2/p2p2qp/1pbNp3/3nP1b1/1B1P2Q1/PPP2PPB/R4RK1 w - - 5 19",
    correctMoves: [
      {
        from: "g3",
        to: "g4",
        san: "Qxg4+"
      },
      {
        from: "d5",
        to: "f6",
        san: "Nf6+"
      },
      {
        from: "f6",
        to: "g4",
        san: "Nxg4"
      },
    ],
    responseMoves: ["Qxg4", "Kg7"],
  }
  ,
  {
    fen: "r4k1r/2ppn2p/1p3P2/p5N1/2bp4/5Q2/q4P1P/1N4K1 w - - 0 24",
    correctMoves: [
      {
        from: "f3",
        to: "a8",
        san: "Qxa8+"
      },
      {
        from: "a8",
        to: "c8",
        san: "Qxc8#"
      },
    ],
    responseMoves: ["Nc8"],
  }
  ,
  {
    fen: "8/p1r1p2R/2N1pkp1/1p3q2/8/1P5P/P3QPP1/b5K1 w - - 1 29",
    correctMoves: [
      {
        from: "c6",
        to: "d8",
        san: "Nd8"
      },
      {
        from: "g1",
        to: "h2",
        san: "Kh2"
      },
      {
        from: "f2",
        to: "f4",
        san: "f4"
      },
      {
        from: "g2",
        to: "g3",
        san: "g3"
      },
    ],
    responseMoves: ["Rc1+", "Qe5+", "Qxf4+"],
  }
  ,
  {
    fen: "3r2k1/5pp1/4n2p/1R2Q3/3Nn3/4B2P/2q2PP1/6K1 b - - 2 25",
    correctMoves: [
      {
        from: "e6",
        to: "d4",
        san: "Nxd4"
      },
      {
        from: "c2",
        to: "d1",
        san: "Qd1+"
      },
      {
        from: "d1",
        to: "d4",
        san: "Qxd4"
      },
      {
        from: "d8",
        to: "d4",
        san: "Rxd4"
      },
    ],
    responseMoves: ["Bxd4", "Kh2", "Qxd4"],
  }
  ,
  {
    fen: "5rrk/pppb3p/3p4/3P1p1B/3p1p1q/3P1Q2/PPP1RP1P/4R2K b - - 7 19",
    correctMoves: [
      {
        from: "f8",
        to: "f6",
        san: "Rf6"
      },
      {
        from: "g8",
        to: "g1",
        san: "Rxg1+"
      },
      {
        from: "f6",
        to: "h6",
        san: "Rh6"
      },
      {
        from: "d7",
        to: "e8",
        san: "Bxe8"
      },
    ],
    responseMoves: ["Rg1", "Kxg1", "Re8+"],
  }
  ,
  {
    fen: "3r1rk1/2p5/1pn1q1p1/p2np2p/P1B1Q2P/2P3BR/1PK3P1/3R4 b - - 3 27",
    correctMoves: [
      {
        from: "d5",
        to: "e3",
        san: "Ne3+"
      },
      {
        from: "e6",
        to: "c4",
        san: "Qxc4"
      },
      {
        from: "c6",
        to: "d4",
        san: "Nd4+"
      },
      {
        from: "c4",
        to: "e2",
        san: "Qe2+"
      },
      {
        from: "e5",
        to: "d4",
        san: "exd4"
      },
      {
        from: "d4",
        to: "d3",
        san: "d3+"
      },
      {
        from: "d3",
        to: "e2",
        san: "dxe2+"
      },
    ],
    responseMoves: ["Qxe3", "b3", "Qxd4", "Rd2", "Rxe2", "Ke2"],
  }
  ,
  {
    fen: "3rk2r/4np1p/p5p1/2Q1b3/2P1q3/4B3/P4PPP/4RRK1 w k - 0 2",
    correctMoves: [
      {
        from: "e3",
        to: "g5",
        san: "Bg5"
      },
      {
        from: "c5",
        to: "a7",
        san: "Qa7"
      },
      {
        from: "a7",
        to: "d7",
        san: "Qxd7+"
      },
      {
        from: "e1",
        to: "e4",
        san: "Rxe4"
      }
    ],
    responseMoves: ["Bd6", "Rd7", "Kxd7"]
  }
  ,
  {
    fen: "8/1k1b4/p3p1P1/1pQp4/3P1P2/P1N3q1/KP4r1/1B6 w - - 1 2",
    correctMoves: [
      {
        from: "c3",
        to: "e4",
        san: "Ne4"
      },
      {
        from: "e4",
        to: "d6",
        san: "Nd6+"
      },
      {
        from: "c5",
        to: "d6",
        san: "Qxd6"
      },
    ],
    responseMoves: ["Qxf4", "Qxd6"]
  },
  {
    fen: "8/6kp/1p1rq2r/p2p1pn1/P1pP2NR/2P3P1/1P5P/4RQK1 b - - 7 34",
    correctMoves: [
      {
        from: "g5",
        to: "f3",
        san: "Nf3+"
      },
      {
        from: "e6",
        to: "e1",
        san: "Qxe1+"
      },
      {
        from: "f3",
        to: "e1",
        san: "Nxe1"
      },
      {
        from: "e1",
        to: "d3",
        san: "Nxd3+"
      },
    ],
    responseMoves: ["Kf2", "Qxe1", "Nxh6"]
  }
  ,
  {
    fen: "r4rk1/1pp2ppp/p1nbpq2/7b/3PB3/2P2N1P/PP3PP1/R1BQR1K1 w - - 1 13",
    correctMoves: [
      {
        from: "g2",
        to: "g4",
        san: "g4"
      },
      {
        from: "c1",
        to: "g5",
        san: "Bg5"
      },
      {
        from: "g5",
        to: "f6",
        san: "Bxf6"
      },
    ],
    responseMoves: ["Bg6", "Bxe4"]
  },
  {
    fen: "1k1rr3/p2p1pp1/1ppbq2p/3R4/Q3P3/2P1B1PP/PP3PK1/4R3 w - - 0 24",
    correctMoves: [
      {
        from: "d5",
        to: "d6",
        san: "Rxd6"
      },
      {
        from: "e3",
        to: "f4",
        san: "Bf4"
      },
      {
        from: "a4",
        to: "d4",
        san: "Qd4"
      },
      {
        from: "c3",
        to: "d4",
        san: "cxd4"
      },
      {
        from: "d4",
        to: "e5",
        san: "dxe5"
      },
    ],
    responseMoves: ["Qxd6", "Re5", "Qxd4", "d6"]
  }
  ,
  {
    fen: "q7/3bkpQR/1p2p3/3p4/1p6/1P1KP3/r4PP1/3R1B2 b - - 4 27",
    correctMoves: [
      {
        from: "d7",
        to: "b5",
        san: "Bb5+"
      },
      {
        from: "a2",
        to: "d2",
        san: "Rd2+"
      },
      {
        from: "d2",
        to: "d3",
        san: "Rxd3+"
      },
      {
        from: "a8",
        to: "a1",
        san: "Qa1+"
      },
      {
        from: "a1",
        to: "c3",
        san: "Qxc3#"
      },
    ],
    responseMoves: ["Kd4", "Bd3", "Rxd3", "Rc3"]
  },
  {
    fen: "rk2R3/7p/1p1p2p1/2b5/8/2PQ3P/5rP1/6K1 b - - 1 37",
    correctMoves: [
      {
        from: "b8",
        to: "c7",
        san: "Kc7"
      },
      {
        from: "c7",
        to: "d8",
        san: "Kd8"
      },
      {
        from: "a8",
        to: "a2",
        san: "Raa2"
      },
      {
        from: "d8",
        to: "e8",
        san: "Kxe8"
      },
    ],
    responseMoves: ["Re7+", "Kh2", "Re8+"]
  },
  {
    fen: "1Qq2k1r/6p1/p4p1p/4Nb2/5P2/8/1P2NKPP/8 w - - 2 28",
    correctMoves: [
      {
        from: "e5",
        to: "g6",
        san: "Ng6+"
      },
      {
        from: "b8",
        to: "c8",
        san: "Qxc8+"
      },
      {
        from: "g6",
        to: "h8",
        san: "Nxh8"
      },
    ],
    responseMoves: ["Kf8", "Bxc8"]
  },
  {
    fen: "8/5p1k/r4p1P/3P1K1R/4PPP1/8/8/3b4 b - - 0 43",
    correctMoves: [
      {
        from: "d1",
        to: "a4",
        san: "Ba4"
      },
      {
        from: "a6",
        to: "d6",
        san: "Rxd6"
      },
      {
        from: "a4",
        to: "d7",
        san: "Bd7#"
      },
    ],
    responseMoves: ["d6", "g5"]
  }
  ,
  {
    fen: "r4rk1/3R3p/p6p/2p5/2b2qP1/1PN4P/P1P2P2/1R1Q2K1 b - - 0 24",
    correctMoves: [
      {
        from: "f4",
        to: "f2",
        san: "Qxf2+"
      },
      {
        from: "f8",
        to: "f3",
        san: "Rf3"
      },
      {
        from: "g8",
        to: "g7",
        san: "Kg7"
      },
      {
        from: "c4",
        to: "d3",
        san: "Bxd3"
      },
      {
        from: "f2",
        to: "f3",
        san: "Qxf3+"
      },
    ],
    responseMoves: ["Kh1", "Rd8+", "Rd3", "Qxf3"],
  },
  {
    fen: "5rk1/1R6/2p1r1pp/5p2/5Q2/q6P/6P1/5R1K w - f6 0 37",
    correctMoves: [
      {
        from: "f4",
        to: "c7",
        san: "Qc7"
      },
      {
        from: "c7",
        to: "e7",
        san: "Qxe7"
      },
      {
        from: "b7",
        to: "e7",
        san: "Rxe7"
      },
    ],
    responseMoves: ["Re7", "Qxe7"],
  },
  {
    fen: "r1b2rk1/5p1p/7n/2p2qp1/p1PPN3/P1BBPP2/1P4PP/R4RK1 w - c6 0 19",
    correctMoves: [
      {
        from: "d4",
        to: "d5",
        san: "d5"
      },
      {
        from: "e4",
        to: "c5",
        san: "Nxc5"
      },
      {
        from: "c5",
        to: "d3",
        san: "Nxd3"
      },
    ],
    responseMoves: ["f6", "Qxd3"],
  },
  {
    fen: "4qrk1/n4pbp/B2p1np1/p2P2B1/1p6/1P3N1P/P3QPP1/2R3K1 w - - 1 26",
    correctMoves: [
      {
        from: "e2",
        to: "e8",
        san: "Qxe8"
      },
      {
        from: "c1",
        to: "c7",
        san: "Rc7"
      },
      {
        from: "g5",
        to: "e3",
        san: "Be3"
      },
      {
        from: "c7",
        to: "a7",
        san: "Rxa7"
      },
      {
        from: "e3",
        to: "a7",
        san: "Bxa7"
      },
    ],
    responseMoves: ["Rxe8", "Ra8", "Nxd5", "Rxa7"],
  },
  {
    fen: "r3rk2/5p2/p3P2R/q2b1p2/2pQ4/7N/P1PP4/1K6 w - - 1 31",
    correctMoves: [
      {
        from: "d4",
        to: "f6",
        san: "Qf6"
      },
      {
        from: "b1",
        to: "a1",
        san: "Ka1"
      },
      {
        from: "a1",
        to: "b1",
        san: "Kxb1"
      },
      {
        from: "b1",
        to: "a1",
        san: "Ka1"
      },
      {
        from: "a1",
        to: "b1",
        san: "Kxb1"
      },
    ],
    responseMoves: ["Rab8+", "Rb1+", "Rb8+", "Rb1+"],
  },
  {
    fen: "2k2bnr/1pp2b1p/p4p2/5N2/5PQP/P1K5/1P1r1qP1/R7 w - - 0 22",
    correctMoves: [
      {
        from: "f5",
        to: "d6",
        san: "Nd6+"
      },
      {
        from: "g4",
        to: "c8",
        san: "Qc8+"
      },
      {
        from: "d6",
        to: "f5",
        san: "Nf5#"
      },
    ],
    responseMoves: ["Kd8", "Ke7"],
  },
  {
    fen: "8/6k1/6p1/2P3Kp/BP5P/5N2/1b3P2/8 b - - 0 40",
    correctMoves: [
      {
        from: "b2",
        to: "c1",
        san: "Bc1+"
      },
      {
        from: "c1",
        to: "d2",
        san: "Bxd2+"
      },
      {
        from: "d2",
        to: "c3",
        san: "Bc3"
      },
      {
        from: "c3",
        to: "d2",
        san: "Bd2#"
      },
    ],
    responseMoves: ["Nd2", "f4", "f5"],
  },
  {
    fen: "8/pQ1P1pp1/1p3k2/7K/r6N/6p1/4P3/5b2 b - - 0 36",
    correctMoves: [
      {
        from: "g7",
        to: "g6",
        san: "g6+"
      },
      {
        from: "f7",
        to: "g6",
        san: "fxg6+"
      },
      {
        from: "a4",
        to: "h4",
        san: "Rh4#"
      },
    ],
    responseMoves: ["Nxg6", "Kh6"],
  },
  {
    fen: "r1b1k3/pp1p1p1Q/4p3/1B1pPP2/1b2n3/2N4P/PPP1K1PR/q7 w q - 0 20",
    correctMoves: [
      {
        from: "h7",
        to: "g8",
        san: "Qg8+"
      },
      {
        from: "f5",
        to: "f6",
        san: "f6+"
      },
      {
        from: "e5",
        to: "f6",
        san: "exf6+"
      },
      {
        from: "g8",
        to: "f8",
        san: "Qf8+"
      },
      {
        from: "f8",
        to: "b4",
        san: "Qxb4"
      },
      {
        from: "b4",
        to: "f4",
        san: "Qf4+"
      },
    ],
    responseMoves: ["Ke7", "Nxf6", "Kd6", "Kc7", "Qg1"],
  },
  {
    fen: "r5k1/1pp4p/pbn2pp1/4qNQ1/5R1P/3B4/1PP2PP1/6K1 w - - 0 2",
    correctMoves: [
      {
        from: "g5",
        to: "h6",
        san: "Qh6"
      },
      {
        from: "d3",
        to: "f5",
        san: "Bxf5"
      },
      {
        from: "f4",
        to: "g4",
        san: "Rg4+"
      },
      {
        from: "f5",
        to: "g6",
        san: "Bxg6+"
      },
      {
        from: "h6",
        to: "g6",
        san: "Qxg6+"
      },
    ],
    responseMoves: ["gxf5", "Ne7", "Ng6", "hxg6"],
  },
  {
    fen: "r1bq3r/ppp1kNpp/2npBp1n/2b1p2Q/4P3/3P4/PPP2PPP/RNB1K2R b KQ - 5 9",
    correctMoves: [
      {
        from: "d8",
        to: "e8",
        san: "Qe8"
      },
      {
        from: "a8",
        to: "c8",
        san: "Rxc8"
      },
      {
        from: "g7",
        to: "h6",
        san: "gxh6"
      },
    ],
    responseMoves: ["Bxc8", "Bxh6"],
  },
  {
    fen: "2r2r2/p4kpQ/2p1p2R/1pq1Ppp1/5nP1/P4K2/1P2B3/3R4 w - - 0 2",
    correctMoves: [
      {
        from: "h6",
        to: "f6",
        san: "Rf6+"
      },
      {
        from: "h7",
        to: "g7",
        san: "Qxg7"
      },
      {
        from: "g7",
        to: "d7",
        san: "Qd7+"
      },
      {
        from: "d7",
        to: "c8",
        san: "Qxc8+"
      },
    ],
    responseMoves: ["Ke8", "Rxf6", "Kf8"],
  },
  {
    fen: "r2k1r2/p1pq1p1b/1pB5/8/1n6/7N/1KP2PPP/3RR3 w - - 3 20",
    correctMoves: [
      {
        from: "d1",
        to: "d7",
        san: "Rxd7+"
      },
      {
        from: "d7",
        to: "f7",
        san: "Rxf7"
      },
      {
        from: "f7",
        to: "f8",
        san: "Rxf8+"
      },
    ],
    responseMoves: ["Kc8", "Nxc6"],
  },
  {
    fen: "r2qkb1r/ppp2p1p/4bnp1/3np1B1/2B5/2PP2Q1/PP3PPP/RN2K1NR w KQkq - 2 10",
    correctMoves: [
      {
        from: "c4",
        to: "d5",
        san: "Bxd5"
      },
      {
        from: "g3",
        to: "e5",
        san: "Qxe5"
      },
      {
        from: "g5",
        to: "f6",
        san: "Bxf6"
      },
      {
        from: "f6",
        to: "e5",
        san: "Bxe5"
      },
    ],
    responseMoves: ["Bxd5", "Qe7", "Qxe5"],
  },
  {
    fen: "8/8/8/8/5K2/k7/p3Q3/8 w - - 2 53",
    correctMoves: [
      {
        from: "e2",
        to: "e5",
        san: "Qe5"
      },
    ],
    responseMoves: [],
  },
  {
    fen: "r1r3k1/6b1/4p2p/3n4/4N3/Pp4N1/P5PP/1KB1R2R b - - 0 1",
    correctMoves: [
      {
        from: "b3",
        to: "a2",
        san: "bxa2+"
      },
      {
        from: "d5",
        to: "b4",
        san: "Nb4+"
      },
      {
        from: "b4",
        to: "c2",
        san: "Nc2"
      },
      {
        from: "c2",
        to: "d4",
        san: "Nd4+"
      },
      {
        from: "d4",
        to: "e2",
        san: "Nxe2"
      },
    ],
    responseMoves: ["Kxa2", "Kb3", "Re2", "Ka2"],
  },
  {
    fen: "8/7k/8/8/5pK1/3n1P1P/8/8 b - - 2 51",
    correctMoves: [
      {
        from: "h7",
        to: "h6",
        san: "Kh6"
      },
      {
        from: "h6",
        to: "h5",
        san: "Kh5"
      },
      {
        from: "h5",
        to: "h4",
        san: "Kh4"
      },
      {
        from: "h4",
        to: "h3",
        san: "Kxh3"
      },
      {
        from: "h3",
        to: "g2",
        san: "Kg2"
      },
      {
        from: "g2",
        to: "g3",
        san: "Kg3"
      },
    ],
    responseMoves: ["Kf5", "Ke4", "Kxd3", "Kd4", "Ke4"],
  },
  {
    fen: "2r4r/6k1/8/p2p1p1p/Pp1Pp3/8/1q1B2Q1/3RK3 b - - 1 35",
    correctMoves: [
      {
        from: "g7",
        to: "f7",
        san: "Kf7"
      },
      {
        from: "b2",
        to: "d4",
        san: "Qxd4"
      },
      {
        from: "d4",
        to: "f6",
        san: "Qf6"
      },
    ],
    responseMoves: ["Qg5", "Qxf5+"],
  },
  {
    fen: "8/p1p5/8/2p1p1pp/P4k2/2PK1B1P/2P3P1/6b1 b - - 1 35",
    correctMoves: [
      {
        from: "e5",
        to: "e4",
        san: "e4+"
      },
      {
        from: "c5",
        to: "c4",
        san: "c4+"
      },
      {
        from: "f4",
        to: "e4",
        san: "Kxe4"
      },
    ],
    responseMoves: ["Bxe4", "Kxc4"],
  },
  {
    fen: "6k1/3B1p2/3p2p1/p1qP2P1/np6/4Q3/PbP5/K1BR4 w - - 0 2",
    correctMoves: [
      {
        from: "c1",
        to: "b2",
        san: "Bxb2"
      },
      {
        from: "b2",
        to: "f6",
        san: "Bf6"
      },
      {
        from: "f6",
        to: "c3",
        san: "Bxc3"
      },
    ],
    responseMoves: ["Qxe3", "Qc3+"],
  },
  {
    fen: "Q7/pp3rp1/2bPp1R1/2P1k3/P7/1P1B1n2/7P/7K b - a3 0 33",
    correctMoves: [
      {
        from: "f3",
        to: "g5",
        san: "Ng5+"
      },
      {
        from: "c6",
        to: "e4",
        san: "Bxe4+"
      },
      {
        from: "g5",
        to: "h3",
        san: "Nh3#"
      },
    ],
    responseMoves: ["Be4", "Kg1"],
  },
  {
    fen: "3q3k/1b5p/p1n2Np1/1p1Q1P2/3p3P/P2Br3/1PP3P1/5R1K b - - 0 1",
    correctMoves: [
      {
        from: "d8",
        to: "f6",
        san: "Qxf6"
      },
      {
        from: "e3",
        to: "e1",
        san: "Re1"
      },
      {
        from: "e1",
        to: "f1",
        san: "Rxf1+"
      },
    ],
    responseMoves: ["fxg6", "Kg1"],
  },
  {
    fen: "8/8/4K1kp/5p1p/8/4P1P1/8/8 b - - 5 43",
    correctMoves: [
      {
        from: "g6",
        to: "g5",
        san: "Kg5"
      },
      {
        from: "g5",
        to: "g4",
        san: "Kg4"
      },
      {
        from: "g4",
        to: "g3",
        san: "Kxg3"
      },
      {
        from: "h5",
        to: "h4",
        san: "h4"
      },
      {
        from: "h4",
        to: "h3",
        san: "h3"
      },
    ],
    responseMoves: ["Kf7", "Kg6", "Kxf5", "e4"],
  },
  {
    fen: "1k1rq2r/pp3ppp/4b2n/np1N4/8/2Q2NP1/PP3PP1/2KRR3 w - - 0 23",
    correctMoves: [
      {
        from: "c3",
        to: "e5",
        san: "Qe5+"
      },
      {
        from: "d5",
        to: "c7",
        san: "Nc7+"
      },
    ],
    responseMoves: ["Ka8"],
  },
  {
    fen: "r1bqk1nr/ppp2pp1/2n1p2p/3p4/3P1BQ1/P1P1P3/2P2PPP/R3KBNR b KQkq - 2 7",
    correctMoves: [
      {
        from: "g7",
        to: "g5",
        san: "g5"
      },
      {
        from: "h6",
        to: "h5",
        san: "h5"
      },
      {
        from: "h5",
        to: "h4",
        san: "h4"
      },
    ],
    responseMoves: ["Be5", "Qg3"],
  },
  {
    fen: "3K4/2p5/2q5/3k4/P7/Q7/8/8 b - - 2 55",
    correctMoves: [
      {
        from: "c6",
        to: "d6",
        san: "Qd6+"
      },
      {
        from: "d5",
        to: "d6",
        san: "Kxd6"
      },
      {
        from: "c7",
        to: "c5",
        san: "c5"
      },
      {
        from: "d6",
        to: "c6",
        san: "Kc6"
      },
    ],
    responseMoves: ["Qxd6+", "a5", "a6"],
  },
  {
    fen: "r3k2r/ppp3pp/3p4/2nPqb1N/2P5/3P4/PP3PPP/R1BQ1K1R w kq - 2 17",
    correctMoves: [
      {
        from: "d3",
        to: "d4",
        san: "d4"
      },
      {
        from: "d1",
        to: "d3",
        san: "Qxd3"
      },
      {
        from: "d4",
        to: "e5",
        san: "dxe5"
      },
    ],
    responseMoves: ["Bd3+", "Nxd3"],
  },
  {
    fen: "r4rk1/7p/p2p4/2pPb1q1/Q1PpP1P1/3B1P2/P7/1R2BRK1 b - - 0 1",
    correctMoves: [
      {
        from: "g5",
        to: "e3",
        san: "Qe3+"
      },
      {
        from: "e3",
        to: "f4",
        san: "Qf4"
      },
      {
        from: "f4",
        to: "g3",
        san: "Qg3+"
      },
      {
        from: "f8",
        to: "f3",
        san: "Rxf3"
      },
    ],
    responseMoves: ["Kg2", "Rf2", "Kf1"],
  },
  {
    fen: "8/1p1k4/8/4pPQP/1RPp4/q2P1P1P/r1PK4/6NR b - - 4 31",
    correctMoves: [
      {
        from: "a3",
        to: "c3",
        san: "Qc3+"
      },
      {
        from: "c3",
        to: "c2",
        san: "Qxc2+"
      },
      {
        from: "c2",
        to: "d2",
        san: "Qxd2+"
      },
    ],
    responseMoves: ["Ke2", "Qd2"],
  },
  {
    fen: "rnbqkbnr/p6p/2p5/3Pppp1/4P3/8/PPP2PPP/R1BQKBNR w KQkq f6 0 8",
    correctMoves: [
      {
        from: "d1",
        to: "h5",
        san: "Qh5+"
      },
      {
        from: "c1",
        to: "g5",
        san: "Bxg5"
      },
      {
        from: "c2",
        to: "c3",
        san: "c3"
      },
    ],
    responseMoves: ["Kd7", "Bb4+"],
  },
  {
    fen: "2R2b1r/pk2p3/1q2Qp1p/4p1p1/3rP3/P6B/1P3P1P/2K4R b - - 3 29",
    correctMoves: [
      {
        from: "b6",
        to: "e6",
        san: "Qxe6"
      },
      {
        from: "d4",
        to: "d6",
        san: "Rd6"
      },
      {
        from: "e7",
        to: "e6",
        san: "e6"
      },
      {
        from: "d6",
        to: "e6",
        san: "Rxe6"
      },
    ],
    responseMoves: ["Bxe6", "Bf5", "Bxe6"],
  },
  {
    fen: "6k1/2q3p1/3R1p1p/3p4/3P4/2r2PQP/6PK/8 b - - 0 34",
    correctMoves: [
      {
        from: "c3",
        to: "c1",
        san: "Rc1"
      },
      {
        from: "c1",
        to: "h1",
        san: "Rh1+"
      },
      {
        from: "c7",
        to: "g3",
        san: "Qxg3"
      },
    ],
    responseMoves: ["Kxd5", "Kxh1"],
  },
  {
    fen: "q3kb1r/r1pn1pp1/pp1pp3/4P3/2BPbP2/6Pp/PPPNQB1P/3R1RK1 b k - 3 15",
    correctMoves: [
      {
        from: "e4",
        to: "d3",
        san: "Bd3"
      },
      {
        from: "a8",
        to: "f3",
        san: "Qxf3"
      },
      {
        from: "d3",
        to: "c4",
        san: "Bxc4"
      },
    ],
    responseMoves: ["Qf3", "Nxf3"],
  },
  {
    fen: "2r3k1/2r2p1p/p3p2p/1p2PnP1/1P2NP2/3R4/2P5/2KR4 w - - 0 2",
    correctMoves: [
      {
        from: "d3",
        to: "d8",
        san: "Rd8+"
      },
      {
        from: "g5",
        to: "h6",
        san: "gxh6+"
      },
      {
        from: "d1",
        to: "h1",
        san: "Rh1+"
      },
      {
        from: "h1",
        to: "g1",
        san: "Rg1+"
      },
    ],
    responseMoves: ["Kg7", "Kxh6", "Kg6"],
  },
  {
    fen: "4Q3/pb3rpp/5k2/2p5/5qP1/P1P1nP2/2P2R1P/R5K1 b - - 5 27",
    correctMoves: [
      {
        from: "b7",
        to: "f3",
        san: "Bxf3"
      },
      {
        from: "f6",
        to: "g5",
        san: "Kg5"
      },
      {
        from: "f4",
        to: "f3",
        san: "Qxf3"
      },
      {
        from: "f7",
        to: "f3",
        san: "Rxf3"
      },
    ],
    responseMoves: ["Qc6+", "Rxf3", "Qxf3"],
  },
  {
    fen: "rnq1k2r/pbppn1pp/1p1P1p2/4N3/1bB5/2N5/PPP2PPP/R1BQK2R b KQkq - 0 9",
    correctMoves: [
      {
        from: "c7",
        to: "d6",
        san: "cxd6"
      },
      {
        from: "g7",
        to: "g6",
        san: "g6"
      },
      {
        from: "e8",
        to: "d8",
        san: "Kd8"
      },
    ],
    responseMoves: ["Qh5+", "Bf7+"],
  },
  {
    fen: "r1bqkb2/1pp1pr1p/p2p4/7Q/2n1N3/4P3/PPPP1PPP/R1B2RK1 w q - 2 12",
    correctMoves: [
      {
        from: "e4",
        to: "g5",
        san: "Ng5"
      },
      {
        from: "f2",
        to: "f4",
        san: "f4"
      },
      {
        from: "g5",
        to: "f7",
        san: "Nxf7"
      },
      {
        from: "f7",
        to: "d8",
        san: "Nxd8"
      },
      {
        from: "f4",
        to: "e5",
        san: "fxe5"
      },
    ],
    responseMoves: ["Ne5", "Bg4", "Bxh5", "Rxd8"],
  },
  {
    fen: "8/8/3Pk1p1/1p2P3/b2b1P2/3N2B1/6K1/8 w - - 0 41",
    correctMoves: [
      {
        from: "g3",
        to: "f2",
        san: "Bf2"
      },
      {
        from: "f4",
        to: "f5",
        san: "f5+"
      },
      {
        from: "d3",
        to: "f4",
        san: "Nf4+"
      },
      {
        from: "d6",
        to: "d7",
        san: "d7"
      },
    ],
    responseMoves: ["Bc2", "gxf5", "Kxe5"],
  },
  {
    fen: "3r2r1/p1Q1kp2/3pp2p/8/3P1pqP/6P1/PPP2P2/R4RK1 b - - 1 21",
    correctMoves: [
      {
        from: "d8",
        to: "d7",
        san: "Rd7"
      },
      {
        from: "g4",
        to: "h3",
        san: "Qh3"
      },
      {
        from: "f4",
        to: "g3",
        san: "fxg3"
      },
    ],
    responseMoves: ["Qc3", "Qf3"],
  },
  {
    fen: "8/8/8/2p5/1kp5/1p6/8/B1K5 b - - 1 49",
    correctMoves: [
      {
        from: "c4",
        to: "c3",
        san: "c3"
      },
      {
        from: "b4",
        to: "c4",
        san: "Kc4"
      },
      {
        from: "c3",
        to: "b2",
        san: "cxb2"
      },
    ],
    responseMoves: ["Kb1", "Bb2"],
  },
  {
    fen: "3kr3/1ppqbR2/p1n2N1p/8/3P4/P1N5/1PP1Q1PP/6K1 b - - 1 22",
    correctMoves: [
      {
        from: "d7",
        to: "d4",
        san: "Qxd4+"
      },
      {
        from: "e7",
        to: "f6",
        san: "Bxf6"
      },
      {
        from: "f6",
        to: "d4",
        san: "Bxd4+"
      },
    ],
    responseMoves: ["Qf2", "Qxd4"],
  },
  {
    fen: "8/6PQ/1kp1p3/p2pP3/4B3/2K3P1/PPP2q2/8 b - - 2 39",
    correctMoves: [
      {
        from: "f2",
        to: "e3",
        san: "Qe3+"
      },
      {
        from: "e3",
        to: "e1",
        san: "Qe1+"
      },
      {
        from: "e1",
        to: "b4",
        san: "Qb4#"
      },
    ],
    responseMoves: ["Bd3", "Kb3"],
  },
  {
    fen: "r3k2r/p1pqbppp/1pn1pn2/2Pp4/1P1PbP2/P2BPN2/6PP/RNBQ1RK1 w kq - 0 11",
    correctMoves: [
      {
        from: "d3",
        to: "b5",
        san: "Bb5"
      },
      {
        from: "f3",
        to: "e5",
        san: "Ne5"
      },
      {
        from: "b5",
        to: "d7",
        san: "Bxd7+"
      },
    ],
    responseMoves: ["a6", "Nxe5"],
  },
  {
    fen: "k2r4/1q3pQ1/p3p1p1/2N3Pp/2P4P/p2rR3/8/4R1K1 b - - 2 48",
    correctMoves: [
      {
        from: "d3",
        to: "e3",
        san: "Rxe3"
      },
      {
        from: "e3",
        to: "e1",
        san: "Rxe1+"
      },
      {
        from: "e1",
        to: "b1",
        san: "Rb1"
      },
      {
        from: "a3",
        to: "a2",
        san: "a2"
      },
      {
        from: "a2",
        to: "a1",
        san: "a1=Q"
      },
      {
        from: "b1",
        to: "a1",
        san: "Rxa1"
      },
    ],
    responseMoves: ["Nxb7", "Kf2", "Nxd8", "Nxe6", "Qxa1"],
  },
  {
    fen: "r1b1qrk1/pppp1ppp/2n5/2b5/2B1P1n1/2N5/PPPB1PPP/R2QK1NR w KQ - 11 9",
    correctMoves: [
      {
        from: "d1",
        to: "g4",
        san: "Qxg4"
      },
      {
        from: "g4",
        to: "h5",
        san: "Qh5"
      },
      {
        from: "e1",
        to: "f2",
        san: "Kxf2"
      },
    ],
    responseMoves: ["d5", "Bf2+"],
  },
];

export default hardPuzzles;