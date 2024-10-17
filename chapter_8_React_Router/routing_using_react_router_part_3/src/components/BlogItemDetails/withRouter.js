import { useParams, useNavigate, useLocation } from 'react-router-dom';

export function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    let params = useParams();
    let location = useLocation();
    let navigate = useNavigate();
    return (
      <Component
        {...props}
        router={{ params, location, navigate }}
      />
    );
  }

  return ComponentWithRouterProp;
}
