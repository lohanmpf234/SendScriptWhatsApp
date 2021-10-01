function enviarScript(scriptText){
    const lines = scriptText.split("\n"); 

    let i = 0;       

    setInterval(() => { 
        if(i >= lines.length) return

        if(lines[i].trim() != ''){ 
            console.log(lines[i]); 
    
            window.InputEvent = window.Event || window.InputEvent;
    
            const event = new InputEvent('input', { bubbles: true });
    
            const textbox = document.querySelector('#main div._13NKt');
    
            textbox.textContent = lines[i];
    
            textbox.dispatchEvent(event);
    
            document.querySelector("#main span[data-testid=send]").click();                   

        }
        i++;
    }, 250)
}

enviarScript(`FOR YOUR CONSIDERATION
BEST ADAPTED SCREENPLAY
Christopher Markus & Stephen McFeely
AVENGERS: ENDGAME
Adapted Screenplay
Written by Christopher Markus and Stephen McFeely
EXT. BARTON HOME - DAY
CLOSE ON: A HOUSE-ARREST ANKLE BRACELET.
CLINT BARTON (O.S.)
Okay, you see where you’re going?
Let’s work on how to get there.
Pan up to find...CLINT BARTON, with his daughter, LILA,
coaching her as she notches an arrow in her bow.
CLINT BARTON (CONT'D)
Okay, good...tip down...bow arm
out...three fingersLILA BARTON
Why three?
CLINT BARTON
‘Cause two’s not enough and four’s
too muchLAURA BARTON (O.S.)
You guys want mustard or mayo, or
both?
CLINT TURNS. IN THE FIELD BEHIND THEM, his wife, LAURA
BARTON sets up a picnic as COOPER and NATHANIEL play soccer.
LILA BARTON
Who puts mayo on a hot dog?
CLINT BARTON
We’ll both have mustard, hon!
(to Lila)
Okay. Draw back, deep breath...
She lets loose. THUD! HER ARROW HITS NEAR THE BULLS-EYE.
CLINT BARTON (CONT'D)
Good job, Hawkeye. Go get your
arrow.
LAURA BARTON (O.S.)
Enough murder practice! Soup’s on!
CLINT BARTON
One sec, babe. Be right there!
We’re gonna kill some hot dogs.
We’re hungry.
But when he turns back...LILA IS GONE. The bow and arrow lie
at his feet. He stares.
2
CLINT BARTON (CONT'D)
Lila? Babe, did you see LilaHe turns to his wife, BUT SHE’S GONE. So are the boys. The
soccer ball rolls to a stop near the picnic blanket.
NO ONE CAN BE SEEN FOR A HUNDRED YARDS IN ALL DIRECTIONS.
CLINT BARTON (CONT'D)
Guys? Guys, come on...
Clint walks toward the field, dread growing.
CLINT BARTON (CONT'D)
Laura?
Clint breaks into a panicked run.
CLINT BARTON (CONT'D)
LAURA!
CLINT MELTS DOWN, SPINNING AROUND, FRANTIC...
MARVEL FLIP
EXT. SPACE - NIGHT
BLACKNESS.
TITLE: “TWENTY-TWO DAYS LATER.”
Soon, THE BENATAR tumbles past, adrift...
INT. BENATAR, GALLEY - NIGHT
TONY STARK and NEBULA play table-top football. She wins.
TONY
(offering his hand)
Good sport. Have fun?
Nebula studies his hand, confused. Finally she shakes.
NEBULA
It was fun.
INT. BENATAR, FLIGHT DECK - NIGHT
Tony, thin and haggard, kneels in front of HIS BROKEN IRON
MAN HELMET. He hits a switch. A light blinks.
2
3
TONY’S RECORDING: he stares directly into the “camera.”
TONY
This thing on? Hey, Ms. Potts.
Pep. If you find this recording,
don’t post it on social media.
It’s going to be a real tearjerker.
EXT. SPACE - NIGHT
THE BENATAR sparks, adrift.
TONY (O.S.)
I don’t know if you’re ever going
to see these. I don’t even know if
you’re still...God, I hope so.
Today’s day twenty-one, no...twentytwo.
INT. BENATAR, GALLEY - FLASHBACK
NEBULA lasers shut Tony’s infected wound.
TONY (O.S.)
You know, if it wasn’t for the
existential terror of staring into
the literal void of space, I’d say
I’m feeling a little better today.
Infection’s run its course, thanks
to the Blue Meanie back there.
You’d like her. She’s very
practical. And only a tiny bit
sadistic.
INT. BENATAR, GALLEY - FLASHBACK
TONY AND NEBULA MEND THE EMPTY FUEL CELLS UNDER THE FLOOR.
TONY (O.S.)
The fuel cells were cracked during
battle, but we figured out a way to
reverse the ion charge. Bought
ourselves about 48 hours of flight
time. Problem is that was
about...49 hours ago.
EXT. SPACE - NIGHT
FROM HIGH OVERHEAD, WE WATCH THE BENATAR DRIFT IN SPACE.
3
4
TONY (O.S.)
Which means, we’re dead in the
water. A thousand light years from
the nearest 7-11.
INT. BENATAR, GALLEY - FLASHBACK
Tony hands Nebula the last of A PURPLE POWDER. She pushes it
back to him.
TONY (O.S.)
Most of the quote-unquote ‘food’
and potable water ran out two weeks
ago.
INT. BENATAR, FLIGHT DECK - NIGHT
Tony stands on the flight deck, one hand resting on the
glass, staring into the unknown.
TONY
Pep, I know I said no more
surprises. But, I gotta say, I was
really hoping to pull off one last
one. But it looks like...well, you
know what it looks like.
INT. BENATAR, FLIGHT DECK - NIGHT
Back to now. Tony records his thoughts into his helmet.
TONY
Don’t feel bad about this. I mean,
actually, if you grovel for a
couple weeks, and then move on with
enormous guilt...I should probably
lie down for a minute, rest my
eyes. Please know, when I drift
off, it will be like every day
lately. I’m fine, totally fine.
I’m going to dream about you. It’s
always you.
Tony switches the helmet off.
TIME CUT:
NEBULA finds TONY SPRAWLED ON THE FLOOR.
TIME CUT:
4
5
Nebula helps Tony into Quill’s chair. Tony slumps,
completely still. Nebula gives him his privacy.
Move in on Tony’s face as...A LIGHT SLOWLY GROWS BRIGHTER.
Soon, the entire flight deck glows as bright as a sun.
Nebula appears from the galley, shading her eyes. Tony’s
eyelids flutter. Finally, he opens them to see...
CAPTAIN MARVEL (CAROL DANVERS) hovering in space.
INT. AVENGERS COMPOUND, BATHROOM - NIGHT
STEVE ROGERS shaves.
He studies himself in the mirror, exhausted. He’s about to
tap his razor in the sink’s standing water, when...
THE WATER RIPPLES. Steve stares a beat, puzzled. Then the
lamp catches his eye...SWAYING GENTLY.
Just then, a sound roars overhead. Steve turns...
EXT. AVENGERS COMPOUND - NIGHT
THE MOON HANGS HUGE OVER THE EARTH. Then the silhouette of
THE BENATAR races past, propelled by CAROL DANVERS.
Below...STEVE ROGERS, BRUCE BANNER, AND NATASHA ROMANOV watch
a flying woman guide the ship to the ground.
Behind them, PEPPER POTTS walks up to the group.
TIME CUT:
Steve races up as NEBULA helps Tony down the ramp.
TONY
I couldn’t stop him.
STEVE
Neither could we.
TONY
I lost the kid.
STEVE
(unable to say it all)
We...lost...
TONY
Is Pepper...?
5
6
JUST THEN, PEPPER POTTS THROWS HERSELF INTO TONY’S ARMS.
PEPPER POTTS
Stay here, you stay right hereTONY
I’m not going anywhere.
NEARBY, NEBULA watches the sad humans. ROCKET SITS BESIDE
HER, GRATEFUL. She rests a hand on his furry head.
INT. AVENGERS COMPOUND, WORKSHOP - DAY
RHODEY, TONY, STEVE, NATASHA, AND CAROL watch...
A HOLO-DISPLAY ROTATING THROUGH FACES OF PEOPLE WE’VE LOST:
WANDA. VISION. BUCKY. T’CHALLA. MARIA HILL.
RHODEY
It’s been twenty-three days since
Thanos came to Earth.
TONY, weak, sits in a hi-tech wheelchair, IV dripping into
his arm. He stares, taking in the loss:
SAM WILSON. SECRETARY ROSS. SHARON CARTER. SCOTT LANG.
HOPE VAN DYNE. HANK PYM. NICK FURY.
At Fury, Carol bites back emotion.
NATASHA
World governments are in pieces, as
you can imagine. But the parts
that still work are trying to take
a census. It looks like he did
what he said he was going to do.
JANE FOSTER. ERIK SELVIG. WONG. DR. STRANGE. THE BARTON
FAMILY. QUILL. DRAX. MANTIS. GROOT. PETER PARKER.
Finally, Tony looks away. RHODEY turns it off.
NATASHA (CONT'D)
Thanos wiped out fifty percent of
all the living creatures on Earth.
CAROL DANVERS
Not just Earth.
RHODEY
You sure about that?
6
7
CAROL DANVERS
You never have to ask me that.
TONY
Where is he now?
STEVE
We don’t know. He just opened a
portal and walked through.
Tony looks out to see...THOR on the patio.
TONY
What’s his deal?
ROCKET (O.S.)
He’s pissed.
Tony turns to see Rocket for the first time.
ROCKET (CONT'D)
He thinks he failed. Which, of
course, he did. But there’s a lot
of that going around, ain’t there?
TONY
Until this second, I literally
thought you were a Build-a-Bear.
STEVE
We’ve been hunting Thanos for three
weeks - deep space scans,
satellites - we got nothing. Tony,
you fought himTONY
Who told you that? I didn’t fight
him, he wiped my face with a planet
while a Bleecker Street magician
gave away the store. There was no
fight because he’s not beatable.
STEVE
Did he give you anything to go on?
Clues, coordinatesTony stares, lost, barely acknowledging Steve.
TONY
I saw this coming, few years back.
Didn’t wanna believe. I thought I
was dreaming...
7
8
STEVE
Tony, I need you to focusTONY
And I needed you, as in past tense.
That trumps what you need. It’s
too late, buddy. You know what I
need?
Tony turns to everyone, slightly unstable.
TONY (CONT'D)
I need a shave and a burger, not a
bowl of soup.
(stands)
And I believe I remember telling
all of you, alive and otherwise,
that we needed a suit of armor
around the world, whether it
impacted our precious freedoms or
notSTEVE
But that didn’t work out, did it?
TONY
I said we’d lose, you said we’d “do
that together, too.” Guess what,
Cap, we lost, and you weren’t
there. But that’s what we do,
right? Our best work after the
fact? We’re the “Avengers”, not
the “Pre-vengers-”
RHODEY
Tony, take it easy...
TONY
I’ve got nothing for ya, Cap. No
coordinates, no clues, no
strategies, no options. Zero, zip,
nada. No trust.
(rips out RT)
Here. You take this. You find
him, you put this on, and hide.
(drops to his knees)
I’m fine!
Tony COLLAPSES. Rhodey catches him.
8
9
INT. AVENGERS COMPOUND, CORRIDOR - DAY
CAROL, STEVE, AND NATASHA stare through GLASS DOORS at TONY
IN A HOSPITAL BED, PEPPER AND BANNER AT HIS SIDE.
RHODEY STEPS OUT OF THE HOSPITAL ROOM.
RHODEY
Bruce gave him a sedative. Should
be out the rest of the day.
CAROL DANVERS
(heading for the lab)
Take care of him. When I come
back, I’ll bring a bottle of
Xorrian elixir.
STEVE
Where are you going?
CAROL DANVERS
To kill Thanos.
INT. AVENGERS COMPOUND, WORKSHOP - DAY
NATASHA catches up to CAROL IN THE WORKSHOP.
NATASHA
Hey, hey, hang on. We’re sort of a
team here. Between you and me,
morale’s a little fragile.
CAROL DANVERS
Oh, I’m sorry. My fault.
Carol sees Steve and Rhodey catch up. She claps her hands.
CAROL DANVERS (CONT'D)
All right, team! I’m going to go
kill Thanos. Message me if you get
any intel that can help.
Otherwise, I’ll report back when
he’s dead. Great work, everybody.
STEVE
Look, we realize “up there’s” more
your territory, but this is our
fight, too.
RHODEY
Do you even know where he is?
9
10
CAROL DANVERS
I know people who mightNEBULA (O.S.)
Don’t bother.
They all turn to see NEBULA in THE LIVING AREA DOORWAY.
NEBULA (CONT'D)
I can tell you where Thanos is.
INT. AVENGERS COMPOUND, LIVING AREA - DAY
STEVE, NATASHA, RHODEY, BANNER, ROCKET, THOR, and CAROL
gather. NEBULA studies her robotic hand.
NEBULA
Thanos spent a long time trying
to...perfect me. When he worked,
he talked. About his Great Plan.
Even disassembled, I wanted to
please him. I’d ask, where would
we go once his plan was complete?
His answer was always the same: “To
the Garden.”
RHODEY
You’re saying Thanos had a
retirement plan.
STEVE
Where’s this garden?
ROCKET brings up EARTH on A HOLO-MAP. A BRIGHT SURGE OF
ENERGY ENVELOPS THE PLANET (EMANATING FROM WAKANDA).
ROCKET
When Thanos snapped his fingers,
Earth become ground zero for a
power surge of ridiculously cosmic
proportions. No one’s seen
anything like it.
He shifts the map, crossing billions of light years, to...AN
IDENTICAL SURGE ENVELOPING A MYSTERIOUS, ORANGE PLANET.
ROCKET (CONT'D)
Until two days ago.
NATASHA
You’re saying he snapped his
fingers again. Where?
10
11
Rocket zooms the holo-image toward a cluster of stars...
NEBULA
Planet is unnamed, but inhabitable.
Rich atmosphere, good soilSTEVE
A garden.
BRUCE BANNER
Thanos is there. And he just used
the stones.
Steve eyes everyone. THOR FINALLY LOOKS UP.
BRUCE BANNER (CONT'D)
(thinking of himself)
You know, we’d be going shorthanded.
RHODEY
Because he killed all our friends.
ROCKET
Are we saying they’re dead? We’re
using that word now?
RHODEY
He’s still got the stones.
CAROL DANVERS
So, we take them. And we use them
to bring everybody back.
BRUCE BANNER
Just like that?
STEVE
Yeah. Just like that.
No one speaks. Finally...
NATASHA
If there’s even the smallest chance
we can undo this, then we owe it to
everyone who’s not sitting here to
try.
Everyone looks around the room...AGREED.
BRUCE BANNER
If we do this...why would it end
any differently than it did before?
11
12
CAROL DANVERS
Because before you didn’t have me.
RHODEY
Hey, new girl. All of us in here
are about that superhero life.
Where’ve you been all this time?
CAROL DANVERS
There’s a lot of people in the
universe. And they didn’t all have
you.
THOR STANDS. He crosses to Carol and holds out his hand.
STORMBREAKER WHIPS PAST HER HEAD, RUFFLING HER HAIR.
Carol doesn’t flinch. Thor smiles.
THOR
I like this one.
Steve stares at the planet a long, deciding moment. Then...
STEVE
Let’s go get that son of a bitch.
SLAM TO:
TITLE: “AVENGERS: ENDGAME”
INT. BENATAR, FLIGHT DECK - DAWN
EVERYONE settles into their seats on the Benatar’s flight
deck. STEVE WATCHES EARTH GROW SMALLER THROUGH THE WINDOW.
CAROL DANVERS
Trust me. You get used to it.
ROCKET looks around from the pilot’s chair.
ROCKET
Okay, who here hasn’t been to
space?
STEVE, NATASHA, and RHODEY half-raise their hands.
ROCKET (CONT'D)
Oh, you’re gonna hate this.
NEBULA
Approaching jump in three, two...
STEVE’S FINGERS TIGHTEN on the arm rest as...
12
13
EXT. BENATAR - DAWN
WHOOSH! THE BENATAR WARPS, LEAPING INTO JUMP SPACE.
EXT. SPACE - DAY
WHOOSH! THE BENATAR ARRIVES ABOVE AN OMINOUS, ORANGE PLANET.
As the ship maintains orbit, CAROL flies toward the planet.
CAROL DANVERS
I’ll head down for recon. If I’m
not back in fifteen, you’ll know I
found him.
INT. BENATAR, FLIGHT DECK - SPACE
OUR HEROES wait on the flight deck, tense.
NATASHA looks at STEVE, who’s staring at...A COMPASS: PEGGY
CARTER’S YELLOWED PHOTO STILL RESTS INSIDE.
NATASHA
This is going to work, Steve.
STEVE
I know it will.
(beat)
Because I don’t know what I’m going
to do if it doesn’t.
JUST THEN, CAROL FLIES UP TO THE OTHER SIDE OF THE GLASS.
CAROL DANVERS (OVER COM)
No satellites, no ships, no armies.
No ground defenses of any kind.
It’s just him.
NEBULA
That’s enough.
The Avengers exchange a look.
EXT. TITAN-2 - DAY
SMOKE CURLS FROM THE CHIMNEY OF A SOLITARY LODGE.
INT. THANOS’ LODGE - DAY
A POT BOILS OVER A FIRE. Then...THANOS LIMPS TOWARD IT, LEFT
SIDE PARALYZED, arm blackened. A shell of his former self.
13
14
He stirs the pot. Suddenly, AN ARMORED HAND BURSTS FROM THE
FIRE, GRABBING THANOS’ GAUNTLET...
PREVENTING THANOS FROM CLOSING HIS FIST.
Thanos jerks back as HULKBUSTER SPRINGS INSIDE. CAROL AND
RHODEY BASH THROUGH THE ROOF, PINNING THANOS’ ARMS.
THOR crashes through the door, followed by the others. HE
SWINGS STORMBREAKER...CUTTING OFF THANOS’ HAND.
The Gauntlet lands at Rocket’s feet. He picks it up...and
his face goes slack. He turns the glove toward the others.
And we now realize...THE INFINITY STONES ARE GONE.
STEVE
Where are they?
Thanos doesn’t answer. CAROL PRESSES HIM TO HIS KNEES.
CAROL DANVERS
Answer the question!
THANOS
The universe required correction.
After that, the stones served no
purpose beyond temptation.
BRUCE BANNER
You murdered trillions.
THANOS
You should be grateful.
NATASHA
Where are the stones?
THANOS
Gone. Reduced to atoms.
BRUCE BANNER
You used them two days ago!
THANOS
I used the stones to destroy the
stones. It nearly killed me.
But the work is done. It always
will be.
That lands, sickening. ROCKET SEARCHES, FRANTIC, NEAR TEARS.
ROCKET
No...they can’t be gone...
14
15
RHODEY
He’s lying.
NEBULA
My father is many things. A liar
is not one of them.
THANOS
Thank you, daughter. Perhaps I’ve
treated youSWOOSH. THOR’S AXE SEVERS THANOS’ HEAD FROM HIS BODY. IT
HITS THE FLOOR, FOLLOWED BY THE THUD OF HIS HUGE FRAME.
ROCKET
What did you do?
Thor just stares, his long journey a failure.
THOR
I went for the head.
As Thor walks away, Steve looks at Thanos’ head on the
ground. IT’S OVER. THEY LOST.
FADE TO BLACK.
OVER BLACK: “FIVE YEARS LATER.”
EXT. PORT OF NEW YORK - DAY
A CAR CRUSHER flattens an Audi. THOUSANDS MORE NEVER-DRIVEN
CARS LIE STACKED ON THE DOCKS, WAITING THEIR TURN.
EXT. NEW YORK - DAY
A HUGE TARP flaps over the shuttered LINCOLN CENTER.
EXT. SHEA STADIUM - DAY
A TEENAGE GIRL rides her skateboard, alone in a weed-filled
parking lot. Pull back to see THE EMPTY STADIUM BEHIND HER.
INT. BROOKLYN COMMUNITY CENTER - NIGHT
A POSTER SHOWS A SINGLE FIGURE STARING AT A GROUP OF SHADOWS.
IT READS, “WHERE DO WE GO, NOW THAT THEY’RE GONE?”
The bottom reads, “BROOKLYN SUPPORT GROUP, TUESDAYS 8PM.”
15
16
A GRIEVING MAN speaks in A RECOVERY GROUP.
GRIEVING MAN
So, I went on a date the other day.
JIMMY
Good job, Bobby. Back in the game.
GRIEVING MAN
Thank you, Jimmy.
(to the group)
First in five years. I sat there
at dinner thinking, what are we
even supposed to talk about?
STEVE ROGERS, thinner, older, LISTENS INTENTLY.
STEVE
What did you talk about?
GRIEVING MAN
Same old crap. How much things
have changed. How much we miss the
Mets. My job, his job. Then it
got kind of quiet. He cried during
the salads.
OLDER MAN
What about you?
GRIEVING MAN
I cried just before dessert. But
I’m seeing him again tomorrow.
So...
STEVE
That’s great. You’ve already done
the hardest part. You took a jump,
didn’t know where you’d come down.
And that’s it, those little brave
baby steps we’ve gotta take. To
try to make us feel whole again, to
find a purpose...
(to everyone)
I went into the ice right after I
met the love of my life. Woke up
seventy years later and...had to
keep going.
The group takes this in.
16
17
STEVE (CONT'D)
The world’s been left in our hands.
If we don’t do something with
it...then Thanos might as well have
killed all of us.
People nod, but Steve seems unconvinced by his own words.
EXT. SAN FRANCISCO - DAY
THE CAMERA ROTATES down from the sky onto a strangely quiet
San Francisco, until it finds...A STORAGE WAREHOUSE.
INT. STORAGE WAREHOUSE, UNIT 277 - DAY
LUIS’ VAN sits in a storage unit, surrounded by boxes: “S.
LANG, KITCHEN, S. LANG, CLOTHES.”
THROUGH THE VAN WINDOWS, we see...HANK PYM’S QUANTUM TUNNEL.
A MEANDERING RAT CRAWLS ONTO THE CONTROLS. IT ACCIDENTALLY
STEPS ON A TOGGLE SWITCH and...A LIGHT GOES GREEN. FLASH.
THE BACK DOORS OF THE VAN BLOW OPEN, revealing...SCOTT LANG,
ANT-MAN suit shorting. He retracts his helmet, gasping.
INT. STORAGE WAREHOUSE, SECURITY OFFICE - DAY
A GUARD reads THE TERMINAL BEACH, by J.G. Ballard. He looks
up at a monitor: SCOTT LANG holds up a sign, “HELP.”
EXT. STORAGE WAREHOUSE - DAY
A dented WAGON rolls over a speed-bump. Scott, in his old
clothes, slowly wheels his belongings away.
The Guard watches him go, puzzled.
EXT. SAN FRANCISCO, STREET - DAY
Scott walks A STREET OF ABANDONED HOMES.
SCOTT LANG
Hello?
He hears A CLACKING. A KID on a bicycle rides by, playing
card wedged between his spokes.
Scott waves him down. The kid stops.
17
18
SCOTT LANG (CONT'D)
Hey. Kid. What happened here?
The kid says nothing. He just stares at Scott with a haunted
look. Then he stands on his pedal and keeps riding.
CLACK-CLACK-CLACK-CLACK-CLACK-CLACK-CLACK...
EXT. SAN FRANCISCO, GOLDEN GATE PARK - DAY
STONE MONUMENTS loom in a park. A small crowd mills. Reveal
Scott looking over the monuments, lost.
TIME CUT:
Scott walks up to the obelisks. At the top, they read: “THE
VANISHED.” Hundreds of names line the stones.
He scans the “L’s,” finally finding, “SCOTT LANG.”
SCOTT LANG
What?
(realizing)
Cassie...
EXT. MAGGIE LANG’S HOUSE - DAY
A winded Scott races up the sidewalk toward his old house.
He leaps a bush, banging on the front door.
SCOTT LANG
Cassie! Cassie!
SOON, A TEEN GIRL opens the door, shocked. A very long beat.
CASSIE LANG
Dad?
SCOTT LANG
Peanut?
Scott wraps his arms around CASSIE LANG (14), now five years
older than when he last saw her. She hugs him, CRYING.
CASSIE LANG
I thought you were gone.
SCOTT LANG
I’m sorry. I’m back...I’m
back...I’m back...
18
19
EXT. AVENGERS COMPOUND, FRONT GATE - DAWN
Avengers Compound stands amidst overgrown grass. Rusty
chains lock the gate.
Faded signs warn: “RESTRICTED AREA. KEEP OUT.”
INT. AVENGERS COMPOUND, LIVING AREA - NIGHT
NATASHA SITS SURROUNDED BY HOLO-SCREENS FEATURING CAROL
DANVERS, RHODEY, ROCKET AND NEBULA, AND OKOYE.
ROCKET (HOLO)
We boarded that “highly suspect
warship” Danvers pinged.
NATASHA
And?
NEBULA (HOLO)
It was an infectious garbage scow.
ROCKET (HOLO)
So thanks for the hot tipCAROL DANVERS (HOLO)
You were closer.
ROCKET (HOLO)
And now we smell like garbageNATASHA
(to Okoye)
You get a reading on those tremors?
OKOYE (HOLO)
Minor subduction in the African
plate.
NATASHA
Do we have a visual? How are you
handling it?
OKOYE (HOLO)
Nat. It was a mild earthquake. In
the ocean. We handle it by not
handling it.
Natasha looks burdened. Rhodey steps in.
19
(MORE)
20
RHODEY (HOLO)
I can have NASA redirect a
satellite, do a sweep just to make
sure.
NATASHA
Thanks. Carol, you’re still coming
our way next month?
CAROL DANVERS (HOLO)
Not likely.
ROCKET (HOLO)
Getting another haircut?
CAROL DANVERS (HOLO)
Listen, fur-face, I’m covering a
lot of territory out here. The
things that have been happening on
Earth have been happening
everywhere else. On thousands of
planets. You might not see me for
a long time.
NATASHA
All right. Everybody keep keeping
their eyes open. This channel’s
always active. Anything goes
sideways, anyone makes trouble
where they shouldn’t, it comes
through me.
They ad lib their goodbyes as they sign off, except Rhodey.
NATASHA (CONT'D)
What’s up? Where are you?
RHODEY (HOLO)
Mexico. Got some news.
NATASHA
Okay...
RHODEY
Federalés found a room full of
bodies outside Juarez. Cartel
guys. Guns still in their pants.
NATASHA
Could be a rival hitRHODEY
But it wasn’t. Same MO as
Marseille. And Kiev.
(MORE)
20
RHODEY (CONT'D)
21
(beat)
It’s definitely Barton.
She nods, grim, reluctantly accepting.
RHODEY (CONT'D)
What he’s done here...what he’s
been doing...I got to tell you,
part of me doesn’t want to find
him.
Natasha just stares a long beat.
NATASHA
Find out where’s he going next.
Rhodey nods, signing off. Natasha sits there, THEN CRUMPLES.
After a long beat...
STEVE (O.S.)
I’d offer to cook you dinner but
you seem sad enough already.
Natasha turns to see STEVE in the doorway.
NATASHA
Come by to do your laundry?
STEVE
And see a friend.
NATASHA
Your friend’s fine.
STEVE
She leave the house today?
NATASHA
Nothing out there I particularly
want to see.
STEVE
I spotted a pod of whales coming
over the bridge.
NATASHA
(dubious)
In the Hudson.
STEVE
Fewer ships, cleaner water. Just
saying, there’s still a world out
there.
RHODEY (CONT'D)
21
22
NATASHA
If you’re about to tell me to look
on the bright side, I’m about to
hit you with a peanut butter
sandwich.
Steve relents, LETTING DOWN HIS FACADE.
STEVE
Sorry. Force of habit.
NATASHA
I don’t know how you do it.
Steve bites into the uneaten half of her sandwich.
STEVE
I guess I don’t know how not to.
NATASHA
Me, neither.
After a long moment, Steve looks up at her, honest.
STEVE
I keep telling them, move on. Grow
past it. And some of them actually
do. But not us.
NATASHA
If I move on, who does this?
STEVE
Maybe it doesn’t need to be done.
Natasha takes that in. Steve is thinking of giving up. She
looks around at Avengers Compound.
NATASHA
I used to have nothing. Then I got
this. This job, this family. And
I was better because of it.
She chokes slightly, collecting herself.
NATASHA (CONT'D)
And even though they’re gone, I’m
still trying to be...better.
STEVE
I think we both need to get a life.
NATASHA
You first.
22
23
They stare at each other a long, melancholy moment.
THEN, WE HEAR A PING. NATASHA SWIPES TO A CCTV DISPLAY:
SCOTT LANG’S FACE FILLS A SCREEN, LUIS’ VAN BEHIND HIM.
SCOTT LANG (ON SCREEN)
Hello? Is anyone home? This is,
uh, Scott Lang? We met a few years
ago. At the airport?
STEVE
This an old message?
NATASHA
(stunned)
It’s the front gate.
INT. AVENGERS COMPOUND, WORKSHOP - NIGHT
SCOTT paces, mumbling to himself.
STEVE (O.S.)
Scott, are you okay?
SCOTT LANG
What? Yes.
He turns to STEVE and NATASHA.
SCOTT LANG (CONT'D)
Have either of you guys ever
studied quantum physics?
NATASHA
Only to make conversation.
Steve glances at her. She shrugs.
SCOTT LANG
Well, five years ago, just before
this Thanos guy...I went into a
place called the Quantum Realm.
It’s like its own microscopic
universe. You can only get there
if you’re incredibly small. Hope,
she’s my...she was supposed to pull
me out. But then Thanos happened.
And I was stuck in there.
NATASHA
I’m sorry. It must’ve been a long
five years.
23
24
SCOTT LANG
(getting excited)
Okay, but that’s the thing. It
wasn’t. For me, it was only five
hours. The rules in the Quantum
Realm aren’t like out here.
They’re completely unpredictable.
Is anybody gonna eat that sandwich?
STEVE
Scott, what are you talking about?
SCOTT LANG
Time works differently in the
Quantum Realm.
Steve and Natasha share a look.
SCOTT LANG (CONT'D)
Problem is, right now, it’s chaos,
there’s no way to navigate it. But
what if we could figure out a way
to enter the Quantum Realm at a
certain point in time...and come
out in another. Like, before
ThanosSTEVE
Wait...wait. Scott. Are you
talking about a time machine?
SCOTT LANG
No, not a machine. More like a...
(searches, then gives up)
Yeah, like a time machine. I know
it sounds crazy...
NATASHA
Scott, I get emails from a raccoon.
Nothing’s crazy anymore.
SCOTT LANG
So, who do we talk to about this?
EXT. STARK ECO-COMPOUND, UPSTATE NEW YORK - DAY
LLAMAS and FARM ANIMALS GRAZE A RUSTIC-TECH ECO-COMPOUND.
EXT. STARK ECO-COMPOUND, WOODS - DAY
TONY approaches A WOODED GLADE near the house.
24
25
TONY
Morgan H. Stark. Chow time. Want
some lunch?
Silence. Then MORGAN STARK (4) steps out of her play tent,
wearing A PURPLE-BLUE IRON MAN HELMET (RESCUE).
MORGAN STARK
Define lunch or be disintegrated.
TONY
You should not be wearing that.
It’s part of a special anniversary
gift I made for Mom. You thinking
about lunch?
Tony gently takes the helmet off, revealing A YOUNG GIRL.
TONY (CONT'D)
Where’d you find this?
MORGAN STARK
Garage.
Tony picks her up, walking toward the house.
TONY
You like going in the garage? So
does Daddy. It’s all right. Mommy
never wears what I buy her.
TIME CUT:
Tony and Morgan exit the woods. Suddenly, Tony stops.
In the driveway, STEVE ROGERS stares at him. NATASHA AND
SCOTT GET OUT OF THE CAR BEHIND HIM.
EXT. STARK ECO-COMPOUND, PORCH - DAY
STEVE, SCOTT, and NATASHA sit with TONY.
TONY
I just want to thank you folks for
dropping by. It’s not every day
one gets to contemplate biting it
on an inter-dimensional timescape.
NATASHA
You’ve got some objections to the
plan.
25
26
TONY
So you’re calling it a plan. To
me, it sounds like an exotic
suicide method. Not to mention,
it’s impossible.
SCOTT LANG
We know what it sounds like.
STEVE
Tony, after what you’ve seen, is
anything really impossible?
TONY
Quantum fluctuation kinda messes
with the Planck Scale, which then
triggers the Deutsch Proposition,
can we agree on that?
(offering more tea)
Chai?
(back on message)
In layman’s terms, it means you can
cancel your Netflix subscription
because you’re not coming home.
SCOTT LANG
I did.
TONY
Which was a billion-to-one cosmic
fluke. Now you want to pull aWhat are you calling it?
SCOTT LANG
A time heist.
TONY
Oh, of course, a time heist, why
didn’t we think of this before?
Right, because it’s a pipe dream.
Who are you again?
SCOTT LANG
Still Scott...
STEVE
Tony, the Stones exist in the past.
We could get them and bring them
here.
NATASHA
We can snap our own fingers. We
can bring everybody back.
26
27
TONY
Or screw it up worse than he
already has.
STEVE
I don’t believe we would.
Tony stares at Steve, a lot of water under the bridge.
TONY
Gotta say it. Sometimes I’ve
missed that giddy optimism. Sadly,
all your high hopes won’t help me
if there’s no logical, tangible way
for me to safely execute said “time
heist.” I believe the most likely
outcome would be our collective
demise.
SCOTT LANG
Not if we strictly follow the rules
of time travel. No talking to our
past selves. No betting on
sporting eventsTONY
Stop, Scott. Stop. Are you
telling me that your plan to save
the universe is more than loosely
based on Back to the Future?
SCOTT LANG
(meaning “yes”)
No...
TONY
Good. Because that would be
horseshit. Scientifically
speaking, your brother’s picture
doesn’t disappear just ‘cause you
went to the dance with your mom.
That’s not how quantum physics
works.
NATASHA
We have to take a stand.
TONY
We did stand. And yet here we are.
SCOTT LANG
Look, Stark- Can I call you Tony?
27
28
TONY
Please don’tSCOTT LANG
TonyTONY
Fine.
SCOTT LANG
I get that you’ve got a lot on the
line, here. You’ve got a wife. A
daughter. But I lost someone very
important - a lot of us did - and
now we have a chance to save her,
and everyone else, and you won’t
evenTONY
No, Scott. I won’t. Even.
Suddenly, MORGAN walks onto the porch.
MORGAN STARK
Mommy told me to come save you.
Tony takes Morgan into his arms and heads inside.
TONY
Good job. I’m saved.
(to Steve)
I wish you were coming here to ask
me something else. I’m honestly
happy to see you. If you want to
staySteve tries one last time.
STEVE
Tony, I get it. And I’m happy for
you. I am. But this is a second
chance.
TONY
Yeah, well, I got my second chance
right here. I can’t roll the dice
on it. The table is set for six.
If you don’t talk shop, you’re
welcome to stay for lunch.
He exits.
28
29
EXT. STARK ECO-COMPOUND - DAY
Steve, Natasha, and Scott walk toward the car.
NATASHA
He’s scared.
STEVE
He’s not wrong.
SCOTT LANG
What are we gonna do? We need him.
You want to stop?
STEVE
No. I want to do it right.
(beat)
We’re going to need a really big
brain.
SCOTT LANG
Bigger than his?
EXT. DINER - NIGHT
ONLOOKERS crowd a diner window, trying to peek inside.
SCOTT LANG (O.S.)
I’m confused.
INT. DINER - NIGHT
SMART HULK ROLLS UP A PIZZA AND EATS IT LIKE A BURRITO.
SCOTT, STEVE, AND NATASHA SIT ACROSS FROM HIM.
SMART HULK
These are confusing times.
SCOTT LANG
No, that’s not what I’mSMART HULK
I’m kidding, I get it. It’s crazy.
I wear shirts now!
SCOTT LANG
But why?
SMART HULK
Five years ago, we got our asses
kicked, right?
29
30
Smart Hulk eats a stack of pancakes in two bites.
STEVE
He’s heard.
SMART HULK
It was worse for me. Because I
lost twice. First Hulk lost. Then
Banner lost. Then we all lost.
NATASHA
No one blamed you, Bruce.
SMART HULK
I did- I feel like I’m the only
one eating. Here, try some.
He holds out a pizza. They decline. He shrugs.
SMART HULK (CONT'D)
Thing is, I kept thinking, it
didn’t have to be that way. That
the best of Banner and best of
Hulk, if they’d worked together,
maybe they could’ve stopped Thanos.
SCOTT LANG
Okay. But how did...this happen?
SMART HULK
For years I treated the Hulk like a
disease, something to get rid of.
But when I started treating him
like the cure...
Smart Hulk MESHES HIS FINGERS together.
SMART HULK (CONT'D)
Eighteen months in the Gamma Lab.
I put the brains and the brawn
together. And now look at me.
Best of both worlds.
TWO KIDS amble up to the booth.
KID
Mr. Hulk? Can we get a picture?
SMART HULK
100%, little lady.
The kid hands a phone to Steve. SMART HULK makes a duck face
as Steve sheepishly snaps the pic, handing the phone back.
30
31
SMART HULK (CONT'D)
(to the fan)
Thanks, pal. Hulk out!
STEVE
So, Bruce, about what we saidSMART HULK
The time travel do-over? I don’t
know, that’s kind of outside my
field of expertise...
Natasha nods at his Smart Hulk-ness, history between them.
NATASHA
You pulled this off. I remember a
time that was impossible, too.
He considers, then finally relents, pulling out his phone.
SMART HULK
I’m supposed to be on Oprah next
week, but I guess I could move
things around.
INT. STARK ECO-COMPOUND, KITCHEN - NIGHT
TONY STARK DOES DISHES. He rinses with the sprayer. It goes
everywhere. He wipes down the counter, including...
A PICTURE OF PETER PARKER. He stares.
INT. STARK ECO-COMPOUND, SIDE PORCH - NIGHT
Tony builds HOLO MODELS: Penrose diagrams, wormholes. He
studies a STAR-SHAPED CAPACITOR, intrigued.
TONY
Friday, you up?
FRIDAY
Yes, sir.
TONY
I’ve had a mild inspiration, like
to see if it checks out. I would
like to run one last sim before we
pack it in for the night. This
time, in the shape of a Mobius
Strip, inverted.
31
32
FRIDAY
Processing.
The model forms.
TONY
All right, give me the eigenvalue
of that particle, factoring in
spectral decomp. Run it. That’ll
take a second. And don’t worry if
it doesn’t pan out, I’m just kind
of...
THE CAPACITOR GLOWS. A HOLO-MAN DRIFTS INTO A CIRCULAR
WORMHOLE, LOOPING...RETURNING TO THE PLACE IT FIRST LEFT.
FRIDAY
Model rendered.
TONY
(in awe)
Shit.
MORGAN STARK (O.S.)
Shit.
Tony turns to see HIS DAUGHTER in the doorway.
TONY
What are you doing up?
MORGAN STARK
Shit.
TONY
First of all, that’s a Mommy word,
she coined it.
MORGAN STARK
Why are you up?
TONY
I just had something on my mind.
MORGAN STARK
Was it juice pops?
TONY
Correct. Great minds think alike.
What kind do you want?
32
33
INT. STARK ECO-COMPOUND, MORGAN’S ROOM - NIGHT
Morgan eats A JUICE POP in bed. Tony watches.
TONY
You done?
(finishing her popsicle)
Now you are.
MORGAN STARK
Tell me a story.
TONY
Once upon a time, Maguna went to
bed. The end.
MORGAN STARK
That was a bad story.
He runs his hand over her hair.
TONY
Love you tons.
MORGAN STARK
Love you three thousand.
TONY
Wow, that’s a lot.
Tony turns out the light, exits.
INT. STARK ECO-COMPOUND, LIVING ROOM - NIGHT
PHOTOS crowd a side table: Pepper, Morgan, Tony. Even one of
HOWARD STARK, PEGGY CARTER & HANK PYM UNDER A SHIELD SYMBOL.
Find...PEPPER, curled up on the couch reading. Then...
TONY (O.S.)
Out like a light. Don’t know how
much she loves you but she loves me
three thousand.
PEPPER POTTS
That’s up there.
TONY
What’re you reading?
PEPPER POTTS
A book about composting33
34
TONY
I think I solved it.
Pepper looks up.
PEPPER POTTS
Just so we’re both talking about
the same thingTONY
Time travel.
PEPPER POTTS
That’s amazing.
TONY
Yeah.
PEPPER POTTS
And terrifying.
TONY
To say the least.
He sits beside her. She stares, SHARING IN HIS DILEMMA.
PEPPER POTTS
We got really luckyTONY
I knowPEPPER POTTS
Not everybody did.
TONY
I can’t help everybody.
PEPPER POTTS
Except, it sort of seems like you
can.
TONY
Not if I stopped right here.
PEPPER POTTS
Tony, trying to get you to stop is
one of the few failures of my life.
TONY
I could just lock the lab, put it
in a trunk, sink it to the bottom
of the lake, and go to bed.
34
35
PEPPER POTTS
But could you rest?
INT. AVENGERS COMPOUND, HANGAR - DAY
SCOTT WAITS IN HIS ANT-MAN 2 QUANTUM SUIT IN FRONT OF THE
OPEN VAN DOORS.
SCOTT LANG
You’re sure these modifications are
safe?
He looks over to...SMART HULK, WEARING READING GLASSES,
MAKING ADJUSTMENTS TO A NEW CONTROL PANEL.
SMART HULK
I reran my calculations three timesSCOTT LANG
Because the guy who invented this
thing is pretty much a geniusSMART HULK
I have seven PhD’s, an MD, the Hans
Bethe Award for Physics, and I’m
personal friends with Bill Nye the
Science Guy. We’re good.
SCOTT LANG
Yeah. And you look like that on
purpose.
STEVE and NATASHA enter from outside.
STEVE
Breakers are set, emergency
generator’s on stand-by.
SMART HULK
Good. If we blow the grid, I don’t
want to lose Tiny back in the
‘50’s.
SCOTT LANG
Excuse me?
NATASHA
He was kidding.
SMART HULK
I was kidding.
35
36
NATASHA
(to Hulk)
You were kidding, right?
SMART HULK
Honestly, I have no idea. We’re
attempting time travel. Either
it’s all a joke, or none of it is.
(loudly to Scott)
We’re good! Helmet on.
Scott puts on his helmet, slightly dubious.
SMART HULK (CONT'D)
Okay. I’m going to send you back
one week, give you an hour to look
around, then bring you back in ten
seconds. Make sense?
SCOTT LANG
Perfectly not confusing.
STEVE
Good luck, Scott. You’ve got this.
SCOTT LANG
(inspired)
Yes, I do, Captain America. Yes, ISMART HULK PULLS A LEVER. SCOTT SHRINKS TO NOTHING.
SMART HULK
Counting down from three, two,
one...
SUDDENLY SCOTT REAPPEARS...BUT HE’S 12-YEARS-OLD.
SCOTT LANG
Uh, guys? This doesn’t feel right.
NATASHA
Is that Scott?
SMART HULK
Probably...?
He scrambles, hitting buttons. SCOTT SHRINKS TO NOTHING.
STEVE
Get him back!
Smart Hulk flips a switch. SCOTT REAPPEARS...AT AGE 93.
36
37
SCOTT LANG
Oh, my back!
NATASHA
Bruce! Get it under control. What
the hell is going on?
SMART HULK
I got it, I know exactly what’s
going on. Pretty much.
SCOTT SHRINKS TO NOTHING AGAIN. HULK TYPES FRANTICALLY with
A PENCIL, fingers too big for the keys.
2-YEAR OLD SCOTT APPEARS.
NATASHA
Oh, my God.
STEVE
It’s a baby.
SMART HULK
It’s Scott.
STEVE
As a baby!
Smart Hulk hits a button. Baby Scott disappears.
SMART HULK
When I tell you, kill the power!
(throwing a switch)
Now!
NATASHA KILLS THE POWER. Normal Scott stumbles off the pad.
SCOTT LANG
Somebody peed my pants. I don’t
know if it was baby-me or old-me.
Or just me-me.
EXT. AVENGERS COMPOUND, HANGAR - DAY
Steve leans on the wall, discouraged. Then he hears AN
ENGINE ROAR. AN AUDI races up the drive.
It stops, the window rolling down to reveal...TONY.
TONY
Why the long face? Wild guess, he
turned into a baby?
37
38
STEVE
Among other things.
TONY
(getting out of the car)
EPR Paradox. Instead of pushing
Lang through time, you were pushing
time through Lang. It’s dangerous.
I probably should’ve cautioned you
against it.
STEVE
You did.
TONY
Thank god, I’m here. Regardless, I
fixed it.
He holds up...HIS STAR-SHAPED CAPACITOR.
TONY (CONT'D)
That is a fully-functioning, timespace GPS. I just want peace.
Resentment is corrosive. I hate
it.
STEVE
Me, too.
Something eases between them, for the first time in years.
TONY
We’ve got a shot at the Stones. I
just need you to know my
priorities. Bring back everyone we
lost, hopefully. Keep what I
found, definitely. And, let’s not
die trying.
Steve looks at Tony. Finally, he offers his hand.
STEVE
Sounds like a deal.
They shake. This is a long time coming. Finally...
TONY
But wait, there’s more. Act now,
and it comes with a bonus offer.
Tony pops the trunk. Steve stares, moved, at...HIS SHIELD.
STEVE
Tony, I don’t know38
39
TONY
What’s to know? He made it for
you. Plus, I gotta get it out of
the garage before Morgan takes it
sledding.
Steve finally picks up the shield, SLIDING IT ONTO HIS ARM.
STEVE
Thank you, Tony.
Tony chokes up, then covers by slamming the trunk.
TONY
Just don’t flaunt it. I didn’t
bring enough for the whole team.
We are getting the whole team,
right?
STEVE
We’re trying.
EXT. AVENGERS COMPOUND, HANGAR - DAY
SCOTT sits on a bench, eating a hardshell taco. THEN A
MASSIVE EXHAUST WIND BLASTS HIM, blowing his taco away.
THE BENATAR lands outside AVENGERS COMPOUND. NEBULA AND
ROCKET EMERGE. Rocket waits at the end of the gangway.
ROCKET
Hey, Humie. Where’s Big Green?
SCOTT LANG
Um, kitchen, I think.
Scott tries a smile at Nebula. She just hits her COM:
NEBULA (INTO COM)
Rhodey, careful on re-entry.
There’s an idiot in the landing
zone.
She goes in. THEN, WHAM, WAR MACHINE LANDS, STARTLING SCOTT.
SCOTT LANG
Oh, my God!
RHODEY
What’s up, Regular-Sized Man?
Rhodey goes inside as SMART HULK walks out, carrying an
overnight bag. He hands Scott some tacos.
39
40
ROCKET
Finally. I ain’t got all day.
SMART HULK
I call shotgun!
As he walks up the Benatar’s gangway, PRE-LAP A METALLIC
SCRAPING SOUND.
EXT. NEW ASGARD - DAY
The scraping goes on as we see...A NORWEGIAN FISHING VILLAGE.
Tilt to a sign: “NEW ASGARD,” in English and ASGARDIAN RUNES.
A PICK-UP passes, scraping the pavement: SMART HULK AND
ROCKET SIT IN BACK, WEIGHING DOWN THE TRUCK.
EXT. NEW ASGARD, VILLAGE - DAY
SMART HULK AND ROCKET WALK THROUGH TOWN. ASGARDIANS IN
EARTHLY CLOTHES EYE THEM WITH SUSPICION.
ROCKET
What the heck are they looking at?
SMART HULK
I’m kind of famous...
ROCKET
Yeah, I’m sure that’s it. Kind of
a step down from golden palaces and
magic hammers...
SMART HULK
They lost Asgard, then half their
people. Maybe they’re just happy
to have a home.
VALKYRIE (O.S.)
You shouldn’t have come.
VALKYRIE approaches from the pier. Smart Hulk GRINS.
SMART HULK
Hey, Valkyrie! Great to see you!
He goes for a hug...VAL DOESN’T. She studies the new him.
VALKYRIE
Uh huh. I liked you better either
of the other ways.
40
41
SMART HULK
This is Rocket.
ROCKET
Hey.
VALKYRIE
Hey.
(to both)
He won’t see you.
SMART HULK
We didn’t say we were here to seeVALKYRIE
Great, then you can hose out the
gut bucketsROCKET
We’re definitely here to see him.
VALKYRIE
He can’t give you what you need.
SMART HULK
It’s that bad?
VALKYRIE
We only see him once a month. When
he comes in for “supplies.”
She nods to A DOZEN BEER KEGS STACKED OUTSIDE A PUB.
EXT. NEW ASGARD, CABIN - DAY
Smart Hulk and Rocket knock on the door of A CABIN. Nothing.
INT. NEW ASGARD, CABIN - DAY
SMART HULK opens the door. PIZZA BOXES and LIQUOR BOTTLES
litter the floor. Rocket recoils.
ROCKET
Something died in here.
SMART HULK
Hello...? Thor...?
THOR (O.S.)
Are you here about the cable?
We hear a HEAVY SHUFFLING as someone approaches.
41
42
THOR (CONT'D)
Cinemax went out two days ago, and
the sports are all...fuzzy...
THOR enters, CONFUSED, A LITTLE DRUNK, SHIRTLESS...AND
TREMENDOUSLY FAT. Rocket and Hulk stare.
SMART HULK
Thor?
THOR
BROS! Bring it in!
Thor hugs Smart Hulk. He turns to Rocket, who steps back.
ROCKET
Yeah, I’m good.
THOR
Hulk, you know my boys, Korg and
Miek, right?
KORG and MIEK sit on the couch, playing Playstation 4.
KORG
Beer’s in the bucket. Feel free to
log on to the WiFi.
SMART HULK
Hey, guys. Long time noKORG
Thor! This kid on the TV just
called me a dickhead!
THOR
Noobmaster again?
KORG
NoobMaster69 called me a dickheadThor snatches KORG’S HEADSET and hisses into the mic.
THOR
Noobmaster, this is Thor, again.
God of Thunder. This is your last
warning. Log off this game or I
will come to your basement, rip off
your arms and shove them up your
butt.
(handing the headset back)
Right, who wants a drink?
42
(MORE)
43
SMART HULK AND ROCKET JUST STARE. Thor pulls a beer from the
fridge, and whacks the cap against STORMBREAKER.
SMART HULK
Hey, buddy, are you all right?
THOR
Don’t I look all right?
ROCKET
(under his breath)
You look like melted ice creamTHOR
So, what’s up? Just here for a
hang?
SMART HULK
We need your help. There’s a
chance we can fix everything.
THOR
Like the cable? It’s driving me
bananas.
SMART HULK
Like Thanos.
THOR GRABS HULK’S SHIRT, INTENSE. KORG RISES FROM THE COUCH.
THOR
Don’t say that name.
KORG
Yeah, we don’t say that name in
here.
Smart Hulk looks down at THOR’S HAND STILL ON HIS SHIRT.
SMART HULK
Please take your hand off me.
Thor looks into Hulk’s eyes...and gently removes his hand.
SMART HULK (CONT'D)
Now, I know the thought of...that
guy might scare youTHOR
Scared? Why would I be scared of
that guy? I’m the one who killed
that guy, remember?
(looking around)
Anyone else here kill that guy?
(MORE)
43
THOR (CONT'D)
44
Didn’t think so. Korg, tell
everyone who chopped Thanos’ head
off.
KORG
Stormbreaker?
Thor uncaps a whiskey bottle. BLAM, IT SHATTERS IN HIS HAND.
Reveal...ROCKET, BLASTER SMOKING.
THOR
Not. Cool. Man.
ROCKET
Don’t. Care. Dude.
SMART HULK
Look, I get it. You’re in a rough
patch. I’ve been there. But you
know who helped me out of it?
THOR
Was it Natasha?
SMART HULK
It was you. You helped me. And I
need you to help me again.
THOR
Ask the Asgardians down there how
much “my help” is worth.
ROCKET
At least they’re aliveTHOR
They were gods! Now they’re
fisherpeople!
(sagging into a chair)
The ones that are left, anyway.
SMART HULK
That’s the thing. I think we can
bring them back.
Thor’s tempted, but shakes his head.
THOR
Stop. Stop. I know you think I’m
down here, wallowing in my own selfpity, waiting to be rescued. But
I’m fine. I’m happy. Whatever it
is you’re offering, don’t care.
Couldn’t care less.
THOR (CONT'D)
44
45
Hulk and Rocket stare at Thor.
SMART HULK
Come on, pal. We need you.
He still can’t meet their gaze. Finally...
ROCKET
There’s beer in the ship.
THOR
(beat)
What kind?
EXT. TOKYO - NIGHT
A KARAOKE BAR LIES IN RUINS AS A TINNY POP SONG PLAYS.
BLOOD POOLS BENEATH DEAD YAKUZA THUGS, UZIS JUST OUT OF REACH
OF THEIR TATTOOED HANDS.
TITLE: “TOKYO.”
AS WE PULL BACK...THE MUSIC FADES, REPLACED BY A SOFT CRYING.
A TERRIFIED HOSTESS DARTS FROM COVER, WIPING AWAY THE CHYRON.
KEEP PULLING BACK...PAST A CAR SMASHED THROUGH THE FRONT
WINDOW, TATTOOED DRIVER SLUMPED OVER THE WHEEL, GUN IN HAND.
WE HEAR RAIN, A REVVING ENGINE, AND THEN GUNFIRE.
PULL ONTO THE SIDEWALK, TURNING JUST AS A MOTORCYCLE CRASHES,
RIDER TUMBLING PAST US IN A WHITE MOHAWKED HELMET.
ANOTHER MOTORCYCLE RACES TOWARD US, BUT...
WHFT-WHFT, TWO ARROWS SEND THE RIDER SKIDDING INTO A WALL,
TIRES SQUEALING AS THE BIKE SPINS HELPLESSLY ON ITS SIDE.
CAMERA TURNS TOWARD AN ALCOVE, WHERE A YAKUZA THUG TUMBLES
OFF THE STAIRS AS...
A MASKED FIGURE HEADS UP, STOPPING MOMENTARILY TO DRAW HIS
TELESCOPING BLADE.
BEHIND THE SMOKED GLASS OF SECOND FLOOR WINDOWS, THE FIGURE
FIGHTS ANOTHER THUG. THEN...
CRASH, THE THUG COMES SMASHING THROUGH THE WINDOW. THUD.
WHIP THROUGH THE RAIN TO THE UPPER FLOORS OF THE BUILDING.
GUNFIRE FLASHES AS THE FIGHT CONTINUES PAST THREE WINDOWS...
45
46
SUDDENLY, THE FOURTH WINDOW SHATTERS AS A YAKUZA BOSS,
AKIHIKO, LEAPS OVER THE SIDEWALK...
LANDING ON THE METAL AWNING OF A NOODLE SHOP. HE ROLLS TO
THE WET STREET, LANDING HARD ON HIS ANKLE.
THE MYSTERIOUS FIGURE GRACEFULLY LEAPS AFTER HIM, BOUNCING
OFF THE AWNING AND DROPPING TO THE STREET BELOW.
RACK UP TO GET OUR BEST LOOK YET AT...RONIN. HARD-SET EYES
STARE AT AKIHIKO THROUGH A BLACK MASK. THEY BATTLE.
AKIHIKO
(Japanese, subtitled)
Why are you doing this? We never
did anything to you!
RONIN
(Japanese, subtitled)
You survived. Half the planet
didn’t. They got Thanos. You get
me.
Akihiko attacks. Ronin slashes him across the middle.
RONIN (CONT'D)
(Japanese, subtitled)
You’re done hurting people.
Akihiko gestures at the bodies in the street.
AKIHIKO
We hurt people? You’re crazy.
Ronin slashes Akihiko’s throat. The man drops to his knees.
AKIHIKO (CONT'D)
Wait! Help me! I’ll give you
anything! What do you want?
RONIN
What I want...you can’t give me.
Ronin finishes him off. AKIHIKO GOES STILL. SIRENS WAIL.
Ronin removes his mask, revealing...
CLINT BARTON, haggard. He hears A FOOTFALL. He whirls,
katana raised...then stops. His face goes slack as...
NATASHA STEPS INTO A POOL OF LIGHT, A LARGE BLACK UMBRELLA
KEEPING HER FROM THE RAIN.
They stare at each other. Clint hasn’t seen her in years.
She hasn’t seen what he’s become.
46
47
CLINT BARTON
You shouldn’t be here.
NATASHA
Neither should you.
CLINT BARTON
I’ve got a job to do.
NATASHA
That what you’re calling this?
She moves even closer. He stiffens.
NATASHA (CONT'D)
Killing these people isn’t going to
bring your family back.
(beat)
We found something. A chance,
maybe...
CLINT BARTON
Don’t.
NATASHA
Don’t what?
CLINT BARTON
Give me hope.
NATASHA
I’m just sorry I couldn’t give it
sooner.
CLINT DISSOLVES, sagging into her arms.
INT. AVENGERS COMPOUND, HANGAR - DAY
THOR STANDS WITH A BEER IN A COZY, staring at A NEW QUANTUM
TUNNEL (2.0), AFFIXED WITH TONY’S CAPACITOR.
TONY (O.S.)
Out of the way, Lebowski.
Thor shuffles aside as Tony blows past.
TONY (CONT'D)
Hey, Ratchet, you get lost in
there?
ROCKET (O.S.)
It’s Rocket, and shut up. You’re
only a genius on Earth, pal.
47
48
TONY
And you’re only in there because
you have tiny hands.
ROCKET, COVERED IN GREASE, WRIGGLES OUT A HATCH.
ROCKET
Fixed it.
TONY
Thank you.
ROCKET
Get used to saying that.
INT. AVENGERS COMPOUND, WORKSHOP - DAY
SMART HULK fits SCOTT with A BRAND NEW TIME SUIT. NEBULA
ASSISTS. RHODEY enters the workshop, eyeing the suit.
RHODEY
Time travel suit, I like it.
SMART HULK awkwardly tries to fit a pair of RED TEST TUBES
INTO THE TIME SUIT’S BELT.
SCOTT LANG
Easy, easy. Careful with those.
SMART HULK
I’m being very carefulSCOTT LANG
You’re being very HulkyScott takes the tubes from him and inserts them, himself.
SCOTT LANG (CONT'D)
These are Pym Particles. You can’t
shrink to the Quantum Realm without
them, and since Hank Pym got
snapped out of existence, we can’t
make any more. I told you. We’ve
only got enough for one round trip
each, no do-overs.
Scott gently clicks the tubes into their housing.
SCOTT LANG (CONT'D)
Plus two test runsSUDDENLY, SCOTT SHRINKS INTO NOTHING, THEN GROWS BACK. He
takes that in...
48
49
SCOTT LANG (CONT'D)
One test run.
(embarrassed)
Okay, maybe I’m not ready.
CLINT BARTON (O.S.)
I’m game.
They turn to see CLINT leaning in the doorway.
CLINT BARTON (CONT'D)
I’ll do it.
TIME CUT:
NOW, CLINT WEARS THE TIME SUIT. Scott looks on, sulky.
SMART HULK, RHODEY, and NEBULA attach the Pym housing.
SMART HULK
Okay, Clint, you might feel a
little disoriented when you
chronoshiftRHODEY
Hang on, I’ve got to ask, if we can
do this, why don’t we just go find
baby Thanos and, you know...
Rhodey makes a STRANGLING GESTURE.
SMART HULK
Uh, one, because that’s horrible.
And, two, killing baby Thanos
doesn’t kill adult Thanos. Time
doesn’t work like that. You can’t
change the future by changing the
past.
SCOTT LANG
Sure, we can. We take the stones
before Thanos gets them, then he
doesn’t have them. Problem solved.
NEBULA
That’s not how it works.
CLINT BARTON
I don’t know. That is kind of what
I’ve heardSMART HULK
Heard from who?
49
50
RHODEY
Star Trek. Terminator. Bill and
Ted’s ExcellentSMART HULK
WHY DOES EVERYONE THINK THIS?
THAT’S NOT TRUE. IF YOU TRAVEL TO
THE PAST, THEN THAT PAST HAS BECOME
YOUR PRESENT, AND YOUR FORMER
PRESENT HAS BECOME THE PAST, WHICH
NOW CAN’T BE CHANGED BY YOUR NEW
FUTURE!
NEBULA
Exactly.
RHODEY
Excuse me?
Scott leans over, whispering:
SCOTT LANG
Apparently, Back to the Future is bullshit.
CLINT BARTON
Look, are we doing this or not?
INT. AVENGERS COMPOUND, HANGAR - DAY
CLINT WAITS ALONE ON THE PLATFORM, WEARING THE TIME SUIT.
SMART HULK readies THE QUANTUM CONSOLE as ROCKET, RHODEY,
NEBULA, THOR, and STEVE look on.
SMART HULK
Okay, Clint. Starting in three,
two, one...
Clint nods over at them, determined. SUDDENLY, HE STRETCHES,
SHRINKS, AND VANISHES. WHOOSH.
EXT. BARTON HOME, BARN - DAY
Through the slats of a barn, we see a tractor. ENERGY
FLARES, REVEALING CLINT BARTON IN A TIME SUIT.
He walks to the open door, staring at...HIS OLD HOME.
50
51
EXT./INT. BARTON HOME, FRONT PORCH - DAY
Clint climbs the porch. He accidentally kicks...A BASEBALL
MITT. Then he hears VOICES.
He stares into the house through THE SCREEN DOOR. From the
sounds of it, LAURA and THE KIDS are making dinner.
HIS DAUGHTER LAUGHS. Clint’s face crumples. Just then...HIS
QUANTUM CUFF VIBRATES. A SCREEN COUNTS DOWN: 0:03.
CLINT BARTON
No. Not yet...
(opening the door)
LILA!
BUT HIS BODY STARTS TO GLOW. 0.01- CLINT VANISHES. THE
SCREEN DOOR SLAMS. After a moment, LILA runs in.
LILA BARTON
Dad?
INT. AVENGERS COMPOUND, HANGAR - DAY
CLINT APPEARS ON THE PAD, SHAKEN. TONY and NATASHA approach.
NATASHA
Are you all right? Hey, look at
me. You okay?
TONY
Tell me something good...
Clint looks up, tearful. He holds out THE BASEBALL MITT.
CLINT BARTON
It worked. It worked.
Reveal Steve, Smart Hulk, Nebula, Rhodey, Scott, Thor, and
Rocket, looking on.
ROCKET
Holy crap. We’re freaking time
travelers.
INT. AVENGERS COMPOUND, LIVING AREA, DAY 1 - DAY (MOCO)
On a HOLO-BOARD: “MIND, SPACE, TIME, POWER, REALITY, SOUL.”
Above each word hovers...ITS ARTIFACT:
LOKI’S SCEPTER, THE TESSERACT, THE EYE OF AGAMOTTO, THE ORB,
THE AETHER CONTAINER, AND A QUESTION MARK.
51
52
STEVE
Okay. Now that we’ve got how,
we’re going to need where and when.
NEBULA, TONY, RHODEY, SCOTT, SMART HULK, ROCKET, NATASHA, and
CLINT look on.
STEVE (CONT'D)
Most folks here have encountered at
least one of the six Infinity
StonesTONY
I think you mean nearly been killed
by one of the six Infinity Stones.
SCOTT LANG
I haven’t.
(off their looks)
Just...saying.
SMART HULK
Regardless, we’ve only got enough
Pym Particles for one round trip,
each. And the Stones have been in
a lot of places throughout history.
TONY
Our history. Not all of them are
going to be a fun drop-in.
CLINT BARTON
Which means we’ve got to pick our
targets.
STEVE
Exactly.
(he taps “REALITY”)
Let’s start with the Aether. Thor,
what do we know?
Everyone looks toward...THOR, slumped over.
NATASHA
Is he asleep?
RHODEY
I’m pretty sure he’s dead.
DISSOLVE TO:
THOR sulks, looking at the Aether Container Holo: “REALITY”
Locations are listed: “SVARTALFHEIM, KNOWHERE, LONDON.”
52
(MORE)
53
THOR
The Aether’s not a stone, it’s more
of an angry sludge. My grandfather
hid it from Dark Elves in a rock
between dimensions that can only be
accessed every 5000 years.
HIS ROBOTIC EYE drifts off in the wrong direction. Thor
bangs his head, resetting his eye.
THOR (CONT'D)
Or...by Jane. She stuck her hand
in a rock. Then the Aether stuck
itself inside her. Then I took her
to Asgard. We were dating...
(depressed)
We’re not anymore.
Everyone stares.
DISSOLVE TO:
INT. AVENGERS COMPOUND, LIVING AREA, DAY 2 - DAY (MOCO)
CLOSE ON a holo image of THE ORB: “POWER.” Locations are
listed: “MORAG ?-2014, KYLN 2014, XANDAR 2014-2018.”
FIND ROCKET AS HE SLURPS FROM A CONTAINER OF LO MEIN.
ROCKET
Quill said he stole the Power Stone
from Morag.
He paces on top of the table, past SMART HULK EATING A PINT
OF “HUNKA HULKA BURNING FUDGE.”
SMART HULK
That’s a person?
ROCKET
It’s a planet. Quill was a person.
SCOTT LANG
Wait, like a planet...in space?
Rocket pinches Scott’s cheek.
ROCKET
Aw, look. It’s like a puppy, all
happy and everything.
(MORE)
53
ROCKET (CONT'D)
54
You want to go to space, puppy?
I’ll take you to space.
DISSOLVE TO:
INT. AVENGERS COMPOUND, SITTING AREA - DAY
Scott, Steve, Natasha, Clint, Rocket, and Smart Hulk sit
quietly, listening to Nebula.
NEBULA
Thanos found the Soul Stone on
Vormir.
NATASHA
And that is...?
NEBULA
A dominion of death at the very
center of celestial existence.
(beat)
It’s the place where Thanos
murdered my sister.
That hangs heavily. A moment passes. Then...
SCOTT LANG
Not it.
DISSOLVE TO:
INT. AVENGERS COMPOUND, OFFICE - DAY, EARLY
Tony, Natasha, and Smart Hulk hash it out.
NATASHA
So this ‘Time Stone’ guy...what
kind of doctor was he?
SMART HULK
Strange?
TONY
Cross between ear-nose-and-throat
and rabbit-from-hat.
SMART HULK
Had a nice place in the Village.
TONY
Yeah. Sullivan Street.
ROCKET (CONT'D)
54
55
SMART HULK
Bleecker.
TONY
Sullivan and Bleecker. They’re
cross streets.
NATASHA
Wait, he lived in New York? Guys,
pick the right year and there were
three stones in New York.
SMART HULK
(beat)
Shut the front door...
INT. AVENGERS COMPOUND, LIVING AREA, DAY 3 - DAY
STEVE blocks our view.
STEVE
Okay, we have a plan. Six stones,
three teams, one shot.
He steps away, revealing the board...
EVERYONE EYES THE TANGLE OF LINES CONNECTING SIX STONES TO
FOUR LOCATIONS TO TWO YEARS TO TEN HEROES. IT’S INSANE.
INT. AVENGERS COMPOUND, HANGAR - DAWN
DAWN RISES OUTSIDE HUGE WINDOWS. OUR HEROES MARCH PAST IN
THEIR TIME SUITS.
STEVE (O.S.)
Five years ago, we lost. All of
us.
INT. AVENGERS COMPOUND, HANGAR - DAY
THE HEROES GATHER ON THE QUANTUM PLATFORM.
STEVE
We lost friends. We lost family.
We lost a part of ourselves.
(beat)
But today we have a chance to take
it all back.
Steve takes in the groupings of heroes: RHODEY & NEBULA, NAT
& CLINT, THOR & ROCKET, TONY & SCOTT.
55
56
STEVE (CONT'D)
You have your teams and you have
assignments. Get your stone, and
get back here. One round trip
each. No mistakes. No do-overs.
He grips HIS SHIELD.
STEVE (CONT'D)
Most of us are going back to places
we know. That doesn’t mean we know
what to expect. Be careful. Look
out for each other. Improvise, if
you have to.
(looking around)
This is the fight of our lives.
And we’re going to win.
(beat)
Whatever it takes.
The platform stays quiet. Rocket WHISPERS to Scott:
ROCKET
He’s pretty good at that...
Scott nods enthusiastically.
TONY
(to Smart Hulk)
All right, you heard the man.
Stroke those keys, Jolly Green.
Smart Hulk taps in commands with HIS PENCIL. LIGHTS
ILLUMINATE EACH PAD.
SMART HULK
Tracking beacons engaged.
Clint checks his pocket: A SHRUNKEN BENATAR sits inside.
ROCKET
You promise to bring that thing
back in one piece?
CLINT BARTON
Yeah, sure thing. I’ll do my best.
ROCKET
That’s pretty lame, as far as
promises go.
SMART HULK STEPS ONTO THE PLATFORM, COMPLETING THE LINEUP.
THE PLATFORM BEGINS TO VIBRATE. NATASHA LOOKS AROUND.
56
57
NATASHA
See you in a minute.
SMART HULK
Actually, it’ll be closer to seven
or eight microseconds, give orSUDDENLY, THEY STRETCH AND VANISH, SHRINKING AWAY. WHOOSH.
THE QUANTUM CONSOLE STOPS VIBRATING. HULK’S PENCIL SLOWLY
ROLLS TOWARD THE EDGE...AND DROPS OFFEXT. NEW YORK CITY - DAY (AVENGERS 1)
TITLE: NEW YORK, 2012
THE BATTLE OF NEW YORK RAGES. IN THE MIDDLE OF IT ALL, THE
AVENGERS GATHER IN A CIRCLE, FACING IMPOSSIBLE ODDS.
At the same time, just a block away...
EXT. NEW YORK CITY, ALLEY - CONTINUOUS (AVENGERS 1)
FLASH! STEVE, SMART HULK, TONY, and SCOTT arrive at the
mouth of an alley, just out of sight.
TONY
Okay, Park Avenue’s that way.
Let’s huddle up. Suits off.
They all touch their cuffs, RETRACTING THEIR TIME SUITS.
STEVE
We’ve all got our assignments. Two
stones uptown, one stone down.
Stay low, keep an eye on timeJust then, A1 HULK BOUNDS DOWN THE STREET SMASHING THINGS.
STEVE (CONT'D)
And Bruce? Maybe smash a few
things along the way. For
appearances.
SMART HULK
(taking off his shirt)
All right, but I have to say, it
seems gratuitous.
He half-heartedly smashes a few cars.
57
58
SMART HULK (CONT'D)
Grrr...grrr...
EXT. SANCTUM SANCTORUM, ROOF - DAY (AVENGERS 1)
THE BATTLE OF NEW YORK RAGES. CHITAURI CHARIOTS ZOOM OVER
THE VILLAGE. SUDDENLY...BOOM, THE CHARIOTS EXPLODE.
ON ONE SIDE OF THE SANCTUM ROOF, A TINY, HOODED FIGURE hurls
jagged mandalas into the sky.
ON THE OTHER SIDE OF THE ROOF...SMART HULK LANDS. He heads
for a door, but...
ANCIENT ONE (O.S.)
I’d be careful going that way...
He turns to find...THE ANCIENT ONE STARING AT HIM.
ANCIENT ONE (CONT'D)
We just had the floors waxed.
SMART HULK THINKS, THEN GROWLS, TRYING TO INTIMIDATE HER.
SMART HULK
Hulk...does what...Hulk want?
ANCIENT ONE
Yes, I suppose that would be the
caseJUST THEN, ON THE ROOF OPPOSITE, A1 HULK TACKLES A CHITAURI
CHARIOT, RIPPING IT IN HALF. HE ROARS, LEAPING AWAY.
Smart Hulk blinks, sheepish. The Ancient One looks at him.
ANCIENT ONE (CONT'D)
Care to explain?
SMART HULK
I’m looking for Dr. Strange.
ANCIENT ONE
You’re about five years too early.
Stephen Strange is currently
performing surgery, 20 blocks that
way. What do you want with him?
He finally notices THE EYE OF AGAMOTTO HANGING FROM HER NECK.
SMART HULK
Well, that, actually.
58
59
ANCIENT ONE
Ah. I’m afraid not.
SMART HULK
I’m seriously sorry but...I wasn’t
asking.
Smart Hulk cracks his knuckles and moves in. She smiles.
ANCIENT ONE
You don’t want to do this.
SMART HULK
You’re right, I don’t. But I need
that stone, and I don’t have a lot
of time to debate itHe reaches for it. THE ANCIENT ONE SLAMS HER PALM INTO HIS
CHEST AND BLASTS BRUCE BANNER RIGHT OUT OF SMART HULK.
“ASTRAL BANNER” hangs in the air, staring at his frozen Smart
Hulk body. He looks at his human hands, overwhelmed.
ASTRAL BANNER
No, no, noShe topples Smart Hulk’s body with one finger. Whump.
ANCIENT ONE
Now. Let’s start over, shall we?
INT. ASGARD, PALACE, CORRIDOR - DAY (THOR 2)
TITLE: ASGARD, 2013
AN ASGARDIAN MAIDEN stands at JANE’S ROOM, handing over A
GREEN DRESS.
MAIDEN (O.S.)
For you, Lady Jane.
JANE FOSTER (O.S.)
Um, do you have anything
with...pants?
MAIDEN (O.S.)
Pants?
JANE FOSTER (O.S.)
It’s okay. Nevermind.
Pull back to...ROCKET AND THOR, WATCHING from behind a crypt.
Rocket holds a syringe-like EXTRACTION DEVICE.
59
60
THOR
That’s Jane.
ROCKET
Okay, here’s the deal. You’re
going to charm her, and I’m going
to poke her with this thing,
extract the Reality Stone, and get
gone lickety-split.
Thor looks off in the other direction, anxious.
THOR
Um, I’ll be right back. The wine
cellar is just down here. My
father used to have this barrel of
Aakonian ale. Felt like getting
hit in the face with a poleaxe.
I’ll see if the scullery has a
couple of to-go cupsThey hear SOMEONE APPROACHING. Rocket yanks Thor back
as...FRIGGA AND HER HANDMAIDENS ENTER THE CORRIDOR.
FRIGGA
Send Loki some soup. I don’t think
he’s eating. And ask our
librarians to pull some volumes
from the astronomy shelves. He
won’t read them, but at least
they’ll keep him company.
Thor watches Frigga and her coterie disappear down the hall.
ROCKET
Who’s the fancy broad?
THOR
My mother. She dies today.
ROCKET
Oh, jeez.
Thor starts to sweat.
THOR
I can’t do this. This is a bad
idea. I can’t do this...
Rocket climbs onto a marble monument.
ROCKET
Come here.
60
(MORE)
61
Thor steps closer. ROCKET SLAPS HIM ACROSS THE FACE.
ROCKET (CONT'D)
You think you’re the only one who’s
lost people? What do you think
we’re doing here? I lost the only
family I ever had. Quill, Groot,
Drax, the chick with the antenna.
All gone. I’ve lived five
meaningless years without them, and
every minute has blown Aaskvarian
gornads. I get you miss your mom.
But she’s gone. Really gone.
There are plenty of people who are
only kind of gone. And you can
help them. So, is it too much to
ask that you brush the crumbs out
of your beard, make shmoopy talk to
Prettypants, and when she’s not
looking, suck out the Infinity
Stone, and help me get my family
back?
Thor stares at him a long moment. He wipes his tears away.
THOR
I guess not.
ROCKET
Good.
THOR
Thank you. I can do this.
ROCKET
Great.
As Rocket scurries to Jane’s door, Thor murmurs to himself.
THOR
I can do this...I can do this...
(beat)
I can’t do this...
ROCKET
(peering through keyhole)
All right, heartbreaker. This is
our shot...
Rocket turns to find...THOR NOWHERE TO BE SEEN.
ROCKET (CONT'D)
Thor?
(holding his temples)
(MORE)
61
ROCKET (CONT'D)
62
I can kill him, and say the Elves
did it.
EXT. MORAG - DAY (GUARDIANS)
TITLE: MORAG, 2014
STIFF WINDS PELT THE SURFACE OF MORAG. RHODEY STEERS NEBULA
AS SHE LOWERS THE ESCAPE POD FROM THE NOW FULL-SIZED BENATAR.
RHODEY
That’s it, right on that line,
Blue. Keep dropping it.
Nearby, CLINT SURVEYS THE PLANET. GEYSERS EXPLODE. CLIFFS
LOOM. AN ORLONI bites NATASHA’s boot. She kicks it away.
CLINT BARTON
(to Rhodey)
Hey, can we hurry it up?
NATASHA
Yeah, come on, chop chop, we’re on
the clock, here.
RHODEY
All that? Really helpful!
TIME CUT:
Clint and Natasha board the Benatar. Rhodey and Nebula
remain on the planet’s surface.
NATASHA
Take care of yourself.
RHODEY
Get that stone and come back. No
messing around. You guys watch
each other’s six.
TIME CUT:
BESIDE THE POD, RHODEY AND NEBULA WATCH THE BENATAR TAKE OFF.
NEBULA
Coordinates for Vormir are laid in.
All they have to do is not fall
out.
ROCKET (CONT'D)
62
63
INT. BENATAR, FLIGHT DECK - DAY (GUARDIANS)
Clint laughs, watching Natasha expertly pilot a spaceship.
NATASHA
What?
CLINT BARTON
Nothing. Just...we’re a long way
from Budapest.
NATASHA
(pushing the throttle)
Further every second.
EXT. MORAG - DAY (GUARDIANS)
RHODEY SCANS THE LANDSCAPE.
RHODEY
So, all we have to do is hang out,
wait for this Quill guy, and follow
him to the Power Stone, right?
NEBULA
Let’s take cover. We’re not the
only ones in this reality looking
for the stones.
RHODEY
Hey, who are you talking about
right now? Who else is looking for
the stones?
NEBULA
My father. My sister. And me.
MOVE IN ON RHODEY, CONCERNED.
RHODEY
You? Where are you?
CUT TO:
EXT. BATTLEFIELD, ALIEN PLANET - DAY
BAD NEBULA CUTS DOWN A KORBINITE SOLDIER WITH DUAL BLADES.
She leads Thanos’ troops onward as they lay waste to the
Korbinite home world. JUST THEN...
63
64
BLAM! A GRENADE KNOCKS BAD NEBULA TO HER KNEES. TWO
KORBINITE RIFLEMEN BEAR DOWN ON HER.
Suddenly, A GREEN BLUR LEAPS IN, SLICING THE RIFLEMEN’S
THROATS. THE TWO HUGE SOLDIERS DROP...
REVEALING GAMORA looking down at her sister. Beat.
GAMORA
You’re welcome?
BAD NEBULA
I didn’t ask for your help.
GAMORA
And yet you always need it. Father
wants us back on the ship.
Gamora offers her hand. Bad Nebula stands on her own.
BAD NEBULA
Why?
GAMORA
He’s found an Infinity Stone.
Off Bad Nebula’s intrigued look...
INT. Q-SHIP - DAY
BAD NEBULA and GAMORA study a holo-map.
BAD NEBULA
Where?
GAMORA
On a planet called “Morag.”
EXT. BATTLEFIELD, ALIEN PLANET - DAY
A DARK FIGURE ADVANCES ACROSS THE SMOKY FIELD, RELENTLESS.
BAD NEBULA (O.S.)
Father’s plan is finally in motion.
GAMORA (O.S.)
One stone isn’t six.
ALIENS RUN FOR COVER, SCREAMING. SOMETHING CUTS THEM DOWN...
64
65
BAD NEBULA (O.S.)
It’s a start. If he gets them
all...
THANOS steps from the smoke, armored, wielding A HUGE BLADE.
GAMORA (O.S.)
We’ll never have to do this again.
THREE ALIENS CHARGE HIM. THANOS CUTS THEM DOWN. He wipes
blood from his face, and SMILES.
BAD NEBULA (O.S.)
He’ll miss it.
A SMALL FIGHTER FLIES IN, STRAFING HIM. NEVER BREAKING
STRIDE, THANOS SLICES IT IN TWO.
He looks up to his ship. A BEAM BATHES HIM IN LIGHT...
INT. Q-SHIP - DAY
Bad Nebula and Gamora turn as THANOS ENTERS THE FLIGHT DECK.
THANOS
Ronan has located the Power Stone.
I’m dispatching you to his ship.
GAMORA
He won’t like it.
Thanos wipes the blood from his blade.
THANOS
His alternative is death. Ronan’s
obsession clouds his judgement.
After Loki, I’m taking no chances.
BAD NEBULA
We will not fail you, father.
Thanos finally lays his eyes on her.
THANOS
No. You won’t.
BAD NEBULA
I swear I will make you proudSUDDENLY, BAD NEBULA STAGGERS, hand to the wall.
GAMORA
Sister, what’s65
66
Thanos watches, curious, as NEBULA DROPS TO A KNEE.
SUDDENLY, A HOLO-PROJECTION OF RHODEY BEAMS FROM HER EYE.
RHODEY (HOLO)
So, all we have to do is hang out,
wait for this Quill guy, and follow
him to the Power Stone, right?
NEBULA (HOLO) (O.S)
Let’s take cover. We’re not the
only ones in this reality looking
for the stones.
BAD NEBULA SLUMPS, breaking the projection. Gamora goes to
her, trying to prop her up.
GAMORA
Who was that?
BAD NEBULA
I...don’t know. My
head...splitting...
Bad Nebula winces. Gamora looks to Thanos.
GAMORA
Her synaptic drive was probably
damaged in battleTHANOS
Sshhh...
Thanos looks down at Bad Nebula. He gently lifts her head
with his blade. Something’s not right.
THANOS (CONT'D)
Bring her to my ship.
EXT. STARK TOWER, PENTHOUSE - DAY (AVENGERS 1)
Tony swoops onto the helipad outside the wrecked penthouse.
INT. STARK TOWER, PENTHOUSE - DAY (AVENGERS 1)
THE MIND STONE GLOWS IN LOKI’S SCEPTER. Pull back to see
it’s in A1 NATASHA’S HANDS, as she stands with...
A1 THOR, A1 STEVE, A1 TONY, A1 HULK, AND A1 CLINT (THE ICONIC
SHOT FROM AVENGERS 1), all staring down at...LOKI.
66
67
LOKI
If it’s all the same to you...I’ll
have that drink now.
From behind cover, TONY PEERS AT THE BACK SIDE OF THE
AVENGERS TABLEAU.
TONY (INTO COM)
Cap, I’ve got to say that outfit
does nothing for your ass.
STEVE (OVER COM)
No one asked you to look, Tony.
REVEAL TINY SCOTT ON TONY’S SHOULDER.
SCOTT LANG (INTO COM)
I think you look great, Cap. As
far as I’m concerned, that’s
America’s ass.
A1 NATASHA
Who gets the magic wand?
A1 STEVE
SHIELD’s coming up now.
TONY
Ball’s in play. Head’s up, Cap.
From hiding, Tony eyes A1 NATASHA WITH LOKI’S SCEPTER.
INTERCUT:
INT. STARK TOWER, HALLWAY - DAY
STEVE negotiates an empty hallway, head on a swivel. He
heads for AN ELEVATOR.
TONY (OVER COM)
Mind Stone’s on the move.
STEVE (INTO COM)
I’m in position.
INT. STARK TOWER, PENTHOUSE - DAY (AVENGERS 1)
A1 NATASHA hands LOKI’S SCEPTER to...AGENT SITWELL. He’s
about to touch the tip when...
A1 NATASHA
Careful with that.
67
68
A1 CLINT pours himself A DRINK at Tony’s bar.
A1 CLINT BARTON
Unless you want your mind erased.
And not in the fun way.
Sitwell carries the scepter to THE SERVICE ELEVATOR...WHERE A
STRIKE TEAM WAITS. BROCK RUMLOW hits “down.”
BROCK RUMLOW
We promise to be extra careful.
Scott stares at Sitwell and Rumlow.
SCOTT LANG
Who are these guys?
TONY
SHIELD. Actually, Hydra. But we
didn’t know that yet.
SCOTT LANG
Seriously? ‘Cause it’s kind of
obvious they’re bad guys.
TONY
You’re small but you’re talking
loud.
A1 THOR WALKS LOKI PAST A1 STEVE.
A1 STEVE (INTO COM)
I’m on my way down to coordinate
search and rescue.
Loki rolls his eyes...AND TRANSFORMS INTO A COPY OF STEVE.
LOKI/STEVE
“I’m on my way down to coordinate
search and rescue.” I mean,
really, how do you keep your food
down?
Thor slaps A MUZZLE on Loki, who REVERTS TO HIS OWN FORM.
A1 THOR
Yes, that’s much better.
He steers his brother into THE MAIN ELEVATOR.
A1 THOR (CONT'D)
You coming, Stark?
68
69
Nearby, A1 TONY uses his gauntleted hand to place THE
TESSERACT into AN ALUMINUM ATTACHE CASE.
A1 TONY
One sec, just packing my lunch.
TONY
All right, you’re up, Little Buddy.
There’s our stone
A1 Tony crosses to the elevator. Scott takes position,
readying himself.
SCOTT LANG
All right. Flick me.
Tony flicks Scott with a finger, sending him sailing into the
ATTACHE CASE.
TONY leaps out the window, Bleeding Edge armor forming around
him as he falls.
A1 Tony joins the others in the elevator. Then...
A1 HULK steps up to THE ALREADY CROWDED ELEVATOR. Avengers
smile awkwardly. There’s no room.
A1 HULK
(angrily)
Hulk take stairs.
EXT. STARK TOWER - DAY
Tony circles around the building...PASSING THE DESCENDING
SERVICE ELEVATOR, CROWDED WITH RUMLOW’S STRIKE TEAM.
TONY (O.S.)
Okay, Cap, I make ten of them, just
passing the 80th floor.
STEVE (O.S.)
Got it. Head to the lobby.
TONY (O.S.)
Already on my way.
INT. STARK TOWER, SERVICE ELEVATOR - DAY (AVENGERS 1)
Sitwell, Rumlow, and the STRIKE TEAM descend.
69
70
AGENT SITWELL (INTO PHONE)
Evidence secured, we are en route
to Dr. List...No, no hitches at
all, Mr. Secretary...
The car stops. The doors open...AND OUR STEVE GETS ON.
AGENT SITWELL (CONT'D)
Captain, I thought you were
coordinating search and rescue?
STEVE
Change of plans.
Steve glances at Rumlow, who’s holding THE SCEPTER.
BROCK RUMLOW
Cap.
STEVE
Rumlow.
The doors close. Everyone rides in silence. Tension mounts.
STEVE (CONT'D)
I got a call from the Secretary’s
office. I’m going to be running
point on the scepter.
Behind him, Sitwell and Rumlow exchange a glance.
AGENT SITWELL
Sir? I don’t understandSTEVE
We’ve had word there might be an
attempt to steal it.
Steve reaches for the scepter, but Rumlow holds tight.
BROCK RUMLOW
Afraid we can’t allow that, Cap.
AGENT SITWELL
(pulling out his phone)
I’ll have to check with the
DirectorSTEVE
No. Trust me. It’s okay...
Steve leans in, drawing them all close. Then he whispers:
70
71
STEVE (CONT'D)
Hail Hydra.
THEIR EYES GO WIDE.
INT. STARK TOWER, 10TH FLOOR - DAY (AVENGERS 1)
The elevator OPENS. Steve steps out with THE SCEPTER.
Sitwell and Rumlow stare after him, amazed.
THE DOORS CLOSE. STEVE SMILES TO HIMSELF.
INT. STARK TOWER, STAIRWELL - DAY (AVENGERS 1)
A1 HULK lumbers down the stairs, taking chunks out of corners
in the tiny stairwell. He snorts, growing more pissed off.
A1 HULK
SO MANY STAIRS!
INT. STARK TOWER, LOBBY - DAY (AVENGERS 1)
A1 TONY carries the TESSERACT CASE through THE LOBBY,
followed by A1 THOR and LOKI.
SWAT TROOPERS clear a path. ONE TURNS ASIDE, RAISING HIS
MASK, REVEALING...OUR TONY.
TONY (INTO COM)
Okay, Thumbelina, you’re a go.
MOVE IN CLOSE on A1 TONY to see...SCOTT, HIDING IN HIS HAIR.
SCOTT LANG (INTO COM)
Bombs away.
SCOTT DROPS BENEATH TONY’S BLACK SABBATH SHIRT.
INT. TONY STARK’S SHIRT - CONTINUOUS (AVENGERS 1)
SCOTT slides down Tony’s clavicle to the RT. He sniffs.
SCOTT LANG (INTO COM)
Is that...Axe body spray?
TONY (OVER COM)
Yeah, I had a can in the desk for
emergencies. Can we focus, please?
71
72
SCOTT LANG (INTO COM)
I’m going inside you...NOW.
SCOTT SQUEEZES BETWEEN A1 TONY’S SKIN AND THE RT.
INT. STARK TOWER, LOBBY - DAY (AVENGERS 1)
A1 TONY, A1 THOR, and LOKI approach the door. ALEXANDER
PIERCE intercepts them with a team of SHIELD AGENTS.
ALEXANDER PIERCE
Mind if I ask where you’re going?
A1 THOR
We were thinking lunch, then
Asgard. And you are?
A1 TONY
Alexander Pierce. He’s the guy
behind the guys behind Fury, so
don’t mess.
ALEXANDER PIERCE
My friends call me Mr. Secretary.
(to Thor)
I have to ask you to turn the
prisoner over to me.
A1 THOR
Loki will answer to Odin, himself.
ALEXANDER PIERCE
No, he’ll answer to us. “Odin” can
have what’s left.
(to Tony)
And we’ll need the case back, too.
That’s been SHIELD property for
over seventy years.
A1 TONY
I’m not gonna argue who has
authority here but jurisdictionally
speaking, we are on Stark property.
That is my name on the glass...
ALEXANDER PIERCE
Just give me the case.
Across the lobby, TONY OBSERVES FROM BEHIND HIS SWAT HELMET.
72
73
TONY (INTO COM)
Move it, Stuart Little. Things are
getting dicey out here.
INTERCUT:
INT. TONY STARK’S RT - DAY (AVENGERS 1)
Scott studies A TANGLE OF COPPER WIRING.
SCOTT LANG (INTO COM)
This place is a mess.
(finding a wire)
You promise you won’t die?
TONY (OVER COM)
You’re only giving me a minor
cardiac dysrhythmiaSCOTT LANG
That doesn’t actually sound minorTony sees PIERCE reaching for A1 TONY’S CASE.
TONY
Window’s closing. Pull my plug.
SCOTT LANG
Here goes...
SCOTT YANKS THE WIRE OUT OF ITS SOCKET.
IN THE LOBBY, A1 TONY GRIPS HIS CHEST.
ALEXANDER PIERCE
Stark?
A1 Tony SEIZES, dropping. THE TESSERACT CASE CLATTERS TO THE
GROUND. PIERCE and A1 THOR kneel to assist.
ALEXANDER PIERCE (CONT'D)
MEDIC!
A1 THOR
Stark? Somebody get some help! Is
it your chest machine?
THE LOBBY BUZZES, SHIELD AGENTS RUNNING EVERYWHERE.
In the bustle, SCOTT SLIDES OUT OF A1 TONY’S SLEEVE. He
SHOVES THE TESSERACT CASE HARD. It SPINS across the floor...
RIGHT INTO TONY’S HAND. Tony walks toward a side door.
73
74
TONY (INTO COM)
Meet me in the alley. I’m just
gonna grab a slice at Famous Ray’sBUT AS TONY PASSES THE STAIRWELL DOOR...HULK BANGS IT OPEN,
SMASHING TONY IN THE FACE, SENDING HIM TUMBLING.
A1 HULK BASHES HIS WAY THROUGH THE LOBBY.
The Tesseract Case hits the floor, popping open. THE
TESSERACT FALLS OUT, spinning past Tiny Scott...
STOPPING AT LOKI’S FEET. Loki stares at it in disbelief. He
glances at A1 Thor and Pierce giving A1 Tony first aid.
THEN LOKI CALMLY REACHES DOWN WITH HIS MANACLED HANDS, GRASPS
THE TESSERACT...AND TELEPORTS AWAY. Scott stares, stunned.
SCOTT LANG
That wasn’t supposed to happen, was
it?
A1 THOR LOOKS UP, REALIZING...
A1 THOR
WHERE’S LOKI?
SHIELD TEAMS FAN OUT, ON ALERT.
INT. STARK TOWER, 14TH FLOOR - DAY (AVENGERS 1)
STEVE heads down a hall, SCEPTER IN HAND.
SECURITY (OVER SPEAKER)
Building-wide alert, all units.
Target Loki, maximum force.
STEVE (INTO COM)
Tony? What’s going on? Tell me
you got that cubeA1 STEVE (O.S.)
Strike Teams, clear Forty, then
work down.
Before Steve can hide...A1 STEVE ROUNDS THE CORNER.
STEVE
Oh, great.
A1 STEVE (INTO COM)
Disregard. I have eyes on Loki,
Fourteenth Floor.
74
75
STEVE GENTLY LAYS THE SCEPTER DOWN, AND PULLS OFF HIS SHIELD.
STEVE
I’m not Loki. And I don’t want to
hurt you.
A1 STEVE PULLS HIS SHIELD OFF HIS BACK.
A1 STEVE
You’re not going to get the chanceA1 STEVE KICKS STEVE IN THE FACE. Steve stumbles.
STEVE
Forgot about that one.
They grapple. Both their shields fall to the ground...
THEY BOTH STAMP ON THEM, simultaneously flipping the shields
back to their arms. A1 Steve looks impressed.
A1 STEVE SWINGS. STEVE DUCKS, HAMMERING HIM. A1 Steve wipes
the blood from his lip, squaring off.
A1 STEVE
I can do this all daySTEVE
Yeah, I know...
They battle on. A1 Steve tackles Steve, knocking his shield
aside, RIPPING OPEN ONE OF STEVE’S BELT COMPARTMENTS:
THE COMPASS FALLS OUT, OPENING TO REVEAL PEGGY’S PICTURE. A1
Steve goes cold. He picks up the compass, FLABBERGASTED.
A1 STEVE
Where’d you get this?
STEVE
PX. Camp Lehigh. 1943.
A1 Steve stares at Steve, eyes narrowing.
A1 STEVE
You’ve got a lot of nerve.
HE HAMMERS STEVE ACROSS THE HALL. Steve goes skidding. He
groans, looking up to see...HE’S INCHES FROM THE SCEPTER.
A1 STEVE moves in. STEVE whips around, touching THE SCEPTER
to A1 Steve’s chest. A1 STEVE’S EYES GO BLACK. HE FREEZES.
75
76
Steve stares, panting. Finally, he picks up the compass from
the floor, then considers A1 STEVE’S ASS.
STEVE
That is America’s ass.
EXT. SANCTUM SANCTORUM, ROOF - DAY (AVENGERS 1)
SMART HULK’S BODY lies slumped on an Adirondack chair, a
floppy sun hat covering his face.
ANCIENT ONE (O.S.)
I wish I could help you, Bruce...
THE ANCIENT ONE waters a rooftop garden. She looks to ASTRAL
BANNER, who’s only just getting used to being see-through.
ANCIENT ONE (CONT'D)
But if I were to give up the Time
Stone to help your reality, I’d be
dooming my own.
ASTRAL BANNER
Yeah, with all due respect, I’m not
sure the science supports that.
ANCIENT ONE
And yet, you’re the one currently
standing in the middle of my
hydrangeas.
Banner looks down to see, indeed, he has phased through the
middle of the hydrangeas. He steps out of it.
ASTRAL BANNER
Lady, I just want to borrow your
necklaceANCIENT ONE
At what cost?
SHE CONJURES A MAGICAL PROJECTION OF THE INFINITY STONES,
SPINNING IN UNISON. A TUNNEL OF GOLDEN LIGHT POURS FORTH.
ANCIENT ONE (CONT'D)
The Infinity Stones create the
experience you know as the flow of
time. Remove one of the stones,
and the flow splits.
She plucks the GREEN TIME STONE out of the array: A SMALLER,
BLACKENED RIVER BRANCHES OFF FROM THE FIRST.
76
(MORE)
77
ANCIENT ONE (CONT'D)
Now, your timeline might benefit.
My new one...would definitely not.
SHE GESTURES. OUR CAMERA ZOOMS INTO THE BLACKENED TUNNEL...
TUNNEL POV: HUNDREDS OF PEOPLE RUN AS WE FLY OVER A CROWDED
STREET, UP TO...THE BURNING HONG KONG SANCTUM.
ANCIENT ONE (O.S.) (CONT'D)
In this new branch reality, without
our chief weapon against the forces
of darkness, our world would be
overrun...
MOVE UP TO SEE DORMAMMU IN THE SKY. HE OPENS HIS MOUTH...
BACK ON THE ROOF...THE ANCIENT ONE PLUCKS MORE STONES FROM
THE GOLDEN RIVER, CREATING FIVE MORE BLACKENED TRIBUTARIES.
ANCIENT ONE (CONT'D)
For each stone you remove, you’ll
create a new, vulnerable timeline.
Millions will suffer.
(beat)
Now tell me, Doctor. Can your
science prevent all that?
ASTRAL BANNER
No. But it can erase it.
Astral Banner reaches in and grabs THE VIRTUAL TIME STONE.
ASTRAL BANNER (CONT'D)
Because once we’re done with the
stones, we can return each one to
its own timeline. At the moment it
was taken. So chronologically, in
that reality, the stone never left.
HE PUTS THE TIME STONE BACK. THE BLACK TIMELINE DISAPPEARS.
ANCIENT ONE
You’re leaving out the most
important part, though. In order
to put the stones back, you’d have
to survive.
ASTRAL BANNER
We will. I will. I promise.
ANCIENT ONE
I can’t risk this reality on a
promise.
(MORE)
77
ANCIENT ONE (CONT'D)
78
It is the duty of the Sorcerer
Supreme to protect the Time StoneASTRAL BANNER
Yeah? Then why the hell did
Strange give it away?
The Ancient One freezes.
ANCIENT ONE
What did you say?
ASTRAL BANNER
Strange gave Thanos the Time Stone.
ANCIENT ONE
Willingly? Why?
ASTRAL BANNER
Don’t know. Maybe he made a
mistake.
ANCIENT ONE
Or I did.
The Ancient One looks out over a recovering NYC.
ANCIENT ONE (CONT'D)
Strange is meant to be the best of
us.
ASTRAL BANNER
Then he must have had a reason.
ANCIENT ONE
I fear you may be right...
Finally, she waves her hand and...WHOOSH! HE REINTEGRATES
INTO THE SMART HULK BODY. Smart Hulk gets up, WOOZY.
SHE REMOVES THE TIME STONE FROM THE EYE, HANDING IT TO HIM.
SMART HULK
Thank you.
ANCIENT ONE
I’m counting on you, Bruce.
(re. the city behind her)
We all are.
EXT. SANCTUARY 2 - DAY
THE SANCTUARY-2 LOOMS.
ANCIENT ONE (CONT'D)
78
79
INT. SANCTUARY 2 - DAY
BAD NEBULA HANGS SUSPENDED. CABLES travel from her “brain”
to a GLOWING WALL OF DATABANKS, which silhouettes...
THANOS. He regards her for a moment. Then...
THANOS
Run diagnostics. Show me her
memory file.
At the console, EBONY MAW SCANS NEBULA’S INFORMATION.
NEBULA’S BODY TWITCHES.
GAMORA WATCHES, TORN. SOON...AN ALERT FLASHES.
EBONY MAW
Sir, the file appears...entangled.
It was a memory, but not hers.
(dawning on him)
There’s another consciousness
sharing her network. Another
Nebula.
THANOS
Impossible.
EBONY MAW
This duplicate carries a time
stamp...from nine years in the
future.
THANOS
Where is this “other Nebula?”
EBONY MAW
In our solar system. On Morag.
THANOS
Can you access her?
EBONY MAW
Yes. The two are linked.
THANOS PEERS INTO BAD NEBULA’S GLASSY EYES...
THANOS
Search the duplicate’s memory for
Infinity Stones.
Maw works the console. Thanos steps aside as BAD NEBULA’S
BODY QUIVERS. AFTER A BEAT, A BEAM SHOOTS OUT OF HER EYE...
PROJECTING AN IMAGE OF AVENGERS COMPOUND:
79
80
STEVE, TONY, RHODEY, SCOTT, SMART HULK, ROCKET, NATASHA,
CLINT, AND THOR GATHER IN THE LIVING AREA.
SMART HULK (HOLO)
-the Stones have been in a lot of
places throughout history.
TONY (HOLO)
Our history. Not all of them are
going to be a fun drop-in.
CLINT BARTON (HOLO)
Which means we’ve got to pick our
targets.
STEVE (HOLO)
Exactly. Let’s start hereTHANOS
Freeze image.
THE IMAGE FREEZES. THANOS STARES, RECOGNIZING THEM.
GAMORA
Terrans?
THANOS
Avengers. Unruly wretches.
He gestures to A BLURRY REFLECTION WITHIN THE HOLOGRAM.
THANOS (CONT'D)
What’s this reflection. Amplify
this, Maw.
EBONY MAW ZOOMS IN, REVEALING...A REFLECTION OF NEBULA.
GAMORA
I don’t understand. Two Nebulas?
Thanos walks into the hologram, studying the faces.
THANOS
No. The same Nebula. From two
different times.
(to Ebony Maw)
Set course for Morag. And scan the
duplicate’s memories.
(beat)
I want to see everything...
80
81
INT. ASGARD, PALACE, CORRIDOR - DAY (THOR 2)
Frigga walks down a corridor, alone. THOR SNEAKS FROM COLUMN
TO COLUMN, FOLLOWING HER. She PAUSES, sensing something.
Thor HIDES. When he peers again, FRIGGA IS GONE. Then he
turns around to find FRIGGA STANDING BESIDE HIM. Thor jumps.
FRIGGA
What are you doing?
THOR
Mother! What? Nothing. Hello.
FRIGGA
You’re better off leaving the
sneaking to your brother.
(re. his bathrobe)
What are you wearing?
THOR
I always wear this. It’s one of my
favorites.
FRIGGA
And what’s wrong with your eye?
THOR
Oh, that. You remember
the...Battle of Harokin. I took
a...broadsword to the face?
He trails off, at a loss, staring at his dead mom. Frigga
gently lays her hand on his cheek...READING HIM.
FRIGGA
Oh. You’re not the Thor I know at
all, are you?
THOR
Yes, I amFRIGGA
I was raised by witches, boy. I
see with more than eyes, you know
that.
(eyeing him)
I can see the future hasn’t been
kind to you, has it?
THOR
I didn’t say I was from the
future...
81
82
FRIGGA
Thor...
Frigga gives her son a stern, “don’t lie to me” look. Thor
stares at his mom a long moment. Then, he cracks:
THOR
I’m totally from the future.
FRIGGA
Yes, you are.
THOR
I need to talk to you.
FRIGGA
We can talk.
Frigga GRABS Thor by the cloak and yanks him away.
INT. ASGARD, PALACE, JANE FOSTER’S CHAMBER - DAY (THOR 2)
CLOSE ON A PAIR OF MODERN BOOTS BENEATH AN ASGARDIAN GOWN.
TILT UP TO FIND...JANE FOSTER. She studies the outfit.
Behind her, ROCKET RAISES THE EXTRACTION DEVICE OVER HIS
HEAD, ABOUT TO JAB...
INT. ASGARD, PALACE, FRIGGA’S CHAMBER - DAY (THOR 2)
FRIGGA sits with THOR in her chambers.
THOR
...and then it was done. His head
over there. Body over there. And
me in the middle. Just an idiot
with an axe.
FRIGGA
You’re no idiot. You’re here,
aren’t you? Seeking counsel from
the smartest person in Asgard?
THOR
Yeah, I guess.
FRIGGA
An idiot, no. A failure,
absolutely.
82
83
THOR
That’s a little harshFRIGGA
Quite a colossal one, by the sound
of it.
THOR
Okay, maybe just stop talking.
FRIGGA
And you know what that makes you?
Just like everyone else.
THOR
I’m not supposed to be like
everyone else, though.
FRIGGA
Everyone fails at “who they’re
supposed to be,” Thor. The measure
of a person, of a hero, is how well
they succeed at being who they are.
Thor stares at her, biting back emotions.
THOR
I’ve really missed you, Mum.
INT. ASGARD, PALACE, CORRIDOR - DAY (THOR 2)
ROCKET TEARS DOWN THE HALL, EXTRACTION DEVICE IN HAND.
ROCKET
I got it I got it I got it!
A TROOP OF EINHERJAR CHASE AFTER HIM.
INT. ASGARD, PALACE, FRIGGA’S CHAMBER - DAY (THOR 2)
THOR looks at THE OBSERVATORY: Dark Elves will soon attack.
THOR
Mum, I have to tell you somethingFRIGGA
No, son. You don’t. You’ve come
to repair your future, not mine.
THOR
But your future83
84
FRIGGA
Is none of my business.
Thor stares at her, torn. THEN ROCKET RACES INTO THE ROOM.
ROCKET
(to Frigga)
Hi. You must be Mom.
(to Thor, re. the device)
I got the thing. Come on, we gotta
moveThor looks to Frigga.
THOR
I wish we had more timeFRIGGA
This was a gift. Now, go be the
man you’re meant to be.
(beat)
And eat a salad.
Thor smiles. He and Rocket activate their time suits.
ROCKET
Three...twoTHOR
No. Wait.
THOR DRAMATICALLY HOLDS OUT HIS HAND. A long moment passes.
ROCKET
What am I looking at?
FRIGGA
Sometimes it takes a second.
Then...MJOLNIR SAILS INTO HER SON’S HAND. She grins, proud.
THOR
(relieved)
Still worthy.
Mother and son look at each other for the last time.
THOR (CONT'D)
Goodbye, Mum.
FRIGGA
Goodbye, Son.
THEN, WHOOSH! THOR AND ROCKET DISAPPEAR.
84
85
Suddenly...THE PALACE RUMBLES. Frigga looks to the window,
WHERE A DARK ELF WARSHIP DECLOAKS. SHE REACHES FOR A SWORD.
PRELAP: “COME AND GET YOUR LOVE,” BY REDBONE.
EXT. MORAG, ABANDONED CITY - DAY (GUARDIANS)
PETER QUILL, in RED, PLEATHER TRENCH COAT AND HEADPHONES,
dances through the ruins of an alien city.
PULL BACK TO...NEBULA AND RHODEY WATCHING FROM BEHIND A ROCK.
RHODEY
So, he’s an idiot.
NEBULA
Yes.
Quill spins, arms out, eyes shut. When the horizon finally
settles...he sees A METAL MAN STANDING THERE WAITING FOR HIM.
QUILL
Oh, fuBAM! RHODEY DECKS QUILL IN THE FACE. Quill drops, out cold.
RHODEY
Sorry about that. I know you guys
were teammates and everything.
NEBULA
Do you hear me complaining?
Nebula rifles through Quill’s sack. She pulls out AN
ELECTRONIC LOCK PICK.
RHODEY
What is that?
NEBULA
The tool of a thief. Come on.
They set out toward the RUINED CITY.
INT. MORAG, TEMPLE VAULT - DAY (GUARDIANS)
WHIR, CLICK. TWO HUGE, STONE DOORS SLIDE OPEN, REVEALING
NEBULA AND RHODEY. SHE STEPS IN. RHODEY TRIES TO STOP HER.
85
86
RHODEY
Hang on. This would be about the
time the spikes come out, you know,
with the skeletons still on them?
NEBULA
What are you talking about?
RHODEY
I’m just saying, when you break
into a place called, “The Temple of
the Power Stone”, there are
usually...
Ahead, they see...THE POWER STONE ORB HOVERING ABOVE ITS
PEDESTAL, SURROUNDED BY A WEB OF LASER THREADS.
RHODEY (CONT'D)
Traps and stuff.
(Nebula steps inside)
Okay, don’t say I didn’t warn you.
Rhodey scans the laser web, strategizing.
RHODEY (CONT'D)
These are photovoltaic lasers on a
constantly shifting matrix. Gonna
be damn near impossible to
neutralize unless weSUDDENLY, NEBULA REACHES HER CYBERNETIC ARM THROUGH THE WEB.
SHE GRABS THE ORB...BUT THE WEB GRIPS HER, FRYING HER ARM.
She pulls out the orb, but sees Rhodey staring at HER
BLACKENED CLAW.
NEBULA
I wasn’t always like this.
He sees actual emotion somewhere inside her. Favor his
exoskeletal leg braces as he softens.
RHODEY
Yeah, me either. I guess we do the
best with what we’ve got, huh?
SHE HANDS HIM THE ORB WITH JUST THE GHOST OF A SMILE.
RHODEY (CONT'D)
Let’s get out of here. Place gives
me the creeps. Sync up. Three...
two...one...
86
(MORE)
87
RHODEY TAPS HIS CUFF, SHRINKING AWAY. Nebula goes for
hers...BUT HER EYES ROLL BACK.
SHE COLLAPSES, SEIZING VIOLENTLY, THEN GOING STILL. Her eyes
snap open, projecting a hologram of...THANOS.
THANOS (HOLO)
What’s wrong?
INT. SANCTUARY-2, INTERROGATION CELL - DAY
BACK IN THE INTERROGATION CELL, BAD NEBULA’S EYE BEAMS: IN
THANOS’ LODGE, THE AVENGERS SURROUND A ONE-ARMED THANOS.
THANOS STUDIES HIS HOLO-FUTURE-SELF, WATCHING HIS DESTINY
PLAY OUT IN FRONT OF HIM.
BRUCE BANNER (HOLO)
You murdered trillions.
THANOS (HOLO)
You should be grateful.
NATASHA (HOLO)
Where are the stones?
THANOS SMIRKS, PUTTING THE PIECES TOGETHER.
THANOS (HOLO)
Gone. Reduced to atoms.
BRUCE BANNER (HOLO)
You used them two days ago!
THANOS (HOLO)
I used the stones to destroy the
stones. The work is done. It
always will be...
HE STEPS FORWARD, FINISHING HIS OWN THOUGHT.
THANOS (HOLO) (CONT'D)
I AM INEVITABLETHANOS (CONT'D)
I AM INEVITABLE.
Thanos nods to Maw, who freezes the program. THANOS WALKS
THROUGH THE HOLOGRAM, STUDYING THE HEROES.
GAMORA
What did you do to them?
THANOS
Nothing. Yet.
(piecing it together)
(MORE)
87
THANOS (CONT'D)
88
They’re not trying to stop
something I’m going to do in our
time. They’re trying to undo
something I’ve already done in
theirs.
GAMORA
(uneasy)
The stones.
THANOS
I found them all. I won. Tipped
the cosmic scales to balance.
EBONY MAW
Sire. This is your future?
THANOS
My destiny.
He stares, mind whirling. He nods. THE MEMORY RESUMES.
RHODEY (HOLO)
He’s lying.
NEBULA (O.S.)
My father is many things. A liar
is not one of them.
THANOS (HOLO)
Thank you, daughter. Perhaps I’ve
treated you tooWHUMP. THOR CUTS OFF THANOS’ HEAD. THE VIEW LINGERS AS
“NEBULA” STARES AT HER DEAD FATHER.
THANOS STUDIES HIS SEVERED HEAD...AND SMILES.
THANOS (CONT'D)
And that is destiny fulfilled.
Gamora stares, torn. But Ebony Maw fumes on Thanos’ behalf.
EBONY MAW
Sire. Your daughter is a traitor.
EBONY MAW GESTURES: CABLES WRAP AROUND NEBULA’S NECK. SHE
AWAKENS, PANICKED. She looks up at Thanos.
BAD NEBULA
(choking)
No. Please, father. That’s not
me. I would never betray you.
PleaseTHANOS (CONT'D)
88
89
Thanos UNWRAPS the cord. He touches his daughter’s face.
THANOS
Ssh, child. I know. And you’ll
have the chance to prove it...
INT. MORAG, TEMPLE VAULT - DAY (GUARDIANS)
ZZZT. ON THE FLOOR, NEBULA’S EYES SNAP OPEN, HORRIFIED.
NEBULA
He knows...
EXT. MORAG - DAY (GUARDIANS)
BOOTS POUND ACROSS THE ROCKS. NEBULA RUNS FLAT OUT,
DESPERATE, HEADING FOR THE ESCAPE POD.
INT. ESCAPE POD - DAY (GUARDIANS)
NEBULA rushes to the console and opens A COMMUNICATION LINK.
NEBULA (INTO COM)
Barton, Romanoff, come in. We have
a problem. Thanos knows! ThanosSuddenly, A SHADOW falls over the Pod. Nebula looks out the
cockpit window...
AS A TRACTOR BEAM PULLS THE ENTIRE POD SKYWARD.
EXT. NEW YORK CITY, ALLEY - (AVENGERS 1)
IN THE ALLEY, Steve drops down from the building. He hears A
WHISTLE. TONY waves from behind a crashed car.
TONY
We’ve got a problem.
TIME CUT:
STEVE huddles with TONY and SCOTT.
STEVE
How could you lose it?
TONY
What do you want? I got hit in the
head with a Hulk!
89
90
SCOTT LANG
You said we only had one shot.
This was our shot. We shot it. It
was six stones or nothing! Six
stonesTONY
You’re not helpingSCOTT LANG
You ruined the Time Heist!
TONY
Okay, okay, Loki’s from Asgard,
he’s comfortable there. Knows the
restaurants. It’s a safe bet he
visits home. If we can just grab
This-Thor and explain the
situation, he and I can flySTEVE
Loki could be anywhere in the
universe. We’d be old men before
we found him.
As Steve and Scott debate, MOVE IN ON TONY, MIND WHIRLING...
STEVE (CONT'D)
What other options did we have on
the Tesseract?
SCOTT LANG
Whoa, whoa. We don’t have any
other options. We can’t go to any
other times. No do-overs! We’ve
only got one particle left, each.
Use it now, that’s it, bye-bye, we
don’t come home.
STEVE
But if we don’t try, nobody else
comes home, either.
TONY
I got it! There’s another way to
re-take the Tesseract, and acquire
new particles.
(to Steve)
Military installation, Garden
State.
Steve eyes Tony, BEGINNING TO UNDERSTAND.
90
91
STEVE
When were they both there?
TONY
I have a vaguely exact idea.
STEVE
How vague?
SCOTT LANG
Hang on, what’s in New Jersey?
TONY
I know they were there, and I know
how I know.
STEVE STUDIES TONY A LONG MOMENT...
STEVE
Looks like we’re improvising.
SCOTT LANG
Wait! What are you improvising?
STEVE HANDS SCOTT THE STAFF.
STEVE
Scott, take this back to the
Compound.
TONY
All right, suits on. Try these
coordinates. 04-07-19-70...
SCOTT LANG
Steve- Cap- Captain America, if you
do this and he’s wrong...you’re not
coming back.
Steve and Tony let the weight of that sink in. He’s right.
Even so, Tony turns to Steve.
TONY
You trust me?
STEVE
I do.
THEY STARE AT EACH OTHER, THEN...CLICK. THEY BOTH HIT THEIR
CUFFS. TONY AND STEVE SHRINK TO NOTHING...
91
92
EXT. NEW JERSEY WOODS - DAY (1970)
CUE MUSIC: “HEY LAWDY MAMA,” STEPPENWOLF.
A 1970 Oldsmobile motors down a wooded road. The bumper
sticker reads: “NUFF SAID.”
At the wheel, STAN LEE (48), LONG HAIR, MOUSTACHE, OPEN
SHIRT, sings along to the radio, TWO LADIES at his side.
He passes by AN ARMY BASE, throwing a peace sign to A GUARD.
STAN LEE
Make love, not war, baby!
He roars off, passing A FADED SIGN: “U.S. ARMY - CAMP LEHIGH -
BIRTHPLACE OF CAPTAIN AMERICA.” MOVE INTO THE BASE...
TONY (O.S.)
You weren’t actually born here,
right?
EXT. CAMP LEHIGH - DAY (1970)
SOLDIERS MARCH PAST AS...
Tony and Steve round the corner, TONY IN A LAB COAT and STEVE
IN GREEN KHAKIS, LOW-PULLED CAP, AND MIRRORED SUNGLASSES.
STEVE
The idea of me was.
TONY
(looking around)
All right. If I was SHIELD and I
wanted to hide my quasi-fascistic
black site, where would I hide it?
STEVE
In plain sight.
Steve nods at A MAN IN A GRAY SUIT approaching a building,
“MUNITIONS.” He opens the door with a retro-tech PUNCH CARD.
TONY TOUCHES HIS GLASSES: HE X-RAYS INTO THE GROUND,
ILLUMINATING...TWENTY FLOORS OF SECRET, UNDERGROUND BASE.
INT. CAMP LEHIGH, ELEVATOR - DAY (1970)
Muzak plays as STEVE and TONY ride down with A FEMALE SHIELD
AGENT.
92
93
She stares awkwardly at Tony. Steve keeps his hat down.
Ding. The doors open. Tony exits, then turns back to Steve.
TONY
Good luck with that mission,
Captain.
STEVE
Good luck with your project,
Doctor.
Tony ducks out. The doors close. The Agent turns to Steve.
FEMALE SHIELD AGENT
You new here?
STEVE
Not exactly.
INT. CAMP LEHIGH, SHIELD FACILITY, ARCHIVES - DAY (1970)
TONY searches HIGH, CROWDED ARCHIVE SHELVES.
TONY
Come on, you little hexahedron,
where are you hiding?
Finally, he spots A HIGH TECH SAFE. He grabs a briefcase,
then NANOS A GAUNTLET, FRYING THE SAFE’S LOCK.
It opens revealing...THE TESSERACT. Tony smiles.
TONY (CONT'D)
You may not know it now, but
someday you’re going to be a real
pain-in-the-ass.
Just then...THE ARCHIVE DOOR OPENS.
HOWARD STARK (O.S.)
Hey, Arnim, you in here?
TONY LOCKS THE CUBE IN THE BRIEFCASE JUST BEFORE...
HOWARD STARK (49) APPEARS, carrying ROSES AND A CAN OF
SAUERKRAUT. TONY STARES, STUNNED.
HOWARD STARK (CONT'D)
Hey, I’m looking for Dr. Zola. You
seen him?
TONY
No. Haven’t seen a soul.
93
94
Tony stands in front of his father, overwhelmed. Howard
looks at him, a bit suspicious.
HOWARD STARK
I know you?
From his pocket, TONY GENERATES A BADGE OUT OF NANO-TECH.
He holds it out.
TONY
No, sir. Just visiting from MIT.
HOWARD STARK
That so? Got a name?
TONY
Howard...
HOWARD STARK
Easy to rememberTONY
Potts.
HOWARD STARK
I’m Howard Stark.
(shaking hands)
You seem a little green around the
gills, Potts. Need some air?
TONY
That’d be swell.
Tony distractedly walks away, leaving the briefcase.
HOWARD STARK
Need the briefcase?
PRE-LAP A RINGING PHONE...
INT. CAMP LEHIGH, SHIELD FACILITY, PYM’S LAB - DAY (1970)
CLOSE ON: AN ANT. A phone continues to ring. Then...
HANK PYM (O.S.)
Hello?
PULL BACK: THE ANT CRAWLS IN AN ANTFARM ON A LAB SHELF.
STEVE (OVER PHONE)
Dr. Pym?
94
95
HANK PYM (O.S.)
That would be the number you
called, yes.
PAN across the shelf to A CHART OF WASP MATURATION.
STEVE (OVER PHONE)
This is Captain Stevens, from
shipping. We have a package for
you.
KEEP PANNING to A PROTOTYPE ANT-MAN HELMET.
HANK PYM (O.S.)
So bring it up.
STEVE (OVER PHONE)
That’s the thing, sir, we can’t.
ARRIVE ON...HANK PYM (20’s), in brown hair and lab coat.
HANK PYM
Maybe I’m confused. Isn’t that
your job?
STEVE (OVER PHONE)
It’s just...sir, the box is
glowing. And to be honest, a
couple of our mail guys aren’t
feeling greatHANK PYM
They didn’t open it, did they?!
INT. CAMP LEHIGH, SHIELD FACILITY, HALLWAY - DAY (1970)
A DOOR MARKED, “DR. HENRY PYM,” flies open. Hank exits,
fuming, brushing past...STEVE.
Steve watches Hank stalk off...THEN DUCKS INTO HANK’S LAB.
INT. CAMP LEHIGH, SHIELD FACILITY, ELEVATOR - DAY (1970)
HOWARD and TONY step onto AN ELEVATOR. The doors shut.
TONY
Sauerkraut and a bouquet...big
night planned?
95
96
HOWARD STARK
(lifting one at a time)
My wife’s expecting. And too much
time at the office.
Tony puzzles the dates out in his head...
TONY
Congratulations.
HOWARD STARK
Thanks.
TONY
How far along is she?
HOWARD STARK
Gee, I suppose...
(indicating)
...this far. She’s at the point
where she can’t stand the sound of
my chewing. So I guess I’ll be
eating in the pantry again.
TONY
I have a little girl.
TONY SMILES. He’s talking about the man-he’s-talking-to’s
granddaughter, fifty years before she’s born.
HOWARD STARK
A girl would be nice. Less chance
she’d turn out exactly like me.
TONY
Would that be so bad?
HOWARD STARK
Let’s just say the greater good
hasn’t always outweighed my own
self interest.
The elevator doors open.
INT. CAMP LEHIGH, SHIELD FACILITY, PYM’S LAB - DAY (1970)
STEVE searches Hank’s lab, finally opening the fridge to
find...A TRAY OF BRAND NEW PYM PARTICLES.
96
97
INT. CAMP LEHIGH, SHIELD FACILITY, HALLWAY - DAY (1970)
Steve exits Hank’s lab and heads for the elevator. But it
opens, revealing THE FEMALE AGENT FROM EARLIER, WITH AN M.P.
M.P.
You’ve never seen either of these
men before?
FEMALE SHIELD AGENT
No. But I have an eye for this.
Something looked fishy.
M.P.
Describe ‘fishy’.
FEMALE SHIELD AGENT
One of them had a hippie beard.
M.P.
We talking Bee Gees or Mungo Jerry?
FEMALE SHIELD AGENT
Definitely Mungo Jerry.
M.P.
(over walkie-talkie)
This is Chesler. We need every
available agent to sub-level 6. We
have a potential breach.
Steve ducks through the nearest door...
INT. CAMP LEHIGH, SHIELD FACILITY, PEGGY’S OFC. - DAY (1970)
Steve enters a darkened office. A glass wall separates it
from another bullpen.
Then he sees something on the desk. He stares, stunned, at
two photos: one features PEGGY CARTER STANDING WITH JFK.
THE OTHER IS OF SKINNY STEVE.
Steve turns the desk nameplate around: “MARGARET CARTER.”
Steve realizes that even twenty-five years later, Peggy never
forgot about him.
Just then, THE BULLPEN DOOR FLIES OPEN. LIGHTS SNAP ON,
revealing PEGGY CARTER (49), talking to someone in the hall.
PEGGY CARTER
So, send them in.
97
98
MALE AGENT
They’re trying, ma’am, but
Braddock’s unit has been stopped by
lightning strikes.
PEGGY CARTER
Oh, for the love of- I’ll find the
weather projections. You call
Braddock and tell him to shelter in
place. Assuming he’s bright enough
to come out of the rain.
MALE AGENT (O.S.)
Yes, ma’am.
Steve stares at her from the darkness, STUNNED.
Peggy rifles through a file cabinet.
PEGGY CARTER
Here we are...
She flips through a file, reading. In the darkness behind
her, Steve approaches. Peggy reads something disturbing.
PEGGY CARTER (CONT'D)
Crikey O’Reilly.
(calling out)
Sergeant? Hang up and call Air
Command. Braddock needs back up,
immediately.
MALE AGENT
Ma’am?
PEGGY CARTER
Those aren’t lightning strikes he’s
looking at...
She slaps the file closed and hurries out.
Steve stares after her a long moment.
EXT. CAMP LEHIGH - DAY (1970)
Howard and Tony approach a WAITING LIMO.
TONY
Got any names, yet?
HOWARD STARK
If it’s a boy, my wife likes
Elmonzo.
98
99
TONY
You might let that stew a while.
You’ve got time.
HOWARD STARK
What are you, couple years older
than me?
TONY
Yeah. I guess.
HOWARD STARK
Let me ask you a question. When
your kid was born...were you
nervous?
TONY
Wildly.
HOWARD STARK
Did you feel qualified? Like you
had any idea how to successfully
operate that thing?
TONY
I pieced it together as I went
along. I thought about what my dad
did...
HOWARD STARK
My old man never met a problem he
couldn’t solve with a belt.
TONY
I tried to hold onto the good
stuff. Dad dropped the odd pearl,
here and there.
HOWARD STARK
Like what?
TONY
“No amount of money ever bought a
second of time.”
HOWARD STARK
That’s good. Smart guy.
TONY
He did his best.
99
100
HOWARD STARK
I tell you, this kid’s not even
here yet, but there’s nothing I
wouldn’t do for him.
Tony takes this in, GRATIFIED. Just then...EDWIN JARVIS (56)
opens the limo door.
HOWARD STARK (CONT'D)
Besides, if I fall down on the
fathering job, old Jarvis is ready
to pick up the slack. Isn’t that
right?
EDWIN JARVIS
Indeed, sir. I shall endeavor to
teach the lad the rudiments of
judo.
Tony smiles at his old friend. As Jarvis gets in the car,
Tony notices...STEVE WAITING BEHIND A JEEP. TIME TO GO.
Howard turns to shake Tony’s hand.
HOWARD STARK
Well, good to meet you, Potts.
TONY
You’re going to do fine, Howard.
HOWARD STARK
Thanks. See you around?
TONY
Count on it...
As he gets into his car, Howard looks to Jarvis.
HOWARD STARK
Have we met him before?
EDWIN JARVIS
We’ve met a lot of people, sir.
HOWARD STARK
Seems very familiar.
(beat)
Weird beard.
EXT. SANCTUARY 2 - SPACE
The Sanctuary-2 cruises ominously through space.
100
101
INT. SANCTUARY-2, PRISON CELL - DAY
WHACK! NEBULA GOES TUMBLING ACROSS THE FLOOR. She gets to
her knees, looking up at...BAD NEBULA, GLARING DOWN AT HER.
BAD NEBULA
You’re weak.
NEBULA
I’m youBAD NEBULA
Shut up!
BAD NEBULA PUNCHES GOOD NEBULA DOWN. GOOD NEBULA GROANS AS
BAD NEBULA RIPS OFF HER TIME-SPACE GPS.
THEN GAMORA ENTERS. Nebula softens, taking in her (once
dead) sister.
NEBULA
You could stop this. You know you
want to.
(off Gamora’s look)
Did you see what happens in the
future? Thanos finds the Soul
Stone.
MOVE IN ON GAMORA, WHEELS TURNING...
NEBULA (CONT'D)
You want to know how he does that?
You want to know what he does to
youBAD NEBULA
ENOUGH!
BAD NEBULA SMACKS HER THE HARDEST YET, THEN LEANS IN WITH A
JAGGED INSTRUMENT OF TORTURE.
BAD NEBULA (CONT'D)
You disgust me...but that doesn’t
mean you’re useless.
SHE PRIES OFF THE ORANGE PANEL FROM GOOD NEBULA’S HEAD.
Gamora takes in this new development...
INT. SANCTUARY-2, THRONE ROOM - DAY
Bad Nebula enters to find Thanos on his throne. She hands
him Good Nebula’s TIME-SPACE GPS. He smiles.
101
102
Bad Nebula affixes Good Nebula’s orange panel onto her head.
BAD NEBULA
How do I look?
EXT. BENATAR - SPACE
THE BENATAR approaches Vormir.
TITLE: VORMIR, 2014
INT. BENATAR, FLIGHT DECK - SPACE
NATASHA and CLINT stand on the flight deck, staring at THE
MAJESTIC, PURPLE PLANET.
CLINT BARTON
Under different circumstances, this
would be totally awesome.
EXT. VORMIR - DAY
Clint and Natasha eye THE BENATAR resting on a sand dune.
Clint fires a Pym Particle.
WHOOSH, THE ENTIRE SHIP DISAPPEARS. CLINT lifts THE SHRUNKEN
BENATAR and tucks it in his pocket.
CLINT AND NATASHA TREK ACROSS THE DUNES OF VORMIR,
TOWARD...THE MOUNTAIN.
EXT. VORMIR, MIDWAY UP THE MOUNTAIN - DAY
Natasha and Clint climb, ragged. They approach AN ARCHWAY.
CLINT BARTON
Really starting to regret my choice
here.
NATASHA
Yeah. I’m gonna bet the raccoon
didn’t have to climb a mountain.
CLINT BARTON
I don’t think technically he’s a
raccoon...
NATASHA
Whatever. He eats garbage102
103
THEY HEAR SOMETHING. THEY WHIRL, WEAPONS UP. A HOODED
FIGURE APPROACHES.
HOODED FIGURE
I assure you, you have nothing to
fear from me.
CLINT BARTON
Creepy.
HOODED FIGURE
Welcome Natasha, daughter of Ivan.
Clint, son of Edith.
CLINT BARTON
Creepier.
NATASHA
Who are you?
RED SKULL
Consider me a guide. To you, and
to all who seek the Soul Stone.
NATASHA
Great. You show us where it is,
and we’ll be on our way.
The figure removes his hood, revealing...THE RED SKULL.
RED SKULL
Oh, liebchen. If only it were that
easy...
EXT. VORMIR, MOUNTAIN TOP - DAY
START ON JAGGED ROCKS. TILT UP TO SEE SKULL, NATASHA, and
CLINT staring down from the ALTAR.
RED SKULL
What you seek lies in front of you.
As does what you fear.
NATASHA
The Stone is down there?
RED SKULL
For one of you. For the other...
(smiling it away)
The Stone demands a sacrifice. In
order to take it, you must leave
behind that which you love.
103
104
SKULL POINTS A BONY FINGER DOWN THE WELL.
RED SKULL (CONT'D)
A soul for a soul.
Natasha and Clint stare down the well, stunned.
TIME CUT:
RED SKULL STARES DOWN THE WELL, robes whipping in the wind.
CLINT BARTON (O.S.)
Maybe he’s full of shit.
FIFTY FEET AWAY, AT THE MONOLITHS, NATASHA AND CLINT HUDDLE.
NATASHA
I don’t think so.
CLINT BARTON
Why, because he knew your daddy’s
name?
NATASHA
I didn’t.
(off his look)
Thanos left here with the stone,
and without his daughter. You
really think that’s a coincidence?
They both look out at the well, heavy.
NATASHA (CONT'D)
(under her breath)
Whatever it takes...
CLINT BARTON
(under his breath)
Whatever it takes...
Natasha goes to Clint, resolved.
NATASHA
If we don’t get the stone, billions
of people are going to stay dead.
CLINT BARTON
Then I guess we both know who it
has to be.
NATASHA
Yeah. Guess we do.
They take each other’s hand. A long goodbye beat. Except...
104
105
CLINT BARTON
I’m starting to think we don’t mean
the same person.
NATASHA
For the last five years, I’ve been
trying to do one thing -- get to
right here. This is all it’s been
about. Bringing everybody back.
CLINT BARTON
Do not get all decent on meNATASHA
You think I want to do it? I’m
trying to save your life, you idiotCLINT BARTON
And I don’t want you to.
(beat)
Nat. You know what I’ve done.
What I am now. Your life’s worth
ten of mineNATASHA
I don’t judge people by their worst
mistakesCLINT BARTON
Maybe you shouldNATASHA
You didn’t.
That stops him. He looks in her eyes, then down, giving in.
CLINT BARTON
You’re a pain in my ass, you know
that?
She relaxes for the briefest moment. Just then, CLINT SWEEPS
OUT HER LEGS, PINNING HER DOWN.
CLINT BARTON (CONT'D)
Tell my family I love them.
SHE REVERSES, SENDING HIM TUMBLING.
NATASHA
Tell them yourself.
SHE FIRES A WIDOW’S BITE INTO HIS CHEST AND MAKES A BREAK FOR
THE CLIFF. SHE’S HALFWAY THERE WHEN...
105
106
BOOM! AN EXPLODING ARROW KNOCKS HER OFF HER FEET.
Clint races past her...leaping off edge of the cliff. Just
as he falls...
NATASHA TACKLES HIM IN MID-AIR. They drop, but NATASHA
SHOOTS HER GRAPPLING LINE INTO THE CLIFF.
THEY SLAM INTO THE CLIFFSIDE. She attaches the other end of
her grappling line to Clint’s belt...saving his life.
She slides, but he reaches out and grabs her...saving hers.
CLINT BARTON
Damn you.
They hang there a long, terrible moment. CLINT’S GRASP
STARTS TO LOOSEN. Finally, she looks him in the eye.
NATASHA
Let me go.
CLINT BARTON
No. Please no...
The two friends stare at each other, a lifetime between them.
NATASHA
It’s okay...
CLINT BARTON
Natasha, noThen Natasha Romanoff kicks off the cliff wall, yanking out
of Clint’s grasp.
She falls...
Clint dangles from the grappling hook, staring down,
helpless, stifling his scream.
WHOOSH! THE WHOLE WORLD GOES WHITE.
EXT. VORMIR, BOTTOM OF THE MOUNTAIN - DAY
When the light fades, CLINT LIES FLOATING IN SPACE. The
camera rotates until we see...IT’S A REFLECTION OF THE SKY.
CLINT LIES IN THE POOL AT THE BASE OF THE MOUNTAIN. He sits
up and opens his hand to see THE SOUL STONE. His eyes well.
106
107
INT. AVENGERS COMPOUND, HANGAR - DAY
THE PENCIL FINALLY CLATTERS TO A STOP AS... WHOOSH, CLINT
GROWS INTO THE PRESENT ALONGSIDE THE OTHERS:
SMART HULK HOLDS THE EYE OF AGAMOTTO, SCOTT HAS THE SCEPTER,
RHODEY THE ORB, ROCKET & THOR THE EXTRACTION DEVICE, AND TONY
& STEVE THE TESSERACT. NEBULA RETRACTS HER TIME SUIT.
Everyone looks around, exhausted. Amazed.
RHODEY
Are you telling me that actually
worked?
SMART HULK
Did we get them all?
CLINT DROPS TO HIS KNEES. Steve turns, concerned.
STEVE
Clint? Are you okay?
Clint stares, haunted. SMART HULK realizes...
SMART HULK
Where’s Nat?
(everyone stares)
WHERE’S NAT?!
Clint looks up at them, eyes glassy.
EXT. AVENGERS COMPOUND, RIVER - DAWN
SMART HULK, eyes red, stands beside a bench on the dock.
Behind him, STEVE, TONY, THOR, AND CLINT STARE OUT, GRIEVING.
TONY
Do we know if she had family?
STEVE
Yeah. Us.
Thor turns, thrown.
THOR
Why are you doing that?
TONY
I’m just asking a question107
108
THOR
Why are we talking as if she’s
dead? We have the stones. Bring
her back. C’mon, stop this shit.
Clint squeezes away tears.
CLINT BARTON
We can’t get her back.
THOR
What’s he talking about? Of
course, we can.
CLINT BARTON
It can’t be undone. That’s why.
THOR
No offense, but you’re...a very
earthly being. We’re talking about
space magic, here. “Can’t” seems a
little definitive, don’t you think?
CLINT BARTON
Well, I know I’m a little outside
my pay grade here, but, she still
isn’t here, is she?
THOR
That’s my pointCLINT BARTON
It can’t be undone. At least
that’s what the red, floating guy
said. But why don’t you go talk to
him, okay? Why don’t you grab your
hammer and fly to that place and
talk to him. IT CAN’T BE UNDONE.
(beat)
It was supposed to be me. She
sacrificed her life for that
goddamn stone. She bet her life on
it.
That lands heavily on all of them. A moment passes.
THEN SMART HULK HURLS THE BENCH INTO THE WATER. It skips
across the surface like a stone.
SMART HULK
She’s not coming back. We have to
make it worth it. We have to.
108
109
STEVE
We will.
PULL BACK, LEAVING OUR MOURNERS IN TABLEAU...
INT. AVENGERS COMPOUND, WORKSHOP - DAY
ALL SIX INFINITY STONES rest behind safety glass. SOON,
ROBOTIC ARMS ENTER FRAME, PLUCKING UP THE POWER STONE.
TONY operates the arms as ROCKET and SMART HULK watch.
The robot arms swing the stone over to...A NEW IRON MAN
GAUNTLET. NANO-TECH SHIFTS AND SLIDES, HOLDING IT IN PLACE.
Smart Hulk releases a deep breath.
TIME CUT:
THE COMPLETED GAUNTLET sits in a cradle, SIX INFINITY STONES
EMBEDDED IN THE BACK. Pull back to find...
SCOTT, THOR, CLINT, RHODEY, and STEVE watching TONY AND
ROCKET FINE TUNE THE GLOVE.
ROCKET
All right. The glove’s ready.
Question is, who’s gonna snap their
freaking fingers?
Everyone stares a beat. Then, THOR REACHES FOR THE GAUNTLET.
THOR
I’ll do it.
TONY
Whoa, whoa, what are you doingSTEVE
Thor, we haven’t decided who’s
putting that on.
THOR
Oh. Were all of you just waiting
for the right opportunity?
ROCKET
Maybe I was getting around to itSCOTT LANG
We should at least discuss it109
110
THOR
Staring at the thing isn’t going to
bring everybody back, is it? Look,
I’m the strongest Avenger. It’s my
responsibility. Fate wills it so.
TONY
Hold on, hold onTHOR
Stop it! Let me do this. Let me
do something good. Something rightTONY
That thing is channeling enough
energy to light up a continent.
You’re in no conditionTHOR
What do you think is coursing
through my veins right now?
RHODEY
Cheez Whiz?
THOR
Lightning.
Smart Hulk steps toward the Gauntlet.
SMART HULK
Lightning won’t help you, pal.
It’s gotta be me.
(approaching)
You saw what those stones did to
Thanos. They almost killed him.
None of you could survive.
STEVE
And how do we know you can?
SMART HULK
We don’t. But the radiation’s
mostly gamma.
(beat)
It’s like I was made for this...
INT. AVENGERS COMPOUND, HANGAR - DAY
THE QUANTUM TUNNEL LIES IN DARKNESS. Then, clack, the lights
come on, revealing...
NEBULA, STARING UP AT THE WAITING MACHINE.
110
111
INT. AVENGERS COMPOUND, WORKSHOP - DAY
SMART HULK STUDIES THE GAUNTLET. The moment of truth.
TONY
Good to go?
SMART HULK
Let’s do it.
TONY
Okay, remember, everyone Thanos
snapped away five years ago, you’re
just bringing them back...to today.
Don’t change anything from the last
five years. Got it?
SMART HULK
Got it.
PAN AROUND as the Avengers ready themselves:
STEVE steps forward, shield on his arm. SCOTT deploys his
helmet. RHODEY readies his repulsors.
ROCKET covers his raccoon junk and hides behind THOR. TONY
armors up, then nanos a shield to protect CLINT beside him.
TONY
Friday, why don’t you go ahead and
activate Barn Door Protocol?
STEEL DOORS SLIDE SHUT ALL AROUND THE WORKSHOP.
FINALLY, SMART HULK HOLDS UP THE GAUNTLET.
SMART HULK
(under his breath)
Everybody’s coming home...
HE SLOWLY SLIPS HIS HAND IN THE GLOVE. SUDDENLY, HE SPASMS,
TAKING IN THE POWER AS THANOS DID IN ML1. HE STRUGGLES.
THOR
What’s happening? Take it off,
take if off!
STEVE
Bruce, you okay?
TONY
Talk to me, Banner.
111
112
SMART HULK
I’m...okay...
THEN SMART HULK REACHES OUT HIS HAND...AND SNAPS HIS FINGERS.
CRAAAACK! THE STONES FLARE. A BRIGHT SURGE OF ENERGY RACES
UP SMART HULK’S ARM. HE ROARS AS HIS EYES BLAZE GREEN.
A BLAST WHITES OUT THE SCREEN.
INT. AVENGERS COMPOUND, HANGAR - DAY
NEBULA studies THE QUANTUM CONSOLE. She takes off her glove,
revealing A PERFECTLY INTACT ARM. THIS IS BAD NEBULA.
SHE OPENS A PANEL IN HER ARM, SNAKES OUT A CABLE...AND JACKS
INTO THE CONSOLE. THE QUANTUM TUNNEL boots up.
AS SHE HURRIES AWAY...
EXT. AVENGERS COMPOUND - DAY
FROM HIGH OVERHEAD, WE SEE THE TIME ENERGY SIGNATURE SHOOT
FROM THE HANGAR. AN OMINOUS RIPPLE WARPS ACROSS THE SKY...
INT. AVENGERS COMPOUND, WORKSHOP - DAY
WHOOSH! EVERYTHING COMES BACK INTO VIEW. THE GAUNTLET FALLS
OFF, ROLLING ACROSS THE FLOOR.
SMART HULK COLLAPSES, ARM WITHERED, SIDE BURNT BLACK.
EVERYONE RUSHES OVER. Steve checks Smart Hulk’s pulse.
STEVE
Bruce!
TONY
Don’t move him!
Then THE BLAST DOORS OPEN, revealing the sound of...CHIRPING.
SCOTT walks toward the courtyard.
Smart Hulk’s eyes clear. He grasps Steve’s arm.
SMART HULK
Did it work?
They pause, as if it only just now occurred to them.
JUST THEN...A CELL PHONE BUZZES.
112
113
A STUNNED CLINT TURNS AND APPROACHES HIS PHONE. On the home
screen, we see A PHOTO OF HIS WIFE: “LAURA CALLING.”
CLINT FINALLY PUTS THE PHONE TO HIS EAR.
CLINT BARTON
Honey?
AT THE WINDOW, SCOTT STARES AT A BIRD FEEDER. DOZENS OF
CARDINALS AND FINCHES NIBBLE ON THE SEED.
SCOTT LANG
Guys, I think itBOOM! THE BUILDING EXPLODES. DEBRIS SWALLOWS THE CAMERA.
EXT. AVENGERS COMPOUND - DAY
A MUSHROOM CLOUD BILLOWS OVER AVENGERS COMPOUND.
EXT. AVENGERS COMPOUND, CRATER - DAY
Nothing moves. The smoke clears, revealing...A BOMBED OUT
CRATER A MILE WIDE. Avengers Compound has been destroyed.
Then the light changes...AND THE SANCTUARY-2 parts the
clouds. It hovers over the ruins like a vulture.
AN ENERGY BEAM drops to the ground, releasing...
THANOS, FLANKED BY A SQUAD OF OUTRIDERS. The Mad Titan looks
around at the devastation he has wrought.
THANOS (INTO COM)
Daughter?
BAD NEBULA (OVER COM)
Yes, father...
OUT OF THE SMOKE WALKS ”BAD” NEBULA. Bruised and dirty.
THANOS
So this is the future. Well done.
She tears off THE ORANGE HEAD-PLATE.
BAD NEBULA
Thank you, Father. They suspected
nothing.
THANOS
The arrogant never do.
113
114
Thanos takes off his helmet, staring up at the crater’s edge.
THANOS (CONT'D)
Go. Find the stones. Bring them
to me.
BAD NEBULA
What will you do?
THANOS
Wait.
INT. UNDERGROUND GARAGE, RUINS - DAY
THE UNDERGROUND GARAGE LIES HALF-COLLAPSED.
SMART HULK GRITS HIS TEETH, HOLDING UP THE CEILING WITH ONE
GOOD ARM, HIS OTHER ARM BURNED AND LIFELESS. BELOW...
RHODEY LIES IN THE RUBBLE, WAR MACHINE SUIT SPARKING.
RHODEY
Canopy! Canopy!
Rhodey’s suit RATCHETS OPEN. HE HAULS HIMSELF FREE to
see...ROCKET TRAPPED UNDER RUBBLE. AS HE CRAWLS TO HIM...
THE CEILING RUMBLES. SMART HULK WAVERS, MUSCLES QUIVERING.
RHODEY (INTO COM) (CONT'D)
Mayday! Tony. Cap. Does anybody
hear me?!
HE FINALLY REACHES ROCKET. Rocket wheezes, in pain.
RHODEY (CONT'D)
Hang on!
RHODEY WEDGES A PIECE OF REBAR INTO THE DEBRIS. HE HEAVES,
finally managing to lever it off of Rocket. THEN...
THE CRACKED CEILING GIVES WAY. A MILLION GALLONS OF RIVER
WATER RUSH IN. RHODEY TRIES TO KEEP HIS HEAD ABOVE WATER.
RHODEY (INTO COM) (CONT'D)
Mayday! Mayday! We are taking on
water!
INT. TOOL SHOP, RUINS - DAY
CLOSE ON SCOTT LANG lying on a SILVER, METAL FLOOR.
114
115
RHODEY (OVER COM)
...anyone...Mayday...MaydayScott groans, coming to.
SCOTT LANG
Wait, what...?
REVEAL, TINY SCOTT LYING IN THE RUINS OF THE ARMORY...ON THE
IRON PATRIOT HELMET.
ROCKET (OVER COM)
Tell ‘em to...hurry...asses upRHODEY (OVER COM)
...trapped...drowning...no time...
Scott jumps to his feet.
SCOTT LANG (INTO COM)
No! Wait, I’m here!
Scott spots WATER TRICKLING THROUGH THE CRACKED FLOOR.
INT. ACCESS TUNNEL - DAY
WATER DRIPS FROM A HOLE IN THE ROOF OF AN ACCESS
TUNNEL...ONTO CLINT BARTON, LYING FACEDOWN. He groans.
He opens his hand to find HIS CELLPHONE: HIS WIFE SMILES ON
THE SCREEN. “LAURA, ONE MISSED CALL.” Clint stares, amazed.
He winces, finding he’s been lying atop...THE GAUNTLET. It’s
bashed out of shape, BUT ALL SIX STONES STILL GLEAM.
CLINT BARTON (INTO COM)
Cap? Stark? Anyone?
STATIC. Then, he hears...A SCRAPING SOUND, TALONS ON CEMENT.
He peers down a darkened tunnel, then unshoulders his bow.
HE LOOSES A FLARE ARROW, revealing...
DOZENS OF OUTRIDERS SCRABBLING ALONG THE WALLS AND CEILING.
CLINT GRABS THE GAUNTLET AND RUNS. THE CREATURES GIVE CHASE.
INT./EXT. AVENGERS COMPOUND, LAB, RUINS - DAY
FIRES SMOULDER BENEATH THE COLLAPSED CEILING. MOVE THROUGH
SMOKE TO FIND...STEVE, out cold. SOMEONE SHAKES HIM.
He wakes to see TONY, HOLDING HIS SHIELD.
115
116
TONY
You lose this again, I’m keeping
it.
STEVE
What happened?
TONY
Told you. We messed with time.
Time messed back.
Woozy, Steve follows Tony through the ruins of the lab.
STEVE
Where are the others?
TONY
I read life signs, maybe 800 feet
down, but it’s hard to tell.
They reach the edge of the crater where THOR LOOKS DOWN
AT...THANOS. Sitting on a rock. Waiting.
TONY (CONT'D)
What’s he been doing?
THOR
Absolutely nothing.
The three of them stare a long moment. Then, as if sensing
them, Thanos turns his head...AND LOOKS THEIR WAY.
STEVE
Son of a bitch.
TONY
Yeah.
STEVE
Where are the stones?
TONY
Somewhere under all of this. All I
know is...he doesn’t have ‘em.
STEVE
So we keep it that way.
That lands. This is their chance.
THOR
You know it’s a trap.
TONY DEPLOYS HIS ARMOR.
116
(MORE)
117
TONY
Don’t think I care.
THOR
Just so we’re all in agreement.
Thor holds out his hand: MJOLNIR FLIES INTO IT. He holds out
his other hand: STORMBREAKER SLAPS INTO HIS PALM.
CRACK! LIGHTNING STRIKES AS HE’S COVERED IN CAPE AND ARMOR.
THOR (CONT'D)
Let’s kill him properly this time.
STEVE TIGHTENS HIS SHIELD, LEADING THEM INTO THE CRATER...
EXT. AVENGERS COMPOUND, CRATER - DAY
Thanos sits on his rock, contemplative.
THANOS
You could not live with your own
failure. And where did that bring
you? Right back to me.
TONY APPROACHES, WARY, AS IF SNEAKING UP ON A RABID DOG.
STEVE AND THOR FAN OUT ON EITHER SIDE.
THANOS (CONT'D)
I thought by eliminating half of
life, the other half would thrive.
But you’ve shown me that’s
impossible.
(beat)
Life clings to the past with bloody
fingernails. As long as there are
those who remember what was, there
will be those unable to accept what
can be. They will resist.
TONY
Yep. We’re all kinds of stubborn.
THANOS
I’m thankful. Because now I know
what I must do.
Thanos reaches for his helmet.
THANOS (CONT'D)
I will shred this universe down to
its last atom.
(MORE)
117
THANOS (CONT'D)
118
And then, with the stones you’ve
collected for me, create a new one,
teeming with life that knows not
what it has lost, but only what it
has been given. A grateful
universe.
STEVE
Born out of blood.
Thanos studies Steve as if seeing him for the first time.
THANOS
They’ll never know it.
THANOS DRAWS A BLADE OFF HIS BACK, TOWERING OVER THEM.
THANOS (CONT'D)
Because you won’t be alive to tell
them.
Tony glances over at Steve. Ready? Steve nods...
JUST AS THOR CHARGES THANOS. WHAM! ALL THREE AVENGERS
ATTACK, USING THEIR SKILLS IN CONCERT.
THANOS STUMBLES, ON HIS HEELS. THE HEROES PUNISH HIM,
RELENTLESS.
PULL UP THROUGH THE HAZE, TO THE SANCTUARY-2...
INT. SANCTUARY-2, INTERROGATION CELL - DAY
NEBULA huddles alone in A PRISON CELL. After a beat...THE
DOORS RATCHET OPEN. She stares into the shadows.
NEBULA
What do you want?
GAMORA STEPS INTO THE CELL. THE TWO SISTERS FROM DIFFERENT
ERAS STARE AT EACH OTHER.
GAMORA
In the future...what happens to you
and me?
NEBULA
I try to kill you. Several times.
But, eventually...we become
friends. We become sisters.
GAMORA
That’s hard to believe.
THANOS (CONT'D)
118
119
NEBULA
A lot of things that happen will be
hard to believe.
Gamora nearly smiles. She takes a long look at Nebula.
Finally...SHE HOLDS OUT HER HAND.
GAMORA
Come on. We can still stop him.
Nebula takes a deciding moment. Then SHE GRABS GAMORA’S
HAND. One sister pulls the other to her feet.
INT. UNDERGROUND GARAGE, RUINS - DAY
SMART HULK STRAINS AGAINST THE CEILING. RHODEY HANGS ONTO A
PIPE AS THE WATER RISES.
SMART HULK
Rhodey. Rocket. Get out of here.
Save yourselves.
ROCKET SURFACES FROM BELOW, GASPING.
ROCKET
No good. Couldn’t even...find a
hole...small enough to abandon you
through.
Suddenly, Smart Hulk snarls in pain as THE CEILING DROPS A
FOOT. His legs buckle as he struggles against the weight.
Finally he sets his jaw...AND STRAIGHTENS HIS LEGS.
SMART HULK
AAARRRGH!
EXT. AVENGERS COMPOUND, CRATER - CONTINUOUS
THE BUILDING RIGHTS ITSELF, LEVELING OUT.
INT. AVENGERS COMPOUND, RUINS - DAY
A RAGING RIVER ROARS THROUGH THE RUINS. AFTER A BEAT...SCOTT
LANG ZOOMS PAST, RIDING A PLASTIC BOTTLE CAP.
RHODEY (OVER COM)
MAYDAY! MAYDAY!
SCOTT LANG (INTO COM)
HANG ON! I’M COMING!
119
120
INT. ACCESS TUNNEL - DAY
SHRIEKING OUTRIDERS CHASE BARTON THROUGH THE TUNNELS. CLINT
AFFIXES ARROW-CHARGES TO THE WALLS AS HE RUNS.
Just as the Outriders are about to overtake him, Clint hits a
button on his bow, DETONATING THE CHARGES...
BRINGING THE ROOF DOWN ON TOP OF THE OUTRIDERS.
Clint rolls, coming up directly underneath A VERTICAL SHAFT.
A cluster of Outriders escape the collapse, lunging for him.
Clint shoots a grappling arrow up the shaft, ascending...BUT
SO DO THE OUTRIDERS, skittering up the sides.
Clint draws his katana, slashing the aliens just as...
INT. ACCESS TUNNEL, UPPER CHAMBERS - CONTINUOUS
HE TUMBLES INTO THE UPPER CHAMBER. He gasps, safe. Then he
looks up to see (BAD) NEBULA, LOOMING OVER HIM.
CLINT BARTON
Oh, hey. I know you.
She gently takes the Gauntlet.
BAD NEBULA (INTO COM)
Father. I have the stones.
CLINT BARTON
WhatClint tries to get up, but Nebula puts a boot in his chest
and A BLASTER TO HIS HEAD...
GAMORA (O.S.)
Stop.
COVERING CLINT, BAD NEBULA TURNS TO SEE...GAMORA, GUN RAISED.
BAD NEBULA
You’re betraying us?
GAMORA
Not you.
GOOD NEBULA steps from the shadows, hands raised, placating.
Bad Nebula stares at her future self.
120
121
NEBULA
You don’t have to do this.
BAD NEBULA
I am this.
GAMORA
No. You’re not.
Good Nebula takes a tiny step forward. She taps her head.
NEBULA
You’ve seen what we becomeGAMORA
Sister, listen to herBAD NEBULA
Shut up. You’re a traitor!
NEBULA
You can change.
Bad Nebula struggles, her face a twisted grimace.
BAD NEBULA
He won’t let me.
BAD NEBULA FIRES AT GAMORA, JUST AS GOOD NEBULA DRAWS A GUN
AND SHOOTS HER DOWN. BAD NEBULA DROPS.
Good Nebula stares at her dead younger self, conflicted.
Clint picks up the gauntlet, very confused.
CLINT BARTON
I’m not even gonna ask.
EXT. AVENGERS COMPOUND, CRATER - DAY
TONY’S HUD: TONY GLARES RIGHT AT US, AS...
THOR SMASHES HIS HAMMERS TOGETHER, HURLING LIGHTNING INTO THE
BACK OF THE IRON MAN SUIT.
TONY SENDS THE RESULTING OVERLOAD AT THANOS...BUT THANOS
PROPELLERS HIS BLADE, HOLDING BACK THE BLAST.
THOR USES STORMBREAKER TO BAT MJOLNIR AT THANOS...
THANOS SNATCHES TONY BY THE ANKLE AND USES HIM AS A SHIELD
AGAINST THE ONCOMING HAMMER. WHACK!
121
122
MJOLNIR PLOWS INTO THE DIRT. TONY GOES TUMBLING, OUT COLD.
TONY’S HUD: FRIDAY TRIES TO REVIVE HIM.
FRIDAY (O.S.)
Boss? Wake up!
INT. UNDERGROUND GARAGE, RUINS - DAY
ROCKET, RHODEY, AND SMART HULK GULP AIR, INCHES FROM THE
CEILING, FACING THE END. RHODEY GLANCES OVER AT SMART HULK.
RHODEY
See you on the other side, man.
They take a last breath, THEN THE WATER HITS THE CEILING.
EXT. AVENGERS COMPOUND, CRATER - DAY
Steve slashes at Thanos. The Titan brutally bats him aside.
Thor attacks, but Thanos drives him through walls of debris.
THANOS SMASHES HIS FIST INTO THOR’S FACE, OVER AND OVER.
Thor calls for Stormbreaker, but Thanos intercepts it. He
presses the blade into Thor’s chest, trying to drive it home.
Then, across the field...MJOLNIR RISES INTO THE AIR.
THANOS GRINS, ABOUT TO FINISH THOR OFF, WHEN...MJOLNIR FLIES
IN, KNOCKING THE AXE OUT OF HIS HAND.
Follow the hammer as it flies back to the only other man
worthy enough to wield it...STEVE ROGERS.
Half-conscious, THOR SEES STEVE HOLDING MJOLNIR.
THOR
I...knew...it...
STEVE ATTACKS, CRACKING THANOS IN THE JAW. THANOS TUMBLES.
BEFORE THE TITAN CAN GET UP, STEVE CALLS DOWN THE LIGHTNING
AND SENDS IT CRACKLING INTO THANOS’ BODY.
Steve leaps, trying to finish Thanos off...BUT THANOS ROLLS
ASIDE, HEAD-BUTTING STEVE BACKWARDS.
THANOS GETS TO HIS FEET, A FAINT SMILE ON HIS FACE.
HE WHIPS OFF HIS HELMET AND ATTACKS STEVE WITH HIS BLADE.
BLOW AFTER BLOW. IT’S ALL STEVE CAN DO TO GET HIS SHIELD UP.
122
123
THANOS HACKS THE SHIELD TO PIECES, FINALLY KNOCKING STEVE
ACROSS THE FIELD.
Steve lies beaten, half a shield still attached to his arm.
THANOS
In all my years of conquest...
Thanos looks out at the tiny human struggling to stand.
THANOS (CONT'D)
Of violence and slaughter...it was
never personal.
Thanos gestures behind him as A RUMBLE ECHOES.
THOUSANDS OF ALIENS RING THE LIP OF THE CRATER: THE BLACK
ORDER LEADS A PLATOON OF CHITAURI, SAKAARANS, AND OUTRIDERS.
THANOS (CONT'D)
But I’ll tell you now, the things
I’m about to do to your stubborn,
annoying, little planet...
Q-SHIPS, DROPSHIPS, NECROCRAFT, AND LEVIATHANS BUZZ ABOVE.
THANOS (CONT'D)
I’m going to enjoy it. Very, very
much.
Steve stares at Thanos and his army. And even in the face of
such overwhelming odds...he gets to his feet.
THANOS stares, almost sad, as Steve tightens the broken
shield on his arm...AND STARTS WALKING TOWARD HIM.
One man against thousands. All alone.
But just then, Steve’s COM CRACKLES. He strains to hear.
The com crackles again. We can make out A MUFFLED VOICE.
MUFFLED VOICE (ON COM)
-ap-...-comin-...-otSteve shakes his head, trying to clear it. Slowly, SOUND
RETURNS...AND THE WORDS RING CLEAR:
SAM WILSON (O.S.)
Cap. On your left.
PULL BACK...TO SEE A PORTAL OPENING IN THE DISTANCE. OUT OF
IT FLIES...SAM WILSON.
123
124
Steve watches Sam soar over the field, then turns AS EVEN
MORE PORTALS OPEN.
FROM ONE: DR. STRANGE, PETER QUILL, DRAX, MANTIS, PETER
PARKER...AND KRAGLIN AND THE RAVAGERS.
FROM ANOTHER: T’CHALLA, OKOYE, SHURI, M’BAKU, WANDA, BUCKY,
GROOT...AND THE WAKANDAN ARMY.
FROM A THIRD: VALKYRIE, KORG, MIEK...AND AN ASGARDIAN ARMY.
FROM A FOURTH: PEPPER POTTS (IN RESCUE ARMOR), HOPE VAN DYNE,
AND WONG LEADING A SQUAD OF SORCERERS.
THOR gets to his feet, calling Stormbreaker to his hand
as...TONY regains consciousness, staring out at the cavalry.
Wong and Strange quickly find each other.
DR. STRANGE
Is that everyone?
WONG
You wanted more?!
JUST THEN, THE GROUND SHAKES AND RUBBLE EXPLODES UPWARDS
AS...GIANT-MAN BURSTS FROM BELOW.
SCOTT LANG
Top floor, everybody out!
HE OPENS HIS HUGE HAND, RELEASING ROCKET, SMART HULK, AND
RHODEY, NOW IN HIS COSMIC IRON PATRIOT ARMOR.
STEVE TAKES IN HIS REINFORCEMENTS, THEN STARES OUT AT THANOS.
PAN ACROSS OUR HEROES AS STEVE CALLS MJOLNIR TO HIS HAND.
STEVE
Avengers...assemble.
THOR LETS LOOSE A BATTLE CRY AS HE CHARGES! EVERYONE FOLLOWS
SUIT AS OUR HEROES FLOOD THE FIELD.
ACROSS THE WAY, THANOS SMILES AND POINTS HIS BLADE.
TWO MIGHTY ARMIES RACE TOWARD EACH OTHER UNTIL...CLASH!
GIANT-MAN SLUGS A LEVIATHAN IN THE JAW.
DRAX launches himself onto a CULL currently choking the life
out of KORG.
124
125
TONY blasts overhead. RESCUE joins him. Together, they
strafe the field.
STEVE and THOR fight together. Both hold out their hands.
Stormbreaker returns to Steve, Mjolnir to Thor, who frowns.
THOR
No. You take the little one.
Elsewhere, TONY BATTLES SEVERAL CULLS. One knocks him into
an Outrider, who’s about to rip his armor off when...
THWIP. PETER PARKER webs the Outrider, yanking him into the
path of...GIANT-MAN’S FOOT. SQUISH.
Tony stares at Peter, emotional. They retract their helmets.
PETER PARKER
Mr. Stark. Holy cow, you would not
believe what’s been going on. Do
you remember when we were in space?
And I got all dusty? I must’ve
passed out, because I woke up and
you weren’t there, but Dr. Strange
was, and he was like, “it’s been
five years, they need us.” And he
started doing that yellow sparkly
thing he doesBut Tony just wraps his arms around him, smashing Peter’s
face into his chest plate.
PETER PARKER (CONT'D)
(muffled)
Oh. This is nice.
ACROSS THE FIELD...QUILL flies, firing down on Sakaaran
soldiers. One leaps off an outcropping...
TACKLING QUILL INTO A WRECKED FUSELAGE, WHERE ANOTHER
SAKAARAN WAITS.
Quill drops one, but the other raises his weapon to strike.
THEN BLAM! The Sakaaran drops dead on top of Quill.
He pushes the body off to see...GAMORA, BLASTER STILL
SMOKING. Quill stares, amazed.
QUILL
Gamora?
HE APPROACHES, OVERWHELMED, EMOTIONAL.
125
126
QUILL (CONT'D)
I thought I lost you.
He tenderly strokes her face...and she knees him in the nuts.
Twice. He goes down, gasping.
QUILL (CONT'D)
You missed the first time...then
you got ‘em both the second time.
She stares down at him as...NEBULA JOINS HER.
GAMORA
This is the one? Seriously?
NEBULA
Your choices were him or a tree.
ACROSS THE FIELD...CLINT RUNS WITH THE GAUNTLET, PURSUED BY A
CHITAURI APE. Just before the ape tramples Clint...
SAM WILSON SWOOPS IN, CUTTING THE CREATURE DOWN.
Clint runs on. The heroes confer over coms.
CLINT BARTON
What do you want to do with this
thing?
STEVE
Get those stones as far away as
possible!
SMART HULK
No! We need to send them back
where they came from.
TONY
There’s no way to send them back.
Thanos destroyed our time machine.
SCOTT LANG
Hold on!
(shrinking to normal size)
That wasn’t our only time machine.
He clicks the KEYS TO LUIS’ VAN. From a distance, we hear,
“LA CUCARACHA.” Steve immediately gets it.
STEVE
Does anyone see an ugly, brown van
out there?
ABOVE, VALKYRIE SCANS THE FIELD FROM HER PEGASUS.
126
127
VALKYRIE
Yeah. But you’re not going to like
where it’s parked.
LUIS’ VAN SITS SURROUNDED BY THOUSANDS OF ALIENS, DEEP BEHIND
ENEMY LINES.
STEVE SURVEYS THE FIELD: AN ARMY STANDS BETWEEN THEM AND THE
VAN, AIR AND GROUND CHOKED WITH ENEMIES.
TONY (INTO COM)
Scott, how long do you need to get
that thing working?
SCOTT LANG
Uh, maybe ten minutes.
STEVE
Get it started. We’ll get the
stones to you.
HOPE VAN DYNE
We’re on it, Cap.
SCOTT glances at her. Cap? THEY SHRINK DOWN AND FLY AWAY.
TONY FLIES UP TO DR. STRANGE, HOVERING.
TONY
Doc. You said we win one in 14
million. Is this how it goes down?
DR. STRANGE
If I tell you what happens, it
won’t happen.
TONY
You better be right.
Tony rockets away. Strange coolly watches him go.
ACROSS THE FIELD...EBONY MAW RUSHES TO THANOS.
EBONY MAW
Sire, the stones!
THANOS TURNS TO SEE...CLINT FIGHTING THROUGH THE HORDE,
CARRYING THE GAUNTLET.
A CULL HAMMERS CLINT, BUT THEN...T’CHALLA SLASHES THE CULL.
T’CHALLA
Clint, give it to me.
127
128
CLINT HANDS THE GAUNTLET TO T’CHALLA, WHO TUCKS IT AND RUNS.
ACROSS THE FIELD...SCOTT AND HOPE FLY OVER A LONG PLATOON OF
CHITAURI, TOWARD LUIS’ VAN.
INT./EXT LUIS’ VAN - CONTINUOUS
They GROW TO NORMAL SIZE in the front seat. Out the
windshield, THANOS’ HORDE CHARGES AT THEIR FRIENDS.
SCOTT LANG
(digging around)
Ignition’s broken. I’ll hotwire itHOPE VAN DYNE
Wait, you know how to do that?
Scott splices wires. Sparks fly.
SCOTT LANG
I was in prison. I know how to do
a lot of things.
EXT. AVENGERS COMPOUND, CRATER - DAY
T’CHALLA RACES THROUGH THE HORDE...BUT THEN THANOS KNOCKS HIM
OFF HIS FEET. THE GAUNTLET GOES TUMBLING.
AS THANOS MOVES IN ON T’CHALLA...ALL AROUND, WRECKAGE BEGINS
TO FLOAT. THANOS LOOKS UP TO SEE...
WANDA, HOVERING IN THE AIR, WAITING FOR HIM.
WANDA
You took everything from me.
Thanos takes THE BLADE off his back.
THANOS
I don’t even know who you are.
WANDA
You will.
WANDA UNLEASHES A STORM OF RED ENERGY, HURLING WRECKAGE AT
HIM. AS THANOS FIGHTS HIS WAY THROUGH IT...
T’CHALLA DIVES FOR THE FALLEN GAUNTLET. SUDDENLY...EBONY MAW
MANIPULATES THE EARTH, PULLING THE GAUNTLET TOWARD HIM.
T’CHALLA WRAPS HIMSELF AROUND THE GLOVE, GETTING DRAGGED.
128
129
PETER PARKER (O.S.)
I GOT IT!
T’CHALLA TURNS TO SEE PETER WHIZZING PAST. HE HURLS THE
GAUNTLET...THWIP! Peter snatches it out of the air.
HE LANDS, ONLY TO FIND HIMSELF SURROUNDED BY OUTRIDERS.
PETER PARKER (CONT'D)
Activate instant kill!
His robotic arms slash with expert precision.
ACROSS THE FIELD...WANDA LIFTS THANOS INTO THE AIR, RIPS HIS
ARMOR OFF IN PIECES, THEN SLAMS HIM BACK TO THE GROUND.
Thanos groans, outmatched.
THANOS (INTO COM)
Rain fire. Wipe them all out.
CORVUS GLAIVE FIGHTS GROOT.
CORVUS GLAIVE
But, sire, our troopsTHANOS (INTO COM)
Just do it!
HIGH ABOVE...THE SANCTUARY-2 DESCENDS, CANNONS OPENING UP.
BELOW...WANDA looks up, raising a force field just as...
THE SANCTUARY-2 FIRES DOWN WITH EVERYTHING IT HAS. SAKAARANS
AND JABARI ALIKE GO FLYING AS EVERY SQUARE INCH GETS HIT.
THE BARRAGE HAMMERS THE RIVERBANK. CRACKS FORM.
PEPPER CUTS DOWN AN ALIEN, THEN SPOTS SOMETHING OFF SCREEN.
PEPPER POTTS (INTO COM)
Um, is anyone else seeing this?
TONY, SMART HULK, AND GAMORA turn to see...WATER GUSHING AS
THE RIVERBANK THREATENS TO COLLAPSE. SUDDENLY...
STRANGE AND WONG CONJURE TWO HUGE RUNE SHIELDS TO SHORE UP
THE BANK. MORE WIZARDS JOIN, CREATING A HUGE “RUNE LEVEE.”
THE SANCTUARY-2 MAINTAINS ITS BARRAGE.
ACROSS THE FIELD...STEVE spots PETER PARKER gradually being
overwhelmed by Outriders.
129
130
PETER PARKER
I got this...I got this...I don’t
got this.
STEVE
Hey, Queens! Heads up!
STEVE HURLS MJOLNIR OVER THE THRONG. PETER WEBS ON...LETTING
THE HAMMER PULL HIM OUT OF DANGER.
A MORTAR BLAST KNOCKS HIM OUT OF THE SKY, BUT PEPPER POTTS
RESCUES HIM.
PEPPER POTTS
Hang on, kid. I’ve got you.
She drags him above the fray, then tosses him to...VALKYRIE
FLYING PAST. PETER PERCHES ATOP PEGASUS.
PETER PARKER
Hey, nice to meet you-aaaaarg!
VALKYRIE SPURS INTO HIGH GEAR, DODGING CANNON FIRE... BUT NOT
FAST ENOUGH. A BLAST KNOCKS PETER TO THE GROUND.
HE GASPS, COVERED IN DEBRIS, STILL CLUTCHING THE GAUNTLET.
ALL AROUND THE FIELD, THE RELENTLESS BARRAGE PINS DOWN OUR
HEROES. ALL HOPE IS LOST.
Rocket and Groot dive for cover. Groot wraps his branches
around them both.
ROCKET
At least we’re going out together
this time...
SUDDENLY, EVERYTHING GOES SILENT. ROCKET PEERS OUT FROM
COVER TO SEE...THE CANNONS SWIVELING UP TOWARD THE CLOUDS.
SAM WILSON flies overhead.
SAM WILSON
What the hell is this?
TONY’S HUD: TONY FLIES OVERHEAD, SEARCHING UPWARD.
TONY
Friday, what are they firing at?
FRIDAY (O.S.)
Something just entered the upper
atmosphere.
130
131
Rocket looks up at...A COMET HEADING STRAIGHT FOR EARTH.
GROOT
(nervous)
I am Groot.
Rocket grins, knowing what’s coming.
ROCKET
Just wait for it.
SUDDENLY, THE COMET VEERS...RIGHT TOWARD THE SHIP.
BOOM! THE COMET TEARS THROUGH THE SANCTUARY-2, RIGHT OUT THE
OTHER SIDE, REVEALING...CAROL DANVERS.
ROCKET (CONT'D)
Oh, yeah!
CAROL GLOWS BRIGHTER AS SHE GOES BINARY, ROCKETING AGAIN
THROUGH THE HULL. BOOM! THE SHIP LISTS, ENGINES EXPLODING.
CAROL EYES THE BATTLEFIELD, EXHAUSTED, LIGHT FADING.
STEVE (OVER COM)
Danvers! We’re gonna need an
assist down here!
CAROL DANVERS (INTO COM)
(under ragged breath)
Roger...Rogers...
INT. VAN - DAY
Scott twists wires on the Quantum Tunnel, hotwiring it.
SCOTT LANG (INTO COM)
I’m almost there. Where’s the
glove?
EXT. CRATER - DAY
CAROL LANDS IN FRONT OF A DAZED PETER PARKER, WHO STILL HOLDS
THE GAUNTLET TIGHT. HE LOOKS UP, CONFUSED.
PETER PARKER
Uh, hey. I’m Peter Parker.
CAROL DANVERS
Hey, Peter Parker. You got
something for me?
131
132
Peter hands it over, staring out at the approaching horde.
PETER PARKER
I don’t know how you’re gonna get
it through all thatWANDA (O.S.)
Don’t worry, kid...
Peter turns to see...
WANDA, OKOYE, GAMORA, NEBULA, VALKYRIE, HOPE, AND SHURI
WAITING. Wanda’s hands begin to glow.
OKOYE
She’s got help.
Carol glances at PEPPER and MANTIS, then tucks the gauntlet
under her arm AND LEADS THEM OUT.
AT THE RIDGE...Thanos spots THE WOMEN OF MARVEL BLASTING
THROUGH HIS TROOPS. HE TRACKS THEIR PATH TO...THE VAN.
SCOTT KICKS THE REAR DOORS OPEN, EXPOSING THE QUANTUM TUNNEL.
SCOTT LANG
Thirty seconds!
Thanos understands immediately. HE GRABS PROXIMA’S SPEAR
FROM HER, AND STARTS RUNNING...
ACROSS THE FIELD...EBONY MAW SENDS WANDA TUMBLING, BUT SHURI
BLASTS HIM OUT OF THE SKY.
CULL OBSIDIAN HAMMERS VALKYRIE, BUT NEBULA TAKES HIM OUT.
CAROL KEEPS GOING, GAUNTLET TUCKED UNDER HER ARM, GETTING
CLOSER AND CLOSER TO...
THE VAN...WHERE THE QUANTUM TUNNEL BURSTS TO LIFE.
ACROSS THE FIELD...GROUNDED HEROES LOOK UP TO SEE CAROL NOW
JUST YARDS AWAY FROM THE GOAL.
SHE PUTS HER HEAD DOWN, FLYING FOR ALL SHE’S WORTH. BUT JUST
AS SHE REACHES THE GAPING VAN DOORS...
THANOS THROWS THE SPEAR...
BOOM! THE VAN EXPLODES, SENDING SCOTT AND CAROL FLYING,
TAKING OUT SOME OF THE WIZARDS HOLDING BACK THE RIVER.
THANOS CATCHES PROXIMA’S RETURNING SPEAR.
132
133
TIME SLOWS AS...STEVE, THOR, AND TONY SPOT...THE GAUNTLET,
LYING UNGUARDED IN THE DIRT.
The problem is...SO DOES THANOS.
TIME RESUMES AS...THEY ALL SCRAMBLE FOR THE STONES. THEY
COLLIDE. THANOS SNATCHES UP THE GAUNTLET, KICKING THOR DOWN.
THANOS KNOCKS TONY ASIDE, THEN SQUEEZES THE CRUSHED GAUNTLET,
POPPING IT OPEN...JUST WIDE ENOUGH TO PUT HIS HAND INSIDE.
STEVE LUNGES, BUT THANOS THROTTLES HIM. FINALLY CLEAR,
THANOS SLIPS ON THE GAUNTLET. BUT BEFORE HE CAN SNAP...
CAROL ARRIVES. SHE GRABS THE GLOVE, PREVENTING HIM FROM
CLOSING HIS FIST. HE HEADBUTTS HER...BUT SHE DOESN’T MOVE.
CAROL PRESSES THANOS DOWN, BUT BEFORE HE FALLS...
THANOS PULLS THE POWER STONE FROM ITS HOUSING AND PUNCHES
CAROL, SENDING HER FLYING.
THE FIELD GOES QUIET. NOW, NOTHING STANDS IN THANOS’ WAY.
Tony gets to his knees, realizing...
The Avengers are going to lose.
ACROSS THE FIELD...WATER STARTS TO SPILL INTO THE CRATER.
STRANGE TRIES TO HOLD IT BACK...BUT IT’S A LOSING BATTLE. He
looks to Tony...
Tony meets his eye. And in that moment, all Strange can do
is hold up a single finger. “One.”
ACROSS THE FIELD...THANOS RETURNS THE POWER STONE TO THE
GAUNTLET. JUST AS THE ENERGY SURGES THROUGH HIM...
TONY LUNGES FOR THE GAUNTLET IN THANOS’ HAND, NANO-CLAMPING
IT IN A VISE. THANOS KNOCKS HIM ASIDE.
HE LIFTS HIS HAND IN THE AIR, TRIUMPHANT.
THANOS
I am...inevitable.
THANOS SNAPS HIS FINGERS. But nothing happens. Confused,
Thanos turns the glove over to find...THE STONES ARE GONE.
He looks to see...TONY, NANO-PARTICLES SLIDING AND SHIFTING,
FORMING A NEW GAUNTLET ON HIS OWN WRIST:
133
134
COMPLETE WITH SIX INFINITY STONES. POWER SURGES THROUGH
TONY, EXCRUCIATING, BUT HE STILL LIFTS HIS HAND...
TONY
And I...am Iron Man.
SNAP!
WHOOSH. THE TIDAL WAVE EVAPORATES INTO MIST.
ALL AROUND THE FIELD, SAKAARANS AND OUTRIDERS FOLD IN ON
THEMSELVES, ATOMS DISINTEGRATING.
THANOS LOOKS AROUND, WATCHING HIS TROOPS DISAPPEAR. SHIPS
VANISH FROM THE SKY. CULLS, CHITAURI, ALL BLOW AWAY...
LEAVING THANOS STANDING ALONE. AFTER A LONG MOMENT, HE SITS
DOWN ON A ROCK...AND ACCEPTS HIS FATE. He watches as...
HIS ATOMS DISSOLVE. FINALLY, THANOS DISAPPEARS.
ACROSS THE FIELD, QUILL turns to GAMORA...BUT FINDS HER GONE.
QUILL
Babe? Gamora?
ACROSS THE FIELD...TONY STARK FALLS BACK AGAINST THE UPTURNED
ROOTS OF A TREE, ARMOR SMOKING, ARM WITHERED AND BLACKENED.
Dying.
RHODEY RUSHES TO HIM, BUT WITH ONE LOOK, HE KNOWS IT’S TOO
LATE. TONY EXHALES, ALMOST LETTING GO. Then...
PETER PARKER lands, kneeling, taking Tony’s hand.
PETER PARKER
Mr. Stark...Tony...it’s okay, it’s
okay...Mr. Stark, we won. You did
it, sir...
But Tony gazes past him. Rhodey puts his hand on Peter’s
shoulder, guiding him away...
AS PEPPER ARRIVES. She kneels, heartsick.
PEPPER POTTS
Hey, Friday, what’ve we got?
FRIDAY (O.S.)
Life functions critical.
Pepper stares into her husband’s eyes...and knows.
134
(MORE)
135
PEPPER POTTS
Tony, look at me. We’re going to
be okay...
He stares at her, tears welling. I’m sorry.
She touches his face, then leans in to kiss him.
PEPPER POTTS (CONT'D)
You can rest now.
When she pulls back, she sees his eyes, fixed and glassy.
Everything goes quiet. All around, OUR HEROES GATHER, the
full weight of what’s happened dawning on them.
Tony Stark is gone.
FADE TO BLACK.
EXT. HIGH SCHOOL NEW YORK CITY - NIGHT
PETER PARKER enters a hallway teeming with students. He
searches the crowd, finally finding...NED LEEDS.
As they embrace...
EXT. SAN FRANCISCO - NIGHT
Fireworks explode over the skyline of San Francisco.
TONY (O.S.)
Everybody wants a happy ending.
But it doesn’t always roll that
way. Maybe this time.
On Cassie’s porch, SCOTT watches with HOPE and CASSIE, all of
them grinning.
EXT. BARTON HOME, FRONT PORCH - DAY
TWO BIKES lean on the porch of THE BARTON FARM HOUSE. Then
the front door opens...and COOPER and LILA BARTON step out.
TONY (O.S.)
I’m hoping if you play this back,
it’s in celebration.
(MORE)
135
TONY (O.S.) (CONT'D)
(MORE)
136
I hope families are reunited, I
hope we get it back and something
like a normal version of the planet
has been restored. If there ever
was such a thing.
She looks up at...A QUINJET descending from the sky.
EXT. WAKANDA - SUNSET
ON THE PALACE BALCONY...T’CHALLA embraces his mother,
RAMONDA. Shuri turns from them to the magnificent sunset.
TONY (O.S.)
God, what a world. Universe, now.
If you’d told me ten years ago that
we weren’t alone, let alone to this
extent, I probably wouldn’t have
been surprised. But come on...
EXT BARTON HOME - DAY
The Quinjet touches down. The rear jump door opens,
revealing CLINT. He stares at Lila and Cooper, overwhelmed.
TONY (O.S.)
Who knew what epic forces of dark
and light would come into play?
For better or worse, that’s the
reality our children get to grow up
in.
They throw themselves into his arms. He kisses their heads,
tears in his eyes. Finally, he looks up to see...
LAURA BARTON, beaming, tearful, holding THREE YEAR-OLD
NATHANIEL’S HAND. Clint gathers them all into a hug.
INT. STARK ECO-COMPOUND, LIVING ROOM - DAY
A HOLOGRAM of TONY STARK projects from an IRON MAN HELMET on
the table.
TONY (O.S.)
That’s why I thought I’d probably
better record a little greeting, in
the case of…an untimely death on my
part.
TONY (O.S.) (CONT'D)
(MORE)
136
TONY (O.S.) (CONT'D)
137
I mean, death at any time is
untimely, but...this “time travel”
thing we’re going to try to pull
off tomorrow has me scratching my
head about the “survivability” of
it all. But that’s the hero gig,
right? Part of the journey is the
end.
REVERSE to find PEPPER, MORGAN, HAPPY HOGAN, RHODEY, THOR,
STEVE, SMART HULK, and CLINT, all dressed in black, watching.
TONY (CONT'D)
What am I even tripping for?
Everything is going to work out
exactly the way it’s supposed to.
HOLO TONY seems to look out at the gathered heroes...and
Morgan in particular.
TONY (CONT'D)
I love you 3000.
He switches off the camera, vanishing.
Tears streaming, Pepper kisses Morgan’s forehead.
EXT. STARK ECO-COMPOUND, BACK STAIRS - DAY
PEPPER and MORGAN slowly descend the stairs, carrying an RT
RINGED WITH FLOWERS. The Avengers follow, somber.
EXT. STARK ECO-COMPOUND, LAKESIDE - DAY
PEPPER RESTS THE FLOWERS ON THE WATER.
CLOSE ON THE RT: “Proof That Tony Stark Has A Heart.”
Pull back, past Morgan and HAPPY HOGAN...
PAST STEVE, SAM, RHODEY, AND WANDA...
PAST CLINT, LAURA, LILA, COOPER, and NATHANIEL...
PAST THOR AND SMART HULK...
PAST SCOTT, HOPE, HANK PYM, and JANET VAN DYNE...
PAST PETER PARKER and AUNT MAY...
PAST T’CHALLA, OKOYE, and SHURI,
TONY (O.S.) (CONT'D)
137
138
PAST STRANGE and WONG...
PAST QUILL, NEBULA, GROOT, MANTIS, and ROCKET...
PAST BUCKY BARNES...
PAST SECRETARY ROSS and HARLEY KEENER...
PAST MARIA HILL, CAROL DANVERS, and, finally, NICK FURY.
THE MOURNERS MOVE TO THE EDGE OF THE LAKE.
EXT. STARK ECO-COMPOUND, LAKESIDE - DAY
LATER...CLINT looks out at the lake. WANDA approaches.
CLINT BARTON
I just wish there were some way I
could let her know that we won.
That we did it.
WANDA
She knows. They both do.
Clint puts his arm around her. They stare out at the water.
EXT. STARK ECO-COMPOUND, PORCH/BACK STAIRS- DAY
ON THE PORCH, HAPPY HOGAN HOLDS MORGAN’S HAND.
HAPPY HOGAN
How are you doing, squirt? You
hungry?
MORGAN STARK
Uh, huh.
HAPPY HOGAN
What do you want?
MORGAN STARK
Cheeseburgers?
Happy takes a beat, choked up. Like father like daughter.
HAPPY HOGAN
Did you know your dad liked
cheeseburgers?
MORGAN STARK
No, I didn’t know that.
138
139
HAPPY HOGAN
I’m going to get you all the
cheeseburgers you want.
EXT. NEW ASGARD, HILLSIDE - DAY
THOR and VALKYRIE look down on NEW ASGARD.
VALKYRIE
So when can we expect you back?
THOR
About that...
VALKYRIE
Thor, your people need a king.
THOR
They already have one. And she’s a
far better king than I could ever
be.
VALKYRIE
Are you serious?
THOR
It’s time to be who I am, rather
than who I’m supposed to be. And a
leader is who you are.
She processes this. Does she want it? She does.
VALKYRIE
You know, I’d make a lot of changes
around here.
THOR
I’m counting on it, Your Majesty.
Emotional, Val finally SHAKES HIS HAND.
VALKYRIE
What will you do?
THOR
I’m not entirely sure. For the
first time in a thousand years, I
have no path.
(beat)
But I do have a ride.
REVEAL...THE BENATAR parked behind them, Rocket alongside.
139
140
ROCKET
Move it or lose it, Hairbag.
INT. BENATAR - DAY
THOR drops his duffle bag on the deck of the Benatar. QUILL,
MANTIS, DRAX, NEBULA, and ROCKET ready the engines.
THOR
Home sweet home. Tree! Good to
see you. The Asgardians of the
Galaxy, together again.
He settles beside Quill, who holomaps their course.
THOR (CONT'D)
All right, where first?
He swipes through images on the screen.
QUILL
You know, I’m still in charge,
here, right?
THOR
Of course. Of course...
Thor swipes the map again.
QUILL
See, when you keep swiping my map,
that sounds kind of like, “of
course, I know you think you’re
still in charge-”
THOR
Quail, that’s your own insecurities
bubbling up.
DRAX
You should fight one another for
the honor of leadership.
NEBULA
Sounds fair.
QUILL
That’s not necessary...
ROCKET
I’ve got some blasters right here.
Unless you want to use knives.
140
141
MANTIS
Oh, yes, please, use knivesQUILL
No one’s using knives!
GROOT
I am Groot!
Quill and Thor exchange nervous laughter.
THOR
There’ll be no knifing young Quail
today. Everyone knows who’s in
charge.
A long awkward moment passes.
QUILL
Me.
(sotto, to Thor)
Right?
Thor just smiles...
EXT. NEW ASGARD, HILLSIDE - DAY
The ship rises. WHOOSH. IT MAKES THE JUMP AND DISAPPEARS.
EXT. AVENGERS COMPOUND, RUINS - DAY
CONSTRUCTION CREWS REMOVE RUBBLE FROM AVENGERS COMPOUND. A
COMMAND TENT stands in a clearing beside...
A NEW QUANTUM TUNNEL (3.0).
As STEVE, SAM, and BUCKY wait, SMART HULK makes last minute
adjustments. He finally opens A CASE:
THE SIX INFINITY STONES GLOW INSIDE.
SMART HULK
Remember, you’ll have to return the
stones to the exact moment they
were taken. Otherwise, we’re still
looking at a whole bunch of nasty
alternate realities.
STEVE
Got it. I’ll clip all the
branches.
141
142
Steve takes the case.
SMART HULK
You know, I tried. When I had the
gauntlet. I really tried to bring
her back.
(beat)
I miss her.
STEVE
Me, too.
SMART HULK
You’d better get going. We’re
almost ready for you.
Steve and Sam approach the platform.
SAM WILSON
You look a little nervous going by
yourself. Ask nicely, I’ll go with
you.
STEVE
You’re a good man, Sam. But this
one’s on me.
When Steve reaches the platform, BUCKY stops him, pointed.
STEVE (CONT'D)
Don’t do anything stupid ‘til I get
back, okay?
BUCKY BARNES
How can I? You’re taking all the
stupid with you.
Steve grins. Bucky gives him a long hug.
BUCKY BARNES (CONT'D)
Gonna miss you, buddy.
STEVE
It’s going to be okay, Buck.
Steve picks up Mjolnir and takes his place on the platform.
SAM LOOKS TO SMART HULK AT THE CONSOLE.
SAM WILSON
How long’s this gonna take?
142
143
SMART HULK
For him, as long as he needs. For
us, five seconds.
(calling out)
Ready, Cap? You’re good to go.
Meet you right back here, okay?
Steve glances at Bucky as he answers.
STEVE
You bet.
SMART HULK
Going Quantum in three, two, one.
STEVE TAPS HIS CUFF AND SHRINKS TO NOTHING.
SMART HULK (CONT'D)
Aaand, returning in five...
four...three...two...oneSilence. Nothing happens.
SAM WILSON
Where is he?
SMART HULK
I don’t know. He blew past our
time stamp. He should be here.
SAM WILSON
Get him back!
SMART HULK
I’m trying.
SAM WILSON
Get him the hell backSMART HULK
I’M TRYING!
Just then...Bucky looks out to the water.
BUCKY BARNES
Sam.
Sam turns...
EXT AVENGERS COMPOUND, RIVERBANK - CONTINUOUS
Work crews have cleared a space overlooking the river.
There, AN OLD MAN sits on a bench, staring out at the Hudson.
143
144
Move around him to find SAM watching from A FEW YARDS AWAY.
SAM WILSON
Hey, Cap.
The man turns and we now see: STEVE ROGERS, age 112.
OLD STEVE
Hi, Sam.
SAM WILSON
Something go wrong...or something
go right?
OLD STEVE
I thought, after everything that’s
happened...maybe I should try out
some of that life Tony always told
me to get.
SAM WILSON
How was it?
Steve looks at the river, 112 years of emotion in his face.
OLD STEVE
It was beautiful.
SAM WILSON
I’m happy for you. Really.
OLD STEVE
Thanks.
SAM WILSON
Only thing bumming me out is now I
live in a world without Captain
America.
Steve pulls up A CASE from beside him, giving it to Sam.
OLD STEVE
That’s kind of why I’m here.
Sam unzips it, revealing...A BRAND NEW SHIELD.
SAM WILSON
Where did you even get this?
OLD STEVE
I had a little time to travel.
(beat)
Try it on.
144
145
Sam hesitates. He glances back at Bucky, who nods. Then Sam
picks up the shield...and puts it on.
OLD STEVE (CONT'D)
How does it feel?
SAM WILSON
Like it’s someone else’s.
OLD STEVE
It isn’t.
Sam tries to check his emotion. He shakes Steve’s hand.
SAM WILSON
Thank you. I’ll try my best.
Steve rests his other hand on Sam’s.
OLD STEVE
That’s why it’s yours.
Sam smiles, noticing...STEVE’S TARNISHED WEDDING RING.
SAM WILSON
You gonna tell me about her?
Steve smiles to himself at the end of a long, long life.
OLD STEVE
Nope. I don’t think I will.
CUE MUSIC: “IT’S BEEN A LONG, LONG TIME,” HARRY JAMES.
EXT. COLUMBIA HEIGHTS, WASHINGTON DC - DAY
A PACKARD rolls down a block of WASHINGTON D.C. ROW HOUSES.
TITLE: “WASHINGTON D.C., 1949.”
Find a red house in the middle of the block. Move up the
steps to the front door...WHICH HANGS WIDE OPEN.
INT. RED HOUSE, COLUMBIA HEIGHTS, WASHINGTON DC - DAY
A TEA CUP LIES SHATTERED on the hardwood. We hear Harry
James. Move into the living room...past the record player...
TO WHERE STEVE DANCES WITH A WOMAN. They rock back and forth
barely moving. As they turn, we see...
145
146
PEGGY CARTER, tears streaming down her face. He steps on her
toe. She laughs. As they turn, we get a good look at...
Steve Rogers, eyes shut, finally getting the life he
deserves.
THE END.
146
All rights reserved. Copyright © 2019 Marvel.
No portion of this script may be performed, published,
reproduced, sold or distributed by any means, or quoted or
published in any medium, including any website, without the
prior written consent of Marvel Studios, Inc. Disposal of this script copy
does alter any of the restrictions set forth above.

THE END

`);
