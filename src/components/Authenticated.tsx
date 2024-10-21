import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Authenticated = (WrappedComponent: React.FC) => {
  const ComponentAuth = () => {
    const navigate = useNavigate();

    useEffect(() => {
      const token = localStorage.getItem('token');

      if (!token) {
        navigate('/login');
      };
    }, [navigate])

    return <WrappedComponent />;
  }

  return ComponentAuth;
}

export default Authenticated;