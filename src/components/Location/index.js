import { LocationComponent } from './styles';

const Location = ({ location }) => {
  return (
    <LocationComponent>
      {location.length === 1 ? (
        <>
          <span>{location[0]}</span>
        </>
      ) : (
        <>
          {location[0]} {'>'} <span> {location[1]}</span>
        </>
      )}
    </LocationComponent>
  );
};

export default Location;
