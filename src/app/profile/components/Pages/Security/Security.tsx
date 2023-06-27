import { useAppDispatch } from '@/redux/hook';
import { UpdateEmail, UpdatePassword } from '@/redux/thunk';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { validateEmail, validatePassword } from './validates';
import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
  Typography,
} from '@material-tailwind/react';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import React, { Fragment, useState } from 'react';
import useUserSesion from '@/hook/userSesion';
import { useRouter } from 'next/navigation';

export default function Security({ User, rol }: any) {
  const { sesion, signoffSesion } = useUserSesion();
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);
  const [open1, setOpen1] = useState(false);
  const handleOpen1 = () => setOpen1(!open1);
  const [open4, setOpen4] = useState(false);
  const [verify, setVerify] = useState(false);
  const [verify2, setVerify2] = useState(false);
  const handleOpen4 = () => {
    setOpen1(false);
    setOpen4(!open4);
  };
  const [open2, setOpen2] = React.useState(false);
  const handleOff = () => {
    router.push('/');
  };
  const handleOpen2 = () => {
    setOpen(false);
    setOpen2(!open2);
  };
  const handleNewEmail = (value: any) => {
    if (!value.newEmail.length || !value.password.length) {
      return alert('Completa los campos para continuar');
    }
    var obj = {
      signoffSesion,
      handleOff,
      sesion: {
        rol: rol,
        token: sesion?.token,
      },
      data: value,
    };
    console.log(obj);
    dispatch(UpdateEmail(obj));
    setVerify(!verify);
    setOpen4(!open4);
  };
  const handleNewPassword = (value: any) => {
    if (!value.newPassword.length || !value.password.length || !value.repeatPassword.length) {
      return alert('Completa los campos para continuar');
    }
    var obj = {
      signoffSesion,
      handleOff,
      sesion: {
        rol: rol,
        token: sesion?.token,
      },
      data: value,
    };
    dispatch(UpdatePassword(obj));
    setVerify2(!verify2);
    setOpen2(!open2);
  };
  return (
    <div className="ml-20 w-11/12">
      <h1>OPCIONES DE SEGURIDAD</h1>
      <div className="border-b-2 border-#042F2E mt-5 w-24"></div>
      <div className="flex mt-5">
        <div className="w-1/2">
          <h1 className="text-verde750 font-semibold">Email</h1>
          <span className="flex">
            <input
              placeholder="Gmail"
              value={User ? User.email : null}
              className="rounded border p-2 pl-5 w-full mt-2 placeholder-esmeralda700 border-esmeralda700 bg-verde50"
              disabled
            ></input>
            <Fragment>
              <Button
                onClick={handleOpen1}
                color="deep-orange"
                className="mt-2 ml-1 w-36"
                variant="gradient"
              >
                Cambiar
              </Button>
              <Dialog open={open1} handler={handleOpen1}>
                <DialogHeader>Estas seguro que quieres cambiar tu email?</DialogHeader>
                <DialogFooter>
                  <Button variant="text" color="red" onClick={handleOpen1} className="mr-1">
                    <span>Cancel</span>
                  </Button>
                  <Button variant="gradient" color="green" onClick={handleOpen4}>
                    <span>Confirm</span>
                  </Button>
                </DialogFooter>
              </Dialog>

              <Dialog open={open4} handler={handleOpen4}>
                <Formik
                  initialValues={{
                    id: User.id,
                    newEmail: '',
                    password: '',
                  }}
                  onSubmit={handleNewEmail}
                  validate={validateEmail}
                >
                  <Form>
                    <div className="flex items-center justify-between">
                      <DialogHeader>Completa los campos</DialogHeader>
                      <XMarkIcon className="mr-3 h-5 w-5" onClick={handleOpen4} />
                    </div>
                    <DialogBody divider>
                      <div className="grid gap-6">
                        <Typography>Escribe tu nuevo correo</Typography>
                        <Field
                          className="py-2 rounded border pl-3 text-blue-gray-800"
                          label="Email"
                          type="email"
                          name="newEmail"
                        />
                        <div className="text-deep-orange-900">
                          <ErrorMessage name="newEmail"></ErrorMessage>
                        </div>
                        <Typography>Escribe tu contraseña para confirmar</Typography>
                        <Field
                          className="py-2 rounded border pl-3 text-blue-gray-800"
                          label="Password"
                          type="password"
                          name="password"
                        />
                        <div className="text-deep-orange-900">
                          <ErrorMessage name="password"></ErrorMessage>
                        </div>
                      </div>
                    </DialogBody>
                    <DialogFooter className="space-x-2">
                      <Button variant="outlined" color="red" onClick={handleOpen4}>
                        close
                      </Button>
                      <Button type="submit" variant="gradient" color="green">
                        Change email
                      </Button>
                    </DialogFooter>
                  </Form>
                </Formik>
              </Dialog>
            </Fragment>
            {/* 
            <Dialog open={verify} handler={() => () => setVerify(false)}>
              <DialogHeader>
                Ya se ha enviado una notificacion a tu correo, Ve y verificalo!
              </DialogHeader>
              <DialogFooter>
                <Button variant="gradient" color="green" onClick={() => setVerify(false)}>
                  <span>Ok</span>
                </Button>
              </DialogFooter>
            </Dialog>

            <Dialog open={verify} handler={() => () => setVerify(false)}>
              <DialogHeader>
                Ocurrio un error con la verificacion de datos intenta nuevamente
              </DialogHeader>
              <DialogFooter>
                <Button variant="gradient" color="green" onClick={() => setVerify(false)}>
                  <span>Ok</span>
                </Button>
              </DialogFooter>
            </Dialog> */}
          </span>
        </div>
        <div className="p-2"></div>
        <div className="w-1/2">
          <h1 className="text-verde750 font-semibold ">Password</h1>
          <span className="flex">
            <input
              placeholder="Password"
              value="*********"
              className="rounded border w-full p-2 pl-5 mt-2 border-gris600 bg-verde50"
              disabled
            ></input>
            <Fragment>
              <Button
                onClick={handleOpen}
                color="deep-orange"
                className="mt-2 ml-1 w-36"
                variant="gradient"
              >
                Cambiar
              </Button>
              <Dialog open={open} handler={handleOpen}>
                <DialogHeader>Estas seguro que quieres cambiar tu contraseña?</DialogHeader>
                <DialogFooter>
                  <Button variant="text" color="red" onClick={handleOpen} className="mr-1">
                    <span>Cancel</span>
                  </Button>
                  <Button variant="gradient" color="green" onClick={handleOpen2}>
                    <span>Confirm</span>
                  </Button>
                </DialogFooter>
              </Dialog>
              <Dialog open={open2} handler={handleOpen}>
                <Formik
                  initialValues={{
                    id: User.id,
                    password: '',
                    newPassword: '',
                    repeatPasword: '',
                  }}
                  onSubmit={handleNewPassword}
                  validate={validatePassword}
                >
                  <Form>
                    <div className="flex items-center justify-between">
                      <DialogHeader>Completa los campos</DialogHeader>
                      <XMarkIcon className="mr-3 h-5 w-5" onClick={handleOpen2} />
                    </div>
                    <DialogBody divider>
                      <div className="grid gap-6">
                        <Typography>Escribe tu antigua contraseña</Typography>
                        <Field
                          className="py-2 rounded border pl-3 text-blue-gray-800"
                          label="Password"
                          type="password"
                          name="password"
                        />
                        <div className="text-deep-orange-900">
                          <ErrorMessage name="password"></ErrorMessage>
                        </div>
                        <Typography>Escribe tu nueva contraseña</Typography>
                        <Field
                          className="py-2 rounded border pl-3 text-blue-gray-800"
                          label="Password"
                          type="password"
                          name="newPassword"
                        />
                        <div className="text-deep-orange-900">
                          <ErrorMessage name="newPassword"></ErrorMessage>
                        </div>
                        <Field
                          className="py-2 rounded border pl-3 text-blue-gray-800"
                          label="Repeat password"
                          type="password"
                          name="repeatPassword"
                        />
                        <div className="text-deep-orange-900">
                          <ErrorMessage name="repeatPassword"></ErrorMessage>
                        </div>
                      </div>
                    </DialogBody>
                    <DialogFooter className="space-x-2">
                      <Button variant="outlined" color="red" onClick={handleOpen2}>
                        close
                      </Button>
                      <Button variant="gradient" color="green" type="submit">
                        Change Password
                      </Button>
                    </DialogFooter>
                  </Form>
                </Formik>
              </Dialog>
       {/*       <Dialog open={verify2} handler={() => () => setVerify2(false)}>
                <DialogHeader>
                  Ya se ha enviado una notificacion a tu correo, Ve y verificalo!
                </DialogHeader>
                <DialogFooter>
                  <Button variant="gradient" color="green" onClick={() => setVerify2(false)}>
                    <span>Ok</span>
                  </Button>
                </DialogFooter>
              </Dialog>  */}
            </Fragment>
          </span>
        </div>
      </div>
      <div className="flex justify-end mt-32"></div>
    </div>
  );
}
