/*
@node_command.js Copyright (c) 2023 Jalasoft
2643 Av Melchor Perez de Olguin, Colquiri Sud, Cochabamba, Bolivia.
Av. General Inofuentes esquina Calle 20, Edificio Union No 1376, La Paz, Bolivia All rights reserved
This software is the confidential and proprietary information of
Jalasoft, Confidential Information "). You shall not
disclose such Confidential Information and shall use it only in
accordance with the terms of the license agreement you entered into with Jalasoft
*/

import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import { Dashboard } from "./scenes/dashboard";
import NewMeeting from "./scenes/meeting";
import { Form  } from "./scenes/form";
import Aptitude from "./scenes/aptitude";
import Concentration from "./scenes/concentration";
import Logical from "./scenes/logical";
import Reasoning from "./scenes/reasoning";
import Spatial from "./scenes/spatial";
import { ApolloClient, ApolloProvider, InMemoryCache} from '@apollo/client';
import { createUploadLink } from 'apollo-upload-client'
import { Workshop } from "./scenes/workshop";


const client = new ApolloClient({
      cache: new InMemoryCache(),
      link: createUploadLink({
      uri: 'http://localhost:5000/graphql',
    }),
  });

function App() {
  const [theme, colorMode] = useMode();
  return (
  <ApolloProvider client={client}>
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <div className="app">
          <Sidebar />
          <main className="content">
            <Topbar/>
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/form" element={<Form />} />
                <Route path="/meeting" element={<NewMeeting />} />
                <Route path="/aptitude" element={<Aptitude />} />
                <Route path="/concentration" element={<Concentration />} />
                <Route path="/logical" element={<Logical />} />
                <Route path="/reasoning" element={<Reasoning />} />
                <Route path="/spatial" element={<Spatial />} />
                <Route path="/workshop" element={<Workshop />} />
                
              </Routes>        
          </main> 
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  </ApolloProvider>

  );
}

export default App;
