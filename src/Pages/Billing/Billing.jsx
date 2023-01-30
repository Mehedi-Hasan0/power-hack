import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";

const Billing = ({ userData }) => {
  const [billing, setBilling] = useState([]);

  const {
    data: viewBilling = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["viewBilling"],
    queryFn: async () => {
      const res = await fetch(
        "https://power-hack-server-livid.vercel.app/api/billing-list"
      );
      const data = await res.json();
      setBilling(data);
      return data;
    },
  });
  // console.log(billing);

  const handleBilling = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const paidAmount = form.payableAmaount.value;
    const date = new Date();

    const billing = {
      name,
      email,
      phone,
      paidAmount,
      date,
    };
    // console.log(billing);
    fetch("https://power-hack-server-livid.vercel.app/api/add-billing", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(billing),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          alert("Bills added!");
          // setBilling(null);
          refetch();
        } else {
          console.log(data.message);
        }
      });
  };
  return (
    <>
      <section className=" my-7" aria-label="table-head">
        <div className="px-auto max-w-screen-2xl 2xl:mx-auto sm:mx-14 lg:mx-16 py-2 bg-slate-300 flex flex-row justify-between px-4">
          <div className="flex flex-row gap-10 items-center">
            <h3 className="font-['poppins'] text-lg">Billings</h3>
            <input
              type="text"
              placeholder="Search here"
              className="border-[1.5px] border-black border-opacity-40 w-[300px] p-1"
            />
          </div>
          <div>
            <label htmlFor="booking-modal" className="btn btn-sm rounded-[2px]">
              Add New Bill
            </label>
            <input
              type="checkbox"
              id="booking-modal"
              className="modal-toggle"
            />
            <div className="modal text-neutral ">
              <div className="modal-box relative">
                <label
                  htmlFor="booking-modal"
                  className="btn btn-sm btn-circle absolute right-2 top-2"
                >
                  ✕
                </label>
                <h3 className="text-lg font-bold">Add Bills</h3>
                <form
                  onSubmit={handleBilling}
                  className="grid grid-cols-1 gap-5 mt-6"
                >
                  <input
                    name="name"
                    type="text"
                    placeholder="Your Name"
                    className="input w-full input-bordered"
                  />
                  <input
                    name="email"
                    type="email"
                    placeholder="Email Address"
                    className="input w-full input-bordered"
                  />
                  <input
                    name="phone"
                    type="number"
                    placeholder="Phone Number"
                    className="input w-full input-bordered"
                  />
                  <input
                    name="payableAmaount"
                    type="number"
                    placeholder="Payable Amount"
                    className="input w-full input-bordered"
                  />
                  <br />
                  <input
                    className=" w-full btn btn-neutral"
                    type="submit"
                    value="submit"
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <tr className="border-b border-gray-200 hover:bg-gray-100">
                      <td className="py-3 px-6 text-left whitespace-nowrap border-r">
                        <div className="flex items-center">
                          <span className="font-medium">React Project</span>
                        </div>
                      </td>
                      <td className="py-3 px-6 text-left whitespace-nowrap border-r">
                        <div className="flex items-center">
                          <span className="font-medium">React Project2</span>
                        </div>
                      </td>
                      <td className="py-3 px-6 text-left whitespace-nowrap border-r">
                        <div className="flex items-center">
                          <span className="font-medium">React Project3</span>
                        </div>
                      </td>
                      <td className="py-3 px-6 text-left whitespace-nowrap border-r">
                        <div className="flex items-center">
                          <span className="font-medium">React Project4</span>
                        </div>
                      </td>
                      <td className="py-3 px-6 text-left whitespace-nowrap border-r">
                        <div className="flex items-center">
                          <span className="font-medium">React Project5</span>
                        </div>
                      </td>
                      <td className="py-3 px-6 text-left whitespace-nowrap border-r">
                        <div className="flex items-center">
                          <span className="font-medium">React Project6</span>
                        </div>
                      </td>
                    </tr> */}

      <section aria-label="table-body">
        <div className="overflow-x-auto">
          <div className="flex items-center justify-center bg-gray-100 font-['poppins] overflow-hidden px-auto max-w-screen-2xl 2xl:mx-auto sm:mx-14 lg:mx-16">
            <div className="w-full">
              <div className="bg-white shadow-md rounded mb-6">
                <table className="table w-full">
                  <thead>
                    <tr className=" text-center">
                      <th class="py-3 px-6 text-left">Billing ID</th>
                      <th class="py-3 px-6 text-left">Full Name</th>
                      <th class="py-3 px-6 text-center">Email</th>
                      <th class="py-3 px-6 text-center">Phone</th>
                      <th class="py-3 px-6 text-center">Paid Amount</th>
                      <th class="py-3 px-6 text-center">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {billing.map((bills, i) => (
                      <tr key={bills._id} className="hover text-center">
                        <td className="py-3 px-6 text-left whitespace-nowrap border-r">
                          {bills._id}
                        </td>
                        <td className="py-3 px-6 text-left whitespace-nowrap border-r">
                          {bills.name}
                        </td>
                        <td className="py-3 px-6 text-left whitespace-nowrap border-r">
                          {bills.email}
                        </td>
                        <td className="py-3 px-6 text-left whitespace-nowrap border-r">
                          {bills.phone}
                        </td>
                        <td className="py-3 px-6 text-left whitespace-nowrap border-r">
                          {bills.paidAmount}
                        </td>
                        <td className="py-3 px-6 text-left whitespace-nowrap border-r">
                          action btn
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Billing;
