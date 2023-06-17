'use client';
import { useState } from 'react';
import Table from './components/table';
import {
  CardHeader,
  Input,
  Typography,
  Button,
  Tabs,
  TabsHeader,
  Tab,
} from '@material-tailwind/react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

const TABS = [
  {
    label: 'Usuarios',
    value: 'usuarios',
    columns: ['Usuario', 'Contacto', 'Estado', 'Creación', ''],
  },
  {
    label: 'Animales',
    value: 'animales',
    columns: ['Nombre', 'Especie', 'Género', 'País', 'Estado', 'Ciudad', ''],
  },
  {
    label: 'Fundaciones',
    value: 'fundaciones',
    columns: ['Nombre', 'Email', 'Teléfono', 'País', 'Dirección', 'Estado', 'Cracion', ''],
  },
];

const TABLE_ROWS = [
  // Datos de la tabla para la pestaña "Usuarios"
  {
    img: 'https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-3.jpg',
    name: 'John Michael',
    email: 'john@creative-tim.com',
    job: 'Manager',
    org: 'Organization',
    online: true,
    date: '23/04/18',
  },
  {
    img: 'https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-2.jpg',
    name: 'Alexa Liras',
    email: 'alexa@creative-tim.com',
    job: 'Programator',
    org: 'Developer',
    online: false,
    date: '23/04/18',
  },
  // ... otros datos de la tabla para la pestaña "Usuarios"
];

const ANIMAL_TABLE_ROWS = [
  // Datos de la tabla para la pestaña "Animales"
  {
    img: 'https://example.com/animal1.jpg',
    name: 'Animal 1',
    // ... otros campos
  },
  {
    img: 'https://example.com/animal2.jpg',
    name: 'Animal 2',
    // ... otros campos
  },
  // ... otros datos de la tabla para la pestaña "Animales"
];

const FOUNDATION_TABLE_ROWS = [
  // Datos de la tabla para la pestaña "Fundaciones"
  {
    img: 'https://example.com/foundation1.jpg',
    name: 'Fundación 1',
    // ... otros campos
  },
  {
    img: 'https://example.com/foundation2.jpg',
    name: 'Fundación 2',
    // ... otros campos
  },
  // ... otros datos de la tabla para la pestaña "Fundaciones"
];

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('usuarios');

  const handleTabChange = (value) => {
    setActiveTab(value);
  };

  let tableData;
  let tableColumns;
  if (activeTab === 'usuarios') {
    tableData = TABLE_ROWS;
    tableColumns = TABS[0].columns;
  } else if (activeTab === 'animales') {
    tableData = ANIMAL_TABLE_ROWS;
    tableColumns = TABS[1].columns;
  } else if (activeTab === 'fundaciones') {
    tableData = FOUNDATION_TABLE_ROWS;
    tableColumns = TABS[2].columns;
  }

  return (
    <>
      <CardHeader floated={false} shadow={false} className="rounded-none">
        <div className="mb-8 flex items-center justify-between gap-8">
          <div>
            <Typography variant="h5" color="blue-gray">
              ADMIN DASHBOARD
            </Typography>
            <Typography color="gray" className="mt-1 font-normal">
              See information about all members
            </Typography>
          </div>
          <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
            <Button variant="outlined" color="blue-gray" size="sm">
              Ver todos
            </Button>
            <Button className="flex items-center gap-3" color="blue" size="sm">
              Activos
            </Button>
            <Button className="flex items-center gap-3" color="red" size="sm">
              Eliminados
            </Button>
          </div>
        </div>
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <Tabs value={activeTab} className="w-full md:w-max" onChange={handleTabChange}>
            <TabsHeader>
              {TABS.map(({ label, value }) => (
                <Tab key={value} value={value} onClick={() => handleTabChange(value)}>
                  &nbsp;&nbsp;{label}&nbsp;&nbsp;
                </Tab>
              ))}
            </TabsHeader>
          </Tabs>
          <div className="w-full md:w-72">
            <Input label="Search" icon={<MagnifyingGlassIcon className="h-5 w-5" />} />
          </div>
        </div>
      </CardHeader>
      <Table tableData={tableData} tableColumns={tableColumns}></Table>
    </>
  );
}
