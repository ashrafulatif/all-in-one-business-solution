"use client";
import { useRouter } from "next/navigation";
import Header from "@/components/publicheader";
import React, { ChangeEvent, SyntheticEvent, useState } from "react";
import axios from "axios";

function Forget() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    console.log("Submit button clicked!");
    try {
      const response = await postData();
      alert("Check email");
      setEmail("");
      router.push("/reset-password");
    } catch (error) {
      setError("Invalid Credentital");
    }
  };

  async function postData() {
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_API_ENDPOINT}/auth/forgot-password`,
        { email },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      return response;
    } catch (error) {
      throw new Error("Error logging in");
    }
  }
  return (
    <div>
      <Header />
      <div className="min-w-screen min-h-screen items-center bg-gradient-to-b from-customCyan to-customWhite">
        <div className="flex justify-center items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-40">
          <div className="bg-white m-10 min-w-96 shadow-2xl rounded-lg ring-offset-2 ring-2 border">
            <h1 className="text-4xl font-extrabold flex justify-center mt-8">
              Forget Password
            </h1>
            <form onSubmit={handleSubmit}>
              <table className="m-8 flex justify-center">
                <tbody>
                  <tr>
                    <td>
                      <label className="text-lg">Email</label>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <input
                        type="email"
                        name="email"
                        value={email}
                        onChange={handleChangeEmail}
                        className="bg-customGray rounded w-full py-2 px-3 text-customBlack2 leading-tight focus:outline-none focus:shadow-outline"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <button className="bg-customTeal text-white rounded-lg font-semibold w-full mt-2 py-2 px-3">
                        Submit
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Forget;
