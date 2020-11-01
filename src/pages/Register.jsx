import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { useForm } from "react-hook-form";
import axios from "axios";
import SubmitButton from "../components/SubmitButton";
import Header from "../components/Header";

const Register = () => {
  const { register, handleSubmit } = useForm();

  const [uploadFile, setUploadFile] = useState(null);
  const [submiting, setSubmiting] = useState(false);

  const onDrop = useCallback((acceptedFiles) => {
    console.log(acceptedFiles);
    setUploadFile(acceptedFiles[0]);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  const onSubmit = async (data) => {
    const { fullName, userName, description, email } = data;

    if (!uploadFile) return;

    console.log(fullName, userName, description, email);

    const formData = new FormData();
    formData.append("file", uploadFile);
    formData.append("user_name", userName);
    formData.append("email", email);
    formData.append("description", description);
    formData.append("full_name", fullName);

    try {
      setSubmiting(true);
      const resp = await axios({
        method: "post",
        url: "http://127.0.0.1:8000/register/",
        data: formData,
        headers: { "Content-Type": "multipart/form-data" },
      });
      console.log(resp);
      if ((resp.statusText = "OK")) setSubmiting(false);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="bg-gray-200 min-h-screen h-full font-sans flex flex-col items-center">
      <Header />
      <main className="mt-16 mb-8 w-full flex flex-col items-center">
        <div className="max-w-4xl mx-4">
          <h2 className="pb-1 font-bold text-3xl text-center text-indigo-700 border-b-2 border-indigo-600">
            Register
          </h2>

          <div className="w-full flex flex-col items-center ">
            <form
              className="max-w-xl w-full text-gray-200 mt-4 px-8 md:px-0"
              action="#"
              method="post"
              autoComplete="off"
              onSubmit={handleSubmit(onSubmit)}
            >
              <label htmlFor="full_name" className="sr-only">
                Full name
              </label>
              <input
                name="fullName"
                className="bg-gray-700 mt-4 md:mx-2 border border-gray-600 rounded-lg py-2 px-4 block w-full"
                type="text"
                placeholder="Full name"
                id="full_name"
                ref={register({ required: true, maxLength: 20 })}
              />

              <label htmlFor="user_name" className="sr-only">
                User name
              </label>
              <input
                name="userName"
                className="bg-gray-700 mt-4 md:mx-2 border border-gray-600 rounded-lg py-2 px-4 block w-full"
                type="text"
                placeholder="User name"
                id="user_name"
                ref={register({ required: true, maxLength: 20 })}
              />

              <label htmlFor="description" className="sr-only">
                Description
              </label>
              <input
                name="description"
                className="bg-gray-700 mt-4 md:mx-2 border border-gray-600 rounded-lg py-2 px-4 block w-full"
                type="text"
                placeholder="Your custom description."
                id="description"
                maxLength="25"
                ref={register({ required: true, maxLength: 25 })}
              />

              <label htmlFor="email" className="sr-only">
                Your email
              </label>
              <input
                name="email"
                className="bg-gray-700 mt-4 md:mx-2 border border-gray-600 rounded-lg py-2 px-4 block w-full"
                type="email"
                placeholder="john@email.com"
                id="email"
                ref={register({ required: true, maxLength: 20 })}
              />

              <label
                {...getRootProps()}
                className={`w-full text-gray-600 md:mx-2 mt-4 flex text-lg py-3 px-2 border-2 border-dashed border-gray-600 ${
                  isDragActive ? "bg-green-200" : ""
                }`}
              >
                {uploadFile ? (
                  uploadFile.name
                ) : (
                  <div>
                    <span className="text-indigo-600 ">
                      Upload a file &nbsp;
                    </span>{" "}
                    <span>or drag and drop</span>
                  </div>
                )}
              </label>
              <input
                name="uploadFile"
                className="hidden bg-gray-700 md:mx-2 border border-gray-600 rounded-lg py-2 px-4 w-full"
                type="text"
                placeholder="Image"
                id="image"
                {...getInputProps()}
              />

              <div className="flex flex-col md:flex-row md:-mx-2">
                <SubmitButton
                  color="bg-blue-600"
                  text="Create Account"
                  submiting={submiting}
                />
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Register;
