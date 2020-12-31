//possibly write array by season and nest season array's inside quote array
let quotesSeason1 = [
    'Michael: This is our receptionist, Pam. Pam! Pam-Pam! Pam Beesly. Pam has been with us for… forever. Right, Pam?     Pam: Well. I don’t know.    Michael: If you think she’s cute now, you should have seen her a couple of years ago.',
    'Michael: Any messages?   Pam: Uh, yeah. Just a fax.     Michael: Oh! Pam, this is from Corporate. How many times have I told you? There’s a special filing cabinet for things from corporate.     Pam: You haven’t told me.      Michael: It’s called the wastepaper basket! Look at that! Look at that face.',
    'Michael: People say I am the best boss. They go, “God we’ve never worked in a place like this before. You’re hilarious.” “And you get the best out of us.” (shows the camera his WORLD’S BEST BOSS mug) I think that pretty much sums it up. I found it at Spencer Gifts.',
    'Jim: My job is to speak to clients on the phone about… uh, quantities and type of copier paper. You know, whether we can supply it to them. Whether they can pay for it. And… I’m boring myself just talking about this.',
    'Michael: Whassup! Jim: Whassup! I still love that after seven years.    Michael: Whassup!   Dwight: Whassup!    Michael: Whass…up!    Dwight: Whassup.    Michael: [Strains, grunts] What?    Jim: Nothing.    Michael: OK. All right. See you later.',
    'Michael: I didn’t get any agenda.    Jan: Well, I faxed one over to you this morning.    Michael: Really? I didn’t… [looks at Pam] Did we get a fax this morning?    Pam: Uh, yeah, the one…    Michael: Why isn’t it in my hand? A company runs on efficiency of communication, right? So what’s the problem, Pam? Why didn’t I get it?    Pam: You put in the garbage can that was a special filing cabinet.',
    'Phyllis: So what does downsizing actually mean?    Stanley: Well…    Michael: Am I going to tell them? No, I am not going to tell them. I don’t see the point of that. As a doctor, you would not tell a patient if they had cancer.', 'Jim: What are you doing?    Dwight: Just clearing my desk. I can’t concentrate.     Jim: It’s not on your desk.    Dwight: It’s overlapping. It’s all spilling over the edge. One word, two syllables. Demarcation.',
    'Michael: I think I’m a role model here. I think I garner people’s respect.',
    'Michael: People I respect, heroes of mine, would be Bob Hope… Abraham Lincoln, definitely. Bono. And probably God would be the fourth one. And I just think all those people really helped the world in so many ways that it’s really beyond words. It’s really incalculable.',
    'Michael: Now I know there’s some rumors out there and I just kind of want to set the record straight.    Dwight: I’m Assistant Regional Manager. I should know first.    Michael: Assistant to the Regional Manager.    Dwight: OK, um, can you just tell me please? Just tell me quietly. Can you whisper it in my ear?    Michael: I’m about to tell everybody.    Oscar: Can’t you just tell us.    Dwight: Please, OK? Do you want me to tell ’em?    Michael: You don’t know what it is. [Laughs]    Dwight: OK. You tell ’em. With my permission. Permission granted.',
    'Oscar: Yeah but Michael, what if they downsize here?   Michael: Not gonna happen.   Stanley: It could be out of your hands Michael.    Michael: It won’t be out of my hands Stanley, OK. I promise you that.    Stanley: Can you promise that?    Dwight: On his mother’s grave.    Michael: No.    Phyllis: What?    Michael: Well, yeah, it is a promise. And frankly, I’m a little insulted that you have to keep asking about it.',
    'Jim: If I left, what would I do with all this useless information in my head? You know? Tonnage price of manila folders? Um, Pam’s favorite flavor of yogurt, which is mixed berry.',
    'Pam: Jim said mixed berries? Well, yeah, he’s on to me. Um… [Laughs]',
    'Michael: Watch out for this guy. Dwight Schrute in the building. This is Ryan, the new temp.   Ryan: What’s up? Nice to meet you.   Michael: Introduce yourself. Be polite.   Dwight: Dwight Schrute, Assistant Regional Manager.    Michael: Assistant to the Regional Manager. So, uh, Dwight tell him about the kung fu and the car and everything.   Dwight: Uh… yeah I got a ’78 280Z. Bought it for $1,200. Fixed it up. It’s now worth three grand.',
    'Dwight: Dang it! Jim!   Michael: OK. Hold on, hold on. The judge is in session. What is the problem here?   Dwight: He put my stuff in Jell-O again.   Pam: [Laughing]   Dwight: That’s real professional thanks. That’s the third time and it wasn’t funny the first two times either Jim.',
    'Dwight: It’s OK here, but people sometimes take advantage because it’s so relaxed. I’m a volunteer Sheriff’s Deputy on the weekends. And you cannot screw around there. That’s sort of one of the rules.',
    'Dwight: That is my stapler.   Michael: No, no, no. Do not take it out. You have to eat it out of there, because there are starving people in the world [turns to camera] which I hate, and it is a waste of that kind of food.',
    'Michael: And yeah, Jim this is the time to stop putting Dwight’s personal effects into Jell-O.   Jim: OK. Dwight, I’m sorry, because I have always been your biggest flan.   Michael: [Laughing] Nice. That’s the way it is around here. It just kind of goes round and round.   Ryan: You should’ve put him in custardy.   Michael: Hey! Yes! New guy! He scores.',
    'Michael: So have you felt the vibe yet? We work hard, we play hard. Sometimes we play hard when we should be working hard. Right? I guess the atmosphere that I’ve created here is that I’m a friend first, and a boss second… and probably an entertainer third.',
    'Michael: Oh, thank you. Pam, can you come in here for a sec. Just have a seat. I was gonna call you in anyway. You know Ryan. As you know, there is going to be downsizing. And you have made my life so much easier in that I am going to have to let you go first.   Pam: What? Why?   Michael: Why? Well, theft and stealing.   Pam: Stealing? What am I supposed to have stolen?   Michael: Post-it Notes.',
    'Michael: Today is diversity day and someone’s going to come in and talk to us about diversity. It’s something that I’ve been pushing, that I’ve been wanting to push, for a long time and Corporate mandated it. And I never actually talked to Corporate about it. They kind of beat me to the punch. But I was going to. And I think it’s very important that we have this. I’m very, very excited.',
    'Michael: How come Chris Rock can do a routine and everybody finds it hilarious and ground-breaking and then I go and do the exact same routine, same comedic timing, and people file a complaint to Corporate? Is it because I’m white and Chris is black?',
    'Michael: OK. Why don’t we just defer to Mr….   Mr. Brown: Mr. Brown.   Michael: Ah. Oh, right! OK. First test. I will not call you that.   Mr. Brown: Well, it’s my name. It’s not a test. OK? Um, so looking through the cards, I’ve noticed that many of you wrote down the same incident, which is ironic, because it’s the exact incident I was brought in here to respond to. Now, how many of you are familiar with the Chris Rock routine? Very good. OK.',
    'Michael: “I regret my actions. I regret offending my coworkers. I pledge to bring my best spirit of honesty, empathy, respect and open-mindedness…” Open-mindedness, is that even a word? “…into the workplace. In this way, I can truly be a hero. Signed, Daffy Duck.” [Laughing] He’s going to lose it when he reads that.',
    ''
];
let newQuote = document.querySelector('.newQuote');
const twitterButton = document.querySelector('#js-tweet');

function displayQuote() {
    let quotesRandom = Math.floor(Math.random() * quotesSeason1.length);

    // display the quote of that index
    let div = document.querySelector('#js-quote-text');
    let quote = `<div class="card">
    <i class="fas fa-quote-left"></i>
    <p>${quotesSeason1[quotesRandom]}</p>
    <i class="fas fa-quote-right"></i>
    </div>
    `;
    div.innerHTML = quote;
}

function setTweetButton(quotesRandom) {
    twitterButton.setAttribute('href', `https://twitter.com/share?text=${quotesRandom} - The Office (US version)`);
}