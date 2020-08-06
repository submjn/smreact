import { COMPANY } from '../modules/enums'

export const timelineData = [
    {
        id: 1,
        timeframe: {
            start: 'Nov 2018',
            end: 'Present'
        },
        company: COMPANY.SABRE,
        link: "https://www.sabresystems.com/",
        position: 'Senior Software Developer',
        location: 'Remote (Charlottesville, Virginia)',
        description: 'Sabre systems is an innovative, premiere provider of integrated solutions that address clients\' most complex mission challenges with the highest level of professional excellence and business integrity.',
        highlights: "Angular, RxJs, NGXS, PdfMake, JsPDF, NgBootstrap, Nebular, Vue/Vuex, Flexbox, Ag-Grid, Lodash, ES6, SCSS, JSON, JAVA, JAX-RS, Elastic Search, Kibana, Virtual Desktop Interface, Visual Studio Code",
        responsibilities: [
          "Developed in-house Risk Assessment Tool using Angular 8/Typescript, RxJs, NGXS (State Management), Firebase Console for authentication, state management and cloud storage.",
          "Build from Scratch – an internal Search POC project, using JAVA(JAX-RS), Elastic Search and VueJS/Vuex as frontend.",
          "Developed MDAT project using Vue CLI3 javascript framework, Vuex for state management and webpack as moduler bundler.",
          "Used Ag-Grid for displaying large Census data, and vuetify theme package for semantic development of VueJS project.",
          "Used promises for REST calls, and received JSON data and worked with it to display on presentation layer.",
          "Collaborated with much larger team of teams joined by multiple government sub-contracting companies, each working on different modules of the same product. Collaborated with internal team members and ex-ternal teams.",
          "Used git submodules to manage multiple modules and used GitLab as repository, NPM/Yarn as package management tool. GitLab CI is used for Continuous Integration. In addition, for backend REST API de-velopment JAVA Spring. Used TDD Approach and JEST is used for testing framework.",
          "Worked on backend APIs written in JAVA and Elastic Search to resolve some of the defects on Census Geography Data. Used Kibana tool to query and analyze data on elastic search cluster."
        ]
    },
    {
        id: 2,
        timeframe: {
            start: 'March 2018',
            end: 'November 2018'
        },
        company: COMPANY.UPDATER,
        position: 'Senior Frontend Engineer',
        link: "http://www.updater.com/",
        location: 'Charlottesville, Virginia',
        description: 'Updater is a technology company that builds powerful tools to help people move. Updater\'s digital tools help people find and reserve trustworthy moving companies, connect home services, forward their mail, transfer utilities, update accounts, and much more – all in one easy-to-use platform.',
        highlights: "FlexboxGrid, SASS, JSON, Vue, Vuex, Vue-Router, React, Redux, Node, Koa, GraphQL, Sequelize ORM, AWS Stack, Cypress, Mocha, Jest, Chai",
        responsibilities: [
            "Developed modular components in VueJS with Webpack, VUEX and CSS Modules (SASS). Used Custom Web component registration and vue-router/react-router for loading multiple views.",
            "Extensively used promises, async/await and fetch commands and received JSON data and worked with it to display on presentation layer.",
            "Thoroughly utilized agile methodology within teams internally and colloborated with designers, product owners and other senior developers to develop web, mobile and single page applications and third-party API integrations.",
            "Used Lerna as a dependency management tool to manage multiple projects and NPM/Yarn as package management tool. CircleCI is used for Continous Integration. And for backend REST API development Nodejs, Koa (Express), Sequelize ORM, GraphQL, MySQL Database is used and AWS Stack is used for depoloyment.",
            "Used Browserstack for cross-browser testing (IE11 specific issue fixes).",
            "Used TDD Approach and Cypress is used for frontend esting and Mocha and Chai, Sinon is used for backend testing framework.",
            "Designed applications that execute on various browsers such as Internet Explorer, Mozilla Firefox, Google Chrome and Opera using various debugging tools like Chrome/Firebugs/IE Developer Tools and for Vue - Vue developer tools and react - react developer tools are used."
        ]
    },
    {
        id: 3,
        timeframe: {
            start: 'October 2015',
            end: 'March 2018'
        },
        company: COMPANY.DMI,
        link: "https://dminc.com/",
        position: 'Senior Frontend Developer',
        location: 'Remote (Charlottesville, Virginia)',
        description: 'DMI is a global, end-to-end mobility company that offers a variety of solutions including Mobility Strategy, Brand Marketing, UX, Web & App Development, Omnichannel Commerce, Big Data Insights, Managed Mobility Services, Cybersecurity Solutions and Infrastructure Services.',
        highlights: "Bootstrap, SASS/LESS, JSON, Angular 1.6x, 2, React, Vue, Java Stack, Drupal 7/8, Mocha",
        responsibilities: [
            "Responsible for frontend builds in Angularjs, ReactJs and bootstrap. Tasked with migrating all existing apps built in Angular 1.5 to version 2.0 and created SPA with loading multiple views using route services.",
            "Developed reusable UI Components, delivered quality code and product features on time.",
            "Built UI Architecture Framework, enhanced performance, maintainability and integrity using task runners Gulp, Grunt and later Webpack.",
            "Brought new and current technologies into the project so that it is up-to-date with the current web trends.",
            "Integrated usability and accessibility as much as possible into the product.",
            "Developed Headless Drupal 8 Web application. Responsible for LAMP Server Adminstration, SSL Certification installation, custom modules (SSO, Siteminder) and theme development and building angularjs widgets and integrate with CMS and Continuous integration workflows via Features and custom modules."
        ]
    },
    {
        id: 4,
        timeframe: {
            start: 'September 2010',
            end: 'October 2015'
        },
        company: COMPANY.SILVERCHAIR,
        link: "https://www.silverchair.com/",
        position: 'UI Developer',
        location: 'Charlottesville, Virginia',
        description: 'Silverchair designs and develops semantic technologies, publishing platforms, and e-learning solutions to scientific, technical and medical publishers, academic medical centers, professional societies, and the federal government in the United States.',
        highlights: "Bootstrap/Foundation, SASS/LESS, JSON, Angular 1.6x, C# .NET Stack, Wordpress, Custom Content Management System",
        responsibilities: [
            "Developed UI Framework for Journal Platform using latest web frameworks and standards and conceptualized new way of Microsite Branding. Basic components are Zurb Foundation, SASS, Semantic HTML5, Custom Javascript compnents using JQuery, XSLT Framework for content transform.",
            "Responsible for developing Responsive Front-End User Interface: Layout, Navigation, Interaction Flow and UI features. Wrote code to fetch data from Web Services created on C#.Net and Razor, using JQuery AJAX via JSON response and updating the HTML pages.",
            "Implementation of multiple design Layouts with various color themes through LESS/SASS and Bootstrap/Foundation or Custom Build Frameworks.",
            "Developed cross-browser and accessible pages. Worked on localization for supporting Spanish Content.",
            "Closely worked with Designers and Backend developers, refining and iterating user experience and implementing new modules and interfaces. Involved in the requirement analysis along with the estimations and scheduling. Most of the projects handled solely or lead group of UI Developers."
        ]
    },
    {
      id: 5,
      timeframe: {
          start: 'October 2009',
          end: 'September 2010'
      },
      company: COMPANY.ENVIRO,
      link: "http://www.enviroapps.com/",
      position: 'UI Developer',
      location: 'Orlando, Florida',
      description: 'EnviroApps bring solutions to modern challenges using environment friendly technologies empowered by human imagination and care for the future generation. Their process of engineering development and deployment follow the GISTS (Green Infra Structure Technology Solutions) architecture to be eco-efficient and help transforming our engineers’ imaginative ideas in to products and solutions.'
  },
]