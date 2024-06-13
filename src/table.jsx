import React, { Component } from "react";
import { students } from "./studentdata";

class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: students,
    };
  }
  render() {
    let data = this.state.data;
    const onFilter = (evt) => {
      console.log(evt.target.value);
      let query = evt.target.value.toLowerCase();
      let regEx = RegExp(query, "gi");
      const filteredData = students.filter((value) => value.name.match(regEx));
      this.setState({ data: filteredData });
    };
    return (
      <>
        <div className="container max-w-[1200px] mx-auto ">
          <h1 className="p-2 text-3xl font-semibold text-center">
            React Table
          </h1>
          <input
            onChange={onFilter}
            className="w-80 m-auto block mt-5 border p-2 rounded-md"
            type="text"
            placeholder="Nmae filter..."
            aria-label="Name filter"
          />
          <div className="mt-10 p-4 rounded-md border ">
            <table className="min-w-full ">
              <thead className="bg-[#F5F5F5] text-black ">
                <tr>
                  <th scope="col" className="text-sm  px-6 py-4 text-left">
                    ID
                  </th>
                  <th scope="col" className="text-sm  px-6 py-4 text-left">
                    NAME
                  </th>
                  <th scope="col" className="text-sm  px-6 py-4 text-left">
                    AGE
                  </th>
                  <th scope="col" className="text-sm  px-6 py-4 text-left">
                    ADDRESS
                  </th>
                  <th scope="col" className="text-sm   px-6 py-4 text-left">
                    STATUS
                  </th>
                  <th scope="col" className="text-sm  px-6 py-4 text-left">
                    NICKNAME
                  </th>
                  <th scope="col" className="text-sm  px-6 py-4 text-left">
                    UNIV
                  </th>
                  <th scope="col" className="text-sm  px-6 py-4 text-left">
                    JOB
                  </th>
                  <th scope="col" className="text-sm  px-6 py-4 text-left">
                    EDIT
                  </th>
                </tr>
              </thead>
              {data.map(
                ({ id, name, age, address, status, nikname, univ, job }) => {
                  return (
                    <tbody>
                      <tr className="bg-white border-b transition duration-300 ease-in-out hover:bg-[#F5F5F5] hover:cursor-pointer">
                        <td className="px-6 py-2 whitespace-nowrap text-sm  text-gray-900">
                          {id}
                        </td>
                        <td className="text-sm  px-6 py-2 whitespace-nowrap">
                          {name}
                        </td>
                        <td className="text-sm  px-6 py-2 whitespace-nowrap">
                          {age}
                        </td>
                        <td className="text-sm  px-6 py-2 whitespace-nowrap">
                          {address}
                        </td>
                        <td className="text-sm   px-6 py-2 whitespace-nowrap">
                          {status}
                        </td>
                        <td className="text-sm   px-6 py-2 whitespace-nowrap">
                          {nikname}
                        </td>
                        <td className="text-sm   px-6 py-2 whitespace-nowrap">
                          {univ}
                        </td>
                        <td className="text-sm   px-6 py-2 whitespace-nowrap">
                          {job}
                        </td>
                        <td className="text-sm   px-6 py-2 whitespace-nowrap">
                          <button className="py-2 px-4  bg-white text-blue-600">
                            Edit
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  );
                }
              )}
            </table>
          </div>
        </div>
      </>
    );
  }
}

export default Table;
