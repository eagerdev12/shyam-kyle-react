import { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { ApolloProvider } from '@apollo/client'
import { client } from './services/graphql/client';

import TitleServiceRest from './services/rest/TitleServiceRest';
import TitleService from './services/graphql/titles/TitleService';
import TitleComponent from './components/TitleComponent';

function App() {

  const [items, setItems] = useState([]);


  useEffect(() => {
    initialize()
  }, []);

  const initialize = async () => {
    try {
      let promises = []
      promises.push(TitleService.getTitles())
      promises.push(TitleServiceRest.getTitles())

      const result = await Promise.allSettled(promises);
      console.log('result data: ', result);
      if (result[0].status === 'fulfilled') {
        setItems(result[0].value.data.getTitles)
      }
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <ApolloProvider client={client}>
      <div className="App">
        <div className="navbar navbar-light bg-primary">
          <div className="container">
            <a className="navbar-brand text-white font-weight-bold">
              <h2>DEMO Streaming</h2>
            </a>
            <div className="d-flex">
              <button className="btn light me-2 text-white" type="button">Login</button>
              <button className="btn btn btn-secondary" type="button">Start your free trial</button>
            </div>
          </div>
        </div>

        <div className="d-flex bg-secondary p-2">
          <div className="container">
            <h2 className="text-white">Popular Movies</h2>
          </div>
        </div>

        <div className="container d-flex flex-wrap mt-3">
          {
            items.map((item, index) => (
              <div key={index} className="col-md-2 col-sm-3 p-1">
                <TitleComponent item={item} />
              </div>
            ))
          }
        </div>
      </div>
    </ApolloProvider>

  )
}

export default App
