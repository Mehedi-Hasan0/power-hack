import React from "react";

const Billing = () => {
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
            <button className="btn btn-sm rounded-[2px]">Add New Bill</button>
          </div>
        </div>
      </section>
      <section aria-label="table-body">
        <div class="overflow-x-auto">
          <div class="flex items-center justify-center bg-gray-100 font-['poppins] overflow-hidden px-auto max-w-screen-2xl 2xl:mx-auto sm:mx-14 lg:mx-16">
            <div class="w-full">
              <div class="bg-white shadow-md rounded mb-6">
                <table class="min-w-max w-full table-auto">
                  <thead>
                    <tr class="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                      <th class="py-3 px-6 text-left">Billing ID</th>
                      <th class="py-3 px-6 text-left">Full Name</th>
                      <th class="py-3 px-6 text-center">Email</th>
                      <th class="py-3 px-6 text-center">Phone</th>
                      <th class="py-3 px-6 text-center">Paid Amount</th>
                      <th class="py-3 px-6 text-center">Actions</th>
                    </tr>
                  </thead>
                  <tbody class="text-gray-600 text-sm font-light">
                    <tr class="border-b border-gray-200 hover:bg-gray-100">
                      <td class="py-3 px-6 text-left whitespace-nowrap border-r">
                        <div class="flex items-center">
                          <span class="font-medium">React Project</span>
                        </div>
                      </td>
                      <td class="py-3 px-6 text-left whitespace-nowrap border-r">
                        <div class="flex items-center">
                          <span class="font-medium">React Project2</span>
                        </div>
                      </td>
                      <td class="py-3 px-6 text-left whitespace-nowrap border-r">
                        <div class="flex items-center">
                          <span class="font-medium">React Project3</span>
                        </div>
                      </td>
                      <td class="py-3 px-6 text-left whitespace-nowrap border-r">
                        <div class="flex items-center">
                          <span class="font-medium">React Project4</span>
                        </div>
                      </td>
                      <td class="py-3 px-6 text-left whitespace-nowrap border-r">
                        <div class="flex items-center">
                          <span class="font-medium">React Project5</span>
                        </div>
                      </td>
                      <td class="py-3 px-6 text-left whitespace-nowrap border-r">
                        <div class="flex items-center">
                          <span class="font-medium">React Project6</span>
                        </div>
                      </td>
                    </tr>
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
