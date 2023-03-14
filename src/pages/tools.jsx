import Head from 'next/head'
import Link from 'next/link'
import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function ToolsSection({ children, ...props }) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-10">
        {children}
      </ul>
    </Section>
  )
}

function Tool({ title, href, children }) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export default function Uses() {
  return (
    <>
      <Head>
        <title>Tools - Pochi Chao</title>
        <meta name="description" content="Tools for the job." />
      </Head>
      <SimpleLayout title="Tools for the job." intro="">
        <div className="space-y-16">
          <ToolsSection title="Workstation">
            <Tool title="M1 Macbook Air with 8GB RAM, 256GB SSD">
              More than enough power for my level of development while also
              having outstanding battery life within a light chassis.
            </Tool>
            <Tool title='27" Dell IPS LED QHD Monitor for home use'>
              Big screen for big developing. I pair this with a{' '}
              <Link
                href="https://www.amazon.com/gp/product/B075JYG2TB/ref=ppx_yo_dt_b_asin_title_o09_s00?ie=UTF8&th=1"
                className="text-blue-400"
              >
                32&quot; stand-up desk converter from Amazon.
              </Link>
            </Tool>
            <Tool title='15" Asus Portable Monitor for on-the-go development'>
              <Link
                href="https://www.amazon.com/gp/product/B09MZQ978N/ref=ppx_yo_dt_b_search_asin_title?ie=UTF8&th=1"
                className="text-blue-400"
              >
                1080p portable monitor with a wide screen
              </Link>
              , handy for the long lines of TailwindCSS code. Excellent value!
            </Tool>
          </ToolsSection>
          <ToolsSection title="Development tools">
            <Tool title="VS Code with Prettier">The gold standard.</Tool>
            <Tool title="PyCharm">
              {' '}
              This is what I use for Python development since the default
              configuration is so well optimized for Python.
            </Tool>
            <Tool title="iTerm2">Simple and clean UI.</Tool>
          </ToolsSection>
          <ToolsSection title="Design">
            <Tool title="Figma">
              The whiteboarding section of the website is very handy for quick
              lo-fi wireframing and diagramming.
            </Tool>
          </ToolsSection>
          <ToolsSection title="Productivity">
            <Tool title="The Arc Browser">
              Having separate spaces for coding and productive time vs. casual
              and fun time is genuinely so useful. Being inside the productive
              space acts as a strong deterrent for clicking away onto social
              media or news websites and killing time. I feel that I must click
              away and switch spaces to avoid corrupting my productive space if
              I am to waste time, and that has seemingly small obstacle keeps me
              making the responsible decision.
            </Tool>
            <Tool title="Rocketbook Fusion">
              For when the tactile feedback of physically writing or diagramming
              problems is needed. The ability to quickly scan pages and send
              them to 7 different programmable destinations is very useful too.
            </Tool>
          </ToolsSection>
        </div>
      </SimpleLayout>
    </>
  )
}
