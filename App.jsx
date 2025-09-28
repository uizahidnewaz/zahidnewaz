import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { isAuthenticated } from './utils/auth';

function App({ Component, pageProps }) {
  const router = useRouter();
  
  useEffect(() => {
    // Check authentication on route changes
    const handleRouteChange = (url) => {
      console.log("Route changing to:", url);
      
      // Protect dashboard routes
      if (url.startsWith('/dashboard') && !isAuthenticated()) {
        console.log("Unauthorized access attempt, redirecting to login");
        router.push('/login');
      }
      
      // Redirect from login if already authenticated
      if (url === '/login' && isAuthenticated()) {
        console.log("Already authenticated, redirecting to dashboard");
        router.push('/dashboard');
      }
    };
    
    // Log initial authentication status
    console.log("App mounted, auth status:", isAuthenticated());
    
    // Set up route change listeners
    router.events.on('routeChangeStart', handleRouteChange);
    
    // Check initial route
    handleRouteChange(router.pathname);
    
    return () => {
      router.events.off('routeChangeStart', handleRouteChange);
    };
  }, [router]);

  return <Component {...pageProps} />;
}

export default App;
        />
      </Routes>
    </Router>
  );
}

export default App;
