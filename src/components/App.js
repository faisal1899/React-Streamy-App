import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './Header';
import StreamCreate from './streams/StreamCreate';
import StreamDelete from './streams/StreamDelete';
import StreamEdit from './streams/StreamEdit';
import StreamList from './streams/StreamList';
import StreamShow from './streams/StreamShow';

const App = () => {
  return (
    <div className="ui container">
      <BrowserRouter>
        <div>
          <Header />
          <Route path="/" exact component={StreamList} />
          <Route path="/new" component={StreamCreate} />
          <Route path="/edit/:id" component={StreamEdit} />
          <Route path="/delete/:id" component={StreamDelete} />
          <Route path="/show/:id" component={StreamShow} />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;