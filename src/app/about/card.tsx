'use client';
import { Card, CardHeader, CardBody, Typography } from '@material-tailwind/react';
import Image from 'next/image';
import Link from 'next/link';
import { CardAboutProps } from './interfaces/CardAboutProps.interface';

export default function CardAbout({ team }: CardAboutProps) {
  
  return (
    <>
      {team.map((t, i) => (
        <Card className="w-72" key={i}>
          <CardHeader floated={false} className=" h-64 rounded-full">
            <Image
              src={`/img/team/${t.image}.jpg`}
              alt={t.name}
              width={200}
              height={200}
              className="rounded-full h-full w-full"
            />
          </CardHeader>
          <CardBody className="text-center">
            <Typography variant="h4" color="blue-gray" className="mb-2">
              {t.name}
            </Typography>
            <Typography
              color="blue"
              className="font-medium flex justify-center items-center"
              textGradient
            >
              <Link href={t.linkedin}>
                <Image
                  src="https://1000marcas.net/wp-content/uploads/2020/01/Logo-Linkedin.png"
                  width={100}
                  height={100}
                  alt="linkedin"
                  className="w-24 hover:w-28 py-2 hover:p-0"
                />
              </Link>
            </Typography>
          </CardBody>
        </Card>
      ))}
    </>
  );
}
