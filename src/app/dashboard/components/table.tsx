'use client';
import { TrashIcon } from '@heroicons/react/24/solid';
import {
  Card,
  Typography,
  CardBody,
  Chip,
  Avatar,
  IconButton,
  Tooltip,
} from '@material-tailwind/react';
import { PencilIcon } from '@heroicons/react/24/outline';

export default function Table({ tableColumns, tableData, activeTab }: any) {

  const handleEditData = (value: string) => {
    console.log(value);
  };

  const handleEraseData = (value: string) => {
    console.log(value);
  };

  return (
    <Card className="h-full w-full">
      <CardBody className="overflow-scroll px-0">
        <table className="mt-4 w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              {tableColumns.map((head: any) => (
                <th key={head} className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal leading-none opacity-70"
                  >
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {activeTab === 'users' && tableData && tableData.map(({ id, image, firstName, lastName, email, country, phone, isActive }: any, index: any) => {
              const isLast = index === tableData.length - 1;
              const classes = isLast ? 'p-4' : 'p-4 border-b border-blue-gray-50';

              return (
                <tr key={id}>
                  <td className={classes}>
                    <div className="flex items-center gap-3">
                      <Avatar src={image} alt={firstName} size="sm" />
                      <div className="flex flex-col">
                        <Typography variant="small" color="blue-gray" className="font-normal">
                          {`${firstName} ${lastName}`}
                        </Typography>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal opacity-70"
                        >
                          {email}
                        </Typography>
                      </div>
                    </div>
                  </td>
                  <td className={classes}>
                    <div className="flex flex-col">
                      <Typography variant="small" color="blue-gray" className="font-normal">
                        {country}
                      </Typography>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal opacity-70"
                      >
                        {phone}
                      </Typography>
                    </div>
                  </td>
                  <td className={classes}>
                    <div className="w-max">
                      <Chip
                        variant="ghost"
                        size="sm"
                        value={isActive ? 'activo' : 'eliminado'}
                        color={isActive ? 'green' : 'blue-gray'}
                      />
                    </div>
                  </td>
                  <td className={classes}>
                  <div className="flex gap-2" >
                    <Tooltip content="Edit User" >
                      <IconButton variant="text" color="blue-gray" onClick={() => handleEditData(id)}>
                        <PencilIcon className="h-4 w-4" />
                      </IconButton>
                    </Tooltip>
                    <Tooltip content="Delete User">
                      <IconButton variant="text" color="blue-gray" onClick={() => handleEraseData(id)}>
                        <TrashIcon className="h-4 w-4" />
                      </IconButton>
                    </Tooltip>
                  </div>
                  </td>
                </tr>
              );
            })}

            {activeTab === 'animals' && tableData && tableData.map(({ id, image, name, specie, gender, status, country, state, city }: any, index: any) => {
              const isLast = index === tableData.length - 1;
              const classes = isLast ? 'p-4' : 'p-4 border-b border-blue-gray-50';

              return (
                <tr key={id}>
                  <td className={classes}>
                    <div className="flex items-center gap-3">
                      <Avatar src={image[0]} alt={name} size="sm" />
                      <div className="flex flex-col">
                        <Typography variant="small" color="blue-gray" className="font-normal">
                          {name}
                        </Typography>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal opacity-70"
                        >
                          {specie}
                        </Typography>
                      </div>
                    </div>
                  </td>
                  <td className={classes}>
                    <div className="flex flex-col">
                      <Typography variant="small" color="blue-gray" className="font-normal">
                        {gender}
                      </Typography>
                    </div>
                  </td>
                  <td className={classes}>
                    <div className="flex flex-col">
                      <Typography variant="small" color="blue-gray" className="font-normal">
                        {country}
                      </Typography>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal opacity-70"
                      >
                        {state}
                      </Typography>
                    </div>
                  </td>
                  <td className={classes}>
                    <div className="flex flex-col">
                      <Typography variant="small" color="blue-gray" className="font-normal">
                        {city}
                      </Typography>
                    </div>
                  </td>
                  <td className={classes}>
                    <div className="w-max">
                      <Chip
                        variant="ghost"
                        size="sm"
                        value={status === 'homeless' ? 'homeless' : ( status === 'pending' ? 'pending' : 'adopted') }
                        color={status === 'homeless' ? 'green' : ( status === 'pending' ? 'blue' : 'blue-gray')}
                      />
                    </div>
                  </td>
                  <td className={classes}>
                  <div className="flex gap-2">
                    <Tooltip content="Edit Animal">
                      <IconButton variant="text" color="blue-gray" onClick={() => handleEditData(id)}>
                        <PencilIcon className="h-4 w-4" />
                      </IconButton>
                    </Tooltip>
                    <Tooltip content="Delete Animal">
                      <IconButton variant="text" color="blue-gray" onClick={() => handleEraseData(id)}>
                        <TrashIcon className="h-4 w-4" />
                      </IconButton>
                    </Tooltip>
                  </div>
                  </td>
                </tr>
              );
            })}

            {activeTab === 'asociaciones' && tableData && tableData.map(({ id, image, nameOfFoundation, email, country, phone, address, isActive }: any, index: any) => {
              const isLast = index === tableData.length - 1;
              const classes = isLast ? 'p-4' : 'p-4 border-b border-blue-gray-50';

              return (
                <tr key={id}>
                  <td className={classes}>
                    <div className="flex items-center gap-3">
                      <Avatar src={image} alt={nameOfFoundation} size="sm" />
                      <div className="flex flex-col">
                        <Typography variant="small" color="blue-gray" className="font-normal">
                          {nameOfFoundation}
                        </Typography>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal opacity-70"
                        >
                          {email}
                        </Typography>
                      </div>
                    </div>
                  </td>
                  <td className={classes}>
                    <div className="flex flex-col">
                      <Typography variant="small" color="blue-gray" className="font-normal">
                        {country}
                      </Typography>
                      <Typography variant="small" color="blue-gray" className="font-normal">
                        {address}
                      </Typography>
                    </div>
                  </td>
                  <td className={classes}>
                    <div className="flex flex-col">
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal opacity-70"
                      >
                        {phone}
                      </Typography>
                    </div>
                  </td>
                  <td className={classes}>
                    <div className="w-max">
                      <Chip
                        variant="ghost"
                        size="sm"
                        value={isActive ? 'activo' : 'eliminado'}
                        color={isActive ? 'green' : 'blue-gray'}
                      />
                    </div>
                  </td>
                  <td className={classes}>
                  <div className="flex gap-2">
                    <Tooltip content="Edit Fundation">
                      <IconButton variant="text" color="blue-gray" onClick={() => handleEditData(id)}>
                        <PencilIcon className="h-4 w-4" />
                      </IconButton>
                    </Tooltip>
                    <Tooltip content="Delete Fundation">
                      <IconButton variant="text" color="blue-gray" onClick={() => handleEraseData(id)}>
                        <TrashIcon className="h-4 w-4" />
                      </IconButton>
                    </Tooltip>
                  </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </CardBody>
    </Card>
  );
}
