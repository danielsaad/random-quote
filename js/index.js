function getRandomQuote() {
    
    var quotes = [
        {
            quote : "It always seems impossible until its done",
            author : "Nelson Mandela"
        },
        {
            quote : "Good, better, best. Never let it rest. 'Til your good is better and your better is best",
            author : "St. Jerome"
        },
        {
            quote : "Nadie nace sabiendo, todo lo aprendemos con el tiempo",
            author : "Juan Manuel Fangio"
        },
        {
            quote : "When you are fitted in a racing car and you race to win, second or third place is not enough",
            author : "Ayrton Senna"
        },
        {
            quote : "And so you touch this limit, something happens and you suddenly can go a little bit further. With your mind power, your determination, your instinct, and the experience as well, you can fly very high",
            author : "Ayrton Senna"
        },
        {
            quote : "I have no idols. I admire work, dedication and competence",
            author : "Ayrton Senna"
        },
        {
            quote : "Se você quer ser bem sucedido, precisa ter dedicação total, buscar seu último limite e dar o melhor de si",
            author : "Ayrton Senna"
        },
        {
            quote : "Giving up is something a Lauda doesn't do",
            author : "Niki Lauda"
        },
        {
            quote : "I always go extreme ways",
            author : "Niki Lauda"
        },
        {
            quote : "A person who never made a mistake never tried anything new",
            author : "Albert Einstein"
        },
        {
            quote : "It does not matter how slowly you go as long as you do not stop",
            author : "Confucius"
        },
        {
            quote : "I will, in fact, claim that the difference between a bad programmer and a good one is whether he considers his code or his data structures more important. Bad programmers worry about the code. Good programmers worry about data structures and their relationships",
            author : "Linus Torvalds"
        },
        {
            quote : "How tall are you? So I can know in advance how far to step back when you fall down!",
            author : "Muhammad Ali"
        },
        {
            quote : "I hated every minute of training, but I said, 'Don't quit. Suffer now and live the rest of your life as a champion'",
            author : "Muhammad Ali"
        },
        {
            quote : "I done wrestled with an alligator, I done tussled with a whale; handcuffed lightning, thrown thunder in jail; only last week, I murdered a rock, injured a stone, hospitalized a brick; I'm so mean I make medicine sick",
            author : "Muhammad Ali"
        },
        {
            quote: "Never again say that I’m going to be defeated. Never again make me the underdog. Until I’m about 50 years old, then you might get me.",
            quote: "Muhammad Ali"
        },
        {
            quote : "The fight is won or lost far away from witnesses   behind the lines, in the gym, and out there on the road, long before I dance under those lights",
            author : "Muhammad Ali"
        },
        {
            quote : "It isn't the mountains ahead to climb that wear you out; it's the pebble in your shoe",
            author : "Muhammad Ali"
        },
        {
            quote : "If you lose a big fight, it will worry you all of your life. It will plague you   until you get your revenge",
            author : "Muhammad Ali"
        },
        {
            quote : "Only a man who knows what it is like to be defeated can reach down to the bottom of his soul and come up with the extra ounce of power it takes to win when the match is even",
            author : "Muhammad Ali"
        },
        {
            quote : "It's lack of faith that makes people afraid of meeting challenges, and I believed in myself",
            author : "Muhammad Ali"
        },
        {
            quote : "Champions aren't made in gyms. Champions are made from something they have deep inside them   a desire, a dream, a vision. They have to have the skill, and the will. But the will must be stronger than the skill",
            author : "Muhammad Ali"
        },
        {
            quote : "Always be yourself, express yourself, have faith in yourself, do not go out and look for a successful personality and duplicate it",
            author : "Bruce Lee"
        },
        {
            quote : "Mistakes are always forgivable, if one has the courage to admit them",
            author : "Bruce Lee"
        },
        {
            quote : "If you always put limit on everything you do, physical or anything else. It will spread into your work and into your life. There are no limits. There are only plateaus, and you must not stay there, you must go beyond them",
            author : "Bruce Lee"
        },
        {
            quote : "A wise man can learn more from a foolish question than a fool can learn from a wise answer",
            author : "Bruce Lee"
        },
        {
            quote : "To hell with circumstances; I create opportunities",
            author : "Bruce Lee"
        },
        {
            quote : "O medo de perder tira a vontade de ganhar",
            author : "Zico"
        },
        {
            quote : "If you are not here to win, how can you even justify being here?",
            author : "Mario Andretti"
        },
        {
            quote : "No Matter where you turn, there is a decision to be made. Life or death. Right or wrong. Regular or Crunchy",
            author : "Frank Castle a.k.a The Punisher"
        },
        {
            quote : "With great power comes great responsibility",
            author : "Uncle Ben"
        },
        {
            quote : "I think life is full of challenges and problems. I don't believe that anyone is perfect. We all make mistakes. It's not a bed of roses, and you have to work real hard at it",
            author : "Nigel Mansell"
        },
        {
            quote : "The preparation, commitment and desire to win will be no less than the last time I drove a grand prix car in anger",
            author : "Nigel Mansell"
        },
        {
            quote : "As pessoas boas devem amar seus inimigos",
            author : "Seu Madruga"
        },
        {
            quote : "A vingança nunca é plena, mata a alma e a envenena",
            author : "Seu Madruga"
        },
        {
            quote : "A virtude do bem viver está nos princípios morais, minha filha",
            author : "Seu Madruga"
        },
        {
            quote : "Se quiser vir a ser alguém, que devore os livros",
            author : "Seu Madruga"
        },
        {
            quote : "Ai que burro, dá zero para ele",
            author : "Chaves"
        },
        {
            quote : "Teria sido melhor ir ver o filme do Pelé",
            author : "Chaves"
        },
        {
            quote : "Palma, palma! Não priemos cânico!",
            author : "Chapolin"
        },
        {
            quote : "Suspeitei desde o princípio",
            author : "Chapolin"
        },
        {
            quote : "Todos os meus movimentos são friamente calculados",
            author : "Chapolin"
        },
        {
            quote : "Não contavam com a minha astúcia!",
            author : "Chapolin"
        },
        {
            quote : "Era exatamente o que eu ia dizer!",
            author : "Chapolin"
        },
        {
            quote : "Não tenho medo dos grandões de 2 metros e sim dos baixinhos que fazem cálculos difíceis",
            author : "Chapolin"
        },
        {
            quote : "Sometimes it is the people no one can imagine anything of who do the things no one can imagine",
            author : "Alan Turing"
        },
        {
            quote : "We can only see a short distance ahead, but we can see plenty there that needs to be done",
            author : "Alan Turing"
        },
        {
            quote : "Those who can imagine anything, can create the impossible",
            author : "Alan Turing"
        },
        {
            quote : "If a machine is expected to be infallible, it cannot also be intelligent",
            author : "Alan Turing"
        },
        {
            quote: "I will drive flat out all the time ... I love racing.",
            quote: "Gilles Villeneuve"
        },
        {
            quote: "I've missed more than 9000 shots in my career. I've lost almost 300 games. 26 times, I've been trusted to take the game winning shot and missed. I've failed over and over and over again in my life. And that is why I succeed.",
            quote: "Michael Jordan"
        },
        {
            quote: "A champion is someone who gets up when he can't.",
            quote: "Jack Dempsey"
        }
    ]


    var index = Math.floor(Math.random() *quotes.length);
    return quotes[index]
}
function getRandomNameView() {
    var randomName = document.querySelector("#random-quote");
    randomName.className = "";
    author = getRandomQuote()
    randomName.innerHTML = quote.quote + "<br>" + quote.author ;
    randomName.className = "show-name";
}
function setupListeners() {
    document.addEventListener('click', function (ev) {
        getRandomNameView();
    });
}
function init() {
    setupListeners();
    getRandomNameView();
}
init();