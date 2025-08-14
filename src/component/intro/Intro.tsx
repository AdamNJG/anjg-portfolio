import { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

export default function Intro () {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  
  useEffect(() => {
    const redirect = searchParams.get('redirect');
    if (redirect && checkRedirect(redirect)) {
      navigate(redirect, { replace: true });
    }
  }, [searchParams, navigate]);

  const checkRedirect = (redirect: string) : boolean => {
    const validRedirects: string[] = ['/about', '/projects'];

    if (validRedirects.includes(redirect)) {
      return true;
    }
    return false;
  };

  return (<>Intro</>);
}