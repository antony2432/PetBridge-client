import { useAppDispatch } from '@/redux/hook';
import { UpdateEmail, UpdatePassword } from '@/redux/thunk';
import { XMarkIcon } from '@heroicons/react/24/outline';
import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
  Input,
  Typography,
} from '@material-tailwind/react';
import React, { Fragment, useState } from 'react';
export default function Security({ User }: any) {
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
  const handleOpen2 = () => {
    setOpen(false);
    setOpen2(!open2);
  };
  const [inputEmail, setInputEmail] = useState('');
  const [inputPassword, setInputPassword] = useState('');
  const [inputNewPassword, setInputNewPasswordP] = useState('');
  const [inputPasswordP, setInputPasswordP] = useState('');
  const [repeatPasswordP, setRepeatPasswordP] = useState('');
  const handleNewEmail = () => {
    if (!inputEmail.length || !inputPassword.length) {
      return alert('Completa los campos para continuar');
    }
    var obj = {
      id: User[0].id,
      inputEmail,
      inputPassword,
    };
    const data = new FormData();
    data.append('id', User[0].id);
    data.append('newEmail', inputEmail);
    data.append('password', inputPassword);
    console.log(obj);
    dispatch(UpdateEmail(data));
    setVerify(!verify);
  };
  const handleNewPassword = () => {
    if (!inputNewPassword.length || !inputPasswordP.length || !repeatPasswordP) {
      return alert('Completa los campos para continuar');
    }
    var obj = {
      id: User[0].id,
      inputNewPassword,
      repeatPasswordP,
      inputPasswordP,
    };
    const data = new FormData();
    data.append('id', User[0].id);
    data.append('newPassword', inputNewPassword);
    data.append('password', inputPasswordP);
    data.append('password', repeatPasswordP);
    console.log(obj);
    dispatch(UpdatePassword(data));
    setVerify2(!verify);
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
              value={User[0] ? User[0].email : null}
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
                <div className="flex items-center justify-between">
                  <DialogHeader>Completa los campos</DialogHeader>
                  <XMarkIcon className="mr-3 h-5 w-5" onClick={handleOpen4} />
                </div>
                <DialogBody divider>
                  <div className="grid gap-6">
                    <Typography>Escribe tu nuevo correo</Typography>
                    <Input
                      label="Email"
                      value={inputEmail}
                      type="email"
                      onChange={(e) => setInputEmail(e.target.value)}
                    />
                    <Typography>Escribe tu contraseña para confirmar</Typography>
                    <Input
                      label="Password"
                      type="password"
                      value={inputPassword}
                      onChange={(e) => setInputPassword(e.target.value)}
                    />
                  </div>
                </DialogBody>
                <DialogFooter className="space-x-2">
                  <Button variant="outlined" color="red" onClick={handleOpen4}>
                    close
                  </Button>
                  <Button variant="gradient" color="green" onClick={handleNewEmail}>
                    Change email
                  </Button>
                </DialogFooter>
              </Dialog>
            </Fragment>
            <Dialog open={verify} handler={()=>()=>setVerify(false)}>
                <DialogHeader>Ya se ha enviado una notificacion a tu correo, Ve y verificalo!</DialogHeader>
                <DialogFooter>
                  <Button variant="gradient" color="green" onClick={()=>setVerify(false)}>
                    <span>Ok</span>
                  </Button>
                </DialogFooter>
              </Dialog>
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
                <div className="flex items-center justify-between">
                  <DialogHeader>Completa los campos</DialogHeader>
                  <XMarkIcon className="mr-3 h-5 w-5" onClick={handleOpen2} />
                </div>
                <DialogBody divider>
                  <div className="grid gap-6">
                    <Typography>Escribe tu antigua contraseña</Typography>
                    <Input label="Password" type="password" value={inputPasswordP} onChange={(e)=>setInputPasswordP(e.target.value)}/>
                    <Typography>Escribe tu nueva contraseña</Typography>
                    <Input label="Password" type="password" value={inputNewPassword} onChange={(e)=>setInputNewPasswordP(e.target.value)}/>
                    <Input label="Repeat password" type="password" value={repeatPasswordP} onChange={(e)=>setRepeatPasswordP(e.target.value)}/>
                  </div>
                </DialogBody>
                <DialogFooter className="space-x-2">
                  <Button variant="outlined" color="red" onClick={handleOpen2}>
                    close
                  </Button>
                  <Button variant="gradient" color="green" onClick={handleNewPassword}>
                    Change Password
                  </Button>
                </DialogFooter>
              </Dialog>
              <Dialog open={verify2} handler={()=>()=>setVerify2(false)}>
                <DialogHeader>Ya se ha enviado una notificacion a tu correo, Ve y verificalo!</DialogHeader>
                <DialogFooter>
                  <Button variant="gradient" color="green" onClick={()=>setVerify2(false)}>
                    <span>Ok</span>
                  </Button>
                </DialogFooter>
              </Dialog>
            </Fragment>
          </span>
        </div>
      </div>
      <div className="flex justify-end mt-32"></div>
    </div>
  );
}
