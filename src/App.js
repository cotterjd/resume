import Project from './components/Project'
import W2Project from './components/W2Project'
import styled from 'styled-components'
import './App.css'
import githubIcon from './images/github.png'

export const A = styled.a`
  :link {
    color: #008080;
  }
  :visited {
    color: #008080;
  }
  :hover {
    color: blue;
  }
`
const P = styled.p``
const Education = styled.table`
  td {
    padding: 10px 10px 10px 0;
  }
`
const SubHeader = styled.div`
  display: flex;
  justify-content: space-around;
`
const Page = styled.div`
  font-size: calc(10px + 1.3vmin);
  color: white;
  max-width: 1200px;
  margin: auto;
  padding: 50px 0 200px 0;
`
const Name = styled.span`
  font-size: 1.5em;
`
const Header = styled.div`
  display: flex;
  justify-content: center;
`
const SectionHeading = styled.div`
  font-weight: bold;
  padding: 20px 0 10px 0;
`
const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
  td {
    border: 1px solid white;
  }
`
const JobHeading = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 50px;
  span {
    font-weight: bold;
    font-style: italic;
  }
`
const ProjectHead = styled.div`
  padding: 15px 0;
`
const GithubIcon = styled.a`
  transform: translateY(10px);
`

function App() {
  return (
    <Page>
      <Header>
        <Name>Jordan Cotter</Name>
        &nbsp;
        <GithubIcon href="https://github.com/cotterjd"><img src={githubIcon} alt="github icon"/></GithubIcon>
      </Header>
      <SubHeader>
        <span>cotterjd@yahoo.com</span>
        <span>405 738 5435</span>
      </SubHeader>
      <SectionHeading>Technical Skills:</SectionHeading>
      <Table>
        <tr>
          <td>JavaScript (7+ yrs)</td>
          <td>Node.js (6+ yrs)</td>
          <td>GraphQL/REST (3+ yrs)</td>
          <td>React (2+ yrs)</td>
          <td>TypeScript (1+ yr)</td>
        </tr>
        <tr>
          <td>Agile Methodology</td>
          <td>SQL/NoSQL</td>
          <td>CSS/SASS</td>
          <td>OOP/FP</td>
          <td>VueJS</td>
        </tr>
      </Table>
      <SectionHeading>Employment History:</SectionHeading>
      <div class="job-details">
        <JobHeading>
          <span>2019 - 2020</span>
          <span>WPA Intelligence</span>
          <span>Software Developer</span>
          <span>Edmond, OK</span>
        </JobHeading>
        <P>
          Worked on-site and remotely on a team of three building SPAs for political and public affairs campaigns
        </P>
        <ProjectHead>Major Projects:</ProjectHead>
        <Project 
          url="https://www.bonfiredata.com/"
          name="Bonfire"
          desc="Bonfire is an SPA that displays data and handles complex searches for millions of records of voter data."
          stack="Node.js, Express, TypeScript, GraphQL, Apollo Server, Apollo Client, CSS, MSSQL, Sequelize, VueJS, Quasar, Pug, Ramda/Lodash, MongoDB, Mongoose, Datadog, PM2"
          list={[
            "Built entire Node.js/GraphQL/TypeScript backend from scratch. No boilerplates, no frameworks",
            "Built roughly half of frontend",
            "Optomized csv upload and data export to efficiently upload and export hundreds of thousands of records",
          ]}
        />
      </div>
      <div class="job-details">
        <JobHeading>
          <span>2016 - 2019</span>
          <span>Consultant</span>
          <span>OKC/Weatherford, OK</span>
        </JobHeading>
        <P>
          Worked on-site and remotely autonomously and independently creating web apps/services for clients.
        </P>
        <ProjectHead>Major Projects:</ProjectHead>
        <Project 
          url="https://www.dynos.io/"
          name="Dynos.io"
          desc="Dynos.io is an SPA that gives educators tools to create dynamic content and assignments for thier students. I was the main developer working remotely on a distributed team. Although, I started full-stack, I spent the vast majority of the time on the frontend coding in React."
          stack="vanilla JavaScript, PostgreSQL, GraphQL, AWS, React, Redux, AngularJS, Node.js, Express, CSS3, s3, Auth0, HTML, Heroku, Azure DevOps, MongoDB, Ramda, Webpack, Babel, MaterialUI, Redux-Saga"
          list={[
            "Build RESTful API using Node.js, Express, and MongoDB",
            "Configured CI/CD with Azure and added Slack integration with BASH",
            "Implemented mocks with CSS, styled components, and JSX",
            "Built automated grading system",
            "Set up passwordless login with Auth0",
            "Made sure several frontend apps on different sub-domains worked nicely together",
          ]}
        />
        <Project
          name="Scolasticus"
          url="http://scolasticus.com/"
          desc="Worked on-site and remotely on a team of two creating a web app with continous deployment that made applying to multiple universities at once quick and easy"
          stack="Node.js, Express, MySQL, Sequalize, GraphQL, VueJS, Highcharts, Elm, joi, Passport, VueMaterial"
          list={[
            "Optimized dashboard that included several robust calculations to run efficiently",
            "Wrote nearly 24,000 lines of Vue code an nearly 40 components building dynamic and interactive UIs",
          ]}
        />
        <Project
          name="Hoegg Software"
          stack="vanilla JavaScript, Node.js, Express, SASS, Docker, AWS CLI, jQuery, nunjucks, HTML, Digital Ocean, Terraform, Nginx, Concourse, BASH, SSH"
          list={[
            "Implemented full site redesign using SASS",
            "Set up CI with BASH, Docker, and AWS CLI",
            "Added blog and contact form to company website",
          ]}
        />
        <Project
          name="ASAP Energy"
          stack="Wordpress, PHP, HTML, BASH, SSH, Excel, VBA, VBScript, exceljs, PhantomJS, Ramda, CRON"
          list={[
            "Improved website by adding features and responsiveness using PHP and HTML",
            "Saved labor costs and improved business decisions by building and automating daily reports",
          ]}
        />
      </div>
      <div class="job-details">
        <JobHeading>
          <span>2016</span>
          <span>Flogistix</span>
          <span>Web Developer</span>
          <span>Oklahoma City, OK</span>
        </JobHeading>
        <P>
          Hired as a frontend developer, but did a diverse set of tasks on a team of just a few devs on-site and remotely. Worked with Node.js, AngularJS, MySQL, AWS Lamba, Highcharts, Geckoboard, Jade, jQuery, CSS, Bootstrap, 0Auth, ES6, and Ramda
        </P>
        <ProjectHead>Major Projects:</ProjectHead>
        <W2Project
          name="Flux"
          desc="is a dynamic web app that tracks the performance and maintenance of Flogistix units."
          list={[
            "Created password set and reset with 0Auth",
            "Improved responsiveness using Twitter Bootstrap",
            "Other various bug fixes and improvements",
          ]}
        />
        <W2Project
          name="lamda-dashboard-widgets"
          desc="is a project of lambda functions that push data to Geckoboard widgets. These widgets show financial and operational data for the company in a user-friendly way."
          list={[
            "Made about a dozen widgets for about a dozen areas. Data was displayed in various ways including pie charts, bar charts, line charts, or just text"
          ]}
        />
        <W2Project
          name="lamda-flux-analytics"
          desc="is a project that improved user tracking for Flux."
          list={[
            "Sent UserId to Google Analytics to identify users",
            "Used Google API to retrieve analytic information and save it to MySQL database",
          ]}
        />
        <W2Project
          name="lamda-releaseestimate-report"
          desc="is a report that estimated the lifespans of operational units."
          list={[
            "Used previous lifespans from units of the same area and type to estimate future release dates and display predictions in a stacked bar chart",
            "Was told to use the average of previous lifespans to estimate current lifespans, but went ahead added median, mode, and linear regression as optional alternatives. I added these alternatives on my own time, and convinced management to use linear regression",
          ]}
        />
      </div>
      <div class="job-details">
        <JobHeading>
          <span>2013 - 2016</span>
          <span>Nine Collective</span>
          <span>Software Developer</span>
          <span>Weatherford, OK</span>
        </JobHeading>
        <P>
          Started out in C#.NET and then later moved to full-stack JavaScript. Worked on a team of ten to fifteen devs in an agile development environment designing, developing, and supporting robust web apps including SPAs using a range of technologies
        </P>
        <ProjectHead>Major Projects:</ProjectHead>
        <W2Project
          name="Fieldbook ERP"
          desc="is a robust dynamic web application for operations and accounting of oil service companies that’s hosted by AWS."
          list={[
            "While working on Fieldbook I gained experience in C#.NET, Razor web forms, AJAX, JSON, jQuery, Node.js, MS Sql Server, unit testing, Nhibernate, and FubuMVC",
            "Learning basic accounting to develop accounting featues", 
            "Major contributions included building payroll, ticket fields, SqlQueryBuilder, and the approval system",
            "Quickly picked up Node.js while porting the API from C#",
          ]}
        />
        <W2Project
          name="FieldSavvy"
          desc="is an SPA for communicating in the oil service industry built for mobile using Phonegap, AngularJS, Node.js, and MySQL. Using Git for version control."
          list={[
            "Quickly learned and used AngularJS and Mobile Angular UI",
            "Designed and implemented the testing framework and convention",
          ]}
        />
        <W2Project
          name="Notafi"
          desc="is a SPA that connected student athletes with college recruiters. Built with AngularJS, Node.js, and MySQL. Project included lots of webscraping with Cheerio. Used Git for version control."
        />
      </div>
      <SectionHeading>Misc. Projects:</SectionHeading>
      <div>
        <i>Human Genome Project</i> - Worked under Dr. Mark Pauley to create dynamic web pages displaying statistical information on the human genome using python and PostgreSql. 
      </div>
      &nbsp;
      <div>
        <i>Search for Atlantis</i> - I worked with a team of four to build this game in an 18-hour hackathon using the 3D game engine jMonkey. I was mainly responsible for the AI of the fish. The game won first place in the competition.
      </div>
      (see github.com/cotterjd for more projects not listed here)
      <SectionHeading>Education:</SectionHeading>
      <Education>
        <tr>
          <td>May 2013</td>  
          <td>B.S. in Computer Science (cum laude)</td>       
          <td>Southwestern Oklahoma State University</td>
        </tr>
        <tr>
          <td>May 2013</td>  
          <td>B.S, in Mathematics (cum laude)</td>                
          <td>Southwestern Oklahoma State University</td>
        </tr>
        <tr>
          <td>May 2009</td>  
          <td>Associates of Arts</td>      
          <td>Southwestern Christian University</td>
        </tr>
      </Education>
    </Page>
  );
}

export default App;
