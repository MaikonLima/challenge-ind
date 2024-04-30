import { ThemeProvider } from 'styled-components'
import './App.css'
import { BrowserRouter } from 'react-router-dom'
import theme from './styles/themes/light'
import { GlobalStyles } from './styles/global'
import Routes from './routes/routes'
import { StyledToast } from './styles/toastStyles'
import { QueryClient, QueryClientProvider } from 'react-query'
import { AuthProvider } from './context/AuthProvider'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});



function App() {
  return (
    <QueryClientProvider client={queryClient}>

      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <AuthProvider>
           <Routes />
          </AuthProvider>

          <StyledToast
            position="top-right"
            autoClose={3500}
            newestOnTop={false}
            rtl={false}
            closeOnClick
            pauseOnFocusLoss
            pauseOnHover
          />
        </ThemeProvider>
      </BrowserRouter>
    </QueryClientProvider>
  )
}

export default App
