import React from 'react'

    const Types = ({ types }) => {
      return (
        <div>
          <center><h1>Type List</h1></center>
          {types.map((type) => (
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">{type.value}</h5>
              </div>
            </div>
          ))}
        </div>
      )
    };

    export default Types