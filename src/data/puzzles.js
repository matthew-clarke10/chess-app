const puzzles = [
  {
    fen: "r1b2bkr/ppp3pp/2n5/3qp3/2B5/8/PPPP1PPP/RNB1K2R w KQ - 0 2",
    correctMoves: [
      {
        from: "c4",
        to: "d5",
        san: "Bxd5+"
      },
      {
        from: "d5",
        to: "e6",
        san: "Bxe6#"
      },
    ],
    responseMoves: ["Be6"],
  },
  {
    fen: "rn1r2k1/1pq2p1p/p2p1bpB/3P4/P3Q3/2PB4/5PPP/2R1R1K1 w - - 1 2",
    correctMoves: [
      {
        from: "e4",
        to: "e8",
        san: "Qe8+"
      },
      {
        from: "e1",
        to: "e8",
        san: "Rxe8#"
      },
    ],
    responseMoves: ["Rxe8"],
  },
];

export default puzzles;