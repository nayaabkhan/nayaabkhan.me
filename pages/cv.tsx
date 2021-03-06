import * as React from 'react'
import Head from 'next/head'
import Container from '../src/components/Container'
import useInterval from '../src/hooks/useInterval'

export default function CV() {
  const [hour, setHour] = React.useState('')
  const [minute, setMinute] = React.useState('')

  useInterval(() => {
    const istTime = new Date().toLocaleString('en-US', {
      timeZone: 'Asia/Kolkata',
    })

    const printableTime = new Date(istTime).toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
    })

    const [hourPart, minPart] = printableTime.split(':')

    setHour(hourPart)
    setMinute(minPart)
  }, 1000)

  return (
    <Container className="py-5">
      <Head>
        <title>CV | Nayaab Khan</title>
      </Head>
      <header>
        <h1 className="text-4xl">Nayaab Khan</h1>
        <h2>Senior Front-end Developer and UI Designer</h2>

        <p>
          I’m a rare combination of a programmer and designer specializing in
          front-end programming and UI design. I’m from the colorful country of
          India. Here’s my work journey.
        </p>
      </header>

      <main className="post">
        <h3 id="skills">
          <a
            className="text-black transition-colors hover:text-primary-500"
            href="#skills"
          >
            Skills
          </a>
        </h3>
        <p>
          I am skilled in many trades, but I stick to the following.{' '}
          <strong>
            Most of these are self-taught, fully powered by passion
          </strong>
          .
        </p>

        <ul>
          <li>UI &amp; UX design</li>
          <li>Front-end Programming</li>
          <li>Identity design</li>
          <li>Visual branding</li>
          <li>Print design</li>
          <li>Style-guide design</li>
          <li>Project management</li>
          <li>Team leading and building</li>
        </ul>

        <h3 id="experience">
          <a
            className="text-black transition-colors hover:text-primary-500"
            href="#experience"
          >
            Experience
          </a>
        </h3>
        <h4 className="flex justify-between text-2xl mb-1" id="sos">
          <a
            className="text-black transition-colors hover:text-primary-500"
            href="#sos"
          >
            StarOfService.com, France
          </a>
          <small className="font-normal text-xs text-gray-500 keep-all inline-block self-start mt-3">
            (2014—present)
          </small>
        </h4>
        <em>Full Stack Programmer, Designer, Front-end Lead, Process Master</em>

        <p>
          Joined as the only developer in the company responsible for developing
          the early-life features of the company. In 2015, I took on the
          responsibility of design and managing the I18n team. Starting in 2016,
          I lead all the developers.
        </p>

        <ul>
          <li>
            Built features from start to finish–design, back-end, and front-end.
          </li>
          <li>
            Solely responsible for full implementation without much oversight.
          </li>
          <li>Provide design and UX inputs to the new design team.</li>
          <li>Built a group of autonomous programmers.</li>
          <li>
            Set “Shape Up” as the new shipping process. Facilitate the migration
            to this new process.
          </li>
          <li>
            Evangelize and help migrate the projects from JIRA to Basecamp.
          </li>
          <li>
            Set up a design system to harmonize the UI components and have them
            as living documentation.
          </li>
        </ul>

        <h4 className="flex justify-between text-2xl mb-1" id="fireworksllc">
          <a
            className="text-black transition-colors hover:text-primary-500"
            href="#fireworksllc"
          >
            Fireworks LLC
          </a>
          <small className="font-normal text-xs text-gray-500 keep-all inline-block self-start mt-3">
            (2013—2014)
          </small>
        </h4>
        <em>Logo Design, Graphic Design, UI Design, Web Development</em>

        <p>
          Worked on varied design projects for several small businesses.
          Designed websites, logos, product labels, packaging, and marketing
          material.
        </p>

        <ul>
          <li>
            Designed the trademark and website of a Texas-based{' '}
            <a href="https://fridgeresendez.net/">law firm</a>.
          </li>
          <li>
            Designed packaging labels and marketing design for the full cleaning
            range of <a href="https://www.ecoroq.com/">Ecoroq</a>.
          </li>
          <li>
            Designed the logo for{' '}
            <a href="https://twitter.com/timmykolczak?lang=en">Tim Kolczak's</a>{' '}
            Photography Company.
          </li>
        </ul>

        <h4 className="flex justify-between text-2xl mb-1" id="tcs">
          <a
            className="text-black transition-colors hover:text-primary-500"
            href="#tcs"
          >
            Tata Consultancy Services
          </a>
          <small className="font-normal text-xs text-gray-500 keep-all inline-block self-start mt-3">
            (2012—2013)
          </small>
        </h4>
        <em>Data Stage, Unix Developer</em>

        <p>
          I worked as a developer for the Triple’ A portfolio management tool at
          ABN-Amro Bank, Netherlands. Responsibilities included developing new
          features for the Triple’ A application, which involved mainly Shell
          scripting and IBM Data-stage maps.
        </p>

        <ul>
          <li>
            I was the youngest member of the team ever to be nominated for
            cross-cultural training.
          </li>
          <li>
            I shipped a feature that resulted in significant savings on
            infrastructure for the client.
          </li>
        </ul>

        <h4 className="flex justify-between text-2xl mb-1" id="techMavins">
          <a
            className="text-black transition-colors hover:text-primary-500"
            href="#techMavins"
          >
            techMavins
          </a>
          <small className="font-normal text-xs text-gray-500 keep-all inline-block self-start mt-3">
            (2009—2011)
          </small>
        </h4>
        <em>Web Design and Development</em>

        <p>I worked on several projects, from design to deployment.</p>

        <ul>
          <li>
            Created a social networking portal for NGOs called WeWantGreen.
          </li>
          <li>
            An online shopping portal for a flower store in the US with PayPal
            integration.
          </li>
          <li>
            An automated SMS alert system for the truckers’ freight pickup.
          </li>
        </ul>

        <h3 id="education">
          <a
            className="text-black transition-colors hover:text-primary-500"
            href="#education"
          >
            Education
          </a>
        </h3>
        <h4 className="flex justify-between text-2xl mb-1">
          Bachelors of Computer Engineering
          <small className="font-normal text-xs text-gray-500 keep-all inline-block self-start mt-3">
            (2009—2012)
          </small>
        </h4>
        <em>Gujarat Technological University.</em>

        <h4 className="flex justify-between text-2xl mb-1">
          Diploma in Computer Engineering
          <small className="font-normal text-xs text-gray-500 keep-all inline-block self-start mt-3">
            (2006—2009)
          </small>
        </h4>
        <em>Technical Education Board.</em>

        <h3 id="hobbies">
          <a
            className="text-black transition-colors hover:text-primary-500"
            href="#hobbies"
          >
            Hobbies
          </a>
        </h3>
        <ul>
          <li>
            Building electronic projects on a perfboard while{' '}
            <a href="https://imgur.com/a/I7SBsSa">
              obsessing over a clean soldering job
            </a>
            .
          </li>
          <li>Tearing apart gadgets to understand and tweak them.</li>
          <li>Being the weekend handyman at home.</li>
          <li>
            Playing games with a good story. My favorite so far is{' '}
            <strong>Spec Ops: The Line</strong>.
          </li>
        </ul>

        <h3 id="values">
          <a
            className="text-black transition-colors hover:text-primary-500"
            href="#values"
          >
            My Values
          </a>
        </h3>
        <ul>
          <li title="From ‘12 Rules for Life’ by Jordan Peterson">
            Tell the truth—or, at least, don’t lie.
          </li>
          <li>Listen with the intent to understand.</li>
          <li>Do work that makes you happy and do it well.</li>
        </ul>
      </main>

      <footer>
        <h4>
          Contact Information{' '}
          <small>
            (It’s{' '}
            <a href="https://time.is/Vadodara" className="tabular-nums">
              <span>{hour}</span>
              <span style={{ animation: 'blinker 2s step-start infinite' }}>
                :
              </span>
              <span>{minute}</span>
            </a>{' '}
            for me)
          </small>
        </h4>
        <div>
          <div>
            <strong>Phone:&nbsp;</strong>{' '}
            <a href="tel:+918511367421">+91 8511 367 421</a>
          </div>
          <div>
            <strong>Email:&nbsp;</strong>{' '}
            <a href="mailto:nayaab@hey.com">nayaab@hey.com</a>
          </div>
        </div>
      </footer>
    </Container>
  )
}
