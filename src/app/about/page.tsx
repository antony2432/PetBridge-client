'use client';

import CardAbout from './card';

export default function Example() {
  const teamFront = [
    {
      name: 'Chuquival Antony',
      linkedin: 'https://www.linkedin.com/in/degregory-antony-chuquival-huallanca-7262b0181/',
      image:
        'https://media.licdn.com/dms/image/D4E35AQEW8-QHOwxn_g/profile-framedphoto-shrink_800_800/0/1684642384777?e=1687006800&v=beta&t=AyJtm-AV8r8no82WcUn1_k4ud3JRXb1tm9L9WYMQS0s',
    },
    {
      name: 'Horta Maximiliano',
      linkedin: 'https://www.linkedin.com/in/maximiliano-horta/',
      image:
        'https://media.licdn.com/dms/image/D4D35AQG7-O6cwIXMOg/profile-framedphoto-shrink_400_400/0/1667187435938?e=1687006800&v=beta&t=3Wp1wz5E7VNZV82IIc8R-QFwvDNQxGYmj6uzFJ77aw0',
    },
    {
      name: 'Fantini Fernando',
      linkedin: 'https://www.linkedin.com/in/fernando-fantini-440a08261/',
      image:
        'https://media.licdn.com/dms/image/D4E35AQEUPSpBcfEucg/profile-framedphoto-shrink_800_800/0/1685120564337?e=1687006800&v=beta&t=l6iu5zcEE1mRnPOG0sSgiPK_JQQ-Dq9rG1JOXaS2Vbg',
    },
  ];

  const teamBack = [
    {
      name: 'Zapata Axel',
      linkedin: 'https://www.linkedin.com/in/axel-zapata-56a10a241/',
      image:
        'https://media.licdn.com/dms/image/C4E03AQEKRxFJW-G42g/profile-displayphoto-shrink_800_800/0/1662846863245?e=1691625600&v=beta&t=nDvDcZp7kWC3FrTKofRUOFg_j7BEDUA-CG5P1GGxgUE',
    },
    {
      name: 'Behnke Leonel',
      linkedin: 'https://www.linkedin.com/in/leonelbehnkedev/',
      image:
        'https://media.licdn.com/dms/image/D4D35AQEJnZ_ZVGEenw/profile-framedphoto-shrink_800_800/0/1684836117937?e=1687006800&v=beta&t=BYxTUJaRECBib20qkakQMLW4K3JUaJZslIuofUqkE7o',
    },
    {
      name: 'Romero Fabian',
      linkedin: 'https://www.linkedin.com/in/fabian-romero-8b9712277/',
      image:
        'https://media.licdn.com/dms/image/D5603AQEGrOVXV_SwFg/profile-displayphoto-shrink_800_800/0/1685032085084?e=1691625600&v=beta&t=Q_YlZlFnDvBPG75Qg2sDYR48Lna-GoPVWc--Zpdo7NQ',
    },
    {
      name: 'Rocha Eloy',
      linkedin: 'https://www.linkedin.com/in/eloy-rocha-6a92901b3/',
      image:
        'https://media.licdn.com/dms/image/D4D35AQGjocEhlEAnYQ/profile-framedphoto-shrink_800_800/0/1684722988645?e=1687010400&v=beta&t=r_XSqHNUlnF3RQVN7tdHQZBHbbO8s3wf-B4gnQGNgrQ',
    },
  ];

  return (
    <section className="flex flex-col justify-center items-center gap-10 py-12 bg-[#f9f4f1]">
      <h1 className="text-3xl font-bold text-center lg:text-5xl">
        Equipo de desarrollo de
        <span className="text-5xl text-DarkBrown-900"> Pet</span>
        <span className="text-4xl text-GoldenYellow-500">Bridge</span>
      </h1>
      <article>
        <h2 className="text-3xl text-center my-5 font-semibold">Equipo del front-End</h2>
        <div className="grid grid-col-1 lg:grid-cols-3 gap-10">
          <CardAbout team={teamFront} />
        </div>
      </article>
      <article>
        <h2 className="text-3xl text-center font-semibold my-10">Equipo del back-end</h2>

        <div className="grid grid-col-1 xl:grid-cols-4 gap-10">
          <CardAbout team={teamBack} />
        </div>
      </article>
    </section>
  );
}
