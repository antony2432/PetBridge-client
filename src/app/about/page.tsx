'use client';

import CardAbout from './card';

export default function Example() {
  const teamFront = [
    {
      name: 'Chuquival Antony',
      linkedin: 'https://www.linkedin.com/in/degregory-antony-chuquival-huallanca-7262b0181/',
      image: 'antony',
    },
    {
      name: 'Horta Maximiliano',
      linkedin: 'https://www.linkedin.com/in/maximiliano-horta/',
      image:'max',
    },
    {
      name: 'Fantini Fernando',
      linkedin: 'https://www.linkedin.com/in/fernando-fantini-440a08261/',
      image:'fer',
    },
  ];

  const teamBack = [
    {
      name: 'Zapata Axel',
      linkedin: 'https://www.linkedin.com/in/axel-zapata-56a10a241/',
      image:'axel',
    },
    {
      name: 'Behnke Leonel',
      linkedin: 'https://www.linkedin.com/in/leonelbehnkedev/',
      image:'leo',
    },
    {
      name: 'Romero Fabian',
      linkedin: 'https://www.linkedin.com/in/fabian-romero-8b9712277/',
      image:'fabi',
    },
    {
      name: 'Rocha Eloy',
      linkedin: 'https://www.linkedin.com/in/eloy-rocha-6a92901b3/',
      image:'eloy',
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
