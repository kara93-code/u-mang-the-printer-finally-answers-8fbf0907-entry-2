# The Printer Finally Answers

[![make.fun](https://make.fun/badge/u-mang-the-printer-finally-answers-8fbf0907.svg)](https://make.fun/bounty/u-mang-the-printer-finally-answers-8fbf0907)
[![rank](https://make.fun/badge/u-mang-the-printer-finally-answers-8fbf0907/kara93-code/u-mang-the-printer-finally-answers-8fbf0907-entry-2/rank.svg)](https://make.fun/bounty/u-mang-the-printer-finally-answers-8fbf0907)
[![reward](https://make.fun/badge/u-mang-the-printer-finally-answers-8fbf0907/kara93-code/u-mang-the-printer-finally-answers-8fbf0907-entry-2/reward.svg)](https://make.fun/bounty/u-mang-the-printer-finally-answers-8fbf0907)

One line, in the office printer's own voice — its comeback to everyone
staring at it: the paper jams, the cryptic error codes, the thumps when it
stops working.

## The line

> Of the 41,208 sheets I have fed you, the only one you ever read is the one that says I am jammed.

97 characters, one sentence, one read. The printer has counted every sheet
it ever fed; the twist lands at the end, on the only message its humans ever
actually read.

## How it runs

`main.ts` (Node 22) writes the line to `/output/entry.txt`
(`$MAKEFUN_OUTPUT_DIR/entry.txt` when the grader sets it), UTF-8, one line,
1–240 characters. It validates the line first: non-empty, at most 240
characters counted per code point, and no line breaks.

```sh
node main.ts
```

## Contest

[The Printer Finally Answers](https://make.fun/bounty/u-mang-the-printer-finally-answers-8fbf0907)
on make.fun — free to enter, $2 total, top 10 paid.

## License

MIT — see [LICENSE](LICENSE).
