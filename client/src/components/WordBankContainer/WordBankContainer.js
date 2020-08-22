import React from "react";

const WordBankContainer = () => {
  return (
    <div className="card container-fluid">
      <h2>Word Bank</h2>
      <table className="table table-bordered border-bark">
        <thead>
          <tr >
            <th className="text-center " scope="col-md-4">
              Subject
            </th>
            <th className="text-center" scope="col-md-4">
              Word
            </th>
            <th className="text-center" scope="col-md-4">
              Definition
            </th>
          </tr>
        </thead>
        <tbody style={{background:"#fbebcf"}}>
          <tr>
            <td className="mb-3 text-wrap">Subject 1</td>
            <td className="mb-3 text-wrap">Awesome</td>
            <td className="mb-3 text-wrap">extremely impressive or daunting; inspiring great admiration, apprehension, or fear.</td>
          </tr>
          <tr>
            <td className="mb-3 text-wrap">Subject 2</td>
            <td className="mb-3 text-wrap">Pro</td>
            <td className="mb-3 text-wrap">Pro is a Latin root word meaning for. If you make a list of pros and cons, you are listing the reasons for doing something and the reasons not to, respectively. Pro is also the shortened form of the word "professional," often referring to professional sports.</td>
          </tr>
          <tr>
            <td className="mb-3 text-wrap">Subject 1</td>
            <td className="mb-3 text-wrap">Awesome</td>
            <td className="mb-3 text-wrap">extremely impressive or daunting; inspiring great admiration, apprehension, or fear.</td>
          </tr>
          <tr>
            <td className="mb-3 text-wrap">Subject 2</td>
            <td className="mb-3 text-wrap">Pro</td>
            <td className="mb-3 text-wrap">Pro is a Latin root word meaning for. If you make a list of pros and cons, you are listing the reasons for doing something and the reasons not to, respectively. Pro is also the shortened form of the word "professional," often referring to professional sports.</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default WordBankContainer;