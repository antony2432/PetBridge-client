import React from 'react';
import useUserSesion from '@/hook/userSesion';
import { Rating, Spinner, Textarea } from '@material-tailwind/react';
import { Field, Form, Formik } from 'formik';
import { Button } from '@material-tailwind/react';
import { useAppDispatch, useAppSelector } from '@/redux/hook';
import { PReviews, UReviews } from '@/redux/thunk';
import { BsPencilFill } from 'react-icons/bs';
export default function RatingForm() {
  const { sesion } = useUserSesion();
  const { reviews } = useAppSelector((s) => s.reviews);
  const [rate, setRated] = React.useState(0);
  const [edit, setEdit] = React.useState(false);
  const dispatch = useAppDispatch();
  function handleReviews(value: any) {
    if (sesion?.rol === 'user')
      value = {
        ...value,
        idUser: sesion?.id,
        rate,
      };
    else {
      value = {
        ...value,
        idAsociacion: sesion?.id,
        rate,
      };
    }
    var obj = {
      value,
      sesion,
    };
    if (edit) {
      var obj2 = {
        id: reviews.find((r: any) => r.idUser === sesion?.id).id,
        value,
        sesion,
      };
      dispatch(UReviews(obj2));
      return setEdit(!edit);
    }
    dispatch(PReviews(obj));
  }
  return (
    <div>
      {reviews ? (
        <div>
          {!reviews.find((r: any) => r.idUser === sesion?.id) || edit ? (
            <Formik
              initialValues={{
                review: '',
              }}
              onSubmit={handleReviews}
            >
              <Form className="flex flex-col w-96 p-5 gap-4 bg-orange-100 rounded shadow-lg">
                <div className="flex w-full items-center justify-center font-semibold">
                  <h1>{sesion?.firstName}</h1>
                </div>
                <div className="flex justify-start items-center gap-12">
                  <h1>Rating</h1> <Rating value={rate} onChange={(value) => setRated(value)} />
                </div>
                <div className="flex items-start justify-between">
                  <h1>Message</h1>{' '}
                  <div className="w-3/4">
                    <Field
                      as={Textarea}
                      className="justify-end"
                      label="message"
                      type="text"
                      name="review"
                    />
                  </div>
                </div>
                <Button className="bg-DarkBrown-500 w-full items-center" type="submit">
                  Enviar
                </Button>
              </Form>
            </Formik>
          ) : (
            <div className="flex flex-col w-96 p-5 gap-4 bg-orange-100 rounded shadow-lg">
              <div className="flex w-full items-center justify-center font-semibold gap-2">
                <h1>
                  {sesion?.firstName} {sesion?.lastName}
                </h1>
                <button onClick={() => setEdit(!edit)}>
                  <BsPencilFill />
                </button>
              </div>
              <div className="flex justify-start items-center gap-2">
                <h1>Rating</h1>{' '}
                <Rating
                  value={parseInt(reviews.find((r: any) => r.idUser === sesion?.id).rate)}
                  readonly
                />
              </div>
              <h2>Review: {reviews.find((r: any) => r.idUser === sesion?.id).review}</h2>
            </div>
          )}
        </div>
      ) : (
        <Spinner></Spinner>
      )}
    </div>
  );
}
