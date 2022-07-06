import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import DataTable from './body/data-table/data-table.component';
import CitySelectorComponent from './header/city-selector/city-selector.component';
import FooterComponent from './footer/footer.component';
import './app.container.css';

export default function AppContainer() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container fixed>
        <CitySelectorComponent />
        <div id="app-body">
          <DataTable />
        </div>
        <FooterComponent />
      </Container>
    </React.Fragment>
  );
}
