'use client';
import { useEffect, useState } from 'react';
import Table from './components/table';
import {
  CardHeader,
  Input,
  Typography,
  Button,
  Tabs,
  TabsHeader,
  Tab,
  CardFooter,
} from '@material-tailwind/react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import axios from 'axios';
import useUserSesion from '@/hook/userSesion';
import { useAppDispatch, useAppSelector } from '@/redux/hook';
import { setActualize } from '@/redux/slice/pets';

const TABS = [
  {
    label: 'Users',
    value: 'users',
    columns: ['Usuario', 'Contacto', 'Estado', 'Editar', 'Admin'],
  },
  {
    label: 'Animals',
    value: 'animals',
    columns: ['Nombre', 'Genero', 'Pais', 'Ciudad', 'Estado', ''],
  },
  {
    label: 'Asociaciones',
    value: 'asociaciones',
    columns: ['Nombre', 'País', , 'Teléfono', 'Mascotas', 'Recaudado', 'Estado', ''],
  },
];

const ITEMS_PER_PAGE = 8;

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('users');
  const [tableData, setTableData] = useState<any>([]);
  const [backup, setBackup] = useState<any>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const { sesion } = useUserSesion();
  const dispatch = useAppDispatch();
  const { actualize } = useAppSelector(state => state.pets);


  useEffect(() => { dispatch(setActualize()); }, [dispatch]);



  useEffect(() => {
    async function fetchData() {
      if (sesion) {
        try {
          const { data } = await axios.get(`${process.env.NEXT_PUBLIC_API_BACK}/${activeTab}`, {
            headers: {
              Authorization: `Bearer ${sesion?.token}`,
            },
          });
          setTableData(data);
          setBackup(data);
          setCurrentPage(1);
        } catch (error) {
          console.log(error);
        }
      }
    }
    fetchData();
  }, [activeTab, sesion, actualize]);

  const handleTabChange = (value: string) => {
    setActiveTab(value);
  };

  useEffect(() => {
    async function fetchData() {
      try {
        if (searchTerm) {
          const { data } = await axios.get(`${process.env.NEXT_PUBLIC_API_BACK}/${activeTab}/search?name=${searchTerm}`, {
            headers: {
              Authorization: `Bearer ${sesion?.token}`,
            },
          });
          setTableData(data);
          setBackup(data);
          setCurrentPage(1);
        } else {
          setTableData(backup);
        }
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [activeTab, backup, searchTerm, sesion?.token]);

  const handleFilter = (value: string) => {
    if (value === 'eliminados') {
      setTableData(backup.filter((d: any) => !d.isActive));
    } else if (value === 'activos') {
      setTableData(backup.filter((d: any) => d.isActive));
    } else if (activeTab === 'animals' && value !== 'all') {
      setTableData(backup.filter((d: any) => d.status === value));
    } else if (value === 'all') {
      dispatch(setActualize());
      setTableData(backup);
    }
    setCurrentPage(1);
  };

  let tableColumns;
  if (activeTab === 'users') {
    tableColumns = TABS[0].columns;
  } else if (activeTab === 'animals') {
    tableColumns = TABS[1].columns;
  } else if (activeTab === 'asociaciones') {
    tableColumns = TABS[2].columns;
  }

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const paginatedData = tableData.slice(startIndex, endIndex);

  return (
    <>
      <CardHeader floated={false} shadow={false} className="rounded-none">
        <div className="mb-8 flex items-center justify-between gap-8">
          <div>
            <Typography variant="h5" color="blue-gray">
              ADMIN DASHBOARD
            </Typography>
            <Typography color="gray" className="mt-1 font-normal">
              Administra la informacion de la aplicacion.
            </Typography>
          </div>
          {activeTab !== 'animals' ?
            <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
              <Button variant="outlined" color="blue-gray" size="sm" key='all' onClick={() => handleFilter('all')}>
                Ver todos
              </Button>
              <Button className="flex items-center gap-3" color="blue" size="sm" key='activos' onClick={() => handleFilter('activos')}>
                Activos
              </Button>
              <Button className="flex items-center gap-3" color="red" size="sm" key='eliminados' onClick={() => handleFilter('eliminados')}>
                Eliminados
              </Button>
            </div>
            :
            <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
              <Button variant="outlined" color="blue-gray" size="sm" key='all' onClick={() => handleFilter('all')}>
                Ver todos
              </Button>
              <Button className="flex items-center gap-3" color="green" size="sm" key='sin hogar' onClick={() => handleFilter('homeless')}>
                Sin hogar
              </Button>
              <Button className="flex items-center gap-3" color="blue" size="sm" key='pendiente' onClick={() => handleFilter('pending')}>
                Pendiente
              </Button>
              <Button className="flex items-center gap-3" color="red" size="sm" key='adoptado' onClick={() => handleFilter('adopted')}>
                Adoptado
              </Button>
            </div>
          }
        </div>
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <Tabs value={activeTab} className="w-full md:w-max" onChange={handleTabChange}>
            <TabsHeader className='z-0'>
              {TABS.map(({ label, value }) => (
                <Tab key={value} value={value} onClick={() => handleTabChange(value)}>
                  &nbsp;&nbsp;{label}&nbsp;&nbsp;
                </Tab>
              ))}
            </TabsHeader>
          </Tabs>
          <div className="w-full md:w-72">
            <Input
              label="Search"
              icon={<MagnifyingGlassIcon className="h-5 w-5" />}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </CardHeader>
      <Table tableData={paginatedData} tableColumns={tableColumns} activeTab={activeTab} actualize={actualize}></Table>
      <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
        <Typography variant="small" color="blue-gray" className="font-normal">
          Page {currentPage} of {Math.ceil(tableData.length / ITEMS_PER_PAGE)}
        </Typography>
        <div className="flex gap-2">
          <Button
            variant="outlined"
            color="blue-gray"
            size="sm"
            disabled={currentPage === 1}
            onClick={() => handlePageChange(currentPage - 1)}
          >
            Previous
          </Button>
          <Button
            variant="outlined"
            color="blue-gray"
            size="sm"
            disabled={currentPage === Math.ceil(tableData.length / ITEMS_PER_PAGE)}
            onClick={() => handlePageChange(currentPage + 1)}
          >
            Next
          </Button>
        </div>
      </CardFooter>
    </>
  );
}
