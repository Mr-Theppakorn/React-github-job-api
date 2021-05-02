import './App.css';
import React, { useState } from 'react';
import useFetchJob from './useFetchJob';
import { Container } from 'react-bootstrap';
import Job from './Job';
import JobPage from './JobPage';
import SearchForm from './SearchForm';

function App() {
  const [params, setParams] = useState({});
  const [page, setPage] = useState(1);
  const { jobs, loading, done, error, hasNextPage } = useFetchJob(params, page);

  function handleParamChange(e) {
    const param = e.target.name
    const value = e.target.value
    setPage(1)
    setParams(preParams => {
      return { ...preParams, [param]: value }
    })
  }

  return (
    <Container className="my-4">
      <h1 className="mb-4" >Github Jobs</h1>
      <SearchForm params={params} onParamChange={handleParamChange} />
      <JobPage page={page} setPage={setPage} hasNextPage={hasNextPage} />
      {loading && <h3>Loading...</h3>}
      {done && <h5>Found Data</h5>}
      {error && <h1>Error. Try Again.</h1>}
      {jobs.map(job => {
        return <Job key={job.id} job={job} />
      })}
    </Container>
  );
}

export default App;
