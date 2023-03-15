import Image from 'next/image'
import Head from 'next/head'

import { Container } from '@/components/Container'
import tempEnclosure from '@/images/sketches/CokerMainFracNozzleEnclosureWeldingDetail.png'
import amineTower from '@/images/sketches/AmineTowerPWHTBands2.png'
import pipingIso from '@/images/sketches/PipingIsometric.png'

export default function MechEng() {
  const prevWork = [
    {
      name: 'Temporary Enclosure over Coker Main Fractionator Nozzle Leak',
      description:
        'Designed temporary repair package for a welded cap over a leaking NPS 12 nozzle weld on a Coker Main Fractionator tower, safely mitigating the leak until a permanent repair can be made in the next planned shutdown.',
      img: tempEnclosure,
    },
    {
      name: 'Amine Tower Nozzle Addition and Local PWHT Band Sizing',
      description:
        'Reviewed and approved project to install new NPS 2 nozzle on Tower. Designed local postweld heat treatment (PWHT) package to mitigate stress corrosion cracking risk from the process (amine) while maintaining integrity of the tower base metal, as well as disconnecting any connecting piping or structures that may restrict tower growth during local PWHT procedure.',
      img: amineTower,
    },
    {
      name: 'Piping Isometric Sketches',
      description:
        "Designed piping isometrics for the repair or replacement of thinning or leaking piping across the refinery's different units.",
      img: pipingIso,
    },
  ]
  return (
    <>
      <Head>
        <title>A Sample of My Previous Mechanical Engineering Work.</title>
        <meta
          name="description"
          content="Some of my previous mechanical engineering work."
        />
      </Head>
      <Container className="mt-16 sm:mt-32">
        <h1 className="mb-16 text-5xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
          A Sample of My Previous Mechanical Engineering Work.
        </h1>
        <div className="grid grid-cols-2 gap-y-16 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          {prevWork.map((item, itemIndex) => (
            <div key={item.name}>
              <div className="">
                <div className="max-w-xs px-2.5 lg:max-w-none">
                  <Image
                    src={item.img}
                    alt=""
                    sizes="(min-width: 1024px) 32rem, 20rem"
                    className=" bg-zinc-100 object-cover dark:bg-zinc-800"
                  />
                </div>
              </div>
              <div className="lg:order-first lg:row-span-2">
                <div className="mx-1 mt-3 dark:text-zinc-400">
                  <h1>{item.name}</h1>
                </div>
                <div className="mx-1 mt-3 text-zinc-600 first-line:text-base dark:text-zinc-400">
                  <p>{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </>
  )
}
