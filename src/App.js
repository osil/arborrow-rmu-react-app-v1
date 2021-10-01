import React from "react";
import { QueryClient, QueryClientProvider } from 'react-query'
import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import Footer from "./components/Footer";
import { BrowserRouter as Router,Switch,Route } from "react-router-dom";
import DetailPage from "./pages/DetailPage";
import Page404Page from "./pages/Page404Page";
import AboutPage from "./pages/AboutPage";


const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
     
        <NavBar />
        <Switch>
                <Route exact path="/">
                  <HomePage />
                </Route>
                <Route path="/page404">
                  <Page404Page />
                </Route>
                <Route path="/about">
                  <AboutPage />
                </Route>
                
                
                <Route path="/detail/:id">
                  <DetailPage/>
                </Route>
                
              </Switch>
        
        <Footer />
        
      </Router>
      </QueryClientProvider>
  );
}

export default App;
