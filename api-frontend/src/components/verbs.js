import React from 'react'

    const Verbs = ({ verbs }) => {
      return (
        <div>
          <center><h1>Verb List</h1></center>
          {verbs.map((verb) => (
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">{verb.value}</h5>
              </div>
            </div>
          ))}
        </div>
      )
    };

    export default Verbs