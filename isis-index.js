const Sequelize = require('sequelize'),
      sequelize = new Sequelize('isisvanderplas', 'isisvanderplas', { dialect: 'postgres'});

var Movie = sequelize.define('movie', {
  movieTitle: sequelize.STRING,
  coverImageURL: sequelize.STRING,
  movieTrailer: sequelize.STRING,
  movieSlug: sequelize.STRING,
  movieDirectorName: sequelize.STRING,
  movieActorNames: sequelize.STRING,
  language: sequelize.STRING,
  subtitles: sequelize.STRING,
  movieGenre: sequelize.STRING,
  lengthInMin: sequelize.INTEGER,
  movieDescription: sequelize.TEXT
});

sequelize.sync().then((), => {
  Movie.bulkCreate([
    {
      movieTitle: 'Fantastic Beasts and Where to Find Them',
      coverImageURL: 'http://photos.laineygossip.com/articles/fantastic-beasts-sequel-03aug16.jpg',
      movieTrailer: 'https://www.youtube.com/watch?v=Vso5o11LuGU',
      movieSlug: 'fantastic-beasts-and-where-to-find-them',
      movieDirectorName: 'David Yates',
      movieActorNames: 'Eddie Redmayne, Ezra Miller, Jon Voight',
      language: 'English',
      subtitles: 'Dutch',
      movieGenre: 'Adventure, Fantasy',
      lengthInMin: 134,
      movieDescription: "The year is 1926, and Newt Scamander (Eddie Redmayne) has just completed a global excursion to find and document an extraordinary array of magical creatures. Arriving in New York for a brief stopover, he might have come and gone without incident, were it not for a No-Maj (American for Muggle) named Jacob, a misplaced magical case, and the escape of some of Newt's fantastic beasts, which could spell trouble for both the wizarding and No-Maj worlds."
    },
    {
      movieTitle: 'Rogue One: a Star Wars story',
      coverImageURL: 'http://a.dilcdn.com/bl/wp-content/uploads/sites/6/2016/10/rogueone_onesheetA.jpg',
      movieTrailer: 'https://www.youtube.com/watch?v=frdj1zb9sMY',
      movieSlug: 'rogue-one-a-star-wars-story',
      movieDirectorName: 'Gareth Edwards',
      movieActorNames: 'Felicity Jones, Mads Mikkelsen, Forest Whitaker',
      language: 'English',
      subtitles: 'Dutch',
      movieGenre: 'Adventure, Fantasy',
      lengthInMin: 133,
      movieDescription: "In a time of conflict, a group of unlikely heroes band together on a mission to steal the plans to the Death Star, the Empire's ultimate weapon of destruction. This key event in the Star Wars timeline brings together ordinary people who choose to do extraordinary things, and in doing so, become part of something greater than themselves."
    },
    {
      movieTitle: 'Doctor Strange',
      coverImageURL: 'http://cdn2-www.comingsoon.net/assets/uploads/gallery/doctor-strange-1403135280/cr2vlm7wyaabl7_.jpg',
      movieTrailer: 'https://www.youtube.com/watch?v=HSzx-zryEgM',
      movieSlug: 'doctor-strange',
      movieDirectorName: 'Scott Derrickson',
      movieActorNames: 'Benedict Cumberbatch, Tilda Swinton, Rachel McAdams',
      language: 'English',
      subtitles: 'Dutch',
      movieGenre: 'Adventure, Action, Fantasy',
      lengthInMin: 118,
      movieDescription: "Dr. Stephen Strange's (Benedict Cumberbatch) life changes after a car accident robs him of the use of his hands. When traditional medicine fails him, he looks for healing, and hope, in a mysterious enclave. He quickly learns that the enclave is at the front line of a battle against unseen dark forces bent on destroying reality. Before long, Strange is forced to choose between his life of fortune and status or leave it all behind to defend the world as the most powerful sorcerer in existence."
    },
    {
      movieTitle: 'Arrival',
      coverImageURL: 'http://www.scified.com/u/new-arrival-movie-poster-615813.jpg',
      movieTrailer: 'https://www.youtube.com/watch?v=tFMo3UJ4B4g',
      movieSlug: 'arrival',
      movieDirectorName: 'Dennis Villeneuve',
      movieActorNames: 'Amy Adams, Jeremy Renner, Forest Whitaker',
      language: 'English',
      subtitles: 'Dutch',
      movieGenre: 'Science Fiction',
      lengthInMin: 116,
      movieDescription: "Linguistics professor Louise Banks (Amy Adams) leads an elite team of investigators when gigantic spaceships touch down in 12 locations around the world. As nations teeter on the verge of global war, Banks and her crew must race against time to find a way to communicate with the extraterrestrial visitors. Hoping to unravel the mystery, she takes a chance that could threaten her life and quite possibly all of mankind."
    },
    {
      movieTitle: "Bridget Jones's Baby",
      coverImageURL: 'https://movies.universalpictures.com/media/bjb-adv1sheet-rgb-1-57ab705f117b2-1.png',
      movieTrailer: 'https://www.youtube.com/watch?v=mJsvmscPY9w',
      movieSlug: 'bridget-jones-baby',
      movieDirectorName: 'Sharon Maguire',
      movieActorNames: 'Renee Zelweger, Colin Firth, Patrick Dempsey',
      language: 'English',
      subtitles: 'Dutch',
      movieGenre: 'Comedy, Romance',
      lengthInMin: 123,
      movieDescription: "Breaking up with Mark Darcy (Colin Firth) leaves Bridget Jones (Renée Zellweger) over 40 and single again. Feeling that she has everything under control, Jones decides to focus on her career as a top news producer. Suddenly, her love life comes back from the dead when she meets a dashing and handsome American named Jack (Patrick Dempsey). Things couldn't be better, until Bridget discovers that she is pregnant. Now, the befuddled mom-to-be must figure out if the proud papa is Mark or Jack."
    },
    {
      movieTitle: 'Inferno',
      coverImageURL: 'http://www.blackfilm.com/read/wp-content/uploads/2016/08/Inferno-Poster-3.jpg',
      movieTrailer: 'https://www.youtube.com/watch?v=RH2BD49sEZI',
      movieSlug: 'Inferno',
      movieDirectorName: 'Ron Howard',
      movieActorNames: 'Tom Hanks, Felicity Jones, Omar Sy',
      language: 'English',
      subtitles: 'Dutch',
      movieGenre: 'Mystery, Thriller',
      lengthInMin: 123,
      movieDescription: "Famous symbologist Robert Langdon (Tom Hanks) follows a trail of clues tied to Dante, the great medieval poet. When Langdon wakes up in an Italian hospital with amnesia, he teams up with Sienna Brooks (Felicity Jones), a doctor he hopes will help him recover his memories. Together, they race across Europe and against the clock to stop a madman (Ben Foster) from unleashing a virus that could wipe out half of the world's population."
    },
    {
      movieTitle: 'The girl on the train',
      coverImageURL: 'https://d.ibtimes.co.uk/en/full/1534462/girl-train-poster.jpg?w=301',
      movieTrailer: 'https://www.youtube.com/watch?v=l5_Iiu_uWI8',
      movieSlug: 'the-girl-on-the-train',
      movieDirectorName: 'Tate Taylor',
      movieActorNames: 'Emily Blunt, Rebecca Ferguson, Luke Evans',
      language: 'English',
      subtitles: 'Dutch',
      movieGenre: 'Thriller',
      lengthInMin: 112,
      movieDescription: "Commuter Rachel Watson (Emily Blunt) catches daily glimpses of a seemingly perfect couple, Scott and Megan, from the window of her train. One day, Watson witnesses something shocking unfold in the backyard of the strangers' home. Rachel tells the authorities what she thinks she saw after learning that Megan is now missing and feared dead. Unable to trust her own memory, the troubled woman begins her own investigation, while police suspect that Rachel may have crossed a dangerous line."
    },
    {
      movieTitle: 'De zevende Hemel',
      coverImageURL: 'https://media.pathe.nl/nocropthumb/620x955/gfx_content/posters/de_zevende_hemel_43008884_ps_1_s-high.jpg',
      movieTrailer: 'https://www.youtube.com/watch?v=OdZ3iuHXK8w',
      movieSlug: 'de-zevende-hemel',
      movieDirectorName: 'Job Gosschalk',
      movieActorNames: 'Huub Stapel, Thomas Acda, Halina Reijn',
      language: 'Dutch',
      subtitles: Null,
      movieGenre: 'Romance, Musical',
      lengthInMin: 106,
      movieDescription: "De Zevende Hemel is een muzikale ode aan liefde en familie van topregisseur Job Gosschalk met liedjes van o.a. Nick & Simon, Boudewijn de Groot en Doe Maar. In De Zevende Hemel ontmoeten we Maria Rossi, die samen met haar man Max het prachtige Italiaanse restaurant De Zevende Hemel runt. Wanneer het leven een onverwachte wending neemt, besluit ze de familie, haar kinderen met partners, weer eens samen te brengen. Echter staan oude ruzies, relatieproblemen en het jubileum van het familierestaurant haar wens in de weg…"
    },
    {
      movieTitle: 'The Accountant',
      coverImageURL: 'http://www.filmhoek.nl/wp-content/uploads/2016/05/The-Accountant-poster-met-Ben-Affleck.jpg',
      movieTrailer: 'https://www.youtube.com/watch?v=DBfsgcswlYQ',
      movieSlug: 'the-accountant',
      movieDirectorName: "Gavin O'Connor",
      movieActorNames: 'Ben Affleck, Anna Kendrick, J.K. Simmons',
      language: 'English',
      subtitles: 'Dutch',
      movieGenre: 'Drama',
      lengthInMin: 128,
      movieDescription: "Christian Wolff (Ben Affleck) is a mathematics savant with more affinity for numbers than people. Using a small-town CPA office as a cover, he makes his living as a freelance accountant for dangerous criminal organizations. With a Treasury agent (J.K. Simmons) hot on his heels, Christian takes on a state-of-the-art robotics company as a legitimate client. As Wolff gets closer to the truth about a discrepancy that involves millions of dollars, the body count starts to rise."
    },
    {
      movieTitle: 'Vaiana',
      coverImageURL: 'https://media.pathe.nl/nocropthumb/620x955/gfx_content/posters/vaianaposter.jpg',
      movieTrailer: 'https://www.youtube.com/watch?v=q5Pd080tYT4',
      movieSlug: 'vaiano',
      movieDirectorName: 'Ron Clements',
      movieActorNames: "John Musker, Auli'i Cravalho, Dwayne Johnson",
      language: 'English',
      subtitles: 'Dutch',
      movieGenre: 'Animation, Comdey',
      lengthInMin: 113,
      movieDescription: "An adventurous teenager sails out on a daring mission to save her people. During her journey, Moana meets the once-mighty demigod Maui, who guides her in her quest to become a master way-finder. Together they sail across the open ocean on an action-packed voyage, encountering enormous monsters and impossible odds. Along the way, Moana fulfills the ancient quest of her ancestors and discovers the one thing she always sought: her own identity."
    }
  ]);
});
