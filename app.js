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
    'Pam: Jim said mixed berries? Well, yeah, he’s on to me. Um… (Laughs)',
    'Michael: Watch out for this guy. Dwight Schrute in the building. This is Ryan, the new temp.   Ryan: What’s up? Nice to meet you.   Michael: Introduce yourself. Be polite.   Dwight: Dwight Schrute, Assistant Regional Manager.    Michael: Assistant to the Regional Manager. So, uh, Dwight tell him about the kung fu and the car and everything.   Dwight: Uh… yeah I got a ’78 280Z. Bought it for $1,200. Fixed it up. It’s now worth three grand.',
    'Dwight: Dang it! Jim!   Michael: OK. Hold on, hold on. The judge is in session. What is the problem here?   Dwight: He put my stuff in Jell-O again.   Pam: (Laughing)   Dwight: That’s real professional thanks. That’s the third time and it wasn’t funny the first two times either Jim.',
    'Dwight: It’s OK here, but people sometimes take advantage because it’s so relaxed. I’m a volunteer Sheriff’s Deputy on the weekends. And you cannot screw around there. That’s sort of one of the rules.',
    'Dwight: That is my stapler.   Michael: No, no, no. Do not take it out. You have to eat it out of there, because there are starving people in the world (turns to camera) which I hate, and it is a waste of that kind of food.',
    'Michael: And yeah, Jim this is the time to stop putting Dwight’s personal effects into Jell-O.   Jim: OK. Dwight, I’m sorry, because I have always been your biggest flan.   Michael: (Laughing) Nice. That’s the way it is around here. It just kind of goes round and round.   Ryan: You should’ve put him in custardy.   Michael: Hey! Yes! New guy! He scores.',
    'Michael: So have you felt the vibe yet? We work hard, we play hard. Sometimes we play hard when we should be working hard. Right? I guess the atmosphere that I’ve created here is that I’m a friend first, and a boss second… and probably an entertainer third.',
    'Michael: Oh, thank you. Pam, can you come in here for a sec. Just have a seat. I was gonna call you in anyway. You know Ryan. As you know, there is going to be downsizing. And you have made my life so much easier in that I am going to have to let you go first.   Pam: What? Why?   Michael: Why? Well, theft and stealing.   Pam: Stealing? What am I supposed to have stolen?   Michael: Post-it Notes.',
    'Michael: Today is diversity day and someone’s going to come in and talk to us about diversity. It’s something that I’ve been pushing, that I’ve been wanting to push, for a long time and Corporate mandated it. And I never actually talked to Corporate about it. They kind of beat me to the punch. But I was going to. And I think it’s very important that we have this. I’m very, very excited.',
    'Michael: How come Chris Rock can do a routine and everybody finds it hilarious and ground-breaking and then I go and do the exact same routine, same comedic timing, and people file a complaint to Corporate? Is it because I’m white and Chris is black?',
    'Michael: OK. Why don’t we just defer to Mr….   Mr. Brown: Mr. Brown.   Michael: Ah. Oh, right! OK. First test. I will not call you that.   Mr. Brown: Well, it’s my name. It’s not a test. OK? Um, so looking through the cards, I’ve noticed that many of you wrote down the same incident, which is ironic, because it’s the exact incident I was brought in here to respond to. Now, how many of you are familiar with the Chris Rock routine? Very good. OK.',
    'Michael: “I regret my actions. I regret offending my coworkers. I pledge to bring my best spirit of honesty, empathy, respect and open-mindedness…” Open-mindedness, is that even a word? “…into the workplace. In this way, I can truly be a hero. Signed, Daffy Duck.” [Laughing] He’s going to lose it when he reads that.',
    'Michael: “I pledge to always keep an open mind and an open heart.” I do believe… in that part of the pledge I that just read. But a pledge? Come on. I mean who are we, the Girl Scouts? No. Look… the guy, “Mr. Brown,” he got us halfway there. He got us talking. Well, no. I got us talking. He got us nothing. He insulted us and he abandoned us. You call that diversity training? I don’t. Were there any connections between any of us? Did anyone look each other in the eye? Was there any emotion going on? No. Where was the heart? I didn’t see any heart. Where was my Oprah moment?',
    'Michael: I am Michael and I am part English, Irish, German and Scottish. Sort of a virtual United Nations. But what some of you might not know is that I am also part Native American Indian.   Oscar: What part Native American?   Michael: Two fifteenths.',
    'Michael: (Voice raised, Indian accent) Kelly, how are you?   Kelly: I just had the longest meeting.   Michael: Oh! Welcome to my convenience store. Would you like some googi googi? I have some very delicious googi, googi, only 99 cents plus tax. Try my googi, googi. (Lowering voice) Try my googi, googi. (High-pitched voice) Try my googi, googi. Try my… (Kelly slaps Michael!)   Michael: (trying not to cry) All right! All right! Yes! That was great, she gets it! Now she knows what it’s like to be a minority.',
    'Michael: The most sacred thing I do is care and provide for my workers, my family. I give them money. I give them food. Not directly, but through the money. I heal them. Today, I am in charge of picking a great new health care plan. Right? That’s what this is all about. Does that make me their doctor? Um… Yes, in a way. Yeah, like a specialist.',
    'Jim: Right now, this is just a job. If I advance any higher in this company then this would be my career. And uh, well, if this were my career, I’d have to throw myself in front of a train.',
    'Michael: If Dwight fails, then that is strike two, and good for me for, ah, for giving him a second chance. And if he succeeds, then, you know, no one will be prouder than I am. I groomed him. I made him what he is today. Unless he fails, and we’ve talked about that already.',
    'Dwight: What did I do? I did my job. I slashed benefits to the bone. I saved this company money. Was I too harsh? Maybe. I don’t believe in coddling people.   Dwight: In the wild, there is no health care. In the wild, health care is, “Ow, I hurt my leg. I can’t run. A lion eats me and I’m dead.” Well, I’m not dead. I’m the lion. You’re dead.',
    'Michael: OK, so I don’t know what the surprise is. Am I worried? No. No way. See, I thrive on this. This is my world. This is improv. This is Whose Line is it Anyway?',
    'Michael: Robin Williams. Oh, man, would I love to go head-to-head with him. Oh! That would be exciting. (as Robin Williams) “Hi. I’m Mork from Ork.” Well, I’m Bork from Spork. Nanoo, nanoo. Jibelee, baloobaloo.',
    'Michael: It looks like there’s gonna be downsizing. And it’s part of my job, but… blah! I hate it. I think the main difference between me and Donald Trump is that, uh, I get no pleasure out of saying the words, “You’re fired.” (as Donald Trump) “You’re foir-ed. Uh, you’re foir-ed.” It just makes people sad, and an office can’t function that way. No way. (as Donald Trump) “You’re foir-ed.” I think if I had a catchphrase it would be, “You’re hired, and you can work here as long as you want.”',
    'Dwight: It’s a real shame, ’cause studies have shown that more information gets passed through water-cooler gossip than through official memos. Which puts me at a disadvantage, because I bring my own water to work.',
    'Pam: This was tough. I suggested we flip a coin. But Angela said she doesn’t like to gamble. Of course by saying that she was gambling that I wouldn’t smack her.',
    'Dwight: Hey, so listen, I was thinking that it might be a good idea if you and I formed an alliance. ‘Cause of the downsizing? I think an alliance might be a good idea, you know. Help each other out.   Dwight: Do you want to form, an alliance, with me?   Jim: Absolutely, I do.   Dwight: Good, good. Excellent, OK. Now we need to figure out who’s vulnerable and who’s protected…',
    'Dwight: Did you get your tickets?   Jim: To what?   Dwight: The gun show. (Rolls up his sleeve and kisses his bicep)',
    'Pam: An alliance?   Jim: Oh yeah.   Pam: What does that even mean?   Jim: I think it has something to do with Survivor, but I’m not sure.   Jim: Um, I know that it involves spying on people and we may build a fort, underground.',
    'Dwight: Did you tell Pam about the alliance?   Jim: What? No.  Dwight: Just now.   Jim: What? Oh no no no. Dwight, no. I’m using her, for the alliance. Who knows the most information about this office? Pam.   Dwight: Right, that’s good, good, pursue this.   Jim: Well I’m trying to. Do you see what I’m doing?   Dwight: Mmm hmm.   Jim: But listen, I’m going to have to talk to her a lot. All right? And there may be chatting, and giggling. And you gotta just pretend to ignore it. Wipe it away.   Dwight: Done.   Jim: All right.',
    'Jim: Toby and Kevin, they’re trying to get Angela kicked off.   Dwight: Good, let ’em. It helps our cause.   Jim: Well, I don’t know, if Kevin’s in accounting, and Toby’s in Human Resources and they’re talking…   Dwight: Oh, they’re forming an alliance',
    'im: OK, listen, we need to assume that everyone in the office is forming an alliance and is therefore trying to get us kicked off.   Dwight: Why us?   Jim: Because we’re strong, Dwight. Because we’re strong.',
    'Dwight: I’m a deer hunter. I go all the time with my dad. One thing about deer, they have very good vision. One thing about me, I am better at hiding than they are… at vision.',
    'Dwight: Can I trust Jim? I don’t know. Do I have a choice? No, frankly, I don’t. Will I trust Jim? Yes. Should I trust Jim? You tell me.',
    'Pam: He’s in a box?   Jim: Pam, he’s in a box. He’s downstairs, in a box, on the floor, near the shelves. I’m serious. Go down there and work your magic.   Pam: (on her cell phone) Hey where are you? Yeah, we were supposed to meet here. What? Oh my gosh! That ties in perfectly with something that Michael was telling me earlier! I just don’t know what some of the people in, like, accounting are going to do? It said specifically that…   Dwight: [box falls over] Oh.',
    'Michael: Jim, good party, huh? Just a little something I whipped up. You know, a little morale boost. No big deal.   Jim: Speaking of which, I meant to tell you. Very impressive, the uh, donation you gave to Oscar’s charity. What was it? 25 bucks?   Michael: Well, you know, money isn’t everything Jim. It’s not the key to happiness. You know what is? Joy. You should remember that. Maybe you’ll give more than three dollars next time.   Jim: Yeah, well, three dollars a mile. It’s gonna end up being like 50 bucks. So… God, I can’t even calculate what you’re gonna have to give.   Michael: Is Oscar around?',
    'Dwight: Do I feel bad about betraying Jim? Not at all. That’s the game. Convince him we’re in an alliance, get some information, throw him to the wolves.',
    'Michael: Today at lunchtime we’re going to be playing the warehouse staff at a friendly little game of basketball. My idea. Last time I was down there, I noticed they’d put up a couple of hoops, and I play basketball every weekend. So I thought, “This might be kinda fun.” And so I started messing around and… I’m sinking a few, you know. Swish, swish, swish. Nothing but net. And their jaws just dropped to the floor. African-Americans!',
    'Michael: (misses a half court shot) Aw, come on! What is wrong with me today!? Usually hit those. (Dwight scores) Dwight, I was open. All right, let’s go.',
    'Michael: Football is like rock and roll, it’s just bam-bam-boo… And basketball is like jazz, you know? You’re kind of… Dupee-doo, dupee-do. It’s all downbeat, it’s in the pocket, it’s like… (singing) Dupee-do, dupee-do, dapee-dah…',
    'Michael: The great thing about sports is that it is all about character. And you can learn lessons about life even if you don’t win. But we did because we were ahead.',
    'Jan: Are you listening to me Michael?   Michael: Affirmative.   Jan: What did I just say?   Michael: You just said, let me uh… check my notes. You just said…',
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

function setTweetButton(quote) {
    twitterButton.setAttribute('href', `https://twitter.com/share?text=${quote} - The Office`);
}

twttr.widgets.createShareButton(
    "https:\/\/dev.twitter.com\/web\/tweet-button",
    document.getElementById("tweet-container"),
    {
      size: "large",
      text: "custom share text",
      hashtags: "TheOffice",
      via: "twitterdev",
      related: "twitterapi,twitter"
    }
  );