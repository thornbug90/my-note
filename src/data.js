export const types = ["React", "Interview"];

const data = [
    {
        title: "How does React work?",
        type: 0,
        content: `React creates a virtual DOM. When state changes in a component it firstly runs a "diffing" algorithm, which identifies what has changed in the virtual DOM.
            The second step is reconciliation, where it updates the DOM with the results of diff.`
    },
    {
        title: "What is React?",
        type: 0,
        content: `React is an open-source JavaScript library created by Facebook for building complex, interactive UIs in web and mobile applications. React’s core purpose is to build UI components; it is often referred to as just the “V” (View) in an “MVC” architecture.`
    },
    {
        title: "Difference between class components and functional components?",
        type: 0,
        content: `<Class Components>:
        Class-based Components uses ES6 class syntax. It can make use of the lifecycle methods.
        Class components extend from React.Component.
        In here you have to use this keyword to access the props and functions that you declare inside the class components.
        Functional Components
        Functional Components are simpler comparing to class-based functions.
        Functional Components mainly focuses on the UI of the application, not on the behavior.
        To be more precise these are basically render function in the class component.
        Functional Components can have state and mimic lifecycle events using Reach Hooks`
    },
    {
        title: "What is React?",
        type: 0,
        content: `React is an open-source JavaScript library created by Facebook for building complex, interactive UIs in web and mobile applications. React’s core purpose is to build UI components; it is often referred to as just the “V” (View) in an “MVC” architecture.`
    },
    {
        title: "Tell me about yourself",
        type: 1,
        content: `First of all, let me tell you about myself.

        I am a front-end JavaScript developer with 10 years of experience.
       
       I specialize in Web and Decentralized applications, and in addition to front-end development, I am interested in Web Design, back-end development and GraphQL.
       
        My great performances are in TypeScript, JavaScript and its libraries and such as Angular, React, Redux, Web3.js, etc.
       
       I also have strong knowledge in Data Structure & Algorithm, which always helps me build robust and high-performance applications.
       
       
       My software developer career was started when I was a university student at the California State University – Los Angeles.
       
       You know who I'm envious of? People who work in a job that has to do with their college major.
       
       When I was a sophomore, I really loved art and design and I wanted to get a job for both art and science.
       
       I was selected as one of the internships at Enplug for later frontend position. They were recruiting employees extensively due the company had been founded in 2012.
       
       So, after the graduation from the university, I started working there located in Los Angeles at a junior position and promoted as a senior developer two years later.
       
       I could have clear understandings of modern Front-end technologies and best design practices there.
       
       That was my meaningful start in the software developers’ world.
       
       Later my skills expanded amazingly, especially in MERN stack. I have built over 30 websites using this stack in 2018.
       
       Regarding the knowledge of MERN Stack, all my development in React takes place on the front-end, I have switched to writing cascading styles in CSSinJS and also migrated my know-how to the React context. In the back-end I use Node.js and Serverless technology.
       
       I think those are my proudest achievements in my life as a software developer.
       However, on Jan 2020, as if it was a challenge against my life, I had to quit the company due to the pandemic.
       At that time, I preferred working from home, but the company asked me to commute to work.
       
       
       After that, I started finding a remote job, and succeeded joining loanDepot company in Lake Forest, CA.
       I was not only frontend developer, but also a designer for data visualization and analysis as a senior full stack JavaScript developer.
       
       And it was crucial for me to see that someone was keen to use. In that case, I didn’t even care that I had been coding in these languages for ten years or even more.
       
       Because the successful result doesn't come only from the experience.
       
       Ten years’ experience of my awesome knowledge is never important for users to use their products, but the result is much more important.
       
       So, I worked as agile as possible and maintained positive and happy client relationships with 20 corporate customers.
       
       
       You know it's blockchain winter now and the company can't afford to provide me more works. That's why they asked me to find a new work.
       
       I had to stop working under the trouble of my company and it made me move into a new freelancers’ world. So now I am working as a freelancer for about 3 months.
       
       Actually, I am free now and can start a new work immediately.
       That's all.`
    },
    {
        title: "Why are you interested in this job?",
        type: 1,
        content: `Since pandemic, I would like to work for the people care. So I've worked some projects such as hospital infrastructure, working agency, crypto security and some more.
        As cryptocurrencies expanded, scams increased.
        So our company, which was a blockchain company, suffered a lot.
        I would like to prevent illegal activities such as site phishing by misleading web technologies, and I wanted to show people true web technologies.
        Luckily, finding a job, I found out that your company is working as a primary mission to ...
        This is a job I really would like to work as a software developer.
        And it's fun to work in a company where people truly believe in what they're doing!`
    },
    {
        title: "What motivates you to work at this company?",
        type: 1,
        content: "I'm really driven by results. I like it when I have a concrete goal to meet and actual roadmap to figure out a strong strategy for accomplishing it. At my last job, our yearly goals were very aggressive, but I worked with my manager and the rest of my team to figure out a month-by-month strategy for meeting the year-end numbers. It was a real thrill to accomplish that."
    },
    {
        title: "What motivates you to apply for this particular role? ",
        type: 1,
        content: "When I was a sophomore, I really loved art and design. So I wanted to get a job for both art and science. That is the frontend postion, I think. I am happy that my creations come into direct contact with people, and I feel the greatest pride when I receive the best feedback from them. I am also motivated by working as part of a team to complete tasks and projects. I gain a great sense of job satisfaction when I know I have contributed to a team's goals or objectives."
    },
];

export default data;