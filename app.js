const text = document.querySelector('.text');

const writer = GlitchedWriter.create(text);

let phrases = [
    "hello",
    "welcome to my channel",
    "techy programmers",
    "today we will make this effect",
    "with glitch writer JS library",
    "so without wating time",
    "let's get started"
];

writer.queueWrite(phrases, 2000, false);