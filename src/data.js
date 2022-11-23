export const types = ["React", "Interview"];

const data = [
    {
        title: "How does React work?",
        type: 0,
        content: `React creates a virtual DOM. When state changes in a component it firstly runs a "diffing" algorithm, which identifies what has changed in the virtual DOM. The second step is reconciliation, where it updates the DOM with the results of diff.`
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