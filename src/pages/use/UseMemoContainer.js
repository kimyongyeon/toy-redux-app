import React from 'react'
import queryString from 'query-string';

function UseMemoContainer({ location, match }) {

   const query = queryString.parse(location.search);
   console.log(query);

   return (
      <div>
         UseMemo... {match.params.name}
      </div>
   )
}

export default UseMemoContainer
