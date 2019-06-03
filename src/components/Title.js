import React from 'react';

export default function Title({name,title}) {
  return (
    <div className="row">
        <div className="col-10 mx-auto mt-5 text-center text-title">
            <h1 className="text-transform font-weight-bold display-5">
                {name} <strong className="text-success display-4"> {title}</strong>
            </h1>
        </div>
    </div>
  );
}
