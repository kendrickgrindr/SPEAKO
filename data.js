/**
 * Speako — Complete Course & Curriculum Data (from Speako PJ.pdf & Pricing Specs)
 */
window.SPEAKO_DATA = {
  brand: {
    name: "Speako",
    headline: "Speak with confidence, one lesson at a time.",
    subheadline: "Live 1-on-1 English and Thai tutoring for beginners who want practical communication, flexible scheduling, and personal support.",
    intro: "Speako offers live private tutoring for students who want to improve English or Thai from the basics. Lessons focus on real communication, simple explanations, and step-by-step progress. Whether the goal is daily conversation, self-introduction, survival Thai, or beginner English, each lesson is designed to help students speak more clearly and feel more confident.",
    taglines: [
      "Speak with confidence.",
      "Learn language the easy way.",
      "Real lessons. Real speaking.",
      "Step by step to fluency.",
      "Your bridge to better communication."
    ],
    whySpeako: [
      { title: "Live 1-on-1 tutoring", desc: "Private, personal sessions tailored 100% to your pace, comfort level, and goals.", icon: "video" },
      { title: "Flexible scheduling", desc: "Book your preferred date and time slot that matches directly with your teacher's live calendar.", icon: "calendar" },
      { title: "Beginner-friendly lessons", desc: "No intimidating grammar theory. Start from zero and build sentences step by step.", icon: "smile" },
      { title: "English & Thai support", desc: "Lessons can be taught using both English and Thai explanations so you always understand clearly.", icon: "globe" },
      { title: "Practical daily speaking", desc: "Role-play real-life situations: cafes, markets, directions, introductions, and daily life.", icon: "message" },
      { title: "Personal attention & feedback", desc: "Receive live pronunciation coaching, post-class notes, and interactive slide decks.", icon: "award" }
    ],
    howItWorks: [
      { step: 1, title: "Choose a course", desc: "Pick Beginner Thai for Daily & Survival Communication or Beginner English for Daily Life." },
      { step: 2, title: "Book a preferred time", desc: "Match your schedule with Piya or our tutors using the live interactive timetable." },
      { step: 3, title: "Join a live 1-on-1 lesson", desc: "Connect via your Student Portal with interactive slide decks and audio pronunciation." },
      { step: 4, title: "Practice with support", desc: "Speak in realistic role-plays with gentle, immediate feedback in English & Thai." },
      { step: 5, title: "Build confidence step by step", desc: "Track your 8-lesson progress, review homework, and speak naturally in real life." }
    ],
    philosophy: [
      "Start with real communication.",
      "Keep lessons simple and focused.",
      "Build confidence through repetition and practice.",
      "Use English and Thai when needed for clarity.",
      "Make every lesson useful in daily life."
    ]
  },

  pricing: {
    thai: [
      {
        id: "thai-trial",
        badge: "สวัสดี · Thai lessons",
        featuredBadge: "START HERE",
        title: "Free Thai trial",
        price: 0,
        currency: "฿",
        unit: "1 Thai lesson",
        lessons: 1,
        course: "thai",
        darkCard: true,
        cta: "Book Free Thai Trial",
        features: [
          "1 live 1-on-1 Thai lesson",
          "Meet your tutor",
          "Find the right level for you"
        ]
      },
      {
        id: "thai-8",
        badge: "สวัสดี · Thai lessons",
        title: "8 Thai lessons",
        price: 4490,
        currency: "฿",
        currencySuffix: "THB",
        lessons: 8,
        course: "thai",
        darkCard: false,
        cta: "Book 8 Thai Lessons",
        features: [
          "Live 1-on-1 Thai lessons, 1 hour each",
          "Personalized lessons",
          "Speaking practice",
          "Feedback and support",
          "Homework and review when needed"
        ]
      },
      {
        id: "thai-16",
        badge: "สวัสดี · Thai lessons",
        title: "16 Thai lessons",
        price: 8880,
        currency: "฿",
        currencySuffix: "THB",
        lessons: 16,
        course: "thai",
        darkCard: false,
        cta: "Book 16 Thai Lessons",
        features: [
          "Live 1-on-1 Thai lessons, 1 hour each",
          "Personalized lessons",
          "Speaking practice",
          "Feedback and support",
          "Homework and review when needed"
        ]
      }
    ],
    english: [
      {
        id: "english-trial",
        badge: "Hello · English lessons",
        featuredBadge: "START HERE",
        title: "Free English trial",
        price: 0,
        currency: "฿",
        unit: "1 English lesson",
        lessons: 1,
        course: "english",
        darkCard: true,
        cta: "Book Free English Trial",
        features: [
          "1 live 1-on-1 English lesson",
          "Meet your tutor",
          "Find the right level for you"
        ]
      },
      {
        id: "english-8",
        badge: "Hello · English lessons",
        title: "8 English lessons",
        price: 3690,
        currency: "฿",
        currencySuffix: "THB",
        lessons: 8,
        course: "english",
        darkCard: false,
        cta: "Book 8 English Lessons",
        features: [
          "Live 1-on-1 English lessons, 1 hour each",
          "Personalized lessons",
          "Speaking practice",
          "Feedback and support",
          "Homework and review when needed"
        ]
      },
      {
        id: "english-16",
        badge: "Hello · English lessons",
        title: "16 English lessons",
        price: 7380,
        currency: "฿",
        currencySuffix: "THB",
        lessons: 16,
        course: "english",
        darkCard: false,
        cta: "Book 16 English Lessons",
        features: [
          "Live 1-on-1 English lessons, 1 hour each",
          "Personalized lessons",
          "Speaking practice",
          "Feedback and support",
          "Homework and review when needed"
        ]
      }
    ]
  },

  courses: {
    thai: {
      id: "thai",
      badge: "สวัสดี · Beginner Thai",
      shortTitle: "Thai Course",
      title: "Basic Thai for Daily Communication and Survival Thai",
      subtitle: "A beginner Thai course for non-Thai speakers who want to communicate in Thailand. Lessons cover greetings, polite words, food, directions, shopping, and survival Thai.",
      description: "This beginner Thai course helps non-Thai speakers communicate in everyday situations in Thailand. Lessons focus on practical phrases, polite communication, and simple conversations for real life.",
      whoItIsFor: [
        "Foreigners living in Thailand.",
        "Tourists who want useful Thai.",
        "Expats and digital nomads.",
        "Beginners who want speaking-first Thai."
      ],
      outcomes: [
        "Greet people politely.",
        "Introduce themselves.",
        "Ask and answer basic questions.",
        "Order food and drinks.",
        "Ask for directions.",
        "Shop and ask prices.",
        "Use polite Thai expressions correctly."
      ],
      format: [
        "8 lessons total (or 16-lesson extended mastery).",
        "1 hour per lesson.",
        "Live 1-on-1 tutoring.",
        "English and Thai support when needed."
      ],
      persona: "Non-Thai speakers who live in Thailand or plan to travel there, need practical speaking, want polite communication, and prefer simple explanations with repetition.",
      lessons: [
        {
          number: 1,
          title: "Greetings and Polite Words",
          goal: "Help the student greet people politely and use basic courtesy in Thai.",
          whatToTeach: [
            "สวัสดี (sà-wàt-dii — hello)",
            "ขอบคุณ (khàwp-khun — thank you)",
            "ขอโทษ (khǎw-thôot — sorry / excuse me)",
            "ไม่เป็นไร (mâi bpen rai — it’s okay)",
            "ครับ / ค่ะ (khráp / khâ — polite endings)",
            "Yes / no basic politeness in daily interaction"
          ],
          grammarFocus: ["Basic polite particles", "Simple greeting patterns"],
          vocabulary: ["Hello", "thank you", "sorry", "okay", "polite", "goodbye"],
          speakingPractice: [
            "Repeat greetings with correct tone and pronunciation.",
            "Practice polite conversation openings and endings.",
            "Use short greeting role plays."
          ],
          homework: [
            "Practice saying greetings aloud 10 times.",
            "Record a short greeting to review pronunciation."
          ],
          slideDeckUrl: null
        },
        {
          number: 2,
          title: "Self-Introduction",
          goal: "Help the student introduce themselves in Thai.",
          whatToTeach: [
            "My name is… (ผม/ฉันชื่อ...)",
            "I am from… (ผม/ฉันมาจาก...)",
            "I am…",
            "Nice to meet you (ยินดีที่ได้รู้จัก)",
            "Asking someone’s name (คุณชื่ออะไร)",
            "Asking where someone is from (คุณมาจากประเทศอะไร)"
          ],
          grammarFocus: ["Basic self-introduction sentence structure", "Polite question and answer patterns"],
          vocabulary: ["Name", "country", "city", "from", "meet", "friend"],
          speakingPractice: [
            "Introduce yourself with your name and country.",
            "Ask and answer a partner’s name.",
            "Practice a full short introduction."
          ],
          homework: [
            "Write 3 self-introduction sentences.",
            "Practice the introduction aloud."
          ],
          slideDeckUrl: "lessons/speako-lesson-2.html"
        },
        {
          number: 3,
          title: "Numbers, Time, and Basic Questions",
          goal: "Help the student understand and use numbers, time, and simple question patterns.",
          whatToTeach: [
            "Numbers in Thai (0–100+)",
            "What time is it? (กี่โมงแล้ว)",
            "How much? (เท่าไหร่)",
            "Where? (ที่ไหน)",
            "Who? (ใคร)",
            "Basic counting for daily life"
          ],
          grammarFocus: ["Question words", "Simple answer patterns"],
          vocabulary: ["Numbers", "time", "price", "hour", "minute", "morning", "afternoon", "night"],
          speakingPractice: [
            "Count numbers aloud.",
            "Ask and answer the time.",
            "Practice basic question and answer exchanges."
          ],
          homework: [
            "Practice numbers from 1 to 20.",
            "Write 5 simple question-and-answer pairs."
          ],
          slideDeckUrl: "lessons/lesson-3-numbers-time-questions.html"
        },
        {
          number: 4,
          title: "Ordering Food and Drinks",
          goal: "Help the student order food politely in a restaurant or cafe.",
          whatToTeach: [
            "Food and drink vocabulary",
            "I would like… (ขอ... / เอา...)",
            "May I have…",
            "Spicy / not spicy (เผ็ด / ไม่เผ็ด)",
            "Delicious (อร่อย)",
            "More / less",
            "Rice, noodles, water, coffee, tea"
          ],
          grammarFocus: ["Polite request patterns", "Basic food-ordering sentences"],
          vocabulary: ["Food", "drink", "menu", "restaurant", "spicy", "delicious", "water"],
          speakingPractice: [
            "Order food in a role play.",
            "Ask for drinks and menu items.",
            "Practice simple restaurant conversation."
          ],
          homework: [
            "Learn 10 food and drink words.",
            "Practice one full ordering dialogue."
          ],
          slideDeckUrl: null
        },
        {
          number: 5,
          title: "Directions and Transportation",
          goal: "Help the student ask for and understand directions in Thai.",
          whatToTeach: [
            "Go straight (ตรงไป)",
            "Turn left (เลี้ยวซ้าย)",
            "Turn right (เลี้ยวขวา)",
            "Near / far (ใกล้ / ไกล)",
            "Where is…? (...อยู่ที่ไหน)",
            "Taxi, bus, train, street, road, hotel, market"
          ],
          grammarFocus: ["Direction question patterns", "Basic location expressions"],
          vocabulary: ["Direction", "street", "left", "right", "straight", "near", "far", "taxi", "map"],
          speakingPractice: [
            "Ask for directions to common places.",
            "Give simple directions.",
            "Practice transport-related dialogue."
          ],
          homework: [
            "Memorize direction words.",
            "Practice asking how to get to 3 places."
          ],
          slideDeckUrl: null
        },
        {
          number: 6,
          title: "Shopping and Prices",
          goal: "Help the student buy things and ask prices in Thai.",
          whatToTeach: [
            "How much? (อันนี้เท่าไหร่)",
            "Expensive / cheap (แพง / ถูก)",
            "This one / That one (อันนี้ / อันนั้น)",
            "I want this (เอาอันนี้)",
            "Market, shop, price, money"
          ],
          grammarFocus: ["Asking about price", "Simple shopping expressions"],
          vocabulary: ["Buy", "sell", "price", "money", "market", "shop", "expensive", "cheap"],
          speakingPractice: [
            "Role-play shopping at a market.",
            "Ask the price of items.",
            "Practice choosing items and paying politely."
          ],
          homework: [
            "Practice shopping phrases.",
            "Write 5 price-related questions."
          ],
          slideDeckUrl: null
        },
        {
          number: 7,
          title: "Daily Needs and Common Situations",
          goal: "Help the student handle simple real-life situations in Thai.",
          whatToTeach: [
            "Help (ช่วยด้วย)",
            "I don’t understand (ไม่เข้าใจ)",
            "Please speak slowly (พูดช้าๆ ได้ไหม)",
            "Bathroom (ห้องน้ำ)",
            "Phone (โทรศัพท์)",
            "I want… / I need…"
          ],
          grammarFocus: ["Request patterns", "Basic survival communication"],
          vocabulary: ["Help", "understand", "slow", "bathroom", "need", "want", "phone", "problem"],
          speakingPractice: [
            "Practice asking for help.",
            "Use emergency and daily need phrases.",
            "Role-play common survival situations."
          ],
          homework: [
            "Learn 10 survival phrases.",
            "Practice saying them naturally."
          ],
          slideDeckUrl: null
        },
        {
          number: 8,
          title: "Review and Role Play",
          goal: "Help the student use all the course language in realistic conversations.",
          whatToTeach: [
            "Review greetings, introductions, numbers, food, directions, shopping, and daily needs.",
            "Combine all the lesson language into real-life conversation."
          ],
          grammarFocus: ["Review of all basic patterns", "Review of polite requests and question forms"],
          vocabulary: ["All key vocabulary from the course"],
          speakingPractice: [
            "Role-play a full day in Thailand.",
            "Practice greeting, ordering food, asking directions, and shopping.",
            "Final conversation practice with feedback."
          ],
          homework: [
            "Review all notes from the course.",
            "Prepare a final speaking practice conversation."
          ],
          slideDeckUrl: null
        }
      ]
    },

    english: {
      id: "english",
      badge: "Hello · Beginner English",
      shortTitle: "English Course",
      title: "Basic English for Daily Communication and Self-Introduction",
      subtitle: "A beginner English course focused on greetings, self-introduction, basic grammar, daily routines, and simple conversations. Perfect for learners who want to speak in everyday situations.",
      description: "This beginner English course helps students improve basic grammar and daily communication. The lessons focus on speaking, asking and answering questions, introducing yourself, and using English in real-life situations.",
      whoItIsFor: [
        "Beginner English learners.",
        "Adults who want practical communication.",
        "Students who want more confidence speaking.",
        "Learners who need simple explanations and personal support."
      ],
      outcomes: [
        "Introduce themselves.",
        "Ask and answer simple questions.",
        "Talk about daily routines.",
        "Describe family and hobbies.",
        "Communicate about everyday life with more confidence."
      ],
      format: [
        "8 lessons total (or 16-lesson extended mastery).",
        "1 hour per lesson.",
        "Live 1-on-1 tutoring.",
        "English and Thai support when needed."
      ],
      persona: "Beginner adult learners aged 24–35. This includes people working in hospitality, service, office, or retail who want to speak basic English for daily life and work. They feel nervous speaking and prefer simple explanations and practical lessons.",
      lessons: [
        {
          number: 1,
          title: "Greetings and Introductions",
          goal: "Help the student introduce themselves and use basic greetings in a short conversation.",
          whatToTeach: [
            "Hello, hi, good morning, good afternoon, good evening.",
            "Goodbye, bye, see you later.",
            "My name is… / I’m… / I’m from…",
            "Nice to meet you.",
            "What’s your name? / Where are you from?"
          ],
          grammarFocus: ["Subject pronouns: I, you", "Verb be: am, are", "Basic question forms"],
          vocabulary: ["Name", "country", "city", "friend", "meet", "introduce"],
          speakingPractice: [
            "Teacher models a short conversation.",
            "Student repeats and personalizes it.",
            "Student answers simple questions about name and country.",
            "Student introduces themself in 3 to 5 sentences."
          ],
          homework: [
            "Write 5 introduction sentences.",
            "Record a short self-introduction and listen back."
          ],
          slideDeckUrl: null
        },
        {
          number: 2,
          title: "Pronouns and Be Verb",
          goal: "Help the student build basic sentences using pronouns and the verb be.",
          whatToTeach: [
            "I, you, he, she, it, we, they.",
            "am, is, are.",
            "I am a student. / She is my friend. / They are from Thailand.",
            "Is he a teacher? / Are you ready?"
          ],
          grammarFocus: ["Subject pronouns", "Present tense of be", "Affirmative, negative, and question forms"],
          vocabulary: ["Student", "teacher", "friend", "doctor", "worker", "Thai", "English"],
          speakingPractice: [
            "Match pronouns with correct be verb.",
            "Make true sentences about yourself and other people.",
            "Ask and answer yes/no questions."
          ],
          homework: [
            "Write 8 sentences using am, is, and are.",
            "Practice reading them aloud."
          ],
          slideDeckUrl: null
        },
        {
          number: 3,
          title: "Personal Information",
          goal: "Help the student talk about basic personal details.",
          whatToTeach: [
            "Name, age, job, nationality, phone number, email, city.",
            "What do you do?",
            "How old are you?",
            "Where do you live?",
            "What’s your phone number?"
          ],
          grammarFocus: ["Question words: what, where, how old", "Short answers"],
          vocabulary: ["Name", "age", "job", "work", "live", "email", "phone"],
          speakingPractice: [
            "Fill in a personal information form.",
            "Ask and answer partner questions.",
            "Give a short profile about yourself."
          ],
          homework: [
            "Complete a personal profile sheet.",
            "Practice answering 5 personal questions."
          ],
          slideDeckUrl: null
        },
        {
          number: 4,
          title: "Questions and Answers",
          goal: "Help the student ask and answer simple everyday questions.",
          whatToTeach: [
            "What, where, who, how, when.",
            "Do you like…?",
            "What do you do?",
            "Where are you going?",
            "How are you?",
            "When do you study?"
          ],
          grammarFocus: ["WH-questions", "Yes/no questions", "Short answers"],
          vocabulary: ["Daily life words and common action words"],
          speakingPractice: [
            "Build questions from prompts.",
            "Role-play short Q&A exchanges.",
            "Practice asking follow-up questions."
          ],
          homework: [
            "Write 10 simple questions.",
            "Answer them in full sentences."
          ],
          slideDeckUrl: null
        },
        {
          number: 5,
          title: "Daily Routines",
          goal: "Help the student talk about their everyday schedule.",
          whatToTeach: [
            "Wake up, brush teeth, eat breakfast, go to work, study, have lunch, go home, sleep.",
            "In the morning, in the afternoon, in the evening.",
            "At 7 o’clock, at noon, at night."
          ],
          grammarFocus: ["Simple present tense", "Frequency words: always, usually, often, sometimes"],
          vocabulary: ["Routine", "morning", "afternoon", "evening", "lunch", "dinner", "bed", "work", "study"],
          speakingPractice: [
            "Describe a normal day.",
            "Ask and answer routine questions.",
            "Compare your routine with the student’s routine."
          ],
          homework: [
            "Write 8 sentences about your daily routine.",
            "Record a 1-minute speaking practice."
          ],
          slideDeckUrl: null
        },
        {
          number: 6,
          title: "Family and People",
          goal: "Help the student talk about family members and describe people.",
          whatToTeach: [
            "Mother, father, sister, brother, husband, wife, son, daughter.",
            "Tall, short, young, old, kind, friendly.",
            "This is my… / He is… / She is…"
          ],
          grammarFocus: ["Possessive words: my, your, his, her", "Simple descriptive sentences"],
          vocabulary: ["Family", "people", "relationships", "appearance", "personality"],
          speakingPractice: [
            "Show a family tree and describe it.",
            "Talk about one family member.",
            "Describe a friend or classmate."
          ],
          homework: [
            "Draw a simple family tree and label it in English.",
            "Write 5 sentences about your family."
          ],
          slideDeckUrl: null
        },
        {
          number: 7,
          title: "Likes and Hobbies",
          goal: "Help the student talk about preferences and free-time activities.",
          whatToTeach: [
            "I like… / I don’t like… / Do you like…?",
            "Hobbies: reading, cooking, music, movies, travel, sports, shopping.",
            "In my free time…"
          ],
          grammarFocus: ["Like / don’t like", "Simple opinion statements", "Questions about preferences"],
          vocabulary: ["Hobby", "free time", "music", "movie", "book", "game", "travel", "sport"],
          speakingPractice: [
            "Ask and answer hobby questions.",
            "Make a list of favorite activities.",
            "Give short opinions."
          ],
          homework: [
            "Write 5 things you like and 5 things you don’t like.",
            "Practice speaking for 1 minute about hobbies."
          ],
          slideDeckUrl: null
        },
        {
          number: 8,
          title: "Review and Speaking Practice",
          goal: "Help the student use all the course language in real conversations.",
          whatToTeach: [
            "Review all previous lesson vocabulary and grammar.",
            "Review self-introduction, personal information, questions, routines, family, and hobbies.",
            "Practice complete short conversations."
          ],
          grammarFocus: ["Review of am/is/are", "Review of WH-questions", "Review of simple present and like/don’t like"],
          vocabulary: ["All key vocabulary from the course"],
          speakingPractice: [
            "Role-play greetings and introductions.",
            "Role-play daily life situations.",
            "Answer mixed questions from the teacher.",
            "Give a full self-introduction and short daily-life conversation."
          ],
          homework: [
            "Review notes from all lessons.",
            "Prepare a final speaking practice answer."
          ],
          slideDeckUrl: null
        }
      ]
    }
  },

  testimonials: [
    {
      name: "Daniel K.",
      role: "Digital Nomad in Bangkok",
      course: "8 Thai Lessons",
      quote: "After just 3 lessons with Piya, I could introduce myself, count prices at the market, and order food politely without switching to English. The interactive slide decks make reviewing so easy!",
      rating: 5
    },
    {
      name: "Nattaya W.",
      role: "Hospitality Coordinator",
      course: "8 English Lessons",
      quote: "I used to feel so nervous speaking to foreign guests at work. Piya explains everything clearly in both Thai and English. Now I can hold daily conversations with real confidence.",
      rating: 5
    },
    {
      name: "Marcus L.",
      role: "Expat in Chiang Mai",
      course: "16 Thai Lessons",
      quote: "Booking my schedule every week takes 10 seconds, and having all my lesson notes, homework, and slides inside my student timetable keeps me consistent.",
      rating: 5
    }
  ],

  faqs: [
    {
      q: "How do the lessons work?",
      a: "Lessons are live and private, one-on-one sessions. Each class focuses on practical communication and speaking practice tailored to your exact pace."
    },
    {
      q: "How long is each lesson?",
      a: "Each lesson is 1 full hour (60 minutes) of live 1-on-1 tutoring."
    },
    {
      q: "What courses are available?",
      a: "Two structured beginner courses are available: Basic English for Daily Communication and Self-Introduction, and Basic Thai for Daily Communication and Survival Thai."
    },
    {
      q: "What language is used in class?",
      a: "Lessons can be taught in Thai and English depending on the student’s level and comfort—so you never feel lost."
    },
    {
      q: "Can the schedule be chosen?",
      a: "Yes! Students can view their teacher's live availability calendar and book the exact dates and times that work best for them."
    },
    {
      q: "Are the lessons live or recorded?",
      a: "All lessons are 100% live 1-on-1 sessions, not pre-recorded videos."
    },
    {
      q: "How much does it cost?",
      a: "You can start with a ฿0 Free Trial lesson (1 full lesson to meet your tutor and find your level). For Thai, packages are ฿4,490 THB (8 lessons) or ฿8,880 THB (16 lessons). For English, packages are ฿3,690 THB (8 lessons) or ฿7,380 THB (16 lessons)."
    },
    {
      q: "What is included in the course?",
      a: "Live 1-on-1 tutoring, personalized lesson guidance, interactive slide decks with audio pronunciation, speaking practice, feedback, and homework review."
    },
    {
      q: "Will there be homework?",
      a: "Yes. Short, practical homework tasks are given after each lesson to help you review and practice speaking between classes."
    },
    {
      q: "What can students expect after finishing?",
      a: "Students will be able to communicate in basic daily situations, introduce themselves, ask and answer simple questions, and feel much more confident speaking."
    }
  ]
};
