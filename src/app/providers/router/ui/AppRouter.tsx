import { Route, Routes } from 'react-router-dom';
import { memo, Suspense, useMemo } from 'react';
import { routeConfig } from 'shared/config/routeConfig/routeConfig';
import { PageLoader } from 'shared/ui/PageLoader/PageLoader';
import { useSelector } from 'react-redux';
import { getUserAuthData } from 'entities/User';

const AppRouter = () => {
  const isAuth = useSelector(getUserAuthData);

  const routes = useMemo(() => Object.values(routeConfig).filter((route) => (!(route.authOnly && !isAuth))), [isAuth]);

  return (

    <Routes>
      {routes.map(({ element, path }) => (
        <Route
          key={path}
          path={path}
          element={(
            <Suspense fallback={<PageLoader />}>
              <div className="page-wrapper">
                {element}
              </div>
            </Suspense>
          )}
        />
      ))}
    </Routes>
  );
};

export default memo(AppRouter);
