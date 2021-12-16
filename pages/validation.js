import { useForm } from "react-hook-form";
import axios from "axios";
import https from 'https'
import { useRouter } from "next/router";
import { useToast } from "../hooks/useToast";
import React, { useState, useEffect } from "react";

    export default function Home() {
      // for footer to fetch and display year in the footer
      const [date, setDate] = useState();
      const getYear = () => setDate(new Date().getFullYear());
      useEffect(() => {
        getYear();
      }, []);
      const toast = useToast();
      const { register, handleSubmit, errors, reset } = useForm();
      const router = useRouter();

      async function onSubmitForm(values) {
        let config = {
          method: "POST",
          // for local validation  url: `${process.env.NEXT_PUBLIC_API_URL}/api/otp`,
          url: `${process.env.NEXT_PUBLIC_API_URL}/api/validation`, ///api/validation if there is no validation at the server side
          headers: {
            "Content-Type": "application/json",
          },
           data: values,
          // body: JSON.stringify(data),
        };

        try {
          const response = await axios(config);
          // console.log(response);
          // display on terminal
          if (response.status == 200) {
            // if the request is success make form clear
            reset();
            toast(
              'success',
              'We have sent to 6 digit otp for your phone'
            );
            router.push("/otp");
          }
        } catch (err) {
          //  console.error(err);
          toast(
            'error',
            'please insert valid credintal'
          )
          // toast(
          //   'error',
          //   'plese send the otp we have sent to you'
          // )
        }
      }

    return (
      <div className="b py-16 bg-gray-100 px-4 sm:px-6 h-screen w-screen flex justify-center items-center">
        <div className="mx-auto w-full max-w-2xl rounded-xl bg-white p-8 shadow">
          <div>
            <h1 className="text-center">
              <b>Confirm Your Ticket</b>
            </h1>
            <h2 className="px-10">Ticket number : </h2>
            <h5 className="px-10">Concert Date :</h5>
            <h6 className="px-10">Concert Place :</h6>
            <p className="px-10 mb-2">
              Your Phone <span className="text-center">09101112**</span>
            </p>
          </div>
          <form
            onSubmit={handleSubmit(onSubmitForm)}
            className="grid grid-cols-1 gap-y-6"
          >
            <div>
              <label for="otp" className="sr-only">
                phone
              </label>
              <input
                name="phone"
                type="number"
                ref={register({
                  required: {
                    value: true,
                    message: "please enter your phone number",
                  },
                  minLength: {
                    value: 9,
                    message: "This is too short",
                  },
                  maxLength: {
                    value: 10,
                    message: "This is too long",
                  },
                })}
                className={`block w-full shadow py-3 px-4 placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md focus:outline-none focus:ring-2 ${
                  errors.phone ? "ring-2 ring-red-500" : null
                }`}
                placeholder="enter phone here... "
              />
              <span className="text-red-400 text-sm py-2">
                {errors?.phone?.message}
              </span>
            </div>
            <div>
              <label for="otp" className="sr-only">
                OTP
              </label>
              <input
                name="otp"
                type="number"
                ref={register({
                  required: {
                    value: true,
                    message: "You must enter otp we have sent to you",
                  },
                  minLength: {
                    value: 6,
                    message: "This is too short",
                  },
                  maxLength: {
                    value: 8,
                    message: "This is too long",
                  },
                })}
                className={`block w-full shadow py-3 px-4 placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md focus:outline-none focus:ring-2 ${
                  errors.otp ? "ring-2 ring-red-500" : null
                }`}
                placeholder="enter otp here... "
              />
              <span className="text-red-400 text-sm py-2">
                {errors?.otp?.message}
              </span>
            </div>
            <div>
              <label for="otp" className="sr-only">
                OTP
              </label>
              <input
                name="date"
                type="date"
                ref={register({
                  required: {
                    value: true,
                    message: "You must enter birth date ",
                  },
                  // minLength: {
                  //   value: 6,
                  //   message: "This is too short",
                  // },
                  // maxLength: {
                  //   value: 8,
                  //   message: "This is too long",
                  // },
                })}
                className={`block w-full shadow py-3 px-4 placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md focus:outline-none focus:ring-2 ${
                  errors.date ? "ring-2 ring-red-500" : null
                }`}
                placeholder="enter date here... "
              />
              <span className="text-red-400 text-sm py-2">
                {errors?.date?.message}
              </span>
            </div>
            <div>
              <button
                type="submit"
                className="inline-flex justify-center py-3 px-6 border border-transparent shadow text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Verify OTP
              </button>
              <div className="py-0">
                <p className="text-center">
                  Copy right &copy;cbe {date}{" "}
                  <span className="text-right">
                    <b>Generated By CBE</b>
                  </span>
                </p>
                <p className="text-left"></p>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
