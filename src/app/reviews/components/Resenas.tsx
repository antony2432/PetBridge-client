import useUserSesion from '@/hook/userSesion';
import { useAppDispatch, useAppSelector } from '@/redux/hook';
import { GReviews } from '@/redux/thunk';
import { Card, Typography, CardBody, Avatar, Rating } from '@material-tailwind/react';
import { useEffect } from 'react';

const TABLE_HEAD = ['Users', 'Type', 'Date', 'Stars', 'Review'];
export default function Resenas() {
  const dispatch = useAppDispatch();
  const { sesion } = useUserSesion();
  const { reviews } = useAppSelector((s) => s.reviews);
  useEffect(() => {
    if (!reviews.length) {
      dispatch(GReviews(sesion));
    }
  }, []);
  console.log(sesion);
  return (
    <Card className="h-full w-full  bg-orange-100">
      {/* <CardHeader floated={false} shadow={false} className="rounded-none">
        <div className="mb-8 flex items-center justify-between gap-8">
          <div>
            <Typography variant="h5" color="blue-gray">
              Members list
            </Typography>
            <Typography color="gray" className="mt-1 font-normal">
              See information about all members
            </Typography>
          </div>
          <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
            <Button variant="outlined" color="blue-gray" size="sm">
              view all
            </Button>
            <Button className="flex items-center gap-3" color="blue" size="sm">
              <UserPlusIcon strokeWidth={2} className="h-4 w-4" /> Add member
            </Button>
          </div>
        </div>
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <Tabs value="all" className="w-full md:w-max">
            <TabsHeader>
              {TABS.map(({ label, value }) => (
                <Tab key={value} value={value}>
                  &nbsp;&nbsp;{label}&nbsp;&nbsp;
                </Tab>
              ))}
            </TabsHeader>
          </Tabs>
          <div className="w-full md:w-72">
            <Input label="Search" icon={<MagnifyingGlassIcon className="h-5 w-5" />} />
          </div>
        </div>
      </CardHeader> */}
     { reviews ? <CardBody className="overflow-scroll px-0 bg-GoldenYellow-100">
        <table className="mt-4 w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              {TABLE_HEAD.map((head) => (
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
            {reviews.map((Array: any, index: any) => {
              const isLast = index === reviews.length - 1;
              const classes = isLast ? 'p-4' : 'p-4 border-b border-blue-gray-50';
              return (
                <tr key={Array.user?.firstName}>
                  <td className={classes}>
                    <div className="flex items-center gap-3">
                      <Avatar src={Array.user ? Array.user.image : 'http://cdn.onlinewebfonts.com/svg/img_181369.png' } alt={sesion?.rol === 'user' ? sesion.firstName : Array.asociacion.firstname } size="sm" />
                      <div className="flex flex-col">
                      {sesion?.rol === 'user' ? <Typography variant="small" color="blue-gray" className="font-normal">
                          {sesion.firstName} {sesion.lastName}
                        </Typography> :  <Typography variant="small" color="blue-gray" className="font-normal">
                          {Array.asociacion.nameOfFoundation}
                        </Typography> }
                      </div>
                    </div>
                  </td>
                  <td className={classes}>
                    <div className="flex flex-col">
                      <Typography variant="small" color="blue-gray" className="font-normal">
                        {Array.user ? 'User' : 'Fundation'}
                      </Typography>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal opacity-70"
                      ></Typography>
                    </div>
                  </td>
                  <td className={classes}>
                    <Typography variant="small" color="blue-gray" className="font-normal">
                      {Array.createdAt.slice(0, 10)}
                    </Typography>
                  </td>

                  <td className={classes}>
                    <div className="w-max">
                      <Rating value={parseInt(Array.rate)} readonly></Rating>
                    </div>
                  </td>
                  <td className={classes}>
                    <div className="text-center">
                      <h1>{Array.review}</h1>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </CardBody> : null}
      {/* <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
        <Typography variant="small" color="blue-gray" className="font-normal">
          Page 1 of 10
        </Typography>
        <div className="flex gap-2">
          <Button variant="outlined" color="blue-gray" size="sm">
            Previous
          </Button>
          <Button variant="outlined" color="blue-gray" size="sm">
            Next
          </Button>
        </div>
      </CardFooter> */}
    </Card>
  );
}
