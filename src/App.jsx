import styled from 'styled-components';
import IndexPage from './pages/IndexPage';
import GlobalStyles from './styles/GlobalStyles';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Latest from './components/Latest';
import MenPage from './pages/MenPage';
import WomenPage from './pages/WomenPage';
import HospitalityPage from './pages/HospitalityPage';
import ShopPage from './pages/ShopPage';
import Watch from './pages/Watch';
import SearchPage from './pages/SearchPage';

const Container = styled.div`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
`;

function App() {
  return (
    <Container>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route index element={<IndexPage />} />
          <Route path="latest" element={<Latest />} />
          <Route path="men" element={<MenPage />} />
          <Route path="women" element={<WomenPage />} />
          <Route path="hospitality" element={<HospitalityPage />} />
          <Route path="shop" element={<ShopPage />} />
          <Route path="watch" element={<Watch />} />
          <Route path="search" element={<SearchPage />} />
        </Routes>
      </BrowserRouter>
    </Container>
  );
}

export default App;

// return (
//   <AuthProvider>
//     <CitiesProvider>
//       <BrowserRouter>
//         <Suspense fallback={<SpinnerFullPage />}>
//           <Routes>
//             <Route index element={<HomePage />} />

//             <Route path="products" element={<Products />} />
//             <Route path="pricing" element={<PricingPage />} />
//             <Route path="login" element={<Login />} />
//             <Route
//               path="app"
//               element={
//                 <ProtectedRoute>
//                   <AppLayout />
//                 </ProtectedRoute>
//               }
//             >
//               <Route index element={<Navigate replace to="cities" />} />
//               <Route path="cities" element={<CityList />} />
//               <Route path="cities/:id" element={<City />} />
//               <Route path="countries" element={<CountryList />} />
//               <Route path="form" element={<Form />} />
//             </Route>
//             <Route path="*" element={<PageNotFound />} />
//           </Routes>
//         </Suspense>
//       </BrowserRouter>
//     </CitiesProvider>
//   </AuthProvider>
