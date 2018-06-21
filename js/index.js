function getRandomQuote() {
    
    var quotes = [
        {
            author : "It always seems impossible until its done",
            quote : "Nelson Mandela"
        },
        {
            author : "Good, better, best. Never let it rest. 'Til your good is better and your better is best",
            quote : "St. Jerome"
        },
        {
            author : "Nadie nace sabiendo, todo lo aprendemos con el tiempo",
            quote : "Juan Manuel Fangio"
        },
        {
            author : "When you are fitted in a racing car and you race to win, second or third place is not enough",
            quote : "Ayrton Senna"
        },
        {
            author : "And so you touch this limit, something happens and you suddenly can go a little bit further. With your mind power, your determination, your instinct, and the experience as well, you can fly very high",
            quote : "Ayrton Senna"
        },
        {
            author : "I have no idols. I admire work, dedication and competence",
            quote : "Ayrton Senna"
        },
        {
            author : "Se você quer ser bem sucedido, precisa ter dedicação total, buscar seu último limite e dar o melhor de si",
            quote : "Ayrton Senna"
        },
        {
            author : "Giving up is something a Lauda doesn't do",
            quote : "Niki Lauda"
        },
        {
            author : "I always go extreme ways",
            quote : "Niki Lauda"
        },
        {
            author : "A person who never made a mistake never tried anything new",
            quote : "Albert Einstein"
        },
        {
            author : "It does not matter how slowly you go as long as you do not stop",
            quote : "Confucius"
        },
        {
            author : "I will, in fact, claim that the difference between a bad programmer and a good one is whether he considers his code or his data structures more important. Bad programmers worry about the code. Good programmers worry about data structures and their relationships",
            quote : "Linus Torvalds"
        },
        {
            author : "How tall are you? So I can know in advance how far to step back when you fall down!",
            quote : "Muhammad Ali"
        },
        {
            author : "I hated every minute of training, but I said, 'Don't quit. Suffer now and live the rest of your life as a champion'",
            quote : "Muhammad Ali"
        },
        {
            author : "I done wrestled with an alligator, I done tussled with a whale; handcuffed lightning, thrown thunder in jail; only last week, I murdered a rock, injured a stone, hospitalised a brick; I'm so mean I make medicine sick",
            quote : "Muhammad Ali"
        },
        {
            author : "The fight is won or lost far away from witnesses   behind the lines, in the gym, and out there on the road, long before I dance under those lights",
            quote : "Muhammad Ali"
        },
        {
            author : "It isn't the mountains ahead to climb that wear you out; it's the pebble in your shoe",
            quote : "Muhammad Ali"
        },
        {
            author : "If you lose a big fight, it will worry you all of your life. It will plague you   until you get your revenge",
            quote : "Muhammad Ali"
        },
        {
            author : "Only a man who knows what it is like to be defeated can reach down to the bottom of his soul and come up with the extra ounce of power it takes to win when the match is even",
            quote : "Muhammad Ali"
        },
        {
            author : "It's lack of faith that makes people afraid of meeting challenges, and I believed in myself",
            quote : "Muhammad Ali"
        },
        {
            author : "Champions aren't made in gyms. Champions are made from something they have deep inside them   a desire, a dream, a vision. They have to have the skill, and the will. But the will must be stronger than the skill",
            quote : "Muhammad Ali"
        },
        {
            author : "Always be yourself, express yourself, have faith in yourself, do not go out and look for a successful personality and duplicate it",
            quote : "Bruce Lee"
        },
        {
            author : "Mistakes are always forgivable, if one has the courage to admit them",
            quote : "Bruce Lee"
        },
        {
            author : "If you always put limit on everything you do, physical or anything else. It will spread into your work and into your life. There are no limits. There are only plateaus, and you must not stay there, you must go beyond them",
            quote : "Bruce Lee"
        },
        {
            author : "A wise man can learn more from a foolish question than a fool can learn from a wise answer",
            quote : "Bruce Lee"
        },
        {
            author : "To hell with circumstances; I create opportunities",
            quote : "Bruce Lee"
        },
        {
            author : "O medo de perder tira a vontade de ganhar",
            quote : "Zico"
        },
        {
            author : "If you are not here to win, how can you even justify being here?",
            quote : "Mario Andretti"
        },
        {
            author : "No Matter where you turn, there is a decision to be made. Life or death. Right or wrong. Regular or Crunchy",
            quote : "Frank Castle a.k.a The Punisher"
        },
        {
            author : "With great power comes great responsibility",
            quote : "Uncle Ben"
        },
        {
            author : "I think life is full of challenges and problems. I don't believe that anyone is perfect. We all make mistakes. It's not a bed of roses, and you have to work real hard at it",
            quote : "Nigel Mansell"
        },
        {
            author : "The preparation, commitment and desire to win will be no less than the last time I drove a grand prix car in anger",
            quote : "Nigel Mansell"
        },
        {
            author : "As pessoas boas devem amar seus inimigos",
            quote : "Seu Madruga"
        },
        {
            author : "A vingança nunca é plena, mata a alma e a envenena",
            quote : "Seu Madruga"
        },
        {
            author : "A virtude do bem viver está nos princípios morais, minha filha",
            quote : "Seu Madruga"
        },
        {
            author : "Se quiser vir a ser alguém, que devore os livros",
            quote : "Seu Madruga"
        },
        {
            author : "Ai que burro, dá zero para ele",
            quote : "Chaves"
        },
        {
            author : "Teria sido melhor ir ver o filme do Pelé",
            quote : "Chaves"
        },
        {
            author : "Palma, palma! Não priemos cânico!",
            quote : "Chapolin"
        },
        {
            author : "Suspeitei desde o princípio",
            quote : "Chapolin"
        },
        {
            author : "Todos os meus movimentos são friamente calculados",
            quote : "Chapolin"
        },
        {
            author : "Não contavam com a minha astúcia!",
            quote : "Chapolin"
        },
        {
            author : "Era exatamente o que eu ia dizer!",
            quote : "Chapolin"
        },
        {
            author : "Não tenho medo dos grandões de 2 metros e sim dos baixinhos que fazem cálculos difíceis",
            quote : "Chapolin"
        },
        {
            author : "Sometimes it is the people no one can imagine anything of who do the things no one can imagine",
            quote : "Alan Turing"
        },
        {
            author : "We can only see a short distance ahead, but we can see plenty there that needs to be done",
            quote : "Alan Turing"
        },
        {
            author : "Those who can imagine anything, can create the impossible",
            quote : "Alan Turing"
        },
        {
            author : "If a machine is expected to be infallible, it cannot also be intelligent",
            quote : "Alan Turing"
        }        
    ]


    var index = Math.floor(Math.random() *quotes.length);
    return quotes[index]
}
function getRandomNameView() {
    var randomName = document.querySelector("#random-quote");
    randomName.className = "";
    quote = getRandomQuote()
    randomName.innerHTML = quote.author + "<br>" + quote.quote ;
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