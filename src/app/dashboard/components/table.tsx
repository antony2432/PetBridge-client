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
import { useRouter } from 'next/navigation';
import { useAppDispatch } from '@/redux/hook';
import { setId } from '@/redux/slice/pets';
import useUserSesion from '@/hook/userSesion';
import axios from 'axios';
import { setActualize } from '@/redux/slice/pets';
import { GetByName } from '@/redux/thunk';
import { useState } from 'react';

type SelectedRows = {
  [key: string]: boolean;
};

export default function Table({ tableColumns, tableData, activeTab }: any) {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { sesion } = useUserSesion();
  const [donationsPanelState, setDonationsPanelState] = useState<{ [key: string]: boolean }>({});
  const [selectedRows, setSelectedRows] = useState<SelectedRows>({});

  const handlePanelToggle = (id: string) => {
    setDonationsPanelState((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  const handleEditData = (value: any) => {
    if (activeTab === 'animals') {
      router.push('/editPet');
      dispatch(setId(value));
    } else if (activeTab === 'asociaciones') {
      dispatch(GetByName({ id: value.id, rol: 'fundation', token: sesion?.token }));
      router.push('/profile');
    } else {
      dispatch(GetByName({ id: value.id, rol: 'users', token: sesion?.token }));
      router.push('/profile');
    }
  };

  const handleEraseData = async (value: string) => {
    try {
      const { data } = await axios.delete(`${process.env.NEXT_PUBLIC_API_BACK}/${activeTab}/${value}`, {
        headers: {
          Authorization: `Bearer ${sesion?.token}`,
        },
      });
      alert(data);
      dispatch(setActualize());
    } catch (error) {
      console.log(error);
    }
  };


  const handleCheckboxToggle = async (id: string, isChecked: boolean) => {
    try {
      await axios.patch(
        `${process.env.NEXT_PUBLIC_API_BACK}/${activeTab}/update/${id}`,
        {
          rol: isChecked ? 'admin' : 'user',
        },
        {
          headers: {
            Authorization: `Bearer ${sesion?.token}`,
            'Content-Type': 'application/json',
          },
        },
      );
    } catch (error) {
      console.log(error);
    }
  };

  const handleCheckboxChange = (id: string) => {
    setSelectedRows((prevSelectedRows) => {
      const updatedSelectedRows = {
        ...prevSelectedRows,
        [id]: !prevSelectedRows[id],
      };

      if (updatedSelectedRows[id]) {
        handleCheckboxToggle(id, true);
      } else {
        handleCheckboxToggle(id, false);
      }

      return updatedSelectedRows;
    });
  };

  return (
    <Card className="h-full w-full">
      <CardBody className="overflow-scroll px-0">
        <table className="mt-4 w-full flex-col min-w-max table-auto text-left">
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
              const allData = { id, image, firstName, lastName, email, country, phone, isActive };

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
                    {isActive &&
                      <div className="flex gap-2">
                        <Tooltip content="Edit Fundation">
                          <IconButton variant="text" color="blue-gray" onClick={() => handleEditData(allData)}>
                            <PencilIcon className="h-4 w-4" />
                          </IconButton>
                        </Tooltip>
                        <Tooltip content="Delete Fundation">
                          <IconButton variant="text" color="blue-gray" onClick={() => handleEraseData(id)}>
                            <TrashIcon className="h-4 w-4" />
                          </IconButton>
                        </Tooltip>
                      </div>
                    }
                  </td>
                  <td className={classes}>
                    {isActive && (
                      <div className="flex gap-2 items-center">
                        <input
                          type="checkbox"
                          checked={selectedRows[id]}
                          onChange={() => handleCheckboxChange(id)}
                          className="form-checkbox h-4 w-4 text-blue-500"
                        />
                      </div>
                    )}
                  </td>
                </tr>
              );
            })}

            {activeTab === 'animals' && tableData && tableData.map(({ id, as_id, asociacion, description, image, name, specie, gender, status, country, state, city }: any, index: any) => {
              const isLast = index === tableData.length - 1;
              const classes = isLast ? 'p-4' : 'p-4 border-b border-blue-gray-50';
              const allData = { id, image, name, specie, gender, status, country, state, city, as_id, description };
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
                          {asociacion?.nameOfFoundation}
                        </Typography>
                      </div>
                    </div>
                  </td>
                  <td className={classes}>
                    <div className="flex flex-col">
                      <Typography variant="small" color="blue-gray" className="font-normal">
                        {gender}
                      </Typography>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal opacity-70"
                      >
                        {specie}
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
                        value={status === 'homeless' ? 'homeless' : (status === 'pending' ? 'pending' : 'adopted')}
                        color={status === 'homeless' ? 'green' : (status === 'pending' ? 'blue' : 'blue-gray')}
                      />
                    </div>
                  </td>
                  <td className={classes}>
                    <div className="flex gap-2">
                      <Tooltip content="Edit Animal">
                        <IconButton variant="text" color="blue-gray" onClick={() => handleEditData(allData)}>
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

            {activeTab === 'asociaciones' && tableData && tableData.map(({ id, image, nameOfFoundation, email, country, phone, address, pets, isActive, donations }: any, index: any) => {
              const isLast = index === tableData.length - 1;
              const classes = isLast ? 'p-4' : 'p-4 border-b border-blue-gray-50';
              const allData = { id, image, nameOfFoundation, email, country, phone, address, isActive };

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
                    <div className="flex flex-col">
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal opacity-70"
                      >
                        {pets?.length}
                      </Typography>
                    </div>
                  </td>
                  {!donationsPanelState[id] &&
                    <>
                      <td className={classes}>
                        <div className="flex flex-col">
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal opacity-70"
                            onClick={() => handlePanelToggle(id)}
                            style={{ cursor: 'pointer' }}
                          >
                            {`$${donations?.reduce((total: number, donation: any) => total + donation.mount, 0)}`}
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
                        {isActive &&
                          <div className="flex gap-2">
                            <Tooltip content="Edit Fundation">
                              <IconButton variant="text" color="blue-gray" onClick={() => handleEditData(allData)}>
                                <PencilIcon className="h-4 w-4" />
                              </IconButton>
                            </Tooltip>
                            <Tooltip content="Delete Fundation">
                              <IconButton variant="text" color="blue-gray" onClick={() => handleEraseData(id)}>
                                <TrashIcon className="h-4 w-4" />
                              </IconButton>
                            </Tooltip>
                          </div>
                        }
                      </td>
                    </>
                  }
                  <tr className='top-0'>
                    {donationsPanelState[id] && (
                      <tr>
                        <td colSpan={tableColumns.length} className="p-4">

                          <table className="mt-4 w-full min-w-max table-auto text-left bg-white shadow-lg">
                            <thead>
                              <tr>
                                <th className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
                                  <Typography
                                    variant="small"
                                    color="blue-gray"
                                    className="font-normal leading-none opacity-70"
                                    onClick={() => handlePanelToggle(id)}
                                    style={{ cursor: 'pointer' }}
                                  >
                                    Donaciones
                                  </Typography>
                                </th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                {donations.map((donation: any, i: any) => {
                                  return (
                                    <tr key={i}>
                                      <td className={classes}>
                                        <div className="flex flex-col">
                                          <Typography
                                            variant="small"
                                            color="blue-gray"
                                            className="font-normal opacity-70"
                                          >
                                            {donation.paymentId}
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
                                            {donation.email}
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
                                            {`$${donation.mount}`}
                                          </Typography>
                                        </div>
                                      </td>
                                    </tr>
                                  );
                                })}
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                    )}
                  </tr>
                </tr>
              );
            })}
          </tbody>
        </table>
      </CardBody>
    </Card>
  );
}
