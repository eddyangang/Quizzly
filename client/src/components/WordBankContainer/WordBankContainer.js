import React from "react";

const WordBankContainer = () => {
  return (
    <div className="card border-dark mb-3 .text-nowrap table-responsive" style={{ width: "40rem", margin:"10px",padding:"10px"}}>
      <h2>Word Bank</h2>
      <table className="table table-bordered table-fixed">
        <thead>
          <tr className="table-dark table-info">
            <th className="text-center " scope="col-md-4">
              Subject
            </th>
            <th className="text-center" scope="col-md-4">
              Word
            </th>
            <th className="text-center" scope="col-md-4">
              Defination
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className=  "table-info">
            <td className="border-dark mb-3">dfgfghfghfghfgh</td>
            <td className="border-dark mb-3">dfgdfgdfgdfgdfgdfgdfgfghfghfghfgh</td>
            <td className="border-dark mb-3">adddefinationdfgdfgdfgdfgdfgdfgdfgdfgfgdfgdfgdfgdfgdfgdfgdfgdfgdfgdfg</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default WordBankContainer;