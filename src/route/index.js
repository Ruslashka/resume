// Підключаємо технологію express для back-end сервера
const express = require('express')
// Cтворюємо роутер - місце, куди ми підключаємо ендпоїнти
const router = express.Router()

//=================================================================

var header = {
  name: {
    firstname: 'Ruslan',
    lastname: 'Biliak',
  },
  position: 'Junior Fullstack JS Developer',
  salary: '$600 per month',
  address: 'Ukraine, Kalynivka',
}

var footer = {
  social: {
    email: {
      text: 'biliak@mail.com',
      href: 'mailto:biliak@mail.com',
    },
    phone: {
      text: '+380670000123',
      href: 'tel:+380670000123',
    },
    linkedin: {
      text: 'LinkedIn',
      href: 'https://www.linkedin.com/in/dmytro-test',
    },
  },
}

// ================================================================

// router.get Створює нам один ентпоїнт

//           ↙ тут вводимо шлях (PATH) до сторінки
router.get('/', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('index', {})
  //                  ↑↑ сюди вводимо JSON дані
})

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/summary', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('summary', {
    // ↙ сюди вводимо JSON дані

    page: {
      title: 'Resume | Summary',
      big: true,
    },

    header,

    main: {
      summary: {
        title: 'Summary',
        text: `Open-minded for new technologies, with 1 years of experience in development. Whenever I start to
        work on a new project I learn the domain and try to understand the idea of the project. Good team
        player, every colleague is a friend to me.`,
      },

      experience: {
        title: 'Other experience',
        text: `Pet project for parsing sport betting data from different platforms ( odds ) and sport statistics (
          tournament position, goals etc), analyzing by simple mathematics models and preparing probability
          for such events like: money line - first win / draw / second win, totals etc.`,
      },
    },

    footer,
  })
})

// ================================================================

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/skills', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('skills', {
    // ↙ сюди вводимо JSON дані

    page: {
      title: 'Resume | Skills',
      big: false,
    },

    header,

    main: {
      hobbies: [
        {
          name: 'Sport',
          isMain: true,
        },
        {
          name: 'Box',
          isMain: true,
        },
        {
          name: 'IT',
          isMain: false,
        },
      ],

      skills: [
        {
          name: 'HTML',
          point: 10,
          isTop: true,
        },
        {
          name: 'Handlbars',
          point: 9,
          isTop: true,
        },
        {
          name: 'VS Code & NPM',
          point: 8,
          isTop: false,
        },
        {
          name: 'Git & Terminal',
          point: 7,
        },
        {
          name: 'React.js',
          point: 0,
        },
        {
          name: 'PHP',
          point: null,
        },
      ],
    },

    footer,
  })
})

router.get('/education', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('education', {
    page: {
      title: 'Resume | Education',
      big: true,
    },

    header,

    main: {
      certificates: [
        {
          name: 'Юра',
          id: '25',
        },
        {
          name: 'Руслан',
          id: '26',
        },
        {
          name: 'Влад',
          id: '24',
        },
      ],

      educations: [
        {
          name: 'University of Illinois at Chicago',
          isEnd: true,
        },
        {
          name: 'Mercer University',
          isEnd: false,
        },
        {
          name: 'The University of Dayton',
          isEnd: false,
        },
        {
          name: 'American University',
          isEnd: true,
        },
        {
          name: 'The University of Kansas',
          isEnd: true,
        },
      ],
    },

    footer,
  })
  //                  ↑↑ сюди вводимо JSON дані
})

//=====================================================

router.get('/work', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('work', {
    layout: 'big',

    page: {
      title: 'Resume | Work',
      big: true,
    },

    header,

    main: {
      works: [
        {
          position: 'Junior Fullstack Developer',
          company: {
            name: 'IT Brains',
            url: 'https://it-brains.com.ua/',
          },
          duration: {
            from: '10.10.2022',
            to: null,
          },
          projectAmount: 3,

          projects: [
            {
              stackAmount: '23',
              awardAmount: '32',
            },
            {
              name: 'Resume',
              url: 'https://resume.com.ua/',
              about: `Airbnb competitor. High application for searching apartments`,
              stacks: [
                {
                  name: 'React.js',
                },
                {
                  name: 'HTML/CSS',
                },
                {
                  name: 'Node.js',
                },
              ],
              awards: [
                {
                  name: 'Module._extensions. Module._extensions. Module._extensions. Module._extensions.',
                },
                {
                  name: 'at Object.<anonymous> (C:UsersUserDesktopwork\resume-petapp.js:36:39)',
                },
              ],
            },
          ],
        },
      ],
    },

    footer,
  })
  //                  ↑↑ сюди вводимо JSON дані
})
// Підключаємо роутер до бек-енду
module.exports = router
